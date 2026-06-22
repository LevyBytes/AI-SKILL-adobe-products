# Field (part 3)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — Field

| --- | --- | --- | --- | --- | --- |

Hands back the field's type as a string. The valid types are:

```
button
checkbox
combobox
listbox
radiobutton
signature
text
```

Fields

all

Example: Tally the text fields in the document.

```
var count = 0;
for ( var i=0; i<this.numFields; i++) {
    var fname = this.getNthFieldName(i);
    if ( this.getField(fname).type == "text" ) count++; }
console.println("There are " + count + " text fields.");
```

### userName

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

D

No

F

String

R/W

| --- | --- | --- | --- | --- | --- |

A short descriptive string naming the field. It is meant to surface as tooltip text the moment the cursor moves into a field, and it can double as a friendly label — rather than the raw field name — when error messages get built.

Fields

all

Example: Attach a tooltip to a button field.

```
var f = this.getField("mySubmit");
f.userName = "Press this button to submit your data.";
```

### value

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

D

No

F

various

R/W

| --- | --- | --- | --- | --- | --- |

Whatever value the user typed into the field. According to the field's type, it may come back as a String, Date, or Number. Calculated fields are the usual reason to read it.

From Acrobat 6.0 on, if a field carries rich text formatting, writing to this property throws that formatting away and rebuilds the field's value and appearance from the defaultStyle and the plain text. To change the value while preserving formatting, use the richValue property instead.

Note

On signature fields, a value comes back as a non-null string once the field has been signed.

In Acrobat 5.0 and later, when the field is a list box that takes multiple selections (see multipleSelection), you can hand it an array to set the value, and value gives back an array whenever a list box currently has several values picked.

For a list box with multiple selections, working through currentValueIndices is the preferred and most efficient route to read and write this kind of field's value.

See also valueAsString and event. type.

Fields

all except button

Example: Here the calculated field's value becomes the sum of the "Oil" and "Filter" fields, then multiplied by the state sales tax.

```
var oil = this.getField("Oil");
var filter = this.getField("Filter");
event.value = (oil.value + filter.value) * 1.0825;
```

### valueAsString

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Gives back a field's value as a JavaScript string.

The difference from value is that value tries to coerce a field's contents into an accepted format. Take a field holding "020": value yields the integer 20, whereas valueAsString yields the string "020".

Fields

all except button

### Field methods

### browseForFileToSubmit

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

When called on a text field whose fileSelect flag is set (checked), it brings up a standard file-selection dialog box. Whatever path the user enters there is assigned automatically as the text field's value.

When called on a text field whose fileSelect flag is clear (unchecked), it throws an exception.

Example: The code below points at a text field with the file select flag checked. It runs as a button field's mouse-up action.

```
var f = this.getField("resumeField");
f.browseForFileToSubmit();
```

### buttonGetCaption

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Reads back the caption attached to a button.

To assign the caption, turn to buttonSetCaption.

Parameters

Parameter

Description

nFace

(optional) When given, fetches a caption of the stated type:

0: (default) normal caption

1: down caption

2: rollover caption

| --- | --- |

Returns

The button's caption string.

Example: This one sets pointing arrows on either side of the caption of a button field that carries both icon and text.

```
// A mouse enter event
event.target.buttonSetCaption("=> "+ event.target.buttonGetCaption()
    +" <=");

// A mouse exit event
var str = event.target.buttonGetCaption();
str = str.replace(/=>  <=/g, "");
event.target.buttonSetCaption(str);
```

You could get the same look by reusing the same icon for rollover along with the same text plus the inserted arrows for the rollover caption. That route is slower and makes the icon flicker. The code above is fast and smooth because it touches only the caption and leaves the icon alone.

### buttonGetIcon

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Reads back the Icon object of a given type that belongs to a button.

For assigning an icon to a button, see the buttonSetIcon method as well.

Parameters

Parameter

Description

nFace

