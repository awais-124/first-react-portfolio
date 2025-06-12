import React from 'react';
import './Experience.css';

import { BsPatchCheckFill } from 'react-icons/bs';

const SmallCard = props => {
  return (
    <div className="experience__frontend">
      <h3>{props.title}</h3>
      <div className="experience__content">
        {props.content.map((item, index) => {
          return (
            <article className="experience__details" key={index + 1}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{item.title}</h4>
                <small className="text__light">{item.level}</small>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default SmallCard;
