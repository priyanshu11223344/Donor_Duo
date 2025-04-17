import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HospitalInfo.css';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, 
  FaBed, FaUserMd, FaClock, FaAmbulance,
  FaParking, FaWheelchair, FaProcedures,
  FaFlask, FaXRay, FaHeartbeat, FaStethoscope
} from 'react-icons/fa';
import { GiHospitalCross } from 'react-icons/gi';
import { useContext } from 'react';
import DonorContext from '../../Context/DonorData/DonorContext';
const HospitalInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {hosp_id, gethospinfo, hospitalDetails } = useContext(DonorContext);
  // console.log(hospitalDetails)
  const data=hospitalDetails
  console.log(data);
  const hospital = {
    _id: id,
    name: "City General Hospital",
    registrationNumber: "MH-2023-45678",
    type: "Multi-Specialty",
    establishedYear: 1995,
    about: "A leading healthcare provider with state-of-the-art facilities and expert medical staff dedicated to patient care since 1995.",
    address: "123 Medical Center Drive, NY 10001",
    city: "New York",
    state: "New York",
    pincode: "10001",
    country: "United States",
    phone: "+1 (212) 555-1234",
    emergencyPhone: "+1 (212) 555-9999",
    email: "info@citygeneral.org",
    website: "www.citygeneral.org",
    beds: 450,
    icuBeds: 50,
    operationTheaters: 12,
    doctors: 85,
    nurses: 200,
    specialties: ["Cardiology", "Neurology", "Oncology", "Pediatrics", "Orthopedics"],
    services: ["Emergency", "OPD", "IPD", "Day Care", "Pharmacy"],
    accreditation: "JCI Accredited",
    accreditationNumber: "JCI-456789",
    facilities: [
      "24/7 Emergency", "ICU", "MRI", "CT Scan", "Digital X-Ray",
      "Pharmacy", "Cafeteria", "Amphitheater", "Library", "Parking"
    ],
    diagnosticFacilities: [
      "Pathology Lab", "Microbiology Lab", "Biochemistry Lab",
      "Radiology", "Ultrasound", "ECG"
    ],
    ambulanceServices: true,
    numberOfAmbulances: 5,
    bloodBank: true,
    workingHours: {
      emergency: "24/7",
      opd: "8:00 AM - 8:00 PM",
      pharmacy: "7:00 AM - 11:00 PM"
    },
    images: [
      "/hospital1.jpg", "/hospital2.jpg", "/hospital3.jpg", "/hospital4.jpg"
    ],
    keyPersonnel: [
      { name: "Dr. Sarah Johnson", position: "Medical Director", specialty: "Cardiology" },
      { name: "Dr. Michael Chen", position: "Head of Surgery", specialty: "Neurosurgery" },
      { name: "Jane Williams", position: "Chief Nursing Officer" }
    ],
    insuranceProviders: ["Aetna", "Blue Cross", "Medicare", "UnitedHealth"],
    languagesSpoken: ["English", "Spanish", "Mandarin", "French"]
  };
  useEffect(() => {
    if (hosp_id) {
      gethospinfo(hosp_id);
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === hospital.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [hospital.images.length]);

  return (
    <div className="hospitalInfoContainer2">
      <div className="hospitalInfoHeader">
        <div>
          <h1>{hospital.name}</h1>
          <p className="hospitalType">{hospital.type} Hospital • Est. {hospital.establishedYear}</p>
        </div>
        <button onClick={() => navigate(-1)} className="backButton button">
          Back to Directory
        </button>
      </div>

      {/* Combined Top Section */}
      <div className="hospitalTopSection">
        {/* Image Slideshow */}
        <div className="imageSlideshow">
          <img 
            src={hospital.images[currentImageIndex]} 
            alt={`${hospital.name} view ${currentImageIndex + 1}`} 
          />
          <div className="slideshowDots">
            {hospital.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`dot ${idx === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(idx)}
              ></div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="detailSection aboutSection">
          <h2><GiHospitalCross /> About {data.name}</h2>
          <p>{hospital.about}</p>
          <div className="badgeContainer">
            <span className="accreditationBadge">{hospital.accreditation}</span>
            <span className="registrationBadge">Reg. No: {hospital.registrationNumber}</span>
          </div>
        </div>

        {/* Key Information */}
        <div className="detailSection keyInfoSection">
          <h2><FaStethoscope /> Key Information</h2>
          <div className="infoGrid">
            <div className="infoItem"><FaMapMarkerAlt className="InfoIconEdit" />
              <div><strong>Address</strong><p>{data.address}, {data.city}, {data.state} {data.pincode}, {data.country}</p></div>
            </div>
            <div className="infoItem"><FaPhone className="InfoIconEdit" />
              <div><strong>Phone</strong><p>{data.contact_no}</p></div>
            </div>
            <div className="infoItem"><FaAmbulance className="InfoIconEdit" />
              <div><strong>Emergency</strong><p>{data.emergency_con}</p></div>
            </div>
            <div className="infoItem"><FaEnvelope className="InfoIconEdit" />
              <div><strong>Email</strong><p>{data.email}</p></div>
            </div>
            <div className="infoItem"><FaGlobe className="InfoIconEdit" />
              <div><strong>Website</strong>
                <a href={`https://${hospital.website}`} target="_blank" rel="noopener noreferrer">{hospital.website}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Sections */}
      <div className="hospitalDetails">
        {/* Hospital Capacity */}
        <div className="detailSection">
          <h2><FaBed /> Hospital Capacity</h2>
          <div className="capacityGrid">
            <div className="capacityItem"><FaBed className="capacityIcon" /><span>Total Beds</span><strong>{hospital.beds}</strong></div>
            <div className="capacityItem"><FaProcedures className="capacityIcon" /><span>ICU Beds</span><strong>{hospital.icuBeds}</strong></div>
            <div className="capacityItem"><FaFlask className="capacityIcon" /><span>Operation Theaters</span><strong>{hospital.operationTheaters}</strong></div>
            <div className="capacityItem"><FaUserMd className="capacityIcon" /><span>Doctors</span><strong>{hospital.doctors}</strong></div>
            <div className="capacityItem"><FaHeartbeat className="capacityIcon" /><span>Nurses</span><strong>{hospital.nurses}</strong></div>
            {hospital.ambulanceServices && (
              <div className="capacityItem"><FaAmbulance className="capacityIcon" /><span>Ambulances</span><strong>{hospital.numberOfAmbulances}</strong></div>
            )}
          </div>
        </div>

        {/* Specialties & Services */}
        <div className="detailSection">
          <h2><FaXRay /> Specialties & Services</h2>
          <div className="specialtiesContainer">
            <div>
              <h3>Medical Specialties</h3>
              <div className="specialtiesList">
                {hospital.specialties.map((specialty, index) => (
                  <span key={index} className="specialtyTag">{specialty}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Hospital Services</h3>
              <ul className="servicesList">
                {hospital.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="detailSection">
          <h2><FaWheelchair /> Facilities</h2>
          <div className="facilitiesContainer">
            <div>
              <h3>General Facilities</h3>
              <ul className="facilitiesList">
                {hospital.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Diagnostic Facilities</h3>
              <ul className="facilitiesList">
                {hospital.diagnosticFacilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          </div>
          {hospital.bloodBank && (
            <div className="bloodBankInfo">
              <h3>Blood Bank</h3>
              <p>24/7 blood bank facility available</p>
            </div>
          )}
        </div>

        {/* Working Hours */}
        <div className="detailSection">
          <h2><FaClock /> Working Hours</h2>
          <div className="workingHoursGrid">
            <div><strong>Emergency</strong><p>{hospital.workingHours.emergency}</p></div>
            <div><strong>OPD</strong><p>{hospital.workingHours.opd}</p></div>
            <div><strong>Pharmacy</strong><p>{hospital.workingHours.pharmacy}</p></div>
          </div>
        </div>

        {/* Key Personnel */}
        <div className="detailSection">
          <h2>👨‍⚕️ Key Personnel</h2>
          <div className="personnelGrid">
            {hospital.keyPersonnel.map((person, index) => (
              <div key={index} className="personnelCard">
                <h3>{data.director_name}</h3>
                <p>{person.position}</p>
                {person.specialty && <p className="specialty">{person.specialty}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="detailSection">
          <h2>ℹ️ Additional Information</h2>
          <div className="additionalInfoGrid">
            <div>
              <h3>Insurance Providers</h3>
              <div className="insuranceList">
                {hospital.insuranceProviders.map((provider, index) => (
                  <span key={index} className="insuranceTag">{provider}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Languages Spoken</h3>
              <div className="languagesList">
                {hospital.languagesSpoken.map((language, index) => (
                  <span key={index} className="languageTag">{language}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalInfo;
