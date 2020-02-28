import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './components/PageHome';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>
    </Switch>
  </Router>
);

export default App;
