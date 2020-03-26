import React from 'react';
import { Box, Typography } from '@material-ui/core';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Page from './Page';
import HeaderScrollWithNavBar from './HeaderScrollWithNavBar';
import Footer from './Footer';
import sections from '../content/sections';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60, scrollDuration: 200 });

const sectionPaddingTop = 8;

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
      // type: 'dark',
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

const PageHomeScrollWithNavBar = () => (
  <ThemeProvider theme={theme}>
    <Page
      header={
        <HeaderScrollWithNavBar
          navigation={sections.map(({ label, url }) => ({
            label,
            url: `#${url}`,
          }))}
        />
      }
      footer={<Footer />}
    >
      <Box>
        <Typography variant="h1" align="center">
          Bentley Group
        </Typography>
        {sections.map((section, i) => (
          <Box key={i} pt={sectionPaddingTop}>
            <ScrollableAnchor id={section.url}>
              <Box>
                <Typography variant="h2" gutterBottom>
                  {section.title}
                </Typography>
                <section.contentComponent />
              </Box>
            </ScrollableAnchor>
          </Box>
        ))}
      </Box>
    </Page>
  </ThemeProvider>
);

export default PageHomeScrollWithNavBar;
