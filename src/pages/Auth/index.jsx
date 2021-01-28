import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Auth.scss';

import { LoginForm } from '../../modules';

function Auth() {
  return (
    <section className="auth">
      <div className="auth__content">
        <Switch>
          <Route exact path={['/', '/login']} component={LoginForm} />
          <Route exact path="/register" render={() => <h2>hello</h2>} />
        </Switch>
      </div>
    </section>
  );
}

export default Auth;
