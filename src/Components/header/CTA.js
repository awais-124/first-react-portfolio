import React from 'react';

const CTA = () => {
  const Helper = () => {
    alert('Abhi nhi bnaaye!');
  };

  return (
    <div className="cta">
      <a href="#home" className="btn" onClick={Helper}>
        Download CV
      </a>
      <a
        href="#contact"
        className="btn btn-primary
      "
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
