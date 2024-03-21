import React from "react";

function PatientsTable({ data }) {
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
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.patientId}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.age}</td>
                <td>{row.weight}</td>
                <td>{row.temperature}</td>
                <td>{row.height}</td>
                <td>{row.heart}</td>
                <td>{row.resp}</td>
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
