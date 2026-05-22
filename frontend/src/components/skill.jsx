//============================== SKILL ========================================

//IMPORTS:
import { useState } from "react";
import SubSkills from "./display-sub-skills.jsx";
import AddSubSkill from "./add-button.jsx";
import ToggleButton from "./toggle-button.jsx";
import ProgressBar from "./progress-bar.jsx";
import "./css/skill.css";

/**
 * Composant: Afficher une compétence, sa barre de progression et son bouton toggle (liste de subskills)
 * @param {Object} skill - La compétence à afficher
 * @param {Array} subSkills - La liste complète des subskills
 * @param {Function} setSubSkills - //! PROP DRILLING — mise à jour du tableau depuis App.jsx
 * @param {Function} loadStart - //! PROP DRILLING & REFETCH depuis App.jsx
 * @returns {JSX.Element}
 */
function Skill({ skill, subSkills, setSubSkills, loadStart }) {
  const [isOpen, setIsOpen] = useState(false); //Usestate pour le bouton Toogle

  const subSkillsList = subSkills.filter(
    (subSkill) => subSkill.skills_id === skill.id,
  ); //On stocker le tableau filtré des subskills triées par compétence correspondante
  const total = subSkillsList.length; //On stocke la longeur du tableau des subskills
  const validated = subSkillsList.filter(
    (subSkill) => subSkill.validated === true,
  ).length; //On stocke combien de subskills sont validées
  const percentage = (validated / total) * 100; //Calcul du pourcentage de subskills validées

  return (
    <div key={skill.id} className="skill-content">
      <div className="skill-title">{skill.name}</div>
      {/* Barre de progression à laquelle on passe le pourcentage */}
      <ProgressBar percentage={percentage} />
      {/* Si ouvert : affiche le bouton d'ajout et la liste des subskills */}
      <ToggleButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <>
          <div className="add-skills-contener">
            {/*! PROP DRILLING & REFETCH — skillId et loadStart descendent jusqu'à AddSkillModal */}
            <AddSubSkill skillId={skill.id} loadStart={loadStart} />
          </div>
          {/*! PROP DRILLING & REFETCH— skillId et loadStart descendent jusqu'à AddSkillModal */}
          <SubSkills
            subSkills={subSkills}
            skillId={skill.id}
            setSubSkills={setSubSkills}
            loadStart={loadStart}
          />
        </>
      )}
    </div>
  );
}

export default Skill;
