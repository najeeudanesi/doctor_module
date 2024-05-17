import React, { useEffect, useState } from "react";
import { formatDate } from "../../utility/general";
import { get } from "../../utility/fetch";
import ViewVisit from "../modals/ViewVisit";
import { RiFilePaper2Line } from "react-icons/ri";
import NurseNotes from "../modals/NurseNotes";

function VisitTable({ patientId, next }) {
    const [modalData, setModalData] = useState(null); // State to store the data for the modal
    const [noteModalData, setNoteModalData] = useState(null); // State to store the data for the note modal
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await get(`/patients/${patientId}/visitrecord`);
            setData(response);

        } catch (e) {
            console.log(e);
        }
        setIsLoading(false)
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-100">
            {!isloading ? (
                <div className="w-100 none-flex-item m-t-40">
                    <table className="bordered-table-2">
                        <thead className="border-top-none">
                            <tr className="border-top-none">
                                <th className="w-10">Date</th>
                                <th>Weight</th>
                                <th>Age</th>
                                <th>Temp</th>
                                <th>Height</th>
                                <th>Heart</th>
                                <th>Respiratory</th>
                                <th>Blood Pressure</th>
                                <th>Nurse Notes</th>
                                <th>Administered Nurse</th>
                                <th className="w-20">Assigned Doctor</th>
                            </tr>
                        </thead>

                        <tbody className="white-bg view-det-pane">
                            {data.map((row) => (
                                <tr key={row?.id}>
                                    <td>{formatDate(row?.dateOfVisit)}</td>
                                    <td>{row?.weight}</td>
                                    <td>{row?.age}</td>
                                    <td>{row?.temperature}</td>
                                    <td>{row?.height}</td>
                                    <td>{row?.heartPulse}</td>
                                    <td>{row?.respiratory}</td>
                                    <td>{row?.bloodPressure}</td>
                                    <td>
                                        <div className="outline pointer" onClick={() => setNoteModalData(row)}>
                                            <RiFilePaper2Line />
                                        </div>
                                    </td>
                                    <td>{row?.nurseName}</td>
                                    <td className="flex flex-v-center space-between">
                                        {row?.doctorName}
                                        <div className="outline pointer" onClick={() => setModalData(row)}>
                                            <RiFilePaper2Line />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (<div>Loading....</div>)}

            {modalData && <ViewVisit closeModal={() => setModalData(null)} visit={modalData} next={next} />}
            {noteModalData && <NurseNotes closeModal={() => setNoteModalData(null)} data={noteModalData} next={next} patientId={patientId} />}
        </div>
    );
}

export default VisitTable;
