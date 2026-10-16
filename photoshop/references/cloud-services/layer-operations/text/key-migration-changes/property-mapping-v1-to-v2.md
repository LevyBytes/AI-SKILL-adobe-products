# Property mapping (V1 to V2)

| V1 | V2 |
| --- | --- |
| `options.fonts` | `fontOptions.additionalFonts` (replace `href` + `storage` with `source.url`) |
| `options.globalFont` | `fontOptions.defaultFontPostScriptName` |
| `options.manageMissingFonts` | `fontOptions.missingFontStrategy` |
| `"useDefault"` | `"use_default"` |
| `"fail"` | `"fail"` |
