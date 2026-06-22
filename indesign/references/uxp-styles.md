# Align Content, Align Items, Align Self, Background Attachment ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: align-content; align-items; align-self; background-attachment; background-color; background-image; background-repeat; background-size; background; border-bottom-color; border-bottom-left-radius; border-bottom-right-radius; border-bottom-style; border-bottom-width; border-bottom; border-color; border-left-color; border-left-style.

## align-content

**Since** UXP v3.0

Accepted values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/align-content](https://developer.mozilla.org/en/docs/Web/CSS/align-content)

**Example**

```css
.someElement {
  align-content: flex-start;
}
```

## align-items

**Since** UXP v3.0

Accepted values: `flex-start`, `flex-end`, `center`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/align-items](https://developer.mozilla.org/en/docs/Web/CSS/align-items)

**Example**

```css
.someElement {
  align-items: flex-start;
}
```

## align-self

**Since** UXP v3.0

Accepted values: `flex-start`, `flex-end`, `center`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/align-self](https://developer.mozilla.org/en/docs/Web/CSS/align-self)

**Example**

```css
.someElement {
  align-self: flex-start;
}
```

## background-attachment

**Since** UXP v3.0

Controls how the background image is attached. UXP accepts only `scroll`; it is the default value.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-attachment](https://developer.mozilla.org/en/docs/Web/CSS/background-attachment)

## background-color

**Since** UXP v2.0

Applies an element's background color. The following color formats are accepted:

- Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
- Hex colors
- RGB and RGBA colors
- HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
  backgorund-color: blue;
}
```

### Quirks and Exceptions

- Color overrides are unavailable on some Spectrum UXP components.

## background-image

**Since** UXP v2.0

Adds a background image. UXP also handles multiple background images, linear gradients, and radial gradients too.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-image](https://developer.mozilla.org/en/docs/Web/CSS/background-image)

**Example**:

```css
.someElement {
  background-image: url("plugin://assets/star.png");
}
```

### Quirks and Exceptions

- Background repeat is currently unsupported, so background images _do not_ tile automatically.

## background-repeat

**Since** UXP v3.0

For background repetition, the only accepted value is `no-repeat`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-repeat](https://developer.mozilla.org/en/docs/Web/CSS/background-repeat)

## background-size

**Since** UXP v3.0

Sets background content sizing, with `cover` and `contain` available as supported values.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-size](https://developer.mozilla.org/en/docs/Web/CSS/background-size)

## background

**Since** UXP v2.0

Defines an element's background. Accepted inputs include colors, multiple background images, radial gradients, and linear gradients too.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background](https://developer.mozilla.org/en/docs/Web/CSS/background)

**Example**:

```css
.someElement {
  background: url("plugin://assets/star.png") red;
}
```

## border-bottom-color

**Since** UXP v2.0

Applies the top border color for an element. The following color formats are accepted:

- Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
- Hex colors
- RGB and RGBA colors
- HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
  border-style: solid;
  border-bottom-color: blue;
}
```

### Quirks and Exceptions

- Border color overrides are unavailable on some Spectrum UXP components.
- A border style must be included when a border color is specified.
- Borders accept only one color; whichever border color is specified last takes precedence.

## border-bottom-left-radius

**Since** UXP v2.0

Controls the radius at the bottom-left border corner.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius)

### Quirks and Exceptions

- Border overrides are unavailable on some Spectrum UXP components.
- To clip an image, set `overflow: hidden`.

## border-bottom-right-radius

**Since** UXP v2.0

Controls the radius at the bottom-right border corner.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius)

## border-bottom-style

**Since** UXP v2.0

Chooses which [style](uxp-styles.md) is used for the bottom border.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style)

**Example**

```css
.button {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: white;
}
```

### Quirks and Exceptions

- Border overrides are unavailable on some Spectrum UXP components.
- Border styles cannot target individual sides; they apply only to the whole element.

## border-bottom-width

**Since** UXP v2.0

Controls the bottom border width.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width)

