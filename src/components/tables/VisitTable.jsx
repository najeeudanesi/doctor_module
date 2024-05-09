import React, { useEffect, useState } from "react";
import { formatDate } from "../../utility/general";
import { get } from "../../utility/fetch";
import ViewVisit from "../modals/ViewVisit";
import { RiFilePaper2Line } from "react-icons/ri";


function VisitTable({ patientId, next }) {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await get(`/patients/${patientId}/visitrecord`);
            console.log(response);
            setData(response);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="w-100">
            <div className="w-100 none-flex-item m-t-40">
                <table className="bordered-table-2">
                    <thead className="border-top-none">
                        <tr className="border-top-none">
                            <th className="w-10">Date</th>
                            <th>weight</th>
                            <th>temp</th>
                            <th>Height</th>
                            <th>Heart</th>
                            <th>Respiratory</th>
                            <th>Blood Pressure</th>
                            <th className="w-20">Additional Notes</th>
                            <th>Administered Nurse</th>
                            <th className="w-20">Assigned Doctor</th>
                        </tr>
                    </thead>

                    <tbody className="white-bg view-det-pane">
                        {data.map((row) => (
                            <tr key={row?.id}>
                                <td>{formatDate(row?.dateOfVisit)}</td>

                                <td>{row?.weight}</td>
                                <td>{row?.temperature}</td>
                                <td>{row?.height}</td>
                                <td>{row?.heartPulse}</td>
                                <td>{row?.respiratory}</td>
                                <td>{row?.bloodPressure}</td>
                                <td>{row?.notes}</td>
                                <td>{row?.nurseName}</td>
                                <td className="flex flex-v-center space-between ">{row?.doctorName}<div className="outline pointer" onClick={() => setModal(true)}><RiFilePaper2Line /></div></td>
                                {
                                    modal && <ViewVisit closeModal={() => setModal(false)} visit={row} next={next} />
                                }
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default VisitTable;
