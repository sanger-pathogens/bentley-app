import React from 'react';
import Markdown from 'react-markdown';
import { Typography, Link } from '@material-ui/core';

const renderers = {
  p: ({ children }) => (
    <Typography variant="body2">{children}</Typography>
  ),
  a: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const TeamDescriptionRenderer = ({ md }) => (
  <Markdown children={md} components={renderers} />
);

export default TeamDescriptionRenderer;
