import React from 'react';
import Service from './Images/services.jpg';

const ServicesSection = () => {
  return (
    <section className="our-services">
      <div className="container">
        <img
          src={Service}
          className="service-img"
          alt="Our Services"
          title="Our Services"
        />

        <h4 className="sub-heading">Services We Provide</h4>
        <h2 className="heading">Insurance Solutions</h2>
        <p className="para-line head-desc">
          Comprehensive Protection for Every Aspect of Your Life
          <br />
          Description: We provide a range of insurance solutions to safeguard your home, vehicle, health, travels,
          and loved ones. Explore our tailored plans designed to offer peace of mind and financial security in every situation.
        </p>

        <div className="services">
          <div className="service">
            <h2 className="service-heading">Home</h2>
            <p className="para-line">
              Protect your home and belongings with comprehensive coverage tailored to your needs.
            </p>
          </div>
          <div className="service">
            <h2 className="service-heading">Auto</h2>
            <p className="para-line">
              Stay secure on the road with customizable plans for your car, bike, or other vehicles.
            </p>
          </div>
          <div className="service">
            <h2 className="service-heading">Travel</h2>
            <p className="para-line">
              Travel worry-free with coverage for medical emergencies, cancellations, and lost luggage.
            </p>
          </div>
          <div className="service">
            <h2 className="service-heading">Life</h2>
            <p className="para-line">
              Ensure your family's financial security with our trusted life insurance plans.
            </p>
          </div>
          <div className="service">
            <h2 className="service-heading">KidCare</h2>
            <p className="para-line">
              Invest in your child's future with health and education-focused plans.
            </p>
          </div>
          <div className="service">
            <h2 className="service-heading">Health</h2>
            <p className="para-line">
              Access the best medical care with affordable health insurance plans for you and your family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
