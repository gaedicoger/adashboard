//============================== DISPLAY SUB SKILLS =====================================

//IMPORTS
import "./css/display-sub-skills.css";
import DisplaySubSkill from "./sub-skill.jsx";

/**
 * Composant : Afficher la liste des subkills
 * @param {Array} subSkills - La liste complète des subskills
 * @param {number} skillId - L'id de la compétence parente pour filtrer
 * @param {Function} setSubSkills - //! PROP DRILLING — mise à jour du tableau depuis App.jsx
 * @param {Function} loadStart - //! PROP DRILLING & REFETCH — depuis App.jsx
 * @returns {JSX.Element}
 */
function DisplaySubSkills({ subSkills, skillId, setSubSkills, loadStart }) {
  return (
    subSkills &&
    subSkills
      .filter((subSkill) => subSkill.skills_id === skillId)
      .map((subSkill) => (
        <DisplaySubSkill
          key={subSkill.id}
          subSkills={subSkills}
          subSkill={subSkill}
          setSubSkills={setSubSkills}
          loadStart={loadStart}
        ></DisplaySubSkill>
      ))
  );
}

export default DisplaySubSkills;
