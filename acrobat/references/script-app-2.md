# App (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app

(optional) The number of the existing toolbar button that the new button should precede. With nPos at -1 (its default), the new button is tacked onto the end of the toolbar.

cLabel

(optional, Acrobat 7.0) A text label placed on the button just to the right of its icon. By default no label appears.

| --- | --- |

Returns

undefined

Example: Create a button from an icon graphic on the user's hard drive. This script is executed from the console.

```
// Create a document
var myDoc = app.newDoc();

// import icon (20x20 pixels) from the file specified
myDoc.importIcon("myIcon", "/C/myIcon.jpg", 0);

// convert the icon to a stream.
oIcon = util.iconStreamFromIcon(myDoc.getIcon("myIcon"));

// close the doc now that we have grabbed the icon stream
myDoc.closeDoc(true);

// add a toolbutton
app.addToolButton({
    cName: "myToolButton",
    oIcon: oIcon,
    cExec: "app.alert('Someone pressed me!')",
    cTooltext: "Push Me!",
    cEnable: true,
    nPos: 0
});

app.removeToolButton("myToolButton")
```

See also the example following util. iconStreamFromIcon.

### alert

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Brings up an alert dialog box.

Parameters

Parameter

Description

cMsg

A string holding the message that gets displayed.

nIcon

(optional) Which icon to show. The possible values are:

0: Error (default)

1: Warning

2: Question

3: Status - On Mac OS, warnings and questions are treated as one and the same.

nType

(optional) Which group of buttons to show. The possible values are:

0: OK (default)

1: OK, Cancel

2: Yes, No

3: Yes, No, Cancel

cTitle

(optional, Acrobat 6.0) Text for the dialog box title. Leave it out and the title "Adobe Acrobat" is used.

oDoc

(optional, Acrobat 6.0) The Doc object the alert should be tied to.

oCheckbox

(optional, Acrobat 6.0) Supply this and a check box appears in the alert box's lower-left corner. oCheckbox is a plain JavaScript object carrying three properties; the alert method reads the first two property values, while the third hands back a Boolean.

cMsg: (optional) A string shown next to the check box. Omit it and the default text "Do not show this message again" is used.

bInitialValue: (optional) Set true to have the check box start out checked. It defaults to false.

bAfterValue: Holds the check box's state once the alert method finishes — that is, its state when the dialog box closed. A value of true means the box was checked at the moment the alert box closed.

| --- | --- |

Returns

nButton — a code identifying which button the user clicked:

1: OK

2: Cancel

3: No

4: Yes

Example 1: Display a simple alert box:

```
app.alert({
    cMsg: "Error! Try again!",
    cTitle: "Acme Testing Service"
});
```

Example 2: Shut the document only once the user has agreed to it:

```
// A MouseUp action
var nButton = app.alert({
    cMsg: "Do you want to close this document?",
    cTitle: "A message from A. C. Robat",
    nIcon: 2, nType: 2
});
if ( nButton == 4 ) this.closeDoc();
```

Example 3 (Acrobat 6.0)

Here one document raises an alert box belonging to a second. Two documents are in play, DocA and DocB — DocA loaded inside a browser while DocB sits in the viewer.

```
// The following is a declaration at the document level in DocA
var myAlertBoxes = new Object;
myAlertBoxes.oMyCheckbox = {
    cMsg: "Care to see this message again?",
    bAfterValue: false
}
```

What follows is a mouse-up action inside DocA. There, theOtherDoc holds the Doc object for DocB. The alert box checks whether the user wants it shown another time; tick the check box and the alert stops reappearing.

```
if ( !myAlertBoxes.oMyCheckbox.bAfterValue )
{
    app.alert({
        cMsg: "This is a message from the DocA?",
        cTitle: "A message from A. C. Robat",
        oDoc:theOtherDoc,
        oCheckbox: myAlertBoxes.oMyCheckbox
    });
}
```

### beep

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Makes the system sound a tone.

