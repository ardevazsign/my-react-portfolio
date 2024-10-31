import React from 'react';
import css from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Sidebar } from '../Sidebar/Sidebar';
import { MdOutlineMenu } from 'react-icons/md';
import { useToggle } from '../../hooks/useToggle';
import { Navbar } from '../../components/Navbar/Navbar';
// import useLocalStorage from 'use-local-storage';
// import ToggleSwitch from '../DarkMode/ToggleSwitch.jsx';
import ThemeToggle from '../DarkMode/ThemeToggle.jsx';

export const Header = () => {
  // const preference = window.matchMedia('(prefer-color-scheme:dark)').matches;
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);
  // const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <header className={css.header}>
      {/* LOGO */}
      <Logo />
      {/* Navbar */}
      <Navbar />
      <ThemeToggle />
      {/* <ToggleSwitch /> */}

      {/* onClick={toggleTheme}
       isChecked={isDark}
      handleChange={() => setIsDark(!isDark)} */}

      {/* HAMBURGER ICON */}
      <MdOutlineMenu
        className={`${css.hamburgerIcon} ${
          isSidebarOpen && css.visuallyHidden
        }`}
        onClick={toggleSidebar}
      />
      {/* SIDEBAR */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </header>
  );
};
