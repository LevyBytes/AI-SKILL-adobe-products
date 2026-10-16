# FontObject.hasGlyphsFor()

app.fonts.allFonts[0][0].hasGlyphsFor(charString)

Note

This functionality was added in After Effects 25.1

### Description

Since no font carries glyphs across every Unicode range, this method lets the caller ask a Font whether it covers one or more particular characters.

Comes back true when the font supplies a glyph for each character contained in the charString.

Ordering of the characters is irrelevant; and when the string passed in holds more than one character, this API gives no way to tell which character lacked glyph coverage.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| charString | String | Text that will be checked for support in the Font object. |

### Returns

Boolean.
