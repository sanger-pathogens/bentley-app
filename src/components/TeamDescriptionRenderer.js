import React from 'react';
import Markdown from 'react-markdown';
import { Typography, Link } from '@material-ui/core';

const components = {
  p: ({ children }) => (
    <Typography variant="body2">{children}</Typography>
  ),
  a: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const TeamDescriptionRenderer = ({ md }) => (
  <Markdown children={md} components={components} />
);

export default TeamDescriptionRenderer;
