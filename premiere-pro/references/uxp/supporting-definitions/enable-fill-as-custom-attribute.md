# `enableFillAsCustomAttribute`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableFillAsCustomAttribute` | `boolean` | optional | `false` |

`enableFillAsCustomAttribute` allows an SVG `fill` attribute to use a CSS variable.

```html
<svg width="100" height="100">
  <rect width="100" height="100" fill="var(--iconColor, red)" />
</svg>
```

With the following CSS:

```css
:root {
  --iconColor: blue;
}
```
