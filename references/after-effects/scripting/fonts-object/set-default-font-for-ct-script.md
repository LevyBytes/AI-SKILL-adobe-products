# FontsObject.setDefaultFontForCTScript()

app.fonts.setDefaultFontForCTScript(ctScript, font)

Note

This functionality was added in After Effects 25.1

### Description

Keyed on the CTScript parameter, this assigns the mapped Font object instance.

After Effects leans on these mappings when text is typed or a font applied and the font turns out to lack a glyph for a given character. It then tries to map that character onto a CTScript value and uses this default mapping to reach for a substitute font that might carry a glyph for it.

Variable fonts cannot serve as defaults and passing one raises an exception.

There is no demand that the specified font hold glyphs for any or all of the characters mapped to the CTScript.

The same machinery also operates on text and fonts within Scripting, thereby revealing which fonts will serve which CTScript values (see FontsObject.getDefaultFontForCTScript()).

Whatever font is assigned to CTScript.`CT_ROMAN_SCRIPT` is the one used to re-initialize the Character Panel after the character style is reset.

Passing in null resets a particular CTScript's default back to whatever value it carried at App launch.

```javascript
var font = app.fonts.getFontsByPostScriptName("MyriadPro-Regular")[0];
var ret = app.fonts.setDefaultFontForCTScript(CTScript.CT_ROMAN_SCRIPT, font);
alert("set:" + ret);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ctScript | CTScript enum | CTScript for font to be mapped |
| font | Font object | The font to be mapped. If null, then current mapping is reset. |

### Returns

Boolean; One of:

- false if the specfied mapping is the same the current one.
- true if the specified mapping is different from the current one.
