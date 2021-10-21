import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { routes } from './pages/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}
