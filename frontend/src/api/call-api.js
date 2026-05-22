// ==============================CALL API=======================================

//Variables courantes :

export const API_SKILLS = `http://localhost:3000/skills`;
export const API_SUB_SKILLS = `http://localhost:3000/sub_skills`;
// ==============================CALL API=======================================

/**
 * Récupère toutes les compétences depuis l'API
 * @returns {Promise<Array>} La liste des compétences
 */
export async function callSkills() {
  try {
    const response = await fetch(API_SKILLS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
  }
}

/**
 * Récupère toutes les sous-compétences depuis l'API
 * @returns {Promise<Array>} La liste des subskills
 */
export async function callSubSkills() {
  try {
    const response = await fetch(API_SUB_SKILLS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur:", error);
  }
}

/**
 * Met à jour la validation d'une subskill
 * @param {number} id - L'id de la subskill
 * @param {boolean} validated - Le nouvel état de validation
 * @returns {Promise<Object>} La subskill mise à jour
 */
export async function updateSubSkill(id, validated) {
  const response = await fetch(`http://localhost:3000/sub_skills/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ validated }),
  });
  return response.json();
}

/**
 * Ajoute une nouvelle subskill
 * @param {number} skillId - L'id de la compétence parente
 * @param {string} description - La description de la subskill
 * @param {boolean} validated - L'état de validation initial (false par défaut)
 * @returns {Promise<Object>} La subskill créée
 */
export async function addSubSkill(skillId, description, validated) {
  const response = await fetch(`http://localhost:3000/sub_skills/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ skills_id: skillId, description, validated }),
  });
  return response.json();
}

/**
 * Supprime une subskill
 * @param {number} id - L'id de la subskill à supprimer
 * @returns {Promise<Object>} La subskill supprimée
 */
export async function deleteSubSkill(id) {
  const response = await fetch(`http://localhost:3000/sub_skills/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
