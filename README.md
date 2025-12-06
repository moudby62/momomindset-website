# MomoMindset - Réveille ta force intérieure

Un site web professionnel et motivant pour la marque MomoMindset, incluant un espace membre avec forum/communauté interne, newsletter, et contenu motivationnel.

## 🎯 Caractéristiques

- **Accueil inspirant** avec appel à l'action
- **Page À propos** avec l'histoire authentique de Mohamoud
- **Motivations quotidiennes** pour inspirer les utilisateurs
- **Articles & Conseils** sur le mindset et la croissance personnelle
- **Communauté active** avec forum de discussion
- **Ressources gratuites** (guides, méditations, affirmations)
- **Formulaire de contact** moderne
- **Espace membre** avec authentification
- **Newsletter** pour rester en contact
- **Design moderne** avec noir, blanc et doré
- **Responsive mobile** et optimisé pour la vitesse

## 🛠️ Stack Technique

- **Frontend**: React 19 + TypeScript + Vite + TailwindCSS 4
- **Backend**: Express.js + Node.js
- **Base de données**: MySQL (via Drizzle ORM)
- **Authentification**: JWT + bcryptjs
- **Déploiement**: GitHub Pages / Vercel

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/your-username/momomindset.git
cd momomindset

# Installer les dépendances
pnpm install

# Créer un fichier .env
cp .env.example .env

# Configurer les variables d'environnement
# Éditer .env avec tes paramètres
```

## 🚀 Développement

```bash
# Démarrer le serveur de développement frontend
pnpm dev

# Dans un autre terminal, démarrer le serveur backend
pnpm dev:server

# Accéder à l'application
# Frontend: http://localhost:5173
# Backend API: http://localhost:3001
```

## 🗄️ Base de données

```bash
# Générer et migrer la base de données
pnpm db:push

# Ouvrir Drizzle Studio pour gérer les données
pnpm db:studio
```

## 📝 Structure du projet

```
momomindset/
├── src/
│   ├── client/
│   │   ├── components/    # Composants React réutilisables
│   │   ├── pages/         # Pages de l'application
│   │   ├── styles/        # Styles CSS/Tailwind
│   │   ├── App.tsx        # Composant principal
│   │   └── main.tsx       # Point d'entrée React
│   ├── server/
│   │   ├── routes/        # Routes API
│   │   ├── middleware/    # Middlewares Express
│   │   ├── db/            # Configuration base de données
│   │   ├── models/        # Modèles de données
│   │   └── server.ts      # Serveur Express
│   └── shared/
│       └── types.ts       # Types TypeScript partagés
├── public/                # Fichiers statiques
├── index.html             # HTML principal
├── package.json           # Dépendances
├── vite.config.ts         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind
└── .env                   # Variables d'environnement
```

## 🎨 Design

- **Couleurs**: Noir (#1a1a1a), Blanc (#f5f5f5), Doré (#D4AF37)
- **Police**: Inter (système par défaut)
- **Style**: Minimaliste, premium, motivationnel
- **Animations**: Légères et fluides

## 📧 Fonctionnalités clés

### Authentification
- Inscription et connexion
- Mot de passe sécurisé (bcryptjs)
- JWT pour les sessions

### Newsletter
- Formulaire d'abonnement
- Emails motivationnels hebdomadaires
- Gestion des abonnés

### Communauté
- Forum de discussion
- Création de discussions
- Réponses et commentaires
- Modération

### Contact
- Formulaire de contact
- Intégration WhatsApp
- Email de contact

## 🚀 Déploiement

### Sur GitHub Pages
```bash
pnpm build
# Pusher sur GitHub
git add .
git commit -m "Deploy MomoMindset"
git push origin main
```

### Sur Vercel
```bash
# Connecter le repo GitHub à Vercel
# Vercel déploiera automatiquement à chaque push
```

## 📞 Support

- **WhatsApp**: +224 666 78 99 16
- **Email**: Businessinstagram620@gmail.com

## 📄 Licence

Tous droits réservés © 2024 MomoMindset

## 👨‍💻 Auteur

Créé avec ❤️ par Mohamoud Condé
