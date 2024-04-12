import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import InputField from '../UI/InputField'
import TextArea from '../UI/TextArea'

function AddTreatment({ closeModal }) {
    return (
        <div className='overlay'>
            <RiCloseFill className='close-btn pointer' onClick={closeModal} />
            <div className="modal-box max-w-600">
                <div className="p-40">


                    <InputField label="Treatment Category" />
                    <div className='flex flex-v-center space-between'><div className='w-80'><InputField label="prescription" /></div>
                        <div className='w-10'><button className='w-100 secondary-btn'>+</button></div>
                    </div>
                    <TextArea label="Patient Diagnosis" />
                    <TextArea label="Add Care Plan" />
                    <button className="btn m-t-20 w-100">Add Treatment</button>

                </div>
            </div>
        </div>
    )
}

export default AddTreatment