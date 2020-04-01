import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';

const mdResearchThemes = raw('../content/research-themes.md');

const ResearchThemes = () => {
  return <Markdown md={mdResearchThemes} />;
};

export default ResearchThemes;
