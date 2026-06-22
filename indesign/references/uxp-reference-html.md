# General, Hierarchy

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: body; head; html; General; link; script; style; Unsupported Attributes; Unsupported Elements; footer; h1; h2; h3; h4; h5; h6; hr; Hierarchy.

## body

**Since** UXP v2.0

This is the plugin's body element. In a plugin with more than one panel, the `<body>` tag holds the first panel's contents; UXP inserts a `<uxp-panel>` element into the DOM for each later panel so its matching body is represented.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/body](https://developer.mozilla.org/en/docs/Web/HTML/Element/body)

**Example**

```html
<body>
  Hello, world
</body>
```

## head

**Since** UXP v2.0

Holds metadata for the UXP HTML document, such as extra styles, scripts, and related entries.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/head](https://developer.mozilla.org/en/docs/Web/HTML/Element/head)

**Example**

```html
<html>
  <head>
    <style>
      .highlight {
        color: red;
      }
    </style>
  </head>
  <body>
    <div class="highlight">Hello, world</div>
  </body>
</html>
```

## html

**Since** UXP v2.0

Marks the root for a UXP plugin interface.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/html](https://developer.mozilla.org/en/docs/Web/HTML/Element/html)

**Example**

```html
<html>
  <head> </head>
  <body>
    Hello, world
  </body>
</html>
```

### Attributes

The attributes below are unsupported and do not change behavior:

- `manifest`
- `version`
- `xmlns`

These attributes are supported:

- `lang` - sets the document language.

## General

- [body](uxp-reference-html.md)
- [head](uxp-reference-html.md)
- [html](uxp-reference-html.md)
- [link](uxp-reference-html.md)
- [script](uxp-reference-html.md)
- [style](uxp-reference-html.md)
- [Unsupported Attributes](uxp-reference-html.md)
- [Unsupported Elements](uxp-reference-html.md)

## link

**Since** UXP v3.0

Points to related external content. In UXP, this tag is available for loading an external stylesheet; other uses are unsupported.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/link](https://developer.mozilla.org/en/docs/Web/HTML/Element/link)

**Example**

```html
<link rel="stylesheet" href="stylesheet.css" />
```

## script

**Since** UXP v3.0

Loads a script and runs it.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/script](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)

**Example**

```html
<script src="index.js"></script>
```

### Quirks

Even though Photoshop permits `<script>` tags inserted through the HTML5 DOM API and those tags do execute, treat that behavior as unsupported for dependable plugin code because it can introduce major security exposure. Use `<script>` tags only for local, static content that is loaded and executed directly.

## style

**Since** UXP v2.0

