-- Insérer les données dans les tables:

-- Insérer les données pour Skills :
INSERT INTO skills (name) VALUES
  ('JavaScript'),
  ('React'),
  ('SQL'),
  ('PostgreSQL'),
  ('Node.js'),
  ('Python'),
  ('HTML/CSS'),
  ('Docker'),
  ('PHP');

-- Insérer les données pour Sub_Skills :
INSERT INTO sub_skills (skills_id, description, validated) VALUES
  -- JavaScript
  (1, 'Je sais manipuler les bases du JS', false),
  (1, 'Je sais utiliser les tableaux et objets', false),
  (1, 'Je sais utiliser les fonctions fléchées', false),
  (1, 'Je sais utiliser async/await', false),
  (1, 'Je sais manipuler le DOM', false),

  -- React
  (2, 'Je sais créer des composants React réutilisables', false),
  (2, 'Je sais utiliser useState', true),
  (2, 'Je sais utiliser useEffect', false),
  (2, 'Je sais faire du prop drilling', true),
  (2, 'Je sais gérer les événements', true),

  -- SQL
  (3, 'Je sais écrire des requêtes SELECT', true),
  (3, 'Je sais utiliser WHERE et ORDER BY', false),
  (3, 'Je sais faire des JOIN', false),
  (3, 'Je sais utiliser INSERT, UPDATE, DELETE', true),
  (3, 'Je sais créer des tables', false),

  -- PostgreSQL
  (4, 'Je sais gérer une base de données PostgreSQL', false),
  (4, 'Je sais utiliser pgAdmin', true),
  (4, 'Je sais créer des migrations', false),
  (4, 'Je sais utiliser pg-pool', true),

  -- Node.js
  (5, 'Je sais développer une API avec Node.js', true),
  (5, 'Je sais utiliser Express', true),
  (5, 'Je sais créer des routes REST', true),
  (5, 'Je sais utiliser les middlewares', false),
  (5, 'Je sais gérer les variables d environnement', false),

  -- Python
  (6, 'Je sais manipuler les bases de Python', false),
  (6, 'Je sais utiliser les listes et dictionnaires', false),
  (6, 'Je sais écrire des fonctions en Python', false),

  -- HTML/CSS
  (7, 'Je sais structurer une page web en HTML', true),
  (7, 'Je sais utiliser Flexbox', true),
  (7, 'Je sais utiliser les variables CSS', true),
  (7, 'Je sais rendre une page responsive', false),
  (7, 'Je sais utiliser les animations CSS', false),

  -- Docker
  (8, 'Je sais créer et gérer des conteneurs Docker', false),
  (8, 'Je sais écrire un Dockerfile', false),
  (8, 'Je sais utiliser docker-compose', false),

  -- PHP
  (9, 'Je sais développer des pages web dynamiques en PHP', false),
  (9, 'Je sais utiliser les variables et fonctions PHP', false),
  (9, 'Je sais connecter PHP à une base de données', false);