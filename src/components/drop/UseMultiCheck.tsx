import React, { useState } from 'react';
import MultiCheckboxDropdown from './MultiCheckboxDropdownProps';
const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js'];

const UseMultiCheck: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Dropdown com múltiplas opções</h2>

      <MultiCheckboxDropdown
        label="Frameworks:"
        options={frameworks}
        selected={selected}
        onChange={setSelected}
      />

      <div style={{ marginTop: '1rem' }}>
        <h4>Selecionados:</h4>
        <ul>
          {selected.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {selected.length === 0 && <li>Nenhum selecionado</li>}
        </ul>
      </div>
    </div>
  );
};

export default UseMultiCheck;
