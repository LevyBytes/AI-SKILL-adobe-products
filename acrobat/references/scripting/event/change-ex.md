# changeEx

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Various | R |

Carries the export value of the change; it surfaces only throughout a Field/Keystroke event on list boxes and combo boxes.

With a list box, you enter the keystroke script, if there is one, under the Selection Change tab of the properties dialog box.

On a combo box, changeEx surfaces solely when the pop-up list comes into play — meaning a selection is being picked from the list by mouse or keyboard. Should the combo be editable and the user type an entry, the Field/Keystroke event acts the way it would for a text field (so no changeEx or keyDown event properties exist).

From Acrobat 6.0 onward, event.changeEx applies to text fields. With event.fieldFull set to true, changeEx holds the whole text string the user tried to enter while event.change holds that string trimmed to what the field can hold. Reach for event.richChangeEx (along with event.richChange) when working with rich text fields.

Example 1: A basic HTML-based online help system is built here.

What follows is a combo box built programmatically.

```javascript
var c = this.addField({
    cName: "myHelp",
    cFieldType: "combobox",
    nPageNum: 0,
    oCoords: [72,12+3*72, 3*72, 0+3*72]
})
```

Next, load the combo box with its items.

```javascript
c.setItems([
    ["Online Help", "http://www.example.com/myhelp.html"],
    ["How to Print", "http://www.example.com/myhelp.html#print"],
    ["How to eMail", "http://www.example.com/myhelp.html#email"]
]);
```

Set the action.

```javascript
c.setAction("Keystroke", "getHelp()");
```

At the document level, this function gets defined.

```javascript
function getHelp() {
    if ( !event.willCommit && (event.changeEx != "") )
        app.launchURL(event.changeEx);
}
```

Example 2: To see changeEx used with text fields, look at the example that comes right after fieldFull.
