import Skill from "./skill";

function DisplaySkills({ skills, subSkills, setSubSkills, loadStart }) {
  return (
    skills &&
    skills.map((skill) => (
      <Skill
        key={skill.id}
        skill={skill}
        subSkills={subSkills}
        setSubSkills={setSubSkills}
        loadStart={loadStart}
      />
    ))
  );
}

export default DisplaySkills;
