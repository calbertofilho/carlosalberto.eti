import React from 'react';
import { useHistory } from 'react-router-dom';

const ThanksPage = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  React.useEffect(() => {
    setInterval(() => {
      redirect();
    }, 5000);
  });

  return (
    <div>
      <h1>Email enviado...</h1>
    </div>
  )
}

export default ThanksPage
