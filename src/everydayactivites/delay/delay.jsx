import { useState, useEffect } from 'react';

const DelayedMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('delay message');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default DelayedMessage;