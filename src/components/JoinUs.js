import React from 'react';
import Markdown from './Markdown';
import useFetchMarkDown from '../hooks/useFetchMarkDown';

const JoinUs = () => {
  const mdJoin = useFetchMarkDown({ md: 'markdown/joinus.md' });

  return(
    <React.Fragment>
      <Markdown mdContent={mdJoin} />
    </React.Fragment>
  )
};

export default JoinUs;
