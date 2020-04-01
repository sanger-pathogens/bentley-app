import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import sections from '../content/sections';
import SplashImage from './SplashImage';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60, scrollDuration: 200 });

const sectionPaddingTop = 8;

const PageHome = () => (
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
    <SplashImage />
    <Box>
      <Typography variant="h1" align="center">
        Bentley Group
      </Typography>
      {sections.map((section, i) => (
        <Section key={i}>
          <Box pt={sectionPaddingTop}>
            <ScrollableAnchor id={section.url}>
              <Box>
                <Typography variant="h2" gutterBottom>
                  {section.title}
                </Typography>
                <section.contentComponent />
              </Box>
            </ScrollableAnchor>
          </Box>
        </Section>
      ))}
    </Box>
  </Page>
);

export default PageHome;
