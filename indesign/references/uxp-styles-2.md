# Overflow X, Overflow Y, Overflow, Padding Bottom ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: overflow-x; overflow-y; overflow; padding-bottom; padding-left; padding-right; padding-top; padding; right; text-align; text-overflow; top; visibility; white-space; width.

## overflow-x

**Since :** UXP v3.0

Controls how content that exceeds the element box is handled.

Accepted values: `visible`, `hidden`, `auto`, and `scroll`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow-x](https://developer.mozilla.org/en/docs/Web/CSS/overflow-x)

## overflow-y

**Since :** UXP v3.0

Controls how content that exceeds the element box is handled.

Accepted values: `visible`, `hidden`, `auto`, and `scroll`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow-y](https://developer.mozilla.org/en/docs/Web/CSS/overflow-y)

## overflow

**Since :** UXP v3.0

Controls how content that exceeds the element box is handled.

Accepted values: `visible`, `hidden`, `auto`, and `scroll`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/overflow](https://developer.mozilla.org/en/docs/Web/CSS/overflow)

## padding-bottom

**Since** UXP v2.0

Sets bottom padding on a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom](https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom)

**Example**:

```css
.someElement {
  padding-bottom: 10px;
}
```

## padding-left

**Since** UXP v2.0

Sets left padding on a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-left](https://developer.mozilla.org/en/docs/Web/CSS/padding-left)

**Example**:

```css
.someElement {
  padding-left: 10px;
}
```

## padding-right

**Since** UXP v2.0

Sets right padding on a UI node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-right](https://developer.mozilla.org/en/docs/Web/CSS/padding-right)

**Example**:

```css
.someElement {
  padding-right: 10px;
}
```

## padding-top

**Since** UXP v2.0

Defines the amount of padding applied to an element's top edge.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding-top](https://developer.mozilla.org/en/docs/Web/CSS/padding-top)

**Example**:

```css
.someElement {
  padding-top: 10px;
}
```

## padding

**Since** UXP v2.0

Defines padding around the target node.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/padding](https://developer.mozilla.org/en/docs/Web/CSS/padding)

**Example**:

```css
.someElement {
  padding: 3px 1em;
}
```

## right

**Since** UXP v2.0

For elements using relative or absolute positioning, assigns the offset from the right side.

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

Controls text alignment inside the containing element. Accepted values: `left`, `center`, `right`.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/text-align](https://developer.mozilla.org/en/docs/Web/CSS/text-align).

**Example**

```css
.someElement {
  font-style: left;
}
```

### Quirks and Exceptions

- Text edit fields cannot override text alignment.
- Some Spectrum UXP components do not allow text alignment overrides.

## text-overflow

**Since** UXP v3.0

Controls whether clipped text displays an ellipsis. Accepted values: `clip` (default) and `ellipsis`.

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

- Text edit fields cannot add an ellipsis.
- Some Spectrum UXP components do not allow ellipsis insertion.

## top

**Since** UXP v2.0

For elements using relative or absolute positioning, assigns the offset from the top side.

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

Controls whether an element is shown. Accepted values: `visible` and `hidden`. A `hidden` element differs from `display: none` because it still occupies its normal layout slot.

**See**: [https://developer.mozilla.org/en/docs/Web/CSS/visibility](https://developer.mozilla.org/en/docs/Web/CSS/visibility)

**Example**:

```css
.someElement {
  visibility: hidden;
}
```

## white-space

**Since** UXP v3.0

Controls white-space handling. Accepted values: `wrap` (default), `nowrap`, `pre`, `pre-line`, and `pre-wrap`.

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
