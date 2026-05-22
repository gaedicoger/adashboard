# 📋 Adashboard

Projet scolaire réalisé dans le cadre de la formation **Développeuse Fullstack** à l'école ADA.

Adashboard est une application web de suivi de compétences sous forme de **fiche personnage RPG**.  
Chaque élève peut visualiser ses compétences, suivre sa progression et gérer ses sous-compétences.

---

## 🛠️ Stack technique

### Frontend

- **React** (Vite)
- **CSS** custom avec variables (thème pixel art / RPG)
- Polices : `Press Start 2P` & `VT323` (Google Fonts)

### Backend

- **Node.js** avec **Express**
- **PostgreSQL** via `pg-pool`

---

## ⚙️ Installation

### Prérequis

- Node.js
- pnpm
- Docker (pour PostgreSQL)

### 1. Cloner le projet

```bash
git clone
cd adashboard
```

### 2. Lancer la base de données

```bash
docker compose up -d
```

### 3. Initialiser la base de données

```bash
psql -U ton_utilisateur -d adashboard -f db/migration-up.sql
psql -U ton_utilisateur -d adashboard -f db/seed.sql
```

### 4. Installer les dépendances

```bash
# Backend
cd backend
pnpm install

# Frontend
cd ../frontend
pnpm install
```

### 5. Configurer les variables d'environnement

Créer un fichier `.env` dans le dossier `backend` :

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=adashboard
DB_USER=ton_utilisateur
DB_PASSWORD=ton_mot_de_passe
```

### 6. Lancer l'application

```bash
# Backend (depuis le dossier backend)
pnpm run start

# Frontend (depuis le dossier frontend)
pnpm run dev
```

Le frontend est accessible sur `http://localhost:5173`
Le backend tourne sur `http://localhost:3000`

---

## 🎮 Fonctionnalités

### Compétences

- Affichage de toutes les compétences avec leur barre de progression
- La progression se calcule automatiquement selon les sous-compétences validées

### Sous-compétences

- ✅ **Valider** une sous-compétence via une checkbox
- ➕ **Ajouter** une sous-compétence via un formulaire modal
- 🗑️ **Supprimer** une sous-compétence

### Panneau personnage

- Avatar animé (pixel art)
- Système de **distribution de points de talents** (40 points à distribuer, max 10 par talent)
- Talents : 💻 Code, 🧠 Logique, 💪 Résilience, ☕ Caféine, 🐛 Debug, ✨ Créativité

---

## 🗂️ Structure du projet

```
adashboard/
├── backend/
│   └── src/
│       ├── routes/
│       │   ├── skills.js
│       │   └── sub_skills.js
│       └── db.js
├── db/
│   ├── migration-up.sql
│   ├── migration-down.sql
│   ├── queries.sql
│   └── seed.sql
└── frontend/
    └── src/
        ├── api/
        │   └── call-api.js
        ├── assets/
        ├── components/
        │   ├── skill.jsx
        │   ├── display-skills.jsx
        │   ├── sub-skill.jsx
        │   ├── display-sub-skills.jsx
        │   ├── add-button.jsx
        │   ├── add-skill-modal.jsx
        │   ├── delete-button.jsx
        │   ├── progress-bar.jsx
        │   ├── toggle-button.jsx
        │   ├── character-panel.jsx
        │   └── talent-score.jsx
        └── App.jsx
```

---

## 👩‍💻 Auteure

Projet réalisé par **Gaed** — Formation Développeuse Fullstack @ ADA
