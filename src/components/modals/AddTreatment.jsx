import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { post } from '../../utility/fetch';
import toast from 'react-hot-toast';

function AddTreatment({ closeModal, visit, id, fetchData }) {
    const [carePlan, setCarePlan] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [medicationInputs, setMedicationInputs] = useState(['']); // State to hold individual medication inputs
    const [loading, setLoading] = useState(false);

    const addMedicationInput = () => {
        setMedicationInputs([...medicationInputs, '']);
    };

    const handleMedicationChange = (index, value) => {
        const newMedicationInputs = [...medicationInputs];
        newMedicationInputs[index] = value;
        setMedicationInputs(newMedicationInputs);
    };

    const removeMedicationInput = (index) => {
        const newMedicationInputs = [...medicationInputs];
        newMedicationInputs.splice(index, 1);
        setMedicationInputs(newMedicationInputs);
    };

    const addTreatment = async () => {
        setLoading(true);
        const payload = {
            dateOfVisit: visit?.dateOfVisit,
            diagnosis: diagnosis,
            medication: medicationInputs.filter(medication => medication.trim() !== ''), // Filter out empty medications
            carePlan: carePlan,
        }
        console.log(payload)
        try {
            await post(`/patients/${id}/visit/${visit?.id}/addtreatmentprescription`, payload);
            toast.success('Treatment added successfully');
            await fetchData();
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
                    <h3 className="bold-text">Add Treatment</h3>
                    {medicationInputs.map((medication, index) => (
                        <div key={index} className='flex flex-v-center space-between'>
                            <div className='w-80'>
                                <InputField
                                    label={`Medication ${index + 1}`}
                                    value={medication}
                                    onChange={(e) => handleMedicationChange(index, e.target.value)}
                                />
                            </div>
                            <div className='w-10 m-t-10'>
                                <button className='secondary-btn-no-h p-10 bold-text pointer' onClick={() => removeMedicationInput(index)}>
                                    <RiCloseFill />
                                </button>
                            </div>
                        </div>
                    ))}
                    <button className='text-green secondary-btn m-t-20 pointer' onClick={addMedicationInput}>Add Medication</button>
                    <TextArea label="Patient Diagnosis" name="diagnosis" onChange={(e) => setDiagnosis(e.target.value)} />
                    <TextArea label="Add Care Plan" name="carePlan" onChange={(e) => setCarePlan(e.target.value)} />
                    <button className="btn m-t-20 w-100" onClick={(() => addTreatment())} disabled={loading}>Add Treatment</button>
                </div>
            </div>
        </div>
    );
}

export default AddTreatment;
