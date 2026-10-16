# Text Layer Specifics migration

**Text Layer Specifics:**

- Layer type: V1 `"textLayer"` maps to V2 `"text_layer"`
- **Character style ranges changed by one index:**
  - V1: `to` is a **length**; `{from: 0, to: 5}` spans 5 characters, indices 0-4
  - V2: `apply.to` is the **inclusive final index**; `{apply: {from: 0, to: 4}}` spans indices 0-4 and produces the same result
  - **Migration rule: subtract 1 from V1's `to` value**. Paragraph style ranges follow the same rule.
  - **characterStyles with no range (implicit full-string in V1):** When a V1 `characterStyle` lacks `from`/`to`, V1 applies it across all content. In V2, `apply` may be omitted for the same whole-text result. You can write `apply: {from: 0, to: len(text.content) - 1}`, but V2 does not require it.
- Character style structure: V1 direct properties move under a V2 `characterStyle` object.
- Font name: V1 top-level `fontName` moves to V2 `characterStyle.font.postScriptName` inside `characterStyle.font`.
- Text bounds: V1 layer-level `bounds: {left, top, width, height}` becomes V2 `text.frame: {type: "area", bounds: {top, left, right, bottom}}`, where `right = left + width` and `bottom = top + height`.
- Point frames are also supported in V2: `text.frame: {type: "point", origin: {x, y}}`.
- **V1 `text.type: "point"` with layer-level `bounds`:** Convert `bounds.left`/bounds.top` into `text.frame: {type: "point", origin: {x: bounds.left, y: bounds.top}}`. Avoid `transform`/transformMode`, because those scale glyphs rather than place the text.
- **Default when no frame given:** V1 uses an area frame at (0,0,4,4). V2 defaults to a point frame at canvas center. For deterministic placement, always provide `text.frame`.
- `textOrientation` is defined at text level, unlike V1's per-character-style `orientation`.
- Multi-line text: use `\r` line breaks in both versions.
- Font options: V1 `options.fonts` (href+storage) becomes V2 `fontOptions.additionalFonts` (source.url); V1 `options.globalFont` becomes V2 `fontOptions.defaultFontPostScriptName`; V1 `options.manageMissingFonts: "useDefault"` becomes V2 `fontOptions.missingFontStrategy: "use_default"`; `"fail"` stays unchanged.

> **TRAP - fontOptions placement differs by endpoint:**
>
> - `documentOperations` to `/v2/create-composite`: place `fontOptions` at top level beside `edits`, `image`, and `outputs`; do NOT put it under `edits`.
> - `/pie/psdService/text` to `/v2/execute-actions`: keep `fontOptions` inside `options` as `options.fontOptions`, since that setting belongs to `ActionsOptions`.
