+++
title = 'Teste de fórmulas matemáticas'
date = 2026-08-14
draft = false
tags = ['math', 'test']
categories = ['Tecnologia']
summary = 'Artigo de teste para a renderização matemática do lado do servidor (transform.ToMath). Todas as fórmulas abaixo são renderizadas no momento da compilação pelo mecanismo KaTeX embutido no Hugo.'
description = 'Teste de fórmulas matemáticas em linha e em bloco: frações, integrais, matrizes e funções por partes.'
+++

Este artigo testa o novo recurso de renderização matemática do lado do servidor. Todas as fórmulas abaixo são renderizadas no momento da compilação pelo mecanismo KaTeX embutido no Hugo.

## Matemática em linha

Equações em linha usam os delimitadores `\(...\)`:

- O teorema de Pitágoras \(a^2 + b^2 = c^2\) é fundamental para a geometria.
- A proporção áurea \(\varphi = \frac{1 + \sqrt{5}}{2}\) aparece em toda a natureza.
- A identidade de Euler \(e^{i\pi} + 1 = 0\) é frequentemente chamada de a fórmula mais bela da matemática.
- Frações em linha também funcionam: \(\frac{dx}{dt} = -\lambda x\) descreve decaimento exponencial.

## Matemática em bloco com `$$...$$`

Equações em bloco usam os delimitadores `$$...$$`:

$$ E = mc^2 $$

A integral gaussiana é um resultado clássico:

$$ \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi} $$

O problema da Basileia:

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

## Matemática em bloco com `\[...\]`

Os delimitadores `\[...\]` são equivalentes:

\[ \lim_{x \to 0} \frac{\sin x}{x} = 1 \]

Uma matriz 2×2:

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\]

Uma função por partes:

\[
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
\]

## Resumo

Se você consegue ler todas as fórmulas acima como matemática devidamente renderizada, o recurso está funcionando corretamente.
