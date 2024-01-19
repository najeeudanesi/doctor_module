import React from "react";
import { stats } from "./mockdata/PatientData";
import StatCard from "../UI/StatCard";
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
      </div>
    </div>
  );
}

export default Dashboard;