### Quirks and Exceptions

- UXP lacks support for the `content-sizing` box layout model. Therefore, every element's width and height are measured with padding and border width included.

## border-bottom

**Since** UXP v2.0

This shorthand assigns the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> UXP allows only one border color on an element. If several border colors
> are set, the JavaScript console reports a warning for that element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom)

## border-color

**Since** UXP v2.0

Defines an element's border color. These color formats are accepted:

- Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
- Hex colors
- RGB and RGBA colors
- HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
  border-style: solid;
  border-color: blue;
}
```

## border-left-color

**Since** UXP v2.0

Controls the top border color for an element. These color formats are accepted:

- Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
- Hex colors
- RGB and RGBA colors
- HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
  border-style: solid;
  border-left-color: blue;
}
```

## border-left-style

**Since** UXP v2.0

Chooses which [style](uxp-styles.md) the left border renders with.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-left-style](https://developer.mozilla.org/en/docs/Web/CSS/border-left-style)

**Example**

```css
.button {
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: white;
}
```

## border-left-width

**Since** UXP v2.0

Defines how wide the left border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-left-width](https://developer.mozilla.org/en/docs/Web/CSS/border-left-width)

## border-left

**Since** UXP v2.0

This shorthand assigns the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> UXP allows only one border color on an element. If several border colors
> are set, the JavaScript console reports a warning for that element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-left](https://developer.mozilla.org/en/docs/Web/CSS/border-left)

## border-radius

**Since** UXP v2.0

Use this shorthand when assigning the radius used on borders.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-radius)

**Example**

```css
.someElement {
  border-radius: 4px;
}
.card {
  border-radius: 4px 0;
}
```

## border-right-color

**Since** UXP v2.0

Controls the top border color for an element. These color formats are accepted:

- Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
- Hex colors
- RGB and RGBA colors
- HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
  border-style: solid;
  border-right-color: blue;
}
```

## border-right-style

**Since** UXP v2.0

Chooses which [style](uxp-styles.md) the right border renders with.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right-style](https://developer.mozilla.org/en/docs/Web/CSS/border-right-style)

**Example**

```css
.button {
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: white;
}
```

## border-right-width

**Since** UXP v2.0

Defines how wide the right border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right-width](https://developer.mozilla.org/en/docs/Web/CSS/border-right-width)

## border-right

**Since** UXP v2.0

This shorthand assigns the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> UXP allows only one border color on an element. If several border colors
> are set, the JavaScript console reports a warning for that element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right](https://developer.mozilla.org/en/docs/Web/CSS/border-right)

## border-style

**Since** UXP v2.0

Selects the rendered border type.

| Value | Rendering |
| --- | --- |
| `none` | No border |
| `solid` | A solid border |
| `dashed` | A dashed border |

Any CSS border style not listed here maps to `solid`; that includes `hidden`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-style](https://developer.mozilla.org/en/docs/Web/CSS/border-style)

**Example**

```css
.button {
  border-width: 2px;
  border-style: solid;
  border-color: white;
}
```

## border-top-color

**Since** UXP v2.0

Controls the top border color for an element. These color formats are accepted:

- Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
- Hex colors
- RGB and RGBA colors
- HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
  border-style: solid;
  border-top-color: blue;
}
```

## border-top-left-radius

**Since** UXP v2.0

Defines the radius applied to the top left border corner.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius)

## border-top-style

**Since** UXP v2.0

