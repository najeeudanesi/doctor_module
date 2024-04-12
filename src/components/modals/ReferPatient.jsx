import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

function ReferPatient({ closeModal }) {
    return (
        <div className='overlay'>
            <RiCloseFill className='close-btn pointer' onClick={closeModal} />
            <div className="modal-box max-w-400">
                <div className="p-20">
                    <h2>
                        Refer Patient

                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ReferPatient