# prefers-color-scheme

**Since** UXP v4.1

Use this media feature to limit a CSS rule set to the particular theme active in the app hosting the plugin.

| Value | Ps | Xd |
| --- | --- | --- |
| `lightest` | ✓ | * |
| `light` | ✓ | – |
| `medium` | – | – |
| `dark` | ✓ | – |
| `darkest` | ✓ | – |

XD has only one theme; in XD 35 this value maps to the "lightest" theme.

**Example** 

```css
:root {
  --primary-color: #E8E8E8;
  /* default colors are for dark themes */
}
@media (prefers-color-scheme: lightest), (prefers-color-scheme:light) {
  :root {
    --primary-color: #181818;
    /* override for light themes */
  }
}
```
