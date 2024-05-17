import React from 'react';
import { RiCloseFill, RiDownloadCloud2Fill, RiFileDownloadFill } from 'react-icons/ri';
import InputField from '../UI/InputField';
import toast from 'react-hot-toast';

function LabsAttachment({ closeModal, data, subject, patient, fullData }) {
    const downloadFile = async (docName) => {
        try {
            // Get the token from local storage
            const token = sessionStorage.getItem('token').split('Bearer ')[1];

            // If token is not available, handle accordingly
            if (!token) {
                console.error('Token not found in session storage');
                return;
            }

            // Construct the URL with the document name
            const url = `https://edogoverp.com/labapi/api/document/download-document/${docName}`;

            // Fetch options including the Authorization header with the JWT token
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            // Fetch the file
            const response = await fetch(url, options);

            // Check if the request was successful
            if (response.ok) {
                // Convert response body to a blob
                const blob = await response.blob();

                // Create a URL for the blob
                const blobUrl = URL.createObjectURL(blob);

                // Trigger download by creating an anchor element
                const anchor = document.createElement('a');
                anchor.href = blobUrl;
                anchor.download = docName; // Set the filename for download
                anchor.click();

                // Clean up by revoking the blob URL
                URL.revokeObjectURL(blobUrl);
            } else {
                toast.error('Failed to Download/ Invalid Document')
                console.error('Failed to fetch download link:', response.statusText);
            }
        } catch (e) {
            console.error('Error fetching download link:', e);
        }
    };

    return (
        <div className='overlay'>
            <RiCloseFill className='close-btn pointer' onClick={closeModal} />
            <div className="modal-box max-w-800">
                <div className="p-40">
                    <div className='flex space-between bold-text'>{patient + " "}lab report</div>
                    <InputField value={subject} label="Subject" />
                    <div className='flex flex-v-center m-t-10 '><div className='comment-btn w-100 p-10 bold-text'>Lab Findings</div>  </div>
                    <div className='outline-box p-10'>{fullData?.labFindings}</div>
                    {
                        data.map((item, i) => (
                            <div key={i} className='m-t-30'>
                                <div className='bold-text'>{new Date(item?.createdOn).toLocaleDateString()}</div>
                                {/* Button to download attachment */}
                                <div className='text-green pointer'>
                                    <RiFileDownloadFill onClick={() => downloadFile(item?.docName)} size={200} />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default LabsAttachment;
