import React from "react";

function VisitTable({ data }) {
    return (
        <div className="w-100 ">
            <div className="w-100 none-flex-item m-t-40">
                <table className="bordered-table-2">
                    <thead className="border-top-none">
                        <tr className="border-top-none">
                            <th>Date</th>
                            <th>Age</th>
                            <th>weight</th>
                            <th>temp</th>
                            <th>Height</th>
                            <th>Heart</th>
                            <th>Blood Pressure</th>
                            <th>Additional Notes</th>
                            <th>Administered Nurse</th>
                            <th>Assigned Doctor</th>
                        </tr>
                    </thead>

                    <tbody className="white-bg view-det-pane">
                        {data.map((row) => (
                            <tr key={row.visitId}>
                                <td>{row.datOfVisit}</td>
                                <td>{row.age}</td>
                                <td>{row.weight}</td>
                                <td>{row.temperature}</td>
                                <td>{row.height}</td>
                                <td>{row.heartPulse}</td>
                                <td>{row.bloodPressure}</td>
                                <td>{row.notes}</td>
                                <td>{row.nurseId}</td>
                                <td>{row.doctorId}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VisitTable;
