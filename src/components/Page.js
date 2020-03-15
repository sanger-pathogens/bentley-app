import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles({
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
});

const Page = ({ header, footer, children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.page}>
      {header ? header : null}
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
      {footer ? footer : null}
    </Paper>
  );
};

export default Page;
