import React from 'react';
import { useTheme } from '../../contexts/ThemeContext.jsx';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        fontSize: '10px',
        padding: '0.5rem 1rem',
        marginRight: '2rem',
        cursor: 'pointer',
        borderRadius: '4px',
        borderLeft: 'none',
        borderTop: 'none',
        borderRight: '1px solid var(--link-color)',
        borderBottom: '1px solid var(--link-color)',
        boxShadow: 'var(--boxShadow)',
        background: theme === 'light' ? '#000' : '#fff',
        color: theme === 'light' ? '#fff' : '#000',
      }}
    >
      {theme === 'light' ? 'Dark' : 'Light'}Mode
    </button>
  );
};

export default ThemeToggle;
