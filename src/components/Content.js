import React from 'react';
import Markdown from 'react-markdown';
import { Typography, Link } from '@material-ui/core';

const renderers = {
  paragraph: ({ children }) => <Typography gutterBottom>{children}</Typography>,
  heading: ({ level, children }) => (
    <Typography variant={`h${level}`}>{children}</Typography>
  ),
  image: props => <img {...props} width="250px" />,
  link: props => <Link {...props} />,
};

const Content = ({ md }) => <Markdown source={md} renderers={renderers} />;

export default Content;
