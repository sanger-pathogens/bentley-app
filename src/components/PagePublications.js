import React from 'react';
import { Box, Typography } from '@material-ui/core';

import Page from './Page';
import Publications from './Publications';

const PagePublications = () => {
  return (
    <Page>
      <Box>
        <Typography variant="h2">Publications</Typography>
        <Publications />
      </Box>
    </Page>
  );
};

export default PagePublications;
