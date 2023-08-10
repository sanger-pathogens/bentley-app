import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Typography, Link } from '@material-ui/core';

const renderers = {
  p: ({ children }) => <Typography gutterBottom>{children}</Typography>,
  h1: ({ children }) => <Typography variant={'h1'} style={{ paddingTop: '1rem' }}>{children}</Typography>,
  h2: ({ children }) => <Typography variant={'h2'} style={{ paddingTop: '1rem' }}>{children}</Typography>,
  h3: ({ children }) => <Typography variant={'h3'} style={{ paddingTop: '1rem' }}>{children}</Typography>,
  h4: ({ children }) => <Typography variant={'h4'} style={{ paddingTop: '1rem' }}>{children}</Typography>,
  h5: ({ children }) => <Typography variant={'h5'} style={{ paddingTop: '1rem' }}>{children}</Typography>,
  h6: ({ children }) => <Typography variant={'h6'} style={{ paddingTop: '1rem' }}>{children}</Typography>,
  img: props => <img {...props} width="250px" alt='No description'/>,
  a: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const Markdown = ({ md }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [md])

  return (
    <ReactMarkdown children={content} components={renderers} />
  )
};

export default Markdown;
