import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './styles.css';


const ThanksPage = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      redirect();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang : 'pt-br' }}>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="pt-br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Especialista em Tecnologia da Informação" />
        <title>E-mail enviado com sucesso</title>
      </Helmet>
      <>
        <h1>Email enviado...</h1>
      </>
    </HelmetProvider>
  )
}

export default ThanksPage
