import React from 'react';
import Markdown from 'react-markdown';
import { Typography } from '@material-ui/core';

const renderers = {
  paragraph: ({ children }) => (
    <Typography variant="subtitle1">{children}</Typography>
  ),
};

const PublicationTitleRenderer = ({ md }) => (
  <Markdown source={md} renderers={renderers} />
);

export default PublicationTitleRenderer;