(optional) When given, fetches an icon of the stated type:

0: (default) normal icon

1: down icon

2: rollover icon

| --- | --- |

Returns

The Icon object.

Example:

```
// Swap two button icons.
var f = this.getField("Button1");
var g = this.getField("Button2");
var temp = f.buttonGetIcon();
f.buttonSetIcon(g.buttonGetIcon());
g.buttonSetIcon(temp);
```

See also buttonSetIcon and buttonImportIcon.

### buttonImportIcon

Version (Key)

Save-Prefs

Security

Product

3.01

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Brings in a button's appearance from a separate PDF file. With neither optional parameter supplied, the user gets prompted to choose a file.

See also buttonGetIcon, buttonSetIcon, addIcon, getIcon, importIcon, and removeIcon.

Note

(Acrobat 8.0) When cPath is supplied, this method runs only during batch and console events. See Privileged context. JavaScript events are covered in the event object.

Parameters

Parameter

Description

cPath

(optional, Acrobat 5.0) The file's device-independent path. From Acrobat 6.0 on, Acrobat first tries to open cPath as a PDF file. Failing that, it attempts to convert the file to PDF out of one of the recognized graphics formats (BMP, GIF, JPEG, PCX, PNG, TIFF) and then bring the converted file in as a button icon.

nPage

(optional, Acrobat 5.0) Which 0-based page of the file becomes the icon. It defaults to 0.

| --- | --- |

Returns

An integer, as follows:

1: The user cancelled the dialog

0: No error

-1: The chosen file would not open

-2: The chosen page was not valid

Example (Acrobat 5.0)

Assume a connection to an employee information database, reached through the ADBC object and its related objects. One employee record gets pulled, and three of its columns come into play: FirstName, SecondName, and Picture. That Picture column stores a device-independent path to the employee's picture, held in PDF format. The script could read like this:

```
var f = this.getField("myPicture");
f.buttonSetCaption(row.FirstName.value + " " + row.LastName.value);
if (f.buttonImportIcon(row.Picture.value) != 0)
    f.buttonImportIcon("/F/employee/pdfs/NoPicture.pdf");
```

The "myPicture" button field is configured to show icon and caption both. Joining the employee's first and last names produces the picture's caption. Note too that a fallback icon can be brought in should fetching the icon fail.

### buttonSetCaption

5.0

D

| --- | --- | --- | --- |

Assigns the caption attached to a button.

To read the current caption, turn to buttonGetCaption.

On how the icon and caption sit on the button face, see buttonAlignX, buttonAlignY, buttonFitBounds, buttonPosition, buttonScaleHow, and buttonScaleWhen.

Parameters

Parameter

Description

cCaption

The caption attached to the button.

nFace

(optional) When given, assigns a caption of the stated type:

0: (default) normal caption

1: down caption

2: rollover caption

| --- | --- |

Example:

```
var f = this.getField("myButton");
f.buttonSetCaption("Hello");
```

### buttonSetIcon

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

All

| --- | --- | --- | --- |

Assigns the icon attached to a button.

On how the icon and caption sit on the button face, see buttonAlignX, buttonAlignY, buttonFitBounds, buttonPosition, buttonScaleHow, and buttonScaleWhen.

To obtain an Icon object for this method's oIcon parameter, use either buttonGetIcon or doc.getIcon.

Note

This method has to run from script that lives inside the document. Run script that calls buttonSetIcon from the console of Adobe Reader, for instance, and a NotAllowedError exception gets thrown.

Parameters

Parameter

Description

oIcon

The Icon object attached to the button.

nFace

(optional) When given, assigns an icon of the stated type:

0: (default) normal icon

1: down icon

2: rollover icon

| --- | --- |

Example: This one walks every named icon in the document and uses the names to build a list box. Picking an entry in the list box puts the icon of that name onto the face of the field "myPictures". What comes next is the mouse-up action of the button field "myButton".

