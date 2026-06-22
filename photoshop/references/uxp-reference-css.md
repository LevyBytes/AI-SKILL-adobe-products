# General, Media Queries, Pseudo Classes, Pseudo Elements ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: calc; General; CSS Units; CSS Variables; CSS Reference; height; Media Queries; prefers-color-scheme; width; :active; :checked; :defined; :disabled; :empty; :enabled; :first-child; :focus; :hover.

## calc

**Since** UXP v3.0

Inside a CSS style rule, `calc` evaluates arbitrary expressions.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/calc](https://developer.mozilla.org/en/docs/Web/CSS/calc)

**Example**

```css
.someElement {
  width: calc(100vh - 50px);
}
```

### Quirks and Exceptions

- `calc` applies to length values rather than colors. You _can_, however, use `calc` for numeric parts inside an `rgb()` color.

## General

- [calc](uxp-reference-css.md)
- [units](uxp-reference-css.md)
- [variables](uxp-reference-css.md)

## CSS Units

**Since** UXP v3.0

UXP includes several CSS units for easier layout work: `em`, `rem`, `vh`, `vw`, `vmin`, `vmax`, `cm`, `mm`, `in`, `pc`, `pt`, `px`.

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/`CSS_V`alues_and_Units#Relative_length_units](https://developer.mozilla.org/en-US/docs/Web/CSS/`CSS_V`alues_and_Units#Relative_length_units)

## CSS Variables

**Since** UXP v3.0

UXP can use CSS Variables, also called Custom Properties. Together with the [prefers-color-scheme](uxp-reference-css.md) media query, this support makes custom themes straightforward when they need to respond to the host application's selected theme.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/--\*](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## CSS Reference

Reference material covering the CSS styles and features that UXP makes available.

### Pages in this section

- [General](uxp-reference-css.md)
- [Media Queries](uxp-reference-css.md)
- [Pseudo-classes](uxp-reference-css.md)
- [Pseudo-elements](uxp-reference-css.md)
- [Selectors](uxp-reference-css.md)
- [Styles](uxp-styles.md)

## height

**Since** UXP v4.1

Lets a group of CSS rules apply only when the plugin dialog or panel size matches the criteria you specify.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height)

**Example**

```css
@media (max-height: 700px) {
  .someElement {
    background-color: red;
  }
}
```

### Known Issues

- If a plugin includes multiple panels, this calculation uses only the first panel's size. Because of that, viewport-size media queries are not very meaningful for plugins with two or more panels.

## Media Queries

- [height](uxp-reference-css.md)
- [prefers-color-scheme](uxp-reference-css.md)
- [width](uxp-reference-css.md)

## prefers-color-scheme

**Since** UXP v4.1

Use this media query to scope CSS rules so they apply only while the host application is using the requested theme.

| Value | Ps | Xd |
| --- | --- | --- |
| `lightest` | ✓ | \* `light` ✓ – |
| `medium` | – | – `dark` ✓ – |
| `darkest` | ✓ | – \* XD has only one theme; in XD 35, this condition maps to the "lightest" theme. **Example** `css :root { --primary-color: #E8E8E8; /* default colors are for dark themes */ } @media (prefers-color-scheme: lightest), (prefers-color-scheme:light) { :root { --primary-color: #181818; /* override for light themes */ } } ` ### Known Issues _ Color application from this media query can run into occasional race conditions, particularly when styles are created and applied dynamically. Colors are reliably correct mainly at plugin load time and after a theme switch has finished. ## width **Since** UXP v4.1 Use this media query to limit CSS rules by the plugin dialog or panel width that satisfies the criteria you set. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width) **Example** `css @media (max-width: 700px) { .someElement { background-color: red; } } ` ## :active **Since** UXP v3.0 Selects the chosen element while it is in the active state. UXP treats the element as active while the user is pressing it. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) **Example:** `css p:active { background-color: yellow; } ` ### Quirks and Exceptions _ Right-clicking an element also puts it in the "active" state. _ After a double-click, the element cannot be treated as "active" again until the double-click detection timer has expired. ## :checked **Since** UXP v3.0 Applies to checked selections. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) **Example:** `css input:checked { background-color: blue; } ` ### Quirks and Exceptions _ This selector applies only to `<input type="checkbox">`; Spectrum UXP components and radio buttons are not supported. For Spectrum UXP checkboxes, target an attribute selector instead (e.g., `[checked]`). ## :defined **Since** UXP v6.0 Applies after element definitions are available. **See:** [:defined](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined) **Syntax:** `css :defined { /* ... */ } ` **Example:** Shows how styles can be applied with `:defined` ### HTML `html <simple-custom text="Custom element example text"></simple-custom> <p>Standard paragraph example text</p> ` ### CSS ``css /* Give the `p` elements distinctive background */ p { background: yellow; } /* Both the custom and the built-in element are given italic text */ :defined { font-style: italic; } /* Only simple-custom element is applied with green background*/ simple-custom:defined { display: block; background: green; } `` ## :disabled **Since** UXP v3.0 Applies to disabled selections. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled) **Example:** `css input:disabled { border: 1px solid blue; } ` ### Quirks and Exceptions _ This selector applies only to `<input>` elements, not Spectrum UXP components. For Spectrum UXP checkboxes, target an attribute selector instead (e.g., `[disabled]`). ## :empty **Since** UXP v3.0 Applies to elements without child nodes. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) **Example:** `css div:empty { border: 1px solid blue; } ` ## :enabled **Since** UXP v3.0 Applies to enabled selections. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled) **Example:** `css input:enabled { border: 1px solid blue; } ` ### Quirks and Exceptions _ This selector applies only to `<input>` elements; Spectrum UXP components are outside its support. ## :first-child **Since** UXP v3.0 Targets child number one. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) **Example:** `css sp-button:first-child { margin-left: 0; } ` ## :focus **Since** UXP v3.0 Selects the chosen element when it has focus. UXP treats the element as focused when keyboard focus is on that element. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) **Example:** `css input:focus { border: 1px solid red; } ` ### Quirks and Exceptions _ For a normally non-interactive element to match this rule, it needs a positive tab index. ## :hover **Since** UXP v3.0 Selects the chosen element when the mouse cursor is over it. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) **Example:** `css .well:hover { background-color: red; } ` ## Pseudo-classes _ [active](uxp-reference-css.md) _ [checked](uxp-reference-css.md) _ [defined](uxp-reference-css.md) _ [disabled](uxp-reference-css.md) _ [empty](uxp-reference-css.md) _ [enabled](uxp-reference-css.md) _ [first-child](uxp-reference-css.md) _ [focus](uxp-reference-css.md) _ [hover](uxp-reference-css.md) _ [last-child](uxp-reference-css.md) _ [nth-child](uxp-reference-css.md) _ [nth-last-child](uxp-reference-css.md) _ [nth-last-of-type](uxp-reference-css.md) _ [nth-of-type](uxp-reference-css.md) _ [only-child](uxp-reference-css.md) _ [root](uxp-reference-css.md) ## :last-child **Since** UXP v3.0 Targets the child at the end. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) **Example:** `css sp-button:last-child { margin-right: 0; } ` ## :nth-child **Since** UXP v3.0 Targets child position N. The selector accepts an expression, `odd`, or `even`. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) **Example:** ```css .row:nth-child(even) { background-color: #E8E8E8; /_ color even rows _/ } ``## :nth-last-child **Since** UXP v3.0 From the end of the sibling list, this selector targets only the Nth child. The selector accepts an expression, `even`, or `odd`. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child) **Example:**``css .row:nth-last-child(even) { background-color: #E8E8E8; /_ color even rows (from the end) \*/ } ``` ## :nth-last-of-type |

