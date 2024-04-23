import React from "react";
import LabsTable from "../../tables/LabsTble";

function Labs({ visit, id }) {
  return (
    <div>

      <LabsTable data={visit} id={id} />
    </div>
  );
}

export default Labs;
