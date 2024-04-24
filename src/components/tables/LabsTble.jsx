import React, { useState } from "react";
import LabsAttachment from "../modals/LabsAttachment";
import { RiFilePaper2Line } from "react-icons/ri";

function LabsTable({ data, id }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [attachments, setAttachments] = useState([]);
    const [patient, setPatient] = useState("");
    const [subject, setSubject] = useState("");


    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const stageAttachments = (data) => {
        setAttachments(data?.patientLabDocuments)
        setPatient(data?.patientFullName)
        setSubject(data?.subject)
        toggleModal();
    }

    return (
        <div className="w-100 ">
            <div className="w-100 none-flex-item m-t-40">
                <table className="bordered-table-2">
                    <thead className="border-top-none">
                        <tr className="border-top-none">

                            <th>Age</th>
                            <th>Diagnosis</th>
                            <th className="w-25">Lab Request</th>
                            <th>Date Created</th>
                            <th className="w-25">Attatchment</th>

                        </tr>
                    </thead>

                    <tbody className="white-bg view-det-pane">
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row?.age}</td>
                                <td>{row?.diagnosis}</td>
                                <td >{row?.labRequest}</td>
                                <td >{new Date(row?.createdOn).toLocaleDateString()}</td>
                                <td ><div className="rounded-btn-yellow w-75 flex flex-v-center gap-2 flex-h-center" onClick={(() => stageAttachments(row))}><RiFilePaper2Line /> Lab Notes</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                modalOpen && (
                    <LabsAttachment closeModal={toggleModal} data={attachments} patient={patient
                    } subject={subject} />
                )
            }
        </div>
    );
}

export default LabsTable;
