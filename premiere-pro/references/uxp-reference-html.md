# General, Hierarchy

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: body; head; html; General; link; script; style; Unsupported Attributes; Unsupported Elements; footer; h1; h2; h3; h4; h5; h6; hr; Hierarchy.

## body

**Since** UXP v2.0

Represents the plugin's body element. For a plugin with multiple panels, the `<body>` tag maps to the first panel's contents, while each additional panel receives a `<uxp-panel>` element in the DOM for its matching body.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/body](https://developer.mozilla.org/en/docs/Web/HTML/Element/body)

**Example**

```html
<body>
  Hello, world
</body>
```

## head

**Since** UXP v2.0

Describes metadata for the UXP HTML document, including extra styles, scripts, and related document information.

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

Defines the UXP plugin UI root element.

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

These attributes are supported:

- `lang` - identifies the document language.

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

Connects to related external content. In UXP, use this tag to bring in an external stylesheet; other link purposes are outside the supported set.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/link](https://developer.mozilla.org/en/docs/Web/HTML/Element/link)

**Example**

```html
<link rel="stylesheet" href="stylesheet.css" />
```

## script

**Since** UXP v3.0

Fetches a script and runs it.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/script](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)

**Example**

```html
<script src="index.js"></script>
```

### Quirks

Photoshop may execute `<script>` elements inserted through the HTML5 DOM API, but plugins should not depend on that quirk because it creates serious security exposure. Reserve `<script>` tags for loading and running local, static content only.

## style

**Since** UXP v2.0

Defines stylesheet rules directly in the document.

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

These global attributes are not supported.

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
- `tabindex` (supported, but differs from the specification. Negative values do not receive focus; positive values can receive focus, but they cannot define tab order.)
- `translate`

For event handling, attach most listeners with `addEventListener` rather than using matching `on*` handler attributes.

## Unsupported Elements

Support is limited to the elements documented around this section. Elements outside that set, including `<li>`, `<ul>`, etc., behave like plain `<div>`s. Because of that fallback, CSS can usually make unsupported elements resemble their browser versions more closely.

### Typography

Tags including `<i>` are absent from the supported element set. You can still reproduce their appearance with CSS such as:

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

Lists and list items are not available as default UXP elements. A simple CSS rule set can still mimic an unordered bullet list.

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

Ordered lists (`<ol>`) are not supported in UXP. To achieve the same result, create each numbered item yourself.

### Title

`<title>` has no UXP role. If included, it can appear visibly inside the plugin, so hide it with project CSS like this:

```css
title {
  display: none;
}
```

## footer

**Since** UXP v3.0

In dialogs, `<footer>` helps position buttons along the dialog's right side. Using it is optional, and its styles remain available for override.

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

A heading element for the document hierarchy's first level.

Theme handling is not built into this element. For theme-aware headings, use the Spectrum UXP correlates or add your own styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h1](https://developer.mozilla.org/en/docs/Web/HTML/Element/h1)

**Example**

```html
<h1>Hello, world!</h1>
```

### Spectrum UXP Correlate

With Spectrum UXP, `sp-heading` can produce comparable output.

```html
<sp-heading size="L">Hello, World</sp-heading>
```

## h2

**Since** UXP v2.0

A heading element for the document hierarchy's second level.

Theme handling is not built into this element. For theme-aware headings, use the Spectrum UXP correlates or add your own styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h2](https://developer.mozilla.org/en/docs/Web/HTML/Element/h2)

**Example**

```html
<h2>Hello, world!</h2>
```

### Spectrum UXP Correlate

With Spectrum UXP, `sp-heading` can produce comparable output.

```html
<sp-heading>Hello, World</sp-heading>
```

## h3

**Since** UXP v2.0

A heading element for the document hierarchy's third level.

Theme handling is not built into this element. For theme-aware headings, use the Spectrum UXP correlates or add your own styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h3](https://developer.mozilla.org/en/docs/Web/HTML/Element/h3)

**Example**

```html
<h3>Hello, world!</h3>
```

### Spectrum UXP Correlate

With Spectrum UXP, `sp-heading` can produce comparable output.

```html
<sp-heading size="XS">Hello, World</sp-heading>
```

## h4

**Since** UXP v2.0

A heading element for the document hierarchy's fourth level.

Theme handling is not built into this element. For theme-aware headings, use the Spectrum UXP correlates or add your own styles that respond to `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h4](https://developer.mozilla.org/en/docs/Web/HTML/Element/h4)

**Example**

```html
<h4>Hello, world!</h4>
```

## h5

**Since** UXP v2.0

Use this heading element for the fifth level of a document hierarchy.

The element itself does **not** adapt to themes. For theme-aware UI, use the matching Spectrum UXP element, or apply manual styles that read the CSS media query `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h5](https://developer.mozilla.org/en/docs/Web/HTML/Element/h5)

**Example**

```html
<h5>Hello, world!</h5>
```

### Spectrum UXP Correlate

In Spectrum UXP, `sp-heading` provides a comparable visual result.

```html
<sp-heading size="XXS">Hello, World</sp-heading>
```

## h6

**Since** UXP v2.0

Use this heading element for the sixth level of a document hierarchy.

This element does **not** respond to themes on its own. To get theme-aware behavior, choose the corresponding Spectrum UXP element or style it yourself through the CSS media query `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/h6](https://developer.mozilla.org/en/docs/Web/HTML/Element/h6)

**Example**

```html
<h6>Hello, world!</h6>
```

## hr

**Since** UXP v2.0

Draws a horizontal rule.

The horizontal rule does **not** automatically track the active theme. For a theme-aware separator, use the related Spectrum UXP component, or supply manual styles keyed to the CSS media query `prefers-color-scheme`.

**See**: [https://developer.mozilla.org/en/docs/Web/HTML/Element/hr](https://developer.mozilla.org/en/docs/Web/HTML/Element/hr)

**Example**

```html
<hr class="large" />
<hr class="medium" />
<hr class="small" />
```

### Spectrum UXP Correlate

For Spectrum UXP interfaces, use `sp-divider` when you need similar rendering.

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

Reference material covers selected HTML elements and attributes that UXP supports.

### Pages in this section

- [General](uxp-reference-html.md)
- [Hierarchy](uxp-reference-html.md)
