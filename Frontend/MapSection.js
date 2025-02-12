import React from 'react';
import './Contact.css';

const MapSection = () => {
  return (
    <section className="map">
      <div className="container">
        <h2 className="heading">
          Get in Touch with us
        </h2>

        <p className="para-line">
          Discover how we can help you elevate your lifestyle with innovative, sustainable solutions. From
          activated charcoal innovations to artisanal, farm-to-table experiences, we bring authenticity and
          creativity to everything we do. Whether you're looking for modern design, culinary adventures, or
          eco-friendly products, our mission is to blend tradition and modernity with a touch of craft.
        </p>

        <p className="para-line map-location">
          <p>Insurance Wallah, Pune</p> 
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1589.2485869048317!2d73.89089304733264!3d18.66886627149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736082452798!5m2!1sen!2sin"
          width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default MapSection;
