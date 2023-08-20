import React from "react";
import "./Services.css";

import { BiCheck } from "react-icons/bi";

const ServicesCard = (props) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{props.heading}</h3>
      </div>
      <ul className="services__list">
        {props.points.map((text, index) => {
          return (
            <li key={index + 1}>
              <BiCheck className="sevices__list-icon" />
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ServicesCard;
