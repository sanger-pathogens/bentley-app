import React, { useRef } from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import useMeasure from 'use-measure';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

import junoAffiliates from '../content/juno-affiliates';
import gpsAffiliates from '../content/gps-affiliates';

const affiliates = Object.values(
  [
    ...junoAffiliates.map(d => ({ ...d, inJuno: true })),
    ...gpsAffiliates.map(d => ({ ...d, inGPS: true })),
  ].reduce((acc, d) => {
    const { inJuno, inGPS, ...rest } = d;
    // first visit
    if (!acc[d.affiliation]) {
      acc[d.affiliation] = {
        ...rest,
        projects: [],
      };
    }

    // from juno
    if (inJuno) {
      acc[d.affiliation].projects.push('juno');
    }

    // from gps
    if (inJuno) {
      acc[d.affiliation].projects.push('gps');
    }

    return acc;
  }, {})
);

const tooltipContentRenderer = d => (
  <Typography variant="subtitle2">
    <strong>{d.affiliation}</strong>
    <br />
    {d.country}
  </Typography>
);
const pointGroups = [
  {
    fill: '#00bcd4',
    points: affiliates,
    tooltipContentRenderer,
  },
];

const Circle = React.forwardRef((props, ref) => (
  <circle {...props} ref={ref}>
    Bin
  </circle>
));

const WorldMap = () => {
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
                  return (
                    <Tooltip
                      key={j}
                      title={group.tooltipContentRenderer(point)}
                      arrow
                    >
                      <Circle {...{ cx, cy, r: 4 }} />
                    </Tooltip>
                  );
                })}
              </g>
            ))}
          </g>
        ) : null}
      </svg>
    </div>
  );
};

export default WorldMap;
