import React, { useState } from "react";

function PatientDetails() {
  const [selectedTab, setSelectedTab] = useState("beds");
  return (
    <div className="w-100">
      <div className="m-t-80">PatientDetails</div>

      <div className="tabs m-t-20 bold-text">
        <div
          className={`tab-item ${selectedTab === "beds" ? "active" : ""}`}
          onClick={() => setSelectedTab("beds")}
        >
          Beds
        </div>

        <div
          className={`tab-item ${selectedTab === "equipments" ? "active" : ""}`}
          onClick={() => setSelectedTab("equipments")}
        >
          Equipments
        </div>

        <div
          className={`tab-item ${selectedTab === "ambulance" ? "active" : ""}`}
          onClick={() => setSelectedTab("ambulance")}
        >
          Ambulance
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
