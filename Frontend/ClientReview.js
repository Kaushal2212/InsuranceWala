import React from 'react';
import ClientImg from './Images/client.jpg'; 

const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <h4 className="sub-heading white">Testimonials</h4>
        <h2 className="heading white">What Our Customers Say</h2>
        <p className="para-line white">
          Hear from our delighted customers about their experiences with our services. From seamless solutions to
          personalized support, discover why we are a trusted choice for countless individuals and businesses.
          Real stories, genuine feedback, and a shared commitment to excellence.
        </p>
        <div className="testimonial-profile">
          <img
            src={ClientImg}
            alt="Client"
            title="Client"
            className="profile-img"
          />
          <span>
            <h6 className="client-name white">Mrs. Ana Maria</h6>
            <p className="client-location white">NRI</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
