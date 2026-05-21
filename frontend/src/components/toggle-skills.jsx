// import { useState } from "react";
import toggleIconDown from "../assets/double-down-icon.png";
import toggleIconUp from "../assets/double-up-icon.png";

import "./toggle-skills.css";

function ToggleSkills({ isOpen, onToggle }) {
  return (
    <div className="toggle-skills">
      <img src={isOpen ? toggleIconUp : toggleIconDown} onClick={onToggle} />
    </div>
  );
}

export default ToggleSkills;
