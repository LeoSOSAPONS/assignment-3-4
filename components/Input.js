import React, { useState } from 'react';

function Input({ config, label, onChange }) {
  const handlerChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input value={config.value} onChange={handlerChange} />
    </div>
  );
}

function PriceInput({ config, label, onChange }) {
  const [value, setValue] = useState(config.value);

  const handlePriceChange = (newValue) => {
    const numericValue = parseFloat(newValue);
    
    if (!isNaN(numericValue) && numericValue >= 0) {
      setValue(newValue);
      onChange(numericValue);
    }
  };

  return (
    <Input
      config={{ ...config, value: value }}
      label={label}
      onChange={handlePriceChange}
    />
  );
}

export default PriceInput;