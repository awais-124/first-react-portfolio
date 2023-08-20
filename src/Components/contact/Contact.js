import React from "react";
import "./Contact.css";

import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

import { ContactContent } from "../../content";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactCard content={ContactContent.emailTo} />
          <ContactCard content={ContactContent.whatsapp} />
          <ContactCard content={ContactContent.messenger} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
