//=======================CHARACTER PANEL========================================

//IMPORTS:
import gaedImg from "../assets/gaed.gif";
import TalentScore from "./talent-score.jsx";
import "./css/character-panel.css";

/**
 * Afficher la colonne personnage avec image et talents
 * @returns {JSX.Element}
 */
function CharacterPanel() {
  return (
    <div className="character-panel">
      <div className="avatar">
        <img src={gaedImg}></img>
      </div>
      <div className="stats">
        <TalentScore />
      </div>
    </div>
  );
}

export default CharacterPanel;
