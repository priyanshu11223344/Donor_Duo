import React, { useState, useRef } from 'react';
import './becomeDonor.css';

const BecomeDonor = () => {
  // Random hospital names for the dropdown
  const hospitals = [
    "City General Hospital",
    "Green Valley Medical Center",
    "Sunrise Health Clinic",
    "Golden Care Hospital",
    "Blue Horizon Medical Center",
  ];

  // Blood group options
  const bloodGroups = [
    "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
  ];

  // State to store the selected profile photo and medical certificate file
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [medicalCertificateName, setMedicalCertificateName] = useState("No file chosen");

  // Ref for the file input
  const fileInputRef = useRef(null);

  // Handle profile photo change
  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result); // Set the image URL
      };
      reader.readAsDataURL(file); // Convert file to data URL
    }
  };

  // Handle click on profile photo to trigger file input
  const handleProfilePhotoClick = () => {
    fileInputRef.current.click(); // Trigger the file input
  };

  // Handle medical certificate change
  const handleMedicalCertificateChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMedicalCertificateName(file.name);
    } else {
      setMedicalCertificateName("No file chosen");
    }
  };

  return (
    <div className="becomeDonorContainer">
      <div className="becomeDonorWrapper">
        <h1 className="becomeDonorHeading">Fill the Details</h1>
        <p className="becomeDonorSubheading" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Please provide the necessary information to register as a donor.
        </p>
        <form className="becomeDonorForm">
          {/* Profile Photo Upload */}
          <div className="becomeDonorInputBox">
            <label htmlFor="profile-photo" className="becomeDonorLabel">Select Profile Photo</label>
            <div className="profile-photo-container">
              {profilePhoto ? (
                <div className="profile-photo-preview" onClick={handleProfilePhotoClick}>
                  <img
                    src={profilePhoto}
                    alt="Profile Preview"
                    className="profile-photo-image"
                  />
                </div>
              ) : (
                <div className="custom-file-input">
                  <input
                    type="file"
                    id="profile-photo"
                    onChange={handleProfilePhotoChange}
                    accept="image/*"
                    ref={fileInputRef}
                    hidden={!!profilePhoto} // Hide when profilePhoto is set
                  />
                  <span>Choose File</span>
                </div>
              )}
            </div>
          </div>

          {/* Name Field */}
          <div className="becomeDonorInputBox">
            <label htmlFor="name" className="becomeDonorLabel">Enter Name of Donor</label>
            <input type="text" id="name" placeholder="Name" />
          </div>

          {/* Age and Blood Group in the same line */}
          <div className="becomeDonorRow">
            <div className="becomeDonorInputBox" style={{ flex: 1, marginRight: '10px' }}>
              <label htmlFor="age" className="becomeDonorLabel">Age of Donor</label>
              <input type="text" id="age" placeholder="Age" />
            </div>
            <div className="becomeDonorInputBox" style={{ flex: 1 }}>
              <label htmlFor="blood-group" className="becomeDonorLabel">Enter Blood Group</label>
              <select id="blood-group" className="becomeDonorDropdown">
                <option value="">Select Blood Group</option>
                {bloodGroups.map((group, index) => (
                  <option key={index} value={group}>{group}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Medical Condition Field */}
          <div className="becomeDonorInputBox">
            <label htmlFor="medical-condition" className="becomeDonorLabel">Describe Medical Condition (if any)</label>
            <input type="text" id="medical-condition" placeholder="Describe" />
          </div>

          {/* City and Choose File in the same line */}
          <div className="becomeDonorRow">
            <div className="becomeDonorInputBox" style={{ flex: 1, marginRight: '10px' }}>
              <label htmlFor="city" className="becomeDonorLabel">Preferred City</label>
              <input type="text" id="city" placeholder="City" />
            </div>
            <div className="becomeDonorInputBox" style={{ flex: 1 }}>
              <label htmlFor="medical-certificate" className="becomeDonorLabel">Select Your Medical Certificate</label>
              <div className="custom-file-input">
                <input
                  type="file"
                  id="medical-certificate"
                  onChange={handleMedicalCertificateChange}
                  multiple
                />
                <span>{medicalCertificateName}</span>
              </div>
            </div>
          </div>

          {/* Choose Hospital Dropdown */}
          <div className="becomeDonorInputBox">
            <label htmlFor="hospital" className="becomeDonorLabel">Choose Hospital</label>
            <select id="hospital" className="becomeDonorDropdown">
              <option value="">Select a hospital</option>
              {hospitals.map((hospital, index) => (
                <option key={index} value={hospital}>{hospital}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="becomeDonorButton">Submit</button>
        </form>
      </div>
      <div className="becomeDonorBlurEffect"></div>
    </div>
  );
};

export default BecomeDonor;