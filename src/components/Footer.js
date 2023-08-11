import React from 'react';
import { Box, Grid, Link } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import Funders from './Funders';
import TwitterFeed from './TwitterFeed';
import FooterItem from './FooterItem';

import contacts from '../content/contacts';
import sites from '../content/sites';

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
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          <FooterItem heading="Sites">
            {sites.map((site, i) => (
              <React.Fragment key={i}>
                <Link
                  className={classes.footerLink}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.label}
                </Link>
                {i < sites.length - 1 ? ' | ' : null}
              </React.Fragment>
            ))}
          </FooterItem>
          <FooterItem heading="Contacts" right>
            {contacts.map((contact, i) => (
              <React.Fragment key={i}>
                <Link
                  className={classes.footerLink}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.label}
                </Link>
                {i < contacts.length - 1 ? ' | ' : null}
              </React.Fragment>
            ))}
          </FooterItem>
        </Grid>
      </Box>
      <Box p={3} bgcolor="primary.main" borderTop="2px solid white">
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Link
              href="https://www.sanger.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/SangerLogo.9423243b.png"
                width="130"
                alt="Sanger logo"
              />
            </Link>
          </Grid>
          <FooterItem heading="Version" right>
            <Link
              className={classes.footerLink}
              href={`https://github.com/sanger-pathogens/bentley-app/commit/${process.env.REACT_APP_GIT_REVISION}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {process.env.REACT_APP_GIT_REVISION}
            </Link>
          </FooterItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
