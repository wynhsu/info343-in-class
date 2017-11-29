import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import constants from './components/constants';

import SignInView from './components/SignIn';
import SignUpView from './components/SignUp';
import ChannelView from './components/Channel';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={constants.routes.signin} component={SignInView} />
          <Route path={constants.routes.signup} component={SignUpView} />
          <Route path={constants.routes.channel} component={ChannelView} />
          <Redirect to={constants.routes.signin} />
        </Switch>
      </Router>
    );
  }
}

export default App;
