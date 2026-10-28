# FontsObject.getFontsByPostScriptName()

app.fonts.getFontsByPostScriptName(postscriptName)

### Description

Keyed on the PostScript name of Fonts found earlier, this gives back an array of Font objects.

Holding several Font objects under one shared PostScript name is perfectly valid; their ordering follows the sequence in which they were enumerated within the font environment. When the TextDocument.fontObject property is set, the entry at [0] is the one applied.

This API also carries a special behavior where Variable fonts are concerned. Should no Font object match the requested PostScript yet a variable font be found whose PostScript name prefix matches the request, that Variable font instance is asked to build a matching Font object. This stands as the sole route by which a returned instance did not already exist before the method was called.

When nothing matches, an empty Array comes back.

```javascript
var fontList = app.fonts.getFontsByPostScriptName("Abolition")
alert(fontList.length);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| postscriptName | String | The PostScript Name of the font. |

### Returns

Array of Font objects; read-only.
