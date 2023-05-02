import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';
import Collapsible from './Collapsible';

const mdResearchIntro = raw('../content/research-intro.md');
const mdResearchGPS = raw('../content/research-gps.md');
const mdResearchGBS = raw('../content/research-gbs.md');

const ResearchThemes = () => {
  return (
    <div>
      <Markdown md={mdResearchIntro} />
      <Collapsible title='Streptococcus pneumoniae'>
        <Markdown md={mdResearchGPS} />
      </Collapsible>
      <Collapsible title='Streptococcus agalactiae'>
        <Markdown md={mdResearchGBS} />
      </Collapsible>
    </div>
  );
};

export default ResearchThemes;
