import React from "react";

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}:{console.log(type)}
        <input type={type} value={value} name={name} onChange={onChange} />
      </label>
    </div>
  );
}

export default FormField;
