// ==============================CALL API=======================================

//Variables courantes :

export const API_SKILLS = `http://localhost:3000/skills`;
export const API_SUB_SKILLS = `http://localhost:3000/sub_skills`;
// ==============================CALL API=======================================

/**
 * Appel de l'API Patrimoine arboré de Nantes métropole
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

export async function callSubSkills() {
  try {
    const response = await fetch(API_SUB_SKILLS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur:", error);
  }
}
