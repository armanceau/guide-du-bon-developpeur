# Guide du bon développeur

Documentation interactive des bonnes pratiques de développement logiciel, créée avec Monkey-Doc.

## À propos

Ce guide rassemble les pratiques, principes et méthodologies essentielles pour produire du code de qualité, maintenable et évolutif. Il couvre :

- **Introduction** : Le cadre général du guide
- **Code Reviews** : Comment effectuer et recevoir des revues de code constructives
- **Tests** : Stratégies de tests unitaires, d'intégration et end-to-end
- **Git & Versionning** : Maîtriser Git et les bonnes pratiques de versioning
- **Architecture** : Patterns, principes et séparation des responsabilités
- **Clean Code** : Principes du code propre et lisible
- **Documentation** : Comment documenter efficacement son code
- **REST API** : Les principes HTTP et REST essentiels
- **Java & Spring** : Les fondamentaux Java/Spring pour l'entretien
- **System Design** : Les bases d'architecture distribuée
- **Paradigmes** : DDD, TDD et BDD
- **Software Craftsmanship** : Les repères et métaphores du craft

## Installation

```bash
npm install
```

## Démarrage

Pour lancer la documentation en mode développement :

```bash
npm run dev
```

## Build

Pour créer une version statique de la documentation :

```bash
npm run build
```

## Structure du projet

```
guide-du-bon-developpeur/
├── docs/
│   ├── fr/                        # Documentation en français (MDX)
│   │   ├── introduction.mdx
│   │   ├── git.mdx
│   │   ├── architecture.mdx
│   │   ├── clean-code.mdx
│   │   ├── code-reviews.mdx
│   │   ├── documentation.mdx
│   │   ├── tests.mdx
│   │   ├── ressources.mdx
│   │   ├── rest-api.mdx
│   │   ├── java-spring.mdx
│   │   ├── system-design.mdx
│   │   ├── paradigmes.mdx
│   │   └── software-craftsmanship.mdx
│   └── en/                        # English documentation (WIP)
├── monkey-doc.config.ts           # Configuration Monkey-Doc
└── package.json
```

## Technologies

- **Monkey-Doc** : Framework de documentation statique
- **MDX** : Markdown enrichi avec JSX

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commitez vos changements (`git commit -m 'feat: ajout section X'`)
4. Pushez vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## Licence

ISC

## Ressources

Ce guide s'inspire des meilleures pratiques de l'industrie et des ressources suivantes :

- Clean Code (Robert C. Martin)
- The Pragmatic Programmer
- Google Engineering Practices
- Airbnb Style Guides

---

_Dernière mise à jour : Juin 2026_
