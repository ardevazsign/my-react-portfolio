import React from 'react';
import { useTheme } from '../../contexts/ThemeContext.jsx';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '0.5rem 1rem',
        margin: '1rem',
        cursor: 'pointer',
        borderRadius: '4px',
        border: 'none',
        background: theme === 'light' ? '#000' : '#fff',
        color: theme === 'light' ? '#fff' : '#000',
      }}
    >
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
