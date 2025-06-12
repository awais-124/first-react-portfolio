// PortfolioCard.js
import React from 'react';

const PortfolioCard = ({ content, onDetailsClick }) => {
  return content.map(item => (
    <article key={item.id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <div className="portfolio__item-cta">
        <a href={item.github} className="btn" target="_blank">
          Get Code
        </a>
        <a className="btn btn-primary" onClick={() => onDetailsClick(item)}>
          Details
        </a>
      </div>
    </article>
  ));
};

export default PortfolioCard;
