# Fixed

- `SVGElement`: when the `fill` attribute uses a CSS variable, the color now resolves from that variable's value. Until this becomes the default behavior, enable the plugin-manifest feature flag `"featureFlags" : { "enableFillAsCustomAttribute" : true }` to test the fix. The next UXP release will enable this flag by default.

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
