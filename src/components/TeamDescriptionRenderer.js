import React from 'react';
import Markdown from 'react-markdown';
import { Typography, Link } from '@material-ui/core';

const renderers = {
  paragraph: ({ children }) => (
    <Typography variant="body2">{children}</Typography>
  ),
  link: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const TeamDescriptionRenderer = ({ md }) => (
  <Markdown source={md} renderers={renderers} />
);

export default TeamDescriptionRenderer;
