import React from 'react';
import raw from 'raw.macro';
import { Grid, Box, Typography } from '@material-ui/core';

import currentTeam from '../content/team';
import honoraryTeam from '../content/honorary-team';
import Markdown from './Markdown';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const mdVisitors = raw('../content/visitors.md');
const mdAlumni = raw('../content/alumni.md');

const Person = ({ name, role, imageUrl, flagUrl, description }) => (
  <Box>
    <img src={imageUrl} alt={`${name} - ${role}`} width="100%" />
    {flagUrl ? (
      <img
        src={flagUrl}
        title="Image credit: https://flagpedia.net"
        alt="Flag of home country (from https://flagpedia.net)"
        height="25px"
      />
    ) : null}

    <Typography variant="h6">{name}</Typography>
    <Typography variant="subtitle1">
      <i>{role}</i>
    </Typography>
    <TeamDescriptionRenderer md={description} />
  </Box>
);

// const PersonTextAtSide = ({ name, role, imageUrl, description }) => (
//   <Box>
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <img src={imageUrl} alt={`${name} - ${role}`} width="100%" />
//       </Grid>
//       <Grid item xs={12} sm={6} md={8} lg={9}>
//         <Typography variant="h6">{name}</Typography>
//         <Typography variant="subtitle1">
//           <i>{role}</i>
//         </Typography>
//         <TeamDescriptionRenderer md={description} />
//       </Grid>
//     </Grid>
//   </Box>
// );

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

const Team = () => (
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
    <Markdown md={mdVisitors} />
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Alumni
    </Typography>
    <Markdown md={mdAlumni} />
  </React.Fragment>
);

export default Team;
