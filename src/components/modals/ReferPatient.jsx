import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { post } from '../../utility/fetch';
import toast from 'react-hot-toast';
import { BsTrash } from 'react-icons/bs';

function ReferPatient({ closeModal, visit, id }) {
    const [labNotes, setLabNotes] = useState('');
    const [labType, setLabType] = useState('');
    const [labRequests, setLabRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [diagnosis, setDiagnosis] = useState('');
    const [labCenter, setLabCenter] = useState('');
    const [currentLabRequest, setCurrentLabRequest] = useState('');

    const addLabRequest = () => {
        if (currentLabRequest.trim() !== '') {
            setLabRequests([...labRequests, currentLabRequest]);
            setCurrentLabRequest(''); // Clear the input field
        }
    };

    const removeLabRequest = (index) => {
        const updatedLabRequests = [...labRequests];
        updatedLabRequests.splice(index, 1);
        setLabRequests(updatedLabRequests);
    };

    const referPatient = async () => {
        if (labCenter === '' || labType === '' || labRequests.length === 0 || labNotes === '') {
            toast("Please fill in all fields")
            return
        }
        setLoading(true);
        const payload = {
            labCenter: labCenter,
            diagnosis: diagnosis,
            labType: labType,
            labRequests: labRequests.filter(request => request.trim() !== ''), // Filter out empty lab requests
            labNote: labNotes,
        }
        try {
            await post(`/patients/${id}/visit/${visit?.id}/lab-request`, payload);
            toast.success('Lab request added successfully');
            closeModal();
        } catch (error) {
            toast.error('Error adding lab request');
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <div className='overlay'>
            <RiCloseFill className='close-btn pointer' onClick={closeModal} />
            <div className="modal-box max-w-600">
                <div className="p-40">
                    <h3 className="bold-text">Refer Patient</h3>
                    <InputField label="Lab Center" name="labCenter" onChange={(e) => setLabCenter(e.target.value)} />
                    <InputField label="Lab Type" name="labType" onChange={(e) => setLabType(e.target.value)} />
                    <div className="m-t-20">
                        <InputField
                            label="Add Lab Request"
                            value={currentLabRequest}
                            onChange={(e) => setCurrentLabRequest(e.target.value)}
                        />
                        <button className="btn m-t-10" onClick={addLabRequest}>Add Lab Request</button>
                    </div>
                    {labRequests.length > 0 && (
                        <table className="bordered-table-2 m-t-20">
                            <thead>
                                <tr>
                                    <th className='w-20'>s/n</th>
                                    <th className='w-60'>Lab Request</th>
                                    <th className='w-20'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {labRequests.map((request, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{request}</td>
                                        <td>
                                            <BsTrash className="text-red pointer" height={20} width={20} onClick={() => removeLabRequest(index)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <TextArea label="Lab Notes" name="labNotes" onChange={(e) => setLabNotes(e.target.value)} />
                    <TextArea label="Diagnosis" name="diagnosis" onChange={(e) => setDiagnosis(e.target.value)} />
                    <button className="btn m-t-20 w-100" onClick={referPatient} disabled={loading}>Refer Patient</button>
                </div>
            </div>
        </div>
    );
}

export default ReferPatient;
