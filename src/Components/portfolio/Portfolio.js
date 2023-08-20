import React from 'react';

import './Portfolio.css';

import PortfolioCard from './PortfolioCard';
import { PortfolioContent } from '../../content';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioCard content={PortfolioContent} />
      </div>
    </section>
  );
};

export default Portfolio;
