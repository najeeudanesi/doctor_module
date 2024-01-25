import React, { useState } from "react";
import Personal from "./Patient/Personal";
import ContactDetails from "./Patient/ContactDetails";
import EmergencyContact from "./Patient/EmergencyContact";
import MedicalRecord from "./Patient/MedicalRecord";

function PatientDetails() {
  const [selectedTab, setSelectedTab] = useState("personal");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "personal": {
        return <Personal />;
      }
      case "contactDetails": {
        return <ContactDetails />;
      }
      case "emergencyContact": {
        return <EmergencyContact />;
      }
      case "medicalRecord": {
        return <MedicalRecord />;
      }

      default:
        return null;
    }
  };
  return (
    <div className="w-100">
      <div className="m-t-80">PatientDetails</div>

      <div className="tabs m-t-20 bold-text">
        <div
          className={`tab-item ${selectedTab === "personal" ? "active" : ""}`}
          onClick={() => setSelectedTab("personal")}
        >
          Personal
        </div>

        <div
          className={`tab-item ${
            selectedTab === "contactDetails" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("contactDetails")}
        >
          Contact Details
        </div>

        <div
          className={`tab-item ${
            selectedTab === "emergencyContact" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("emergencyContact")}
        >
          Emergency Contact
        </div>

        <div
          className={`tab-item ${
            selectedTab === "medicalRecord" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("medicalRecord")}
        >
          Medical Record
        </div>

        <div
          className={`tab-item ${
            selectedTab === "immunization" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("immunization")}
        >
          Immunization
        </div>
        <div
          className={`tab-item ${selectedTab === "vitals" ? "active" : ""}`}
          onClick={() => setSelectedTab("vitals")}
        >
          Vitals
        </div>
        <div
          className={`tab-item ${selectedTab === "treatment" ? "active" : ""}`}
          onClick={() => setSelectedTab("treatment")}
        >
          Treatment
        </div>
        <div
          className={`tab-item ${selectedTab === "medication" ? "active" : ""}`}
          onClick={() => setSelectedTab("medication")}
        >
          Medication
        </div>
        <div
          className={`tab-item ${
            selectedTab === "appointment" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("appointment")}
        >
          Appointment
        </div>
        <div
          className={`tab-item ${selectedTab === "labs" ? "active" : ""}`}
          onClick={() => setSelectedTab("labs")}
        >
          Labs
        </div>
        <div
          className={`tab-item ${selectedTab === "insurance" ? "active" : ""}`}
          onClick={() => setSelectedTab("insurance")}
        >
          Insurance
        </div>
      </div>
      {renderTabContent()}
    </div>
  );
}

export default PatientDetails;
