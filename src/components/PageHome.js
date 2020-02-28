import React from 'react';
import { Box, AppBar } from '@material-ui/core';
import raw from 'raw.macro';

import Page from './Page';
import WorldMap from './WorldMap';
import Content from './Content';
import locationsJuno from '../content/locationsJuno';
import locationsGPS from '../content/locationsGPS';

const pointGroups = [
  { name: 'Juno', fill: '#F9A03F', points: locationsJuno },
  { name: 'GPS', fill: '#9AD4D6', points: locationsGPS },
];

const mdHome = raw('../content/home.md');

const PageHome = () => {
  return (
    <React.Fragment>
      <Box p={2} bgcolor="black">
        <WorldMap pointGroups={pointGroups} />
      </Box>
      <Page>
        <Box color="white">
          <Content md={mdHome} />
        </Box>
      </Page>
    </React.Fragment>
  );
};

export default PageHome;
