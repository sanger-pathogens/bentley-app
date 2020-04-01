import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';

const mdAboutUs = raw('../content/about-us.md');

const AboutUs = () => {
  return <Markdown md={mdAboutUs} />;
};

export default AboutUs;
