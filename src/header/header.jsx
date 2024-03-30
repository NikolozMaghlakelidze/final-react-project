import React from 'react';
import './header.css' 
import DotBadge from './button';

const Headerbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main_header">
      <button className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line1"></div>
        <div className="burger-line2"></div>
      </button>
      <ul className={`header_ul ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="./header.jsx">homepage</a>
        </li>
        <li>
          <a href="">new kits</a>
        </li>
        <li>
          <a href="">everyday activities</a>
        </li>
      </ul>
      <DotBadge />
    </header>
  );
};
export default Headerbar;
