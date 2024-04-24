import React, { useState } from "react";
import ImmunizationAttachment from "../modals/ImmunizationAttachments";
function ImmunizationTable({ data }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [attachments, setAttachments] = useState([]);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const stageAttachments = (data) => {
        setAttachments(data)
        toggleModal();
    }

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
                                <td>{new Date(row?.dateGiven).toLocaleDateString()}</td>
                                <td>{row?.vaccine}</td>
                                <td>{row?.quantity}</td>
                                <td>{row?.age}</td>
                                <td>{row?.weight}</td>
                                <td>{row?.temperature}</td>
                                <td>{row?.vaccineBrand}</td>
                                <td>{row?.batchId}</td>
                                <td><div className="rounded-btn" onClick={(() => stageAttachments(row?.immunizationDocuments))}>Attachments</div></td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                modalOpen && (
                    <ImmunizationAttachment closeModal={toggleModal} data={attachments} />
                )
            }
        </div>
    );
}

export default ImmunizationTable;
