import "./add-skill-modal.css";

function AddSkillModal() {
  return (
    <div className="modal">
      <input type="text" name="description" placeholder="Je sais..." />
      <button>Validé</button>
    </div>
  );
}

export default AddSkillModal;
