import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri'

function LabsAttachment({ closeModal, data, subject, patient }) {
    return (
        <div className='overlay'>
            <RiCloseFill className='close-btn pointer' onClick={closeModal} />
            <div className="modal-box max-w-800">
                <div className="p-40">
                    <div className='flex space-between'>{patient + " "}lab report</div>
                    <div className='flex flex-v-center m-t-10'><div className='comment-btn'>Subject</div> <div className='outline-box w-100'>{subject}</div> </div>
                    {
                        data.map((item, i) => (
                            <div>
                                <div>{new Date(item?.createdOn).toLocaleDateString()}</div>
                                <div className='flex flex-v-center m-t-10 '><div className='comment-btn w-100'>Lab Findings</div>  </div>
                                <div className='outline-box'>{item?.patientLabReport}</div>
                                <img src={item?.docPath} alt="lab image" className='w-100 ' />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

    )
}

export default LabsAttachment