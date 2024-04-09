import React from "react";
import { useNavigate } from "react-router-dom";

function PatientsTable({ data }) {

  const navigate = useNavigate();
  return (
    <div className="w-100 ">
      <div className="w-100 none-flex-item m-t-40">
        <table className="bordered-table">
          <thead className="border-top-none">
            <tr className="border-top-none">
              <th>Patient ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>weight</th>
              <th>temp</th>
              <th>Height</th>
              <th>Heart</th>
              <th>Resp</th>
              <th>Assigned Nurse</th>
              <th>Date Created</th>
            </tr>
          </thead>

          <tbody className="white-bg view-det-pane">
            {data.map((row, index) => (
              <tr key={index} className="pointer" onClick={() => navigate(`/doctor/patient-details/${row.id}`)}>
                <td>{index + 1}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.age}</td>
                <td>{row.visits[0].weight}</td>
                <td>{row.visits[0].temperature}</td>
                <td>{row.visits[0].height}</td>
                <td>{row.visits[0].heartPulse}</td>
                <td>{row.visits[0].respiratory}</td>
                <td>{row.assignedNurse}</td>
                <td>{row.dateCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientsTable;
