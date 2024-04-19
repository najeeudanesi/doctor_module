import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import InputField from '../UI/InputField';
import TextArea from '../UI/TextArea';
import { post } from '../../utility/fetch';
import toast from 'react-hot-toast';

function AddTreatment({ closeModal, visit, id }) {
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
                    {medicationInputs.map((medication, index) => (
                        <div key={index} className='flex flex-v-center space-between'>
                            <div className='w-80'>
                                <InputField
                                    label={`Medication ${index + 1}`}
                                    value={medication}
                                    onChange={(e) => handleMedicationChange(index, e.target.value)}
                                />
                            </div>
                            <div className='w-10'>
                                <button className='w-100 secondary-btn' onClick={() => removeMedicationInput(index)}>-</button>
                            </div>
                        </div>
                    ))}
                    <button className='btn secondary-btn m-t-20' onClick={addMedicationInput}>Add Medication</button>
                    <TextArea label="Patient Diagnosis" name="diagnosis" onChange={(e) => setDiagnosis(e.target.value)} />
                    <TextArea label="Add Care Plan" name="carePlan" onChange={(e) => setCarePlan(e.target.value)} />
                    <button className="btn m-t-20 w-100" onClick={(() => addTreatment())} disabled={loading}>Add Treatment</button>
                </div>
            </div>
        </div>
    );
}

export default AddTreatment;
