import React from "react";
import InputField from "../../UI/InputField";

function Personal() {
  return (
    <div className="w-50">
      {" "}
      <div className="m-t-40"></div>
      <InputField label="First Name" />
      <InputField label="Last Name" />
      <InputField label="Gender" />
      <InputField label="Date Of Birth" />
      <InputField label="Nationality" />
      <InputField label="State Of Origin" />
      <InputField label="LGA" />
      <InputField label="Place Of Birth" />
      <InputField label="Marital Status" />
    </div>
  );
}

export default Personal;