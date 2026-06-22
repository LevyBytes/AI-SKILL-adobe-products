# Align Content, Align Items, Align Self, Background Attachment ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: align-content; align-items; align-self; background-attachment; background-color; background-image; background-repeat; background-size; background; border-bottom-color; border-bottom-left-radius; border-bottom-right-radius; border-bottom-style; border-bottom-width; border-bottom; border-color; border-left-color; border-left-style.

## align-content

**Since** UXP v3.0

Accepts the values `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/align-content](https://developer.mozilla.org/en/docs/Web/CSS/align-content)

**Example**

```css
.someElement {
  align-content: flex-start;
}
```

## align-items

**Since** UXP v3.0

Accepts the values `flex-start`, `flex-end`, `center`, `stretch`.

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

This controls how the background image is attached. UXP supports only `scroll`, and that is the default.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-attachment](https://developer.mozilla.org/en/docs/Web/CSS/background-attachment)

## background-color

**Since** UXP v2.0

Use this property to set an element background color. Color input can use these formats:

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

Use this for a background image. UXP can layer multiple background images and can use linear or radial gradients.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-image](https://developer.mozilla.org/en/docs/Web/CSS/background-image)

**Example**:

```css
.someElement {
  background-image: url("plugin://assets/star.png");
}
```

### Quirks and Exceptions

- Because background repeat is not yet supported, background images _do not_ repeat by default.

## background-repeat

**Since** UXP v3.0

For background repetition, UXP accepts only `no-repeat`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-repeat](https://developer.mozilla.org/en/docs/Web/CSS/background-repeat)

## background-size

**Since** UXP v3.0

Use this property to size background content; `cover` and `contain` are also accepted.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-size](https://developer.mozilla.org/en/docs/Web/CSS/background-size)

## background

**Since** UXP v2.0

This sets an element's background, including colors, multiple background images, and linear or radial gradients.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background](https://developer.mozilla.org/en/docs/Web/CSS/background)

**Example**:

```css
.someElement {
  background: url("plugin://assets/star.png") red;
}
```

## border-bottom-color

**Since** UXP v2.0

For an element, this defines the top border color. Color input can use these formats:

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

- Some Spectrum UXP components do not allow color overrides.
- A border color requires a border style to be present too.
- A border can use only one color; when several border colors are specified, the final one wins.

## border-bottom-left-radius

**Since** UXP v2.0

Controls the radius on the bottom-left border corner.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius)

### Quirks and Exceptions

- Border overrides are unavailable on some Spectrum UXP components.
- To clip an image, set `overflow: hidden`.

## border-bottom-right-radius

**Since** UXP v2.0

Controls the radius on the bottom-right border corner.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius)

## border-bottom-style

**Since** UXP v2.0

Use this to choose the bottom border [style](uxp-styles.md) that gets rendered.

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
- Side-specific border styles are not supported; apply border styles to the whole element instead.

## border-bottom-width

**Since** UXP v2.0

Controls how wide the bottom border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width)

### Quirks and Exceptions

- The `content-sizing` box layout model is not supported in UXP; for every element, width and height include padding plus border width.

## border-bottom

**Since** UXP v2.0

Use this shorthand to set the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> A border on an element can use only one color. If multiple border colors are supplied, the JavaScript console shows a warning.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom)

## border-color

**Since** UXP v2.0

For an element, this sets the border color. Color input can use these formats:

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

For an element, this property controls the top border color. It accepts these color formats:

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

Renders the left border using the supplied [style](uxp-styles.md).

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

Controls how wide the left border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-left-width](https://developer.mozilla.org/en/docs/Web/CSS/border-left-width)

## border-left

**Since** UXP v2.0

Use this shorthand to provide the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> A border on an element uses only one color. Providing more than one
> border color causes the JavaScript console to display a warning.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-left](https://developer.mozilla.org/en/docs/Web/CSS/border-left)

## border-radius

**Since** UXP v2.0

Provides the shorthand form for border radius settings.

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

For an element, this property controls the top border color. It accepts these color formats:

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

Renders the right border using the supplied [style](uxp-styles.md).

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

Controls how wide the right border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right-width](https://developer.mozilla.org/en/docs/Web/CSS/border-right-width)

## border-right

**Since** UXP v2.0

Use this shorthand to provide the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> A border on an element uses only one color. Providing more than one
> border color causes the JavaScript console to display a warning.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right](https://developer.mozilla.org/en/docs/Web/CSS/border-right)

## border-style

**Since** UXP v2.0

Chooses the rendered border type.

| Value | Rendering |
| --- | --- |
| `none` | No border |
| `solid` | A solid border |
| `dashed` | A dashed border |

CSS border styles outside this list resolve as `solid`; that includes `hidden`.

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

For an element, this property controls the top border color. It accepts these color formats:

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

Controls the radius for the top left border corner.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius)

## border-top-style

**Since** UXP v2.0

Renders the top border using the supplied [style](uxp-styles.md).

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

Controls how wide the top border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-width](https://developer.mozilla.org/en/docs/Web/CSS/border-top-width)

## border-top

**Since** UXP v2.0

Use this shorthand to provide the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> A border on an element uses only one color. Providing more than one
> border color causes the JavaScript console to display a warning.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top](https://developer.mozilla.org/en/docs/Web/CSS/border-top)

## border-width

**Since** UXP v2.0

Controls how wide the border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-width](https://developer.mozilla.org/en/docs/Web/CSS/border-width)

## bottom

**Since** UXP v2.0

Sets the bottom offset for an element positioned with relative or absolute layout.

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

For an element, this property controls the text color. It accepts these color formats:

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

Defines the element's layout behavior. Supported values are `none`, `inline`, `block`, `inline-block`, `flex`, and `inline-flex`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/display](https://developer.mozilla.org/en/docs/Web/CSS/display)

**Example**:

```css
.someElement {
  display: flex;
}
```

## flex-basis

**Since** UXP v3.0

In a flexible layout container, this property supplies the basis used to determine an item's size.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-basis](https://developer.mozilla.org/en/docs/Web/CSS/flex-basis)

**Example**

```css
.someElement {
  flex-basis: auto;
}
```

## flex-direction

**Since** UXP v3.0

Within a flexible container, this style chooses the stacking direction for items. The default value is `row`; accepted values are `row`, `row-reverse`, `column`, and `column-reverse`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-direction](https://developer.mozilla.org/en/docs/Web/CSS/flex-direction)

**Example**

```css
.someElement {
  flex-basis: column;
}
```

## flex-grow

**Since** UXP v3.0

In a flexible container, this setting decides whether an item may grow and how its expansion compares with nearby items around it.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-grow](https://developer.mozilla.org/en/docs/Web/CSS/flex-grow)

**Example**

```css
.someElement {
  flex-grow: 2;
}
```

## flex-shrink

**Since** UXP v3.0

In a flexible container, this setting decides whether an item may shrink and how its reduction compares with neighboring items around it.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink](https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink)

**Example**

```css
.someElement {
  flex-shrink: 0; /* item cannot shrink */
}
```

## flex-wrap

**Since** UXP v3.0

Inside a flexible container, this property sets whether items may wrap. Accepted values are `nowrap` (default) and `wrap`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap](https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap)

**Example**

```css
.someElement {
  flex-wrap: wrap;
}
```

## flex

**Since** UXP v3.0

Combines `flex-grow`, `flex-shrink`, plus `flex-basis` into one shorthand.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex](https://developer.mozilla.org/en/docs/Web/CSS/flex)

**Example**

```css
.someElement {
  flex: 1 0 auto; /* can grow, not shrink, auto basis */
}
```

## font-family

**Since** UXP v2.0

Chooses which font family renders the text for a particular element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-family](https://developer.mozilla.org/en/docs/Web/CSS/font-family)

**Example**

```css
.someElement {
  font-family: Helvetica, Arial, "Courier New";
}
```

### Quirks and Exceptions

- Font families such as `monospace`, `serif` or `sans-serif` are unsupported.
- When a requested font is unavailable, fallback fonts are checked until a match is available. If no fallback is found, UXP uses the host application's system font instead.
- By default, text uses the host's font family. To preserve the default look and feel, generally leave the font family unspecified.
- Text edit fields cannot override the font family.
- Some Spectrum UXP components cannot override the font family.

## font-size

**Since** UXP v2.0

Defines how large the font appears.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-size](https://developer.mozilla.org/en/docs/Web/CSS/font-size)

**Example**

```css
.someElement {
  font-size: 24pt;
}
```

### Quirks and Exceptions

- Text edit fields cannot set font size.
- Some Spectrum UXP components cannot override font size.

## font-style

**Since** UXP v2.0

Applies the font style for the element. Accepted values are `normal` (default) and `italic`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-style](https://developer.mozilla.org/en/docs/Web/CSS/font-style)

**Example**

```css
.someElement {
  font-style: italic;
}
```

### Quirks and Exceptions

- Text edit fields cannot override the font style.
- Some Spectrum UXP components cannot override the font style.

## font-weight

**Since** UXP v3.0

Applies the font weight for the element. Accepted values include `normal` (default), `bold`, `lighter`, and `bolder`; the numbered options are `50`, `100`, `200`, `300`, `400`, `500`, `550`, `600`, `700`, `800`, `850`, `900`, `950`, and `1000`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-weight](https://developer.mozilla.org/en/docs/Web/CSS/font-weight)

**Example**

```css
.someElement {
  font-weight: bold;
}
```

### Quirks and Exceptions

- Text edit fields cannot override the font weight.
- Some Spectrum UXP components cannot override the font weight.

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
- [min-height](uxp-styles-2.md)
- [min-width](uxp-styles-2.md)
- [opacity](uxp-styles-2.md)
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

For an element using relative or absolute positioning, this property assigns the left offset.

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

Adjusts the extra spacing inserted within text characters.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing)

**Example**

```css
.someElement {
  letter-spacing: 3px;
}
```

### Quirks and Exceptions

- Negative values are invalid and cause letters to print over one another.
- Some Spectrum UXP components cannot override letter spacing.

## margin-bottom

**Since** UXP v2.0

Sets the element's bottom margin.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom](https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom)

**Example**:

```css
.someElement {
  margin-bottom: 1em;
}
```

### Quirks and Exceptions

- UXP keeps margins from collapsing.

## margin-left

**Since** UXP v2.0

Sets the element's left margin.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-left](https://developer.mozilla.org/en/docs/Web/CSS/margin-left)

**Example**:

```css
.someElement {
  margin-left: 1em;
}
```

## margin-right

**Since** UXP v2.0

Sets the element's right margin.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-right](https://developer.mozilla.org/en/docs/Web/CSS/margin-right)

**Example**:

```css
.someElement {
  margin-right: 1em;
}
```

## margin-top

**Since** UXP v2.0

Sets the element's top margin.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-top](https://developer.mozilla.org/en/docs/Web/CSS/margin-top)

**Example**:

```css
.someElement {
  margin-top: 1em;
}
```

## margin

**Since** UXP v2.0

Controls margin spacing on all sides.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin](https://developer.mozilla.org/en/docs/Web/CSS/margin)

**Example**:

```css
.someElement {
  margin: 0 auto;
}
```

## max-height

**Since** UXP v2.0

Sets the greatest height an element may use.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/max-height](https://developer.mozilla.org/en/docs/Web/CSS/max-height)

**Example**:

```css
.someElement {
  max-height: 100px;
}
```

## max-width

**Since** UXP v2.0

Sets the greatest width an element may use.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/max-width](https://developer.mozilla.org/en/docs/Web/CSS/max-width)

**Example**:

```css
.someElement {
  max-width: 300px;
}
```
