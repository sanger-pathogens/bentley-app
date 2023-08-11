import React from 'react';
import { Grid, Box, Link } from '@mui/material';

import outreach from '../content/outreach';
import TeamDescriptionRenderer from './TeamDescriptionRenderer';

const Item = ({ title, url, description, image }) => (
  <Box>
    <img src={image} alt ={`${title}`} width="100%" />
    <Link variant="h6" href={url}>{title}</Link>
    <TeamDescriptionRenderer md={description} />
  </Box>
);

const Outreach = () => (
  <Box pt={4} pb={4}>
    <Grid container spacing={2}>
      {outreach.map(item => (
        <Grid key={item.title} item xs={12} sm={6} md={4} lg={4}>
          <Item {...item} />
        </Grid>
      ))}
    </Grid>
  </Box>
);


export default Outreach;
