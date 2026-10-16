# 7g. Text layers (`textLayer` → `text_layer`)

**Type rename:** `"textLayer"` → `"text_layer"`

**Character and paragraph style ranges changed, including an off-by-one breaking difference.** In V1, `to` in a character or paragraph range meant a **length** instead of an ending index. In V2, `apply.to` is the **inclusive end index** using 0-based indexing. The field placement also moved: V1 puts `from` and `to` directly on the array item, while V2 uses `apply.from` and `apply.to`.

**Example:** applying formatting to the 0-based span for "Hello" within "Hello World":

V1 form: `{"from": 0, "to": 5, "fontName": "Arial-BoldMT"}` — `to: 5` is interpreted as length 5

Equivalent V2 form: `{"apply": {"from": 0, "to": 4}, "characterStyle": {"font": {"postScriptName": "Arial-BoldMT"}}}` — `to: 4` points to the final character index

**Character style field mapping:**

| V1 | V2 | Notes |
| --- | --- | --- |
| `from`, `to` (direct on item) | `apply.from`, `apply.to` | Breaking: wrapped + semantics changed |
| `fontName: "PostScriptName"` | `characterStyle.font.postScriptName` | Breaking: nested |
| `fontAvailable` | `characterStyle.font.isAvailable` | Breaking: renamed + nested |
| Direct properties at item level | All properties in `characterStyle: {...}` | Breaking: nested |
| `fontColor.rgb`, `.cmyk`, `.lab`, `.gray` | Same nested shape | Unchanged |
| _(not in V1)_ | `characterStyle.capsOption` | New |
| _(not in V1)_ | `characterStyle.fontAlpha` | New |
| _(not in V1)_ | `characterStyle.letterSpacing` | New |
| _(not in V1)_ | `characterStyle.lineHeight` | New |
| _(not in V1)_ | `characterStyle.syntheticBold` | New |
| _(not in V1)_ | `characterStyle.syntheticItalic` | New |

**Paragraph style field mapping:**

| V1 | V2 | Notes |
| --- | --- | --- |
| `from`, `to` (direct on item) | `apply.from`, `apply.to` | Same off-by-one change as character styles |
| Direct properties at item level | All properties in `paragraphStyle: {...}` | Breaking: nested |
| `alignment` | `paragraphStyle.alignment` | Same values |
| _(not in V1)_ | `paragraphStyle.endIndent` | New |
| _(not in V1)_ | `paragraphStyle.firstLineIndent` | New |
| _(not in V1)_ | `paragraphStyle.spaceAfter` | New |
| _(not in V1)_ | `paragraphStyle.spaceBefore` | New |
| _(not in V1)_ | `paragraphStyle.startIndent` | New |
| _(not in V1)_ | `paragraphStyle.writingDirection` | New |

**Text frame:**

| V1 | V2 | Notes |
| --- | --- | --- |
| Layer-level `bounds: {left, top, width, height}` | `text.frame: {type: "area", bounds: {top, left, right, bottom}}` | Breaking; convert: `right = left + width`, `bottom = top + height` |
| Only area frame supported | `text.frame.type: "point" or "area"` | V2 adds point frame |
| Default area at `(0, 0, 4, 4)` | Default point frame at canvas center | Breaking: behavior changes when frame is omitted |
| _(not in V1)_ | `text.frame.type: "point"` with `origin: {x, y}` | New |

**Font options:**

| V1 | V2 | Notes |
| --- | --- | --- |
| `options.fonts[]` — `href` + `storage` | `fontOptions.additionalFonts[]` — `source.url` | Breaking: renamed + restructured |
| `options.globalFont` | `fontOptions.defaultFontPostScriptName` | Breaking: renamed |
| `options.manageMissingFonts` | `fontOptions.missingFontStrategy` | Breaking: renamed |
| `"useDefault"` | `"use_default"` | Breaking: enum value changed |
| `"fail"` | `"fail"` | Unchanged |
