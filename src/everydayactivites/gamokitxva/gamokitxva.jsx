import { useState } from "react";

const Gamokitxva1 = () => {
  const [pasuxi, setPasuxi] = useState("");

  function qula1() {
    setPasuxi("1 qula");
  }
  function qula2() {
    setPasuxi("2 qula");
  }
  function qula3() {
    setPasuxi("3 qula");
  }
  function qula4() {
    setPasuxi("4 qula");
  }

  return (
    <div className="kitxvari1">
      <p className="kitxva1">ramdeni qalaqia saqartveloshi?</p>
      <div>
        <button onClick={qula2}>48</button>
        <button onClick={qula1}>44</button>
      </div>
      <div>
        <button onClick={qula4}>55</button>
        <button onClick={qula3}>51</button>
      </div>
      <p className="pasuxi">{pasuxi}</p>
    </div>
  );
};

export default Gamokitxva1;
