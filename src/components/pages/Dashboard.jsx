import React, { useEffect, useState } from "react";
import { stats } from "./mockdata/PatientData";
import StatCard from "../UI/StatCard";
import PatientsBreakdown from "../UI/PatientsBreakdown";
import PatientAdmission from "../UI/PatientAdmission";

import GenderDistribution from "../UI/GenderDistribution";
import OutAndInpatientGraph from "../UI/OutAndInpatientGraph";
import { get } from "../../utility/fetch";

function Dashboard() {

  const [assignedPatients, setAssignedPatients] = useState(0)
  const [outPatients, setOutpatients] = useState(0)
  const [waiting, setWaiting] = useState(0)
  const [admitted, setAdmitted] = useState(0)
  const [hmoPatients, setHmoPatients] = useState(0)
  const [summary, setSummary] = useState([0, 0, 0, 0, 0])

  //done
  const getAssigned = async () => {
    try {
      const data = await get(
        `/dashboard/assignedtodoctor`, { status: 1 }
      )
      setAssignedPatients(data.data)
      console.log(data)

    } catch (e) {
      console.log("Error: ", e)

    }

  }

  const getOutPatients = async () => {
    try {
      const data = await get(
        `/dashboard/doctor/admittedpatients`
      )

      setOutpatients(data.data);
      console.log(data)

    } catch (e) {
      console.log("Error: ", e)

    }

  }

  const getWaiting = async () => {
    try {
      const data = await get(
        `/dashboard/admission`
      )

      setWaiting(data.data.count);
      console.log(data)

    } catch (e) {
      console.log("Error: ", e)

    }

  }
  const getAdmitted = async () => {
    try {
      const data = await get(
        `/dashboard/doctor/admittedpatients`
      )

      setAdmitted(data.data);
      console.log(data)

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

      setHmoPatients(data.data);
      console.log(data)

    } catch (e) {
      console.log("Error: ", e)

    }

  }



  const fetchData = async () => {
    await getAssigned();
    await getAdmitted();
    await getHmoPatients();
    await getOutPatients();
    await getWaiting();
    setSummary([assignedPatients, outPatients, waiting, admitted, hmoPatients])
  }

  useEffect(() => {
    fetchData();
  }, [])




  return (
    <div className="w-100 m-t-80">
      <div className="m-t-20">
        <div className="flex">
          {" "}
          {stats.map((stat, index) => (
            <div className="m-r-20" key={index}>
              <StatCard data={stat} number={summary[index]} icon={stat.icon} />
            </div>
          ))}
        </div>
        <div className="w-100 gap-16 flex">
          <div className="w-80  m-t-40">
            <OutAndInpatientGraph />
            <div className="flex m-t-20 w-100">
              <div className="m-r-20 w-50">
                <PatientAdmission />
              </div>
              <div className="w-50">
                <PatientsBreakdown />
              </div>
            </div>
          </div>
          <div className="w-20 m-t-40">
            <GenderDistribution />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
