# targetName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | String | R |

Attempts to give back the name of the JavaScript currently running. Handy for debugging when you need to pinpoint the code throwing exceptions. Frequent targetName values take in:

For App/Init events, the folder-level script's file name

For Doc/Open events, the document-level script's name

For Batch/Exec events, the name of the PDF file under processing

For Field events, the name of the field

For Menu/Exec events, the menu item's name

For Screen events (multimedia events), the screen annotation's name

Whenever an exception fires, targetName gets reported provided a name can be identified.

Example: An error sits in the opening line of the folder-level JavaScript file conserve .js. As the viewer launches, an exception fires and the message points to where the trouble lies.

Reference data, output or notation; not an executable JavaScript program.

```text
MissingArgError: Missing required argument.
App.alert:1:Folder-Level:App:conserve.js
 ===> Parameter cMsg.
```

### type

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | String | R |

The running event's type. Pairing the type with the name pins down the event uniquely. Valid types are:

Reference data, output or notation; not an executable JavaScript program.

```text
Batch            External
Console          Bookmark
App              Link
Doc              Field
Page             Menu
```

### value

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | Various | R/W |

What this property denotes shifts from one field event to another:

On the Field/Validate event, it is whatever value the field holds at commit time. With a combo box, that is the face value rather than the export value (see changeEx).

As an illustration, the JavaScript below confirms the field value sits between zero and 100:

```javascript
if (event.value < 0 | event.value > 100) {
    app.beep(0);
    app.alert("Invalid value for field " + event.target.name);
    event.rc = false;
}
```

On a Field/Calculate event, JavaScript ought to assign this property. It is the value the field should adopt once the event wraps up.

As an illustration, the JavaScript below sets the field's calculated value to the SubTotal field's value plus tax.

```javascript
var f = this.getField("SubTotal");
event.value = f.value * 1.0725;
```

On a Field/Format event, JavaScript ought to assign this property. It is the value drawn on when building the field's appearance. By default it carries whatever value the user committed. With a combo box, this is the face value rather than the export value (see changeEx for the export value).

As an illustration, the JavaScript below formats the field as a currency type of field.

```javascript
event.value = util.printf("$%.2f", event.value);
```

On a Field/Keystroke event, it is the field's current value. When editing a text field, say, this is the text sitting in the text field ahead of the keystroke being applied.

On Field/Blur and Field/Focus events, it is the field's current value. Across those two events, event.value is read only. Put another way, setting event.value cannot alter the field value.

From Acrobat 5.0 on, a list box permitting multiple selections (see field. multipleSelection) behaves as follows. When the field value is an array (meaning several items are selected), event.value gives back an empty string on a get and refuses a set.
