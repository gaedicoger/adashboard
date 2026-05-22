// =============================ADD BUTTON======================================

// IMPORTS :
import { useState } from "react";
import AddSkillModal from "./add-skill-modal";
import addIcon from "../assets/add-icon.png";
import "./css/add-button.css";

/**
 * Composant Bouton ajouter une subkills
 * @param {number} skillId - L'id de la compétence parente
 * @param {Function} loadStart - ! PROP DRILLING & REFETCH — depuis App.jsx
 * @returns {JSX.Element}
 */

function AddSubSkill({ skillId, loadStart }) {
  const [isOpen, setIsOpen] = useState(false); //Use state du bouton ajout

  return (
    <>
      <div className="toggle-content">
        <div className="icon-btn">
          <img src={addIcon} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {/* Si isOpen est true : affiche le pop up d'ajout */}
        {isOpen && (
          <AddSkillModal
            skillId={skillId}
            onClose={() => setIsOpen(false)}
            loadStart={loadStart}
          />
        )}
      </div>
    </>
  );
}

export default AddSubSkill;
