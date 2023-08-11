import React from 'react';
import Markdown from './Markdown';
import useFetchMarkDown from '../hooks/useFetchMarkDown';

const AboutUs = () => {
  const mdAboutUs = useFetchMarkDown({ md: 'markdown/about-us.md' });

  return <Markdown mdContent={mdAboutUs} />;
};

export default AboutUs;
