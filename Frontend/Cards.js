import React, { useState, useEffect } from 'react';
import './Cards.css'; // Optional CSS for styling
import './Nav.css';
import Footer from './Footer';
import './Style.css';
import { useNavigate } from 'react-router-dom';

const policies = [
  { policyName: "LIC's Jeevan Lakshya", policyDescription: "A plan for financial security and savings.", logo: "https://www.licagentpune.com/wp-content/uploads/2020/07/lic-jeevan-lakshya.jpg", policyPremium: 8000,policyType: "life" },
  { policyName: "LIC's New Jeevan Anand", policyDescription: "Combination of savings and protection.", logo: "https://www.licagentpune.com/wp-content/uploads/2020/07/jeevan-anand.jpg", policyPremium: 7000,policyType: "life" },
  { policyName: "LIC's Jeevan Labh Plan", policyDescription: "Limited premium payment with long-term benefits.", logo: "https://cdn.zeebiz.com/hindi/sites/default/files/2022/01/04/74612-new-project-2022-01-04t154842677.jpg?im=FitAndFill=(1200,900)", policyPremium: 6000,policyType: "life" },
  { policyName: "LIC's Jeevan Tarun", policyDescription: "Designed for children's education and future.", logo: "https://www.licagentpune.com/wp-content/uploads/2020/07/lic-jeevan-tarun.jpg", policyPremium: 5000,policyType: "life" },
  { policyName: "LIC's Amritbaal", policyDescription: "Special plan for children with unique benefits.", logo: "https://images.businessupturn.com/wp-content/uploads/2024/02/Amritbaal-use.jpg", policyPremium: 4000,policyType: "life" },
  { policyName: "Star's Comprehensive Insurance Policy", policyDescription: "Comprehensive health insurance for the entire family.", logo: "https://www.insuranceportal.in/images/products/star-comprehensive-individual.png", policyPremium: 20000,policyType: "health" },
  { policyName: "Star's Family Health Optima Insurance Plan", policyDescription: "Affordable family health insurance plan.", logo: "https://skbimagyan.com/wp-content/uploads/2022/12/Star-Family.jpg", policyPremium: 15000,policyType: "health" },
  { policyName: "Star's Super Surplus Insurance Policy", policyDescription: "High coverage health plan for surplus needs.", logo: "https://www.cityunionbank.com/assets/frontend/images/health/star-super-img.jpg", policyPremium: 10000,policyType: "health" },
  { policyName: "Star's Senior Citizens Red Carpet", policyDescription: "Tailored for senior citizens' health coverage.", logo: "https://5.imimg.com/data5/CJ/CI/UT/SELLER-22065380/senior-citizens-red-carpet-health-insurance-plan.jpg", policyPremium: 25000,policyType: "health" },
  { policyName: "Care's Family Health Insurance", policyDescription: "Health coverage for the entire family.", logo: "https://5.imimg.com/data5/DY/CS/DQ/SELLER-9473815/family-floater-health-insurance-500x500.png", policyPremium: 15000,policyType: "health" },
  { policyName: "Care's Supreme Family Plan", policyDescription: "Premium family health insurance plan.", logo: "https://www.careinsurance.com/kitextproxy/cms-careinsurance-com/upload_master/landingpages/upload/care-supreme-banner.png", policyPremium: 15000,policyType: "health" },
  { policyName: "Bajaj's Third-Party insurance", policyDescription: "Mandatory third-party vehicle insurance.", logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2020/07/Third-Party-Insurance-For-Bike-The-Essential-Guide.jpg", premium: 8000,policyType: "motor" },
  { policyName: "Bajaj's Zero Depreciation Cover", policyDescription: "No depreciation cost on claims.", logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2021/03/what-is-zero-dep.jpg", policyPremium: 10000,policyType: "motor" },
  { policyName: "Bajaj's Comprehensive Damage Coverage", policyDescription: "Extensive vehicle protection plan.", logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2023/11/engine-protectors-and-add-ons-for-bike-insurance.png", policyPremium: 12000,policyType: "motor" },
  { policyName: "Bajaj's Engine Protection Cover", policyDescription: "Protects your vehicle's engine from damages.", logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2023/12/engine-protection-cover.png", policyPremium: 15000, policyType: "motor" },
  {policyName: "LIC's Bima Jyoti",policyDescription: "Guaranteed lump sum benefit with life cover.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiaFrTWXlU8C3D3Wgx6SlamU-OwEdkiQHPA&s",policyPremium: 9000,policyType: "life"},
  {policyName: "LIC's Saral Jeevan Bima",policyDescription: "A pure risk life insurance plan for financial protection.",logo: "https://5.imimg.com/data5/SELLER/Default/2021/7/RM/KF/HQ/130595182/lic-s-saral-jeevan-bima.jpg",policyPremium: 7500,policyType: "life"},
  {policyName: "Star's Young Star Insurance Policy",policyDescription: "Tailored health insurance plan for young individuals and families.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_s8cKm5wj7TtRDmSqHGpxzNrradwWeBbmxw&s",policyPremium: 18000,policyType: "health"},
  {policyName: "Star's Diabetes Safe Insurance Policy",policyDescription: "Exclusive health plan covering diabetes and related complications.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50ouOCmX0kyp3ZvToswD9hy83kiZvxgJsUQ&s",policyPremium: 17000,policyType: "health"},
  {policyName: "Care's Enhance Super Top-up",policyDescription: "A top-up health plan to enhance existing coverage.","logo": "https://www.careinsurance.com/kitextproxy/cms-careinsurance-com/upload_master/landingpages/upload/supreme-enhance.jpg",policyPremium: 14000,policyType: "health"},
  {policyName: "Max Life Smart Secure Plus",policyDescription: "A term insurance plan offering financial security with flexible benefits.",logo: "https://www.holisticinvestment.in/wp-content/uploads/2022/09/Max-Life-Smart-Secure-Plus-Plan.png",policyPremium: 16000,policyType: "life"},
  {policyName: "New India's Asha Kiran Policy",policyDescription: "A health insurance plan for families with girl children.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayZ2KKf1KCtrELJW7mMpV87Tmt4C4RtSl6Q&s",policyPremium: 13000,policyType: "health"},
  {policyName: "Bajaj Allianz's Drive Assure Elite",policyDescription: "Add-on coverage providing extra benefits for car insurance.",logo: "https://www.policybachat.com/ArticlesImages/630.jpg",policyPremium: 11000,policyType: "motor"},
  {policyName: "Bajaj Allianz's Personal Accident Cover",policyDescription: "Covers accidental injuries, disabilities, and death.",logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2024/03/brief-guide-on-group-personal-accident-cover.png",policyPremium: 12000,policyType: "motor"},
  {policyName: "LIC's Jeevan Umang",policyDescription: "Whole life policy with survival benefits and life cover.",logo: "https://licpcmc.com/Images/lic-jeevan-umang.jpg",policyPremium: 9500,policyType: "life"},
  {policyName: "LIC's Dhan Rekha",policyDescription: "Guaranteed returns with life insurance protection.",logo: "https://licagentsbangalore.com/images/lic%20plans/small/lic-dhan-rekha.jpg",policyPremium: 8500,policyType: "life"},
  {policyName: "Star's Medi Classic Insurance Policy",policyDescription: "Comprehensive hospitalization coverage with no sub-limits.",logo: "https://5.imimg.com/data5/YA/HL/GZ/SELLER-22065380/medi-classic-insurance-policy-indv-.jpg",policyPremium: 15500,policyType: "health"},
  {policyName: "Star's Cancer Care Insurance Policy",policyDescription: "Dedicated health plan for cancer treatment expenses.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOyuwiewuuELDxmK8PEQ61bJrDQpOHYioDg&s",policyPremium: 22000,policyType: "health"},
  {policyName: "Care's Joy Maternity Insurance",policyDescription: "Comprehensive maternity and newborn cover.",logo: "https://smcinsurance.com/SocialImages/2024/April/care-joy-maternity-health-insurance-plan.jpg",policyPremium: 18000,policyType: "health"},
  {policyName: "Care's Senior Citizen Health Plan",policyDescription: "Exclusive healthcare plan for senior citizens.",logo: "https://www.hdfcergo.com/images/default-source/optima-secure/senior-citizen-1.svg",policyPremium: 24000,policyType: "health"},
  {policyName: "Max Life Online Term Plan Plus",policyDescription: "Online term insurance plan with flexible payout options.",logo: "https://mic-wordpress.s3.amazonaws.com/uploads/max-life-insurance-launches-online-term-plan-plus-1469273918.jpg",policyPremium: 13500,policyType: "life"},
  {policyName: "New India's Family Floater Mediclaim Policy",policyDescription: "Affordable family health insurance with wide coverage.",logo: "https://navi.com/blog/wp-content/uploads/2021/12/Best-Family-Floater-Health-Insurance-Plans-in-India.jpg",policyPremium: 14500,policyType: "health"},
  {policyName: "Bajaj Allianz's Key Protect Cover",policyDescription: "Covers the cost of replacing lost or stolen vehicle keys.",logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2024/11/Ideal-Car-Insurance-Coverage-For-City-Drivers.png",policyPremium: 5000,policyType: "motor"},
  {policyName: "Bajaj Allianz's Roadside Assistance Cover",policyDescription: "24x7 emergency roadside assistance for vehicle breakdowns.",logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2023/02/meaning-24x7-rsa-in-car-insurance.png",policyPremium: 7000,policyType: "motor"},
  {policyName: "LIC's Jeevan Pragati",policyDescription: "A combination of endowment and term assurance, providing financial security along with risk coverage.",logo: "https://cms-img.coverfox.com/lic-jeevan-pragati.jpg",policyPremium: 8500,policyType: "life"},
  {policyName: "LIC's Jeevan Akshay-VII",policyDescription: "A pension plan that provides immediate annuity after retirement for a secure future.",logo: "https://zfunds-public.s3.ap-south-1.amazonaws.com/articlesImage/1608796103255",policyPremium: 12000,policyType: "life"},
  {policyName: "Star's Heartbeat Critical Illness Insurance",policyDescription: "Covers critical illnesses like heart attacks, cancer, and strokes for financial protection.",logo: "https://5.imimg.com/data5/SELLER/Default/2022/6/KT/AA/JR/13931934/untitled-500x500.png",policyPremium: 18000,policyType: "health"},
  {policyName: "Star's Health Protector Plus",policyDescription: "A complete health insurance plan that offers high coverage for hospitalization and medical expenses.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_GzdAY49sQeeN04GTRoqb7LrQT1QScWjj5flRhCuNcrkmBWFIBpJZXWqNaaBJyWYogo&usqp=CAU",policyPremium: 25000,policyType: "health"},
  {policyName: "Care's Health Insurance Plan",policyDescription: "Affordable family health insurance covering hospitalization, surgeries, and medical treatments.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0THV1Jao_Om8rkR53swclSgz3Oy2wishyw&s",policyPremium: 15000,policyType: "health"},
  {policyName: "Care's Critical Illness Insurance",policyDescription: "Provides financial support for critical illnesses such as cancer, kidney failure, and more.",logo: "https://www.hdfcergo.com/images/default-source/health-insurance/critical-illness_need-of-hour_mobile.svg?sfvrsn=d26e32fc_2",policyPremium: 22000,policyType: "health"},
  {policyName: "New India Assurance's Family Floater Health Policy",policyDescription: "Comprehensive coverage for all members of the family with a single sum insured.",logo: "https://www.probusinsurance.com/wp-content/uploads/2021/12/new-india-health-insurance.png",policyPremium: 30000,policyType: "health"},
  {policyName: "New India Assurance's Travel Insurance",policyDescription: "Global travel insurance for medical emergencies, trip cancellations, and lost baggage.",logo: "https://static.pbcdn.in/cdn/images/articles/travel/best-travel-insurance-policies.jpg",policyPremium: 12000,policyType: "health"},
  {policyName: "Max Life Smart Wealth Plan",policyDescription: "A unit-linked plan offering wealth creation opportunities with life cover.",logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXS2eTpQhvlG18Y3bwdd2TK9Mqggb9HNyow&s",policyPremium: 15000,policyType: "life"},
  {policyName: "Max Life Endowment Plan",policyDescription: "Endowment plan with risk coverage and savings for your future financial needs.",logo: "https://img.yumpu.com/49973268/1/500x640/60-yr-endowment-plan-eng-max-life-insurance.jpg",policyPremium: 10000,policyType: "life"},
  {policyName: "Bajaj Allianz's Two-Wheeler Insurance",policyDescription: "Complete two-wheeler insurance with coverage for accidents, thefts, and natural calamities.",logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2023/11/engine-protectors-and-add-ons-for-bike-insurance.png",policyPremium: 5000,policyType: "motor"},
  {policyName: "Bajaj Allianz's Personal Accident Insurance",policyDescription: "Provides financial security for the family in case of accidental death or disability.",logo: "https://www.bajajallianz.com/blog/wp-content/uploads/2023/09/why-opt-for-an-online-health-insurance-plan.png",policyPremium: 7000,policyType: "health"}
];

const InsuranceCard = ({ policyName, policyDescription, logo, policyPremium, policyType }) => {
  const [clientId, setClientId] = useState(null); // To store clientId of logged-in user
  const [cart, setCart] = useState([]); // To store policies added to cart
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Fetch clientId on component mount (simulating authentication check)
  useEffect(() => {
    const storedClientId = localStorage.getItem('clientId'); // Assuming clientId is stored in localStorage
    if (storedClientId) {
      setClientId(storedClientId);
    } else {
      // Handle the case if clientId is not found (e.g., user not logged in)
      console.error('User is not logged in.');
    }
  }, []);

  const handleViewDetails = () => {
    if (!clientId) {
      window.alert('Please log in to view policy details.');
      return;
    }

    // Navigate to the policy details page with policy details
    navigate('/policy-details', { state: { policyName, policyType, policyPremium, policyDescription, logo } });
  };

  const handleAddToCart = () => {
    if (!clientId) {
      window.alert('Please log in to add policies to the cart.');
      return;
    }

    // Check if the cart already has a policy
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (currentCart.length === 0) {
      // Add the policy to the cart if it's empty
      const newCart = [
        { policyName, policyType, policyPremium, policyDescription, logo }
      ];
      
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
      window.alert('Policy added to the cart!');
      navigate('/cart')
    } else {
      window.alert('You can only add one policy to the cart.');
    }
  };
  return (
    <div className="insurance-card">
  <img src={logo} alt={policyName} className="insurance-logo" />
  <h3 className="insurance-title">{policyName}</h3>
  <h3 className="insurance-type">Type: {policyType}</h3>
  <p className="insurance-description">{policyDescription}</p>
  <p className="insurance-price">Premium: ₹{policyPremium}</p>
  <div className="button-container">
    <button className="details-btn" onClick={handleViewDetails}>View Details</button>
    <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
  </div>
</div>
  );
};

const InsuranceCards = () => {
  return (
    <>
      <div className="insurance-cards-container">
        {policies.map((policy, index) => (
          <InsuranceCard
            key={index}
            policyName={policy.policyName}
            policyType={policy.policyType}
            policyDescription={policy.policyDescription}
            logo={policy.logo}
            policyPremium={policy.policyPremium}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default InsuranceCards;
