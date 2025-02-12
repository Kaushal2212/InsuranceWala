import React from 'react';
import './Style.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="row">
          <div className="col hero-content">
            <h2 className="hero-heading white">
              Insurance for your Secure Family
            </h2>
            <p className="para-line white">
              The importance of safeguarding your family's future with comprehensive insurance coverage. It
              offers peace of mind by protecting against unexpected financial challenges, ensuring that your
              loved ones are secure and supported in times of need. This plan is designed to cover various
              aspects of life, such as health, life, and property, providing a reliable safety net tailored to
              meet your family’s unique needs.
            </p>
            <div className="inner-row">
              <div className="inner-col">
                <button className="btn btn-full-w btn-blue">
                  <a href="#">Find An Agency</a>
                </button>
              </div>
              <div className="inner-col">
                <button className="btn btn-full-w btn-yellow">
                  <a href="#">Buy Insurance</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col hero-blank-col"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
