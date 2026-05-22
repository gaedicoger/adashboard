import "./sub-skills.css";

import DeleteSkill from "./delete-button";
import { useState } from "react";

import { updateSubSkill } from "../api/call-api";

function DisplaySubSkill({ subSkill, subSkills, setSubSkills }) {
  const [isValidated, setValidated] = useState(subSkill.validated);

  async function handleChange(e) {
    const newValue = e.target.checked;
    setValidated(newValue);
    await updateSubSkill(subSkill.id, newValue);
    setSubSkills(
      subSkills.map((item) =>
        item.id === subSkill.id ? { ...item, validated: newValue } : item,
      ),
    );
  }
  return (
    <div className="sub-skills-content">
      <div className="ckeckbox">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={isValidated}
        ></input>
      </div>
      {subSkill.description}
      <DeleteSkill />
    </div>
  );
}

export default DisplaySubSkill;
