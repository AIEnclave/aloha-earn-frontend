import React from 'react';
import styles from './Header.module.scss';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};


export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Aloha Earn</h1>
      {/* <ThemeToggleButton /> */}
      {/* Add navigation links here */}
    </header>
  );
};