```
var f = this.getField("myButton")
var aRect = f.rect;
aRect[0] = f.rect[2];             // Place list box relative to the
aRect[2] = f.rect[2] + 144;        // position of "myButton"
var myIcons = new Array();
var l = addField("myIconList", "combobox", 0, aRect);
l.textSize = 14;
l.strokeColor = color.black;
for (var i = 0; i < this.icons.length; i++)
    myIcons[i] = this.icons[i].name;
l.setItems(myIcons);
l.setAction("Keystroke",
    'if (!event.willCommit) {rt'
    + 'var f = this.getField("myPictures");rt'
    + 'var i = this.getIcon(event.change);rt'
    + 'f.buttonSetIcon(i);r'
    + '}');
```

As for the named icons, you can bring them into the document either interactively — see the example under addIcon — or through a batch sequence.

For a fuller example, see also buttonGetCaption.

### checkThisBox

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

F

| --- | --- | --- | --- |

Marks or clears the specified widget.

Only check boxes can be cleared. This method won't uncheck a radio button, but when a radio button's default state is unchecked (see defaultIsChecked), the Doc's resetForm method can return it to that unchecked state.

Note

For a group of radio buttons with no duplicate export values, set the value to the export value of whichever widget should be checked — or pass an empty string to check none.

Parameters

Parameter

Description

nWidget

The 0-based index of one check box or radio button widget belonging to this field. That index follows the creation order of the field's individual widgets and is unaffected by tab-order. In the Fields panel, every entry carries a suffix that gives this index, such as MyField #0.

bCheckIt

(optional) States whether the widget should be checked. It defaults to true.

| --- | --- |

Example: Check a check box.

```
var f = this.getField("ChkBox");
f.checkThisBox(0,true);
```

### clearItems

Version (Key)

Save-Prefs

Security

Product

4.0

D

No

F

| --- | --- | --- | --- |

Wipes a combo box or list box clean of all its values.

Related methods and properties include numItems, getItemAt, deleteItemAt, currentValueIndices, insertItemAt and setItems.

Example: Strip every item out of the field "myList".

```
this.getField("myList").clearItems();
```

### defaultIsChecked

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

All

| --- | --- | --- | --- |

Sets whether the specified widget starts out checked or unchecked by default.

Note

When a radio-button group carries unique export values across its widgets, supply the export value of whichever widget should start out selected as the defaultValue (or hand it an empty string to leave every option clear by default).

Parameters

Parameter

Description

nWidget

Identifies, by 0-based index, one radio button or check box widget belonging to this field. That index follows the creation sequence of the field's individual widgets and ignores tab-order entirely. In the Fields panel, each listing is tagged with a matching suffix (for example, MyField #0).

bIsDefaultChecked

(optional) When true — the default — the widget begins checked, such as after a field reset. Pass false to leave it cleared by default.

| --- | --- |

Returns

true on success.

Example: flip “ChkBox” so its default state is checked, then run a reset so the field shows that default.

```
var f = this.getField("ChkBox");
f.defaultIsChecked(0,true);
this.resetForm(["ChkBox"]);
```

### deleteItemAt

Version (Key)

Save-Prefs

Security

Product

4.0

D

No

F

| --- | --- | --- | --- |

Removes a single entry from a combo box or list box.

With a list box, deleting whatever is currently selected leaves the field with nothing selected at all. Calling the method a second time on that same field while passing no argument can produce unpredictable results, since no current selection remains to remove. The safe approach is to establish a fresh selection first — currentValueIndices is one way — so the method continues to act as described.

Parameters

Parameter

Description

nIdx

(optional) Which list entry to remove, given as a 0-based index. Omit it and whatever is selected at the moment gets removed.

| --- | --- |

Example: drop whatever entry is selected, then make the list's first entry the new selection.

```
var a = this.getField("MyListBox");
a.deleteItemAt();              // Delete current item, and...
a.currentValueIndices = 0;     // select top item in list
```

