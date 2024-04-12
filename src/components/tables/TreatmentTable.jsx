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

                                <td>{row?.weight}</td>
                                <td>{row?.temperature}</td>
                                <td>{row?.height}</td>
                                <td>{row?.heartPulse}</td>
                                <td>{row?.respiratory}</td>
                                <td>{row?.bloodPressure}</td>
                                <td>{row?.notes}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TreatmentTable;
