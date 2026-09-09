+++
title = "Inhaltsorganisation"
date = 2026-09-09
draft = false
summary = "Front-Matter-Felder und Verzeichniskonventionen für Start-, Über-, Übersichts-, Abschnitts- und Beitragsseiten."
description = "Inhaltsorganisation-Tutorial des Themes revrain: Front-Matter-Felder und Verzeichnisstruktur jedes Seitentyps."
tags = ['revrain', 'hugo']
categories = ['anleitung']
+++

## Startseite

`content/_index.md` unterstützt Titel, Untertitel, Logo und zwei Schaltflächen:

```toml
+++
title = "Meine Website"
subtitle = "Willkommen auf meiner Website"
logo = "/logo.png"
logo_alt = "Website-Logo"

[primary_button]
url = "/browse"
text = "Erkunden beginnen"

[secondary_button]
url = "/about"
text = "Über uns"
+++

Inhalt der Startseite, gerendert in einer Glas-Karte unter den Schaltflächen.
```

`logo`, `logo_alt` und die Schaltflächen sind alle optional; fehlende Elemente werden nicht gerendert.

## Über-Seite

`content/about.de.md`, deklarieren Sie `layout = "about"`:

```toml
+++
title = "Über uns"
layout = "about"
subtitle = "Die Welt mit Code verändern"
avatar = "/avatar.png"
description = "SEO-Beschreibung der Seite"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar` und `links` sind optional. `links` wird als Liste externer Links gerendert, mit automatisch hinzugefügtem `target="_blank" rel="noopener"`.

## Übersichtsseite

`content/browse.de.md`, deklarieren Sie `layout = "directory"`, was alle Abschnitte automatisch auflistet:

```toml
+++
title = "Übersicht"
layout = "directory"
description = "Alle Abschnitte und Beiträge durchsuchen"
+++
```

## Abschnitt

Der Abschnittsindex `content/posts/_index.md`, `summary` wird in der Kartenliste angezeigt:

```toml
+++
title = "Beiträge"
summary = "Eine Sammlung von Artikeln zu technischem Austausch, Lebensessay und mehr."
+++
```

## Beiträge

`content/posts/my-post.de.md`, normale Beiträge benötigen kein `layout`:

```toml
+++
title = "Mein Beitrag"
date = 2026-09-09
draft = false
tags = ["Technik", "hugo"]
categories = ["anleitung"]
summary = "Beitragszusammenfassung, in der Kartenliste angezeigt"
description = "SEO-Beschreibung, verwendet Zusammenfassung wenn nicht gesetzt"
+++

Beitragsinhalt.
```

Beitragsseiten rendern automatisch das Inhaltsverzeichnis in der Seitenleiste (TOC), Brotkrümelnavigation und Vor-/Zurück-Navigation. `summary` speist die Listenkarte; `description` dient SEO und verwendet `summary`, wenn nicht gesetzt.
