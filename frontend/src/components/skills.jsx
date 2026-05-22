import Skill from "./skill";

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
