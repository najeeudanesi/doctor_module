import React from "react";
import InputField from "../../UI/InputField";

function EmergencyContact() {
  return (
    <div className="w-50">
      {" "}
      <div className="m-t-40"></div>
      <InputField label="Relationship" />
      <InputField label="First Name" />
      <InputField label="Last Name" />
      <InputField label="Gender" />
      <InputField label="Date Of Birth" />
      <InputField label="Nationality" />
      <InputField label="State Of Origin" />
      <InputField label="LGA" />
      <InputField label="Place Of Birth" />
      <InputField label="Marital Status" />
      <button className="btn m-t-20 w-100">Continue</button>
    </div>
  );
}

export default EmergencyContact;
