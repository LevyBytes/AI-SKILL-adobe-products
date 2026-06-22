# Max Width, Min Height, Min Width, Opacity ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: max-width; min-height; min-width; opacity; overflow-x; overflow-y; overflow; padding-bottom; padding-left; padding-right; padding-top; padding; right; text-align; text-overflow; top; visibility; white-space.

## max-width

**Since** UXP v2.0

Sets the upper width limit for an element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/max-width](https://developer.mozilla.org/en/docs/Web/CSS/max-width)

**Example**:

```css
.someElement {
  max-width: 300px;
}
```

## min-height

**Since** UXP v2.0

Sets the lower height limit for an element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/min-height](https://developer.mozilla.org/en/docs/Web/CSS/min-height)

**Example**:

```css
.someElement {
  min-height: 100vh;
}
```

## min-width

**Since** UXP v2.0

Sets the lower width limit for an element.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/min-width](https://developer.mozilla.org/en/docs/Web/CSS/min-width)

**Example**:

```css
.someElement {
  min-width: 300px;
}
```

## opacity

**Since :** UXP v2.0

Controls an element's opacity. Values range from 0 (transparent) through 1 (opaque).

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/opacity](https://developer.mozilla.org/en/docs/Web/CSS/opacity)

### Quirks and Exceptions

- Photoshop 22.0.0 parses this property in UXP, but does **not** support it. Do **not** control visibility with this style.

## overflow-x

**Since :** UXP v3.0

As shorthand, this property controls how overflow beyond the element box is handled.

Accepted keywords: `visible`, `hidden`, `auto`, and `scroll`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow-x](https://developer.mozilla.org/en/docs/Web/CSS/overflow-x)

## overflow-y

**Since :** UXP v3.0

Controls how UXP handles content extending past the element's boundary.

Overflow values: `visible`, `hidden`, `auto`, `scroll`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow-y](https://developer.mozilla.org/en/docs/Web/CSS/overflow-y)

## overflow

**Since :** UXP v3.0

Sets overflow handling for content that goes beyond an element's box.

Overflow values: `visible`, `hidden`, `auto`, `scroll`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow](https://developer.mozilla.org/en/docs/Web/CSS/overflow)

## padding-bottom

**Since** UXP v2.0

Defines the element's bottom padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom](https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom)

**Example**:

```css
.someElement {
  padding-bottom: 10px;
}
```

## padding-left

**Since** UXP v2.0

Defines the element's left padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-left](https://developer.mozilla.org/en/docs/Web/CSS/padding-left)

**Example**:

```css
.someElement {
  padding-left: 10px;
}
```

## padding-right

**Since** UXP v2.0

Defines the element's right padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-right](https://developer.mozilla.org/en/docs/Web/CSS/padding-right)

**Example**:

```css
.someElement {
  padding-right: 10px;
}
```

## padding-top

**Since** UXP v2.0

Defines the element's top padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-top](https://developer.mozilla.org/en/docs/Web/CSS/padding-top)

**Example**:

```css
.someElement {
  padding-top: 10px;
}
```

## padding

**Since** UXP v2.0

Applies padding values around the element box.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding](https://developer.mozilla.org/en/docs/Web/CSS/padding)

**Example**:

```css
.someElement {
  padding: 3px 1em;
}
```

## right

**Since** UXP v2.0

For relatively or absolutely positioned elements, this sets the right offset.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/right](https://developer.mozilla.org/en/docs/Web/CSS/right)

**Example**:

```css
.someElement {
  right: 0;
  position: absolute;
}
```

## text-align

**Since** UXP v3.0

Within the containing element, sets horizontal text alignment. Values: `left`, `center`, `right`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/text-align](https://developer.mozilla.org/en/docs/Web/CSS/text-align).

**Example**

```css
.someElement {
  font-style: left;
}
```

### Quirks and Exceptions

- Text edit fields ignore attempts to override text alignment.
- Some Spectrum UXP components do not allow text alignment overrides.

## text-overflow

**Since** UXP v3.0

Ellipsis behavior for clipped text is selected here. Values: `clip` (default), `ellipsis`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/text-overflow](https://developer.mozilla.org/en/docs/Web/CSS/text-overflow)

**Example**

```css
.someElement {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### Quirks and Exceptions

- Text edit fields do not add an ellipsis.
- Some Spectrum UXP components cannot show an ellipsis.

## top

**Since** UXP v2.0

For relatively or absolutely positioned elements, this sets the top offset.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/top](https://developer.mozilla.org/en/docs/Web/CSS/top)

**Example**:

```css
.someElement {
  top: 0;
  position: absolute;
}
```

## visibility

**Since** UXP v3.0

Controls element visibility. Values: `visible`, `hidden`. Unlike `display: none`, the `hidden` value leaves the element's layout slot in place.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/visibility](https://developer.mozilla.org/en/docs/Web/CSS/visibility)

**Example**:

```css
.someElement {
  visibility: hidden;
}
```

## white-space

**Since** UXP v3.0

Chooses how white-space characters are processed. Values: `wrap` (default), `nowrap`, `pre`, `pre-line`, `pre-wrap`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/white-space](https://developer.mozilla.org/en/docs/Web/CSS/white-space)

**Example**:

```css
.someElement {
  white-space: pre;
}
```

## width

**Since** UXP v2.0

Sets the element's width.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/width](https://developer.mozilla.org/en/docs/Web/CSS/width)

**Example**:

```css
.someElement {
  width: 100vw;
}
```
