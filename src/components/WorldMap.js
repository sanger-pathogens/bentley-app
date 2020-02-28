import React, { useRef } from 'react';
import useMeasure from 'use-measure';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

const WorldMap = ({ pointGroups }) => {
  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  // data to draw
  const graticule = geoGraticule10();
  const outline = { type: 'Sphere' };
  const features = feature(world, world.objects.countries).features;

  // build the renderer
  const projection = geoNaturalEarth1()
    .rotate([0, 0])
    .precision(0.1)
    .fitSize([width, height], outline);
  const path = geoPath().projection(projection);

  return (
    <div ref={nodeRef} style={{ width: '100%', height: 600 }}>
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute' }}
        fill="none"
        stroke="#444"
        viewBox={`0 0 ${width ? width : 0} ${height ? height : 0}`}
      >
        <g>
          <path d={path(graticule)} strokeWidth="0.5" />
        </g>
        <g>
          <path d={path(outline)} />
          {features.map((feature, i) => (
            <path fill="black" key={i} d={path(feature)} strokeWidth="1" />
          ))}
        </g>
        {pointGroups ? (
          <g>
            {pointGroups.map((group, i) => (
              <g key={i} fill={group.fill}>
                {group.points.map((point, j) => {
                  const [cx, cy] = projection([
                    point.longitude,
                    point.latitude,
                  ]);
                  return <circle key={j} {...{ cx, cy, r: 4 }} />;
                })}
              </g>
            ))}
          </g>
        ) : null}
        {pointGroups ? (
          <g>
            {pointGroups.map((group, i) => (
              <React.Fragment key={i}>
                <circle
                  fill={group.fill}
                  {...{ cx: 20, cy: 600 - 20 * (i + 1), r: 4 }}
                />
                <text
                  stroke="none"
                  fill="#999"
                  alignmentBaseline="middle"
                  x={30}
                  y={600 - 20 * (i + 1)}
                >
                  {group.name}
                </text>
              </React.Fragment>
            ))}
          </g>
        ) : null}
      </svg>
    </div>
  );
};

export default WorldMap;
