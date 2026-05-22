//============================TALENT SCORE======================================

//IMPORTS:
import { useState } from "react";
import "./css/talent-score.css";

/**
 * Composant Talent Score : Gère la distribution de points sur les talents
 * @returns {JSX.Element}
 */
function TalentScore() {
  // nos variables qui peuvent changer
  const [totalScore, setTotalScore] = useState(40); // points total / restants à distribuer
  const [stats, setStats] = useState({
    //Objet des talents avec les scores de base pour chaque stats
    code: 0,
    logique: 0,
    resilience: 0,
    cafeine: 0,
    debug: 0,
    creativite: 0,
  });

  const statLabels = {
    //Labels des talents
    code: "💻 Code",
    logique: "🧠 Logique",
    resilience: "💪 Résilience",
    cafeine: "☕ Caféine",
    debug: "🐛 Debug",
    creativite: "✨ Créativité",
  };

  /**
   * Fonction +1 point
   * @param {string} statScore - Clé de la stat à augmenter
   */
  function handleAdd(statScore) {
    if (stats[statScore] < 10 && totalScore > 0) {
      //on selectionne la stat et si le score correspondant est inférieur à 10 et que total score est supérieur à 0 alors on peut attribuer un point
      setStats({ ...stats, [statScore]: stats[statScore] + 1 }); // +1 sur la stat : On appelle tout l'objet
      setTotalScore(totalScore - 1); // -1 sur le budget
    }
  }

  /**
   * Fonction -1 point
   * @param {string} statScore - Clé de la stat à réduire
   */
  function handleRemove(statScore) {
    if (stats[statScore] > 0) {
      //On selectionne la stat et si elle est supérieur à 0 on peut retirer un point.
      setStats({ ...stats, [statScore]: stats[statScore] - 1 }); // -1 sur la stat : On appelle tout l'objet
      setTotalScore(totalScore + 1); // +1 sur le budget récupéré
    }
  }

  return (
    <div className="talent-score">
      <p className="points-restants">Points restants : {totalScore}</p>
      <ul>
        {Object.entries(stats).map(
          (
            [statScore, value], //permet de retourner l'objet complet et de maper dessus pour chaque stat score je récupère la valeur
          ) => (
            <li key={statScore}>
              {/*Affiche le nom de la stat et le score correspondant */}
              {statLabels[statScore]}
              <button onClick={() => handleRemove(statScore)}>-</button>
              {/*Valeur actuelle*/}
              {value}
              <button onClick={() => handleAdd(statScore)}>+</button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default TalentScore;
