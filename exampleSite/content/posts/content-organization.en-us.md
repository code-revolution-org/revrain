+++
title = 'Content Organization'
date = 2026-09-09
draft = false
summary = 'Front matter fields and directory conventions for the home, about, browse, section and post pages.'
description = 'revrain theme content organization tutorial: front matter fields and directory structure for each page type.'
tags = ['revrain', 'hugo']
categories = ['tutorial']
+++

## Home page

`content/_index.md`, supports title, subtitle, logo and two buttons:

```toml
+++
title = "My Site"
subtitle = "Welcome to my site"
logo = "/logo.png"
logo_alt = "Site logo"

[primary_button]
url = "/browse"
text = "Start exploring"

[secondary_button]
url = "/about"
text = "About us"
+++

Home page body, rendered in a glass card below the buttons.
```

`logo`, `logo_alt` and the buttons are all optional; missing elements are not rendered.

## About page

`content/about.en-us.md`, declare `layout = "about"`:

```toml
+++
title = "About us"
layout = "about"
subtitle = "Changing the world with code"
avatar = "/avatar.png"
description = "Page SEO description"
links = [
  { name = "GitHub", url = "https://github.com/username" }
]
+++
```

`avatar` and `links` are optional. `links` renders as a list of external links with `target="_blank" rel="noopener"` added automatically.

## Browse page

`content/browse.en-us.md`, declare `layout = "directory"`, which lists all sections automatically:

```toml
+++
title = "Browse"
layout = "directory"
description = "Browse all sections and posts"
+++
```

## Section

Section index `content/posts/_index.md`, `summary` is shown in the card list:

```toml
+++
title = "Posts"
summary = "A collection of articles covering tech sharing, life essays, and more."
+++
```

## Posts

`content/posts/my-post.en-us.md`, regular posts do not need a `layout`:

```toml
+++
title = "My post"
date = 2026-09-09
draft = false
tags = ["tech", "hugo"]
categories = ["tutorial"]
summary = "Post summary, shown in the card list"
description = "SEO description, falls back to summary when unset"
+++

Post body.
```

Post pages automatically render the sidebar table of contents (TOC), breadcrumb and previous/next navigation. `summary` feeds the list card; `description` is for SEO and falls back to `summary` when unset.
