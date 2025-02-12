import React from 'react';
import AboutImg from './Images/about-img.jpg';
import Partner1 from './Images/Partner1.png';
import Partner2 from './Images/Partner2.png';
import Partner3 from './Images/Partner3.png';
import Partner4 from './Images/Partner4.jpg';
import Partner5 from './Images/Partner5.jpg';
import Partner6 from './Images/Partner6.png';

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="sub-heading">About the Company</h4>
            <h2 className="heading">Our Story</h2>
            <p className="para-line">
              An insurance company with extensive experience in the field has a deep understanding of risk
              management and a proven track record in offering reliable financial protection to individuals
              and businesses. With years of industry expertise, such companies have developed effective
              processes for underwriting, claims handling, and customer service. Their knowledge allows them
              to offer tailored insurance solutions, anticipate emerging risks, and adapt to changing market
              conditions. This experience ensures that clients receive timely, accurate assistance and a
              trustworthy safety net in case of unexpected events.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-line">
                <h5 className="highlight-line-heading">Experienced Team</h5>
              </div>
              <div className="about-highlight-line">
                <h5 className="highlight-line-heading">Online Insurance Assistant</h5>
              </div>
              <div className="about-highlight-line">
                <h5 className="highlight-line-heading">Insurance Coverage</h5>
              </div>
            </div>

            <button className="btn btn-blue btn-full-w">
              <a href="#">Read More</a>
            </button>
          </div>
          <div className="col">
            <img src={AboutImg} alt="About Insurance" title="About Insurance" className="about-img" />
          </div>
        </div>

        <div className="partners">
          <div className="row">
            <div className="col">
              <h4 className="sub-heading">Companies we work with</h4>
              <h2 className="heading">Insurance Partners</h2>
            </div>
            <div className="col partners-grid">
              <img src={Partner1} alt="Partner" title="Partner" className="partner-img" />
              <img src={Partner2} alt="Partner" title="Partner" className="partner-img" />
              <img src={Partner3} alt="Partner" title="Partner" className="partner-img" />
              <img src={Partner4} alt="Partner" title="Partner" className="partner-img" />
              <img src={Partner5} alt="Partner" title="Partner" className="partner-img" />
              <img src={Partner6} alt="Partner" title="Partner" className="partner-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
