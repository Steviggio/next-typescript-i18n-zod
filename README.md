# Next.js 16 Portfolio Template

Un template de portfolio moderne, léger et multilingue construit avec Next.js 16, Tailwind CSS, et Zod. Conçu pour être facilement déployable et hautement personnalisable.

### ⚡ Score Lighthouse
![Performance](https://img.shields.io/badge/Performance-97-brightgreen?style=for-the-badge&logo=Lighthouse)
![Accessibility](https://img.shields.io/badge/Accessibility-96-brightgreen?style=for-the-badge&logo=Lighthouse)
![Best_Practices](https://img.shields.io/badge/Best_Practices-100-brightgreen?style=for-the-badge&logo=Lighthouse)
![SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=for-the-badge&logo=Lighthouse)

---

## ✨ Fonctionnalités Principales

<ul>
  <li><b>Internationalisation (i18n)</b> : Support multilingue "out-of-the-box" (Français, Anglais, Espagnol, Portugais inclus). Détection automatique de la langue via middleware.</li>
  <li><b>Validation de données strictes</b> : Utilisation de <a href="https://zod.dev/">Zod</a> pour s'assurer que les données de votre portfolio (projets, expériences) sont conformes au schéma attendu.</li>
  <li><b>Thème Sombre / Clair</b> : Support intégré pour le basculement entre les thèmes grâce à <code>next-themes</code> et TailwindCSS.</li>
  <li><b>Hautement personnalisable</b> : Tous les textes de présentation et contenus sont extraits dans des fichiers de données centraux.</li>
  <li><b>Open Graph & SEO Ready</b> : Génération de métadonnées dynamiques en fonction de la langue sélectionnée.</li>
  <li><b>CI/CD Ready</b> : Intègre des pre-commits Git Hooks (via config optionnelle), un linting strict ESLint et TypeScript préconfigurés pour faciliter l'intégration continue et les déploiements (ex: Vercel, Netlify, VPS, etc).</li>
</ul>

## 📂 Structure du projet

Aperçu de l'architecture pour vous repérer rapidement :

```text
├── public/                 # Assets statiques (images, placeholders)
├── src/
│   ├── app/                # App Router Next.js
│   │   └── [lang]/         # Routes dynamiques d'internationalisation
│   ├── features/           # Modules par fonctionnalité
│   │   ├── dictionaries/   # Fichiers de traduction JSON (fr.json, en.json...)
│   │   └── portfolio/      # Logique, types et données du portfolio
│   │       ├── data/       # Infos personnelles (portfolio.repository.ts)
│   │       └── types/      # Schémas de validation Zod
│   ├── proxy.ts            # Middleware Next.js pour i18n
│   └── i18n-config.ts      # Configuration des langues supportées
├── tailwind.config.ts      # Thème UI et charte graphique
└── next.config.ts          # Configurations build et sécurité
```

## 🚀 Installation & Démarrage

<ul>
  <li><b>1. Clonez ce dépôt</b> : <code>git clone https://github.com/VOTRE_NOM/next-portfolio-template.git</code></li>
  <li><b>2. Accédez au dossier</b> : <code>cd next-portfolio-template</code></li>
  <li><b>3. Installez les dépendances</b> : <code>npm install</code></li>
  <li><b>4. Lancez le serveur local</b> : <code>npm run dev</code></li>
  <li><b>5. Visualisez</b> : Ouvrez <a href="http://localhost:3000">http://localhost:3000</a> dans votre navigateur.</li>
</ul>

## 🛠 Comment personnaliser ce template ?

L'application est divisée en deux couches de données principales : les données de base du profil et les traductions de l'interface.

### 1. Modifier vos informations personnelles (Projets & Expériences)
Toutes vos données principales se trouvent dans le fichier <code>src/features/portfolio/data/portfolio.repository.ts</code>. Vous y définissez la base :
<ul>
  <li><b>Projets (<code>projects</code>)</b> : Ajoutez l'identifiant unique (<code>id</code>), le titre, les technologies utilisées et si c'est un Side Project ou non.</li>
  <li><b>Profil (<code>profile</code>)</b> : Modifiez votre nom, rôle, liens sociaux (GitHub, LinkedIn) et profil.</li>
</ul>
<i>Note : Zod est là pour vérifier que vous n'oubliez aucun champ requis (voir <code>src/features/portfolio/types/portfolio.schema.ts</code>).</i>

### 2. Gérer les langues (i18n) et les traductions
Les textes de l'interface et les traductions spécifiques de projets sont gérés via des "Dictionnaires" (ex: <code>fr.json</code>) dans <code>src/features/dictionaries/</code>.
<ul>
  <li><b>Pour modifier un texte ou une description</b> : Allez dans le fichier JSON ciblé, cherchez la clé (ex: <code>projects.informations.[ID]</code>) et adaptez-la.</li>
  <li><b>Pour ajouter une langue</b> : 
    <ul>
      <li>Déclarez-la dans <code>i18n-config.ts</code></li>
      <li>Ajustez le <code>proxy.ts</code> si nécessaire</li>
      <li>Créez un nouveau fichier JSON dans <code>dictionaries/</code></li>
      <li>Importez-le dans <code>src/app/[lang]/dictionnaries.ts</code></li>
    </ul>
  </li>
</ul>

### 3. Modifier le style et les polices
<ul>
  <li><b>Polices</b> : La police principale est intégrée dans le fichier racine <code>src/app/[lang]/layout.tsx</code>.</li>
  <li><b>Couleurs</b> : Modifiez <code>tailwind.config.ts</code> pour adapter la charte graphique (les variables de couleurs comme <code>sage</code> ou <code>cream</code>).</li>
</ul>

## 📝 License

Distribué sous la licence MIT. Voir le fichier <code>LICENSE</code> pour plus d'informations.
