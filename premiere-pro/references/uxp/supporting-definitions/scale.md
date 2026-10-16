# `scale`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `scale` | `number[]` | optional | [1] |

`scale` lists the pixel-density variants supported by the icon.

```json
{
  "path": "icon.png",
  "width": 24,
  "height": 24,
  "scale": [1, 2, 2.5]
}
```

With those values, UXP looks for these files when they exist:

- 100% scaling can use `icon.png` or `icon@1x.png` (24x24px).
- 200% scaling can use `icon@2x.png` (48x48px).
- 250% scaling can use `icon@2.5x.png` (60x60px).
