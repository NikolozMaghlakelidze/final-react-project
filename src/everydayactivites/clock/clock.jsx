import  { useState, useEffect } from 'react';
import './clock.css'

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const tbilisisdro = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(tbilisisdro);
    };
  }, []);

  return (
    <div className="dro">
      <p className='saati'>local time: {time}</p>
    </div>
  );
}

export default Clock;