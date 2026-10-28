# V2 font options

| Property | Description |
| --- | --- |
| `fontOptions.additionalFonts` | List of custom font sources. Each entry uses `source.url`; downloads happen before the document opens. |
| `fontOptions.defaultFontPostScriptName` | Optional PostScript name used as the fallback when a requested font cannot be found; if omitted, the worker falls back to **ArialMT**. |
| `fontOptions.missingFontStrategy` | Accepts `"use_default"` or `"fail"`; defaults to `"use_default"`. |

**Example (V2):**

```json
{
  "fontOptions": {
    "additionalFonts": [{ "source": { "url": "<SIGNED_GET_URL>" } }],
    "defaultFontPostScriptName": "Arial_BoldMT",
    "missingFontStrategy": "use_default"
  }
}
```
