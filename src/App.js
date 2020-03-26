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
import PageTreeOfLife from './components/PageTreeOfLife';
import PageWorldMap from './components/PageWorldMap';
import PageSoftwareVariants from './components/PageSoftwareVariants';
import PagePublications from './components/PagePublications';
import PageHomeScrollWithNavBar from './components/PageHomeScrollWithNavBar';
import PageHomeScrollWithSideNav from './components/PageHomeScrollWithSideNav';
import PageHomePaginated from './components/PageHomePaginated';

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
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
    // overrides: {
    //   MuiTooltip: {
    //     tooltip: {
    //       // color: '#f1f1f1',
    //       backgroundColor: 'primary',
    //       // rippleBackgroundColor: 'blue',
    //     },
    //   },
    // },
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
          <Route path="/team-variants">
            <PageTeamVariants />
          </Route>
          <Route path="/tree-of-life">
            <PageTreeOfLife />
          </Route>
          <Route path="/world-map">
            <PageWorldMap />
          </Route>
          <Route path="/software-variants">
            <PageSoftwareVariants />
          </Route>
          <Route path="/publications">
            <PagePublications />
          </Route>
          <Route
            path="/demo-scroll-with-navbar"
            component={PageHomeScrollWithNavBar}
          />
          <Route path="/demo-scroll-with-sidenav">
            <PageHomeScrollWithSideNav />
          </Route>
          <Route
            path="/demo-paginated-with-navbar"
            component={PageHomePaginated}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  </React.Fragment>
);

export default App;
