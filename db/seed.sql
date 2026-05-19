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

--Insérer les données pour Resources :
INSERT INTO sub_skills (skills_id, description, validated ) VALUES
  (1,'Je sais manipuler les base du JS',false),
  (2,'je sais créer des composants React réutilisables',false),
  (3,'je sais écrire des requêtes SQL simples',false),
  (4,'je sais gérer une base de données PostgreSQL',false),
  (5,'je sais développer une API avec Node.js',true),
  (6,'je sais manipuler les bases de Python',false),
  (7,'je sais structurer une page web en HTML et CSS',false),
  (8,'je sais créer et gérer des conteneurs Docker',false),
  (9,'je sais développer des pages web dynamiques en PHP',false);
