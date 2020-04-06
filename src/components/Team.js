import React from 'react';
import raw from 'raw.macro';
import { Grid, Box, Typography } from '@material-ui/core';

import team from '../content/team';
import Markdown from './Markdown';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const mdVisitors = raw('../content/visitors.md');
const mdAlumni = raw('../content/alumni.md');

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

const CurrentTeam = () => (
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

const Team = () => (
  <React.Fragment>
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Current members
    </Typography>
    <CurrentTeam />
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Visitors
    </Typography>
    <Markdown md={mdVisitors} />
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Alumni
    </Typography>
    <Markdown md={mdAlumni} />
  </React.Fragment>
);

export default Team;
