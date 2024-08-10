import { useEffect, useState } from "react";
import LabsTable from "../../tables/LabsTble";
import { get } from "../../../utility/fetch";

function Labs({ id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    console.log("id:", id);
    setIsLoading(true);
    try {
      let res = await get(`/patients/${id}/lab_reports`);
      console.log(res);
      setData(res?.data);
    } catch (error) {
      console.error('Error fetching lab reports:', error);
      // Handle the error here, such as displaying an error message to the user
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      {
        !isLoading ? (<LabsTable data={data} id={id} />) : (<div>Loading...</div>)
      }

    </div>
  );
}

export default Labs;
