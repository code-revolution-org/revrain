+++
title = 'Test de formules mathématiques'
date = 2026-08-14
draft = false
tags = ['math', 'test']
categories = ['Technologie']
summary = 'Article de test pour le rendu mathématique côté serveur (transform.ToMath). Toutes les formules ci-dessous sont rendues au moment de la compilation par le moteur KaTeX intégré à Hugo.'
description = 'Test des formules mathématiques en ligne et en bloc : fractions, intégrales, matrices et fonctions par morceaux.'
+++

Cet article teste la nouvelle fonctionnalité de rendu mathématique côté serveur. Toutes les formules ci-dessous sont rendues au moment de la compilation par le moteur KaTeX intégré à Hugo.

## Formules en ligne

Les équations en ligne utilisent les délimiteurs `\(...\)` :

- Le théorème de Pythagore \(a^2 + b^2 = c^2\) est fondamental en géométrie.
- Le nombre d'or \(\varphi = \frac{1 + \sqrt{5}}{2}\) apparaît partout dans la nature.
- L'identité d'Euler \(e^{i\pi} + 1 = 0\) est souvent appelée la plus belle formule des mathématiques.
- Les fractions en ligne fonctionnent aussi : \(\frac{dx}{dt} = -\lambda x\) décrit une décroissance exponentielle.

## Formules en bloc avec `$$...$$`

Les équations en bloc utilisent les délimiteurs `$$...$$` :

$$ E = mc^2 $$

L'intégrale de Gauss est un résultat classique :

$$ \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi} $$

Le problème de Bâle :

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

## Formules en bloc avec `\[...\]`

Les délimiteurs `\[...\]` sont équivalents :

\[ \lim_{x \to 0} \frac{\sin x}{x} = 1 \]

Une matrice 2×2 :

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\]

Une fonction par morceaux :

\[
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
\]

## Résumé

Si vous pouvez lire toutes les formules ci-dessus comme des mathématiques correctement rendues, la fonctionnalité fonctionne correctement.
