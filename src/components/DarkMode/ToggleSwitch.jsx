import React, { useContext } from 'react';
import css from './ToggleSwitch.module.css';
// import { ThemeContext } from '../../contexts/ThemeContext.jsx';
// import PropTypes from 'prop-types';
// import { useTheme } from '../../contexts/ThemeContext.jsx';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const { theme, toggleTheme } = useTheme();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={css.darkModeHolder}>
      <input
        type="checkbox"
        id="check"
        className={css.toggle}
        // onChange={handleChange}
        onClick={toggleTheme}
        checked={theme === 'dark'}
      />
      <label htmlFor="check" onClick={toggleDarkMode}>
        {isDarkMode ? 'Dark' : 'Light'}Mode
        {/* {theme === 'light' ? 'Dark' : 'Light'}Mode */}
      </label>
    </div>
  );
};

export default ToggleSwitch;

// ToggleSwitch.propTypes = {
//   handleChange: PropTypes.string.isRequired,
//   isChecked: PropTypes.func.isRequired,
// };
