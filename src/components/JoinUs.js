import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';

const mdJoin = raw('../content/joinus.md');

const JoinUs = () => (
  <React.Fragment>
    <Markdown md={mdJoin} />
  </React.Fragment>
);

export default JoinUs;
