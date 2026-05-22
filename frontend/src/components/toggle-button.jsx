//==========================TOGGLE BUTTON=======================================

//IMPORTS:
import toggleIconDown from "../assets/double-down-icon.png";
import toggleIconUp from "../assets/double-up-icon.png";

import "./css/toggle-button.css";

/**
 * Composant bouton Toogle Afficher/ cacher la liste des subskills
 * @param {boolean} isOpen - État d'ouverture du panneau
 * @param {Function} onToggle - Fonction pour basculer l'état
 * @returns {JSX.Element}
 */
function ToggleButton({ isOpen, onToggle }) {
  return (
    <div className="toggle-skills">
      {/* Ternaire : si ouvert affiche image 1 sinon image 2 */}
      <img
        src={isOpen ? toggleIconUp : toggleIconDown}
        onClick={onToggle}
      />{" "}
    </div>
  );
}

export default ToggleButton;
