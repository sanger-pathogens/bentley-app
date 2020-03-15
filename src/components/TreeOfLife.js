import React, { useRef } from 'react';
import useMeasure from 'use-measure';
import raw from 'raw.macro';
import { hierarchy, cluster, ascending, max } from 'd3';

import newickParser from '../newickParser';

// see https://observablehq.com/@mbostock/tree-of-life
// data originally from https://itol.embl.de/
const newickTreeOfLifeData = raw('../content/life.txt');
const treeOfLifeData = newickParser(newickTreeOfLifeData);
const ourSpecies = [
  'Neisseria_meningitidis_A',
  'Neisseria_meningitidis_B',
  'Streptococcus_agalactiae_III',
  'Streptococcus_agalactiae_V',
  'Streptococcus_pneumoniae_R6',
  'Streptococcus_pneumoniae_TIGR4',
];

function linkStep(startAngle, startRadius, endAngle, endRadius) {
  const c0 = Math.cos((startAngle = ((startAngle - 90) / 180) * Math.PI));
  const s0 = Math.sin(startAngle);
  const c1 = Math.cos((endAngle = ((endAngle - 90) / 180) * Math.PI));
  const s1 = Math.sin(endAngle);
  return (
    'M' +
    startRadius * c0 +
    ',' +
    startRadius * s0 +
    (endAngle === startAngle
      ? ''
      : 'A' +
        startRadius +
        ',' +
        startRadius +
        ' 0 0 ' +
        (endAngle > startAngle ? 1 : 0) +
        ' ' +
        startRadius * c1 +
        ',' +
        startRadius * s1) +
    'L' +
    endRadius * c1 +
    ',' +
    endRadius * s1
  );
}

function linkConstant(d) {
  return linkStep(d.source.x, d.source.y, d.target.x, d.target.y);
}

function linkVariable(d) {
  return linkStep(d.source.x, d.source.radius, d.target.x, d.target.radius);
}

function setRadius(d, y0, k) {
  d.radius = (y0 += d.data.length) * k;
  if (d.children) d.children.forEach(d => setRadius(d, y0, k));
}

function maxLength(d) {
  return d.data.length + (d.children ? max(d.children, maxLength) : 0);
}

const TreeOfLife = () => {
  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  const outerRadius = width / 2;
  const innerRadius = outerRadius - 170;

  const root = hierarchy(treeOfLifeData, d => d.branchset)
    .sum(d => (d.branchset ? 0 : 1))
    .sort(
      (a, b) => a.value - b.value || ascending(a.data.length, b.data.length)
    );

  const clusterer = cluster()
    .size([360, innerRadius])
    .separation((a, b) => 1);

  clusterer(root);
  setRadius(root, (root.data.length = 0), innerRadius / maxLength(root));

  const links = root.links();
  const leaves = root.leaves();

  return (
    <div ref={nodeRef} style={{ width: '100%', height: 600 }}>
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute' }}
        viewBox={`${-outerRadius} ${-outerRadius} ${width ? width : 0} ${
          width ? width : 0
        }`}
      >
        <g stroke="white" fill="none">
          {links.map(link => (
            <path d={linkVariable(link)} />
          ))}
        </g>
        <g fontFamily="sans-serif">
          {leaves.map(leaf => {
            const isOurSpecies = ourSpecies.indexOf(leaf.data.name) >= 0;
            return (
              <text
                fontSize={isOurSpecies ? '14px' : '10px'}
                fill={isOurSpecies ? 'white' : '#777'}
                dy=".31em"
                transform={`rotate(${leaf.x - 90}) translate(${innerRadius +
                  4},0)${leaf.x < 180 ? '' : ' rotate(180)'}`}
                textAnchor={leaf.x < 180 ? 'start' : 'end'}
              >
                {leaf.data.name.replace(/_/g, ' ')}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default TreeOfLife;
