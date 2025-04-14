import React, { useState, useRef, useContext } from 'react';
import './becomeDonor.css';
import DonorContext from '../../Context/DonorData/DonorContext';
import { useLocation } from 'react-router-dom';
import app from "../../firebase"
import{getDownloadURL, getStorage,ref, uploadBytes}from "firebase/storage"

const BecomeDonor = () => {
  // Random hospital names for the dropdown
  const { hosp_id, addpatient } = useContext(DonorContext);
  const [uploading,setuploading]=useState(false);
  const [data, setdata] = useState({ name: "", image: "", age: "", bloodGroup: "", city: "", certificate: "", description: "", hospital_id: hosp_id })
  const handlechange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("id is", data.hospital_id)
    if (!data.name || !data.age) {
      alert("please fill the required details");
      return;
    }
    addpatient(data.name, data.image, data.age, data.bloodGroup, data.city, data.certificate, data.description, data.hospital_id)

  }
  const filechange=async(e)=>{
    const file=e.target.files[0];
    setuploading(true);
    console.log(file);
    if(file){
        const storage=getStorage(app);
        const storageRef=ref(storage,"files/"+file.name)
        await uploadBytes(storageRef,file);
        const downloadurl=await getDownloadURL(storageRef);
        console.log(downloadurl);
        setuploading(false);
        setdata(prevnote=>({
            ...prevnote,image:downloadurl
        }))
    }
  }
  console.log(hosp_id);
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

  // Handle form reset

  const handleReset = () => {
    setProfilePhoto(null); // Reset profile photo
    setMedicalCertificateName("No file chosen"); // Reset medical certificate
    fileInputRef.current.value = ""; // Clear file input
    document.getElementById("name").value = ""; // Reset name field
    document.getElementById("age").value = ""; // Reset age field
    document.getElementById("blood-group").value = ""; // Reset blood group
    document.getElementById("medical-condition").value = ""; // Reset medical condition
    document.getElementById("city").value = ""; // Reset city field
    document.getElementById("hospital").value = ""; // Reset hospital dropdown
  };

  return (
    <div className="becomeDonorContainer">
      <div className="becomeDonorWrapper">
        <h1 className="becomeDonorHeading">Fill the Details</h1>
        <p className="becomeDonorSubheading" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Please provide the necessary information to register as a donor.
        </p>
        <form className="becomeDonorForm" onSubmit={handlesubmit}>
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
                    onChange={filechange}
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
            <input type="text" id="name" placeholder="Name" name="name" onChange={handlechange} required />
          </div>

          {/* Age and Blood Group in the same line */}
          <div className="becomeDonorRow">
            <div className="becomeDonorInputBox" style={{ flex: 1, marginRight: '10px' }}>
              <label htmlFor="age" className="becomeDonorLabel">Age of Donor</label>
              <input type="text" id="age" placeholder="Age" name="age" onChange={handlechange} required />
            </div>
            <div className="becomeDonorInputBox" style={{ flex: 1 }}>
              <label htmlFor="blood-group" className="becomeDonorLabel">Enter Blood Group</label>
              <select
                name="bloodGroup"
                value={data.bloodGroup}
                onChange={handlechange}
                id="blood-group"
                className='becomeDonorDropdown'
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>

            </div>
          </div>

          {/* Medical Condition Field */}
          <div className="becomeDonorInputBox">
            <label htmlFor="medical-condition" className="becomeDonorLabel" >Describe Medical Condition (if any)</label>
            <input type="text" id="medical-condition" placeholder="Describe" name="description" onChange={handlechange} />
          </div>

          {/* City and Choose File in the same line */}
          <div className="becomeDonorRow">
            <div className="becomeDonorInputBox" style={{ flex: 1, marginRight: '10px' }}>
              <label htmlFor="city" className="becomeDonorLabel">Preferred City</label>
              <input type="text" id="city" placeholder="City" name="city" onChange={handlechange} />
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

          {/* Submit and Reset Buttons */}
          <div className="becomeDonorRow">
            <button type="submit" disabled={uploading} className="becomeDonorButton">Submit</button>
            <button type="button" className="becomeDonorButton resetButton" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
      <div className="becomeDonorBlurEffect"></div>
    </div>
  );
};

export default BecomeDonor;