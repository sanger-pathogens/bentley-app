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

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Header = ({ navigation }) => {
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
            {trigger ? (
              <Button color="inherit" href="/" component={Link}>
                Bentley Group
              </Button>
            ) : null}
          </Grid>
          <Grid item>
            {navigation.map((item, i) => (
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
