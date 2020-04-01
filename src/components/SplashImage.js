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
  imageCredit: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    overflow: 'hidden',
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
      <Typography
        variant="subtitle2"
        align="left"
        className={classes.imageCredit}
      >
        Image Credit: Sanger Institute, Genome Research Limited
      </Typography>
    </Box>
  );
};

export default SplashImage;
