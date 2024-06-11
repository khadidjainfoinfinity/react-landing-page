import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">logo</div>
      <div className="menu">
        <button onClick={handleMenuToggle}>
          <img src="/menu-burger.png" alt="Menu" />
        </button>
      </div>
      <ul className="nav">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#root">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={`phone ${menuOpen ? 'open' : ''}`} id="myDIV">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#root">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
