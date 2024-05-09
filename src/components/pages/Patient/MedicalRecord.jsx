import React, { useEffect, useState } from "react";
import InputField from "../../UI/InputField";
import TextArea from "../../UI/TextArea";
import { RiToggleFill } from "react-icons/ri";
import { get } from "../../../utility/fetch";
import AddMedicalRecord from "../../modals/AddMedicalRecord";

function MedicalRecord({ data, next, fetchData }) {
  const [selectedTab, setSelectedTab] = useState(1);
  const [medicalRecords, setMedicalRecords] = useState({});
  const [medicalTypes, setMedicalTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const getMedicalTypes = async () => {
    setLoading(true);
    try {
      const res = await get("/Patients/getAllMedicalTypes");
      setMedicalTypes(res);
      console.log("medical types", res)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const toggleModal = () => {
    setModal(!modal);
  }

  useEffect(() => {
    getMedicalTypes();
  }, []);

  useEffect(() => {
    if (medicalTypes && medicalTypes.length > 0) {
      setSelectedTab(medicalTypes[0].index); // Set the default tab
      initializeMedicalRecords();
    }
  }, [medicalTypes]);

  const initializeMedicalRecords = () => {
    const initialRecords = {};
    if (selectedTab !== "") {
      const selectedType = medicalTypes.find(type => type.index === selectedTab);
      if (selectedType) {
        const recordsOfType = data.filter(record => record.medicalRecordType === selectedType.index);
        if (recordsOfType.length === 0) {
          // Add an empty record if no records are found
          initialRecords[selectedType.index] = [{ name: "", comment: "" }];
        } else {
          initialRecords[selectedType.index] = recordsOfType.map(record => ({
            name: record.name || "",
            comment: record.comment || ""
          }));
        }
      }
    }
    setMedicalRecords(initialRecords);
  };








  useEffect(() => {
    if (selectedTab) {
      initializeMedicalRecords();
    }
  }, [selectedTab]);

  return (
    <div>
      {
        loading ? <div>Loading...</div> : (
          <div>
            <div className="m-t-40 bold-text">Medical Records</div>

            <div className="flex m-t-30">
              <div className="m-r-80">
                {medicalTypes &&
                  medicalTypes.map((type) => (
                    <div
                      key={type.index}
                      className={`pointer m-t-30 font-sm ${selectedTab === type.index ? "pilled bold-text " : ""
                        }`}
                      onClick={() => setSelectedTab(type.index)}
                    >
                      {type.value}
                    </div>
                  ))}
              </div>

              <div>
                {(selectedTab && medicalTypes) &&
                  medicalRecords[selectedTab]?.map((record, index) => (
                    <div key={index}>
                      <InputField
                        label={`${medicalTypes[selectedTab - 1]?.value}`}
                        type="text"
                        placeholder={`${medicalTypes[selectedTab - 1]?.value}`}
                        value={record.name}
                        disabled={true}
                      />
                      <TextArea
                        label="Comment"
                        type="text"
                        placeholder="Comment"
                        value={record.comment}
                        disabled={true}
                      />
                    </div>
                  ))}
                <div className="w-100 flex flex-h-end">
                  <button
                    className="rounded-btn m-t-20"
                    onClick={toggleModal}
                  >
                    Add {medicalTypes[selectedTab - 1]?.value}
                  </button>
                </div>
                <button className="btn w-100 m-t-20" onClick={() => next()}>
                  Continue
                </button>
              </div>

              {
                modal && <AddMedicalRecord closeModal={toggleModal} patientId={data[0]?.patientId} fetchData={fetchData} medicalRecordType={selectedTab} />
              }
            </div>
          </div>
        )
      }

    </div>
  );
}

export default MedicalRecord;
