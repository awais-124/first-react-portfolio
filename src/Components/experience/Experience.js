import React from 'react';
import './Experience.css';

import SmallCard from './SmallCard';
import { Skills } from '../../content';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h5>What Skills I Have</h5>
      <h2>My Skill Set</h2>
      <div className="container experience__container">
        {Skills.map((item, index) => {
          return (
            <SmallCard
              content={item.details}
              title={item.title}
              key={index + 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
