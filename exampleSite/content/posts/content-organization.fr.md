+++
title = "Organisation du contenu"
date = 2026-09-09
draft = false
summary = "Champs front matter et conventions de répertoire pour les pages d'accueil, à propos, navigation, section et article."
description = "Tutoriel d'organisation du contenu du thème revrain : champs front matter et structure de répertoire de chaque type de page."
tags = ['revrain', 'hugo']
categories = ['tutoriel']
+++

## Page d'accueil

`content/_index.md` prend en charge le titre, le sous-titre, le logo et deux boutons :

```toml
+++
title = "Mon site"
subtitle = "Bienvenue sur mon site"
logo = "/logo.png"
logo_alt = "Logo du site"

[primary_button]
url = "/browse"
text = "Commencer l'exploration"

[secondary_button]
url = "/about"
text = "À propos"
+++

Corps de la page d'accueil, rendu dans une carte en verre sous les boutons.
```

`logo`, `logo_alt` et les boutons sont tous facultatifs ; les éléments manquants ne sont pas affichés.

## Page à propos

`content/about.fr.md`, déclarez `layout = "about"` :

```toml
+++
title = "À propos"
layout = "about"
subtitle = "Changer le monde avec le code"
avatar = "/avatar.png"
description = "Description SEO de la page"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar` et `links` sont facultatifs. `links` est rendu sous forme de liste de liens externes avec `target="_blank" rel="noopener"` ajouté automatiquement.

## Page de navigation

`content/browse.fr.md`, déclarez `layout = "directory"`, qui liste toutes les sections automatiquement :

```toml
+++
title = "Navigation"
layout = "directory"
description = "Parcourir toutes les sections et articles"
+++
```

## Section

L'index de section `content/posts/_index.md`, `summary` est affiché dans la liste de cartes :

```toml
+++
title = "Articles"
summary = "Une collection d'articles sur le partage technique, les essais de vie, et plus encore."
+++
```

## Articles

`content/posts/my-post.fr.md`, les articles ordinaires n'ont pas besoin de `layout` :

```toml
+++
title = "Mon article"
date = 2026-09-09
draft = false
tags = ["technique", "hugo"]
categories = ["tutoriel"]
summary = "Résumé de l'article, affiché dans la liste de cartes"
description = "Description SEO, utilise le résumé si non défini"
+++

Corps de l'article.
```

Les pages d'article rendent automatiquement la table des matières latérale (TOC), le fil d'Ariane et la navigation précédent/suivant. `summary` alimente la carte de liste ; `description` sert au SEO et utilise `summary` si non défini.
