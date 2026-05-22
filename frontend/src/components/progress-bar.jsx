// ============================== PROGRESS BAR ================================

//IMPORTS:
import "./css/progress-bar.css";

/**
 * Fonction afficher la barre de progression
 * @param {number} percentage - Pourcentage de subskills validées (0-100)
 * @returns {JSX.Element}
 */
function ProgressBar({ percentage }) {
  return <progress value={percentage} max="100" />;
}

export default ProgressBar;
