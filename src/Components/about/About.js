import React from 'react';
import './About.css';
import ME from '../../assets/about.jpg';

import { FaAward } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';

import { AboutContent } from '../../content';

const About = () => {
  return (
    <section id="about" className="section">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="MySelf" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdCastForEducation className="about__icon" />
              <h5>{AboutContent.education.title}</h5>
              <small>{AboutContent.education.subTitle}</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{AboutContent.experience.title}</h5>
              <small>{AboutContent.experience.subTitle}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{AboutContent.projects.title}</h5>
              <small>{AboutContent.projects.subTitle}</small>
            </article>
          </div>
          <p>{AboutContent.summary}</p>
          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
