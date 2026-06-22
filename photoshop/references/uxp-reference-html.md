# General, Hierarchy

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: body; head; html; General; link; script; style; Unsupported Attributes; Unsupported Elements; footer; h1; h2; h3; h4; h5; h6; hr; Hierarchy.

## body

**Since** UXP v2.0

`<body>` is the plugin body. In a multi-panel plugin, `<body>` contains the first panel, while UXP inserts separate `<uxp-panel>` elements into the DOM for the other panels' content roots.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/body](https://developer.mozilla.org/en/docs/Web/HTML/Element/body)

**Example**

```html
<body>
  Hello, world
</body>
```

## head

**Since** UXP v2.0

Use `head` for UXP HTML document metadata, including extra styles, scripts, and similar information.

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

This marks the root element for a UXP plugin UI.

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

These attributes are unsupported and have no effect:

- `manifest`
- `version`
- `xmlns`

This attribute is supported:

- `lang` - specifies the document language.

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

Points at related external content. In UXP, the supported use of `link` is loading an external stylesheet; other uses are unavailable.

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

Photoshop permits `<script>` tag injection through the HTML5 DOM API, and injected tags do execute, but plugin code should not depend on that behavior because it can create serious security exposure. Use `<script>` tags only for local, static content that is loaded and executed.

## style

**Since** UXP v2.0

Provides inline CSS.

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

Unsupported global attributes:

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
- `tabindex` (supported, although behavior differs from the specification. Negative values do not receive focus; positive values can receive focus, but they cannot define tab order.)
- `translate`

For these and most other event handlers, attach callbacks with `addEventListener` rather than the matching `on*` handler properties.

## Unsupported Elements

Supported elements are the ones covered by the nearby documentation. Unsupported elements, such as `<li>`, `<ul>`, etc., are handled as plain `<div>` elements. Because of that treatment, CSS can often make unsupported elements resemble their browser equivalents more closely.

### Typography

Tags like `<i>` have no built-in UXP handling. To make their presentation appear as expected, add CSS such as:

```css
i,
em {
  font-style: italic;
}
strong {
  font-weight: bold;
}
q:before {
  content: "“";
}
q:after {
  content: "”";
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

Lists and list item elements are not supported by UXP's default element set. A basic unordered-list look can be recreated with CSS bullets:

```css
ul {
  margin-left: 1em;
}
li:before {
  content: "•";
  display: inline-block;
  text-align: center;
  margin-left: -1em;
  width: 1em;
}
```

### Ordered Lists

Ordered lists (`<ol>`) are outside UXP's supported element set. The workaround is to create each numbered entry yourself.

### Title

UXP does not use `<title>` for document metadata, and including it can make that content appear inside the plugin UI. Hide it with CSS:

```css
title {
  display: none;
}
```

## footer

**Since** UXP v3.0

For dialogs, `<footer>` helps place buttons against the right side. Using it is optional, and its styles remain overrideable.

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

Use this heading element for the top level of a document hierarchy.

Built-in theme awareness is not provided here. For theme-aware behavior, choose the related Spectrum UXP component, or make manual styles respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h1](https://developer.mozilla.org/en/docs/Web/HTML/Element/h1)

**Example**

```html
<h1>Hello, world!</h1>
```

### Spectrum UXP Correlate

In Spectrum UXP, comparable output is available through `sp-heading`.

```html
<sp-heading size="L">Hello, World</sp-heading>
```

## h2

**Since** UXP v2.0

Use this heading element for the second level of a document hierarchy.

Built-in theme awareness is not provided here. For theme-aware behavior, choose the related Spectrum UXP component, or make manual styles respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h2](https://developer.mozilla.org/en/docs/Web/HTML/Element/h2)

**Example**

```html
<h2>Hello, world!</h2>
```

### Spectrum UXP Correlate

In Spectrum UXP, comparable output is available through `sp-heading`.

```html
<sp-heading>Hello, World</sp-heading>
```

## h3

**Since** UXP v2.0

Use this heading element for the third level of a document hierarchy.

Built-in theme awareness is not provided here. For theme-aware behavior, choose the related Spectrum UXP component, or make manual styles respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h3](https://developer.mozilla.org/en/docs/Web/HTML/Element/h3)

**Example**

```html
<h3>Hello, world!</h3>
```

### Spectrum UXP Correlate

In Spectrum UXP, comparable output is available through `sp-heading`.

```html
<sp-heading size="XS">Hello, World</sp-heading>
```

## h4

**Since** UXP v2.0

Use this heading element for the fourth level of a document hierarchy.

Built-in theme awareness is not provided here. For theme-aware behavior, choose the related Spectrum UXP component, or make manual styles respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h4](https://developer.mozilla.org/en/docs/Web/HTML/Element/h4)

**Example**

```html
<h4>Hello, world!</h4>
```

## h5

**Since** UXP v2.0

Use this heading element for the fifth level of a document hierarchy.

Built-in theme awareness is not provided here. For theme-aware behavior, choose the related Spectrum UXP component, or make manual styles respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h5](https://developer.mozilla.org/en/docs/Web/HTML/Element/h5)

**Example**

```html
<h5>Hello, world!</h5>
```

### Spectrum UXP Correlate

In Spectrum UXP, comparable output is available through `sp-heading`.

```html
<sp-heading size="XXS">Hello, World</sp-heading>
```

## h6

**Since** UXP v2.0

Use this heading element for the sixth level of a document hierarchy.

Built-in theme awareness is not provided here. For theme-aware behavior, choose the related Spectrum UXP component, or make manual styles respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h6](https://developer.mozilla.org/en/docs/Web/HTML/Element/h6)

**Example**

```html
<h6>Hello, world!</h6>
```

## hr

**Since** UXP v2.0

Draws a horizontal rule.

The horizontal rule does not automatically adapt to the active theme. For theme-aware behavior, choose the related Spectrum UXP component, or make manual styles respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/hr](https://developer.mozilla.org/en/docs/Web/HTML/Element/hr)

**Example**

```html
<hr class="large" />
<hr class="medium" />
<hr class="small" />
```

### Spectrum UXP Correlate

With Spectrum UXP, use `sp-divider` for a comparable visual result.

```html
<sp-divider size="large"></sp-divider>
<sp-divider size="medium"></sp-divider>
<sp-divider size="small"></sp-divider>
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

Reference material for the supported subset of HTML elements and attributes.

### Pages in this section

- [General](uxp-reference-html.md)
- [Hierarchy](uxp-reference-html.md)

## See also

- [Unsupported](uxp-unsupported.md)
