import React from 'react';
import { Box, Grid } from '@material-ui/core';
// import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

import Funders from './Funders';

const useStyles = makeStyles(theme => ({
  footer: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Funders />
      <Box
        p={4}
        color="primary.main"
        bgcolor="primary.main"
        className={classes.footer}
      >
        <Grid container alignItems="center" justify="space-between" spacing={2}>
          <Grid item>
            <img src="/SangerLogo.9423243b.png" width="166" alt="Sanger logo" />
          </Grid>
          {/* <Grid item>
            <IconButton
              color="inherit"
              target="_blank"
              href="#"
              component={Link}
            >
              <AlternateEmailOutlinedIcon />
            </IconButton>
            <IconButton
              color="inherit"
              target="_blank"
              href="#"
              component={Link}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              target="_blank"
              href="#"
              component={Link}
            >
              <TwitterIcon />
            </IconButton>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
