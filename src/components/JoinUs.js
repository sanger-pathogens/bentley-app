import React from 'react';
import Markdown from './Markdown';

const mdJoin = 'markdown/joinus.md';

const JoinUs = () => (
  <React.Fragment>
    <Markdown md={mdJoin} />
  </React.Fragment>
);

export default JoinUs;
