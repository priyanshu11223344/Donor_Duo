import React, { useContext, useEffect, useState } from 'react';
import './FindDonor.css';
import DonorContext from '../../Context/DonorData/DonorContext';
import { useNavigate } from 'react-router-dom';
// import customerpng from "./customer1.jpg"
const FindDonor = () => {
  const { getalldata, data, hosp_id, sethosp_id } = useContext(DonorContext);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [searchCity, setSearchCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showDonors, setShowDonors] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    getalldata();
  }, []);

  // Process hospital data
  const hospitalMap = {};
  // console.log(data)
  data.forEach((donor) => {
    const {_id, name, city, patients = [] } = donor;
    if (!hospitalMap[name]) {
      hospitalMap[name] = {
        _id,
        city,
        totalPatients: 0,
        patientsList: [],
      };
    }
    hospitalMap[name].totalPatients += patients.length;
    hospitalMap[name].patientsList.push(...patients);
  });

  // Get unique cities for dropdown
  const cities = [...new Set(data.map(donor => donor.city))].filter(Boolean);

  // Filter hospitals based on selected city and search input
  const hospitals = Object.entries(hospitalMap)
    .filter(([_, info]) => {
      const matchesCity = !selectedCity || info.city === selectedCity;
      const matchesSearch = info.city.toLowerCase().includes(searchCity.toLowerCase());
      return matchesCity && matchesSearch;
    });
  // const get_hosp_id=(id)=>{
  //  sethosp_id(id)
  //  console.log(hosp_id)
  // }
  return (
    <div className="findDonorContainer">
      <div className="blur-effect"></div>
      <div className="findDonorWrapper">
        <h1 className="findDonorHeading">Hospital Directory</h1>
        <p className="findDonorSubheading">Click on a hospital to explore its patients.</p>

        {/* Search and filter section */}
        <div className="filtersSection">

          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedHospital(null);
              setShowDonors(false);
            }}
            className="filterDropdown"
          >
            <option value="">All Cities</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {!selectedHospital ? (
          <div className="hospitalsContainer">
            <h3 className="sectionHeading">Available Hospitals</h3>

            <div className="hospitalCardsContainer">
              {hospitals.length > 0 ? (
                hospitals.map(([hospitalName, info]) => (
                  <div key={hospitalName} className="hospitalCard">
                    <img
                      src={`./hospital1.jpg`}
                      alt={hospitalName}
                      className="hospitalImage"
                    />
                    <div className="hospitalInfoContainer">
                      <h4 className="hospitalName">{hospitalName}</h4>
                      <p className="hospitalInfo">City: {info.city}</p>
                      <p className="hospitalInfo">Total Patients: {info.totalPatients}</p>
                    </div>
                    <div className="hospitalButtons">
                      <button
                        className="exploreButton"
                        onClick={() => setSelectedHospital({ name: hospitalName, ...info })}
                      >
                        Explore Donors
                      </button>
                      <button
                        className="exploreButton"
                        onClick={() => {
                          sethosp_id(info._id); // for global use if needed
                          // console.log(hosp_id)
                          navigate('/becomeDonor');
                        }}
                      >
                        Register Donor
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="noDonorsText">No hospitals found matching your criteria.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="patientsContainer">
            <div className="patientsHeader">
              <h3 className="sectionHeading">
                Patients in {selectedHospital.name}, {selectedHospital.city}
              </h3>
              <button
                className="backButton"
                onClick={() => setSelectedHospital(null)}
              >
                Back to Hospitals
              </button>
            </div>

            <div className="patientCardsContainer">
              {selectedHospital.patientsList.length > 0 ? (
                selectedHospital.patientsList.map((patient, idx) => (
                  <div key={`${patient.name}-${idx}`} className="patientCard">
                    <img
                      // src="./customer1.jpg"
                      src={patient.image ? patient.image:"./customer1.jpg"}
                      alt={patient.name}
                      className="patientProfilePhoto"
                    />
                    <div className="patientInfo">
                      <h3 className="patientName">{patient.name}</h3>
                      <p className="patientDetail">Age: {patient.age}</p>
                      <p className="patientDetail">Condition: {patient.description}</p>
                      <p className="patientStatus available">Available Now</p>
                      <p className="patientDetail">City:{patient.city}</p>
                      <p className="patientDetail">BloodGroup:{patient.bloodGroup}</p>
                    </div>
                    <button className="contactButton">Request Help</button>
                  </div>
                ))
              ) : (
                <p className="noPatientsText">No patients registered in this hospital.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDonor;