+++
title = 'Test mathematischer Formeln'
date = 2026-08-14
draft = false
tags = ['math', 'test']
categories = ['Technik']
summary = 'Testartikel für die serverseitige Mathematik-Darstellung (transform.ToMath). Alle folgenden Formeln werden zur Build-Zeit von der in Hugo integrierten KaTeX-Engine gerendert.'
description = 'Test von Inline- und Block-Formeln: Brüche, Integrale, Matrizen und abschnittsweise Funktionen.'
+++

Dieser Artikel testet die neue serverseitige Mathematik-Darstellung. Alle folgenden Formeln werden zur Build-Zeit von der in Hugo integrierten KaTeX-Engine gerendert.

## Inline-Formeln

Inline-Gleichungen verwenden die Trennzeichen `\(...\)` :

- Der Satz des Pythagoras \(a^2 + b^2 = c^2\) ist fundamental für die Geometrie.
- Der goldene Schnitt \(\varphi = \frac{1 + \sqrt{5}}{2}\) erscheint überall in der Natur.
- Die Eulersche Identität \(e^{i\pi} + 1 = 0\) wird oft als die schönste Formel der Mathematik bezeichnet.
- Inline-Brüche funktionieren ebenfalls: \(\frac{dx}{dt} = -\lambda x\) beschreibt exponentiellen Zerfall.

## Block-Formeln mit `$$...$$`

Block-Gleichungen verwenden die Trennzeichen `$$...$$` :

$$ E = mc^2 $$

Das Gaußsche Integral ist ein klassisches Ergebnis:

$$ \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi} $$

Das Basler Problem:

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

## Block-Formeln mit `\[...\]`

Die Trennzeichen `\[...\]` sind gleichwertig:

\[ \lim_{x \to 0} \frac{\sin x}{x} = 1 \]

Eine 2×2-Matrix:

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\]

Eine abschnittsweise Funktion:

\[
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
\]

## Zusammenfassung

Wenn Sie alle obigen Formeln als korrekt gerenderte Mathematik lesen können, funktioniert die Funktion ordnungsgemäß.
