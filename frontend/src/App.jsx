import { useState, useEffect } from "react";
import { callSkills, callSubSkills } from "./api/call-api";
import DisplaySkills from "./components/skills.jsx";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([]);
  const [subSkills, setSubSkills] = useState([]);

  async function loadStart() {
    const skillsList = await callSkills();
    const subSkillsList = await callSubSkills();
    setSkills(skillsList);
    setSubSkills(subSkillsList);
  }

  useEffect(() => {
    loadStart();
  }, []);

  return (
    <>
      <DisplaySkills skills={skills} subSkills={subSkills} />
    </>
  );
}

export default App;
