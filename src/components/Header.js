import React from 'react';
import { Box, Grid, Button, Typography } from '@material-ui/core';

import Link from './Link';

const Header = () => (
  <Box m={4}>
    <Grid container alignItems="center" justify="space-between" spacing={4}>
      <Grid item>
        <Typography>Bentley Group</Typography>
      </Grid>
      <Grid item>
        <Button color="inherit" href="/about" component={Link}>
          About Us
        </Button>
        <Button color="inherit" href="/research" component={Link}>
          Research
        </Button>
        <Button color="inherit" href="/software" component={Link}>
          Software
        </Button>
        <Button color="inherit" href="/team" component={Link}>
          Team
        </Button>
        <Button color="inherit" href="/publications" component={Link}>
          Publications
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default Header;
