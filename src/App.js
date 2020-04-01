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
    overrides: {
      MuiTooltip: {
        tooltip: {
          minWidth: '200px',
          color: '#424242',
          backgroundColor: 'white',
        },
        arrow: {
          color: 'white',
        },
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
          <Route exact path="/" component={PageHome} />
          {/* <Route path="*" component={Page404} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  </React.Fragment>
);

export default App;
