// Portfolio.js
import React, { useState } from 'react';

import './Portfolio.css';
import PortfolioCard from './PortfolioCard';
import Modal from './Modal'; // Import modal
import { PortfolioContent } from '../../content';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioCard
          content={PortfolioContent}
          onDetailsClick={setSelectedProject}
        />
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Portfolio;
