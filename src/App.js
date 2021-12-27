import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/Home';
import AppPage from './pages/NoAzul';
import ThanksPage from './pages/Thanks';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/app' component={AppPage} exact />
        <Route path='/thanks' component={ThanksPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
