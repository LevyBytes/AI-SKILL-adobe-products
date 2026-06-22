# Align Content, Align Items, Align Self, Background Attachment ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: align-content; align-items; align-self; background-attachment; background-color; background-image; background-repeat; background-size; background; border-bottom-color; border-bottom-left-radius; border-bottom-right-radius; border-bottom-style; border-bottom-width; border-bottom; border-color; border-left-color; border-left-style.

## align-content

**Since** UXP v3.0

Allowed values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/align-content](https://developer.mozilla.org/en/docs/Web/CSS/align-content)

**Example**

```css
.someElement {
  align-content: flex-start;
}
```

## align-items

**Since** UXP v3.0

Allowed values: `flex-start`, `flex-end`, `center`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/align-items](https://developer.mozilla.org/en/docs/Web/CSS/align-items)

**Example**

```css
.someElement {
  align-items: flex-start;
}
```

## align-self

**Since** UXP v3.0

Allowed values: `flex-start`, `flex-end`, `center`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/align-self](https://developer.mozilla.org/en/docs/Web/CSS/align-self)

**Example**

```css
.someElement {
  align-self: flex-start;
}
```

## background-attachment

**Since** UXP v3.0

The background image attachment mode is set here. UXP supports only `scroll`, which is the default.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-attachment](https://developer.mozilla.org/en/docs/Web/CSS/background-attachment)

## background-color

**Since** UXP v2.0

Use this property to give an element a background color. These color syntaxes are accepted:

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

Apply a background image with this property. Multiple background images are supported, and linear and radial gradients are also accepted.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-image](https://developer.mozilla.org/en/docs/Web/CSS/background-image)

**Example**:

```css
.someElement {
  background-image: url("plugin://assets/star.png");
}
```

### Quirks and Exceptions

- Background repeat is not yet available, so background images do _not_ repeat by default.

## background-repeat

**Since** UXP v3.0

For background repetition, UXP accepts only `no-repeat`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-repeat](https://developer.mozilla.org/en/docs/Web/CSS/background-repeat)

## background-size

**Since** UXP v3.0

Use this property to control the background content size. The values `cover` and `contain` are supported too.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background-size](https://developer.mozilla.org/en/docs/Web/CSS/background-size)

## background

**Since** UXP v2.0

Use `background` to define an element's background. It can include colors, multiple background images, plus linear and radial gradients.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/background](https://developer.mozilla.org/en/docs/Web/CSS/background)

**Example**:

```css
.someElement {
  background: url("plugin://assets/star.png") red;
}
```

## border-bottom-color

**Since** UXP v2.0

Use this property for an element's top border color. These color syntaxes are accepted:

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

- Some Spectrum UXP components do not permit color overrides.
- A border color declaration also needs a border style.
- Borders accept only one color; when multiple border colors are specified, the final one wins.

## border-bottom-left-radius

**Since** UXP v2.0

This sets the radius for the bottom-left border corner.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius)

### Quirks and Exceptions

- Some Spectrum UXP components do not permit border overrides.
- To crop image content, set `overflow: hidden`.

## border-bottom-right-radius

**Since** UXP v2.0

Controls the radius on the bottom right corner of the border.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius)

## border-bottom-style

**Since** UXP v2.0

Uses [style](uxp-styles.md) to choose the visual style drawn for the bottom border.

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

- Some Spectrum UXP components do not permit border overrides.
- UXP applies border styles only to a whole element, not to individual sides.

## border-bottom-width

**Since** UXP v2.0

Controls how thick the bottom border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width)

### Quirks and Exceptions

- UXP does not implement the `content-sizing` box layout model. Therefore, each element's width and height already include padding and border width.

## border-bottom

**Since** UXP v2.0

