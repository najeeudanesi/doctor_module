import React from "react";

function ImmunizationTable({ data }) {
    return (
        <div className="w-100 ">
            <div className="w-100 none-flex-item m-t-40">
                <table className="bordered-table-2">
                    <thead className="border-top-none">
                        <tr className="border-top-none">
                            <th>Date</th>
                            <th>Vaccine</th>
                            <th>Quantity</th>
                            <th>Age</th>
                            <th>weight</th>
                            <th>temp</th>
                            <th>Brand</th>
                            <th>Vaccine Batch ID</th>
                            <th>Attatchment</th>

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

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ImmunizationTable;
