import React from 'react';
import Markdown from 'react-markdown';
import { Typography, Link } from '@material-ui/core';

const renderers = {
  paragraph: ({ children }) => (
    <Typography variant="subtitle1">{children}</Typography>
  ),
  link: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const PublicationAuthorsRenderer = ({ md }) => (
  <Markdown source={md} renderers={renderers} />
);

export default PublicationAuthorsRenderer;
