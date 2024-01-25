import React from "react";
import { stats } from "./mockdata/PatientData";
import StatCard from "../UI/StatCard";
import PatientsBreakdown from "../UI/PatientsBreakdown";
import PatientAdmission from "../UI/PatientAdmission";

import GenderDistribution from "../UI/GenderDistribution";
import OutAndInpatientGraph from "../UI/OutAndInpatientGraph";

function Dashboard() {
  return (
    <div className="w-100 m-t-80">
      <div className="m-t-20">
        <div className="flex">
          {" "}
          {stats.map((stat, index) => (
            <div className="m-r-20" key={index}>
              <StatCard data={stat} icon={stat.icon} />
            </div>
          ))}
        </div>
        <div className="w-100 gap-16 flex">
          <div className="w-80  m-t-40">
            <OutAndInpatientGraph />
            <div className="flex m-t-20 w-100">
              <div className="m-r-20 w-50">
                <PatientAdmission />
              </div>
              <div className="w-50">
                <PatientsBreakdown />
              </div>
            </div>
          </div>
          <div className="w-20 m-t-40">
            <GenderDistribution />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
