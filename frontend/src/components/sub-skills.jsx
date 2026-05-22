import "./sub-skills.css";

import DisplaySubSkill from "./sub-skill.jsx";

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
