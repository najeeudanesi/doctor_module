import React from "react";
import InputField from "../../UI/InputField";

function Personal({ data }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust format as needed
  };
  return (
    <div className="w-50">
      {" "}
      <div className="m-t-40" ></div>
      <InputField label="First Name" value={data.firstName} disabled={true} />
      <InputField label="Last Name" value={data.lastName} disabled={true} />
      <InputField label="Gender" value={data.gender} disabled={true} />
      <InputField label="Date Of Birth" value={formatDate(data.dateOfBirth)} disabled={true} />
      <InputField label="Nationality" value={data.country || "Nigerian"} disabled={true} />
      <InputField label="State Of Origin" value={data.stateOfOrigin} disabled={true} />
      <InputField label="LGA" value={data.lga} disabled={true} />
      <InputField label="Place Of Birth" value={data.placeOfBirth} disabled={true} />
      <InputField label="Marital Status" value={data.maritalStatus} disabled={true} />
    </div>
  );
}

export default Personal;
