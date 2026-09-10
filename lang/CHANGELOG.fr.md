# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et ce projet respecte le [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

## [v0.0.1] - 2026-09-10

La première version officielle de revrain.

### Added

- **Framework du thème** : un thème Hugo sombre complet avec des modèles pour l'accueil, la page À propos, la page Parcourir, la page 404 ainsi que les articles/sections
- **Pluie digitale** : animation Canvas façon Matrix ; jeu de caractères, taille de police, probabilité blanc lune et probabilité de réinitialisation entièrement configurables. Respecte le réglage système « réduire les animations » (dessine une seule image statique) et saute des images automatiquement sur les appareils modestes
- **Glassmorphism** : cartes en verre dépoli grâce au flou backdrop-filter
- **Multilingue** : 11 langues intégrées (zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar), chinois simplifié par défaut ; sélecteur de langue utilisable au clavier (flèches, Home/End, Échap)
- **SEO** : description / robots / canonical / liens alternatifs hreflang, pagination rel=prev/next, Open Graph, Twitter Card, données structurées JSON-LD (WebSite / Article), schéma de fil d'Ariane, chaîne de recherche og:image avec découverte automatique des images de couverture
- **Accessibilité (WCAG 2.2 AA)** : lien d'évitement vers le contenu principal, points de repère et étiquettes ARIA, navigation clavier, focus visible, prise en charge de prefers-reduced-motion, mise en page RTL en miroir pour l'arabe
- **Responsive** : mobile-first avec 4 points de rupture (480 / 768 / 1024 / 1280px)
- **Formules mathématiques** : rendu serveur au moment de la compilation via le KaTeX intégré de Hugo (`transform.ToMath`) ; aucun JS côté client
- **Coloration syntaxique** : intégrée via Hugo
- **RSS** : flux pour l'accueil et les sections, avec informations multi-auteurs et entrée d'abonnement intelligente
- **Taxonomies** : nuages de tags/catégories avec pagination serveur
- **Table des matières** : TOC dans la barre latérale avec surbrillance au défilement et éléments imbriqués repliables
- **Navigation** : fil d'Ariane, boutons précédent/suivant, bouton retour
- **favicon** : jeu d'icônes standard multi-formats (SVG / 16 / 32 / apple-touch) avec chaîne de repli à trois niveaux
- **Pile de polices** : polices open source couvrant toutes les langues prises en charge par le thème (latin, CJK, arabe, cyrillique)
- **Déploiement** : build automatique GitHub Actions et déploiement sur GitHub Pages
- **Site d'exemple** : pages accueil, à propos, parcourir et sections en 11 langues, plus 5 articles de tutoriel multilingues
- **Prérequis minimum** : Hugo >= 0.163.0 (toute édition), Dart Sass

[Non publié]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
