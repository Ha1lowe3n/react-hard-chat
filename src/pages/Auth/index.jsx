import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Auth.scss';

import { LoginForm, RegisterForm } from '../../modules';

function Auth() {
  return (
    <section className="auth">
      <div className="auth__content">
        <Switch>
          <Route exact path={['/', '/login']} component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </Switch>
      </div>
    </section>
  );
}

export default Auth;
