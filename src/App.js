import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/Home';
import AppPage from './pages/NoAzul';
import ThanksPage from './pages/Thanks';

function App() {
  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang : 'pt-br' }}>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="pt-br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Especialista em Tecnologia da Informação" />
        <title>Carlos Alberto ETI</title>
      </Helmet>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/app' component={AppPage} exact />
          <Route path='/thanks' component={ThanksPage} exact />
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
