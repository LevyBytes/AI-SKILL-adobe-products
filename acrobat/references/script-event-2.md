# Event (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — event

Anyone authoring PDFs that hold form fields with NeedAppearances set to true should run a Save As before publishing them online. The Save As step builds the form appearances and stores them inside the file. That lets Adobe Reader open the document faster when it runs inside a web browser.

### Form event processing

The state diagram further down lays out the sequence in which form events fire. A few dependencies deserve attention. As one case, the Focus event must fire first or the mouse-up event never happens.

### Multimedia event processing

Any time an event fires and reaches an EventListener, a multimedia event object rides along as a parameter to that EventListener. Resembling the event object found throughout Acrobat, it carries the properties spelled out below.

When rendition actions raise multimedia event objects — say, through custom JavaScript supplied on the Actions tab of the Multimedia Properties panel — those objects gain these extra properties:

action.annot

The ScreenAnnot object for this event.

action.rendition

The Rendition object for this event.

| --- | --- |

Multimedia event objects that the standard multimedia event dispatcher has handled pick up these properties too. Supplying your own events.dispatch method means they will not be present.

media.doc

The document, same as target.doc.

media.events

The events object, same as target.events.

media.id

A copy of event.name with spaces removed.

| --- | --- |

Particular events can expose properties of their own. Look to each EventListener object method's writeup for the specifics.

To halt any further dispatching, an event method invoked by the standard event dispatcher can assign either of these properties:

```
stopDispatch
stopAllDispatch
```

Setting event.stopDispatch to true keeps the current event from reaching the EventListeners that remain. Doing this inside an on event method stops the rest of the on methods from running for that event, yet the after methods still fire. Set event.stopAllDispatch and neither kind of event method runs afterward. Turn to the EventListener object for what the on and after EventListeners mean.

### event properties

### change

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Holds a string capturing whatever value change the user just keyed in. A JavaScript can swap out some or all of that string for other characters. That change might be a lone keystroke or a run of characters — for instance, when something is pasted into the field.

Example: Force every keystroke into upper case.

```
// Custom Keystroke for text field
event.change = event.change.toUpperCase();
```

### changeEx

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Various

R

| --- | --- | --- | --- | --- | --- |

Carries the export value of the change; it surfaces only throughout a Field/Keystroke event on list boxes and combo boxes.

With a list box, you enter the keystroke script, if there is one, under the Selection Change tab of the properties dialog box.

On a combo box, changeEx surfaces solely when the pop-up list comes into play — meaning a selection is being picked from the list by mouse or keyboard. Should the combo be editable and the user type an entry, the Field/Keystroke event acts the way it would for a text field (so no changeEx or keyDown event properties exist).

From Acrobat 6.0 onward, event.changeEx applies to text fields. With event.fieldFull set to true, changeEx holds the whole text string the user tried to enter while event.change holds that string trimmed to what the field can hold. Reach for event.richChangeEx (along with event.richChange) when working with rich text fields.

Example 1: A basic HTML-based online help system is built here.

What follows is a combo box built programmatically.

```
var c = this.addField({
    cName: "myHelp",
    cFieldType: "combobox",
    nPageNum: 0,
    oCoords: [72,12+3*72, 3*72, 0+3*72]
})
```

Next, load the combo box with its items.

```
c.setItems([
    ["Online Help", "http://www.example.com/myhelp.html"],
    ["How to Print", "http://www.example.com/myhelp.html#print"],
    ["How to eMail", "http://www.example.com/myhelp.html#email"]
]);
```

Set the action.

```
c.setAction("Keystroke", "getHelp()");
```

At the document level, this function gets defined.

```
function getHelp() {
    if ( !event.willCommit && (event.changeEx != "") )
        app.launchURL(event.changeEx);
}
```

Example 2: To see changeEx used with text fields, look at the example that comes right after fieldFull.

### commitKey

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

Reports the manner in which a form field gives up focus. Values are:

0: No commit happened (the escape key being pressed, say).

1: A mouse click landing outside the field drove the commit.

2: Pressing the Enter key drove the commit.

3: Tabbing onward to a fresh field drove the commit.

Example: To pop an alert dialog box automatically once a field has committed, drop the following into the field's format script:

