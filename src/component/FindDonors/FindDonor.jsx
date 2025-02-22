import React, { useState } from 'react';
import './FindDonor.css';

const FindDonor = () => {
  // Sample donor data with Indian names, cities, and hospitals
  const donors = [
    {
      id: 1,
      name: "Rahul Sharma",
      bloodGroup: "A+",
      city: "Mumbai",
      hospital: "Apollo Hospital",
      available: true,
      profilePhoto: "./customer1.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      bloodGroup: "B-",
      city: "Mumbai",
      hospital: "Fortis Hospital",
      available: false,
      profilePhoto: "./customer2.jpg",
    },
    {
      id: 3,
      name: "Amit Singh",
      bloodGroup: "O+",
      city: "Delhi",
      hospital: "Manipal Hospital",
      available: true,
      profilePhoto: "./customer3.jpg",
    },
    {
      id: 4,
      name: "Neha Gupta",
      bloodGroup: "AB+",
      city: "Delhi",
      hospital: "Global Hospital",
      available: true,
      profilePhoto: "./customer4.jpg",
    },
    {
      id: 5,
      name: "Vikram Yadav",
      bloodGroup: "A-",
      city: "Bangalore",
      hospital: "Care Hospital",
      available: false,
      profilePhoto: "./customer5.jpg",
    },
    {
      id: 6,
      name: "Anjali Desai",
      bloodGroup: "B+",
      city: "Bangalore",
      hospital: "Ruby Hall Clinic",
      available: true,
      profilePhoto: "./customer6.jpg",
    },
    {
      id: 7,
      name: "Ravi Kumar",
      bloodGroup: "O-",
      city: "Chennai",
      hospital: "AMRI Hospital",
      available: true,
      profilePhoto: "./customer7.jpg",
    },
    {
      id: 8,
      name: "Sneha Reddy",
      bloodGroup: "AB-",
      city: "Chennai",
      hospital: "Sterling Hospital",
      available: false,
      profilePhoto: "./customer8.jpg",
    },
    {
      id: 9,
      name: "Arun Mishra",
      bloodGroup: "A+",
      city: "Hyderabad",
      hospital: "Sawai Man Singh Hospital",
      available: true,
      profilePhoto: "./customer9.jpg",
    },
    {
      id: 10,
      name: "Pooja Mehta",
      bloodGroup: "B-",
      city: "Delhi",
      hospital: "King George's Medical University",
      available: true,
      profilePhoto: "./customer10.jpg",
    },
  ];

  // Dropdown options
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Hyderabad",
  ];

  // Hospital images mapping
  const hospitalImages = {
    "Apollo Hospital": "./hospital1.jpg",
    "Fortis Hospital": "./hospital2.jpg",
    "Manipal Hospital": "./hospital3.jpg",
    "Global Hospital": "./hospital1.jpg", // Reuse or add more images as needed
    "Care Hospital": "./hospital2.jpg",
    "Ruby Hall Clinic": "./hospital3.jpg",
    "AMRI Hospital": "./hospital1.jpg",
    "Sterling Hospital": "./hospital2.jpg",
    "Sawai Man Singh Hospital": "./hospital3.jpg",
    "King George's Medical University": "./hospital1.jpg",
  };

  // State for filters
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [showDonors, setShowDonors] = useState(false);

  // Get unique hospitals in the selected city
  const hospitalsInCity = [
    ...new Set(
      donors
        .filter((donor) => donor.city === selectedCity)
        .map((donor) => donor.hospital)
    ),
  ];

  // Get donors in the selected hospital
  const donorsInHospital = donors.filter(
    (donor) => donor.hospital === selectedHospital
  );

  // Get the number of registered donors for each hospital
  const getRegisteredDonorsCount = (hospital) => {
    return donors.filter((donor) => donor.hospital === hospital).length;
  };

  return (
    <div className="findDonorContainer">
      {/* Blur Effect */}
      <div className="blur-effect"></div>

      <div className="findDonorWrapper">
        {/* Header Section */}
        <h1 className="findDonorHeading">Find Donors</h1>
        <p className="findDonorSubheading">
          Search for donors based on your requirements.
        </p>

        {/* Step 1: Search by City */}
        {!showDonors && (
          <div className="filtersSection">
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedHospital("");
                setShowDonors(false);
              }}
              className="filterDropdown"
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Step 2: Display Hospitals in the Selected City */}
        {selectedCity && !showDonors && (
          <div className="hospitalsContainer">
            <h3 className="sectionHeading">Hospitals in {selectedCity}</h3>
            <div className="hospitalCardsContainer">
              {hospitalsInCity.map((hospital, index) => (
                <div key={index} className="hospitalCard">
                  <img
                    src={hospitalImages[hospital]} // Use the mapped hospital image
                    alt={hospital}
                    className="hospitalImage"
                  />
                  <h4 className="hospitalName">{hospital}</h4>
                  <p className="hospitalInfo">
                    Registered Donors: {getRegisteredDonorsCount(hospital)}
                  </p>
                  <p className="hospitalInfo">Location: {selectedCity}</p>
                  <button
                    className="exploreButton"
                    onClick={() => {
                      setSelectedHospital(hospital);
                      setShowDonors(true);
                    }}
                  >
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Display Donors in the Selected Hospital */}
        {showDonors && (
          <div className="donorsContainer">
            <h3 className="sectionHeading">
              Donors in {selectedHospital}, {selectedCity}
            </h3>
            <button
              className="backButton"
              onClick={() => setShowDonors(false)}
            >
              Back to Hospitals
            </button>
            <div className="donorCardsContainer">
              {donorsInHospital.map((donor) => (
                <div key={donor.id} className="donorCard">
                  <img
                    src={donor.profilePhoto}
                    alt={donor.name}
                    className="donorProfilePhoto"
                  />
                  <h3 className="donorName">{donor.name}</h3>
                  <p className="donorBloodGroup">Blood Group: {donor.bloodGroup}</p>
                  <p className="donorCity">City: {donor.city}</p>
                  <p className="donorHospital">Hospital: {donor.hospital}</p>
                  <p
                    className={`donorAvailability ${donor.available ? "available" : "notAvailable"}`}
                  >
                    {donor.available ? "Available Now" : "Not Available"}
                  </p>
                  <button className="contactButton">Request Donation</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDonor;