# fieldFull

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R |

Goes true once the user tries entering text the field can't hold, whether from a spacing constraint (the Field object property doNotScroll is set to true) or a cap on characters (the Field object property charLimit is set to a positive value). With fieldFull true, event.changeEx carries the whole text string the user tried to enter and event.change carries that string trimmed to what fits inside the field.

Surfaces only within text-field keystroke events.

Events

Keystroke

Example 1: Here is a custom keystroke script for a text field carrying a character limit. Once the field fills up, or once the user commits the typed data, focus jumps to a different field.

```javascript
if ( event.fieldFull | event.willCommit )
    this.getField("NextTabField").setFocus();
```

Example 2: Check whether the user has overfilled the text field. This is a custom keystroke script for a text field. To start, the field is configured so text won't scroll.

```javascript
if ( event.fieldFull )
{
    app.alert("You've filled the given space with text,"
    + " and as a result, you've lost some text. I'll set the field to"
    + " scroll horizontally, and paste in the rest of your"
    + " missing text.");
    this.resetForm([event.target.name]);     // Reset field to lose focus
    event.target.doNotScroll = false;        // Make changes
    event.change = event.changeEx;
}
```

Because a keystroke event generally won't let field properties be altered, the field has to surrender focus as the means of committing the data. From there the user must set focus again and resume typing.
