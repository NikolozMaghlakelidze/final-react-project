import { useState } from "react";

 function Cifrebi() {
  const [cifri, setcifri] = useState(1000);

  const momateba = () => {
    setcifri(cifri + 5);
  };

  const dakleba = () => {
    setcifri(cifri - 5);
  };

  return (
    <div>
         <button onClick={momateba}>+</button>
      <p>number:{cifri}</p>
      <button onClick={dakleba}>-</button>
    </div>
  );
}
export default Cifrebi;