
import TreatmentTable from "../../tables/TreatmentTable";
import ReferPatient from "../../modals/ReferPatient";
import { useState } from "react";
import AddTreatment from "../../modals/AddTreatment";

function Treatments({ data, visit, id }) {
  const [showModal, setShowModal] = useState(false);
  const [treatmentModal, setTreatmentModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(visit)
  }

  const toggleTreatmentModal = () => {
    setTreatmentModal(!treatmentModal);
  }
  return (
    <div className="w-100">
      <div className="flex flex-h-end w-75 gap-10"><button className="rounded-btn" onClick={toggleModal}>+ Refer Patient</button><button className="rounded-btn" onClick={toggleTreatmentModal}>+ Add Treatment</button></div>
      <TreatmentTable patientId={id} />
      {
        showModal && <ReferPatient closeModal={toggleModal} visit={visit} id={id} />
      }
      {
        treatmentModal && <AddTreatment closeModal={toggleTreatmentModal} visit={visit} id={id} />
      }

    </div>
  );
}

export default Treatments;