```
if (event.commitKey != 0)
    app.alert("Thank you for your new field value.");
```

### fieldFull

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Goes true once the user tries entering text the field can't hold, whether from a spacing constraint (the Field object property doNotScroll is set to true) or a cap on characters (the Field object property charLimit is set to a positive value). With fieldFull true, event.changeEx carries the whole text string the user tried to enter and event.change carries that string trimmed to what fits inside the field.

Surfaces only within text-field keystroke events.

Events

Keystroke

Example 1: Here is a custom keystroke script for a text field carrying a character limit. Once the field fills up, or once the user commits the typed data, focus jumps to a different field.

```
if ( event.fieldFull | event.willCommit )
    this.getField("NextTabField").setFocus();
```

Example 2: Check whether the user has overfilled the text field. This is a custom keystroke script for a text field. To start, the field is configured so text won't scroll.

```
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

### keyDown

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Surfaces solely throughout a keystroke event on a list box and combo box. For a list box, or a combo box's pop-up portion, the value reads true when the arrow keys drove a selection and false if not.

On a combo box, keyDown surfaces only when its pop-up portion comes into play — that is, a selection is being picked from the pop-up by mouse or keyboard. Should the combo be editable and the user type an entry, the Field/Keystroke event acts the way it would for a text field (so no changeEx or keyDown event properties exist).

### modifier

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Reports whether the modifier key is held during a given event. That modifier key is Control on the Microsoft Windows platform and Option or Command on the Mac OS platform. UNIX does not support this property.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.05

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Gives the running event's name as a text string. Pairing the type with the name pins down the event uniquely. Valid names are:

```
Keystroke        Mouse Exit
Validate         WillPrint
Focus            DidPrint
Blur             WillSave
Format           DidSave
Calculate        Init
Mouse Up         Exec
Mouse Down       Open
Mouse Enter      Close
```

Events

All

### rc

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Serves validation. Flags whether a given event along the event chain ought to succeed. Assign false to block a change from happening or a value from committing. true is the default.

Events

Keystroke, Validate, Menu

### richChange

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

No

Array of Span objects

R/W

| --- | --- | --- | --- | --- | --- |

Captures the value change the user just keyed in. Defined only for rich text fields, the richChange property echoes how the event.change property behaves. richChange's value is an array of Span objects pinning down both the text put into the field and its formatting. A keystroke shows up as a single-member array, whereas rich text pasted into a field shows up as an array of any length.

With event.fieldFull true, richChangeEx holds the whole rich formatted text string the user tried to enter and event.richChange holds that rich formatted string trimmed to what fits inside the field. Reach for event.changeEx (along with event.change) on (plain) text fields.

Related objects and properties are event. richValue, the Span object, the Field object defaultStyle, richText, and richValue properties, and the Annotation object richContents property.

Events

Keystroke

Example: Each keystroke is uppercased here, its text tinted blue then red in turn, with underlining toggled on and off.

```
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

### richChangeEx

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of Span objects

R/W

| --- | --- | --- | --- | --- | --- |

Defined only for rich text fields, this property echoes how the event.changeEx property behaves on text fields. Its value is an array of Span objects pinning down both the text put into the field and its formatting. A keystroke shows up as a single-member array, whereas rich text pasted into a field shows up as an array of any length.

Should event.fieldFull be true, richChangeEx holds the whole rich formatted text string the user tried to enter and event.richChange holds that rich formatted string trimmed to what fits inside the field. Reach for event.changeEx (along with event.change) on (plain) text fields.

Related objects and properties include event. richChange, event. richValue, the Span object, the Field object defaultStyle, richText, and richValue properties, and the Annotation object richContents property.

Events

Keystroke

Example: Should the user fill up the text field, permit more text by switching the field to scroll.

```
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

### richValue

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of Span objects

R/W

| --- | --- | --- | --- | --- | --- |

For each event, this property echoes both the Field object's richValue property and the event.value property.

Related objects and properties include the Span object, the Field object properties defaultStyle, richText, richValue, event. richChange, event. richChangeEx, and the Annotation object richContents property.

Events

Keystroke

Example: Convert every bold run into red, underlined text.

```
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

### selEnd

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Where the running text selection ends during a keystroke event.

