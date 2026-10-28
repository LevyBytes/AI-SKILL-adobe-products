# Fixed

- `SVGElement`: CSS variables used in the `fill` attribute now resolve to their variable values. For this release, validate the change by setting `"featureFlags" : { "enableFillAsCustomAttribute" : true }` in your plugin manifest. The next UXP release is expected to enable that flag automatically.

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
