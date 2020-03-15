import React from 'react';
import { Box, Typography } from '@material-ui/core';

import Page from './Page';
import ReseachLongScroll from './ResearchLongScroll';
import TreeOfLife from './TreeOfLife';
// import TeamLeftRight from './TeamLeftRight';
// import TeamLeft from './TeamLeft';

const PageTeamVariants = () => {
  return (
    <Page>
      <Box>
        <TreeOfLife />
        <Typography variant="h2">Variant 1: Long Scroll</Typography>
        <ReseachLongScroll />
        {/* <Typography variant="h2">Variant 2: Left-Right</Typography>
        <TeamLeftRight />
        <Typography variant="h2">Variant 3: Left</Typography>
        <TeamLeft /> */}
      </Box>
    </Page>
  );
};

export default PageTeamVariants;
