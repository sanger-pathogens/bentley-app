import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Typography, Link } from '@material-ui/core';

const headerRenderer = ({ level, children }) => <Typography variant={`h${level}`} style={{ paddingTop: '1rem' }}>{children}</Typography>

const renderers = {
  p: ({ children }) => <Typography gutterBottom>{children}</Typography>,
  h1: ({ level, children }) => headerRenderer({ level, children }),
  h2: ({ level, children }) => headerRenderer({ level, children }),
  h3: ({ level, children }) => headerRenderer({ level, children }),
  h4: ({ level, children }) => headerRenderer({ level, children }),
  h5: ({ level, children }) => headerRenderer({ level, children }),
  h6: ({ level, children }) => headerRenderer({ level, children }),
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
