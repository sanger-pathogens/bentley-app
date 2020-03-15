import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import publications from '../content/selected-publications';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Publication = ({ title, url, authorsAndJournalRef }) => (
  <Box p={2}>
    <Typography variant="h6">
      <Link href={url}>{title}</Link>
    </Typography>
    <TeamDescriptionRenderer md={authorsAndJournalRef} />
  </Box>
);

const Publications = () => (
  <Grid container>
    {publications.map((publication, i) => (
      <Grid key={i} item xs={12}>
        <Publication {...publication} />
      </Grid>
    ))}
  </Grid>
);

export default Publications;
