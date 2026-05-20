import { useState } from "react";
import DisplaySubSkills from "./sub-skills";
import AddSkill from "./add-button";
import DeleteSkill from "./delete-button";
import ToggleSkills from "./toggle-skills";
import ProgressBar from "./progress-bar";

function Skill({ skill, subSkills }) {
  const [isOpen, setIsOpen] = useState(false);

  const subSkillsList = subSkills.filter(
    (subSkill) => subSkill.skills_id === skill.id,
  );
  console.log("La liste des usbskills par id:", subSkillsList);
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
          <DisplaySubSkills subSkills={subSkills} skillId={skill.id} />
          <AddSkill />
          <DeleteSkill />
        </>
      )}
    </div>
  );
}

export default Skill;
