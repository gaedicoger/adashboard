import DisplaySubSkills from "./sub-skills";
import AddSkill from "./add-button";
import DeleteSkill from "./delete-button";

function DisplaySkills({ skills, subSkills }) {
  return (
    skills && //conditionnel render
    skills.map((skill) => (
      <div key={skill.id} className="skill-content">
        <div className="skill-title">{skill.name}</div>
        <DisplaySubSkills subSkills={subSkills} skillId={skill.id} />
        <AddSkill></AddSkill>
        <DeleteSkill></DeleteSkill>
      </div>
    ))
  );
}

export default DisplaySkills;
