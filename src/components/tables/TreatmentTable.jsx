import { useState } from "react";
import { RiFilePaper2Line } from "react-icons/ri";
import NurseNotes from "../modals/NurseNotes";
import { formatDate } from "../../utility/general";

function TreatmentTable({ data, isloading, patientId }) {
    const [noteModalData, setNoteModalData] = useState(null); // State to store the data for the note modal


    return (
        <div className="w-100">
            {
                !isloading ? (<div className="w-100 ">

                    {
                        data ? (
                            <div className="w-100 none-flex-item m-t-40">
                                <table className="bordered-table-2">
                                    <thead className="border-top-none">
                                        <tr className="border-top-none">
                                            <th>Date</th>
                                            <th>Age</th>
                                            <th>weight</th>
                                            <th>Temp</th>

                                            <th>Nurse Note</th>
                                            <th>Diagnosis</th>
                                            <th>Medication/Prescription</th>

                                        </tr>
                                    </thead>

                                    <tbody className="white-bg view-det-pane">
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td>{new Date(row?.dateOfVisit).toLocaleDateString()}</td>

                                                <td>{row?.age}</td>
                                                <td>{row?.weight}kg</td>
                                                <td>{row?.temperature}C</td>

                                                <td>
                                                    <div className="outline pointer" onClick={() => setNoteModalData(row)}>
                                                        <RiFilePaper2Line />
                                                    </div>
                                                </td>
                                                <td>{row?.diagnosis}</td>
                                                <td><ul>{row?.medications.map((medication, index) => (
                                                    <li key={index}>{medication.name}</li>
                                                ))}</ul></td>


                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {noteModalData && <NurseNotes closeModal={() => setNoteModalData(null)} visitId={noteModalData?.visitId} patientId={patientId} />}
                            </div>
                        ) : (
                            <p>No data available</p>
                        )
                    }

                </div>) : (<div>Loading....</div>)
            }
        </div>
    );
}

export default TreatmentTable;
