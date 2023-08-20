import React from 'react';
import '../../index.css';
import './Header.css';

import ME from '../../assets/me.jpg';

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home" className="section">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Awais</h1>
        <h5 className="text-light">MERN Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
