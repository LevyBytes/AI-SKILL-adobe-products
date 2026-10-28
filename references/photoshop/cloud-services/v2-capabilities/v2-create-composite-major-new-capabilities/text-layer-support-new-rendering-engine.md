# Text layer support - new rendering engine

Text rendering in V2 changes significantly for complex fonts, multilingual text, and related style handling.

V2 adds character and paragraph style attributes that V1 lacked:

| Property | Description |
| --- | --- |
| `syntheticBold` | Creates bold styling when no bold font variant exists |
| `syntheticItalic` | Creates italic styling when no italic font variant exists |
| `letterSpacing` | Character tracking / letter spacing |
| `lineHeight` | Leading / line height |
| `fontAlpha` | Opacity applied per character |
| `capsOption` | Capitalization setting, for example `"all_caps"` |

V2 also improves missing-font detection while text layers are edited. In V1, editing a text layer that referenced an unavailable font, such as changing `fontSize`, `fontName`, or another character attribute, did not reliably activate the configured `missingFontStrategy`; the job could finish while keeping the unresolved font. Across every edit path, V2 detects missing fonts and honors `missingFontStrategy`.

For character and paragraph style details, use [Text Layer Operations Migration](../../layer-operations/text/layer-operations-text.md); its [missing font detection details](../../layer-operations/text/key-migration-changes/improved-missing-font-detection-in-v2.md) section covers that behavior.
