//===========================DELETE BUTTON======================================

//IMPORTS:
import { deleteSubSkill } from "../api/call-api";
import deleteIcon from "../assets/delete-icon.png";

/**
 * Fonction supprimer une subskill
 * @param {number} subSkillId - L'id de la sous-compétence à supprimer
 * @param {Function} loadStart - ! REFETCH — recharge les données depuis App.jsx
 * @returns {JSX.Element}
 */
function DeleteSkill({ subSkillId, loadStart }) {
  return (
    <div
      className="icon-btn delete-btn"
      onClick={async () => {
        await deleteSubSkill(subSkillId);
        loadStart();
      }}
    >
      <img src={deleteIcon}></img>
    </div>
  );
}

export default DeleteSkill;