**Since** UXP v3.0

Counting backward through siblings, this selector chooses the Nth child whose element type matches. Use an expression, `even`, or `odd`.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type)

**Example:**

```css
.row:nth-last-of-type(even) {
  background-color: #e8e8e8;
}
```

## :nth-of-type

**Since** UXP v3.0

Among siblings of the same element type, this selector picks the Nth child. It can take an expression, `even`, or `odd`.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)

**Example:**

```css
.row:nth-of-type(even) {
  background-color: #e8e8e8;
}
```

## :only-child

**Since** UXP v3.0

An element is selected only when it has no siblings.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)

**Example:**

```css
.item:only-child {
  background-color: red;
}
```

## :root

**Since** UXP v3.0

Targets the plugin document's root element. Custom properties and CSS variables can be attached there.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

**Example:**

```css
:root {
  --theme-primary-color: red;
}
```

## ::after

**Since** UXP v3.0

Adds a pseudo-element after the element that matches.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)

**Example:**

```css
.withCommas > *::after {
  content: ",";
}
```

## ::before

**Since** UXP v3.0

Adds a pseudo-element before the element that matches.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)

**Example:**

```css
.addBullet > *::before
    content: "•";
}
```

## Pseudo-elements

- [after](uxp-reference-css.md)
- [before](uxp-reference-css.md)

## Adjacent Sibling combinator

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)

**Example**

```css
sp-action-button + sp-action-button {
  margin-right: 0;
}
```

## Attribute selector

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

**Example**

```css
div[data-row] {
  border: 1px solid red;
}
```

## Child combinator

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)

**Example**

```css
footer > sp-button {
  margin: 12px;
}
```

## Class selector

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

**Example**

```css
sp-action-button.icon-only {
  padding: 0;
}
```

## Descendant combinator

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)

**Example**

```css
footer sp-button {
  margin: 12px;
}
```

## General Sibling combinator

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)

**Example**

```css
sp-action-button ~ sp-button {
  margin-right: 0;
}
```

## Identifier selector

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)

**Example**

```css
#danger {
  background-color: red;
}
```

## Selectors

- [Adjacent Sibling combinator](uxp-reference-css.md)
- [Attribute selector](uxp-reference-css.md)
- [Child combinator](uxp-reference-css.md)
- [Class selector](uxp-reference-css.md)
- [Descendant combinator](uxp-reference-css.md)
- [General Sibling combinator](uxp-reference-css.md)
- [Identifier selector](uxp-reference-css.md)
- [Type selector](uxp-reference-css.md)
- [Universal selector](uxp-reference-css.md)

## Type selector

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)

**Example**

```css
sp-action-button {
  margin-right: 0;
}
```

## Universal selector

**Since** UXP v3.0

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors)

**Example**

```css
* {
  border: 1px solid red;
}
```

## See also

- [Known Issues](uxp-known-issues.md)
