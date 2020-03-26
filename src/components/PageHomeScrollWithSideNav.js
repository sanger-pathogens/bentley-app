import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Page from './Page';
import SideNav from './SideNav';
import Footer from './Footer';
import sections from '../content/sections';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60, scrollDuration: 200 });

const sectionPaddingTop = 8;

const PageHomeScrollWithSideNav = () => (
  <Page sideNav={<SideNav />} footer={<Footer />}>
    <Box>
      <Typography variant="h1" align="center">
        Bentley Group
      </Typography>
      {sections.map((section, i) => (
        <Box key={i} pt={sectionPaddingTop}>
          <ScrollableAnchor id={section.url}>
            <Box>
              <Typography variant="h2">{section.title}</Typography>
              <section.contentComponent />
            </Box>
          </ScrollableAnchor>
        </Box>
      ))}
    </Box>
  </Page>
);

export default PageHomeScrollWithSideNav;
