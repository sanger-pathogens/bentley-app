import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';

import Page from './Page';
// import ReseachLongScroll from './ResearchLongScroll';
import TreeOfLife from './TreeOfLife';
// import TeamLeftRight from './TeamLeftRight';
// import TeamLeft from './TeamLeft';

const PageTreeOfLife = () => {
  return (
    <Page>
      <Box>
        <Typography variant="h2">Tree of Life</Typography>
        <Typography>
          This is adapted from{' '}
          <Link href="https://observablehq.com/@mbostock/tree-of-life">
            this example
          </Link>
          . It parses an input file in Newick format, so could be swapped if we
          have a different, more appropriate tree. It might go well with the
          species of interest section.
        </Typography>
        <TreeOfLife />
        {/* <Typography variant="h2">Variant 1: Long Scroll</Typography>
        <ReseachLongScroll /> */}
        {/* <Typography variant="h2">Variant 2: Left-Right</Typography>
        <TeamLeftRight />
        <Typography variant="h2">Variant 3: Left</Typography>
        <TeamLeft /> */}
      </Box>
    </Page>
  );
};

export default PageTreeOfLife;
