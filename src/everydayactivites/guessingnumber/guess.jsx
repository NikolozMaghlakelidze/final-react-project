import React from 'react';
import './guess.css'

const Gamosacnobiricxvi = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [resultText, setResultText] = React.useState('');
  const atiani = 10; 

  const Gamocnoba = (event) => {
    event.preventDefault();

    if (parseInt(inputValue, 10) === atiani) {
      setResultText('correct');
      console.log('swori pasuxi');
    } else  {
      setResultText('wrong');
    }
  };

  return (
    <div className='guessnumber'>
        <p className='guessnumber_p'>guess the number, its between 1-20</p>
      <form onSubmit={Gamocnoba}>
        <input
          type="number"
          className="inp_text"
          value={inputValue}
          min={0} max={20} 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn"> guess </button>
      </form>
      <p className="result">{resultText}</p>
    </div>
  );
};

export default Gamosacnobiricxvi;

