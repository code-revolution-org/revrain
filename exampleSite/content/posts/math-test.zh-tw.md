+++
title = '數學公式測試'
date = 2026-08-14
draft = false
tags = ['math', 'test']
categories = ['技術']
summary = '測試新的伺服器端數學公式渲染功能（transform.ToMath）。本文所有公式均在建置時由 Hugo 內建的 KaTeX 引擎渲染。'
description = '測試行內與區塊數學公式：分數、積分、矩陣和分段函數。'
+++

本文用於測試新的伺服器端數學公式渲染功能。以下所有公式均在建置時由 Hugo 內建的 KaTeX 引擎渲染。

## 行內公式

行內公式使用 `\(...\)` 定界符：

- 勾股定理 \(a^2 + b^2 = c^2\) 是幾何學的基礎。
- 黃金比例 \(\varphi = \frac{1 + \sqrt{5}}{2}\) 在自然界中隨處可見。
- 歐拉恆等式 \(e^{i\pi} + 1 = 0\) 常被稱為數學中最優美的公式。
- 行內分數同樣適用：\(\frac{dx}{dt} = -\lambda x\) 描述指數衰減。

## 使用 `$$...$$` 的區塊公式

區塊公式使用 `$$...$$` 定界符：

$$ E = mc^2 $$

高斯積分是一個經典結果：

$$ \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi} $$

巴塞爾問題：

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

## 使用 `\[...\]` 的區塊公式

`\[...\]` 定界符與之等效：

\[ \lim_{x \to 0} \frac{\sin x}{x} = 1 \]

一個 2×2 矩陣：

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\]

一個分段函數：

\[
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
\]

## 總結

如果你能正確讀出以上所有公式，表示此功能運作正常。
