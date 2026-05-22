import { useState, useEffect } from "react";
import { callSkills, callSubSkills } from "./api/call-api";
import DisplaySkills from "./components/skills.jsx";
import CharacterPanel from "./components/character-panel.jsx";
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
      <div className="app-layout">
        <CharacterPanel />
        <DisplaySkills
          skills={skills}
          subSkills={subSkills}
          setSubSkills={setSubSkills} //prop drilling pour mettre à jour le tableau en local
          loadStart={loadStart} //prop drilling pour refetch a chaque ajout de subskills
        />
      </div>
    </>
  );
}

export default App;
