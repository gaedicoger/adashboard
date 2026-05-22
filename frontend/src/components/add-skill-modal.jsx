import "./add-skill-modal.css";
import { useState } from "react";
import { addSubSkill } from "../api/call-api";

function AddSkillModal({ onClose, skillId, loadStart }) {
  const [description, setDescription] = useState("");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          name="description"
          placeholder="Je sais..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={async () => {
            console.log("click!", skillId, description);
            await addSubSkill(skillId, description, false);
            loadStart();
            setDescription("");
            onClose();
          }}
        >
          Valider
        </button>
      </div>
    </div>
  );
}

export default AddSkillModal;
