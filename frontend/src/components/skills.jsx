import Skill from "./skill";

function DisplaySkills({ skills, subSkills }) {
  return (
    skills &&
    skills.map((skill) => (
      <Skill key={skill.id} skill={skill} subSkills={subSkills} />
    ))
  );
}

export default DisplaySkills;
