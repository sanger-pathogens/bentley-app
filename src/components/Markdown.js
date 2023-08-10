import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography, Link } from '@material-ui/core';

const renderers = {
  paragraph: ({ children }) => <Typography gutterBottom>{children}</Typography>,
  heading: ({ level, children }) => (
    <Typography variant={`h${level}`} style={{ paddingTop: '1rem' }}>
      {children}
    </Typography>
  ),
  image: props => <img {...props} width="250px" alt='No description'/>,
  link: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const Markdown = ({ md }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [md])

  return (
    <ReactMarkdown source={content} renderers={renderers} />
  )
};

export default Markdown;
