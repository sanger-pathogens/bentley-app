import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';
import WorldMap from './WorldMap';

const mdCollaborators = raw('../content/collaborators.md');

const Collaborators = () => {
  return (
    <>
      <Markdown md={mdCollaborators} />
      <WorldMap />
    </>
  );
};

export default Collaborators;
