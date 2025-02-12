import React from 'react';
import './Style.css';
import './About.css';

function CompanyValues() {
    return (
        <section className="values">
            <div className="container">
                <h2 className="heading">Company Values</h2>

                <div className="company-values">
                    <div className="value">
                        <h4 className="value-heading">Simplicity</h4>
                        <p className="para-line">
                            Simplicity is about focusing on what truly matters by removing unnecessary complexity.
                        </p>
                    </div>
                    <div className="value">
                        <h4 className="value-heading">Integrity</h4>
                        <p className="para-line">
                        Integrity is the cornerstone of trust, built on honesty and strong moral principles.
                        </p>
                    </div>
                    <div className="value">
                        <h4 className="value-heading">Accountability</h4>
                        <p className="para-line">
                        Accountability is about owning your actions and their outcomes, both positive and negative.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyValues;
