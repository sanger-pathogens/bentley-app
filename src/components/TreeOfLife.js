import React, { useRef } from 'react';
import useMeasure from 'use-measure';
import raw from 'raw.macro';
import { hierarchy, cluster, ascending, max, extent, arc } from 'd3';

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

// function linkConstant(d) {
//   return linkStep(d.source.x, d.source.y, d.target.x, d.target.y);
// }

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

function deg2Rad(deg) {
  return (deg * Math.PI) / 180;
}

const TreeOfLife = () => {
  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  const outerRadius = width / 2;
  const innerRadius = outerRadius - 200;

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

  const allNodes = root.descendants();
  const nodeHalfAngle = 360 / allNodes.length;
  const bacteriaNode = allNodes.find(d => d.data.name === 'Bacteria');
  const archaeaNode = allNodes.find(d => d.data.name === 'Archaea');
  const eukaryotaNode = allNodes.find(d => d.data.name === 'Eukaryota');
  const bacteriaAngleRange = extent(bacteriaNode.descendants(), d => d.x);
  const archaeaAngleRange = extent(archaeaNode.descendants(), d => d.x);
  const eukaryotaAngleRange = extent(eukaryotaNode.descendants(), d => d.x);
  const arcs = [
    {
      data: { name: 'bacteria', color: '#006064' },
      startAngle: deg2Rad(bacteriaAngleRange[0] - nodeHalfAngle),
      endAngle: deg2Rad(bacteriaAngleRange[1] + nodeHalfAngle),
      padAngle: 0,
      index: 0,
    },
    {
      data: { name: 'archaea', color: '#e65100' },
      startAngle: deg2Rad(archaeaAngleRange[0] - nodeHalfAngle),
      endAngle: deg2Rad(archaeaAngleRange[1] + nodeHalfAngle),
      padAngle: 0,
      index: 1,
    },
    {
      data: { name: 'eukaryota', color: '#1a237e' },
      startAngle: deg2Rad(eukaryotaAngleRange[0] - nodeHalfAngle),
      endAngle: deg2Rad(eukaryotaAngleRange[1] + nodeHalfAngle),
      padAngle: 0,
      index: 2,
    },
  ];

  const arcGenerator = arc()
    .innerRadius(innerRadius + 10)
    .outerRadius(innerRadius + 30);

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
          {arcs.map(arc => (
            <path
              key={arc.index}
              stroke="none"
              fill={arc.data.color}
              d={arcGenerator(arc)}
            />
          ))}
        </g>
        <g stroke="white" fill="none">
          {links.map((link, i) => (
            <path key={i} d={linkVariable(link)} />
          ))}
        </g>
        <g fontFamily="sans-serif">
          {leaves.map(leaf => {
            const isOurSpecies = ourSpecies.indexOf(leaf.data.name) >= 0;
            return (
              <text
                key={leaf.data.name}
                fontSize={isOurSpecies ? '14px' : '10px'}
                fill={isOurSpecies ? 'white' : '#777'}
                dy=".31em"
                transform={`rotate(${leaf.x - 90}) translate(${innerRadius +
                  34},0)${leaf.x < 180 ? '' : ' rotate(180)'}`}
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
