import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

import team from '../content/team';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Person = ({ name, role, imageUrl, description, imageLeft }) => (
  <Box pt={2} pb={2}>
    <Grid container spacing={2}>
      <Grid item xs={6} md={4} lg={3} xl={2}>
        <img src={imageUrl} alt={`${name} - ${role}`} width="100%" />
      </Grid>
      <Grid item xs={6} md={8} lg={9} xl={10}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">
          <i>{role}</i>
        </Typography>
        <TeamDescriptionRenderer md={description} />
      </Grid>
    </Grid>
  </Box>
);

const Team = () => (
  <Grid container>
    {team.map((person, i) => (
      <Grid key={person.name} item xs={12}>
        <Person {...person} />
      </Grid>
    ))}
  </Grid>
);

export default Team;
