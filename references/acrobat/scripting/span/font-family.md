# fontFamily

| Type | Access |
| --- | --- |
| String | R/W |

The font family that draws the text. Supply it as an array of family names searched in sequence. Position one holds the actual font to use; position two is an optional generic family name applied when the first font has no exact match. These are the generic family names:

```javascript
symbol, serif, sans-serif, cursive, monospace, fantasy
```

The default generic family name is sans-serif.

Example: Set the defaultStyle font family for a rich text field.

```javascript
f = this.getField("Text1");
style = f.defaultStyle;

// If Courier Std is not found on the user's system, use a monospace font
style.fontFamily = ["Courier Std", "monospace" ];
f.defaultStyle = style;
```
