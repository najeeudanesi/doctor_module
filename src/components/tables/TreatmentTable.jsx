import { useEffect, useState } from "react";
import { get } from "../../utility/fetch";

function TreatmentTable({ patientId }) {
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await get(`/patients/${patientId}/treatmentrecord`)
            console.log(response)
            setData(response)
        } catch (e) {
            console.log(e)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="w-100">
            {
                !isloading ? (<div className="w-100 ">

                    {
                        data ? (
                            <div className="w-100 none-flex-item m-t-40">
                                <table className="bordered-table-2">
                                    <thead className="border-top-none">
                                        <tr className="border-top-none">
                                            <th>Date</th>
                                            <th>Age</th>
                                            <th>weight</th>
                                            <th>Temp</th>
                                            <th>Admin Nurse</th>
                                            <th>Nurse Note</th>
                                            <th>Diagnosis</th>
                                            <th>Medication/Prescription</th>

                                        </tr>
                                    </thead>

                                    <tbody className="white-bg view-det-pane">
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td>{new Date(row?.dateOfVisit).toLocaleDateString()}</td>

                                                <td>{row?.age}</td>
                                                <td>{row?.weight}kg</td>
                                                <td>{row?.temperature}C</td>
                                                <td>{row?.nurse}</td>
                                                <td>{row?.additionalNote}</td>
                                                <td>{row?.diagnosis}</td>
                                                <td><ul>{row?.medications.map((medication, index) => (
                                                    <li key={index}>{medication.name}</li>
                                                ))}</ul></td>


                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p>No data available</p>
                        )
                    }

                </div>) : (<div>Loading....</div>)
            }
        </div>
    );
}

export default TreatmentTable;
