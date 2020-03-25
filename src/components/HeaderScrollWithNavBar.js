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
import { makeStyles } from '@material-ui/core/styles';

import navigationAnchored from '../content/navigationAnchored';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Header = () => {
  const classes = useStyles();
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
      className={classes.appBar}
    >
      <Toolbar variant="dense">
        <Grid container alignItems="center" justify="space-between" spacing={4}>
          <Grid item>
            {trigger ? <Typography>Bentley Group</Typography> : null}
          </Grid>
          <Grid item>
            {navigationAnchored.map((item, i) => (
              <Button key={i} color="inherit" href={item.url} component={Link}>
                {item.label}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
