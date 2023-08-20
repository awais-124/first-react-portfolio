import React from 'react';
import './Footer.css';

import FooterLinks from './FooterLinks';

import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

import LOGO from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={LOGO} alt="MY LOGO" className="footer__logo-image" />
      </a>
      <FooterLinks />
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100031103824349">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/awaismalik_999/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Muhamma99362556">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; AVCI React Portfolio. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
