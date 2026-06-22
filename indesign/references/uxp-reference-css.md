# General, Media Queries, Pseudo Classes, Pseudo Elements ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: calc; General; CSS Units; CSS Variables; CSS Reference; height; Media Queries; prefers-color-scheme; width; :active; :checked; :defined; :disabled; :enabled; :first-child; :focus; :hover; Pseudo-classes.

## calc

**Since** UXP v3.0

Within a CSS style rule, `calc` can evaluate arbitrary expressions.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/calc](https://developer.mozilla.org/en/docs/Web/CSS/calc)

**Example**

```css
.someElement {
  width: calc(100vh - 50px);
}
```

### Quirks and Exceptions

- `calc` applies to length values rather than colors. The numeric pieces inside an `rgb()` color can still use `calc`.

## General

- [calc](uxp-reference-css.md)
- [units](uxp-reference-css.md)
- [variables](uxp-reference-css.md)

## CSS Units

**Since** UXP v3.0

UXP includes several CSS units for easier layout work. Supported units are `em`, `rem`, `vh`, `vw`, `vmin`, `vmax`, `cm`, `mm`, `in`, `pc`, `pt`, `px`.

**See**: [https://developer.mozilla.org/en-US/docs/Web/CSS/`CSS_V`alues_and_Units#Relative_length_units](https://developer.mozilla.org/en-US/docs/Web/CSS/`CSS_V`alues_and_Units#Relative_length_units)

## CSS Variables

**Since** UXP v3.0

UXP allows CSS Variables, also called Custom Properties. Combined with the [prefers-color-scheme](uxp-reference-css.md) media query, they make custom themes easy to build so they can respond to the host application's selected theme.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/--\*](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## CSS Reference

Reference coverage for the CSS style categories and feature set that UXP exposes.

### Pages in this section

- [General](uxp-reference-css.md)
- [Media Queries](uxp-reference-css.md)
- [Pseudo-classes](uxp-reference-css.md)
- [Pseudo-elements](uxp-reference-css.md)
- [Selectors](uxp-reference-css.md)
- [Styles](uxp-styles.md)

## height

**Since** UXP v4.1

Use this media feature to limit CSS rules so they apply only when the plugin dialog or panel height satisfies the conditions you define.

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

- With multiple plugin panels, this calculation reads the first panel's dimensions only. Viewport-size media queries therefore become unreliable for plugins that expose two or more panels.

## Media Queries

- [height](uxp-reference-css.md)
- [prefers-color-scheme](uxp-reference-css.md)
- [width](uxp-reference-css.md)

## prefers-color-scheme

**Since** UXP v4.1

Use this media feature to scope CSS rules to the host application's current theme.

| Value | Ps | Xd |
| --- | --- | --- |
| `lightest` | ✓ | \* `light` ✓ – |
| `medium` | – | – `dark` ✓ – |
| `darkest` | ✓ | – \* XD provides just one theme. In XD 35, that case maps to the "lightest" theme. **Example** `css :root { --primary-color: #E8E8E8; /* default colors are for dark themes */ } @media (prefers-color-scheme: lightest), (prefers-color-scheme:light) { :root { --primary-color: #181818; /* override for light themes */ } } ` ### Known Issues _ Colors set through this media query can hit race conditions, particularly when styles are created and attached dynamically. The reliable points are plugin load and completion of a theme change. ## width **Since** UXP v4.1 Use this media feature to limit CSS rules so they apply only when the plugin dialog or panel width satisfies the conditions you define. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width) **Example** `css @media (max-width: 700px) { .someElement { background-color: red; } } ` ## :active **Since** UXP v3.0 Selects the element while it is in the active state. In UXP, an element enters that state during an active user click. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) **Example:** `css p:active { background-color: yellow; } ` ### Quirks and Exceptions _ A right-clicked element also counts as "active". _ After a double-click, the element cannot count as "active" again until the double-click detection timer has elapsed. ## :checked **Since** UXP v3.0 Selects the element when it is in the checked state. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) **Example:** `css input:checked { background-color: blue; } ` ### Quirks and Exceptions _ Applies only to `<input type="checkbox">`; Spectrum UXP components and radio buttons are not matched. For Spectrum UXP checkboxes, target an attribute selector such as `[checked]`. ## :defined **Since** UXP v6.0 Targets elements whose definitions already exist. **See:** [:defined](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined) **Syntax:** `css :defined { /* ... */ } ` **Example:** Shows styles being applied through `:defined` ### HTML `html <simple-custom text="Custom element example text"></simple-custom> <p>Standard paragraph example text</p> ` ### CSS ``css /* Give the `p` elements distinctive background */ p { background: yellow; } /* Both the custom and the built-in element are given italic text */ :defined { font-style: italic; } /* Only simple-custom element is applied with green background*/ simple-custom:defined { display: block; background: green; } `` ## :disabled **Since** UXP v3.0 Selects a disabled element. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled) **Example:** `css input:disabled { border: 1px solid blue; } ` ### Quirks and Exceptions _ Matches only `<input>` elements; Spectrum UXP components are outside its coverage. For Spectrum UXP checkboxes, target an attribute selector such as `[disabled]`. ## :enabled **Since** UXP v3.0 Selects empty elements. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) **Example:** `css div:empty { border: 1px solid blue; } ` ## :enabled **Since** UXP v3.0 Selects an enabled element. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled) **Example:** `css input:enabled { border: 1px solid blue; } ` ### Quirks and Exceptions _ Applies only to `<input>` elements; Spectrum UXP components are not covered. ## :first-child **Since** UXP v3.0 Selects the first child only. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) **Example:** `css sp-button:first-child { margin-left: 0; } ` ## :focus **Since** UXP v3.0 Selects the element that currently has focus. In this context, the active state corresponds to keyboard focus on that element. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) **Example:** `css input:focus { border: 1px solid red; } ` ### Quirks and Exceptions _ A normally non-interactive element needs a positive tab index before this rule can match it. ## :hover **Since** UXP v3.0 Applies while the selected element sits below the mouse pointer. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) **Example:** `css .well:hover { background-color: red; } ` ## Pseudo-classes _ [active](uxp-reference-css.md) _ [checked](uxp-reference-css.md) _ [defined](uxp-reference-css.md) _ [disabled](uxp-reference-css.md) _ [empty](uxp-reference-css.md) _ [enabled](uxp-reference-css.md) _ [first-child](uxp-reference-css.md) _ [focus](uxp-reference-css.md) _ [hover](uxp-reference-css.md) _ [last-child](uxp-reference-css.md) _ [nth-child](uxp-reference-css.md) _ [nth-last-child](uxp-reference-css.md) _ [nth-last-of-type](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-css/pseudo-classes/nth-last-of-type.md) _ [nth-of-type](uxp-reference-css.md) _ [only-child](uxp-reference-css.md) _ [root](uxp-reference-css.md) ## :last-child **Since** UXP v3.0 Applies only to the final child element. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) **Example:** `css sp-button:last-child { margin-right: 0; } ` ## :nth-child **Since** UXP v3.0 Applies to a child at the Nth position; the selector also accepts an expression, `even`, or `odd`. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) **Example:** ```css .row:nth-child(even) { background-color: #E8E8E8; /_ color even rows _/ } ``## :nth-last-child **Since** UXP v3.0 Applies to the Nth child counted from the end; an expression, `even`, or `odd` may supply the position rule. **See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child) **Example:**``css .row:nth-last-child(even) { background-color: #E8E8E8; /_ color even rows (from the end) \*/ } ``` ## :nth-of-type |

**Since** UXP v3.0

Applies to the Nth child among elements of the same type; an expression, `even`, or `odd` may define the match.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)

**Example:**

```css
.row:nth-of-type(even) {
  background-color: #e8e8e8;
}
```

## :only-child

**Since** UXP v3.0

Applies when an element has no sibling elements.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)

**Example:**

```css
.item:only-child {
  background-color: red;
}
```

## :root

**Since** UXP v3.0

Targets the plugin document root. Use it as a convenient place for custom properties and CSS variables.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

**Example:**

```css
:root {
  --theme-primary-color: red;
}
```

## ::after

**Since** UXP v3.0

Adds a pseudo-element after whatever element matched the selector.

**See:** [https://developer.mozilla.org/en-US/docs/Web/CSS/::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)

**Example:**

```css
.withCommas > *::after {
  content: ",";
}
```

## ::before

**Since** UXP v3.0

Adds a pseudo-element before whatever element matched the selector.

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
