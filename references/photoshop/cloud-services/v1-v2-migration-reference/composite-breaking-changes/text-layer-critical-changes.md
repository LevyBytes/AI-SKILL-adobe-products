# Text layer critical changes

| Change | V1 | V2 |
| --- | --- | --- |
| Character style range field | `from`, `to` direct on item | `apply.from`, `apply.to` |
| `to` semantics | **Length** | **Inclusive end index** (off-by-one!) |
| Font name | `fontName: "PSName"` | `characterStyle.font.postScriptName` |
| Style wrapping | Direct properties | Inside `characterStyle: {...}` |
| Paragraph style wrapping | Direct properties | Inside `paragraphStyle: {...}` |
| Text frame bounds | Layer-level `bounds` | `text.frame.type: "area"` with `{top, left, right, bottom}` |
| Default frame | Area at (0,0,4,4) | Point frame at canvas center |
| Font options | `options.fonts`, `options.globalFont`, `options.manageMissingFonts` | `fontOptions.additionalFonts`, `.defaultFontPostScriptName`, `.missingFontStrategy` |
| Missing font strategy | `"useDefault"` | `"use_default"` (Breaking: underscore) |
| `lineHeight` | Not supported (always auto) | Supported in `characterStyle`; used when `autoLeading` is `false` |
| `autoLeading` | Not supported | Default: `false`. `true` sets line height to auto (120% of `fontSize`); `false` uses custom `lineHeight` |
