// src/components/MultiSelectDropdown.tsx
import React from 'react';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  label: string;
  options: Option[];
  selectedOptions: Option[];
  onChange: (selected: Option[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
}) => {
  return (
    <div style={{ marginTop: '1rem', maxWidth: '400px' }}>
      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
        {label}
      </label>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={(selected) => onChange(selected as Option[])}
        placeholder="Selecione uma ou mais opções"
      />
    </div>
  );
};

export default MultiSelectDropdown;
