import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Onboarding from './containers/Onboarding';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect from="/" to="/onboarding" exact />
      <Route path="/onboarding" component={Onboarding} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
