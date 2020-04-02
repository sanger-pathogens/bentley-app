import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import softwares from '../content/software';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Software = ({ name, links, description }) => (
  <Box>
    <Typography variant="h6">{name}</Typography>
    {links.map((link, i) => (
      <Typography key={i} variant="body2">
        <Link href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label}
        </Link>
      </Typography>
    ))}
    <TeamDescriptionRenderer md={description} />
  </Box>
);

const Softwares = () => (
  <Box pt={2} pb={2}>
    <Grid container spacing={3}>
      {softwares.map((software, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Software {...software} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Softwares;
