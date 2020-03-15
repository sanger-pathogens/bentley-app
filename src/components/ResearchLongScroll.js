import React from 'react';
import raw from 'raw.macro';

import Content from './Content';

const mdResearch = raw('../content/research-themes.md');

const ResearchLongScroll = () => {
  return <Content md={mdResearch} />;
};

export default ResearchLongScroll;
