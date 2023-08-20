import React from "react";

const PortfolioCard = (props) => {
  return props.content.map((item) => {
    return (
      <article key={item.id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <h3>{item.title}</h3>
        <div className="portfolio__item-cta">
          <a href={item.github} className="btn">
            Get Code
          </a>
          <a href={item.liveDemo} className="btn btn-primary">
            Live Demo
          </a>
        </div>
      </article>
    );
  });
};

export default PortfolioCard;
