# richValue

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of Span objects | R/W |

For each event, this property echoes both the Field object's richValue property and the event.value property.

Related objects and properties include the Span object, the Field object properties defaultStyle, richText, richValue, event. richChange, event. richChangeEx, and the Annotation object richContents property.

Events

Keystroke

Example: Convert every bold run into red, underlined text.

```javascript
// Custom format event for a rich text field.
var spans = event.richValue;
for ( var i = 0; i < spans.length; i++ )
{
    if( spans[i].fontWeight >= 700 )
    {
        spans[i].textColor = color.red;
        spans[i].fontWeight = 400;     // change to default weight
        spans[i].underline = true;
    }
}
event.richValue = spans;
```
