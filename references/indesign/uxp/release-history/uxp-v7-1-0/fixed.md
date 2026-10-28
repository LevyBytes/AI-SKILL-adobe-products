# Fixed

- `SVGElement`: The `fill` attribute color resolves from the CSS variable value when a CSS variable is used. To try this fix for now, enable the feature flag in your plugin manifest `"featureFlags" : { "enableFillAsCustomAttribute" : true }`. The next UXP release enables this flag by default.

```html
<style>
/* CSS variable */
html {
  --iconColor: yellow;
}

</style>
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="var(--iconColor, red)" />
</svg>
<!-- shows a yellow circle -->
```
