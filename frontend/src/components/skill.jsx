import { useState } from "react";
import DisplaySubSkills from "./sub-skills";
import AddSkill from "./add-button";
import DeleteSkill from "./delete-button";
import ToggleSkills from "./toggle-skills";

function Skill({ skill, subSkills }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={skill.id} className="skill-content">
      <div className="skill-title">{skill.name}</div>
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
