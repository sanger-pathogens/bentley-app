import React from 'react';
import { Box } from '@material-ui/core';
import { configureAnchors } from 'react-scrollable-anchor';

import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import sections from '../content/sections';
import SplashImage from './SplashImage';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60, scrollDuration: 200 });

const PageHome = () => (
  <Page
    header={
      <Header
        navigation={[
          ...sections.map(({ label, url }) => ({
            label,
            url: `#${url}`,
          })),
          { label: 'News', url: '#twitterFeed' },
          { label: 'Funders', url: '#funders' },
        ]}
      />
    }
    footer={<Footer />}
  >
    <SplashImage />
    <Box>
      {sections.map((section, i) => (
        <Section key={i} anchorId={section.url} {...section} />
      ))}
    </Box>
  </Page>
);

export default PageHome;
