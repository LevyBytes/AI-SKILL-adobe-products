# 6. Additional resources (fonts, brushes, patterns)

| V1 | V2 | Notes |
| --- | --- | --- |
| `options.fonts[]` with `{href, storage}` | `options.fontOptions.additionalFonts[]` with `{source: {url}}` | Breaking: renamed + wrapped in `fontOptions` |
| `options.brushes[].href` | `options.brushes[].source.url` | Breaking: nested |
| `options.brushes[].storage` | _(implicit)_ |  |
| `options.patterns[].href` | `options.patterns[].source.url` | Breaking: nested |
| `options.patterns[].storage` | _(implicit)_ |  |
| _(not in V1)_ | `fontOptions.missingFontStrategy` | New: `"use_default"` or `"fail"` |
| _(not in V1)_ | `fontOptions.defaultFontPostScriptName` | New: fallback font |

**Resource limits:**

| Resource | V1 | V2 |
| --- | --- | --- |
| Fonts | Undocumented | **10** (in `fontOptions.additionalFonts`) |
| Brushes | Undocumented | **10** |
| Patterns | Undocumented | **10** |

Fonts, brushes, patterns, and additional images all need to point to external files. V2 does **not** accept inline binary payloads for these resource types.
