# Min Height, Min Width, Opacity, Overflow X ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: min-height; min-width; opacity; overflow-x; overflow-y; overflow; padding-bottom; padding-left; padding-right; padding-top; padding; right; text-align; text-overflow; top; visibility; white-space; width.

## min-height

**Since** UXP v2.0

Sets the smallest height an element may use.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/min-height](https://developer.mozilla.org/en/docs/Web/CSS/min-height)

**Example**:

```css
.someElement {
  min-height: 100vh;
}
```

## min-width

**Since** UXP v2.0

Sets the smallest width an element may use.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/min-width](https://developer.mozilla.org/en/docs/Web/CSS/min-width)

**Example**:

```css
.someElement {
  min-width: 300px;
}
```

## opacity

**Since :** UXP v2.0

Controls an element's opacity. Use 0 for transparent, 1 for opaque, and intermediate values for partial opacity.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/opacity](https://developer.mozilla.org/en/docs/Web/CSS/opacity)

### Quirks and Exceptions

- UXP can parse this property, but Photoshop 22.0.0 does **not** support it. Avoid this style for visibility control.

## overflow-x

**Since :** UXP v3.0

When content spills past the element, this shorthand chooses how that overflow is handled.

Accepted values: `visible`, `hidden`, `auto`, and `scroll` for overflow handling.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow-x](https://developer.mozilla.org/en/docs/Web/CSS/overflow-x)

## overflow-y

**Since :** UXP v3.0

When content spills past the element, this shorthand chooses how that overflow is handled.

Accepted values: `visible`, `hidden`, `auto`, and `scroll` for overflow handling.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow-y](https://developer.mozilla.org/en/docs/Web/CSS/overflow-y)

## overflow

**Since :** UXP v3.0

When content spills past the element, this shorthand chooses how that overflow is handled.

Accepted values: `visible`, `hidden`, `auto`, and `scroll` for overflow handling.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow](https://developer.mozilla.org/en/docs/Web/CSS/overflow)

## padding-bottom

**Since** UXP v2.0

Sets the element's bottom padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom](https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom)

**Example**:

```css
.someElement {
  padding-bottom: 10px;
}
```

## padding-left

**Since** UXP v2.0

Sets the element's left padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-left](https://developer.mozilla.org/en/docs/Web/CSS/padding-left)

**Example**:

```css
.someElement {
  padding-left: 10px;
}
```

## padding-right

**Since** UXP v2.0

Sets the element's right padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-right](https://developer.mozilla.org/en/docs/Web/CSS/padding-right)

**Example**:

```css
.someElement {
  padding-right: 10px;
}
```

## padding-top

**Since** UXP v2.0

Sets the element's top padding.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-top](https://developer.mozilla.org/en/docs/Web/CSS/padding-top)

**Example**:

```css
.someElement {
  padding-top: 10px;
}
```

## padding

**Since** UXP v2.0

Controls padding on all sides.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding](https://developer.mozilla.org/en/docs/Web/CSS/padding)

**Example**:

```css
.someElement {
  padding: 3px 1em;
}
```

## right

**Since** UXP v2.0

For relatively or absolutely positioned elements, sets the right position.

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

Within the parent container, text alignment can be set with `left`, `center`, or `right`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/text-align](https://developer.mozilla.org/en/docs/Web/CSS/text-align).

**Example**

```css
.someElement {
  font-style: left;
}
```

### Quirks and Exceptions

- Text edit fields cannot have their text alignment overridden.
- Some Spectrum UXP components do not allow text-alignment overrides.

## text-overflow

**Since** UXP v3.0

When clipping hides text, this property controls whether UXP shows an ellipsis. Accepted values are `clip` (default) and `ellipsis`.

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

- Text edit fields cannot receive an added ellipsis.
- Some Spectrum UXP components do not allow ellipsis insertion.

## top

**Since** UXP v2.0

For an element using relative or absolute positioning, this sets its top offset.

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

This property controls element visibility with `visible` or `hidden`. A hidden element, unlike one using `display: none`, keeps its layout footprint.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/visibility](https://developer.mozilla.org/en/docs/Web/CSS/visibility)

**Example**:

```css
.someElement {
  visibility: hidden;
}
```

## white-space

**Since** UXP v3.0

This property controls white-space treatment. Allowed values are `wrap` (default), `nowrap`, `pre`, `pre-line`, and `pre-wrap`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/white-space](https://developer.mozilla.org/en/docs/Web/CSS/white-space)

**Example**:

```css
.someElement {
  white-space: pre;
}
```

## width

**Since** UXP v2.0

Sets an element's width.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/width](https://developer.mozilla.org/en/docs/Web/CSS/width)

**Example**:

```css
.someElement {
  width: 100vw;
}
```
