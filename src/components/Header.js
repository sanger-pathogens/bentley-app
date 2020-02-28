import React from 'react';
import { Box, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => (
  <Box m={4} color="white">
    <Grid container alignItems="center" justify="space-between" spacing={4}>
      <Grid item>
        <Typography>Bentley Group</Typography>
      </Grid>
      <Grid item>
        <Button color="inherit" to="/gps" component={Link}>
          GPS
        </Button>
        <Button color="inherit" to="/gps2" component={Link}>
          GPS2
        </Button>
        <Button color="inherit" to="/juno" component={Link}>
          Juno
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default Header;
