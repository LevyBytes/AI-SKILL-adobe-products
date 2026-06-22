# Event (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — event

Every JavaScript script runs because some particular event fired. For each such event JavaScript builds an event object, and while that event is unfolding you can reach into the object to inspect — and sometimes alter — the event's present state.

A type property together with a name property pins down each event uniquely. What follows catalogs all the events as type/name pairs and notes any extra properties each one brings along.

An event's rc property carries its return code. Each event's write-up states whether that event pays attention to (is swayed by) the return code.

Authors writing JavaScript need to grasp the timing and ordering of these events. Access to certain methods or properties is restricted to particular events.

### Event type/name combinations

App/Init

Field/Calculate

Page/Close

Batch/Exec

Field/Focus

Screen/Blur

Bookmark/Mouse Up

Field/Format

Screen/Close

Console/Exec

Field/Keystroke

Screen/Focus

Doc/DidPrint

Field/Mouse Down

Screen/InView

Doc/DidSave

Field/Mouse Enter

Screen/Mouse Down

Doc/Open

Field/Mouse Exit

Screen/Mouse Enter

Doc/WillClose

Field/Mouse Up

Screen/Mouse Exit

Doc/WillPrint

Field/Validate

Screen/Mouse Up

Doc/WillSave

Link/Mouse Up

Screen/Open

External/Exec

Menu/Exec

Screen/OutView

Field/Blur

Page/Open

| --- | --- | --- |

### App/Init

Firing when the viewer launches, this is the application initialization event. Script files known as folder-level JavaScripts get pulled in from both the application and user JavaScript folders, loading in this sequence: config.js, glob.js, every other file, and finally any user files.

The rc return code carries no weight for this event.

### Batch/Exec

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

As each document in a batch sequence is processed, this event fires. Scripts written into a batch sequence get at the event object when they run.

Doc is the target of this event.

This one does heed the rc return code: set rc to false and the batch sequence halts.

### Bookmark/Mouse Up

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Clicking a bookmark wired to a JavaScript is what fires this event.

Whichever bookmark object got clicked is the target of this event.

The rc return code carries no weight for this event.

### Console/Exec

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Evaluating a JavaScript in the console is what fires this event.

The rc return code carries no weight for this event.

### Doc/DidPrint

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Once a document has finished printing, this event fires.

Doc is the target of this event.

The rc return code carries no weight for this event.

### Doc/DidSave

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Once a document has been saved, this event fires.

Doc is the target of this event.

The rc return code carries no weight for this event.

### Doc/Open

Version (Key)

Save-Prefs

Security

Product

4.0

No

No

All

| --- | --- | --- | --- |

Opening a document is what fires this event. At open time, the document-level script functions are scanned and any exposed scripts run.

Doc is the target of this event, which additionally defines the targetName property.

The rc return code carries no weight for this event.

### Doc/WillClose

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Just before a document closes, this event fires.

Doc is the target of this event.

The rc return code carries no weight for this event.

### Doc/WillPrint

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Just before a document prints, this event fires.

Doc is the target of this event.

The rc return code carries no weight for this event.

### Doc/WillSave

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Just before a document is saved, this event fires.

Doc is the target of this event.

The rc return code carries no weight for this event.

### External/Exec

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Some outside access produces this event — by way of OLE or AppleScript, or by loading an FDF, for example.

The rc return code carries no weight for this event.

### Field/Blur

Version (Key)

Save-Prefs

Security

Product

4.05

No

No

All

| --- | --- | --- | --- |

Trailing every other event, this one fires right as a field gives up focus. It is raised whether or not a mouse click did the deactivating — a tab key, for instance, works just as well.

Additional properties defined:

target: whichever field is running its validation script.

modifier, shift, targetName, and value.

The rc return code carries no weight for this event.

### Field/Calculate

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

A change in a form that forces every field carrying a calculation script to run is what defines this event. Each field whose result rides on the changed field's value gets recalculated now. Those fields may, in turn, spawn further Field/Validate, Field/Blur, and Field/Focus events.

