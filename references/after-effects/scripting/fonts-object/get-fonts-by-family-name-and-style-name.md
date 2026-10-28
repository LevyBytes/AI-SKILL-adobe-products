# FontsObject.getFontsByFamilyNameAndStyleName()

app.fonts.getFontsByFamilyNameAndStyleName(familyName, styleName)

### Description

Keyed on a font's Family Name and Style Name, this gives back an array of Font object. When nothing suitable turns up, an empty Array comes back.

Tip

Owning several copies of one font can push the returned array's length past 1.

```javascript
var fontList = app.fonts.getFontsByFamilyNameAndStyleName("Abolition", "Regular")
alert(fontList.length);
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| FamilyName | String | The Family Name of the font. |
| StyleName | String | The Style Name of the font. |

### Returns

Array of Font objects; read-only.
