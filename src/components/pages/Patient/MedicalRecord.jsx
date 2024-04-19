import React, { useEffect, useState } from "react";
import InputField from "../../UI/InputField";
import TextArea from "../../UI/TextArea";
import { RiToggleFill } from "react-icons/ri";
import { get } from "../../../utility/fetch";

function MedicalRecord({ data }) {
  const [selectedTab, setSelectedTab] = useState("");
  const [medicalRecords, setMedicalRecords] = useState({});
  const [medicalTypes, setMedicalTypes] = useState([]);

  const getMedicalTypes = async () => {
    try {
      const data = await get("/Patients/getAllMedicalTypes");
      setMedicalTypes(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
    medicalTypes.forEach((type) => {
      const recordsOfType = data.filter((record) => record.medicalRecordType === type.index);
      initialRecords[type.index] = recordsOfType.map(record => ({
        name: record.name || "",
        comment: record.comment || ""
      }));
    });
    setMedicalRecords(initialRecords);
  };



  const handleInputChange = (tab, index, key, value) => {
    const updatedRecords = { ...medicalRecords };
    updatedRecords[tab][index][key] = value;
    setMedicalRecords(updatedRecords);
  };

  const handleAddField = (tab) => {
    const updatedRecords = { ...medicalRecords };
    updatedRecords[tab] = [...updatedRecords[tab], { name: "", comment: "" }];
    setMedicalRecords(updatedRecords);
  };

  const handleContinue = () => {
    // Handle the logic for continuing with the data
    console.log("Medical Records:", medicalRecords);
  };

  useEffect(() => {
    if (selectedTab) {
      initializeMedicalRecords();
    }
  }, [selectedTab]);

  return (
    <div>
      <div className="m-t-40">Medical Record</div>
      {/* Render tabs */}
      <div className="flex">
        <div className="m-r-80">
          {medicalTypes &&
            medicalTypes.map((type) => (
              <div
                key={type.index}
                className={`pointer m-t-20 ${selectedTab === type.index ? "pilled bold-text" : ""
                  }`}
                onClick={() => setSelectedTab(type.index)}
              >
                {type.value}
              </div>
            ))}
        </div>
        {/* Render content based on the selected tab */}
        <div>
          {(selectedTab && medicalTypes) &&
            medicalRecords[selectedTab]?.map((record, index) => (
              <div key={index}>
                <InputField
                  label={`${medicalTypes[selectedTab]?.value}`}
                  type="text"
                  placeholder={`${medicalTypes[selectedTab]?.value}`}
                  value={record.name}
                  onChange={(e) =>
                    handleInputChange(
                      selectedTab,
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
                <TextArea
                  label="Comment"
                  type="text"
                  placeholder="Comment"
                  value={record.comment}
                  onChange={(e) =>
                    handleInputChange(
                      selectedTab,
                      index,
                      "comment",
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          <div className="w-100 flex flex-h-end">
            <button
              className="rounded-btn m-t-20"
              onClick={() => handleAddField(selectedTab)}
            >
              Add {medicalTypes[selectedTab]?.value}
            </button>
          </div>
          {/* <button className="btn w-100 m-t-20" onClick={handleContinue}>
            Continue
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default MedicalRecord;
