import { useState } from "react";
import { RiFilePaper2Line } from "react-icons/ri";
import NurseNotes from "../modals/NurseNotes";
import { formatDate } from "../../utility/general";
import NurseNotesTreatment from "../modals/NurseNotesTreatment";

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
                                                <td>{formatDate(row?.dateOfVisit)}</td>

                                                <td>{row?.age}</td>
                                                <td>{row?.weight}kg</td>
                                                <td>{row?.temperature}C</td>

                                                <td>
                                                    <div className="outline pointer" onClick={() => setNoteModalData(row)}>
                                                        <RiFilePaper2Line />
                                                    </div>
                                                </td>
                                                <td>{row?.diagnosis}</td>
                                                <td><ol>{row?.medications.map((medication, index) => (
                                                    <li className="text-start m-t-10 bold-text" key={index}>{medication.name}</li>
                                                ))}</ol>

                                                    <div className="text-start p-10 flex gap-4">

                                                        <u className="bold-text">Care Plan: </u>
                                                        <p className="text-gray"> {row?.carePlan}</p></div>
                                                </td>


                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {noteModalData && <NurseNotesTreatment closeModal={() => setNoteModalData(null)} data={noteModalData} patientId={patientId} />}
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
