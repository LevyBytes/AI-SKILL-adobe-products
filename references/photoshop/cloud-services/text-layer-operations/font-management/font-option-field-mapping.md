# Font option field mapping

| V1 Field | V2 Field | Notes |
| --- | --- | --- |
| `options.fonts[].href` | `options.fontOptions.additionalFonts[].source.url` |  |
| `options.fonts[].storage` | _(removed)_ | Presigned URLs do not need this field |
| `options.manageMissingFonts: "fail"` | `options.fontOptions.missingFontStrategy: "fail"` | The job fails when a required font cannot be found |
| `options.manageMissingFonts: "useDefault"` | `options.fontOptions.missingFontStrategy: "use_default"` | The default font is substituted |
| `options.globalFont` | `options.fontOptions.defaultFontPostScriptName` | Fallback font PostScript name |
