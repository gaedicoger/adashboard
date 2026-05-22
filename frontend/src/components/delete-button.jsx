import { deleteSubSkill } from "../api/call-api";
import deleteIcon from "../assets/delete-icon.png";

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
