# Character styles — CHANGED and NEW

Earlier `characterStyles` example:

```json
{
  "fontAvailable": true,
  "fontColor": { "rgb": { "red": 0, "green": 0, "blue": 0 } },
  "fontName": "PostScriptName",
  "fontSize": 12,
  "orientation": "horizontal"
}
```

New `characterStyles` fields:

| Field | Status | Notes |
| --- | --- | --- |
| `font.postScriptName` | CHANGED | Restructured: font info moved into nested `font` object |
| `font.isAvailable` | CHANGED | Renamed from `fontAvailable`, now nested under `font` |
| `fontSize` | same | Now a float (more precision) |
| `fontColor.rgb.{red,green,blue}` | same | value range [0–32768] — compatible |
| `fontAlpha` | NEW | Float 0–1 — character alpha |
| `syntheticBold` | NEW | boolean |
| `syntheticItalic` | NEW | boolean |
| `underline` | NEW | boolean |
| `capsOption` | NEW | string, e.g. `"normal_caps"` |
| `lineHeight` | NEW | float |
| `letterSpacing` | NEW | number |
| `position` | NEW | `{from, to}` — character range this style applies to |

The old per-character `orientation` entry moves to `textOrientation` on the text object.
