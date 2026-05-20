// import { useState } from "react";
import toggleIconDown from "../assets/double-down-icon.png";
import toggleIconUp from "../assets/double-up-icon.png";

function ToggleSkills({ isOpen, onToggle }) {
  return (
    <img src={isOpen ? toggleIconUp : toggleIconDown} onClick={onToggle} />
  );
}

export default ToggleSkills;