Defines styles embedded directly in the document.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/style](https://developer.mozilla.org/en/docs/Web/HTML/Element/style)

**Example**

```html
<style>
  .highlight {
    color: red;
  }
</style>
```

### Attributes

UXP ignores these unsupported attributes:

- `type`
- `media`
- `nonce`
- `title`

## Unsupported Attributes

These global attributes are not supported:

- `accesskey`
- `aria*`
- `autocapitalize`
- `contenteditable`
- `contextmenu`
- `dir`
- `dropzone`
- `hidden`
- `inputmode`
- `is`
- `item*`
- `part`
- `spellcheck`
- `tabindex` (supported, but its behavior differs from the specification. Negative values are skipped during focus, and positive values permit focus without letting authors set the tab sequence.)
- `translate`

For most events, attach handlers with `addEventListener` rather than using the matching `on*` handler properties.

## Unsupported Elements

Support is limited to the elements covered by the nearby documentation. Tags outside that set, including `<li>`, `<ul>`, and similar elements, are handled as plain `<div>` elements. Because of that fallback, CSS can often make unsupported elements look closer to their browser equivalents.

### Typography

Tags such as `<i>` are absent from the supported set. Add CSS like this when you need those elements to display with their expected visual styling:

```css
i,
em {
  font-style: italic;
}
strong {
  font-weight: bold;
}
q:before {
  content: "â€œ";
}
q:after {
  content: "â€";
}
blockquote {
  margin: 1em;
}
pre {
  white-space: pre;
}
code {
  font-family: Courier;
}
```

### Unordered Lists

Lists and list items are not available in UXP by default. A short CSS rule set can mimic an unordered list with bullets.

```css
ul {
  margin-left: 1em;
}
li:before {
  content: "â€¢";
  display: inline-block;
  text-align: center;
  margin-left: -1em;
  width: 1em;
}
```

### Ordered Lists

UXP omits support for ordered lists (`<ol>`). To work around that gap, create the numbered content for each item yourself.

### Title

UXP does not use the `<title>` element. When it is present, it can appear visibly inside the plugin. Hide it by adding this CSS to the project:

```css
title {
  display: none;
}
```

## footer

**Since** UXP v3.0

Use `<footer>` in dialogs when buttons need right-side alignment. The element is optional, and any default styling can be overridden.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/footer](https://developer.mozilla.org/en/docs/Web/HTML/Element/footer)

**Example**

```html
<dialog>
  <form method="dialog">
    <sp-heading>A heading</sp-heading>
    <sp-divider size="large"></sp-divider>
    <sp-body>Hello!</sp-body>
    <footer>
      <sp-button>Close</sp-button>
    </footer>
  </form>
</dialog>
```

```js
document.querySelector("dialog").uxpShowModal({ size: { width: 480, height: 360 } });
```

## h1

**Since** UXP v2.0

Defines the first heading level in the document hierarchy.

This element is **not** theme-aware. For theme-aware headings, use the Spectrum UXP counterpart or write manual styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h1](https://developer.mozilla.org/en/docs/Web/HTML/Element/h1)

**Example**

```html
<h1>Hello, world!</h1>
```

### Spectrum UXP Correlate

Spectrum UXP can produce a comparable result with `sp-heading`.

```html
<sp-heading size="L">Hello, World</sp-heading>
```

## h2

**Since** UXP v2.0

Defines the second heading level in the document hierarchy.

This element is **not** theme-aware. For theme-aware headings, use the Spectrum UXP counterpart or write manual styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h2](https://developer.mozilla.org/en/docs/Web/HTML/Element/h2)

**Example**

```html
<h2>Hello, world!</h2>
```

### Spectrum UXP Correlate

Spectrum UXP can produce a comparable result with `sp-heading`.

```html
<sp-heading>Hello, World</sp-heading>
```

## h3

**Since** UXP v2.0

Defines the third heading level in the document hierarchy.

This element is **not** theme-aware. For theme-aware headings, use the Spectrum UXP counterpart or write manual styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h3](https://developer.mozilla.org/en/docs/Web/HTML/Element/h3)

**Example**

```html
<h3>Hello, world!</h3>
```

### Spectrum UXP Correlate

Spectrum UXP can produce a comparable result with `sp-heading`.

```html
<sp-heading size="XS">Hello, World</sp-heading>
```

## h4

**Since** UXP v2.0

Defines the fourth heading level in the document hierarchy.

This element is **not** theme-aware. For theme-aware headings, use the Spectrum UXP counterpart or write manual styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h4](https://developer.mozilla.org/en/docs/Web/HTML/Element/h4)

**Example**

```html
<h4>Hello, world!</h4>
```

## h5

**Since** UXP v2.0

Defines the fifth heading level in the document hierarchy.

This element is **not** theme-aware. For theme-aware headings, use the Spectrum UXP counterpart or write manual styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h5](https://developer.mozilla.org/en/docs/Web/HTML/Element/h5)

**Example**

```html
<h5>Hello, world!</h5>
```

### Spectrum UXP Correlate

Spectrum UXP can produce a comparable result with `sp-heading`.

```html
<sp-heading size="XXS">Hello, World</sp-heading>
```

## h6

**Since** UXP v2.0

Defines the sixth heading level in the document hierarchy.

This element is **not** theme-aware. For theme-aware headings, use the Spectrum UXP counterpart or write manual styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h6](https://developer.mozilla.org/en/docs/Web/HTML/Element/h6)

**Example**

```html
<h6>Hello, world!</h6>
```

## hr

**Since** UXP v2.0

Draws a horizontal rule.

The horizontal rule is **not** theme-aware. Use Spectrum UXP counterparts when theme awareness is needed, or provide manual styling that responds to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/hr](https://developer.mozilla.org/en/docs/Web/HTML/Element/hr)

**Example**

```html
<hr class="large" />
<hr class="medium" /> \<!-- default --\>
<hr class="small" />
```

### Spectrum UXP Correlate

Spectrum UXP can produce a comparable result with `sp-divider`.

```html
<sp-divider size="large"></sp-divider>
<sp-divider size="medium"></sp-divider>
<sp-divider size="small"></sp-divider> \<!-- default --\>
```

## Hierarchy

- [footer](uxp-reference-html.md)
- [h1](uxp-reference-html.md)
- [h2](uxp-reference-html.md)
- [h3](uxp-reference-html.md)
- [h4](uxp-reference-html.md)
- [h5](uxp-reference-html.md)
- [h6](uxp-reference-html.md)
- [hr](uxp-reference-html.md)

## HTML Reference

Covers supported HTML elements and attributes at a technical reference level.

### Pages in this section

- [General](uxp-reference-html.md)
- [Hierarchy](uxp-reference-html.md)