Note

Under Mac OS and UNIX the beep type carries no effect.

Parameters

Parameter

Description

nType

(optional) Which sound to play. Each value maps to a sound as follows:

0: Error

1: Warning

2: Question

3: Status

4: Default (default value)

| --- | --- |

### beginPriv

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

All

| --- | --- | --- | --- |

Lifts the execution privilege of the current stack frame so that methods flagged secure can run without tripping security exceptions. Success demands a frame already on the stack standing for the execution of a trusted function, and every frame between the one now executing and that frame — the calling frame included — must stand for the execution of trust propagator functions.

To take the privilege back, call app.endPriv. A trusted function comes from app.trustedFunction, and a trust propagator function comes from app.trustPropagatorFunction. The notion of a stack frame is taken up just after the app.trustedFunction description.

Returns

undefined on success, exception on failure

Example: For examples of usage, see trustedFunction and trustPropagatorFunction.

### browseForDoc

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

All

| --- | --- | --- | --- |

Opens a file system browser, then hands back an object describing how the user responded.

Note

This method runs only during a batch or console event. The event object topic covers how JavaScript events work. See Privileged context.

Parameters

Parameter

Description

bSave

(optional) A Boolean; when true, the file system browser is shown in the form it would take for a save operation. It defaults to false.

cFilenameInit

(optional) A string giving the default file name with which the file system browser is pre-populated.

cFSInit

(optional) A string naming which file system the browser targets to begin with. Just two values work here: "" (the empty string), which denotes the default file system, alongside "CHTTP"; absent either, the default file system applies. Only a WebDAV-capable web server makes this parameter meaningful.

| --- | --- |

Returns

Succeed, and the call yields an object carrying these three properties.

Property

Description

cFS

A string giving the resulting file system name for the file that was chosen.

cPath

A string giving the resulting path for the file that was chosen.

cURL

A string giving the resulting URL for the file that was chosen.

| --- | --- |

Cancel out and the return value is undefined. On error, an exception is thrown.

Example 1: Bring up the browser to pick a document, then print the returned object out for inspection.

```
var oRetn = app.browseForDoc({
    cFilenameInit: "myComDoc.pdf",
    cFSInit: "CHTTP",
});
if ( typeof oRetn != "undefined" )
    for ( var o in oRetn )
        console.println( "oRetn." + o + "=" + oRetn[o]);
else console.println("User cancelled!");
```

If the user selects a file on a WebDAV server, a possible output of this code is given below:

```
oRetn.cFS=CHTTP
oRetn.cPath=http://www.example.com/WebDAV/myComDoc.pdf
oRetn.cURL=http://www.example.com/WebDAV/myComDoc.pdf
```

Should the user select a file in the default file system, a typical output of this code is given below:

```
oRetn.cFS=DOS
oRetn.cPath=/C/temp/myComDoc.pdf
oRetn.cURL=file:///C|/temp/myComDoc.pdf
```

From here the script may open the chosen file by way of app.openDoc.

```
var myURL = (oRetn.cFS=="CHTTP") ? encodeURI(oRetn.cPath) : oRetn.cPath;
var oDoc = app.openDoc({cPath: myURL, cFS: oRetn.cFS});
```

Note

When pulling a file from a WebDAV server, app.openDoc wants cPath passed as an escaped string. A short description with an example sits under app. openDoc.

Example 2: Browse and save a document.

```
var oRetn = app.browseForDoc({
    bSave: true,
    cFilenameInit: "myComDoc.pdf",
    cFSInit: "CHTTP",
});
if ( typeof oRetn != "undefined" ) this.saveAs({
    cFS: oRetn.cFS, cPath: oRetn.cPath, bPromptToOverwrite: false});
```

### clearInterval

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Stops an interval that the setInterval method had registered earlier.

Companion methods: setTimeOut and clearTimeOut.

Parameters

oInterval

The registered interval that is to be canceled.

