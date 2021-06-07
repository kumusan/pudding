import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
      document.querySelector("body")!.style.backgroundColor = "#374151";
    } else {
      setDarkMode(false);
      document.querySelector("html")?.classList.remove("dark");
      document.querySelector("body")!.style.backgroundColor = "#FFF0E8";
    }
  }, [darkMode]);

  const ChangeDarkMode = () => {
    if (darkMode) {
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };
  return (
    <div className="grid justify-items-stretch flex-none">
      <div className="cursor-pointer justify-self-end" onClick={ChangeDarkMode}>
        {darkMode ? (
          <FontAwesomeIcon icon={faMoon} className="w-14 h-8" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="w-14 h-8" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
