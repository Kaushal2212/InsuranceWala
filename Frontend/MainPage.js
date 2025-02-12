import React, { useState, useEffect } from "react";
import TestimonialSection from "./ClientReview";
import ConsultancySection from "./Consultancy";
import Footer from "./Footer";
import ServicesSection from "./Service";
import './MainPage.css';
import './Style.css';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by checking localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUser(storedUsername);
    }
  }, []);

  const handleNavigation = (path) => {
    if (!user) {
      alert("Please log in to access this page.");
      navigate('/'); // Redirect to login page
    } else {
      navigate(path); // Proceed with navigation
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="row">
            <div className="col hero-content">
              <h2 className="hero-heading white">
                Welcome to The Insurance Wala
              </h2>
              <p className="para-line white">
                Explore our comprehensive insurance plans tailored to meet your needs. We offer peace of mind by
                protecting against unexpected financial challenges, ensuring security and support for you and your
                loved ones. Choose from health, life, and property insurance plans to safeguard your future.
              </p>
              <div className="inner-row">
                <div className="inner-col">
                  <button
                    className="btn btn-full-w btn-blue"
                    onClick={() => handleNavigation('/insurance')}
                  >
                    Explore Plans
                  </button>
                </div>
                <div className="inner-col">
                  <button
                    className="btn btn-full-w btn-yellow"
                  ><a href="/contact">
                    Contact Us
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <TestimonialSection />
      <ConsultancySection />
      <Footer />
    </>
  );
}
