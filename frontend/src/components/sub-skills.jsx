import "./sub-skills.css";

import DeleteSkill from "./delete-button";

function DisplaySubSkills({ subSkills, skillId }) {
  return (
    subSkills &&
    subSkills
      .filter((subSkill) => subSkill.skills_id === skillId)
      .map((subSkill) => (
        <div key={subSkill.id} className="sub-skills-content">
          <div className="ckeckbox">
            <input type="checkbox" checked={subSkill.validated}></input>
          </div>
          {subSkill.description}
          <DeleteSkill />
        </div>
      ))
  );
}

export default DisplaySubSkills;
