# richChangeEx

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of Span objects | R/W |

Defined only for rich text fields, this property echoes how the event.changeEx property behaves on text fields. Its value is an array of Span objects pinning down both the text put into the field and its formatting. A keystroke shows up as a single-member array, whereas rich text pasted into a field shows up as an array of any length.

Should event.fieldFull be true, richChangeEx holds the whole rich formatted text string the user tried to enter and event.richChange holds that rich formatted string trimmed to what fits inside the field. Reach for event.changeEx (along with event.change) on (plain) text fields.

Related objects and properties include event. richChange, event. richValue, the Span object, the Field object defaultStyle, richText, and richValue properties, and the Annotation object richContents property.

Events

Keystroke

Example: Should the user fill up the text field, permit more text by switching the field to scroll.

```javascript
if ( event.fieldFull )
{
    app.alert("You've filled the given space with text,"
    + " and as a result, you've lost some text. I'll set the field to"
    + " scroll horizontally, and paste in the rest of your"
    + " missing text.");
    this.resetForm([event.target.name]);    // Reset field to lose focus
    event.target.doNotScroll = false;       // Make changes
    if ( event.target.richText )
        event.richChange = event.richChangeEx
    else
        event.change = event.changeEx;
}
```

See also event. fieldFull.
