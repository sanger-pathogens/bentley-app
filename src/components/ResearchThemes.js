import React from 'react';
import Markdown from './Markdown';
import Collapsible from './Collapsible';

const mdResearchIntro = 'markdown/research-intro.md';
const mdResearchGPS = 'markdown/research-gps.md';
const mdResearchJUNO = 'markdown/research-juno.md';
const mdResearchMeningococcus = 'markdown/research-meningococcus.md';

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
