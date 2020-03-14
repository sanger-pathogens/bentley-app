import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

import team from '../content/team';

const Person = ({ name, role, imageUrl, description }) => (
  <Box p={2}>
    <img src={imageUrl} alt={`${name} - ${role}`} width="100%" />
    <Typography variant="h6">{name}</Typography>
    <Typography variant="subtitle1">
      <i>{role}</i>
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </Box>
);

const Team = () => (
  <Grid container>
    {team.map(person => (
      <Grid key={person.name} item xs={12} sm={6} md={4} lg={3}>
        <Person {...person} />
      </Grid>
    ))}
  </Grid>
);

export default Team;
