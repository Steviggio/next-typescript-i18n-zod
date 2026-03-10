# Next.js 16 Portfolio Template

Un template de portfolio moderne, léger et multilingue construit avec Next.js 16, Tailwind CSS, et Zod. Conçu pour être facilement déployable et hautement personnalisable.

## ✨ Fonctionnalités

- **Internationalisation (i18n)** : Support multilingue "out-of-the-box" (Français, Anglais, Espagnol, Portugais inclus). Détection automatique de la langue via middleware.
- **Validation de données strictes** : Utilisation de [Zod](https://zod.dev/) pour s'assurer que les données de votre portfolio (projets, expériences) sont conformes au schéma attendu.
- **Thème Sombre / Clair** : Support intégré pour le basculement entre les thèmes grâce à `next-themes` et TailwindCSS.
- **Hautement personnalisable** : Tous les textes de présentation et contenus sont extraits dans des fichiers de données centraux.
- **Open Graph & SEO Ready** : Génération de métadonnées dynamiques en fonction de la langue sélectionnée.
- **CI/CD Ready** : Intègre des pre-commits Git Hooks (via config optionnelle), un linting strict ESLint et TypeScript préconfigurés pour faciliter l'intégration continue et les déploiements (ex: Vercel, Netlify, VPS, etc).

## 🚀 Installation & Démarrage

1. Clonez ce dépôt ou utilisez-le comme template :
```bash
git clone https://github.com/VOTRE_NOM/next-portfolio.git
cd next-portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat en direct.

## 🛠 Comment personnaliser ce template ?

L'application est divisée en deux couches de données principales : **les données de base du profil** et **les traductions de l'interface**.

### 1. Modifier vos informations personnelles (Projets & Expériences)

Toutes vos données principales (vos projets, vos liens sociaux, vos expériences professionnelles) se trouvent dans le fichier `src/features/portfolio/data/portfolio.repository.ts`.

C'est ici que vous définissez la base de votre portfolio.
- **Projets (`projects`)** : Ajoutez l'identifiant unique (`id`), le titre, les technologies utilisées et si c'est un _Side Project_ ou non.
- **Profil (`profile`)** : Modifiez votre nom, rôle, liens sociaux (GitHub, LinkedIn) et le chemin vers votre CV.

_Note : Zod est là pour vérifier que vous n'oubliez aucun champ requis ! Si la page affiche une erreur après vos modifications, vérifiez le schéma défini dans `src/features/portfolio/types/portfolio.schema.ts`._

### 2. Gérer les langues (i18n) et les traductions

Ce template utilise une approche par "Dictionnaires" (`src/features/dictionaries/`). Au lieu de coder en dur les textes dans les composants React, tout est stocké dans des fichiers JSON par langue (ex: `fr.json`, `en.json`).

*   **Pour modifier la traduction de la description d'un de vos projets** :
    Allez dans `src/features/dictionaries/fr.json` (et les autres langues), trouvez la clé `projects.informations.[VOTRE_PROJET_ID]` et modifiez la traduction. Le `portfolio.repository.ts` s'occupera de fusionner automatiquement ces traductions avec vos données de base.

*   **Ajouter ou Retirer une langue** :
    1. Modifiez le tableau `locales` dans le fichier `i18n-config.ts` à la racine.
    2. Modifiez le middleware de redirection dans `src/proxy.ts` si nécessaire.
    3. Ajoutez (ou supprimez) le fichier `.json` correspondant dans `src/features/dictionaries/`.
    4. Mettez à jour la fonction `getDictionnary` dans `src/app/[lang]/dictionnaries.ts` pour y inclure dynamiquement la nouvelle langue.

### 3. Modifier le style et les polices

Le style général est géré par Tailwind CSS.
- **Polices** : La police par défaut est _Inter_. Vous pouvez la modifier dans le `layout.tsx` principal (`src/app/[lang]/layout.tsx`).
- **Couleurs** : La charte graphique (couleurs `sage`, `cream`, etc.) est définie directement dans le fichier `tailwind.config.ts`. Modifiez son contenu pour adapter les couleurs globales du template à votre identité visuelle.


### ⚡ Score Lighthouse
![Performance](https://img.shields.io/badge/Performance-95-brightgreen?style=for-the-badge&logo=Lighthouse)
![Accessibility](https://img.shields.io/badge/Accessibility-94-brightgreen?style=for-the-badge&logo=Lighthouse)
![Best_Practices](https://img.shields.io/badge/Best_Practices-96-brightgreen?style=for-the-badge&logo=Lighthouse)
![SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=for-the-badge&logo=Lighthouse)



## 📝 License

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.
