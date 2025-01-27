import React from 'react'
import './Steps.css'
const Steps = () => {
  return (
    <div className="paddings innerWidth landing-page">
      <section className="process-section">
        <h2 className='secondaryText'>Donation process:</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className='primaryText'> Registration</h3>
            <p className='secondaryText'>Complete a simple form to register as a donor. Your information helps us match you with those in need.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className='primaryText'>Screening</h3>
            <p className='secondaryText'>Undergo a quick health screening to ensure you are eligible to donate blood safely.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className='primaryText'>Donation</h3>
            <p className='secondaryText'>Donate blood in a comfortable and secure environment. The process is quick and easy, and you'll be guided by our professional staff.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3 className='primaryText'>Refreshment</h3>
            <p className='secondaryText'>Enjoy light refreshments and relax for a few minutes after donating. Thank you for making a difference!</p>
          </div>
        </div>
      </section>
      <section className='process-section'>
        <h2 className='secondaryText'>Donor Searching Process:</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className='primaryText'>Submit Request</h3>
            <p className='secondaryText'>Fill out a request form with the necessary details such as blood type, urgency, and location. This information will help us find the right donor for you.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className='primaryText'>Verification</h3>
            <p className='secondaryText'>Our team will review your request and verify the details to ensure we have all the required information to proceed efficiently.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className='primaryText'>Donor Matching</h3>
            <p className='secondaryText'>We will search our database to find a matching donor based on the blood type and location provided. Once a match is found, we will contact the donor.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3 className='primaryText'>Coordination</h3>
            <p className='secondaryText'>We will coordinate with both you and the donor to arrange a convenient time and place for the donation. We ensure the process is smooth and stress-free for both parties.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Steps
