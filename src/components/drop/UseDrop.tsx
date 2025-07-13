import React, { useState } from 'react';
import Dropdown from './Dropdown';

const UseDrop: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dropdown em React + TypeScript</h1>
      <Dropdown
        label="Selecione uma opção:"
        options={['React', 'Vue', 'Angular', 'Svelte']}
        onSelect={handleSelect}
      />
      <p>Você selecionou: <strong>{selected || 'nenhuma opção'}</strong></p>
    </div>
  );
};

export default UseDrop;
