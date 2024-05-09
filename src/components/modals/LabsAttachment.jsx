import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

function LabsAttachment({ closeModal, data, subject, patient }) {
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
                    <div className='flex flex-v-center m-t-10'><div className='comment-btn'>Subject</div> <div className='outline-box w-100'>{subject}</div> </div>
                    {
                        data.map((item, i) => (
                            <div key={i}>
                                <div>{new Date(item?.createdOn).toLocaleDateString()}</div>
                                <div className='flex flex-v-center m-t-10 '><div className='comment-btn w-100'>Lab Findings</div>  </div>
                                <div className='outline-box'>{item?.labFindings}</div>

                                {/* Button to download attachment */}
                                <button className="btn m-t-10" onClick={() => downloadFile(item?.docName)}>Download Attachment</button>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default LabsAttachment;
