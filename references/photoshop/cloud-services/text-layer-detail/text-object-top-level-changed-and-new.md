# Text object top-level - CHANGED and NEW

| Field | Status | Notes |
| --- | --- | --- |
| `content` | same | Text string |
| `textOrientation` | NEW | e.g. `"horizontal"` — moved from per-character-style |
| `missingFonts` | NEW | Array of font names not available on the server |
| `antiAliasing` | NEW | e.g. `"crisp"` |
| `frame` | CHANGED | Restructured from old `text.type` + `text.frameType` fields (see below) |
