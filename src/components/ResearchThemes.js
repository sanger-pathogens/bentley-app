import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';
import Collapsible from './Collapsible';

const mdResearchIntro = raw('../content/research-intro.md');
const mdResearchGPS = raw('../content/research-gps.md');
const mdResearchJUNO = raw('../content/research-juno.md');
const mdResearchMeningococcus = raw('../content/research-meningococcus.md');

const ResearchThemes = () => {
  return (
    <div>
      <Markdown md={mdResearchIntro} />
      <Collapsible title='Streptococcus pneumoniae' logo='logos/gps-logo.png'>
        <Markdown md={mdResearchGPS} />
      </Collapsible>
      <Collapsible title='Streptococcus agalactiae' logo='logos/juno-logo.png'>
        <Markdown md={mdResearchJUNO} />
      </Collapsible>
      <Collapsible title='Neisseria meningitidis' logo='logos/meningococcus.png'>
        <Markdown md={mdResearchMeningococcus} />
      </Collapsible>
    </div>
  );
};

export default ResearchThemes;
