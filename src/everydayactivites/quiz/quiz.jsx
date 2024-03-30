//  import './quiz.css'
//  const Quiz = () => {
//     function sworipasuxi()  {

// return (
//     <p className='correct'>sworia</p>
// )

//     }
//     function arasworipasuxi() {
//     <p className='wrong'>arasworia</p>
//             }
//     return(
//         <div>
//         <p>choose answer</p>
//         <p>whats the capital of georgia?</p>
//         <div>
//             <button onClick={arasworipasuxi}>batumi</button>
//             <button onClick={sworipasuxi}>tbilisi</button>
//             <button onClick={arasworipasuxi}>kutaisi</button>
//             <button onClick={arasworipasuxi}>sighnagi</button>
//         </div>
//         </div>
//     )
//  }

//  export default Quiz;
import  { useState } from 'react';
import './quiz.css';

const Quiz = () => {
  const [result, setResult] = useState('');

  function pasuxi(isCorrect) {
    setResult(isCorrect ? 'correct' : 'wrong');
  }

  return (
    <div>
      <p>choose answer</p>
      <p>whats the capital of georgia?</p>
      <p>only one is correct</p>
      <div>
       <div>
       <button className='quiz_btn' onClick={() => pasuxi(false)}>batumi</button>
        <button className='quiz_btn' onClick={() => pasuxi(true)}>tbilisi</button>
       </div>
        <div>
        <button className='quiz_btn' onClick={() => pasuxi(false)}>kutaisi</button>
        <button className='quiz_btn' onClick={() => pasuxi(false)}>sighnagi</button>
        </div>
      </div>
      {result === 'correct' ? (
        <p className='correct'>sworia</p>
      ) : result === 'wrong' ? (
        <p className='wrong'>arasworia</p>
      ) : null}
    </div>
  );
};

export default Quiz;