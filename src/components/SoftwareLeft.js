import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import softwares from '../content/software';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Software = ({ name, links, description }) => (
  <Box pt={2} pb={2}>
    <Grid container spacing={2}>
      <Grid item xs={4} lg={3} xl={2}>
        <Box textAlign="right">
          <Typography variant="h6">{name}</Typography>
          {links.map((link, i) => (
            <Typography key={i} variant="body2">
              <Link href={link.url}>{link.label}</Link>
            </Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={8} lg={9} xl={10}>
        <TeamDescriptionRenderer md={description} />
      </Grid>
    </Grid>
  </Box>
);

const Team = () => (
  <Grid container>
    {softwares.map((software, i) => (
      <Grid key={i} item xs={12}>
        <Software {...software} />
      </Grid>
    ))}
  </Grid>
);

export default Team;
