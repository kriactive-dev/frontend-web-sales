import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

// import './dropdown.css';

interface MultiCheckboxDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const MultiCheckboxDropdown: React.FC<MultiCheckboxDropdownProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const selectAll = () => onChange(options);
  const clearAll = () => onChange([]);

  return (
    <div className="dropdown-container">
      {/* <label>{label}</label> */}
      <div className="dropdown-box" onClick={() => setIsOpen(!isOpen)}>
        {selected.length > 0 ? selected.join(', ') : 'Selecione...'}
        <span className="arrow">{isOpen ? <ChevronUp/> : <ChevronDown/>}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <label key={opt} className="dropdown-option">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
              />
              {opt}
            </label>
          ))}
          <div className="dropdown-buttons">
            <button onClick={selectAll}>Selecionar Todos</button>
            <button onClick={clearAll}>Limpar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiCheckboxDropdown;
