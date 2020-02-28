import React from 'react';
import { Box, AppBar } from '@material-ui/core';
import raw from 'raw.macro';

import Page from './Page';
import WorldMap from './WorldMap';
import Content from './Content';

const mdHome = raw('../content/home.md');

const PageHome = () => {
  return (
    <React.Fragment>
      <Box bgcolor="black">
        <WorldMap />
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
