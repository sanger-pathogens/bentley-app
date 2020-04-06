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
import { Menu as MenuIcon } from '@material-ui/icons';

const NavigationFlat = ({ navigation }) => (
  <React.Fragment>
    {navigation.map((item, i) => (
      <Button key={i} color="inherit" href={item.url} component={Link}>
        {item.label}
      </Button>
    ))}
  </React.Fragment>
);

const NavigationMenu = ({ navigation }) => {
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
      >
        {navigation.map(item => (
          <MenuItem key={item.url} component={Link} href={item.url}>
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
  return (
    <AppBar
      position="fixed"
      color={trigger ? 'inherit' : 'transparent'}
      style={{ borderBottom: trigger ? '2px solid white' : 'none' }}
      elevation={0}
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
