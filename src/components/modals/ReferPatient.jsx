import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { post } from '../../utility/fetch';
import toast from 'react-hot-toast';

function ReferPatient({ closeModal, visit, id }) {
    const [labNotes, setLabNotes] = useState('');
    const [labType, setLabType] = useState('');
    const [labInputs, setLabInputs] = useState(['']); // State to hold individual lab inputs
    const [loading, setLoading] = useState(false);
    const [diagnosis, setDiagnosis] = useState('');
    const [labCenter, setLabCenter] = useState('');

    const addlabInput = () => {
        setLabInputs([...labInputs, '']);
    };

    const handleLabChange = (index, value) => {
        const newlabInputs = [...labInputs];
        newlabInputs[index] = value;
        setLabInputs(newlabInputs);
    };

    const removelabInput = (index) => {
        const newlabInputs = [...labInputs];
        newlabInputs.splice(index, 1);
        setLabInputs(newlabInputs);
    };

    const referPatient = async () => {
        setLoading(true);
        const payload = {
            labCenter: labCenter,
            diagnosis: diagnosis,
            labType: labType,
            labRequests: labInputs.filter(lab => lab.trim() !== ''), // Filter out empty labs
            labNote: labNotes,
        }
        console.log(payload)
        try {
            await post(`/patients/${id}/visit/${visit?.id}/labrequest`, payload);
            toast.success('lab request added successfully');
            closeModal();


        } catch (error) {
            toast.error('Error adding treatment');
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
                    {labInputs.map((lab, index) => (
                        <div key={index} className='flex flex-v-center space-between'>
                            <div className='w-80'>
                                <InputField
                                    label={`lab ${index + 1}`}
                                    value={lab}
                                    onChange={(e) => handleLabChange(index, e.target.value)}
                                />
                            </div>
                            <div className='w-10 m-t-10'>
                                <button className='secondary-btn-no-h p-10 bold-text pointer' onClick={() => removelabInput(index)}>
                                    <RiCloseFill />
                                </button>
                            </div>
                        </div>
                    ))}
                    <button className='text-green secondary-btn m-t-20 pointer' onClick={addlabInput}>+ Add Lab Request</button>


                    <TextArea label="Lab Notes" name="labNotes" onChange={(e) => setLabNotes(e.target.value)} />
                    <TextArea label="Diagnosis" name="diagnosis" onChange={(e) => setDiagnosis(e.target.value)} />
                    <button className="btn m-t-20 w-100" onClick={(() => referPatient())} disabled={loading}>Refer Patient</button>
                </div>
            </div>
        </div>
    );
}

export default ReferPatient;
