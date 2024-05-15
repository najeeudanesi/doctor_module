import React from "react";
import { formatDate } from "../../utility/general";

function MedicalRecordTable({ data }) {
    console.log(data)

    return (
        <div className="w-100 ">
            <div className="w-100 none-flex-item m-t-40">
                <table className="bordered-table-2">
                    <thead className="border-top-none">
                        <tr className="border-top-none">
                            <th>Date</th>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Prescribed Meds</th>

                        </tr>
                    </thead>

                    <tbody className="white-bg view-det-pane">
                        {data.map((row, index) => (
                            <tr key={index}
                            >
                                <td>{formatDate(row.createdAt)}</td>
                                <td>{row.name}</td>
                                <td>{row.comment}</td>
                                <td>{row.actionTaken}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MedicalRecordTable;
