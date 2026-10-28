# Text Layer Operations migration

**Text Layer Operations:**

- **V1**: `/pie/psdService/text` - declarative request using `options.layers[]` with support for `text.content` (text string), full `characterStyles` (`size`, `color`, `fontPostScriptName`, `leading`, `tracking`, `syntheticBold/Italic`, `fontCaps`, `baseline`, `strikethrough`, `underline`, `verticalScale/horizontalScale`, `ligature`, `autoKern`), `paragraphStyles.alignment`, and font management (`options.fonts[]`, `manageMissingFonts`, `globalFont`)
- **V2**: `/v2/execute-actions` - V2 has **no equivalent declarative text endpoint**; use ActionJSON or UXP instead
- Font management maps into `options.fontOptions`: `fonts[].href` to `additionalFonts[].source.url`, `manageMissingFonts` to `missingFontStrategy` (`"useDefault"` to `"use_default"`), and `globalFont` to `defaultFontPostScriptName`
- **Additional contents**: No
