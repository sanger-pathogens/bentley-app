import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDownward } from '@material-ui/icons';

import AnimatedTextPath from './AnimatedTextPath';

const useStyles = makeStyles({
  splash: {
    backgroundImage:
      'url(2048px-Sanger_Institute_and_Hinxton_Hall,_Cambridge,_UK.jpg)',
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
  imageCreditLink: {
    color: 'white',
  },
});

const SplashImage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.splash} width="100%" height="100vh">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Grid item xs={12}>
          <Box align="center">
            <AnimatedTextPath />
          </Box>
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
        {/* Image Credit: Sanger Institute, Genome Research Limited */}
        <Link
          className={classes.imageCreditLink}
          href="https://commons.wikimedia.org/wiki/User:Magnus_Manske"
          target="_blank"
          rel="noopener noreferrer"
        >
          Magnus Manske
        </Link>
        ,{' '}
        <Link
          className={classes.imageCreditLink}
          href="https://commons.wikimedia.org/wiki/File:Sanger_Institute_and_Hinxton_Hall,_Cambridge,_UK.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sanger Institute and Hinxton Hall, Cambridge, UK
        </Link>
        ,{' '}
        <Link
          className={classes.imageCreditLink}
          href="https://creativecommons.org/licenses/by-sa/3.0/legalcode"
          target="_blank"
          rel="license noopener noreferrer"
        >
          CC BY-SA 3.0
        </Link>
      </Typography>
    </Box>
  );
};

export default SplashImage;
