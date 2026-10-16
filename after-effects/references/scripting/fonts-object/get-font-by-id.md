# FontsObject.getFontByID()

app.fonts.getFontByID(fontID)

Note

This functionality was added in After Effects 24.2

### Description

For a font found earlier, this gives back its Font object instance keyed on that font's ID.

Where nothing matches, undefined comes back. That can happen with an ID that is not recognized, or if the original font has since been pulled from the font environment.

```javascript
var font1 = app.fonts.allFonts[0][0];
var font2 = app.fonts.getFontByID(font1.fontID);
alert(font1.fontID == font2.fontID);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| fontID | Integer | The ID of the font. |

### Returns

Font object, or undefined if no font by that ID.
