# Migration checklist

**Request wrapper updates:**

- [ ] Use `/v2/execute-actions` in place of `/pie/psdService/text`
- [ ] Map `inputs[0].href` into `image.source.url`
- [ ] Map `outputs[0].href` into `outputs[0].destination.url`
- [ ] Omit `storage` fields when using presigned URLs
- [ ] Rename `outputs[0].type` as `outputs[0].mediaType`
- [ ] Choose **Actions** or **UXP**: put declarative edits in `options.actions`; reserve `options.uxp` for branching edit logic

**ActionJSON text edits:**

- [ ] `text.content` -> `set` on `textLayer` with `textKey`
- [ ] `text.orientation` -> `set` on `textLayer` with `orientation` enum
- [ ] `text.antiAlias` -> `set` on `textLayer` with `antiAlias` enum
- [ ] `characterStyles.size` -> `set textStyle` with `size` (pointsUnit) + `textOverrideFeatureName: 808465458` + `typeStyleOperationType: 3`
- [ ] `characterStyles.fontPostScriptName/fontName/fontStyleName` -> `set textStyle`
- [ ] `characterStyles.color` -> `set textStyle` with `color._obj: "RGBColor"`
- [ ] `characterStyles.leading` -> `set textStyle` with `autoLeading: false` + `leading` (pointsUnit)
- [ ] `characterStyles.tracking` -> `set textStyle` with `tracking` (integer, thousandths of em)
- [ ] `characterStyles.syntheticBold/syntheticItalic` -> `set textStyle`
- [ ] `characterStyles.fontCaps` -> `set textStyle` with `fontCaps` enum
- [ ] `characterStyles.baseline` -> `set textStyle` with `baselineDirection` enum
- [ ] `characterStyles.strikethrough` -> `set textStyle` with `strikeThrough` enum
- [ ] `characterStyles.underline` -> `set textStyle` with `underline` enum
- [ ] `characterStyles.verticalScale/horizontalScale` -> `set textStyle` (percentage integers)
- [ ] `characterStyles.ligature` -> `set textStyle`
- [ ] `characterStyles.autoKern` -> `set textStyle` with `autoKern` enum
- [ ] `characterStyles.stylisticAlternates` -> use UXP because no standardized ActionJSON counterpart exists
- [ ] `paragraphStyles.alignment` -> `set paragraphStyle` with `align` enum

**Fonts:**

- [ ] `options.fonts[].href` -> `options.fontOptions.additionalFonts[].source.url`
- [ ] `options.manageMissingFonts: "fail"/"useDefault"` -> `options.fontOptions.missingFontStrategy: "fail"/"use_default"`
- [ ] `options.globalFont` -> `options.fontOptions.defaultFontPostScriptName`

**Actions and UXP selection:**

| Scenario | Preferred path |
| --- | --- |
| Known-layer edits such as font, size, or color | **Actions** |
| Conditional edits such as text-layer checks or names containing "title" | **UXP** |
| Visit every layer and run logic | **UXP** |
| Toggle-driven or state-dependent updates | **UXP** |
