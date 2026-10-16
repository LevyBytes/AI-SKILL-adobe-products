# Project.replaceFont()

app.project.replaceFont(fromFont, toFont, [noFontLocking = false])

Note

This functionality was added in After Effects 24.5

### Description

Substitutes the Font object toFont everywhere the Font object fromFont is currently in use.

Because it taps the very same machinery and rules that drive automatic substitution of missing or replaced fonts, the swap is exact and complete — it even handles TextDocuments with mixed styling, holding onto the character range that fromFont covered.

You cannot undo this operation.

The optional noFontLocking flag governs the case where toFont lacks glyphs for the text it lands on. Normally a fallback font that does carry those glyphs gets picked, but flip this flag to true and that fallback is suppressed, leaving the glyphs missing. At present nothing can detect or report that situation.

Keep in mind that if fromFont is itself a substituted font and toFont shares its font properties, no fallback is possible, so the flag is disregarded and behaves as though set to true.

```javascript
var fromFont = app.project.usedFonts[0].font;
var fontList = app.fonts.getFontsByPostScriptName("TimesNewRomanPSMT");
var toFont = fontList[0];
var layerChanged = app.project.replaceFont(fromFont, toFont);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fromFont | Font object | Font to be replaced. |
| toFont | Font object | Font to replace it with. |
| noFontLocking | Boolean | Optional. Defaults to false |

### Returns

Boolean. true if at least one Layer was changed.
