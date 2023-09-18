
import React, { useEffect, useState } from 'react';
import Quote from './Quote';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data[0].quote;
        setQuote(randomQuote);
      })
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Citation aléatoire des Simpsons</h1>
      <Quote quote={quote} />
    </div>
  );
};

export default RandomQuote;
