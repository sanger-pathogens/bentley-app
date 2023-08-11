import React from 'react';
import { Box } from '@material-ui/core';

import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import sections from '../content/sections';
import SplashImage from './SplashImage';

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
        <Section key={i} id={section.url} {...section} />
      ))}
    </Box>
  </Page>
);

export default PageHome;
