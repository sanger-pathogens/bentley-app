import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import publications from '../content/selected-publications';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';
import PublicationAuthorsRenderer from './PublicationAuthorsRenderer';

const Publication = ({ title, url, authors, journalRef }) => (
  <Box pt={2} pb={2}>
    <Typography variant="h6">
      <Link href={url}>{title}</Link>
    </Typography>
    <PublicationAuthorsRenderer md={authors} />
    <TeamDescriptionRenderer md={journalRef} />
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
