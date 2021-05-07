import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import Toggle from "./Toggle";

const DarkModeToggle = () => {
  return (
    <div className="flex flex-row-reverse">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <FontAwesomeIcon icon={faSun} className="w-14 h-8 mr-2" />
        <Toggle />
        <FontAwesomeIcon icon={faMoon} className="w-14 h-8 ml-2" />
      </label>
    </div>
  );
};

export default DarkModeToggle;
