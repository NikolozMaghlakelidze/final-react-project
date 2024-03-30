import { useState } from 'react';
import './quote.css'

function Randomquote() {
  const [quotes, setQuotes] = useState([
    { text: 'საუკეთესო შურისძიება არის დიდი წარმატება.', 
    author: 'ფრენკ სინატრა'
   },
    { text: 'დიდი საქმის კეთების ერთადერთი გზა არის გიყვარდეს ის, რასაც აკეთებ',
     author: ' სტივ ჯობსი.'
     },
    { text: 'ყველაზე მნიშვნელოვანი ის არის, რომ ისიამოვნო შენი ცხოვრებით - იყო ბედნიერი - მთავარია.',
     author: 'დალაი ლამა.'
     },
    { text: 'საკუთარი თავის სიყვარული მთელი ცხოვრება რომანის დასაწყისია.', 
    author: 'ოსკარ უაილდი.' 
  },
    { text: 'მუსიკის გარეშე ცხოვრება შეცდომა იქნებოდა', 
    author: 'ფრიდრიხ ნიცშე.'
   },
    { text: 'საუკეთესო საშუალებაა, თუ ვინმეს ენდობით, ენდობა მათ.',
     author: 'ერნესტ ჰემინგუეი.'
     }
  ]);
  const [currentquote, setcurrentquote] = useState(quotes[0]);
  const [newtext, setnewtext] = useState('');
  const [newquoteauthor, setnewauthor] = useState('');

  function rendomi() {
    const randomquote = quotes[Math.floor(Math.random() * quotes.length)];
    setcurrentquote(randomquote);
  }

  function dasamatebeli() {
    if (newtext && newquoteauthor) {
      setQuotes([...quotes, { text: newtext, author: newquoteauthor }]);
      setnewtext('');
      setnewauthor('');
      setcurrentquote({ text: newtext, author: newquoteauthor });
    }
  }

  return (
    <div>
      <p  className='randomquote'> random quote generator</p>
      <div>
        <p>{currentquote.text}</p>
        <p>{currentquote.author}</p>
      </div>
      <button className='randomquote_btn' onClick={rendomi}>new quote</button>
      <p>add your quote</p>
      <form>
        <label>
          your text:
          <input type="text" value={newtext} onChange={(e) => setnewtext(e.target.value)} />
        </label>
        <label>
          your author:
          <input type="text" value={newquoteauthor} onChange={(e) => setnewauthor(e.target.value)} />
        </label>
        <button type="button" onClick={dasamatebeli}>
          add quote
        </button>
      </form>
    </div>
   
  );
}
//   const [currentQuote, setCurrentQuote] = useState(quotes[0]);

//   function rendomi() {
//     const randomquote = quotes[Math.floor(Math.random() * quotes.length)];
//     setCurrentQuote(randomquote);
//   }

//   function dasamatebeli(newQuote) {
//     setQuotes([...quotes, newQuote]);
//     setCurrentQuote(newQuote);
//   }

//   return (
//     <div>
//       <p> random quote generator</p>
//       <div>
//         <p>{currentQuote.text}</p>
//         <p>{currentQuote.author}</p>
//       </div>
//       <button onClick={rendomi}>new quote</button>
//       <p>Add a quote</p>
//       <form>
//         <label >quote Text:</label>
//         <input type="text" className='axali_quote'  />
//         <label >quote Author:</label>
//         <input type="text" className='axali_avtori' />
//         <button onClick={(e) => {
//           e.preventDefault();
//           const damatebuliquote = document.getElementsByClassName('axali_quote').value;
//           const damatebuliavtori = document.getElementsByClassName('axali_avtori').value;
//           dasamatebeli({ text: damatebuliquote, author: damatebuliavtori });
//         }}>add quote</button>
//       </form>
//     </div>
//   );
// }

export default Randomquote;


// import{ useState } from 'react';
// import './quote.css';

// function Randomquote() {
//   const [quotes, setQuotes] = useState([
//     { text: 'საუკეთესო შურისძიება არის დიდი წარმატება.',
//      author: 'ფრენკ სინატრა' },
//     { text: 'დიდი საქმის კეთების ერთადერთი გზა არის გიყვარდეს ის, რასაც აკეთებ', author: ' სტივ ჯობსი.' },
//     { text: 'ყველაზე მნიშვნელოვანი ის არის, რომ ისიამოვნო შენი ცხოვრებით - იყო ბედნიერი - მთავარია.', author: 'დალაი ლამა.' },
//     { text: 'საკუთარი თავის სიყვარული მთელი ცხოვრება რომანის დასაწყისია.', author: 'ოსკარ უაილდი.' },
//     { text: 'მუსიკის გარეშე ცხოვრება შეცდომა იქნებოდა', author: 'ფრიდრიხ ნიცშე.' },
//     { text: 'საუკეთესო საშუალებაა, თუ ვინმეს ენდობით, ენდობა მათ.', author: 'ერნესტ ჰემინგუეი.' }
//   ]);
//   const [currentQuote, setCurrentQuote] = useState(quotes[0]);
//   const [newQuoteText, setNewQuoteText] = useState('');
//   const [newQuoteAuthor, setNewQuoteAuthor] = useState('');

//   function rendomi() {
//     const randomquote = quotes[Math.floor(Math.random() * quotes.length)];
//     setCurrentQuote(randomquote);
//   }

//   function dasamatebeli() {
//     if (newQuoteText && newQuoteAuthor) {
//       setQuotes([...quotes, { text: newQuoteText, author: newQuoteAuthor }]);
//       setNewQuoteText('');
//       setNewQuoteAuthor('');
//       setCurrentQuote({ text: newQuoteText, author: newQuoteAuthor });
//     }
//   }

//   return (
//     <div>
//       <p> random quote generator</p>
//       <div>
//         <p>{currentQuote.text}</p>
//         <p>{currentQuote.author}</p>
//       </div>
//       <button onClick={rendomi}>new quote</button>
//       <p>Add a quote</p>
//       <form>
//         <label>
//           Quote Text:
//           <input type="text" value={newQuoteText} onChange={(e) => setNewQuoteText(e.target.value)} />
//         </label>
//         <label>
//           Quote Author:
//           <input type="text" value={newQuoteAuthor} onChange={(e) => setNewQuoteAuthor(e.target.value)} />
//         </label>
//         <button type="button" onClick={dasamatebeli}>
//           add quote
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Randomquote;