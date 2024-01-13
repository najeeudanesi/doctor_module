import React from "react";
import PatientsTable from "../tables/PatientsTable";
import { PatientData } from "./mockdata/PatientData";

function Patients() {
  return (
    <div className="w-100">
      <PatientsTable data={PatientData} />
    </div>
  );
}

export default Patients;
