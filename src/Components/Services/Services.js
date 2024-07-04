import React from "react";
import "./Services.css";

import ServicesCard from "./ServicesCard";
import { ServicesContent } from "../../content";

const Services = () => {
  return (
    <section id="services" className="section">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ServicesCard
          heading="Application Development"
          points={ServicesContent.app}
        />
        <ServicesCard heading="Web Development" points={ServicesContent.web} />
        <ServicesCard heading="Graphic Designing" points={ServicesContent.gd} />
      </div>
    </section>
  );
};

export default Services;
