import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PatientsTable from "../tables/PatientsTable";
import StatCard from "../UI/StatCard";
import { get } from "../../utility/fetch";
import { RiCalendar2Fill } from "react-icons/ri";
import { stats } from "./mockdata/PatientData";
import SearchInput from "../UI/SearchInput";

function Patients() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [assignedPatients, setAssignedPatients] = useState(0)
  const [outPatients, setOutpatients] = useState(0)
  const [waiting, setWaiting] = useState(0)
  const [admitted, setAdmitted] = useState(0)
  const [hmoPatients, setHmoPatients] = useState(0)
  const [summary, setSummary] = useState([0, 0, 0, 0, 0])
  const [patientData, setPatientData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(false)
  const [filteredDate, setFilteredDate] = useState(new Date()); // Add state for filtered date

  const getTableData = async () => {
    try {
      const data = await get(`/patients/assignedtodoctor`);
      setPatientData(data.data);
      setFilteredData(data.data); // Initialize filtered data with all patient data
      console.log(selectedDate);

      ;
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  //done
  const getAssigned = async () => {
    try {
      const data = await get(
        `/dashboard/assignedtodoctor`, { status: 1 }
      )
      setAssignedPatients(data)


    } catch (e) {
      console.log("Error: ", e)

    }

  }

  const getOutPatients = async () => {
    try {
      const data = await get(
        `/dashboard/AllOutPatientAndInPatientCount`
      )

      setOutpatients(data.outpatientCount);



    } catch (e) {
      console.log("Error: ", e)

    }

  }

  const getWaiting = async () => {
    try {
      const data = await get(
        `/dashboard/assignedtodoctor`, { status: 1 }
      )

      setWaiting(data);


    } catch (e) {
      console.log("Error: ", e)

    }

  }
  const getAdmitted = async () => {
    try {
      const data = await get(
        `/dashboard/doctor/admittedpatients`
      )

      setAdmitted(data);


    } catch (e) {
      console.log("Error: ", e)

    }

  }

  //done
  const getHmoPatients = async () => {
    try {
      const data = await get(
        `/dashboard/hmo-patient`
      )

      setHmoPatients(data);


    } catch (e) {
      console.log("Error: ", e)

    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true)
    await getAssigned();
    await getAdmitted();
    await getHmoPatients();
    await getOutPatients();
    await getWaiting();
    await getTableData()
    setLoading(false)
  }

  useEffect(() => {
    setSummary([assignedPatients, outPatients, waiting, admitted, hmoPatients]);
  }, [assignedPatients, outPatients, waiting, admitted, hmoPatients]);

  useEffect(() => {
    if (searchText === "") {
      dateFilter();
      return
    }
    const filteredResults = patientData.filter((patient) =>
      patient.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filteredResults);

  }, [searchText, patientData]);

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFilteredDate(date); // Set the filtered date
  };

  const dateFilter = () => {
    if (filteredDate) {
      const filteredResults = patientData.filter((patient) => {
        // Parse the date string into a Date object
        const patientDate = new Date(patient.createdAt);

        // Extract the date components
        const patientYear = patientDate.getFullYear();
        const patientMonth = patientDate.getMonth();
        const patientDay = patientDate.getDate();

        // Extract the selected date components
        const selectedYear = filteredDate.getFullYear();
        const selectedMonth = filteredDate.getMonth();
        const selectedDay = filteredDate.getDate();

        // Compare the date components
        return (
          patientYear === selectedYear &&
          patientMonth === selectedMonth &&
          patientDay === selectedDay
        );
      });
      setFilteredData(filteredResults);
    } else {
      setFilteredData(patientData); // If no date selected, show all data
    }
  }
  useEffect(() => {
    dateFilter();
  }, [filteredDate, patientData]);


  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Function to handle date change


  // Function to format the date as "dd-MM-yyyy"
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Function to check if the selected date is today
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Custom input for the date picker
  const CustomInput = ({ value, onClick }) => (
    <button
      onClick={onClick}
      onKeyDown={(e) => e.preventDefault()} // Prevent typing in the date field
      className="custom-datepicker-input flex gap-6 flex-v-center"
    >
      {isToday(selectedDate) ? "Today" : formatDate(selectedDate)}
      <RiCalendar2Fill />
    </button>
  );

  return (
    <div className="w-100 m-t-80 p-20">

      {!loading ? (<div className="">
        <h3>Patients Management</h3>
        <div>
          <div className="flex w-100 space-between gap-8 m-t-20">
            {stats.map((stat, index) => (
              <div className="w-20" key={index}>
                <StatCard data={stat} number={summary[index]} icon={stat.icon} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-v-center w-100 space-between">
          <div className="flex gap-7 m-t-40">
            <p>Assigned Waiting Patients</p>|
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd-MM-yyyy"
              maxDate={new Date()}
              customInput={<CustomInput />}
              icon={<RiCalendar2Fill />}
            />
          </div>

          <div className="flex flex-v-end space-between  w-50 m-t-20 gap-10 ">
            <div></div>
            <div className="w-50">
              <SearchInput type="text" onChange={handleSearchChange} value={searchText} name="searchText" />
            </div>

            {/* <div className="dropdown-input w-25 ">
              {" "}
              <select>
                <option value="">Name</option>
                <option value="Ward B">Age</option>
                <option value="Ward C"></option>
                <option value="Ward D">Ward D</option>
              </select>
            </div> */}
          </div>
        </div>

        <div className="">
          <PatientsTable data={filteredData} />
        </div>
      </div>) : (<div>loading....</div>)}


    </div>
  );
}

export default Patients;
