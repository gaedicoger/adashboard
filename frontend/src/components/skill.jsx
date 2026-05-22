import { useState } from "react";
import DisplaySubSkills from "./sub-skills";
import AddSkill from "./add-button";
import ToggleSkills from "./toggle-skills";
import ProgressBar from "./progress-bar";

import "./skill.css";

function Skill({ skill, subSkills, setSubSkills, loadStart }) {
  const [isOpen, setIsOpen] = useState(false);

  const subSkillsList = subSkills.filter(
    (subSkill) => subSkill.skills_id === skill.id,
  );
  console.log("La liste des subskills par id:", subSkillsList);
  const total = subSkillsList.length;
  console.log("Total de subSkills liés:", total);
  const validated = subSkillsList.filter(
    (subSkill) => subSkill.validated === true,
  ).length;
  console.log("Total validés:", validated);
  const percentage = (validated / total) * 100;
  console.log("Pourcentage", percentage);

  return (
    <div key={skill.id} className="skill-content">
      <div className="skill-title">{skill.name}</div>
      <ProgressBar percentage={percentage} />
      <ToggleSkills isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <>
          <div className="add-skills-contener">
            <AddSkill skillId={skill.id} loadStart={loadStart} />
          </div>
          <DisplaySubSkills
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
