import React from "react";
import "./Contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const ContactCard = (props) => {
  return (
    <article className="contact__option">
      {props.content.title === "Email" && (
        <MdOutlineEmail className="contact__option-icon" />
      )}
      {props.content.title === "Messenger" && (
        <RiMessengerLine className="contact__option-icon" />
      )}
      {props.content.title === "Whatsapp" && (
        <BsWhatsapp className="contact__option-icon" />
      )}
      <h4>{props.content.title}</h4>
      <h5>{props.content.name}</h5>
      <a href={props.content.link} target="_blank" rel="noreferrer">
        Send a message
      </a>
    </article>
  );
};

export default ContactCard;
