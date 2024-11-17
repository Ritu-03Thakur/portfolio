"use client"
import { useState, useEffect } from 'react';
import { FaSun } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";

export const Theme = () => {
  const [darkMode, setDarkMode] = useState('dark-theme');

  const toggleDarkMode = () => {
    const newTheme = darkMode === "dark-theme" ? "light-theme" : "dark-theme";
    setDarkMode(newTheme);
  };

  useEffect(() => {
    document.body.className = darkMode; 
  }, [darkMode]);

  return (
    <>
      <button onClick={toggleDarkMode}>
        {darkMode === "dark-theme" 
          ? <FaSun size={"20px"} className="text-yellow-300 hover:text-yellow-700" /> 
          : <GiNightSleep size={"20px"} className="text-yellow-300 hover:text-yellow-700" />}
      </button>
    </>
  );
};
