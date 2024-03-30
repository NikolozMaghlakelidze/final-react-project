import {  useEffect } from 'react';

const Atwamiani = () => {

  useEffect(() => {
    const atiwami = setInterval(() => {
      console.log('It has been 10 seconds');
    }, 10000);

    return () => clearInterval(atiwami);
  }, );

  return null;
};

export default Atwamiani;