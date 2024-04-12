
import TreatmentTable from "../../tables/TreatmentTable";
import ReferPatient from "../../modals/ReferPatient";
import { useState } from "react";
import AddTreatment from "../../modals/AddTreatment";

function Treatments({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [treatmentModal, setTreatmentModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const toggleTreatmentModal = () => {
    setTreatmentModal(!treatmentModal);
  }
  return (
    <div className="w-100">
      <div className="flex flex-h-end w-75 gap-10"><button className="rounded-btn" onClick={toggleModal}>+ Refer Patient</button><button className="rounded-btn" onClick={toggleTreatmentModal}>+ Add Treatment</button></div>
      <TreatmentTable data={data} />
      {
        showModal && <ReferPatient closeModal={toggleModal} />
      }
      {
        treatmentModal && <AddTreatment closeModal={toggleTreatmentModal} />
      }

    </div>
  );
}

export default Treatments;
