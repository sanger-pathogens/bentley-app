import React from 'react';
import { Box } from '@material-ui/core';

import Page from './Page';
import Team from './Team';

const PageTeamVariants = () => {
  return (
    <Page>
      <Box>
        <Team />
      </Box>
    </Page>
  );
};

export default PageTeamVariants;
