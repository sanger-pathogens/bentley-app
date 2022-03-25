import React from 'react';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import softwares from '../content/software';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Publications = () => (
  <>
      <Link
        variant="h6"
        href="https://www.sanger.ac.uk/person/bentley-stephen-d/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to see publications.
      </Link>
  </>
);

const Software = ({ name, links, description, image }) => (
  <Box>
    <img src={image} alt={`${name}`} width="100%" />
    <Typography variant="h6">{name}</Typography>
    {links.map((link, i) => (
      <Typography key={i} variant="body2">
        <Link href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label}
        </Link>
      </Typography>
    ))}
    <TeamDescriptionRenderer md={description} />
  </Box>
);

const Softwares = () => (
  <Box pt={2} pb={2}>
    <Grid container spacing={3}>
      {softwares.map((software, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Software {...software} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const PubSoft = () => (
  <React.Fragment>
  <Typography variant="h4" style={{ paddingTop: '1rem' }}>
    Publications
  </Typography>
  <Publications />
    <Typography variant="h4" style={{ paddingTop: '1rem' }}>
      Software
    </Typography>
    <Softwares />
  </React.Fragment>
);

export default PubSoft;
