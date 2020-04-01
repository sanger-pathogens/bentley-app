import React from 'react';
import { Box, Grid, Link, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Funders from './Funders';
import TwitterFeed from './TwitterFeed';

import contacts from '../content/contacts';

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `2px solid ${theme.palette.primary.main}`,
  },
  footerLink: {
    color: 'white',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer} mt={8}>
      <TwitterFeed />
      <Funders />
      <Box p={3} bgcolor="primary.main">
        <Grid container alignItems="center" justify="space-between" spacing={2}>
          <Grid item xs={12} md={4}>
            <Link href="https://www.sanger.ac.uk/">
              <img
                src="/SangerLogo.9423243b.png"
                width="130"
                alt="Sanger logo"
              />
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2">
              <i>Contacts</i>
            </Typography>
            <Typography variant="body1">
              {contacts.map((contact, i) => (
                <React.Fragment key={i}>
                  <Link className={classes.footerLink} href={contact.url}>
                    {contact.label}
                  </Link>
                  {i < contacts.length - 1 ? ' | ' : null}
                </React.Fragment>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Hidden mdUp>
              <Typography variant="subtitle2">
                <i>Version</i>
              </Typography>
              <Typography variant="body1">
                <Link
                  className={classes.footerLink}
                  href={`https://github.com/sanger-pathogens/bentley-app/commit/${process.env.REACT_APP_GIT_REVISION}`}
                >
                  {process.env.REACT_APP_GIT_REVISION}
                </Link>
              </Typography>
            </Hidden>
            <Hidden smDown>
              <Typography variant="subtitle2" align="right">
                <i>Version</i>
              </Typography>
              <Typography variant="body1" align="right">
                <Link
                  className={classes.footerLink}
                  href={`https://github.com/sanger-pathogens/bentley-app/commit/${process.env.REACT_APP_GIT_REVISION}`}
                >
                  {process.env.REACT_APP_GIT_REVISION}
                </Link>
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
