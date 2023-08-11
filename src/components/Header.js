import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Link,
  Menu,
  MenuItem,
  IconButton,
  useScrollTrigger,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  headerLink: {
    color: 'white',
  },
}));

const NavigationFlat = ({ navigation }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {navigation.map((item, i) => (
        <Button
          key={i}
          className={classes.headerLink}
          href={item.url}
          component={Link}
        >
          {item.label}
        </Button>
      ))}
    </React.Fragment>
  );
};

const NavigationMenu = ({ navigation }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="end"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
      >
        {navigation.map(item => (
          <MenuItem
            key={item.url}
            dense
            component={Link}
            href={item.url}
            onClick={handleClose}
            className={classes.headerLink}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const Header = ({ navigation }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      color={trigger ? 'inherit' : 'transparent'}
      style={{ borderBottom: trigger ? '2px solid white' : 'none' }}
      elevation={0}
    >
      <Toolbar variant="dense">
        <Grid container alignItems="center" justifyContent="space-between" spacing={4}>
          <Grid item>
            {trigger ? (
              <Button className={classes.headerLink} href="/" component={Link}>
                Bentley Group
              </Button>
            ) : null}
          </Grid>
          <Grid item>
            <Hidden smDown>
              <NavigationFlat navigation={navigation} />
            </Hidden>
            <Hidden mdUp>
              <NavigationMenu navigation={navigation} />
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
