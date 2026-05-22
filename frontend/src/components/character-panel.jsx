import gaedImg from "../assets/gaed.gif";

import "./character-panel.css";

function CharacterPanel() {
  return (
    <div className="character-panel">
      <div className="avatar">
        <img src={gaedImg}></img>
      </div>
      <div className="stats">
        <ul>
          <li>💻 Code : 42</li>
          <li>🧠 Logique : 78</li>
          <li>💪 Résilience : 95</li>
          <li>☕ Caféine : 100</li>
          <li>🐛 Debug : 33</li>
          <li>✨ Créativité : 88</li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterPanel;
