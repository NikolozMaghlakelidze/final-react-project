import { useState } from 'react';

const XiliList = () => {
  const xili = [
    'vashli',
    'banani',
    'ananasi',
    'kitri',
    'pomidori',
    'kivi',
    'portoxali',
    'sazamtro',
    'komshi',
    'mandarini',
    'atami',
    'marwyvi'
  ];

  const [shedegi, setshedegi] = useState(false);
  const [sityvebi, setsityvebi] = useState([]);

  const filterWords = () => {
    const filteredWords = xili.filter(word => word.startsWith('k') || word.length > 8);
    const uppercaseWords = filteredWords.map(word => word.toUpperCase());
    setshedegi(true);
    setsityvebi(uppercaseWords);
  };

  return (
    <div>
      <button onClick={filterWords}>Filter Words</button>
      {shedegi && (
        <p>
          {sityvebi.map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default XiliList;