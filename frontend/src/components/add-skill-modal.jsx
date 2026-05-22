//=========================ADD-SUBKILL-MODAL====================================

//IMPORTS:
import "./css/add-skill-modal.css";
import { useState } from "react";
import { addSubSkill } from "../api/call-api";

/**
 * Composant pour appeler le pop up "ajout d'une subskills"
 * @param {Function} onClose - Ferme la modal
 * @param {number} skillId - L'id de la compétence parente
 * @param {Function} loadStart - //! REFETCH — depuis App.jsx
 * @returns {JSX.Element}
 */
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
        {/* Ajoute la subSkill en BDD, refetch les données et ferme la modal */}
        <button
          onClick={async () => {
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
