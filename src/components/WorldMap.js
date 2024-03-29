import React, { useRef } from 'react';
import { Tooltip, Typography } from '@mui/material';
import useMeasure from 'use-measure';
import { geoNaturalEarth1, geoPath, geoGraticule10, min } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

import { background, highlight } from '../theme';
import affiliates from '../content/collaborators';

const tooltipContentRenderer = d => (
  <Typography variant="subtitle2" align="center">
    {d.items.map((item, i) => (
      <React.Fragment key={i}>
        <strong>{item.affiliation}</strong>
        <br />
        {item.country}
        {i < d.items.length - 1 ? (
          <React.Fragment>
            <br />
            <hr style={{ borderTop: background }} />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    ))}
  </Typography>
);

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

  const pointsWithScreenCoordinates = affiliates.map((point, j) => {
    const [cx, cy] = projection([point.longitude, point.latitude]);
    return { ...point, cx, cy };
  });

  const threshold = 8;
  const euclidean = (p1, p2) =>
    Math.sqrt((p1.cx - p2.cx) ** 2 + (p1.cy - p2.cy) ** 2);

  const mergedPointsWithScreenCoordinates = pointsWithScreenCoordinates
    .reduce((acc, point) => {
      // acc is array of arrays of points
      if (acc.length > 0) {
        const minDistancesPerMergedPointArray = acc.map(pointArray =>
          min(pointArray.map(other => euclidean(point, other)))
        );
        const minDistance = min(minDistancesPerMergedPointArray);

        if (minDistance < threshold) {
          // merge points if they are close on screen
          const minDistanceIndex = minDistancesPerMergedPointArray.indexOf(
            minDistance
          );
          acc[minDistanceIndex].push(point);
        } else {
          acc.push([point]);
        }
      } else {
        acc.push([point]);
      }

      return acc;
    }, [])
    .map(d => ({ cx: d[0].cx, cy: d[0].cy, items: d }));

  return (
    <div ref={nodeRef} style={{ width: '100%', height: 600 }}>
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute' }}
        fill="none"
        stroke="#666"
        viewBox={`0 0 ${width ? width : 0} ${height ? height : 0}`}
      >
        <g>
          <path stroke={highlight} d={path(graticule)} strokeWidth="0.5" />
        </g>
        <g>
          <path stroke={highlight} d={path(outline)} />
          {features.map((feature, i) => (
            <path
              stroke="#444"
              fill="#666"
              key={i}
              d={path(feature)}
              strokeWidth="0.5"
            />
          ))}
        </g>
        {/* <g stroke="black" fill="white">
          {pointsWithScreenCoordinates.map((point, j) => (
            <Tooltip key={j} title={tooltipContentRenderer(point)} arrow>
            <circle key={j} {...{ cx: point.cx, cy: point.cy, r: 4 }} />
            </Tooltip>
          ))}
        </g> */}
        <g stroke="black" fill="white">
          {mergedPointsWithScreenCoordinates.map((point, j) => (
            <Tooltip key={j} title={tooltipContentRenderer(point)} arrow>
              <Circle key={j} {...{ cx: point.cx, cy: point.cy, r: 4 }} />
            </Tooltip>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WorldMap;
