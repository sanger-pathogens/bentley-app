import React from 'react';
import raw from 'raw.macro';

import Content from './Content';

const mdAboutUs = raw('../content/about-us.md');

const AboutUs = () => {
  return <Content md={mdAboutUs} />;
};

export default AboutUs;
