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

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    // elevation: trigger ? 4 : 0,
    color: trigger ? 'inherit' : 'transparent',
    style: { borderBottom: trigger ? '2px solid white' : 'none' },
  });
};

const Header = () => (
  <ElevationScroll>
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar variant="dense">
        <Grid container alignItems="center" justify="space-between" spacing={4}>
          <Grid item>
            <Typography>Bentley Group</Typography>
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
  </ElevationScroll>
);

export default Header;
