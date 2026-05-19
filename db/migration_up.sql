-- Créer la table principale pour les ressources pédagogiques:
CREATE TABLE IF NOT EXISTS public.skills
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    name text,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.skills
    OWNER to admin;

-- Créer la table principale pour les ressources pédagogiques:
CREATE TABLE IF NOT EXISTS public.sub_skills
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    skills_id integer,
    description text,
    validated boolean,
    PRIMARY KEY (id),
    CONSTRAINT fk_skills FOREIGN KEY (skills_id) --contrainte pour la clé étrangère
        REFERENCES public.skills (id) MATCH SIMPLE -- références à la table correspondante
        ON DELETE CASCADE
);

ALTER TABLE IF EXISTS public.sub_skills
    OWNER to admin;
