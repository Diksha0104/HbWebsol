// src/InputField.jsx
import React from 'react';

const InputField = ({ label, name, value, onChange, type = 'text' }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${name}`}
        style={{ marginLeft: '10px', padding: '5px', width: '164px' }}
      />
    </div>
  );
};

export default InputField;
