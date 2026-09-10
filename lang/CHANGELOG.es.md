# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/), y este proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).

## [Sin publicar]

## [v0.0.1] - 2026-09-10

La primera versión oficial de revrain.

### Added

- **Estructura del tema**: un tema Hugo oscuro completo con plantillas para la página de inicio, acerca de, explorar, 404 y artículos/secciones
- **Lluvia digital**: animación Canvas estilo Matrix; conjunto de caracteres, tamaño de fuente, probabilidad de blanco lunar y probabilidad de reinicio totalmente configurables. Respeta el ajuste del sistema «reducir movimiento» (dibuja un único fotograma estático) y omite fotogramas automáticamente en dispositivos de gama baja
- **Glassmorphism**: tarjetas de vidrio esmerilado mediante desenfoque backdrop-filter
- **Multilingüe**: 11 idiomas integrados (zh-CN / zh-TW / en-US / ja / ko / de / fr / es / pt-BR / ru / ar), chino simplificado por defecto; selector de idioma operable con teclado (flechas, Inicio/Fin, Esc)
- **SEO**: description / robots / canonical / enlaces alternativos hreflang, paginación rel=prev/next, Open Graph, Twitter Card, datos estructurados JSON-LD (WebSite / Article), esquema de migas de pan, cadena de búsqueda og:image con descubrimiento automático de portadas
- **Accesibilidad (WCAG 2.2 AA)**: enlace para saltar al contenido principal, puntos de referencia y etiquetas ARIA, navegación con teclado, foco visible, soporte de prefers-reduced-motion, diseño RTL en espejo para árabe
- **Responsive**: mobile-first con 4 puntos de interrupción (480 / 768 / 1024 / 1280px)
- **Fórmulas matemáticas**: renderizado en el servidor en tiempo de compilación mediante el KaTeX integrado de Hugo (`transform.ToMath`); sin JS en el cliente
- **Resaltado de sintaxis**: integrado mediante Hugo
- **RSS**: fuentes para la página de inicio y las secciones, con información de múltiples autores y entrada de suscripción inteligente
- **Taxonomías**: nubes de etiquetas/categorías con paginación en el servidor
- **Índice de contenidos**: TOC en la barra lateral con resaltado al hacer scroll y elementos anidados plegables
- **Navegación**: migas de pan, botones anterior/siguiente, botón de retroceso
- **favicon**: conjunto de iconos estándar multiformato (SVG / 16 / 32 / apple-touch) con cadena de respaldo de tres niveles
- **Pila de fuentes**: fuentes de código abierto que cubren todos los idiomas admitidos por el tema (latín, CJK, árabe, cirílico)
- **Despliegue**: compilación automática con GitHub Actions y despliegue en GitHub Pages
- **Sitio de ejemplo**: páginas de inicio, acerca, explorar y secciones en 11 idiomas, más 5 artículos de tutorial multilingües
- **Requisitos mínimos**: Hugo >= 0.163.0 (cualquier edición), Dart Sass

[Sin publicar]: https://github.com/code-revolution-org/revrain/compare/v0.0.1...HEAD
[v0.0.1]: https://github.com/code-revolution-org/revrain/releases/tag/v0.0.1
