// components/Menu.tsx
import React from 'react';
import { useTheme } from '../../../hooks/useTheme';

const Menu: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ padding: '16px', backgroundColor: 'var(--bg-color)' }}>
      <h2>Menu</h2>
      <button
        onClick={toggleTheme}
        style={{
          background: 'var(--primary-color)',
          color: 'var(--text-color)',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {theme === 'dark' ? '🌞 Modo Claro' : '🌙 Modo Escuro'}
      </button>
    </nav>
  );
};

export default Menu;
