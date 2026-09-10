+++
title = "Formules mathématiques"
date = 2026-09-09
draft = false
summary = "Rendre les formules mathématiques côté serveur à la construction avec le KaTeX intégré, sans JS côté client."
description = "Tutoriel mathématiques du thème revrain : configuration passthrough, délimiteurs et rendu côté serveur."
tags = ['revrain', 'hugo']
categories = ['tutoriel']
+++

## Activer passthrough

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

## Délimiteurs

Les formules en ligne utilisent `\(...\)` :

```md
Ceci est un exemple de formule en ligne \(a^2 + b^2 = c^2\).
```

Les formules en bloc utilisent `\[...\]` ou `$$...$$` :

```md
\[
\begin{aligned}
E &= mc^2
\end{aligned}
\]
```

N'utilisez pas `$...$`, pour éviter les conflits avec les symboles monétaires dans le texte Markdown.

## Rendu

Les formules sont rendues côté serveur à la construction par le KaTeX intégré (`transform.ToMath`) en HTML + MathML, sans JavaScript côté client. La feuille de style KaTeX (`katex.min.css` v0.17.0) est chargée depuis le CDN jsDelivr avec vérification d'intégrité de sous-ressource (SRI), et uniquement sur les pages contenant des formules.
