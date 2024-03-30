import { useState } from 'react';

const factebi = [
  { weli: 2000,
     facti: 'USB flash drive was created'
     },
  { weli: 2001,
     facti: 'web page wikipedia was created'
     },
  { weli: 2002, 
    facti: 'bluetooth was created'
 },
  { weli: 2003, 
    facti: 'Iraq was started' 
},
  { weli: 2004, 
    facti: 'facebook was created' 
},
  { weli: 2005, 
    facti: 'YouTube was created' 
},
  { weli: 2006, 
    facti: 'playstation 3 was released'
 },
  { weli: 2007, 
    facti: ' first iPhone was released'
 },
  { weli: 2008, 
    facti: 'android was created' 
},
  { weli: 2009, 
    facti: 'we could buy bitcoin' 
},
  { weli: 2010, 
    facti: 'instangram was created' 
},
  { weli: 2011, 
    facti: 'snapchat was created' 
},
  { weli: 2012, 
    facti: 'tesla model s was released' 
},
  { weli: 2013, 
    facti: 'President Obama was inaugurated for his second term'
  },
  { weli: 2014, 
    facti: 'playstation 4 was released' 
},
  { weli: 2015, 
    facti: 'fidget spinner was released' 
},
  { weli: 2016, 
    facti: 'tiktok was created'
 },
  { weli: 2017, 
    facti: 'iphone x was released' 
},
  { weli: 2018, 
    facti: 'fortnite was created'
 },
  { weli: 2019, 
    facti: '5G was created'
 },
  { weli: 2020, 
    facti: 'covid-19 pandemic began' 
},
  { weli: 2021, 
    facti: 'NFT-s was created' 
},
  { weli: 2022, 
    facti: 'argentina won fifa world cup'
 },
  { weli: 2023,
     facti: ' world population reached 8 billion' 
    },
  { weli: 2024,
     facti: 'georgia qualified for euro 24 for first time' 
    },
];

const Facts = () => {
    const [weli, setweli] = useState('');
    const [facti, setFacti] = useState('');
  
    const washla = (event) => {
      const inputweli = parseInt(event.target.value, 10);
      setweli(inputweli);
      setFacti('');
    };
  
    const factibtn = () => {
      if (weli >= 2000 && weli <= 2024) {
        const currentweli = factebi.find((item) => item.weli === weli);
        if (currentweli) {
          setFacti(currentweli.facti);
        }
      }
    };
  
    return (
      <div>
        <p>see what happened between 2000 and 2024 years</p>
        <input
         type="number"
          value={weli} 
          min={2000} max={2024}
           onChange={washla}
         />
        <button onClick={factibtn}>see fact</button>
        <p>{facti}</p>
      </div>
    );
}

export default Facts;