| --- | --- |

Example: See setTimeOut.

### clearTimeOut

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Stops a time-out interval registered earlier. setTimeOut is what registers such an interval in the first place.

Companion methods: setInterval and clearInterval.

Parameters

oTime

The time-out interval, registered earlier, that is to be canceled.

Example: See setTimeOut.

### endPriv

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

All

| --- | --- | --- | --- |

Withdraws whatever privilege app.beginPriv granted to the current stack frame. Privilege granted by the current event stays in place.

Related methods are app. trustedFunction, app. trustPropagatorFunction and app. beginPriv.

Returns

undefined on success, exception on failure

Example: For examples of usage, see trustedFunction and trustPropagatorFunction.

### execDialog

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Puts a modal dialog box in front of the user. Until the user dismisses a modal dialog box, the host application cannot be worked with directly again.

A dialog descriptor is what the monitor parameter supplies: a generic object literal bundling handler functions for assorted events together with properties that lay out the dialog box's contents.

Each dialog box item is tagged by an ItemID, a unique 4-character string. You only need an ItemID when the element gets referenced somewhere else in the dialog box description — to read or write its value, to attach a handler to it, or to fold it into a tab order, for instance.

Note

So that Acrobat dialog boxes stand apart from those JavaScript builds, any dialog box added at the document level carries the title "JavaScript Dialog" and shows "Warning: JavaScript Dialog" across its bottom.

Parameters

Parameter

Description

monitor

An object literal made up of several handlers (see Dialog box handlers) plus a description property laying out the dialog box elements (see description property).

inheritDialog

(optional) A Dialog object to reuse while this dialog box is shown. It helps when a run of dialog boxes (a wizard, say) is displayed, keeping one from vanishing before the next appears. By default no dialog box is reused.

parentDoc

(optional) A Doc object to serve as this dialog box's parent. By default the parent is the Acrobat application.

| --- | --- |

Returns

A string — the ItemID of whichever element dismissed the dialog box. That value is "ok" or "cancel" when the dismissing element is the ok or cancel button.

Note

While a modal dialog box raised by app.execDialog is active, debugging is turned off.

Dialog box handlers

A dialog box handler fires when its particular dialog box event takes place. Every handler is optional, and each one receives a Dialog object usable for reading or writing values in the dialog box. The table below lists the handlers that are supported.

Dialog box handler

Description

initialize

Invoked as the dialog box undergoes its setup.

validate

Fires when a field changes, to judge whether the new value passes (return true) or fails (return false).

commit

Runs once the dialog box's OK button gets clicked.

destroy

Invoked as the dialog box is being torn down.

ItemID

Fires when the dialog box element ItemID changes. With a text box that means when the text box loses focus; with other controls it means when the selection changes. Where ItemID is not a JavaScript identifier, wrap the name in double quotes as the method is defined — see the example just below.

| --- | --- |

```
"bt:1": function () { .. }
  //If *ItemID* is a JavaScript identifier, the double quotes are optional. For example, the following are both correct.  ``"butn": function () { .. }
  butn: function () { .. }
```

description property

An object literal is what the description property holds, its properties spelling out the dialog. An elements property on it names the dialog box's elements, and any of those elements may in turn carry its own elements property describing subelements.

Listed in the following table are the dialog properties found at the root level of the description property.

Property

Type

Description

name

String

The dialog box's title bar, which ought to be localized.

first_tab

String

The ItemID of the dialog box item that should come first in the tab order. That same dialog box item is also active when the dialog box opens. Setting up a tabbing order requires this property. See the next_tab property defined below.

width

Numeric

The dialog box width in pixels. With no width given, the combined width of the contents applies.

height

Numeric

The dialog box height in pixels. With no height given, the combined height of the contents applies.

char_width

Numeric

The dialog box width in characters. With no width given, the combined width of the contents applies.

char_height

Numeric

The dialog box height in characters. With no height given, the combined height of the contents applies.

