/* eslint-disable max-len */
import React from 'react';
import { useTheme } from '../state/useTheme';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return ( 
    <header>
      <p>futurama characters</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        click to change theme
      </button>
    </header>
  );
}
