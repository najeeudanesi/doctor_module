import React from "react";

function TreatmentTable({ data }) {
    return (
        <div className="w-100 ">
            <div className="w-100 none-flex-item m-t-40">
                <table className="bordered-table-2">
                    <thead className="border-top-none">
                        <tr className="border-top-none">
                            <th>Date</th>
                            <th>Age</th>
                            <th>weight</th>
                            <th>Temp</th>
                            <th>Admin Nurse</th>
                            <th>Nurse Note</th>
                            <th>Diagnosis</th>
                            <th>Medication/Prescription</th>

                        </tr>
                    </thead>

                    <tbody className="white-bg view-det-pane">
                        {data.map((row) => (
                            <tr key={row?.visitId}>
                                <td>{new Date(row?.dateOfVisit).toLocaleDateString()}</td>

                                <td>{row?.age}</td>
                                <td>{row?.weight}kg</td>
                                <td>{row?.temperature}C</td>
                                <td>{row?.nurse}</td>
                                <td>{row?.respiratory}</td>
                                <td>{row?.diagnosis}</td>
                                <td><ul>{row?.medications.map((medication, index) => (
                                    <li key={index}>{medication}</li>
                                ))}</ul></td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TreatmentTable;
