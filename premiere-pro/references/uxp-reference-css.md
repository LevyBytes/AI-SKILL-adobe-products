# General, Media Queries, Pseudo Classes, Pseudo Elements ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: calc; General; CSS Units; CSS Variables; CSS Reference; height; Media Queries; prefers-color-scheme; width; :active; :checked; :defined; :disabled; :empty; :enabled; :first-child; :focus; :hover.

## calc

**Since** UXP v3.0

Within CSS style rules, `calc` can evaluate arbitrary expressions.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/calc](https://developer.mozilla.org/en/docs/Web/CSS/calc)

**Example**

```css
.someElement {
  width: calc(100vh - 50px);
}
```

### Quirks and Exceptions

- `calc` applies to length values, not colors. You _can_, however, use `calc` for the numeric parts of an `rgb()` color.

## General

- [calc](uxp-reference-css.md)
- [units](uxp-reference-css.md)
- [variables](uxp-reference-css.md)

## CSS Units

**Since** UXP v3.0

For easier layout sizing, UXP recognizes these CSS units: `em`, `rem`, `vh`, `vw`, `vmin`, `vmax`, `cm`, `mm`, `in`, `pc`, `pt`, `px`.

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/`CSS_V`alues_and_Units#Relative_length_units](https://developer.mozilla.org/en-US/docs/Web/CSS/`CSS_V`alues_and_Units#Relative_length_units)

## CSS Variables

**Since** UXP v3.0

UXP can use CSS Variables, also called Custom Properties. Pair that with [prefers-color-scheme](uxp-reference-css.md), and a plugin can build custom themes that follow the selected theme inside the app hosting the plugin.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/--\*](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## CSS Reference

Technical reference for the CSS style categories and feature support available in UXP.

### Pages in this section

- [General](uxp-reference-css.md)
- [Media Queries](uxp-reference-css.md)
- [Pseudo-classes](uxp-reference-css.md)
- [Pseudo-elements](uxp-reference-css.md)
- [Selectors](uxp-reference-css.md)
- [Styles](uxp-styles.md)

## height

**Since** UXP v4.1

Use this media feature to apply a group of CSS rules only when the plugin dialog or panel height satisfies the criteria you set.

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

- For plugins with multiple panels, this calculation uses only the first panel's size. Therefore, viewport-size media queries are usually not meaningful once a plugin has two or more panels.

## Media Queries

- [height](uxp-reference-css.md)
- [prefers-color-scheme](uxp-reference-css.md)
- [width](uxp-reference-css.md)

## prefers-color-scheme

**Since** UXP v4.1

Use this media feature to limit a CSS rule set to the particular theme active in the app hosting the plugin.

| Value | Ps | Xd |
| --- | --- | --- |
| `lightest` | ✓ | \* `light` ✓ – |
| `medium` | – | – `dark` ✓ – |
| `darkest` | ✓ | – \* XD has only one theme; in XD 35 this value maps to the "lightest" theme. **Example** `css :root { --primary-color: #E8E8E8; /* default colors are for dark themes */ } @media (prefers-color-scheme: lightest), (prefers-color-scheme:light) { :root { --primary-color: #181818; /* override for light themes */ } } ` ### Known Issues _ Color application from this media query can sometimes hit race conditions, especially when styles are created first and applied dynamically afterward. Colors are generally reliable only during plugin load or after a theme change has finished. ## width **Since** UXP v4.1 Use this media feature to apply a group of CSS rules only when the plugin dialog or panel width satisfies the criteria you set. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width) **Example** `css @media (max-width: 700px) { .someElement { background-color: red; } } ` ## :active **Since** UXP v3.0 The `:active` pseudo-class applies during an active interaction with the chosen element. In UXP, an active user click is enough to put that element into the active state. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) **Example:** `css p:active { background-color: yellow; } ` ### Quirks and Exceptions _ Right-clicking an element also puts it in the "active" state. _ After a double-click on an element, it cannot qualify as "active" again until the double-click detection timer has expired. ## :checked **Since** UXP v3.0 This pseudo-class targets elements in the checked state. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) **Example:** `css input:checked { background-color: blue; } ` ### Quirks and Exceptions _ Only `<input type="checkbox">` is supported. Spectrum UXP components and radio buttons are not supported. For Spectrum UXP checkboxes, use an attribute selector (e.g., `[checked]`). ## :defined **Since** UXP v6.0 Targets every element after its definition is available. **See:** [:defined](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined) **Syntax:** `css :defined { /* ... */ } ` **Example:** Shows styles applied through `:defined` ### HTML `html <simple-custom text="Custom element example text"></simple-custom> <p>Standard paragraph example text</p> ` ### CSS ``css /* Give the `p` elements distinctive background */ p { background: yellow; } /* Both the custom and the built-in element are given italic text */ :defined { font-style: italic; } /* Only simple-custom element is applied with green background*/ simple-custom:defined { display: block; background: green; } `` ## :disabled **Since** UXP v3.0 Disabled elements are selected by this pseudo-class. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled) **Example:** `css input:disabled { border: 1px solid blue; } ` ### Quirks and Exceptions _ Only `<input>` elements are supported. Spectrum UXP components are not supported. For Spectrum UXP checkboxes, use an attribute selector (e.g., `[disabled]`). ## :empty **Since** UXP v3.0 Elements with an empty child list are selected by this pseudo-class. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) **Example:** `css div:empty { border: 1px solid blue; } ` ## :enabled **Since** UXP v3.0 Enabled elements are selected by this pseudo-class. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled) **Example:** `css input:enabled { border: 1px solid blue; } ` ### Quirks and Exceptions _ Only `<input>` elements match; Spectrum UXP components are not supported. ## :first-child **Since** UXP v3.0 Selects an element only when it is the first child of its parent. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) **Example:** `css sp-button:first-child { margin-left: 0; } ` ## :focus **Since** UXP v3.0 Applies to the selected element while it has focus; in practice, keyboard focus is currently on that element. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) **Example:** `css input:focus { border: 1px solid red; } ` ### Quirks and Exceptions _ A normally non-interactive element is eligible for this rule only when its tab index is positive. ## :hover **Since** UXP v3.0 Applies while the chosen element is directly below the pointer. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) **Example:** `css .well:hover { background-color: red; } ` ## Pseudo-classes _ [active](uxp-reference-css.md) _ [checked](uxp-reference-css.md) _ [defined](uxp-reference-css.md) _ [disabled](uxp-reference-css.md) _ [empty](uxp-reference-css.md) _ [enabled](uxp-reference-css.md) _ [first-child](uxp-reference-css.md) _ [focus](uxp-reference-css.md) _ [hover](uxp-reference-css.md) _ [last-child](uxp-reference-css.md) _ [nth-child](uxp-reference-css.md) _ [nth-last-child](uxp-reference-css.md) _ [nth-last-of-type](uxp-reference-css.md) _ [nth-of-type](uxp-reference-css.md) _ [only-child](uxp-reference-css.md) _ [root](uxp-reference-css.md) ## :last-child **Since** UXP v3.0 Selects an element only when it is the final child of its parent. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) **Example:** `css sp-button:last-child { margin-right: 0; } ` ## :nth-child **Since** UXP v3.0 Selects the Nth child only; accepted selector inputs include an expression plus `even` and `odd`. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) **Example:** ```css .row:nth-child(even) { background-color: #E8E8E8; /_ color even rows _/ } ``## :nth-last-child **Since** UXP v3.0 Counts from the end and selects only the Nth child; expressions, `even`, and `odd` are accepted. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child) **Example:**``css .row:nth-last-child(even) { background-color: #E8E8E8; /_ color even rows (from the end) \*/ } ``` ## :nth-last-of-type |

**Since** UXP v3.0

Within a specific element type, counts backward from the end and selects only the Nth child; expressions, `even`, and `odd` are allowed.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type)

**Example:**

```css
.row:nth-last-of-type(even) {
  background-color: #e8e8e8;
}
```

## :nth-of-type

**Since** UXP v3.0

Within a specified element type, selects only the Nth child; expressions, `even`, and `odd` are allowed.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)

**Example:**

```css
.row:nth-of-type(even) {
  background-color: #e8e8e8;
}
```

## :only-child

**Since** UXP v3.0

Selects an element only when that element has no sibling elements.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)

**Example:**

```css
.item:only-child {
  background-color: red;
}
```

## :root

**Since** UXP v3.0

Targets the plugin document root. Use this element as a convenient place for custom properties and CSS variables.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

**Example:**

```css
:root {
  --theme-primary-color: red;
}
```

## ::after

**Since** UXP v3.0

Adds a pseudo-element after the element that the selector matched.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)

**Example:**

```css
.withCommas > *::after {
  content: ",";
}
```

## ::before

**Since** UXP v3.0

Adds a pseudo-element before the element that the selector matched.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)

**Example:**

```css
.addBullet > *::before
    content: "â€¢";
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
