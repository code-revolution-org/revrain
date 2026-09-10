# Guía de contribución

¡Gracias por tu interés en contribuir a revrain! Aceptamos informes de errores, mejoras de documentación y contribuciones de código.

revrain es un tema de Hugo hecho para geeks y desarrolladores: diseño oscuro con animación de lluvia digital, estética de vidrio esmerilado (glassmorphism), soporte de 11 idiomas y alineado con el estándar de accesibilidad WCAG 2.2 AA. Cada contribución tuya es valiosa.

## Ramas

Este repositorio tiene dos ramas principales:

- `main`: versión estable / oficial. Solo los mantenedores la fusionan y publican desde `dev`. **No se aceptan PR directos.**
- `dev`: rama de desarrollo. Todas las funciones, correcciones y cambios de documentación deben ir a `dev`.

> Importante: al abrir un Pull Request, selecciona `dev` como rama de destino, no `main`.

## Cómo puedes contribuir

- Informar de errores
- Sugerir nuevas funciones
- Mejorar la documentación (incluidas las traducciones multilingües del README en `lang/`)
- Enviar correcciones de código o nuevas funciones
- Ayudar con pruebas y comentarios (especialmente en distintos navegadores, lectores de pantalla e idiomas RTL)

## Entorno de desarrollo

- Hugo >= 0.163.0 (cualquier edición; el SCSS lo compila el Dart Sass externo)
- Dart Sass (debe estar instalado y en el PATH; Hugo lo invoca automáticamente)

### Vista previa local

```bash
cd exampleSite
hugo server
```

`exampleSite/hugo.toml` ya apunta a la raíz del tema mediante `themesDir = "../../"`, por lo que no se necesita configuración adicional. Para compilar la versión de producción:

```bash
cd exampleSite
hugo --minify --gc
```

## Informar de problemas

Antes de abrir una Issue, busca si ya existe un problema similar.

Proporciona tanta información como sea posible:

- Tu entorno (sistema operativo, versión de Hugo, navegador, etc.)
- Pasos para reproducir
- Resultado esperado
- Resultado real
- Registros de error o capturas de pantalla (si los hay)

Para problemas de accesibilidad (navegación por teclado, lectores de pantalla, contraste, RTL, etc.), indica la tecnología de asistencia utilizada y su versión.

## Enviar código

1. Haz un fork de este repositorio.

2. Clona tu fork:

   ```bash
   git clone https://github.com/tu-nombre-de-usuario/revrain.git
   cd revrain
   ```

3. Cambia a la rama `dev`:

   ```bash
   git checkout dev
   git pull origin dev
   ```

4. Crea tu rama desde `dev`:

   ```bash
   git checkout -b fix/descripcion-del-problema
   ```

   Nombres de rama sugeridos:

   - `feat/nueva-funcion`
   - `fix/correccion`
   - `docs/actualizacion-documentacion`

5. Modifica el código y haz commit:

   ```bash
   git add .
   git commit -m "fix: corrige un problema concreto"
   ```

6. Haz push a tu fork:

   ```bash
   git push origin fix/descripcion-del-problema
   ```

7. Abre un Pull Request en GitHub.

   **La rama de destino del PR debe ser `dev`, no `main`.**

## Requisitos de los Pull Requests

- Rama de destino: `dev`
- Un PR debe idealmente hacer una sola cosa
- Explica qué cambiaste, por qué y cómo lo probaste
- Para cambios grandes, abre primero una Issue para discutir
- No incluyas formato no relacionado ni cambios a gran escala
- No subas contraseñas, claves ni información personal
- Al cambiar el comportamiento del tema, actualiza también `README.md` (y los documentos multilingües de `lang/` si es necesario)
- Tras modificar estilos o scripts, verifica localmente con `hugo server` y confirma que se ve bien en pantallas estrechas (móvil)
- Al añadir o modificar interacciones de interfaz, mantén las convenciones de accesibilidad existentes: operable con teclado, foco visible, atributos `aria-*` y soporte de `prefers-reduced-motion`

## Sugerencias de mensajes de commit

Recomendado pero no obligatorio (mantén el estilo de commit existente):

- `feat: nueva función`
- `fix: corrección de error`
- `docs: actualización de documentación`
- `test: pruebas`
- `refactor: refactorización`
- `chore: varios`

## Proceso de publicación de los mantenedores

El desarrollo habitual se realiza en `dev`.
Cuando `dev` sea estable tras las pruebas, los mantenedores lo fusionan en `main` y publican la versión oficial.

## Comunicación

- Para cualquier duda, abre directamente una Issue; responderemos lo antes posible
- Sé amable y respeta las opiniones diferentes

## Licencia

Tus contribuciones se publicarán bajo la LICENCIA MIT de este proyecto. Ver [LICENSE](../LICENSE).
