+++
title = '数学公式测试'
date = 2026-08-14
draft = false
tags = ['math', 'test']
categories = ['技术']
summary = '测试新的服务端数学公式渲染功能（transform.ToMath）。本文所有公式均在构建时由 Hugo 内置的 KaTeX 引擎渲染。'
description = '测试行内与块级数学公式：分数、积分、矩阵和分段函数。'
+++

本文用于测试新的服务端数学公式渲染功能。以下所有公式均在构建时由 Hugo 内置的 KaTeX 引擎渲染。

## 行内公式

行内公式使用 `\(...\)` 定界符：

- 勾股定理 \(a^2 + b^2 = c^2\) 是几何学的基础。
- 黄金比例 \(\varphi = \frac{1 + \sqrt{5}}{2}\) 在自然界中随处可见。
- 欧拉恒等式 \(e^{i\pi} + 1 = 0\) 常被称为数学中最优美的公式。
- 行内分数同样适用：\(\frac{dx}{dt} = -\lambda x\) 描述指数衰减。

## 使用 `$$...$$` 的块级公式

块级公式使用 `$$...$$` 定界符：

$$ E = mc^2 $$

高斯积分是一个经典结果：

$$ \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi} $$

巴塞尔问题：

$$ \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} $$

## 使用 `\[...\]` 的块级公式

`\[...\]` 定界符与之等效：

\[ \lim_{x \to 0} \frac{\sin x}{x} = 1 \]

一个 2×2 矩阵：

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\]

一个分段函数：

\[
f(x) =
\begin{cases}
x^2 & \text{if } x \ge 0 \\
-x & \text{if } x < 0
\end{cases}
\]

## 总结

如果你能正确读出以上所有公式，说明该功能工作正常。
