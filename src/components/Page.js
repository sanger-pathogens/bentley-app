import React from 'react';
import { Grid, Paper, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    width: '100%',
  },
  gridContainer: {
    margin: 0,
    padding: '24px',
    width: '100%',
    flex: '1 0 auto',
  },
  gridContainerDrawer: {
    margin: 0,
    padding: '24px',
    width: '100%',
    flex: '1 0 auto',
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    minWidth: drawerWidth,
  },
  paperAnchorDockedLeft: {
    borderRight: '1px solid white',
  },
  content: {
    flexGrow: 1,
  },
}));

const Page = ({ header, footer, sideNav, children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.page}>
      {header ? header : null}
      {sideNav ? (
        <div className={classes.gridContainerDrawer}>
          <Drawer
            classes={{
              root: classes.drawer,
              paper: classes.drawerPaper,
              paperAnchorLeft: classes.paperAnchorDockedLeft,
            }}
            variant="permanent"
            anchor="left"
          >
            {/* <div className={classes.toolbar} /> */}
            {sideNav}
          </Drawer>
          <Grid
            container
            justify="center"
            spacing={1}
            className={classes.content}
          >
            <Grid item xs={12} md={10}>
              {children}
            </Grid>
          </Grid>
        </div>
      ) : (
        <Grid
          container
          justify="center"
          spacing={1}
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={10} lg={8}>
            {children}
          </Grid>
        </Grid>
      )}
      {footer ? footer : null}
    </Paper>
  );
};

export default Page;
