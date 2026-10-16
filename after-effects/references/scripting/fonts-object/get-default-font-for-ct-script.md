# FontsObject.getDefaultFontForCTScript()

app.fonts.getDefaultFontForCTScript(ctScript)

Note

This functionality was added in After Effects 25.1

### Description

This gives back the Font object instance that is mapped as the default font for a given CTScript.

After Effects leans on these mappings when text is typed or a font applied and the font turns out to lack a glyph for the character. It then tries to map that character onto a CTScript value and uses this default mapping to reach for a substitute font that might carry a glyph for it.

The same machinery also operates on text and fonts within Scripting, thereby revealing which fonts will serve which CTScript values.

Nothing guarantees that what comes back will cover all — or indeed any — of the Unicode characters mapped to the CTScript.

```javascript
var font = app.fonts.getDefaultFontForCTScript(CTScript.CT_JAPANESE_SCRIPT);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ctScript | CTScript enum | Corresponding CTScript to get default font from. |

### Returns

Font object
