import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import PageHome from './components/PageHome';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
