import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utility/general";

function PatientsTable({ data }) {
  console.log(data);
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
              <th>Weight</th>
              <th>Temp</th>
              <th>Height</th>
              <th>Heart</th>
              <th>Resp</th>
              <th>Assigned Nurse</th>
              <th>Date Of Visit</th>
            </tr>
          </thead>

          <tbody className="white-bg view-det-pane">
            {data.map((row, index) => {
              const lastVisit = row.visits && row.visits.length > 0 ? row.visits[row.visits.length - 1] : null;

              return (
                <tr key={index} className="pointer" onClick={() => navigate(`/doctor/patient-details/${row.id}`)}>
                  <td>{index + 1}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.age}</td>
                  <td>{lastVisit ? lastVisit.weight : ""}</td>
                  <td>{lastVisit ? lastVisit.temperature : ""}</td>
                  <td>{lastVisit ? lastVisit.height : ""}</td>
                  <td>{lastVisit ? lastVisit.heartPulse : ""}</td>
                  <td>{lastVisit ? lastVisit.respiratory : ""}</td>
                  <td>{row.assignedNurse}</td>
                  <td>{lastVisit ? formatDate(lastVisit.dateOfVisit) : ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientsTable;
