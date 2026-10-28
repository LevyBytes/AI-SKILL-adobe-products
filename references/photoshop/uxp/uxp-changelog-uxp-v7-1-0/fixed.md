# Fixed

- `SVGElement`: When a CSS variable is used for the `fill` attribute, the color resolves from that variable. For the moment, verify the fix by enabling this plugin manifest feature flag: `"featureFlags" : { "enableFillAsCustomAttribute" : true }`. The following UXP release will enable this flag by default.

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
