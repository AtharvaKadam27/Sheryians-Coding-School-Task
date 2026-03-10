import React from "react";

const FormGroup = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        value={value}
        name={label}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormGroup;