align_children

String

How every descendant is aligned. It must be one of these values:

"align_left": Left aligned

"align_center": Center aligned

"align_right": Right aligned

"align_top": Top aligned

"align_fill": Align to fill the parent's width; may widen objects.

"align_distribute": Distribute the contents over the parent's width.

"align_row": Distribute the contents over the parent's width with a consistent baseline.

"align_offscreen": Align items one on top of another.

elements

Array

An array of object literals describing the dialog box elements held inside this dialog (see elements property).

| --- | --- | --- |

elements property

A dialog box elements property names an object literal carrying the following set of properties.

Property

Type

Description

name

String

The shown name of the dialog box element, which ought to be localized. The "edit_text" type ignores this property.

item_id

String

This dialog box's ItemID, a unique 4-character string.

type

String

What kind of dialog box element this is. It must be one of these strings:

button" - A push button.

check_box" - A check box.

radio" - A radio button.

list_box" - A list box.

hier_list_box" - A hierarchical list box.

static_text" - A static text box.

edit_text" - An editable text box.

popup" - A pop-up control.

ok" - An OK button.

ok_cancel" - An OK and Cancel Button.

ok_cancel_other" - An OK, Cancel, and Other button.

view" - A container for a set controls.

cluster" - A frame for a set of controls.

gap" - A place holder.

next_tab

String

The ItemID of the next dialog box item in the tab order. Tabbing skips over any dialog box item that is not targeted by a next_tab (or first_tab) property. The tab order should close into a circular linked list.

width

Numeric

Gives the element width in pixels. With no width given, the combined width of the contents applies.

height

Numeric

Gives the element height in pixels. With no height given, the combined height of the contents applies.

char_width

Numeric

Gives the element width in characters. With no width given, the combined width of the contents applies.

char_height

Numeric

Gives the element height in characters. With no height given, the combined height of the contents applies.

font

String

Which font this element uses. It must be one of these strings:

default" - Default font

dialog" - Dialog box font

palette" - Palette (small) Font

bold

Boolean

Marks whether the font is bold.

italic

Boolean

Marks whether the font is italic.

alignment

String

Sets how this element is aligned. It must be one of these values:

align_left": Left aligned

align_center": Center aligned

align_right": Right aligned

align_top": Top aligned

align_fill": Align to fill the parent's width; may widen objects.

align_distribute": Distribute the contents over the parent's width.

align_row": Distribute the contents over the parent's width with a consistent baseline.

align_offscreen": Align items one on top of another.

align_children

String

Sets how every descendant is aligned. The possible values match those for alignment.

elements

Array

An array of object literals describing this dialog box element's subelements. Its properties match the ones laid out in this table.

| --- | --- | --- |

Element type

Property

Type

Description

static_text

multiline

Boolean

When true, this static text element runs to multiple lines. On Mac OS the height property has to reach at least 49 for the up/down buttons to show, the ones that let users scroll through the whole box content.

edit_text

multiline

Boolean

When true, this edit text element runs to multiple lines.

edit_text

readonly

Boolean

When true, this text element is read only. Setting password to true makes this property irrelevant.

edit_text

password

Boolean

When true, this text element acts as a password field.

edit_text

PopupEdit

Boolean

When true, this is a pop-up edit text element.

edit_text

SpinEdit

Boolean

When true, this is a spin edit text element.

radio

group_id

String

The name of the group this radio button is part of.

ok, ok_cancel,| ok_cancel_other

ok_name

String

The name for the OK button.

ok, ok_cancel,| ok_cancel_other

cancel_name

String

The name for the cancel button.

ok, ok_cancel,| ok_cancel_other

other_name

String

The name for the other button.

| --- | --- | --- | --- |

Example 1: Either a document-level or a folder-level JavaScript can hold the dialog box descriptor below. It builds a dialog box with text fields for your first and last name, and clicking OK echoes the entered names to the console.

```
var dialog1 = {
```
