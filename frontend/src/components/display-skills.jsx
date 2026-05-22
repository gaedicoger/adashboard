//========================== DISPLAY SKILLS ============================================

//IMPORTS:
import Skill from "./skill.jsx";

/**
 * Composant : afficher l'ensemble des compétences
 * @param {Array} skills - La liste complète des compétences
 * @param {Array} subSkills - La liste complète des sous-compétences
 * @param {Function} setSubSkills - ! PROP DRILLING — mise à jour du tableau depuis App.jsx
 * @param {Function} loadStart - ! PROP DRILLING — refetch depuis App.jsx
 * @returns {JSX.Element}
 */
function DisplaySkills({ skills, subSkills, setSubSkills, loadStart }) {
  return (
    <div className="skills-list">
      <h2 className="skills-title">⚔️ Compétences</h2>
      {skills &&
        skills.map((skill) => (
          <Skill
            key={skill.id}
            skill={skill}
            subSkills={subSkills}
            setSubSkills={setSubSkills}
            loadStart={loadStart}
          />
        ))}
    </div>
  );
}

export default DisplaySkills;
