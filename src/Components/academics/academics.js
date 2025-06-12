import React from 'react';
import '../Services/Services.css';
import './academics.css';

import { AcademicsContent } from '../../content';
import AcademicCard from './academicCard';

const Academics = () => {
  return (
    <section id="academic-support" className="section">
      <h5>{AcademicsContent.subTitle}</h5>
      <h2>{AcademicsContent.title}</h2>
      <div className="container academic__container">
        {AcademicsContent.details.map((item, index) => {
          return <AcademicCard key={index + 1} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Academics;
