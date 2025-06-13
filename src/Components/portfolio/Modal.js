// Modal.js
import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div
        className="modal__content"
        onClick={e => e.stopPropagation()}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${project.image})`,
        }}
      >
        <div className="modal__details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="modal__actions">
            <a
              href={project.github}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
