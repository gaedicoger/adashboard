// ============================== APP ===========================================

// IMPORTS:
import { useState, useEffect } from "react";
import { callSkills, callSubSkills } from "./api/call-api";
import DisplaySkills from "./components/display-skills.jsx";
import CharacterPanel from "./components/character-panel.jsx";
import "./App.css";

/**
 * Composant Racine : Gère le fetch initial des données et le state global
 * @returns {JSX.Element}
 */
function App() {
  const [skills, setSkills] = useState([]);
  const [subSkills, setSubSkills] = useState([]);

  /**
   * Fetche les compétences et sous-compétences depuis l'API
   * ! REFETCH — appelée après chaque ajout ou suppression de subskills
   */
  async function loadStart() {
    const skillsList = await callSkills();
    const subSkillsList = await callSubSkills();
    setSkills(skillsList);
    setSubSkills(subSkillsList);
  }

  // Chargement initial des données
  useEffect(() => {
    loadStart();
  }, []);

  return (
    <>
      <div className="app-container">
        {" "}
        <h1 className="app-title">Gaéd</h1>
        <div className="app-layout">
          <CharacterPanel />
          {/* ! PROP DRILLING — setSubSkills et loadStart descendent vers les sous-composants */}
          <DisplaySkills
            skills={skills}
            subSkills={subSkills}
            setSubSkills={setSubSkills} //prop drilling pour mettre à jour le tableau en local
            loadStart={loadStart} //PROP DRILLING & REFETCH pour refetch a chaque ajout de subskills
          />
        </div>
      </div>
    </>
  );
}

export default App;
