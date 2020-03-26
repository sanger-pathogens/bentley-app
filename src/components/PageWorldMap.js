import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';

import Page from './Page';
import WorldMap from './WorldMap';

import junoAffiliates from '../content/juno-affiliates';

const tooltipContentRenderer = d => (
  <Typography variant="subtitle2">
    <strong>{d.affiliation}</strong>
    <br />
    {d.address}
  </Typography>
);
const pointGroups = [
  {
    name: 'Juno',
    fill: '#F9A03F',
    // fill: '#00bcd4',
    points: junoAffiliates,
    tooltipContentRenderer,
  },
  //   { name: 'GPS', fill: '#9AD4D6', points: locationsGPS },
];

const PageWorldMap = () => {
  return (
    <Page>
      <Box>
        <Typography variant="h2">World Map</Typography>
        <Typography>
          This is adapted from{' '}
          <Link href="https://observablehq.com/@mbostock/tree-of-life">
            this example
          </Link>
          . It parses an input file in Newick format, so could be swapped if we
          have a different, more appropriate tree. It might go well with the
          species of interest section.
        </Typography>
        <WorldMap pointGroups={pointGroups} />
      </Box>
    </Page>
  );
};

export default PageWorldMap;
