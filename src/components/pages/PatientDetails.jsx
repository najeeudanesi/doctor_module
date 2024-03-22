import React, { useEffect, useState } from "react";
import Personal from "./Patient/Personal";
import ContactDetails from "./Patient/ContactDetails";
import EmergencyContact from "./Patient/EmergencyContact";
import MedicalRecord from "./Patient/MedicalRecord";
import { useParams } from "react-router-dom"; // Import useParams
import { get } from "../../utility/fetch";
import VisitTable from "../tables/VisitTable";

function PatientDetails() {
  const [selectedTab, setSelectedTab] = useState("personal");
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const { patientId } = useParams(); // Extract patientId from URL params

  const getPatientDetails = async () => {

    setLoading(true);
    try {
      const data = await get(`/patients/${patientId}/data`)
      setPatient(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }

    setLoading(false)
  }
  useEffect(() => {
    getPatientDetails();
  }, [])

  const renderTabContent = () => {
    switch (selectedTab) {
      case "personal": {
        return <Personal data={patient} />;
      }
      case "contactDetails": {
        return <ContactDetails data={patient.contact} />;
      }
      case "emergencyContact": {
        return <EmergencyContact data={patient.emergencyContact} />;
      }
      case "medicalRecord": {
        return <MedicalRecord />;
      }
      case "visits": {
        return <VisitTable data={patient.visits} />;
      }

      default:
        return null;
    }
  };
  return (
    <div className="w-100">
      <>

        {loading ? (<div className="m-t-40"><h1>Loading......</h1></div>) : (

          <>
            {patient ? (<>  <div className="m-t-80">PatientDetails</div>

              <div className="tabs m-t-20 bold-text">
                <div
                  className={`tab-item ${selectedTab === "personal" ? "active" : ""}`}
                  onClick={() => setSelectedTab("personal")}
                >
                  Personal
                </div>

                <div
                  className={`tab-item ${selectedTab === "contactDetails" ? "active" : ""
                    }`}
                  onClick={() => setSelectedTab("contactDetails")}
                >
                  Contact Details
                </div>

                <div
                  className={`tab-item ${selectedTab === "emergencyContact" ? "active" : ""
                    }`}
                  onClick={() => setSelectedTab("emergencyContact")}
                >
                  Emergency Contact
                </div>

                <div
                  className={`tab-item ${selectedTab === "medicalRecord" ? "active" : ""
                    }`}
                  onClick={() => setSelectedTab("medicalRecord")}
                >
                  Medical Record
                </div>

                <div
                  className={`tab-item ${selectedTab === "immunization" ? "active" : ""
                    }`}
                  onClick={() => setSelectedTab("immunization")}
                >
                  Immunization
                </div>
                <div
                  className={`tab-item ${selectedTab === "visits" ? "active" : ""}`}
                  onClick={() => setSelectedTab("visits")}
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
                  className={`tab-item ${selectedTab === "appointment" ? "active" : ""
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
              <div className="w-100">  {renderTabContent()}</div>
            </>) : (
              <div className="m-t-40 bold-text">
                <h1>Patient not found</h1>


              </div>
            )}
          </>
        )}

      </>
    </div>
  );
}

export default PatientDetails;
