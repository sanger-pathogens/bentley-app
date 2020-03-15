import React from 'react';
import raw from 'raw.macro';

import Content from './Content';

const mdResearchThemes = raw('../content/research-themes.md');

const ResearchThemes = () => {
  return <Content md={mdResearchThemes} />;
};

export default ResearchThemes;
