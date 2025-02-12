import React from 'react';
import './Contact.css';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="info-name white">Support Hotline</h3>
            <h6 className="info-detail white">1800 - 6383 - 35246</h6>
          </div>
          <div className="col">
            <h3 className="info-name white">Online Support</h3>
            <h6 className="info-detail white">Chat with an Insurance Agent</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
