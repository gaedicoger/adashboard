import { useState } from "react";
import AddSkillModal from "./add-skill-modal";
import addIcon from "../assets/add-icon.png";

import "./add-button.css";

function AddSkill() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="toggle-content">
        <div className="icon-btn">
          <img src={addIcon} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && <AddSkillModal />}
      </div>
    </>
  );
}

export default AddSkill;
