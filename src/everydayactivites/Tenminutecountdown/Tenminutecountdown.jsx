import { useState, useEffect } from "react";

function Tenminutecountdown() {
  const [counter, setCounter] = useState(600);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <p>10 minute countdown</p>
      <p>countdown: {counter} second left</p>
    </div>
  );
}

export default Tenminutecountdown;