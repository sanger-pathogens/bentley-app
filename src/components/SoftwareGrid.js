import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import softwares from '../content/software';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Software = ({ name, links, description }) => (
  <Box p={2}>
    <Typography variant="h6">{name}</Typography>
    {links.map((link, i) => (
      <Typography key={i} variant="body2">
        <Link href={link.url}>{link.label}</Link>
      </Typography>
    ))}
    <TeamDescriptionRenderer md={description} />
  </Box>
);

const Softwares = () => (
  <Grid container>
    {softwares.map((software, i) => (
      <Grid key={i} item xs={12} sm={6} md={4}>
        <Software {...software} />
      </Grid>
    ))}
  </Grid>
);

export default Softwares;
