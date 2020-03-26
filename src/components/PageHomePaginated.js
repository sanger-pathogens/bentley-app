import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

import Page from './Page';
import HeaderScrollWithNavBar from './HeaderScrollWithNavBar';
import Footer from './Footer';
import sections from '../content/sections';

const PageHomeScrollWithNavBar = ({ match }) => {
  return (
    <Page
      header={
        <HeaderScrollWithNavBar
          navigation={sections.map(({ label, url }) => ({
            label,
            url: `${match.url}/${url}`,
          }))}
        />
      }
      footer={<Footer />}
    >
      <Switch>
        {sections.map((section, i) => (
          <Route exact path={`${match.url}/${section.url}`}>
            <Box>
              <Typography variant="h2">{section.title}</Typography>
              <section.contentComponent />
            </Box>
          </Route>
        ))}
        <Route
          path="*"
          component={() => (
            <Typography variant="h1" align="center">
              Bentley Group
            </Typography>
          )}
        />
      </Switch>
    </Page>
  );
};

export default PageHomeScrollWithNavBar;
