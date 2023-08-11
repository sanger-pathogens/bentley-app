import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => (
  <div id={'twitterFeed'}>
    <Box p={2} textAlign="center">
        <Box>
          <Typography variant="h4" gutterBottom>
            In the news
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Box p={2}>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="pneumowatch"
                  options={{ height: 400 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Box p={2}>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="JunoSeq"
                  options={{ height: 400 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
    </Box>
  </div>
);

export default TwitterFeed;
