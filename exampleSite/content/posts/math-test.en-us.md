+++
title = "Math Formula Test"
date = 2026-08-14
draft = false
tags = ["math", "test"]
categories = ["Tech"]
summary = "Test article for the server-side math rendering feature (transform.ToMath)."
description = "Testing inline and block math: fractions, integrals, matrices, and piecewise functions."
+++

This article tests the new server-side math rendering feature. All formulas below are rendered at build time by Hugo's embedded KaTeX engine.

## Inline Math

Inline equations use `\(...\)` delimiters:

- The Pythagorean theorem \(a^2 + b^2 = c^2\) is fundamental to geometry.
- The golden ratio \(\varphi = \frac{1 + \sqrt{5}}{2}\) appears throughout nature.
- Euler's identity \(e^{i\pi} + 1 = 0\) is often called the most beautiful formula in mathematics.
- Inline fractions also work: \(\frac{dx}{dt} = -\lambda x\) describes exponential decay.

## Block Math with `$$...$$`

Block equations use `$$...$$` delimiters:

$$ E = mc^2 $$

The Gaussian integral is a classic result:

$$ \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi} $$

The Basel problem:

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

## Block Math with `\[...\]`

The `\[...\]` delimiter pair is equivalent:

\[ \lim_{x \to 0} \frac{\sin x}{x} = 1 \]

A 2×2 matrix:

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\]

A piecewise function:

\[
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
\]

## Summary

If you can read all of the above as properly rendered mathematics, the feature is working correctly.
