import React from 'react';
import './academics.css';

const AcademicCard = ({ item }) => {
  return (
    <div className="academic-card">
      <div className="image-box">
        <img src={item.image} alt="SERVICES-IMAGE" />
      </div>
      <p className="academic-card__text">{item.detail}</p>
    </div>
  );
};

export default AcademicCard;
