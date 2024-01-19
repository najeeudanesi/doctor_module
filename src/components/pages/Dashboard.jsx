import React from "react";
import { stats } from "./mockdata/PatientData";
import StatCard from "../UI/StatCard";
import PatientsBreakdown from "../UI/PatientsBreakdown";
import PatientAdmission from "../UI/PatientAdmission";
function Dashboard() {
  return (
    <div className="w-100 m-t-80">
      <div className="m-t-20">
        <div className="flex">
          {" "}
          {stats.map((stat) => (
            <div className="m-r-20">
              <StatCard data={stat} icon={stat.icon} />
            </div>
          ))}
        </div>
        <div className="w-80 m-t-40 flex">
          {" "}
          <div className="m-r-20 w-50">
            {" "}
            <PatientAdmission />
          </div>
          <div className="m-r-20 w-50">
            <PatientsBreakdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
