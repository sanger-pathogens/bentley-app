import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => (
  <Box p={2} textAlign="center">
    <Typography variant="h4" gutterBottom>
      In the news
    </Typography>
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box p={2}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="pneumowatch"
            options={{ height: 400 }}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default TwitterFeed;