One calculated field can hinge on others whose values have to be worked out first. Holding an ordered list of every field in a document that carries a calculation script is the calculation order array. Whenever a full calculation is required, the fields are computed one after another, beginning at the array's zeroth index and running through to its end.

Want a different calculation order for the fields? While in Edit Form mode, reach for the Forms > Edit Fields > Set Field Calculation Order menu item.

The target of this event is whichever field's calculation script is running. It also defines the source and targetName properties.

This one does heed the rc return code. A return code of false leaves the field's value untouched; true assigns the field whatever the value property currently holds.

### Field/Focus

Version (Key)

Save-Prefs

Security

Product

4.05

No

No

All

| --- | --- | --- | --- |

Landing after the mouse-down event yet ahead of the mouse-up event once the field takes focus, this event arises no matter whether a mouse click activated the field (the tab key serves too), and it is the ideal spot for any work that must finish before the user starts interacting with the field.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.

### Field/Format

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Once every dependent calculation has finished, this event fires. It lets the attached JavaScript adjust how the data value looks to a user — its presentation, or appearance. Say the value is a number meant to read as currency: the formatting script can prepend a dollar sign ($) and cap it at two places after the decimal point.

The target of this event is whichever field's format script is running. It also defines the commitKey, targetName, and willCommit properties.

The rc return code carries no weight for this event. Its resulting value, though, is what the field shows as its formatted appearance.

### Field/Keystroke

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Whenever a user enters a keystroke in a text box or combo box (cut and paste counts) or picks an item from a combo box list or list box field, this event fires. A keystroke script can restrict which keys are permitted — a numeric field, for one, might accept only numeric characters.

Acrobat's interface lets an author attach a Selection Change script to list boxes, and it runs each time an item is picked. Under the hood this is the keystroke event, with the keystroke value standing in for the user's selection. The combo box behaves the same way — its "keystroke" amounts to pasting the drop-down selection into the text field.

Right before the validate event fires, the keystroke script gets one last call, which sets willCommit to true for the event. During keystroke handling it can help to run a final pre-commit check on the field value before it is locked in, giving the script author a graceful way to deal with awkward formats that only partial keystroke-by-keystroke checking can cover.

Text fields invoke the keystroke event in cases beyond the user typing or committing a value. It also fires to validate a field's default value when that value is set through the UI or by JavaScript, and to validate autofill entries. Not every event property is populated in these cases: specifically, event.target is undefined while validating default values, and event.richChange and event.richValue are undefined while validating autofill entries.

The target of this event is whichever field's keystroke script is running. It also defines the commitKey, change, changeEx, keyDown, modifier, selEnd, selStart, shift, targetName, value, and willCommit properties.

This one does heed the rc return code. Set it to false and the keystroke is dropped. When the script wants to swap in its own keystroke, the resulting change stands in for it. Adjusting the resultant selEnd and selStart properties can shift the field's current text selection.

### Field/Mouse Down

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Fired the moment a user begins clicking a form field while the mouse button stays pressed. No mouse-down event happens unless a mouse enter event came first. Keep processing here to a minimum — playing a brief sound, for example.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.

### Field/Mouse Enter

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Moving the pointer into a field's rectangle is what fires this event. A common use is opening a text field here to show help text.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.

### Field/Mouse Exit

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Sliding the mouse pointer back out of a field's rectangle is what fires this event. A mouse exit event cannot happen unless a mouse enter event preceded it.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.

### Field/Mouse Up

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Clicking a form field and letting the mouse button go is what fires this event — the usual spot to hang routines such as a form's submit action. A mouse-up event cannot happen unless a mouse-down event preceded it.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.

### Field/Validate

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Whatever the field type, a user's interaction with it can yield a new value. The user is said to have committed that new value once they click outside the field, tab to another field, or press the enter key.

For a field, this is the very first event raised after the value is committed, giving a JavaScript its chance to confirm the entry was right. Should the validate event pass, the calculate event comes next.

