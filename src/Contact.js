import React from 'react';
import './styling/Contact.css';

function Contact() {
  return (
    <div className="contact-content" id="contact">
      <span className="contact-title">CONTACT</span>

      <div className="contact-block-pages">
        <div className="contact-block">EMAIL: IMANIMGOMEZ@GMAIL.COM</div>
        <div className="contact-block">
          <a href="https://www.instagram.com/imanimgomez/" target="_blank" rel="noopener noreferrer">PERSONAL INSTAGRAM</a>
        </div>
        <div className="contact-block">
          <a href="https://www.instagram.com/imanigomezphotography/" target="_blank" rel="noopener noreferrer">PHOTO INSTAGRAM</a>
        </div>
        <div className="contact-block">
          <a href="https://www.linkedin.com/in/imani-gomez-82084520a/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