Chooses which [style](uxp-styles.md) the top border renders with.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-style](https://developer.mozilla.org/en/docs/Web/CSS/border-top-style)

**Example**

```css
.button {
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: white;
}
```

## border-top-width

**Since** UXP v2.0

Defines how wide the top border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-width](https://developer.mozilla.org/en/docs/Web/CSS/border-top-width)

## border-top

**Since** UXP v2.0

Use this shorthand to set the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> UXP allows only one border color on an element. If several border colors
> are set, the JavaScript console reports a warning for that element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top](https://developer.mozilla.org/en/docs/Web/CSS/border-top)

## border-width

**Since** UXP v2.0

Defines the border's width.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-width](https://developer.mozilla.org/en/docs/Web/CSS/border-width)

## bottom

**Since** UXP v2.0

For an element using relative or absolute positioning, this property defines its bottom position.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/bottom](https://developer.mozilla.org/en/docs/Web/CSS/bottom)

**Example**:

```css
.someElement {
  bottom: 0;
  position: absolute;
}
```

## color

**Since** UXP v2.0

Defines the element's text color. Accepted color syntaxes include:

- Named Colors (See [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js))
- Hex colors
- RGB and RGBA colors
- HSL and HSLA colors

**See**

- [https://developer.mozilla.org/en/docs/Web/CSS/color](https://developer.mozilla.org/en/docs/Web/CSS/color)
- [https://github.com/colorjs/color-name/blob/master/index.js](https://github.com/colorjs/color-name/blob/master/index.js)

**Example**

```css
.someElement {
  color: blue;
}
```

## display

**Since** UXP v3.0

Chooses how the element participates in layout. The accepted values are `none`, `inline`, `block`, `inline-block`, `flex`, and `inline-flex`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/display](https://developer.mozilla.org/en/docs/Web/CSS/display)

**Example**:

```css
.someElement {
  display: flex;
}
```

## flex-basis

**Since** UXP v3.0

Provides the starting size basis used for an item inside a flexbox.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-basis](https://developer.mozilla.org/en/docs/Web/CSS/flex-basis)

**Example**

```css
.someElement {
  flex-basis: auto;
}
```

## flex-direction

**Since** UXP v3.0

Sets the axis along which items are placed in the flexible container. `row` is the default, with `row`, `row-reverse`, `column`, and `column-reverse` available.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-direction](https://developer.mozilla.org/en/docs/Web/CSS/flex-direction)

**Example**

```css
.someElement {
  flex-basis: column;
}
```

## flex-grow

**Since** UXP v3.0

Indicates whether a flex item may expand and, when it can, how its growth compares with neighboring entries there.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-grow](https://developer.mozilla.org/en/docs/Web/CSS/flex-grow)

**Example**

```css
.someElement {
  flex-grow: 2;
}
```

## flex-shrink

**Since** UXP v3.0

Indicates whether a flex item may contract and, when it can, how its shrinkage compares with neighboring entries there.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink](https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink)

**Example**

```css
.someElement {
  flex-shrink: 0; /* item cannot shrink */
}
```

## flex-wrap

**Since** UXP v3.0

Specifies whether content may wrap inside a flexible container. Accepted values are `nowrap` (default) and `wrap`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap](https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap)

**Example**

```css
.someElement {
  flex-wrap: wrap;
}
```

## flex

**Since** UXP v3.0

Combines the `flex-grow`, `flex-shrink`, and `flex-basis` styles into one declaration.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex](https://developer.mozilla.org/en/docs/Web/CSS/flex)

**Example**

```css
.someElement {
  flex: 1 0 auto; /* can grow, not shrink, auto basis */
}
```

## font-family

**Since** UXP v2.0

Selects the font family used for text in the target element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-family](https://developer.mozilla.org/en/docs/Web/CSS/font-family)

**Example**

```css
.someElement {
  font-family: Helvetica, Arial, "Courier New";
}
```

### Quirks and Exceptions

- Font-family names such as `monospace`, `serif` or `sans-serif` are not supported.
- When a requested font cannot be found, UXP checks fallback fonts until one is available. If that search fails, it uses the host application's system font.
- The default family is the host font. To preserve the default appearance, generally leave the font family unspecified.
- Font-family overrides are unavailable for text edit fields.
- Some Spectrum UXP components do not allow the font family to be overridden.

## font-size

**Since** UXP v2.0

Defines the font's size.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-size](https://developer.mozilla.org/en/docs/Web/CSS/font-size)

**Example**

```css
.someElement {
  font-size: 24pt;
}
```

### Quirks and Exceptions

- Text edit fields cannot use font-size styling.
- Some Spectrum UXP components do not allow font-size overrides.

## font-style

**Since** UXP v2.0

Applies the element's font style. Accepted values are `normal` (default) and `italic`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-style](https://developer.mozilla.org/en/docs/Web/CSS/font-style)

**Example**

```css
.someElement {
  font-style: italic;
}
```

### Quirks and Exceptions

- Text edit fields cannot override the font style.
- Some Spectrum UXP components do not allow font-style overrides.

## font-weight

**Since** UXP v3.0

Chooses the element's font weight. Accepted named values are `normal` (default), `bold`, `lighter`, and `bolder`; numeric weights are also allowed: `50`, `100`, `200`, `300`, `400`, `500`, `550`, `600`, `700`, `800`, `850`, `900`, `950`, and `1000`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-weight](https://developer.mozilla.org/en/docs/Web/CSS/font-weight)

**Example**

```css
.someElement {
  font-weight: bold;
}
```

### Quirks and Exceptions

- Text edit fields cannot override font weight.
- Some Spectrum UXP components do not allow font-weight overrides.

## height

**Since** UXP v2.0

Defines an element's height.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/height](https://developer.mozilla.org/en/docs/Web/CSS/height)

**Example**:

```css
.someElement {
  height: 100vh;
}
```

## Styles

- [align-content](uxp-styles.md)
- [align-items](uxp-styles.md)
- [align-self](uxp-styles.md)
- [background-attachment](uxp-styles.md)
- [background-color](uxp-styles.md)
- [background-image](uxp-styles.md)
- [background-repeat](uxp-styles.md)
- [background-size](uxp-styles.md)
- [background](uxp-styles.md)
- [border-bottom-color](uxp-styles.md)
- [border-bottom-left-radius](uxp-styles.md)
- [border-bottom-right-radius](uxp-styles.md)
- [border-bottom-style](uxp-styles.md)
- [border-bottom-width](uxp-styles.md)
- [border-bottom](uxp-styles.md)
- [border-color](uxp-styles.md)
- [border-left-color](uxp-styles.md)
- [border-left-style](uxp-styles.md)
- [border-left-width](uxp-styles.md)
- [border-left](uxp-styles.md)
- [border-radius](uxp-styles.md)
- [border-right-color](uxp-styles.md)
- [border-right-style](uxp-styles.md)
- [border-right-width](uxp-styles.md)
- [border-right](uxp-styles.md)
- [border-style](uxp-styles.md)
- [border-top-color](uxp-styles.md)
- [border-top-left-radius](uxp-styles.md)
- [border-top-style](uxp-styles.md)
- [border-top-width](uxp-styles.md)
- [border-top](uxp-styles.md)
- [border-width](uxp-styles.md)
- [bottom](uxp-styles.md)
- [color](uxp-styles.md)
- [display](uxp-styles.md)
- [flex-basis](uxp-styles.md)
- [flex-direction](uxp-styles.md)
- [flex-grow](uxp-styles.md)
- [flex-shrink](uxp-styles.md)
- [flex-wrap](uxp-styles.md)
- [flex](uxp-styles.md)
- [font-family](uxp-styles.md)
- [font-size](uxp-styles.md)
- [font-style](uxp-styles.md)
- [font-weight](uxp-styles.md)
- [height](uxp-styles.md)
- [justify-content](uxp-styles.md)
- [left](uxp-styles.md)
- [letter-spacing](uxp-styles.md)
- [margin-bottom](uxp-styles.md)
- [margin-left](uxp-styles.md)
- [margin-right](uxp-styles.md)
- [margin-top](uxp-styles.md)
- [margin](uxp-styles.md)
- [max-height](uxp-styles.md)
- [max-width](uxp-styles.md)
- [min-height](uxp-styles.md)
- [min-width](uxp-styles.md)
- [opacity](uxp-styles.md)
- [overflow-x](uxp-styles-2.md)
- [overflow-y](uxp-styles-2.md)
- [overflow](uxp-styles-2.md)
- [padding-bottom](uxp-styles-2.md)
- [padding-left](uxp-styles-2.md)
- [padding-right](uxp-styles-2.md)
- [padding-top](uxp-styles-2.md)
- [padding](uxp-styles-2.md)
- [right](uxp-styles-2.md)
- [text-align](uxp-styles-2.md)
- [text-overflow](uxp-styles-2.md)
- [top](uxp-styles-2.md)
- [visibility](uxp-styles-2.md)
- [white-space](uxp-styles-2.md)
- [width](uxp-styles-2.md)

## justify-content

**Since** UXP v3.0

Use one of these values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/justify-content](https://developer.mozilla.org/en/docs/Web/CSS/justify-content)

**Example**

```css
.someElement {
  justify-content: flex-start;
}
```

## left

**Since** UXP v2.0

Sets the left offset for an element whose positioning is relative or absolute.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/left](https://developer.mozilla.org/en/docs/Web/CSS/left)

**Example**:

```css
.someElement {
  left: 0;
  position: absolute;
}
```

## letter-spacing

**Since** UXP v2.0

Adjusts letter-to-letter spacing.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing)

