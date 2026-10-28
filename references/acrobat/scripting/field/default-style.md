# defaultStyle

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | F | Span object | R/W |

The form field's default style attributes are what this property sets. Should the user click into an empty field and start typing without first adjusting properties via the property toolbar, these are the properties that apply. The property takes the form of a single Span object that lacks a text property. A number of the default-style span's properties mirror those on the Field object, and editing them changes the field's defaultStyle property — and the reverse holds as well.

Which Field object properties also live in the default style, and how their values may differ, is detailed in the table below.

| Field properties | defaultStyle (Span properties) | Description |
| --- | --- | --- |
| alignment | alignment | The alignment property has the same values for both the default style and the Field object. |
| textFont | fontFamily fontStyle fontWeight | The value of this field property is a complete font name that represents the font family, weight, and style. In the default style property, each property is represented separately. If an exact match for the font properties specified in the default style cannot be found, a similar font will be used or synthesized. |
| textColor | textColor | The textColor property has the same values for both the default style and the Field object. |
| textSize | textSize | The textSize property has the same values for both the default style and the Field object. |

Note

While a field is empty, defaultStyle supplies the style for any newly entered text. Should a field already hold text when defaultStyle is altered, that existing text picks up none of the changes. Newly typed text takes on the attributes of the text it is inserted within (or whatever the toolbar specifies).

Paste rich text into a field and any attributes the pasted rich text leaves unspecified are taken from defaultStyle.

defaultStyle pays no attention to Superscript and Subscript.

Fields

rich text

Example: Change the default style for a text field.

```javascript
var style = this.getField("Text1").defaultStyle;
style.textColor = color.red;
style.textSize = 18;

// if Courier Std is not found, use a monospace font
style.fontFamily = ["Courier Std", "monospace" ];

this.getField("Text1").defaultStyle = style;
```
