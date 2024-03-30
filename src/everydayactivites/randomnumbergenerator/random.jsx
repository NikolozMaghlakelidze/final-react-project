import  { useState } from 'react';
import './random.css'

const Randomricxvi = () => {
  const [sawyisicifri, rendomcifri] = useState(null);
  const generateNumber = () => {
    let rendomi = Math.floor(Math.random() * 100) + 1;
    rendomcifri(rendomi);
  };

  return (
    <div>
      <h1 className='random_h'>random number generator</h1>
      <button onClick={generateNumber}>random number</button>
      {sawyisicifri && <p className='random_p'>random number = {sawyisicifri}</p>}
   </div>
  );
};

export default Randomricxvi;
