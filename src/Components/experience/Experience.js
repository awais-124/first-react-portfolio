import React from 'react';
import './Experience.css';

import SmallCard from './SmallCard';
import { ExperienceContent } from '../../content';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h5>What Skills I Have</h5>
      <h2>My Skill Set</h2>
      <div className="container experience__container">
        <SmallCard
          content={ExperienceContent.languages.details}
          title={ExperienceContent.languages.title}
        />
        <SmallCard
          content={ExperienceContent.frontend.details}
          title={ExperienceContent.frontend.title}
        />
        <SmallCard
          content={ExperienceContent.backend.details}
          title={ExperienceContent.backend.title}
        />
        <SmallCard
          content={ExperienceContent.libraries.details}
          title={ExperienceContent.libraries.title}
        />
      </div>
    </section>
  );
};

export default Experience;
