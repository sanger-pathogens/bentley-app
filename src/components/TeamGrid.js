import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

import team from '../content/team';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Person = ({ name, role, imageUrl, description }) => (
  <Box>
    <img src={imageUrl} alt={`${name} - ${role}`} width="100%" />
    <Typography variant="h6">{name}</Typography>
    <Typography variant="subtitle1">
      <i>{role}</i>
    </Typography>
    <TeamDescriptionRenderer md={description} />
  </Box>
);

const Team = () => (
  <Box pt={2} pb={2}>
    <Grid container spacing={2}>
      {team.map(person => (
        <Grid key={person.name} item xs={12} sm={6} md={4} lg={3}>
          <Person {...person} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Team;
