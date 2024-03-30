import { useState } from "react";
import './btn.css'

function Counter() {
  const [count, setCount] = useState(0);

  const mimateba = () => {
    setCount(count + 1);
  };

  const dakleba = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p className="counting_p">counting button</p>
      <p>count: {count}</p>
      <button onClick={mimateba}>+</button>
      <button onClick={dakleba}>-</button>
    </div>
  );
}

export default Counter;