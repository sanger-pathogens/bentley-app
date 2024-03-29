import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  gridContainer: {
    margin: 0,
    padding: '0 24px',
    width: '100%',
    flex: '1 0 auto',
  },
});

const Section = ({ id, title, ContentComponent }) => {
  const classes = useStyles();
  return (
    <div id={id}>
      <Grid
        container
        justifyContent="center"
        spacing={1}
        className={classes.gridContainer}
      >
        <Grid item xs={12} md={10} lg={8}>
          <Box pt={8}>
            <Box>
              <Typography variant="h2" gutterBottom>
                {title}
              </Typography>
              <ContentComponent />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;
