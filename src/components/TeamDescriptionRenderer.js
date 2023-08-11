import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography, Link } from '@mui/material';

const renderers = {
  p: ({ children }) => (
    <Typography variant="body2">{children}</Typography>
  ),
  a: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const TeamDescriptionRenderer = ({ md }) => (
  <ReactMarkdown children={md} components={renderers} />
);

export default TeamDescriptionRenderer;
