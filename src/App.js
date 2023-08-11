import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, adaptV4Theme } from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

import 'typeface-inter';

import theme from './theme';
import PageHome from './components/PageHome';

const generatedTheme = responsiveFontSizes(createTheme(adaptV4Theme(theme)));

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={generatedTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<PageHome />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.Fragment>
);

export default App;