Single declaration form for the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> A border on an element is limited to one color. Supplying more than one
> border color causes a warning to appear in the JavaScript console.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-bottom](https://developer.mozilla.org/en/docs/Web/CSS/border-bottom)

## border-color

**Since** UXP v2.0

Defines an element's border color. UXP accepts these color formats:

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

Defines the element's top border color. UXP accepts these color formats:

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

Uses [style](uxp-styles.md) to choose the visual style drawn for the left border.

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

Controls how thick the left border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-left-width](https://developer.mozilla.org/en/docs/Web/CSS/border-left-width)

## border-left

**Since** UXP v2.0

Single declaration form for the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> A border on an element is limited to one color. Supplying more than one
> border color causes a warning to appear in the JavaScript console.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-left](https://developer.mozilla.org/en/docs/Web/CSS/border-left)

## border-radius

**Since** UXP v2.0

Single declaration form for border radius values.

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

Defines the element's top border color. UXP accepts these color formats:

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

Uses [style](uxp-styles.md) to choose the visual style drawn for the right border.

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

Controls how thick the right border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right-width](https://developer.mozilla.org/en/docs/Web/CSS/border-right-width)

## border-right

**Since** UXP v2.0

Single declaration form for the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md).

> **Warning**
>
> A border on an element is limited to one color. Supplying more than one
> border color causes a warning to appear in the JavaScript console.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-right](https://developer.mozilla.org/en/docs/Web/CSS/border-right)

## border-style

**Since** UXP v2.0

Chooses which border style UXP should draw.

| Value | Rendering |
| --- | --- |
| `none` | No border |
| `solid` | A solid border |
| `dashed` | A dashed border |

UXP maps every other CSS border style to `solid`, including `hidden`.

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

Defines the element's top border color. UXP accepts these color formats:

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

Controls the radius on the top left corner of the border.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius](https://developer.mozilla.org/en/docs/Web/CSS/border-top-left-radius)

## border-top-style

**Since** UXP v2.0

Top-edge border rendering takes its [style](uxp-styles.md) value from this property.

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

Use this property to choose how wide the top border is.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top-width](https://developer.mozilla.org/en/docs/Web/CSS/border-top-width)

## border-top

**Since** UXP v2.0

Use this shorthand when setting the top border's [style](uxp-styles.md), [color](uxp-styles.md), and [width](uxp-styles.md) together.

> **Warning**
>
> A border on one element is limited to one color. Supplying
> more than one border color causes a warning in the console for JavaScript messages.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-top](https://developer.mozilla.org/en/docs/Web/CSS/border-top)

## border-width

**Since** UXP v2.0

Use this property to choose the overall border width.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/border-width](https://developer.mozilla.org/en/docs/Web/CSS/border-width)

## bottom

**Since** UXP v2.0

For relatively or absolutely positioned elements, this property supplies the bottom position.

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

This property chooses an element's text color. The accepted color formats are:

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

This property selects the element's layout behavior. Supported values are `none`, `inline`, `block`, `inline-block`, `flex`, and `inline-flex`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/display](https://developer.mozilla.org/en/docs/Web/CSS/display)

**Example**:

```css
.someElement {
  display: flex;
}
```

## flex-basis

**Since** UXP v3.0

In a flexible layout container, this property provides the starting basis used to size an item.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-basis](https://developer.mozilla.org/en/docs/Web/CSS/flex-basis)

**Example**

```css
.someElement {
  flex-basis: auto;
}
```

## flex-direction

**Since** UXP v3.0

Inside a flexible container, this property selects the stacking direction for items. The default is `row`; supported values are `row`, `row-reverse`, `column`, and `column-reverse`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-direction](https://developer.mozilla.org/en/docs/Web/CSS/flex-direction)

**Example**

```css
.someElement {
  flex-basis: column;
}
```

## flex-grow

**Since** UXP v3.0

Use this property to decide whether a flexible item may grow, plus how its growth compares with other items in the same flex container.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-grow](https://developer.mozilla.org/en/docs/Web/CSS/flex-grow)

**Example**

```css
.someElement {
  flex-grow: 2;
}
```

## flex-shrink

**Since** UXP v3.0

Use this property to decide whether a flexible item may shrink, plus how its shrinking compares with other items in the same flex container.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink](https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink)

**Example**

```css
.someElement {
  flex-shrink: 0; /* item cannot shrink */
}
```

## flex-wrap

**Since** UXP v3.0

This property permits or prevents line wrapping inside a flexible container. The allowed choices are `nowrap` (default) and `wrap`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap](https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap)

**Example**

```css
.someElement {
  flex-wrap: wrap;
}
```

## flex

**Since** UXP v3.0