### getArray

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Retrieves, from this parent Field object, the array of its terminal child fields — meaning the ones capable of holding a value.

Returns

An array of Field objects

Example: total up the values held by the parent field's child fields.

```
// f has 3 children: f.v1, f.v2, f.v3
var f = this.getField("f");
var a = f.getArray();
var v = 0.0;
for (j =0; j < a.length; j++) v += a[j].value;
// v contains the sum of all the children of field "f"
```

### getItemAt

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Fetches the internal value held by one entry of a combo box or list box.

To find how many entries a list holds, read numItems. Related calls include insertItemAt, deleteItemAt, clearItems, currentValueIndices and setItems.

Parameters

Parameter

Description

nIdx

The 0-based index of the item in the list or -1 for the last item in the list.

bExportValue

(optional, Acrobat 5.0) Controls whether an export value comes back: - When true (the default), the item's export value is returned if one exists; lacking an export value, the item name comes back instead. - When false, only the item name is returned.

| --- | --- |

Returns

The export value or name of the specified item.

Example: across both snippets below, take “myList” to hold three entries — “First” exporting 1, “Second” exporting 2, and “Third” carrying no export value.

```
// Returns value of first item in list, which is 1
var f = this.getField("myList");
var v = f.getItemAt(0);
```

This next snippet demonstrates that second optional argument: passing false yields the displayed item name (its face value) even where an export value has been assigned.

```
for (var i=0; i < f.numItems; i++)
    console.println(f.getItemAt(i,true) + ":  " + f.getItemAt(i,false));
```

The output to the console reads:

```
1:            First
2:            Second
Third:        Third
```

### getLock

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Returns a Lock object — a generic object that holds the lock properties belonging to a signature field.

See also setLock.

Returns

The Lock object for the field.

### insertItemAt

Version (Key)

Save-Prefs

Security

Product

3.01

D

No

F

| --- | --- | --- | --- |

Adds a fresh entry to a combo box or list box.

Companion methods and properties are numItems, getItemAt, deleteItemAt, clearItems, currentValueIndices and setItems.

Parameters

Parameter

Description

cName

The item name that will appear in the form.

cExport

(optional) The value exported for the field when this entry is the chosen one. Omitting it makes cName serve as the export value.

nIdx

(optional) Where in the list the new entry lands. At 0 (the default) it goes to the top; at –1 it is appended to the bottom.

| --- | --- |

Example:

```
var l = this.getField("myList");
l.insertItemAt("sam", "s", 0); /* inserts sam to top of list l */
```

### isBoxChecked

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Reports whether the named widget is currently in a checked state.

Note

When a radio-button group carries unique export values across its widgets, reading the value gives back the export value of whichever widget is checked at the moment — or an empty string when none is checked.

Parameters

Parameter

Description

nWidget

Identifies, by 0-based index, one radio button or check box widget belonging to this field. That index follows the creation sequence of the field's individual widgets and ignores tab-order entirely. In the Fields panel, each listing carries a matching suffix, for example, MyField #0.

| --- | --- |

Returns

true when that widget is checked right now; otherwise false.

Example: check the check box's state and surface the result through an alert box.

```
var f = this.getField("ChkBox");
var cbStatus = (f.isBoxChecked(0)) ? " " : " not ";
app.alert("The box is" + cbStatus + "checked");
```

### isDefaultChecked

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Reports whether the named widget starts out checked by default — for instance, once the field is reset.

Note

When a radio-button group carries unique export values across its widgets, reading the defaultValue gives back the export value of whichever widget is checked by default — or an empty string when none is.

Parameters

Parameter

Description

nWidget

Identifies, by 0-based index, one radio button or check box widget belonging to this field. That index follows the creation sequence of the field's individual widgets and ignores tab-order entirely. In the Fields panel, each listing carries a matching suffix, for example, MyField #0.

| --- | --- |

