# Migration checklist

For V1-to-V2 text layer migration, work through these changes:

- [ ] Replace `type: "textLayer"` with `type: "text_layer"`
- [ ] For character style ranges in V2, use `apply.from`/`apply.to`; both are inclusive 0-based indices, and style properties move into `characterStyle`
- [ ] Replace top-level `fontName` with `font.postScriptName` inside `characterStyle.font` for V2
- [ ] Put paragraph style properties inside a `paragraphStyle` object
- [ ] Rename font color fields: `fontColor.cmyk.yellowColor` → `fontColor.cmyk.yellow`; `fontColor.lab.luminance` → `fontColor.lab.l`
- [ ] For font color rgb/cmyk/gray/lab-l components, migrate V1's 0–65535 acceptance to the V2 0–32768 clamp, where any value > 32768 becomes 32768
- [ ] For font color lab `a`/`b`, convert from V1's 0–65535 acceptance to V2's -16384–16384 range, where any value > 16384 becomes 16384
- [ ] Update font management fields (`manageMissingFonts` → `missingFontStrategy`, `globalFont` → `defaultFontPostScriptName`)
- [ ] Migrate custom font inputs from `options.fonts` (href, storage) to `fontOptions.additionalFonts` (source.url)
- [ ] Update inputs and outputs: V1 `inputs[].href` becomes V2 `image.source.url`; V1 `outputs[].href` becomes V2 `outputs[].destination.url`; use `mediaType` instead of `type`
- [ ] Translate layer placement from V1 `add.insertTop` (or insertBottom, etc.) into V2 `operation: { type: "add", placement: { type: "top" } }` (or bottom, above, below, into)
- [ ] Change V1 layer `bounds` (left, top, width, height) into V2 `text.frame` with `type: "area"` and `bounds: { top, left, right, bottom }`; compute `right = left + width` and `bottom = top + height`
