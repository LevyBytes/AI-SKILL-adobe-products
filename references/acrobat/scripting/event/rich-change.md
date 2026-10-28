# richChange

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | No | Array of Span objects | R/W |

Captures the value change the user just keyed in. Defined only for rich text fields, the richChange property echoes how the event.change property behaves. richChange's value is an array of Span objects pinning down both the text put into the field and its formatting. A keystroke shows up as a single-member array, whereas rich text pasted into a field shows up as an array of any length.

With event.fieldFull true, richChangeEx holds the whole rich formatted text string the user tried to enter and event.richChange holds that rich formatted string trimmed to what fits inside the field. Reach for event.changeEx (along with event.change) on (plain) text fields.

Related objects and properties are event. richValue, the Span object, the Field object defaultStyle, richText, and richValue properties, and the Annotation object richContents property.

Events

Keystroke

Example: Each keystroke is uppercased here, its text tinted blue then red in turn, with underlining toggled on and off.

```javascript
// Custom Keystroke event for a rich text field.
var span = event.richChange;
for ( var i=0; i<span.length; i++)
{
    span[i].text = span[i].text.toUpperCase();
    span[i].underline = !span[i].underline;
    span[i].textColor = (span[i].underline) ? color.blue : color.red;
}
event.richChange = span;
```
