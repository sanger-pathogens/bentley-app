import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';

import currentTeam from '../content/team';
import honoraryTeam from '../content/honorary-team';
import Markdown from './Markdown';
import useFetchMarkDown from '../hooks/useFetchMarkDown';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Person = ({ name, role, imageUrl, sangerProfile, description }) => (
  <Box>
    <img src={imageUrl} alt={`${name} - ${role}`} width="100%" />
    <Link variant="h6" href={sangerProfile}>{name}</Link>
    <Typography variant="subtitle1">
      <i>{role}</i>
    </Typography>
    <TeamDescriptionRenderer md={description} />
  </Box>
);

const CurrentTeam = () => (
  <Box pt={2} pb={2}>
    <Grid container spacing={2}>
      {currentTeam.map(person => (
        <Grid key={person.name} item xs={12} sm={6} md={4} lg={3}>
          <Person {...person} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const HonoraryTeam = () => (
  <Box pt={2} pb={2}>
    <Grid container spacing={2}>
      {honoraryTeam.map(person => (
        <Grid key={person.name} item xs={12} sm={6} md={4} lg={3}>
          <Person {...person} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Team = () => {
  const mdVisitors = useFetchMarkDown({ md: 'markdown/visitors.md' });
  const mdAlumni = useFetchMarkDown({ md: 'markdown/alumni.md' });

  return (
    <React.Fragment>
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Current members
    </Typography>
    <CurrentTeam />
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Honorary members
    </Typography>
    <HonoraryTeam />
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Associates and visitors
    </Typography>
    <Markdown mdContent={mdVisitors} />
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Alumni
    </Typography>
    <Markdown mdContent={mdAlumni} />
  </React.Fragment>
  )
};

export default Team;
