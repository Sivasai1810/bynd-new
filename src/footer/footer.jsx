// import React from 'react'
// import Bynd from "../assets/byndlogo.svg"
// import { useState } from 'react';
// const Footer = () => {
//   return (
//      <div className='footers'>
//       <div className='title'>
//         <img src={Bynd} alt='BYND'></img>
//         <p>byndhq@gmail.com</p>
//       </div>
//       <div className='subpart'>
//         <p>BYND is in its early stages. We'd love your feedback or suggestions — email us at byndhq@gmail.com or reach out to the founder directly on <a href="https://x.com/uxayaan">X</a></p>
//         <hr></hr>
//       </div>
//       <div className='footer'>
//         <p>Terms of use</p>
//         <p>Privacy and Cookies policy</p>
//         <p>Contact</p>
//         <p>© 2025 BYND. All rights reserved</p>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React, { useState } from 'react';
import Bynd from "../assets/byndlogo.svg"
const Footer = () => {

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy,setShowprivacy] =useState(false)

  const handleTermsClick = () => {
    setShowTerms(true);
    setShowprivacy(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
    setShowprivacy(false)
  };

  return (
    <div>
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
          <p onClick={handleTermsClick} style={{ cursor: 'pointer'}}>Terms of use</p>
          <p onClick={handleTermsClick}>Privacy and Cookies policy</p>
          <p>Contact</p>
          <p>© 2025 BYND. All rights reserved</p>
        </div>
      </div>

      {showTerms && (
        <div className='modal-overlay' onClick={handleCloseTerms}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='close-btn' onClick={handleCloseTerms}>×</button>
            
            <div className='terms-container'>
              <h1>Terms of <span className='highlight'>use</span></h1>
              <p className='subtitle'>Guidelines and rules for using BYND's services</p>

              <div className='terms-content'>
                <div className='terms-box'>
                  <h2>Terms of Use</h2>
                  <p><strong>Effective Date:</strong> August 14, 2025</p>

                  <p>These Terms of Use ("Terms") govern your use of BYND ("BYND," "we," "our," or "us"), including our website at <a href="https://getbynd.com">getbynd.com</a> ("Website") and any related services, software, and applications (collectively, the "Services").</p>

                  <p>By accessing or using our Services, you agree to be bound by these Terms and our <span>Privacy Policy.</span> If you do not agree, do not use the Services.</p>

                  <h3>1. Eligibility</h3>
                  <p>You must be at least *18 years old* to create an account. If you are under 18, you may only use BYND under the supervision of a parent or legal guardian who agrees to be bound by these Terms.</p>

                  <h3>2. Account Registration</h3>
                  <ul>
                    <li>You may be required to create an account to access certain features.</li>
                    <li>You agree to provide accurate, complete, and current information.</li>
                    <li>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.</li>
                    <li>You may register using email/password or via Google Sign-In.</li>
                  </ul>

                  <h3>3. Subscription & Payments</h3>
                  <ul>
                    <li>BYND operates on a subscription-based model with monthly or annual renewal.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div className='modal-overlay' onClick={handleCloseTerms}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='close-btn' onClick={handleCloseTerms}>×</button>
            
            <div className='terms-container'>
              <h1>Privacy and  <span className='highlight'> cookies </span> policy</h1>
              <p className='subtitle'>Our approach to user privacy, personal data, and cookies</p>

              <div className='terms-content'>
                <div className='terms-box'>
                  <h2>Privacy and Cookies Policy</h2>
                  <p>How BYND handles your data and protects your privacy.</p>
        <h2> Last Updated: <span style={{color:'gray'}}>August 19, 2025</span> </h2>

                  <h3>1. Introduction</h3>
                  <p>BYND (“we,” “our,” or “us”) values your privacy. This Privacy and Cookies Policy explains how we collect, use, store, and protect your information when you use our platform (“Services”). By accessing or using BYND, you agree to this Policy. If you do not agree, please discontinue use.</p>

                  <h3>2. Information We Collect</h3>
                  <p>We may collect the following categories of information:</p>
                  <ul>
                    <li>Account Information – Name, email address, password, and profile details you provide.</li>
                    <li>Assignment Data – Links (e.g., Figma embed links) and files you upload in universal formats (PDF, PNG, JPEG).</li>
                    <li>Communication Data – Notifications, support inquiries, or feedback you provide.</li>
                    <li>Payment Data – If you subscribe to BYND Pro, billing and payment details are processed securely via third-party payment providers.</li>
                    <li>Cookies & Tracking Data – To improve user experience, monitor activity, and measure analytics (see Section 7).</li>
                  </ul>

                  <h3>3.How We Use Your Information</h3>
                  <p>We use collected data to:</p>
                  <ul>
                    <li>Provide, operate, and maintain BYND’s Services.</li>
                 <li>Track assignment engagement (views, insights, metrics).</li>
                 <li>Deliver notifications and follow-up reminders.</li>
                 <li>Manage billing, subscriptions, and account upgrades.</li>
                 <li>Improve platform performance and develop new features.</li>
                 <li>Ensure legal compliance and prevent misuse of BYND.</li>
                 <li>Communicate updates, service alerts, or policy changes.</li>
                  </ul>

  <h3>4. Data Sharing & Disclosure</h3>
  <p>We do not sell your personal data. However, we may share information:</p>
  <ul>
    <li>With trusted service providers (e.g., hosting, payment, analytics).</li>
    <li>With third-party platforms (e.g., Figma) to render previews when you share embed links.If required by law or legal process</li>
    <li>To enforce our Terms of Use and protect BYND against misuse.</li>
    <li>During a merger, acquisition, or transfer of assets.</li>

  </ul>



                </div>
              </div>
            </div>
          </div>
        </div>
      )}
</div>
  )}
  export default Footer