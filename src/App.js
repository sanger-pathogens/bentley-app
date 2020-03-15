import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import 'typeface-inter';

import PageHome from './components/PageHome';
import PageTeamVariants from './components/PageTeamVariants';
import PageResearchVariants from './components/PageResearchVariants';
import PageSoftwareVariants from './components/PageSoftwareVariants';
import PagePublications from './components/PagePublications';
import PageHomeScrollWithNavBar from './components/PageHomeScrollWithNavBar';

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: [
        'inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      type: 'dark',
      // primary: { main: '#7293BC' }, // Christine's blue
      primary: { main: '#00bcd4' },
      secondary: { main: '#651fff' },
    },
    status: {
      danger: 'orange',
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
      MuiPaper: {
        elevation: 0,
        square: true,
      },
      MuiLink: {
        underline: 'none',
      },
    },
  })
);

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route exact path="/team-variants">
            <PageTeamVariants />
          </Route>
          <Route exact path="/research-variants">
            <PageResearchVariants />
          </Route>
          <Route exact path="/software-variants">
            <PageSoftwareVariants />
          </Route>
          <Route exact path="/publications">
            <PagePublications />
          </Route>
          <Route exact path="/demo/scroll-with-navbar">
            <PageHomeScrollWithNavBar />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.Fragment>
);

export default App;
