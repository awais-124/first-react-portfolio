import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/muhammad-awais-05a019247/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/awais-124" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      {/* <a
        href="https://toyota-i-concept-awais.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineCar />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
