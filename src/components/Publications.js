import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import publications from '../content/selected-publications';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';
import PublicationAuthorsRenderer from './PublicationAuthorsRenderer';
import PublicationTitleRenderer from './PublicationTitleRenderer'

const Publication = ({ title, url, authors, journalRef }) => (
  <Box pt={2} pb={2}>
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <PublicationTitleRenderer md={title} />
    </Link>
    <PublicationAuthorsRenderer md={authors} />
    <TeamDescriptionRenderer md={journalRef} />
  </Box>
);

const Publications = () => (
  <>
    <Grid container>
      {publications.map((publication, i) => (
        <Grid key={i} item xs={12}>
          <Publication {...publication} />
        </Grid>
      ))}
    </Grid>
    <Typography align="center">
      See more on{' '}
      <Link
        href="https://scholar.google.com/citations?user=rywPBOQAAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Scholar
      </Link>
      .
    </Typography>
  </>
);

export default Publications;
