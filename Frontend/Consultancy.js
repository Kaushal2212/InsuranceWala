import React from 'react';
import AgentImg from './Images/agent.jpg'; // Adjust the path as necessary

const ConsultancySection = () => {
  return (
    <section className="consultancy">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="lead-form">
              <h2>Free 1 Hour Consultancy Session</h2>
              <form action="">
                <div className="input-field">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>

                <div className="input-field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Your email address" />
                </div>

                <button className="btn btn-blue">
                  <a href="#">Get A Quote</a>
                </button>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="lead-form agent-card">
              <img
                src={AgentImg}
                alt="Agent"
                title="Agent"
                className="agent-img"
              />
              <h3 className="agent-name">Mr. Kaushal Babasaheb Kadam</h3>
              <p className="para-line">Senior Insurance Agent</p>
              <h6 className="agent-number">
                <ion-icon name="call-outline"></ion-icon> 8421331753
              </h6>
              <h6 className="agent-email">
                <ion-icon name="mail-unread-outline"></ion-icon> kadamkaushal40@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
