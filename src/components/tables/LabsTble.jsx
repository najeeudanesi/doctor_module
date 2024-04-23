import React, { useState } from "react";

function LabsTable({ visit, id }) {
    const [data, setData] = useState([]);
    return (
        <div className="w-100 ">
            <div className="w-100 none-flex-item m-t-40">
                <table className="bordered-table-2">
                    <thead className="border-top-none">
                        <tr className="border-top-none">

                            <th>Age</th>
                            <th>Diagnosis</th>
                            <th>Lab Request</th>

                            <th>Date Created</th>
                            <th>Attatchment</th>

                        </tr>
                    </thead>

                    <tbody className="white-bg view-det-pane">
                        {data.map((row) => (
                            <tr key={row.id}>


                                <td>{row?.age}</td>
                                <td>{row?.diagnosis}</td>
                                <td>{row?.labRequest}</td>

                                <td>{new Date(row?.dateGiven).toLocaleDateString()}</td>
                                <td>{row?.labsDocuments}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LabsTable;
