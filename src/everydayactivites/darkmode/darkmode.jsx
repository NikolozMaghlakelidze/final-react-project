import { useState } from "react"
import './darkmode.css'

const Darkmode = () => {
    const [darkmode, setdarkmode] = useState(false);

    const toggledarkmode = () => {
      setdarkmode(!darkmode);
      document.body.classList.toggle('dark_mode');
    }
    return(
        <div className={darkmode ? 'dark-mode' : ''}>
        <button onClick={toggledarkmode}>turn on dark mode</button>
      </div>
    );
}
export default Darkmode;