Returns

true when that widget is checked by default; otherwise false.

Example: find out whether the given check box defaults to checked.

```
var f = this.getField("ChkBox");
var cbStatus = (f.isDefaultChecked(0)) ? "Checked" : "Unchecked";
app.alert("The Default: " + cbStatus);
```

### setAction

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Assigns the JavaScript that the field runs in response to a particular trigger.

Companion calls are the Bookmark object's setAction method along with the Doc methods setAction, addScript, and setPageAction.

Note

Whatever action was previously attached to the selected trigger gets replaced by this method.

Parameters

Parameter

Description

cTrigger

A string naming which trigger fires the action. Values are: MouseUp MouseDown MouseEnter MouseExit OnFocus OnBlur Keystroke Validate Calculate Format On a list box, the Selection Change event is reached through the Keystroke trigger.

cScript

Whatever JavaScript should run once the trigger fires.

| --- | --- |

Example: build a button field via addField, give it a few properties, and wire a mouse-up handler through setAction.

```
var f = this.addField("actionField", "button", 0, [20, 100, 100, 20]);
f.setAction("MouseUp", "app.beep(0);");
f.delay = true;
    f.fillColor = color.ltGray;
    f.buttonSetCaption("Beep");
    f.borderStyle = border.b;
    f.lineWidth = 3;
    f.strokeColor = color.red;
    f.highlight = highlight.p;
f.delay = false;
```

### setFocus

Version (Key)

Save-Prefs

Security

Product

4.05

No

No

All

| --- | --- | --- | --- |

Hands keyboard focus to this field. Doing so may flip the user to a different page or scroll the view toward a new spot in the document. The document holding the field is also raised to the front whenever it is not already there.

See also bringToFront.

Example: locate a particular open document and then place focus on the field you care about. Because the script relies on app.activeDocs, each document's disclosed property has to be true, or else the script must run inside console, batch or menu events.

```
var d = app.activeDocs;
for (var i = 0; i < d.length; i++) {
    if (d[i].info.Title == "Response Document") {
        d[i].getField("name").value="Enter your name here: "
        // also brings the doc to front.
        d[i].getField("name").setFocus();
        break;
    }
}
```

### setItems

Version (Key)

Save-Prefs

Security

Product

4.0

D

No

F

| --- | --- | --- | --- |

Populates a combo box or list box with its full set of items.

Companion methods and properties are numItems, getItemAt, deleteItemAt, currentValueIndices and clearItems.

Parameters

Parameter

Description

oArray

An array whose every element is either something castable to a string or a nested array: - Where an element converts to a string, that string serves as both the user value and the export value for the list item. - Where an element is itself an array, it needs two string-convertible subelements, the first supplying the user value and the second the export value.

| --- | --- |

Examples

Pull several fields (combo or list) and fill their lists with entries through a mix of approaches.

```
var l = this.getField("ListBox");
l.setItems(["One", "Two", "Three"]);

var c = this.getField("StateBox");
c.setItems([["California", "CA"],["Massachusetts", "MA"],
    ["Arizona", "AZ"]]);

var c = this.getField("NumberBox");
c.setItems(["1", 2, 3, ["PI", Math.PI]]);
```

### setLock

Version (Key)

Save-Prefs

Security

Product

6.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Determines which fields get locked once a signature is placed in this signature field. Locked fields admit no changes. Clearing the signature releases every field that had been locked back to an unlocked state. To read the current configuration, call getLock.

Note

Running this method is permitted inside batch, console, or application-initialization events. See Privileged context.

A field sitting in a document that has already been signed cannot have this method applied to it.

Parameters

oLock

A Lock object that carries the lock properties.

| --- | --- |

Returns

true if successful, otherwise false or throws an exception.

Lock Object

A generic JavaScript object that holds lock properties. setLock receives it and getLock hands it back for a signature field. Its properties are as follows.

Property

Type

Access

Description

action
