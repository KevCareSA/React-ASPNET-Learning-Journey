
---

# 🌐 HTML Metadata Elements — Structured Notes

These elements live **outside visible content** and control how the browser interprets, displays, and optimizes a webpage.

---

## 1. `<html>` — Root of the Document

### Purpose

Defines the **root container** of the entire HTML document.
Every HTML element must exist inside `<html>`.

### Why It Exists

* Tells the browser where the document starts
* Defines the document language and context

### Example

```html
<html lang="en">
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

### Key Attributes

* `lang="en"`

  * Improves accessibility
  * Helps SEO
  * Assists screen readers and translators

---

## 2. `<head>` — Document Control Room

### Purpose

Contains **invisible configuration and metadata** used by the browser **before rendering** the page.

### Why It Exists

* Loads styles, scripts, and settings
* Controls SEO, encoding, responsiveness

### Example

```html
<head>
  <title>Dashboard</title>
  <meta charset="UTF-8">
</head>
```

### Common Contents

* `<title>`
* `<meta>`
* `<link>`
* `<style>`
* `<script>`

---

## 3. `<title>` — Browser Tab Name

### Purpose

Defines the **text shown on the browser tab** and search results.

### Why It Matters

* SEO ranking
* Bookmark naming
* User navigation
* Social previews

### Example

```html
<title>Election Results Dashboard</title>
```

### Rules

* Must be inside `<head>`
* Only one `<title>` per page

---

## 4. `<meta>` — Metadata & Page Behaviour

### Purpose

Provides **extra information** that affects how the page behaves and is interpreted.

### Why It Matters

* Character encoding
* Mobile responsiveness
* SEO
* Social sharing previews

---

### Common Meta: Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Breakdown

* `width=device-width`
  → Page matches device width

* `initial-scale=1.0`
  → Default zoom = 100%

---

### Common Meta: Charset

```html
<meta charset="UTF-8">
```

#### Why UTF-8

* Supports all languages
* Supports emojis
* Prevents broken characters

---

## 5. `<link>` — External Resources

### Purpose

Links **external files** such as CSS, icons, or fonts.

### Why It Matters

* Cleaner HTML
* Reusable styles
* Better performance (browser caching)

### Example

```html
<link rel="stylesheet" href="styles.css">
```

### Key Attributes

* `rel="stylesheet"` → relationship type
* `href="styles.css"` → file path

---

## 6. `<style>` — Internal CSS

### Purpose

Allows CSS to be written **directly inside HTML**.

### When to Use

* Prototypes
* Quick testing
* Small projects
* HTML emails

### Example

```html
<style>
  h1 { color: red; }
  body { background: #f0f0f0; }
</style>
```

### Rules

* Must be inside `<head>`
* Affects the entire document

---

## 7. `<script>` — JavaScript Logic

### Purpose

Runs JavaScript for:

* interactivity
* logic
* events
* data handling

---

### Inline Script Example

```html
<script>
  console.log("Page loaded");
</script>
```

---

### External Script Example

```html
<script src="app.js"></script>
```

### Why External Scripts

* Cleaner HTML
* Code reuse
* Easier maintenance

---

## ⭐ Metadata Elements — Visual Tree

```
HTML Document
│
├── html
│
├── head
│   │
│   ├── title   → browser tab name
│   ├── meta    → encoding, SEO, responsiveness
│   ├── link    → external CSS / files
│   ├── style   → internal CSS
│   └── script  → JavaScript logic
│
└── body        → visible content
```

---
