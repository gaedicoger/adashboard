//============================ SUBSKILL ========================================

//IMPORTS:
import "./css/display-sub-skills.css";
import DeleteSkill from "./delete-button.jsx";
import { useState } from "react";
import { updateSubSkill } from "../api/call-api";

/**
 * Composant: Afficher une subkill et sa checkbox
 * @param {Object} subSkill - La subskill à afficher
 * @param {Array} subSkills - La liste complète des subskills
 * @param {Function} setSubSkills - Mise à jour du tableau subskills
 * @param {Function} loadStart - //!Refetch des données depuis le serveur
 * @returns {JSX.Element}
 */
function SubSkill({ subSkill, subSkills, setSubSkills, loadStart }) {
  const [isValidated, setValidated] = useState(subSkill.validated); //Use state pour stocker la validation de la compétence

  /**
   * Gère le changement d'état de la checkbox
   * @param {Event} e - L'événement onChange
   */
  async function handleChange(e) {
    const newValue = e.target.checked; //Stocker la nouvelle valeur de la checkbox
    setValidated(newValue); //la passer dans le useState
    await updateSubSkill(subSkill.id, newValue); // Mettre à jour la BDD en appellant la fonction fetch présednte dans call-api
    setSubSkills(
      subSkills.map((item) =>
        item.id === subSkill.id ? { ...item, validated: newValue } : item,
      ), //Passer la compétence mise à jour dans le useState de SubSkills pour qu'elle s'affiche
    );
  }
  return (
    <div className="sub-skills-content">
      <div className="ckeckbox">
        <input
          type="checkbox"
          onChange={handleChange} //Ecoute le changement et appelle handleChange
          checked={isValidated}
        ></input>
      </div>
      {subSkill.description}
      <DeleteSkill subSkillId={subSkill.id} loadStart={loadStart} />
    </div>
  );
}

export default SubSkill;
