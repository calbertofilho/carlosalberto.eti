import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AppPage from './pages/NoAzul';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/app' component={AppPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
