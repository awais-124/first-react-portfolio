import React from 'react';
import './Services.css';

import ServicesCard from './ServicesCard';
import { ServicesContent } from '../../content';

const Services = () => {
  return (
    <section id="services" className="section">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {ServicesContent.map((item, index) => {
          return (
            <ServicesCard
              key={index + 1}
              heading={item.title}
              points={item.details}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
