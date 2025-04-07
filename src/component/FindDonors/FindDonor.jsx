import React, { useContext, useEffect, useState } from 'react';
import './FindDonor.css';
import DonorContext from '../../Context/DonorData/DonorContext';

const FindDonor = () => {
  const { getalldata, data } = useContext(DonorContext);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    getalldata();
  }, []);

  const hospitalMap = {};
  data.forEach((donor) => {
    const { name, city, patients = [] } = donor;
    if (!hospitalMap[name]) {
      hospitalMap[name] = {
        city,
        totalPatients: 0,
        patientsList: [],
      };
    }
    hospitalMap[name].totalPatients += patients.length;
    hospitalMap[name].patientsList.push(...patients);
  });

  const hospitals = Object.entries(hospitalMap);

  return (
    <div className="findDonorContainer">
      <div className="blur-effect"></div>
      <div className="findDonorWrapper">
        <h1 className="findDonorHeading">Hospital Directory</h1>
        <p className="findDonorSubheading">Click on a hospital to explore its patients.</p>

        {!selectedHospital ? (
          <div className="hospitalsContainer">
            <h3 className="sectionHeading">Available Hospitals</h3>
            <div className="hospitalCardsContainer">
              {hospitals.map(([hospitalName, info]) => (
                <div key={hospitalName} className="hospitalCard">
                  <img
                    src={`./hospital1.jpg`} // Replace with dynamic images if available
                    alt={hospitalName}
                    className="hospitalImage"
                  />
                  <h4 className="hospitalName">{hospitalName}</h4>
                  <p className="hospitalInfo">City: {info.city}</p>
                  <p className="hospitalInfo">Total Patients: {info.totalPatients}</p>
                  <button
                    className="exploreButton"
                    onClick={() => setSelectedHospital({ name: hospitalName, ...info })}
                  >
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="donorsContainer">
            <h3 className="sectionHeading">
              Patients in {selectedHospital.name}, {selectedHospital.city}
            </h3>
            <button className="backButton" onClick={() => setSelectedHospital(null)}>
              Back to Hospitals
            </button>
            <div className="donorCardsContainer">
              {selectedHospital.patientsList.length > 0 ? (
                selectedHospital.patientsList.map((patient, idx) => (
                  <div key={idx} className="donorCard">
                    <img
                      src="./customer1.jpg" // Placeholder, replace with actual if available
                      alt={patient.name}
                      className="donorProfilePhoto"
                    />
                    <h3 className="donorName">{patient.name}</h3>
                    <p className="donorBloodGroup">Age: {patient.age}</p>
                    <p className="donorCity">Condition: {patient.condition}</p>
                    <p className="donorAvailability available">Available Now</p>
                    <button className="contactButton">Request Help</button>
                  </div>
                ))
              ) : (
                <p className="noDonorsText">No patients registered in this hospital.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDonor;
