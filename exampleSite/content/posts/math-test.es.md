+++
title = 'Prueba de fórmulas matemáticas'
date = 2026-08-14
draft = false
tags = ['math', 'test']
categories = ['Técnica']
summary = 'Artículo de prueba para la representación matemática del lado del servidor (transform.ToMath). Todas las fórmulas siguientes se renderizan en tiempo de compilación con el motor KaTeX integrado en Hugo.'
description = 'Prueba de fórmulas matemáticas en línea y en bloque: fracciones, integrales, matrices y funciones a trozos.'
+++

Este artículo prueba la nueva función de representación matemática del lado del servidor. Todas las fórmulas siguientes se renderizan en tiempo de compilación con el motor KaTeX integrado en Hugo.

## Matemáticas en línea

Las ecuaciones en línea usan los delimitadores `\(...\)`:

- El teorema de Pitágoras \(a^2 + b^2 = c^2\) es fundamental en geometría.
- La proporción áurea \(\varphi = \frac{1 + \sqrt{5}}{2}\) aparece en toda la naturaleza.
- La identidad de Euler \(e^{i\pi} + 1 = 0\) suele llamarse la fórmula más bella de las matemáticas.
- Las fracciones en línea también funcionan: \(\frac{dx}{dt} = -\lambda x\) describe una decadencia exponencial.

## Matemáticas en bloque con `$$...$$`

Las ecuaciones en bloque usan los delimitadores `$$...$$`:

$$ E = mc^2 $$

La integral gaussiana es un resultado clásico:

$$ \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi} $$

El problema de Basilea:

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

## Matemáticas en bloque con `\[...\]`

Los delimitadores `\[...\]` son equivalentes:

\[ \lim_{x \to 0} \frac{\sin x}{x} = 1 \]

Una matriz de 2×2:

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\]

Una función a trozos:

\[
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
\]

## Resumen

Si puede leer todas las fórmulas anteriores como matemáticas correctamente representadas, la función funciona correctamente.
