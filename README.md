# 📘 Guide du bon développeur

Documentation interactive des bonnes pratiques de développement logiciel, créée avec Storybook.

## 🎯 À propos

Ce guide rassemble les pratiques, principes et méthodologies essentielles pour produire du code de qualité, maintenable et évolutif. Il couvre :

- 🌱 **Introduction** : Le cadre général du guide
- 🔍 **Code Reviews** : Comment effectuer et recevoir des revues de code constructives
- 🧪 **Tests** : Stratégies de tests unitaires, d'intégration et end-to-end
- 🌿 **Git & Versionning** : Maîtriser Git et les bonnes pratiques de versioning
- 🏗️ **Architecture** : Patterns, principes et séparation des responsabilités
- ✨ **Clean Code** : Principes du code propre et lisible
- 📖 **Documentation** : Comment documenter efficacement son code
- 🔌 **REST API** : Les principes HTTP et REST essentiels
- ☕ **Java & Spring** : Les fondamentaux Java/Spring pour l'entretien
- 📐 **System Design** : Les bases d'architecture distribuée
- 🧠 **Paradigmes** : DDD, TDD et BDD
- 🛠️ **Software Craftsmanship** : Les repères et métaphores du craft

## 📦 Installation

```bash
npm install
```

## 🚀 Démarrage

Pour lancer la documentation en mode développement :

```bash
npm run storybook
```

La documentation sera accessible sur [http://localhost:6006](http://localhost:6006)

## 🏗️ Build

Pour créer une version statique de la documentation :

```bash
npm run build-storybook
```

Les fichiers seront générés dans le dossier `storybook-static/` et peuvent être déployés sur n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages, etc.).

## 📁 Structure du projet

```
guide-du-bon-developpeur/
├── src/
│   └── docs/             # Documentation en MDX
│       ├── 01-introduction.mdx
│       ├── 02-git.mdx
│       ├── 03-architecture.mdx
│       ├── 04-cleancode.mdx
│       ├── 05-codereviews.mdx
│       ├── 06-documentation.mdx
│       ├── 07-tests.mdx
│       ├── 08-ressources-codereview.mdx
│       ├── 09-rest-api.mdx
│       ├── 10-java-spring.mdx
│       ├── 11-system-design.mdx
│       ├── 12-paradigmes.mdx
│       └── 13-software-craftsmanship.mdx
├── .storybook/          # Configuration Storybook
└── package.json
```

## 🛠️ Technologies

- **Storybook** : Framework de documentation interactive
- **MDX** : Markdown enrichi avec JSX
- **Vite** : Build tool rapide

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commitez vos changements (`git commit -m 'feat: ajout section X'`)
4. Pushez vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📄 Licence

MIT

## 📚 Ressources

Ce guide s'inspire des meilleures pratiques de l'industrie et des ressources suivantes :

- Clean Code (Robert C. Martin)
- The Pragmatic Programmer
- Google Engineering Practices
- Airbnb Style Guides

---

_Dernière mise à jour : Mars 2026_
