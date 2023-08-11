import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import funders from '../content/funders';

const useStyles = makeStyles(theme => ({
  funders: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Funders = () => {
  const classes = useStyles();
  return (
    <div id={'funders'}>
      <Box
        className={classes.funders}
        bgcolor="black"
        color="text.primary"
        textAlign="center"
        p={2}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Our funders
          </Typography>
          <Grid container>
            {funders.map((funder, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={4}>
                <Box p={2}>
                  <Typography variant="body1">
                    <Link
                      style={{ maxWidth: '250px', display: 'inline-flex' }}
                      href={funder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {funder.name}
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Funders;
