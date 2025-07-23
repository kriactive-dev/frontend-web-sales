import { BrushCleaning, ChevronDown, ChevronUp, Search, SquareCheckBig } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

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
  const [query, setQuery] = useState('');
const {t} = useTranslation()
  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const selectAll = () => {
    const filtered = options.filter((opt) =>
      opt.toLowerCase().includes(query.toLowerCase())
    );
    onChange(filtered);
  };

  const clearAll = () => onChange([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dropdown-container">
      {/* <label>{label}</label> */}
      <div className="dropdown-box" onClick={() => setIsOpen(!isOpen)}>
        {selected.length > 0 ? selected.join(', ') : `${t('select')}...`}
        <span className="arrow">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-buttons">
            <button onClick={selectAll}><SquareCheckBig size={15} style={{marginLeft: "0px"}}/><span>{t('select_all')}</span></button>
            <button onClick={clearAll}><BrushCleaning size={15} style={{marginLeft: "0px"}}/><span>{t('clear')}</span> </button>
          </div>
          <div className="search-row search-row2 searchSelect">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder={t('search')}
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
          </div>
          

          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <label key={opt} className="dropdown-option">
                <input
                  type="checkbox"
                  checked={selected.includes(opt)}
                  onChange={() => toggleOption(opt)}
                />
                {opt}
              </label>
            ))
          ) : (
            <div className="no-options">Nenhuma opção encontrada</div>
          )}

         
        </div>
      )}
    </div>
  );
};

export default MultiCheckboxDropdown;
