import React from "react";
import InputField from "../../UI/InputField";

function ContactDetails() {
  return (
    <div>
      <div className="w-50">
        {" "}
        <div className="m-t-40"></div>
        <InputField label="State Of Residence" />
        <InputField label="LGA" />
        <InputField label="City" />
        <InputField label="Home Address" />
        <InputField label="Phone Number" />
        <InputField label="Email Address" />
        <InputField label="Alt Phone Number" />
      </div>
    </div>
  );
}

export default ContactDetails;
