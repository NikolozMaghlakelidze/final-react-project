import { useState, useEffect } from "react";

const Taimeri = () => {
  const [counter, setCounter] = useState(0);
  const [mimateba, setmimateba] = useState(false);

  useEffect(() => {
    if (mimateba) {
      const wamebismimateba = setInterval(() => {
        setCounter((wina) => wina + 1);
      }, 1000);

      return () => {
        clearInterval(wamebismimateba);
      };
    }
  }, [mimateba]);

  const dacleareba = () => {
    if (!mimateba) {
      setCounter(0);
    }
    setmimateba(!mimateba);
  };

  return (
    <div>
      <p>gavida  {counter} wami</p>
      <button onClick={dacleareba}>
        {mimateba ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Taimeri;