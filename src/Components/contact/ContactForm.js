import React, { useRef } from "react";

import "./Contact.css";

import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q4iozne",
        "template_55sqv8u",
        form.current,
        "WXsTaQgQmEpBZdRKg"
      )
      .then(
        (result) => {
          if (result.text === "OK") alert("Email Sent Successfully!");
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="name" name="name" placeholder="Your FullName" required />
      <input type="email" name="email" placeholder="Your  Email" required />
      <textarea name="message" rows="7" placeholder="Your Message" required />
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
