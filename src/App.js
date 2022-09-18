import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (routeProps) => <Login { ...routeProps } /> } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
