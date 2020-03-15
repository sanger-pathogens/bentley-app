import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Page from './Page';
import SoftwareGrid from './SoftwareGrid';
import TeamGrid from './TeamGrid';
import Publications from './Publications';
import HeaderScrollWithNavBar from './HeaderScrollWithNavBar';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ResearchThemes from './ResearchThemes';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60, scrollDuration: 200 });

const sectionPaddingTop = 8;

const PageHomeScrollWithNavBar = () => (
  <Page header={<HeaderScrollWithNavBar />} footer={<Footer />}>
    <Box>
      <Typography variant="h1" align="center">
        Bentley Group
      </Typography>

      <Box pt={sectionPaddingTop}>
        <ScrollableAnchor id="about">
          <Box>
            <Typography variant="h2">About us</Typography>
            <AboutUs />
          </Box>
        </ScrollableAnchor>
      </Box>
      <Box pt={sectionPaddingTop}>
        <ScrollableAnchor id="research">
          <Box>
            <Typography variant="h2">Research themes</Typography>
            <ResearchThemes />
          </Box>
        </ScrollableAnchor>
      </Box>
      <Box pt={sectionPaddingTop}>
        <ScrollableAnchor id="software">
          <Box>
            <Typography variant="h2">Our software</Typography>
            <SoftwareGrid />
          </Box>
        </ScrollableAnchor>
      </Box>
      <Box pt={sectionPaddingTop}>
        <ScrollableAnchor id="team">
          <Box>
            <Typography variant="h2">Meet the team</Typography>
            <Typography variant="h4">Current members</Typography>
            <TeamGrid />
          </Box>
        </ScrollableAnchor>
      </Box>
      <Box pt={sectionPaddingTop}>
        <ScrollableAnchor id="publications">
          <Box>
            <Typography variant="h2">Publications</Typography>
            <Publications />
          </Box>
        </ScrollableAnchor>
      </Box>
    </Box>
  </Page>
);

export default PageHomeScrollWithNavBar;
