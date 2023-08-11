import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import 'typeface-inter';

import theme from './theme';
import PageHome from './components/PageHome';

const generatedTheme = responsiveFontSizes(createTheme(theme));

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={generatedTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.Fragment>
);

export default App;
