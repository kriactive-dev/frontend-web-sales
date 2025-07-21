// src/App.tsx
import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';
const options = [
  { value: 'admin', label: 'Administrador' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Visualizador' },
  { value: 'moderator', label: 'Moderador' },
  { value: 'guest', label: 'Convidado' },
];


const UseMulti: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<typeof options>([]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>MultiSelect com React + TypeScript</h1>

      <MultiSelectDropdown
        label="Escolha os frameworks que você usa:"
        options={options}
        selectedOptions={selectedOptions}
        onChange={setSelectedOptions}
      />

      <div style={{ marginTop: '1rem' }}>
        <h3>Selecionados:</h3>
        <ul>
          {selectedOptions.length === 0 ? (
            <li>Nenhum selecionado</li>
          ) : (
            selectedOptions.map((opt) => <li key={opt.value}>{opt.label}</li>)
          )}
        </ul>
      </div>
    </div>
  );
};

export default UseMulti;
