import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';

const mdResearch = raw('../content/research-themes.md');

const ResearchLongScroll = () => {
  return <Markdown md={mdResearch} />;
};

export default ResearchLongScroll;