Example: Combine the most recent change (in a text field) with the change not yet committed. Both selEnd and selStart feed the function.

```
function AFMergeChange(event)
{
    var prefix, postfix;
    var value = event.value;

    if(event.willCommit) return event.value;
    if(event.selStart >= 0)
        prefix = value.substring(0, event.selStart);
    else prefix = "";
    if(event.selEnd >= 0 && event.selEnd <= value.length)
        postfix = value.substring(event.selEnd, value.length);
    else postfix = "";
    return prefix + event.change + postfix;
}
```

### selStart

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Where the running text selection begins during a keystroke event. Example: Refer to the example that follows selEnd.

### shift

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reads true while the shift key is held during a given event, false otherwise.

Example: What follows is a mouse-up button action:

```
if (event.shift)
    this.gotoNamedDest("dest2");
else
    this.gotoNamedDest("dest1");
```

### source

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

The Field object behind the calculation event. As a rule this object differs from the event's target, which is the field undergoing calculation. With dynamic stamp calculation, event.source maps to the Doc object that set off the event.

### target

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

The target object behind the event. Across every mouse, focus, blur, calculate, validate, and format event, that is the Field object that set off the event. For other events — page open and close among them — it is the Doc or this object. .. raw:: html

### targetName

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Attempts to give back the name of the JavaScript currently running. Handy for debugging when you need to pinpoint the code throwing exceptions. Frequent targetName values take in:

For App/Init events, the folder-level script's file name

For Doc/Open events, the document-level script's name

For Batch/Exec events, the name of the PDF file under processing

For Field events, the name of the field

For Menu/Exec events, the menu item's name

For Screen events (multimedia events), the screen annotation's name

Whenever an exception fires, targetName gets reported provided a name can be identified.

Example: An error sits in the opening line of the folder-level JavaScript file conserve .js. As the viewer launches, an exception fires and the message points to where the trouble lies.

```
MissingArgError: Missing required argument.
App.alert:1:Folder-Level:App:conserve.js
 ===> Parameter cMsg.
```

### type

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

The running event's type. Pairing the type with the name pins down the event uniquely. Valid types are:

```
Batch            External
Console          Bookmark
App              Link
Doc              Field
Page             Menu
```

### value

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Various

R/W

| --- | --- | --- | --- | --- | --- |

What this property denotes shifts from one field event to another:

On the Field/Validate event, it is whatever value the field holds at commit time. With a combo box, that is the face value rather than the export value (see changeEx).

As an illustration, the JavaScript below confirms the field value sits between zero and 100:

```
if (event.value < 0 | event.value > 100) {
    app.beep(0);
    app.alert("Invalid value for field " + event.target.name);
    event.rc = false;
}
```

On a Field/Calculate event, JavaScript ought to assign this property. It is the value the field should adopt once the event wraps up.

As an illustration, the JavaScript below sets the field's calculated value to the SubTotal field's value plus tax.

```
var f = this.getField("SubTotal");
event.value = f.value * 1.0725;
```

On a Field/Format event, JavaScript ought to assign this property. It is the value drawn on when building the field's appearance. By default it carries whatever value the user committed. With a combo box, this is the face value rather than the export value (see changeEx for the export value).

As an illustration, the JavaScript below formats the field as a currency type of field.

```
event.value = util.printf("$%.2f", event.value);
```

On a Field/Keystroke event, it is the field's current value. When editing a text field, say, this is the text sitting in the text field ahead of the keystroke being applied.

On Field/Blur and Field/Focus events, it is the field's current value. Across those two events, event.value is read only. Put another way, setting event.value cannot alter the field value.

From Acrobat 5.0 on, a list box permitting multiple selections (see field. multipleSelection) behaves as follows. When the field value is an array (meaning several items are selected), event.value gives back an empty string on a get and refuses a set.

### willCommit

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Confirms the running keystroke event ahead of the data being committed. It can serve to inspect target form field values — checking, for instance, whether character data went in where numeric data belonged. JavaScript flips this property to true after the final keystroke event and before the field undergoes validation. Example: The layout of a keystroke event is illustrated below.

```
var value = event.value
if (event.willCommit)
    // Final value checking.
else
    // Keystroke-level checking.
```
