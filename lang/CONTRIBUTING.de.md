# Mitwirkungsleitfaden

Vielen Dank für dein Interesse, zu revrain beizutragen! Wir freuen uns über Fehlermeldungen, Dokumentationsverbesserungen und Code-Beiträge.

revrain ist ein Hugo-Theme für Geeks und Entwickler: dunkles Design mit Digital-Rain-Animation und Glassmorphism-Optik, 11 Sprachen unterstützt und ausgerichtet am Barrierefreiheitsstandard WCAG 2.2 AA. Jeder deiner Beiträge ist wertvoll.

## Branches

Dieses Repository hat zwei Haupt-Branches:

- `main`: Stabile / offizielle Version. Wird ausschließlich von Maintainern aus `dev` gemergt und veröffentlicht. **Direkte PRs werden nicht angenommen.**
- `dev`: Entwicklungs-Branch. Alle Funktionen, Fixes und Dokumentationsänderungen gehören nach `dev`.

> Wichtig: Wähle beim Erstellen eines Pull Requests immer `dev` als Ziel-Branch, nicht `main`.

## Wie du beitragen kannst

- Fehler (Bugs) melden
- Neue Funktionen vorschlagen
- Dokumentation verbessern (einschließlich der mehrsprachigen README-Übersetzungen unter `lang/`)
- Code-Fixes oder neue Funktionen einreichen
- Beim Testen und Feedback helfen (insbesondere in verschiedenen Browsern, mit Screenreadern und in RTL-Sprachen)

## Entwicklungsumgebung

- Hugo >= 0.163.0 (beliebige Edition; SCSS wird von externem Dart Sass kompiliert)
- Dart Sass (muss installiert und im PATH sein; Hugo ruft es automatisch auf)

### Lokale Vorschau

```bash
cd exampleSite
hugo server
```

`exampleSite/hugo.toml` verweist bereits über `themesDir = "../../"` auf das Theme-Wurzelverzeichnis – keine weitere Einrichtung nötig. So erstellst du die Produktionsversion:

```bash
cd exampleSite
hugo --minify --gc
```

## Probleme melden

Bevor du ein Issue eröffnest, suche bitte, ob ein ähnliches Problem bereits existiert.

Bitte gib so viel wie möglich an:

- Deine Umgebung (Betriebssystem, Hugo-Version, Browser usw.)
- Schritte zur Reproduktion
- Erwartetes Ergebnis
- Tatsächliches Ergebnis
- Fehler-Logs oder Screenshots (falls vorhanden)

Bei Barrierefreiheits-Problemen (Tastaturnavigation, Screenreader, Kontrast, RTL usw.) nenne bitte die verwendete assistive Technologie und deren Version.

## Code einreichen

1. Forke dieses Repository.

2. Klone deinen Fork:

   ```bash
   git clone https://github.com/dein-benutzername/revrain.git
   cd revrain
   ```

3. Wechsle zum `dev`-Branch:

   ```bash
   git checkout dev
   git pull origin dev
   ```

4. Erstelle deinen Branch aus `dev`:

   ```bash
   git checkout -b fix/problembeschreibung
   ```

   Empfohlene Branch-Namen:

   - `feat/neue-funktion`
   - `fix/problemlösung`
   - `docs/dokumentation`

5. Ändere den Code und committe:

   ```bash
   git add .
   git commit -m "fix: behebt ein bestimmtes Problem"
   ```

6. Pushe zu deinem Fork:

   ```bash
   git push origin fix/problembeschreibung
   ```

7. Erstelle einen Pull Request auf GitHub.

   **Der Ziel-Branch des PR muss `dev` sein, nicht `main`.**

## Pull-Request-Anforderungen

- Ziel-Branch: `dev`
- Ein PR sollte idealerweise nur eine Sache erledigen
- Erkläre, was du geändert hast, warum und wie du getestet hast
- Bei größeren Änderungen zuerst ein Issue zur Diskussion eröffnen
- Keine unzusammenhängenden Formatierungen oder großflächige Änderungen einreichen
- Keine Passwörter, Schlüssel oder persönliche Informationen committen
- Wenn du das Verhalten des Themes änderst, aktualisiere auch `README.md` (und bei Bedarf die mehrsprachigen Dokumente unter `lang/`)
- Nach Änderungen an Stilen oder Skripten lokal mit `hugo server` verifizieren und prüfen, dass alles auf schmalen (mobilen) Bildschirmen korrekt dargestellt wird
- Bei neuen oder geänderten UI-Interaktionen die bestehenden Barrierefreiheits-Konventionen beibehalten: Tastaturbedienbarkeit, sichtbarer Fokus, `aria-*`-Attribute und `prefers-reduced-motion`-Unterstützung

## Commit-Meldungen – Empfehlungen

Empfohlen, aber nicht verpflichtend (bestehenden Commit-Stil beibehalten):

- `feat: neue Funktion`
- `fix: Fehlerbehebung`
- `docs: Dokumentations-Update`
- `test: Tests`
- `refactor: Refactoring`
- `chore: Sonstiges`

## Release-Prozess der Maintainer

Die normale Entwicklung findet auf `dev` statt.
Sobald `dev` nach dem Testen stabil ist, mergen die Maintainer in `main` und veröffentlichen eine stabile Version.

## Kommunikation

- Bei Fragen eröffne bitte direkt ein Issue; wir antworten so schnell wie möglich
- Sei freundlich und respektiere andere Meinungen

## Lizenz

Deine Beiträge werden unter der MIT-LIZENZ dieses Projekts veröffentlicht. Siehe [LICENSE](../LICENSE).
