import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PatientsTable from "../tables/PatientsTable";
import { PatientData, stats } from "./mockdata/PatientData";
import StatCard from "../UI/StatCard";
import { RiCalendar2Fill } from "react-icons/ri";

function Patients() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
    <div className="w-100 m-t-80">
      <h3>Patients Management</h3>
      <div className="m-t-20">
        <div className="flex">
          {stats.map((stat) => (
            <div className="m-r-20" key={stat.id}>
              <StatCard data={stat} icon={stat.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-100 space-between">
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

        <div className="flex flex-v-center  w-50 m-t-20 gap-10">
          <div className="w-60 input">
            <input type="text" />
          </div>

          <div className="dropdown-input w-25 ">
            {" "}
            <select>
              <option value="Ward A">Ward A</option>
              <option value="Ward B">Ward B</option>
              <option value="Ward C">Ward C</option>
              <option value="Ward D">Ward D</option>
            </select>
          </div>
        </div>
      </div>

      <div className="">
        <PatientsTable data={PatientData} />
      </div>
    </div>
  );
}

export default Patients;
