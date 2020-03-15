import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';

import Page from './Page';
import Publications from './Publications';

const PagePublications = () => {
  return (
    <Page>
      <Box>
        <Typography variant="h2">Publications</Typography>
        <Publications />
      </Box>
      <Box pt={3}>
        <Link
          href={
            'https://scholar.google.co.uk/citations?user=rywPBOQAAAAJ&hl=en'
          }
        >
          More publications
        </Link>
      </Box>
    </Page>
  );
};

export default PagePublications;
