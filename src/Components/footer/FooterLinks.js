import React from 'react';
import './Footer.css';

const FooterLinks = () => {
  return (
    <ul className="permalinks">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default FooterLinks;