The target of this event is whichever field's validation script is running. It also defines the change, changeEx, keyDown, modifier, shift, targetName, and value properties.

The rc return code carries no weight for this event. A return code of false marks the field value invalid and leaves the field unchanged.

### Link/Mouse Up

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

A user activating a link that carries a JavaScript action is what fires this event.

Doc is the target of this event.

The rc return code carries no weight for this event.

### Menu/Exec

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Running JavaScript that has been bound to a menu item is what fires this event. A user can introduce a menu item and tie JavaScript actions to it. For instance,

```
app.addMenuItem({ cName: "Hello", cParent: "File",
    cExec: "app.alert('Hello',3);", nPos: 0});
```

During a menu event the script app.alert('Hello',3) runs. Two paths lead there:

The user picks the menu item from the user interface.

Programmatically, by executing app.execMenuItem("Hello") — perhaps inside a button field's mouse-up event.

The target of this event is whatever document is currently active, if one is open. It also defines the targetName property.

For the enable and marked proc of menu items, this event does heed the rc return code. (See app.addMenuItem's cEnabled and cMarked parameters.) Return false and the menu item is disabled or unmarked; return true and it is enabled or marked.

### Page/Open

Version (Key)

Save-Prefs

Security

Product

4.05

No

No

All

| --- | --- | --- | --- |

Once the user views a new page and that page has finished drawing, this event fires.

Doc is the target of this event.

The rc return code carries no weight for this event.

### Page/Close

Version (Key)

Save-Prefs

Security

Product

4.05

No

No

All

| --- | --- | --- | --- |

Whenever the page on screen stops being the current one — the user moved to another page or closed the document — this event fires.

Doc is the target of this event.

The rc return code carries no weight for this event.

### Screen/Blur

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Trailing every other event, this one fires right as the screen annotation gives up focus. It is raised whether or not a mouse click did the deactivating (the tab key, say, might do it instead).

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier and shift properties.

The rc return code carries no weight for this event.

### Screen/Close

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Whenever the page on screen stops being the current one — the user moved to another page or closed the document — this event fires.

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier, shift, and target properties.

The rc return code carries no weight for this event.

### Screen/Focus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Arriving after the mouse-down event but before the mouse-up once the field takes focus, this routine runs whether or not a mouse click activated the screen annotation (the tab key might serve instead). It is the ideal spot for any work that must finish before the user can interact with the field.

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier and shift properties.

The rc return code carries no weight for this event.

### Screen/InView

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

The first time a new page comes into the user's view, this event fires. With the page layout set to Continuous or Continuous - Facing, it precedes the Screen/Open event.

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier and shift properties.

The rc return code carries no weight for this event.

### Screen/Mouse Down

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Firing of this event begins the moment the user presses down on a screen annotation while the mouse button stays held. Keep whatever you run here lightweight — a brief sound clip is a good example. Without a preceding mouse enter event, no mouse-down event fires at all.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.

### Screen/Mouse Enter

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Moving the mouse pointer so that it falls within a screen annotation's rectangle is what fires this event.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.

### Screen/Mouse Exit

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Acting as the counterpart to Mouse Enter, this event fires once the pointer leaves a screen annotation's rectangle. No Mouse Exit event can fire unless a Mouse Enter event preceded it.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.

### Screen/Mouse Up

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Releasing the mouse button after clicking a screen annotation is what fires this event. Hooking up actions like launching a multimedia clip belongs right here. A mouse-up event cannot fire unless a mouse-down event came first.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.

### Screen/Open

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Each time the user lands on a fresh page, this event fires once that page has finished drawing.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.

### Screen/OutView

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

This event fires the first time a page leaves the user's view. With the page layout set to Continuous or Continuous - Facing, the firing lands after the Screen/Close event.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.

### Document Event Processing

Opening a document fires the Doc/Open event first. The viewer scans functions and runs any top-level scripts that are exposed. After that, when the PDF's AcroForm dictionary carries a NeedAppearances entry set to true, every form field's formatting script runs. (Consult the PDF Reference.) The Page/Close event comes last.

Note
