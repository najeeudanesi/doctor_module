import React, { useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri'
import { get } from "../../utility/fetch";
import { formatDate } from '../../utility/general';
import TextArea from '../UI/TextArea';
import { useNavigate } from 'react-router-dom';

function NurseNotes({ visitId, patientId, closeModal, isFacilityView }) {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const fetchNurseNotes = async () => {
        try {
            const response = await get(`/patients/${patientId}/nursenotes/${visitId}`);
            console.log(response);
            setData(response);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchNurseNotes()
    }, [])
    return (
        <div className='overlay'>
            <RiCloseFill className='close-btn pointer' onClick={closeModal} />
            <div className="modal-box max-w-800">
                <div className="p-40">
                    <h3 className="bold-text">NurseNotes</h3>
                    <table className="bordered-table text-sm">
                        <thead className="border-top-none">
                            <tr className="border-top-none">
                                <th className="">Date</th>
                                <th>weight</th>
                                <th>Age</th>
                                <th>temp</th>
                                <th>Height</th>
                                <th>Heart</th>
                                <th>Respiratory</th>
                                <th>Blood Pressure</th>


                            </tr>
                        </thead>
                        <tbody>
                            <td>{formatDate(data?.visit?.dateOfVisit)}</td>

                            <td>{data?.visit?.weight}</td>
                            <td>{data?.visit?.age}</td>
                            <td>{data?.visit?.temperature}</td>
                            <td>{data?.visit?.height}</td>
                            <td>{data?.visit?.heartPulse}</td>
                            <td>{data?.visit?.respiratory}</td>
                            <td>{data?.visit?.bloodPressure}</td>

                        </tbody>
                    </table>
                    {
                        data?.notes &&

                        data.notes.map((data, index) => (
                            <div>
                                <TextArea label="Notes" name="notes" value={data.note} disabled={true} />
                            </div>
                        )

                        )
                    }
                </div>

                {isFacilityView && <div className="" onClick={() => navigate(`/patient-details${patientId}`)}>View Patient File</div>}

            </div>
        </div>

    )
}

export default NurseNotes