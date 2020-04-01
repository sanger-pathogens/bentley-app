import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDownward } from '@material-ui/icons';

const useStyles = makeStyles({
  splash: {
    backgroundImage: 'url(morganlitup.jpg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#464646',
  },
});

const SplashImage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.splash} width="100%" height="100vh">
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Bentley Group
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <ArrowDownward fontSize="large" />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SplashImage;
