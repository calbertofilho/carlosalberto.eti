import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AppPage from './pages/App';
import ThanksPage from './pages/Thanks';
import WebFont from 'webfontloader';
import GlobalStyles from './GlobalStyle';

WebFont.load({
  google: {
    families: ['Encode Sans Expanded: 100,200,300,400,500,600,700,800,900', 'Syne Mono', 'Nova Mono', 'Material Icons', 'Material Icons Outlined', 'Material Icons Two Tone', 'Material Icons Round', 'Material Icons Sharp']
  }
});

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
