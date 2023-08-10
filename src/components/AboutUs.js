import React from 'react';
import Markdown from './Markdown';

const mdAboutUs = 'markdown/about-us.md'

const AboutUs = () => {
  return <Markdown md={mdAboutUs} />;
};

export default AboutUs;
