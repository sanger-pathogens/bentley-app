import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Typography,
  Link,
  useScrollTrigger,
} from '@material-ui/core';

const Header = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });
  return (
    <AppBar
      position="sticky"
      color={trigger ? 'inherit' : 'transparent'}
      style={{ borderBottom: trigger ? '2px solid white' : 'none' }}
      elevation={0}
    >
      <Toolbar variant="dense">
        <Grid container alignItems="center" justify="space-between" spacing={4}>
          <Grid item>
            {trigger ? <Typography>Bentley Group</Typography> : null}
          </Grid>
          <Grid item>
            <Button color="inherit" href="#about" component={Link}>
              About Us
            </Button>
            <Button color="inherit" href="#research" component={Link}>
              Research
            </Button>
            <Button color="inherit" href="#software" component={Link}>
              Software
            </Button>
            <Button color="inherit" href="#team" component={Link}>
              Team
            </Button>
            <Button color="inherit" href="#publications" component={Link}>
              Publications
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
