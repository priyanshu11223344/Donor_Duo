import React, { useState } from 'react';
import './RegisterHospital.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DonorContext from '../../Context/DonorData/DonorContext';
const RegisterHospital = () => {
  const navigate = useNavigate();
  const {addhospital}=useContext(DonorContext)
  const[hospdata,sethospdata]=useState({name:"",city:"",state:"",pincode:"",country:"",email:"",license_number:"",contact_no:"",emergency_con:"",director_name:"",address:""});
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!hospdata.name || !hospdata.city){
      alert("Please fill all the details")
    }
    addhospital(hospdata.name,hospdata.city,hospdata.state,hospdata.pincode,hospdata.country,hospdata.email,hospdata.license_number,hospdata.contact_no,hospdata.emergency_con,hospdata.director_name,hospdata.address)
  };
  const [formData, setFormData] = useState({
    hospitalName: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    bloodBankLicense: '',
    directorName: '',
    emergencyContact: '',
    facilities: [],
    termsAccepted: false
  });

  const facilitiesOptions = [
    '24/7 Blood Bank',
    'Emergency Services',
    'Blood Testing Lab',
    'Donation Camps',
    'Storage Facilities',
    'Ambulance Services'
  ];

  const handleChange = (event) => {
    sethospdata({ ...hospdata, [event.target.name]: event.target.value })
  }

  const handleFacilitiesChange = (facility) => {
    setFormData(prev => {
      const newFacilities = prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility];
      return { ...prev, facilities: newFacilities };
    });
  };

  

  return (
    <div className="hospital-registration-container">
      <div className="hospital-registration-form">
        <h2>Hospital Registration</h2>
        <p>Join DonorDuo network to manage blood donations effectively</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Hospital Name</label>
                <input
                  type="text"
                  name="name"
                 
                  onChange={handleChange}
                  placeholder="Enter hospital name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Blood Bank License Number</label>
                <input
                  type="text"
                  name="license_number"
                 
                  onChange={handleChange}
                  placeholder="Enter license number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
               
                onChange={handleChange}
                placeholder="Enter full address"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
               
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                 
                  onChange={handleChange}
                  placeholder="Enter state"
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
              
                  onChange={handleChange}
                  placeholder="Enter country"
                />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
           
                  onChange={handleChange}
                  placeholder="Enter pincode"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contact_no"
            
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label>Emergency Contact</label>
                <input
                  type="tel"
                  name="emergency_con"
                 
                  onChange={handleChange}
                  placeholder="Enter emergency contact"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
          
                onChange={handleChange}
                placeholder="Enter official email"
              />
            </div>

            {/* <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                 
                  onChange={handleChange}
                  placeholder="Create password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
               
                  onChange={handleChange}
                  placeholder="Confirm password"
                />
              </div>
            </div> */}
          </div>

          <div className="form-section">
            <h3>Hospital Details</h3>
            <div className="form-group">
              <label>Director/Head Name</label>
              <input
                type="text"
                name="director_name"
                
                onChange={handleChange}
                placeholder="Enter director's name"
              />
            </div>

            <div className="form-group">
              <label>Facilities Available</label>
              <div className="facilities-grid">
                {facilitiesOptions.map(facility => (
                  <div key={facility} className="facility-option">
                    <input
                      type="checkbox"
                      id={facility}
                      checked={formData.facilities.includes(facility)}
                      onChange={() => handleFacilitiesChange(facility)}
                    />
                    <label htmlFor={facility}>{facility}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-section terms-section">
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="termsAccepted"
                id="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="termsAccepted">
                I agree to the <a href="/terms" className="link-red">Terms of Service</a> and <a href="/privacy" className="link-red">Privacy Policy</a>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Register Hospital
            </button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHospital;