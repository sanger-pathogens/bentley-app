import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';

import funders from '../content/funders';

const Funders = () => (
  <Box bgcolor="black" color="text.primary" textAlign="center" p={2}>
    <Typography variant="h4" gutterBottom>
      Our Funders
    </Typography>
    <Grid container>
      {funders.map((funder, i) => (
        <Grid item key={i} xs={12} sm={6} md={4} lg={4}>
          <Box p={2}>
            <Typography variant="body1">
              <Link
                style={{ maxWidth: '250px', display: 'inline-flex' }}
                href={funder.url}
              >
                {funder.name}
              </Link>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Funders;
