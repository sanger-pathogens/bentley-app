import React from 'react';
import { Box, Typography } from '@material-ui/core';

import Page from './Page';
import TeamGrid from './TeamGrid';
import TeamLeftRight from './TeamLeftRight';
import TeamLeft from './TeamLeft';

const PageTeamVariants = () => {
  return (
    <Page>
      <Box>
        <Typography variant="h2">Variant 1: Grid</Typography>
        <TeamGrid />
        <Typography variant="h2">Variant 2: Left-Right</Typography>
        <TeamLeftRight />
        <Typography variant="h2">Variant 3: Left</Typography>
        <TeamLeft />
      </Box>
    </Page>
  );
};

export default PageTeamVariants;
