import React from 'react';
import { Box, Typography } from '@material-ui/core';

import Page from './Page';
import SoftwareGrid from './SoftwareGrid';
import SoftwareLeft from './SoftwareLeft';

const PageSoftwareVariants = () => {
  return (
    <Page>
      <Box>
        <Typography variant="h2">Variant 1: Grid</Typography>
        <SoftwareGrid />
        <Typography variant="h2">Variant 2: Left</Typography>
        <SoftwareLeft />
      </Box>
    </Page>
  );
};

export default PageSoftwareVariants;
