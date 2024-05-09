
import TreatmentTable from "../../tables/TreatmentTable";
import ReferPatient from "../../modals/ReferPatient";
import { useEffect, useState } from "react";
import AddTreatment from "../../modals/AddTreatment";
import { get } from "../../../utility/fetch";
import toast from "react-hot-toast";

function Treatments({ visit, id }) {
  const [showModal, setShowModal] = useState(false);
  const [treatmentModal, setTreatmentModal] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleModal = () => {
    console.log(visit)
    if (visit === null) {
      toast("A visit has to exist before you can add treatment")
      return
    }
    setShowModal(!showModal);
    console.log(visit)
  }

  const toggleTreatmentModal = () => {
    console.log(visit)
    if (visit === null) {
      toast("A visit has to exist before you can add treatment")
      return
    }
    setTreatmentModal(!treatmentModal);
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await get(`/patients/${id}/treatmentrecord`)
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
      <div className="flex flex-h-end w-75 gap-10"><button className="rounded-btn" onClick={toggleModal}>+ Refer Patient</button><button className="rounded-btn" onClick={toggleTreatmentModal}>+ Add Treatment</button></div>
      <TreatmentTable patientId={id} data={data} isloading={isLoading} />
      {
        showModal && <ReferPatient closeModal={toggleModal} visit={visit} id={id} />
      }
      {
        treatmentModal && <AddTreatment closeModal={toggleTreatmentModal} visit={visit} id={id} fetchData={() => fetchData()} />
      }

    </div>
  );
}

export default Treatments;
