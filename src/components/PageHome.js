import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import sections from '../content/sections';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60, scrollDuration: 200 });

const sectionPaddingTop = 8;

const PageHomeScrollWithNavBar = () => (
  <Page
    header={
      <Header
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
);

export default PageHomeScrollWithNavBar;