Use `flex` when assigning `flex-grow`, `flex-shrink`, and `flex-basis` together.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/flex](https://developer.mozilla.org/en/docs/Web/CSS/flex)

**Example**

```css
.someElement {
  flex: 1 0 auto; /* can grow, not shrink, auto basis */
}
```

## font-family

**Since** UXP v2.0

This property assigns the font family used for text on an element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-family](https://developer.mozilla.org/en/docs/Web/CSS/font-family)

**Example**

```css
.someElement {
  font-family: Helvetica, Arial, "Courier New";
}
```

### Quirks and Exceptions

- Font families such as `monospace`, `serif` or `sans-serif` are not supported.
- When one font is unavailable, fallback fonts are checked until a usable one is found. If no fallback works, the host application's system font is used instead.
- The host's font is the default font family. To preserve the default look and feel, you should generally avoid setting a font family.
- Text edit fields cannot override the font family.
- Some Spectrum UXP components do not allow the font family to be overridden.

## font-size

**Since** UXP v2.0

This property controls the font size.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-size](https://developer.mozilla.org/en/docs/Web/CSS/font-size)

**Example**

```css
.someElement {
  font-size: 24pt;
}
```

### Quirks and Exceptions

- Text edit fields do not support font size.
- Some Spectrum UXP components do not allow the font size to be overridden.

## font-style

**Since** UXP v2.0

This property chooses the element's font style. The allowed choices are `normal` (default) and `italic`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-style](https://developer.mozilla.org/en/docs/Web/CSS/font-style)

**Example**

```css
.someElement {
  font-style: italic;
}
```

### Quirks and Exceptions

- Text edit fields cannot override the font style.
- Some Spectrum UXP components do not allow the font style to be overridden.

## font-weight

**Since** UXP v3.0

This property chooses the element's font weight. Supported values include `normal` (default), `bold`, `lighter`, and `bolder`, along with these numbered weights: `50`, `100`, `200`, `300`, `400`, `500`, `550`, `600`, `700`, `800`, `850`, `900`, `950`, and `1000`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/font-weight](https://developer.mozilla.org/en/docs/Web/CSS/font-weight)

**Example**

```css
.someElement {
  font-weight: bold;
}
```

### Quirks and Exceptions

- Text edit fields cannot have their font weight overridden.
- Font weight overrides are unavailable on some Spectrum UXP components.

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
- [max-width](uxp-styles-2.md)
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

Accepted values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/justify-content](https://developer.mozilla.org/en/docs/Web/CSS/justify-content)

**Example**

```css
.someElement {
  justify-content: flex-start;
}
```

## left

**Since** UXP v2.0

For a relatively or absolutely positioned element, this property controls the left offset.

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

Controls the amount of space inserted between characters.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing)

**Example**

```css
.someElement {
  letter-spacing: 3px;
}
```

### Quirks and Exceptions

- Negative values are invalid; using them can cause letters to overlap when rendered.
- Some Spectrum UXP components do not allow letter spacing overrides.

## margin-bottom

**Since** UXP v2.0

Defines the margin on an element's bottom side.

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

Defines the margin on an element's left side.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-left](https://developer.mozilla.org/en/docs/Web/CSS/margin-left)

**Example**:

```css
.someElement {
  margin-left: 1em;
}
```

## margin-right

**Since** UXP v2.0

Defines the margin on an element's right side.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-right](https://developer.mozilla.org/en/docs/Web/CSS/margin-right)

**Example**:

```css
.someElement {
  margin-right: 1em;
}
```

## margin-top

**Since** UXP v2.0

Defines the margin on an element's top side.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin-top](https://developer.mozilla.org/en/docs/Web/CSS/margin-top)

**Example**:

```css
.someElement {
  margin-top: 1em;
}
```

## margin

**Since** UXP v2.0

Sets the margin applied to an element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/margin](https://developer.mozilla.org/en/docs/Web/CSS/margin)

**Example**:

```css
.someElement {
  margin: 0 auto;
}
```

## max-height

**Since** UXP v2.0

Sets the upper height limit for an element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/max-height](https://developer.mozilla.org/en/docs/Web/CSS/max-height)

**Example**:

```css
.someElement {
  max-height: 100px;
}
```
