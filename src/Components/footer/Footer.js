import React from 'react';
import './Footer.css';

import FooterLinks from './FooterLinks';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { TfiLinkedin } from 'react-icons/tfi';
import { FaGithub } from 'react-icons/fa6';

import LOGO from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={LOGO} alt="MY LOGO" className="footer__logo-image" />
      </a>
      <FooterLinks />
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/muhammad-awais-05a019247/"
          target="blank"
        >
          <TfiLinkedin />
        </a>
        <a href="https://github.com/awais-124" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100031103824349"
          target="blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/awaismalik_999/" target="blank">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Muhammad Awais Portfolio. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
