import { useEffect, useState } from "react";
import LabsTable from "../../tables/LabsTble";
import { get } from "../../../utility/fetch";

function Labs({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await get(`/patients/${id}/lab_reports`);
      console.log(response);
      setData(response);

    }
    catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>

      <LabsTable data={data} id={id} />
    </div>
  );
}

export default Labs;
