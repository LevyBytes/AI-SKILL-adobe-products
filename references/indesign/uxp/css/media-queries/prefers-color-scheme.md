# prefers-color-scheme

**Since** UXP v4.1

Use this media feature to scope CSS rules to the host application's current theme.

| Value | Ps | Xd |
| --- | --- | --- |
| `lightest` | ✓ | * |
| `light` | ✓ | – |
| `medium` | – | – |
| `dark` | ✓ | – |
| `darkest` | ✓ | – |

XD provides just one theme. In XD 35, that case maps to the "lightest" theme.

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
