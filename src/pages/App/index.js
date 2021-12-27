import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './styles';

const AppPage = () => {
  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang : 'pt-br' }}>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="pt-br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Especialista em Tecnologia da Informação" />
        <title>NoAzul App [Gerenciador Financeiro Pessoal]</title>
      </Helmet>
      <GlobalStyles />
      <>
        <h1>NoAzul App</h1>
      </>
    </HelmetProvider>
  )
}

export default AppPage
