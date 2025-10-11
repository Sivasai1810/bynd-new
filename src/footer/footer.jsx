import React from 'react'
import Bynd from "../assets/byndlogo.svg"
import { useState } from 'react';
const Footer = () => {
  //  const [showTerms, setShowTerms] = useState(false);

  // const handleTermsClick = () => {
  //   setShowTerms(true);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // const handleBackClick = () => {
  //   setShowTerms(false);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // if (showTerms) {
  //   return (
  //     <div className="terms-page">
  //       <button className="back-button" onClick={handleBackClick}>
  //         ← Back
  //       </button>
        
  //       <div className="terms-container">
  //         <div className="terms-header">
  //           <h1 className="terms-main-title">
  //             Terms of <span className="highlight">use</span>
  //           </h1>
  //           <p className="terms-subtitle">Guidelines and rules for using BYND's services</p>
  //         </div>

  //         <div className="terms-content">
  //           <h2 className="content-title">Terms of Use</h2>

  //           <div className="content-section">
  //             <p className="effective-date">
  //               <strong>Effective Date:</strong> August 14, 2025
  //             </p>
  //           </div>

  //           <div className="content-section">
  //             <p>
  //               These Terms of Use ("Terms") govern your use of BYND ("BYND," "we," "our," or "us"), including our website at{' '}
  //               <a href="https://getbynd.com" className="link">getbynd.com</a> ("Website") and any related services, software, and applications (collectively, the "Services").
  //             </p>
  //           </div>

  //           <div className="content-section">
  //             <p>
  //               By accessing or using our Services, you agree to be bound by these Terms and our{' '}
  //               <a href="#" className="link">Privacy Policy</a>. If you do not agree, do not use the Services.
  //             </p>
  //           </div>

  //           <div className="content-section">
  //             <h3 className="section-heading">1. Eligibility</h3>
  //             <p>
  //               You must be at least *18 years old* to create an account. If you are under 18, you may only use BYND under the supervision of a parent or legal guardian who agrees to be bound by these Terms.
  //             </p>
  //           </div>

  //           <div className="content-section">
  //             <h3 className="section-heading">2. Account Registration</h3>
  //             <ul className="content-list">
  //               <li>You may be required to create an account to access certain features.</li>
  //               <li>You agree to provide accurate, complete, and current information.</li>
  //               <li>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.</li>
  //               <li>You may register using *email/password* or via *Google Sign-In*.</li>
  //             </ul>
  //           </div>

  //           <div className="content-section">
  //             <h3 className="section-heading">3. Subscription & Payments</h3>
  //             <ul className="content-list">
  //               <li>BYND operates on a subscription-based model with monthly or annual renewal.</li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
     <div className='footers'>
      <div className='title'>
        <img src={Bynd} alt='BYND'></img>
        <p>byndhq@gmail.com</p>
      </div>
      <div className='subpart'>
        <p>BYND is in its early stages. We'd love your feedback or suggestions — email us at byndhq@gmail.com or reach out to the founder directly on <a href="https://x.com/uxayaan">X</a></p>
        <hr></hr>
      </div>
      <div className='footer'>
        <p>Terms of use</p>
        <p>Privacy and Cookies policy</p>
        <p>Contact</p>
        <p>© 2025 BYND. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
