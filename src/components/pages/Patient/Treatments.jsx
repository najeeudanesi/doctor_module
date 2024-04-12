import React from "react";
import TreatmentTable from "../../tables/TreatmentTable";

function Treatments({ data }) {
  return (
    <div className="w-100">
      <div className="flex flex-h-end w-75 gap-10"><button className="rounded-btn">+ Refer Patient</button><button className="rounded-btn">+ Add Treatment</button></div>
      <TreatmentTable data={data} />
    </div>
  );
}

export default Treatments;