**Example**

```css
.someElement {
  letter-spacing: 3px;
}
```

### Quirks and Exceptions

- Negative values are invalid; using them causes the letters to print over one another.
- Some Spectrum UXP components do not allow letter-spacing overrides.

## margin-bottom

**Since** UXP v2.0

Defines the bottom margin for a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom](https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom)

**Example**:

```css
.someElement {
  margin-bottom: 1em;
}
```

### Quirks and Exceptions

- In UXP, margins remain separate rather than collapsing.

## margin-left

**Since** UXP v2.0

Defines the left margin for a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-left](https://developer.mozilla.org/en/docs/Web/CSS/margin-left)

**Example**:

```css
.someElement {
  margin-left: 1em;
}
```

## margin-right

**Since** UXP v2.0

Defines the right margin for a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-right](https://developer.mozilla.org/en/docs/Web/CSS/margin-right)

**Example**:

```css
.someElement {
  margin-right: 1em;
}
```

## margin-top

**Since** UXP v2.0

Defines the top margin for a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-top](https://developer.mozilla.org/en/docs/Web/CSS/margin-top)

**Example**:

```css
.someElement {
  margin-top: 1em;
}
```

## margin

**Since** UXP v2.0

Configures margin values for a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin](https://developer.mozilla.org/en/docs/Web/CSS/margin)

**Example**:

```css
.someElement {
  margin: 0 auto;
}
```

## max-height

**Since** UXP v2.0

Sets a ceiling for a UI node's height.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/max-height](https://developer.mozilla.org/en/docs/Web/CSS/max-height)

**Example**:

```css
.someElement {
  max-height: 100px;
}
```

## max-width

**Since** UXP v2.0

Sets a ceiling for a UI node's width.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/max-width](https://developer.mozilla.org/en/docs/Web/CSS/max-width)

**Example**:

```css
.someElement {
  max-width: 300px;
}
```

## min-height

**Since** UXP v2.0

Sets a floor for a UI node's height.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/min-height](https://developer.mozilla.org/en/docs/Web/CSS/min-height)

**Example**:

```css
.someElement {
  min-height: 100vh;
}
```

## min-width

**Since** UXP v2.0

Sets a floor for a UI node's width.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/min-width](https://developer.mozilla.org/en/docs/Web/CSS/min-width)

**Example**:

```css
.someElement {
  min-width: 300px;
}
```

## opacity

**Since :** UXP v2.0

Opacity is applied to the element; 0 means transparent and 1 means opaque.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/opacity](https://developer.mozilla.org/en/docs/Web/CSS/opacity)

### Quirks and Exceptions

- In Photoshop 22.0.0, this property is unsupported even though UXP will still parse it. Avoid relying on this style to manage visibility.
