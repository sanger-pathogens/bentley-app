import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ internal = true, href, ...rest }) =>
  internal ? (
    <MuiLink component={RouterLink} to={href} {...rest} />
  ) : (
    <MuiLink href={href} {...rest} />
  );

export default Link;
