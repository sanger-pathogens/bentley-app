import React from 'react';
import { Box } from '@material-ui/core';
import raw from 'raw.macro';

import Page from './Page';
import Content from './Content';

const mdResearch = raw('../content/research-themes.md');

const ResearchLongScroll = () => {
  return <Content md={mdResearch} />;
};

export default ResearchLongScroll;
