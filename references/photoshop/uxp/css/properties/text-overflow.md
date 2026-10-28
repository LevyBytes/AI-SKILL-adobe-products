# text-overflow

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

Host limitations: [Quirks and Exceptions](text-overflow/quirks-and-exceptions.md).
