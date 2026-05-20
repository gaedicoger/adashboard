function DisplaySubSkills({ subSkills, skillId }) {
  return (
    subSkills &&
    subSkills
      .filter((subSkill) => subSkill.skills_id === skillId)
      .map((subSkill) => (
        <div key={subSkill.id} className="sub-skills-content">
          {subSkill.description}
        </div>
      ))
  );
}

export default DisplaySubSkills;
