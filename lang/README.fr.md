# revrain

Un thème Hugo par [Code Revolution](https://github.com/code-revolution-org), conçu pour les geeks et les développeurs. Design sombre avec pluie digitale et effet verre dépoli (glassmorphism).

[简体中文](../README.md) | [English](README.en-US.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [Русский](README.ru.md) | [العربية](README.ar.md)

## Fonctionnalités

- **Pluie digitale** — Animation Canvas façon Matrix ; jeu de caractères, taille de police, probabilité blanc lune et probabilité de réinitialisation entièrement configurables. Respecte le réglage système « réduire les animations » (dessine une seule image statique) et saute des images automatiquement sur les appareils modestes
- **Glassmorphism** — Cartes en verre dépoli avec flou backdrop-filter
- **Multilingue** — 11 langues intégrées, avec un sélecteur de langue accessible au clavier (flèches, Home/End, Échap)
- **SEO** — description / robots / canonical / liens alternés hreflang, rel=prev/next de pagination, Open Graph, Twitter Card, données structurées JSON-LD (WebSite / Article), schéma de fil d'Ariane
- **Responsive** — Mobile-first avec 4 points de rupture (480 / 768 / 1024 / 1280px)
- **Coloration syntaxique** — Intégrée via Hugo
- **Support mathématique** — Rendu côté serveur par le KaTeX intégré de Hugo (`transform.ToMath`) au moment du build ; aucun JS côté client
- **Thème sombre** — Palette optimisée pour les développeurs (5 couleurs d'imagerie)
- **Accessibilité** — Aligné sur WCAG 2.2 AA : lien d'évitement vers le contenu principal, landmarks et labels ARIA, navigation clavier, focus visible, prise en charge de prefers-reduced-motion, layout RTL (arabe)
- **RSS** — Flux pour la page d'accueil et les sections
- **Table des matières** — TOC latérale avec surbrillance au défilement et éléments imbriqués repliables
- **Pagination côté serveur** — Pour les sections, les taxonomies et le nuage de tags

## Démarrage rapide

Activez le thème dans la configuration de votre site :

```toml
theme = "revrain"
```

## Configuration

### Paramètres globaux

```toml
[params]
  logo = "/logo.png"          # Logo de la barre de navigation (optionnel)
  description = "..."         # Description du site pour le SEO
  images = ["/og-image.png"]  # Image de partage social par défaut

[params.social]
  twitter = "username"        # Compte Twitter pour twitter:site

[params.favicons]             # Icônes d'onglet du navigateur (toutes optionnelles)
  svg = "/favicon.svg"                # Icône vectorielle SVG
  icon_32 = "/favicon-32x32.png"      # 32x32 PNG
  icon_16 = "/favicon-16x16.png"      # 16x16 PNG
  apple_touch = "/apple-touch-icon.png"  # Icône écran d'accueil iOS
```

**Chaîne de recherche favicon :** chaque entrée est résolue comme *chemin configuré → nom de fichier conventionnel dans `static/` → omis*. Si rien n'est configuré ou présent, une URI `data:` vide est émise pour supprimer la requête par défaut du navigateur vers `/favicon.ico` (pas de 404). Les chemins peuvent être des URL externes ou des chemins relatifs au site.

### Pied de page

```toml
[params.footer]
  github = "https://github.com/username"          # Lien GitHub (optionnel)
  copyright = "Mon blog · Tous droits réservés"   # Copyright (optionnel, masqué s'il n'est pas défini)

  [[params.footer.links]]                         # Groupe de liens (optionnel)
    name = "Nom du lien"
    identifier = "friendly_links"                 # Optionnel : clé i18n, la traduction gagne si présente
    url = "https://example.com"
```

**Comportement du copyright :**
- Non configuré → non affiché
- Configuré → rendu comme `© <année courante> <valeur>` (année mise à jour automatiquement)
- Sites multilingues : configurable séparément par langue (voir « Multilingue »)

### Pluie digitale

```toml
[params.digital_rain]
  enable = true
  chars = "アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  font_size = 14       # 10–32 px
  moon_chance = 0.02   # Probabilité d'un caractère blanc lune (0–1)
  reset_chance = 0.025 # Probabilité de réinitialisation d'une goutte (0–1)
```

### Mathématiques

Les formules sont rendues au moment du build par le moteur KaTeX intégré de Hugo (`transform.ToMath`) en HTML + MathML — aucun JavaScript côté client requis. Activez l'extension Goldmark passthrough dans votre configuration :

```toml
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

Utilisez ces délimiteurs dans votre contenu :

- En ligne : `\(...\)`
- Bloc : `$$...$$` ou `\[...\]`

**Note CDN :** La feuille de style KaTeX (`katex.min.css` v0.17.0, requise pour la sortie `htmlAndMathml`) est chargée depuis le CDN jsDelivr avec vérification d'intégrité des sous-ressources (SRI). KaTeX est sous [licence MIT](https://github.com/KaTeX/KaTeX/blob/main/LICENSE). Elle n'est chargée que sur les pages contenant des mathématiques.

### Multilingue

Le projet prend en charge 11 langues, avec le chinois simplifié comme langue par défaut. Chaque langue peut définir `label` (nom d'affichage), `locale` (RFC 5646), `title` (titre du site), `weight` (ordre de tri, croissant) et des paramètres spécifiques à la langue :

```toml
defaultContentLanguage = 'zh-CN'

[languages]
  [languages.zh-CN]
    label = "简体中文"
    locale = 'zh-CN'
    title = '我的站点'
    weight = 10
    [languages.zh-CN.params.footer]
      copyright = "我的博客 · 版权所有"

  [languages.en-US]
    label = "English"
    locale = 'en-US'
    title = 'My Site'
    weight = 20
    [languages.en-US.params.footer]
      copyright = "My Blog · All Rights Reserved"

  [languages.ar]
    label = "العربية"
    locale = 'ar'
    direction = 'rtl'   # Layout droite-à-gauche pour l'arabe
    title = 'موقعي'
    weight = 30
```

Le contenu est attribué aux langues par le suffixe du nom de fichier ; le suffixe doit être en minuscules (par ex. `about.en-us.md`, `about.zh-cn.md`). Les fichiers sans suffixe appartiennent à la langue par défaut.

### Menus

```toml
[[menus.main]]
  name = "Accueil"
  identifier = "menu_home"  # Clé i18n (optionnelle) ; la traduction gagne si présente
  pageRef = "/"
  weight = 10
```

## Contenu

### Page d'accueil

La page d'accueil utilise `_index.md` et prend en charge le front matter suivant :

```markdown
+++
title = "Mon site"              # Titre de la page
subtitle = "Bienvenue sur mon site"  # Sous-titre affiché sous le titre
logo = "/logo.png"             # Logo de la page d'accueil (optionnel)
logo_alt = "Logo du site"      # Texte alternatif du logo (accessibilité)

[primary_button]               # Bouton principal
  url = "/browse"
  text = "Commencer"

[secondary_button]             # Bouton secondaire
  url = "/about"
  text = "À propos"
+++

Corps de la page d'accueil, rendu dans une carte en verre sous les boutons.
```

### Page À propos

Une page autonome utilisant `layout = "about"` :

```markdown
+++
title = "À propos"              # Titre de la page
layout = "about"               # Utiliser la mise en page à propos
subtitle = "Changer le monde avec du code"  # Sous-titre
avatar = "/avatar.png"         # Image d'avatar (optionnelle)
description = "Description du site pour le SEO"  # Description SEO

links = [                      # Liens sociaux/externes (optionnels)
  { name = "GitHub", url = "https://github.com/username" },
  { name = "Twitter", url = "https://twitter.com/username" }
]
+++

Corps de la page À propos.
```

### Articles

Les articles ordinaires (dans un répertoire de section) prennent en charge le front matter suivant :

```markdown
+++
title = "Mon article"           # Titre de l'article
date = 2025-01-15              # Date de publication
draft = false                  # Brouillon : ignoré si true
tags = ["technique", "hugo"]   # Tags (optionnels)
categories = ["Tutoriel"]      # Catégories (optionnelles)
summary = "Résumé de l'article affiché sur les listes de cartes"  # Résumé de liste
description = "Description SEO ; retombe sur le résumé si non définie"  # Description SEO
+++

Corps de l'article.
```

### Page Parcourir

Une page utilisant `layout = "directory"` qui liste toutes les sections :

```markdown
+++
title = "Parcourir"             # Titre de la page
layout = "directory"           # Utiliser la mise en page annuaire
description = "Parcourir toutes les sections et articles"  # Description SEO
+++
```

### Sections

Chaque section est définie par `_index.md` ; `summary` apparaît sur les listes de cartes :

```markdown
+++
title = 'Articles'              # Titre de la section
summary = 'Articles couvrant le partage technique, des essais sur la vie et plus.'  # Résumé affiché sur les listes de cartes
+++
```

## Accessibilité (WCAG 2.2)

- Lien d'évitement vers le contenu principal (WCAG 2.4.1)
- Landmarks et labels ARIA : navigation principale, navigation de pied de page, navigation de page, sélecteur de langue (role=listbox)
- Prise en charge clavier complète du sélecteur de langue : flèches pour déplacer le focus, Home/End, Échap pour fermer
- Le bouton du menu mobile expose `aria-expanded` / `aria-controls`
- Le canvas de pluie digitale est masqué aux technologies d'assistance (`aria-hidden`, purement décoratif) et respecte prefers-reduced-motion
- Le suivi de défilement et le repli de la TOC sont entièrement opérables au clavier
- Layout RTL automatique pour l'arabe (ar)
- Styles de focus visibles et prise en charge globale de prefers-reduced-motion

## Système de couleurs

| Nom | Hex | Utilisation |
|-----|-----|-------------|
| Abyss Black | `#0A0A0F` | Arrière-plan |
| Rain Green | `#00D4AA` | Accent, pluie digitale, liens |
| Twilight | `#8B92A8` | Texte secondaire, bordures |
| Moon White | `#E8EAF0` | Texte principal, titres |
| Shroud | `#2A2A35` | Panneaux en verre, bordures |

## Polices

Polices système open source couvrant toutes les langues prises en charge par le thème :

- Latin : Inter, Noto Sans
- Chinois : Noto Sans SC/TC, Source Han Sans SC/TC
- Japonais : Noto Sans JP, Source Han Sans JP
- Coréen : Noto Sans KR, Source Han Sans KR, Nanum Gothic
- Arabe : Noto Sans Arabic, Noto Naskh Arabic
- Cyrillique : Noto Sans

## Exigences minimales

- Hugo Extended >= 0.156.0
- Dart Sass (requis pour la compilation SCSS)

## Licence

Licence MIT. Voir [LICENSE](../LICENSE).

