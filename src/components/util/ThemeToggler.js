import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../../contexts/themeContext';

export default function ThemeToggler() {
  const {isDark, setIsDark} = useContext(ThemeContext);

  const themeToggleRef = useRef(null);

  const toggleTheme = () => {
    const ev = new Event("change");
    themeToggleRef.current.dispatchEvent(ev);
  }

  return (
    <div className="theme-toggler">
      <span role="img" aria-label="light mode">☀️</span>{"  "}
      <div className="slider" onClick={toggleTheme}>
        <input type="checkbox" className="hidden" checked={isDark} ref={themeToggleRef} onChange={() => setIsDark(!isDark)}/>
        <div className="selector"></div>
      </div>{"  "}
      <span role="img" aria-label="dark mode">🌙</span> 
    </div>
  )
}
