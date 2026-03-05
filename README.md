# 📘 Guide du bon développeur

Documentation interactive des bonnes pratiques de développement logiciel, créée avec Storybook.

## 🎯 À propos

Ce guide rassemble les pratiques, principes et méthodologies essentielles pour produire du code de qualité, maintenable et évolutif. Il couvre :

- 🔍 **Code Reviews** : Comment effectuer et recevoir des revues de code constructives
- 🧪 **Tests** : Stratégies de tests unitaires, d'intégration et end-to-end
- ✨ **Clean Code** : Principes du code propre et lisible
- 🏗️ **Architecture** : Patterns et principes architecturaux
- 🌿 **Git & Versionning** : Maîtriser Git et les bonnes pratiques de versioning
- 📖 **Documentation** : Comment documenter efficacement son code

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
│       ├── Introduction.mdx
│       ├── CodeReviews.mdx
│       ├── Tests.mdx
│       ├── CleanCode.mdx
│       ├── Architecture.mdx
│       ├── Git.mdx
│       └── Documentation.mdx
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
