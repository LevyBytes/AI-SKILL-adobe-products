# Field (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — Field

An Acrobat form field — the kind made with the Acrobat form tool or via the Doc addField method — is what this object stands for. Just as a form author can adjust an existing field's properties such as its font or border color, the Field object lets the JavaScript user carry out those same edits.

Reaching a field first requires binding it to a JavaScript variable through one of the Doc's methods. You can bind several variables to a single field by reading or writing the field's object properties or invoking its methods — and a change made through any one of them reaches every variable bound to that field.

```
var f = this.getField("Total");
```

Here the variable f gives the script a handle for working with the "Total" form field.

A document's fields may be organized into a hierarchy. Take form fields named "FirstName" and "LastName": these are flat names with nothing tying them together. Renaming the fields lets you build a hierarchy of fields inside the document.

"Name.First" and "Name.Last", for instance, build a tree of fields. Within Acrobat forms the period ('.') separator marks a step down the hierarchy. Across those fields "Name" acts as the parent, with "First" and "Last" as its children. "Name" also counts as an internal field, since it has no visible appearance, whereas "First" and "Last" are terminal fields that show up on the page.

When Acrobat form fields carry the same name they also carry the same value. A terminal field may present that data in more than one way — appearing on separate pages, carrying a different rotation, or taking a different font or background color — yet the value stays the same across them. So editing the value on one presentation of a terminal field pushes the same update automatically to every other one sharing that name.

A widget is the term for each presentation of a terminal field. No widget carries a name of its own; instead a 0-based index within its terminal field identifies it. That index follows the sequence in which the field's individual widgets were made, and tab-order has no bearing on it.

To find the index of a particular widget, turn to Acrobat's Fields navigation tab. The index is whatever number trails the '#' sign inside the displayed field name. (From Acrobat 6.0 onward, that widget index shows only when a field holds more than one widget.) Double-clicking an entry in the Fields panel jumps you to the matching widget in the document; conversely, selecting a field in the document highlights its matching entry in the Fields panel.

From Acrobat 6.0 on, getField can fetch the Field object for a single one of a field's widgets. The notation for this tacks a "." (period) plus the widget index onto the field name you pass. Used this way, the Field object getField returns wraps just one individual widget. Such Field objects work anywhere a Field object obtained by passing the plain field name would — though, as the table below shows, the collection of nodes affected can differ.

From Acrobat 8.0 on, the LiveCycle Reader Extensions Field right gets checked for Field objects only when the JavaScript runs outside the PDF file — from the JavaScript console, via batch execution, or via JSObject.

Action

Field object that represents all widgets

Field object that represents one specific widget

Get a widget property

Gets the property of widget # 0.

Gets the property of the widget.

Set a widget property

Sets the property of all widgets that are children of that field. (The rect property and the setFocus method are exceptions that apply to widget # 0. See example below.)

Sets the property of the widget.

Get a field property

Gets the property of the field.

Gets the property of the parent field.

Set a field property

Sets the property of the field.

Sets the property of the parent field.

| --- | --- | --- |

In the next example the rect property of the "my radio" field's second radio button — index 1, since the first sits at index 0 — gets reset.

```
var f = this.getField("my radio.1");
f.rect = [360, 677, 392, 646];
```

### Field versus widget attributes

A handful of Field object properties, value among them, reach every widget that is a child of the field. Others, such as rect, belong to one widget alone.

These field properties and methods touch field-level attributes:

```
calcOrderIndex, charLimit, comb, currentValueIndices,defaultValue,

 doNotScroll, doNotSpellCheck, delay, doc, editable, exportValues,

 fileSelect, multiline, multipleSelection, name, numItems,page, password,

 readonly, required,submitName, type, userName, value, valueAsString,

 clearItems, browseForFileToSubmit, deleteItemAt, getItemAt, insertItemAt,

 setAction, setItems,signatureInfo, signatureSign, and signatureValidate.
```

These field properties and methods touch widget-level attributes:

```
alignment, borderStyle, buttonAlignX, buttonAlignY, buttonPosition,

 buttonScaleHow, buttonScaleWhen, display, fillColor, hidden, highlight,

 lineWidth, print, rect, strokeColor, style, textColor, textFont, textSize,

 buttonGetCaption, buttonGetIcon, buttonImportIcon, buttonSetCaption,

 buttonSetIcon, checkThisBox, defaultIsChecked, isBoxChecked,

 isDefaultChecked, setAction, and setFocus.
```

Note

Whether setAction lands at the field or the widget level turns on the event involved. Fields are the target of the Keystroke, Validate, Calculate, and Format events, while widgets are the target of the MouseUp, MouseDown, MouseEnter, MouseExit, OnFocus, and OnBlur events.

A widget index, nWidget, is taken as a parameter by the checkThisBox, defaultIsChecked, isBoxChecked, and isDefaultChecked methods. Call any of them on a Field object f that stands for one specific widget and the nWidget parameter turns optional — ignored even if supplied — with the method acting on the one widget f wraps.

### Field properties

Broadly, field properties line up with those kept in the field and annotation dictionaries of the PDF document (see the PDF Reference ).

The PDF document keeps some property values as names and others as strings (see the PDF Reference ). When a property is kept as a name, its string length is capped at 127 characters.

value and defaultValue on check boxes and radio buttons are among the properties carrying that 127-character cap. Every Annotation property, together with how each one is stored, is documented in the PDF Reference.

### alignment

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

Governs how text sits within the text field. Values are

```
left
center
right
```

Fields

text

Example:

```
var f = this.getField("MyText");
f.alignment = "center";
```

borderStyle

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

A field's border style. The valid border styles are

```
solid
dashed
beveled
inset
underline
```

How the rectangle's border gets drawn is set by the border style. As a static convenience constant, the border object spells out all of a field's border styles, per the table that follows:

Type

Keyword

Description

solid

border.s

Runs a solid line right around the rectangle's full edge.

beveled

border.b

Like solid, but adds a beveled (pushed-out look) edge set just inside that solid border.

dashed

border.d

Runs a dashed line around the rectangle's edge.

inset

border.i

Like solid, but adds an inset (pushed-in look) edge set just inside that solid border.

underline

border.u

Strokes only the lower stretch of the rectangle's edge.

| --- | --- | --- |

Fields

All

Example: here is how a field's border style gets set to solid :

```
var f = this.getField("MyField");
f.borderStyle = border.s; /* border.s evaluates to "solid" */
```

### buttonAlignX

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets how leftover space gets allotted, measured from the left edge of the button face, relative to the icon. The figure is a percentage running from 0 to 100 inclusive, defaulting to 50.

Scale the icon anamorphically — which leaves no space differences — and this property goes unused.

Fields

button

### buttonAlignY

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets how leftover space gets allotted, measured from the bottom edge of the button face, relative to the icon. The figure is a percentage running from 0 to 100 inclusive, defaulting to 50.

Scale the icon anamorphically — which leaves no space differences — and this property goes unused.

Fields

button

Example: An elevator animation is what this sample produces. "myElevator" here is a button form field built narrow and tall, with an icon brought in to serve as its appearance face.

```
function MoveIt()
{
    if ( f.buttonAlignY == 0 ) {
        f.buttonAlignY++;
        run.dir = true;
        return;
    }
    if ( f.buttonAlignY == 100 ) {
        f.buttonAlignY--;
        run.dir = false;
        return;
    }
    if (run.dir) f.buttonAlignY++;
    else f.buttonAlignY--;
}
var f = this.getField("myElevator");
f.buttonAlignY=0;
run = app.setInterval("MoveIt()", 100);
run.dir=true;
toprun = app.setTimeOut(
    "app.clearInterval(run); app.clearTimeOut(toprun)", 2*20000+100);
```

### buttonFitBounds

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

F

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Set this true and the limit on how far the icon may scale is pinned to the button field's bounds. The other icon-placement properties still come into play for scaling and positioning the icon inside the button face.

Earlier Acrobat releases always factored in the field border's width when scaling an icon to a button face, even with no border color set. Set this property true once a border color has been specified for the button and an exception gets raised.

Fields

button

### buttonPosition

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets where the button's text and icon sit in relation to one another inside the button face. Every valid alternative is laid out by the convenience position object.

Icon/text placement

Keyword

Text Only

position.textOnly

Icon Only

position.iconOnly

Icon top, Text bottom

position.iconTextV

Text top, Icon bottom

position.textIconV

Icon left, Text right

position.iconTextH

Text left, Icon right

position.textIconH

Text in Icon (overlaid)

position.overlay

| --- | --- |

Fields

button

### buttonScaleHow

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets how the icon scales, where needed, to sit inside the button face. Every valid alternative is laid out by the convenience scaleHow object:

How is icon scaled

Keyword

Proportionally

scaleHow.proportional

Non-proportionally

scaleHow.anamorphic

| --- | --- |

Fields

button

### buttonScaleWhen

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets the circumstances under which an icon scales to sit inside the button face. Every valid alternative is laid out by the convenience scaleWhen object:

When is icon scaled

Keyword

Always

scaleWhen.always

Never

scaleWhen.never

If icon is too big

scaleWhen.tooBig

If icon is too small

scaleWhen.tooSmall

| --- | --- |

Fields

button

### calcOrderIndex

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

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Alters the order in which the document's fields are calculated. As a computable text or combo box field joins a document, its name gets appended to the calculation order array — and that array dictates the sequence in which fields are calculated. The calcOrderIndex property behaves much like the Calculate tab of the Acrobat Form tool.

Fields

combobox, text

Example:

```
var a = this.getField("newItem");
var b = this.getField("oldItem");
a.calcOrderIndex = b.calcOrderIndex + 1;
```

Here "newItem" was added to the document after "oldItem". By adjusting the calcOrderIndex property of "newItem", the script forces it to be calculated ahead of "oldItem".

### charLimit

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

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Caps how many characters a user is allowed to enter into a text field.

To catch the moment the character cap is hit, see event. fieldFull.

Fields

text

Example: cap how many characters a field will accept.

```
var f = this.getField("myText");
f.charLimit = 20;
```

### comb

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

F

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Set this true and the field background renders as a row of boxes — one per character in the field's value — with each character of the content drawn inside its own box. How many boxes appear is taken from the charLimit property.

Only text fields are affected. The setter also raises if multiline, password, or fileSelect is set on the field as well. One side effect of setting this property is that doNotScroll gets set too.

Fields

text

Example: place a comb field at the top-left of a freshly made document.

```
var myDoc = app.newDoc();                 // Create a blank doc
var Bbox = myDoc.getPageBox("Crop");      // Get crop box
var inch = 72;

// Add a text field at the top of the document
var f = myDoc.addField("Name.Last", "text", 0,
    [ inch, Bbox[1]-inch, 3*inch, Bbox[1]- inch - 14 ] );
// Add some attributes to this text field
f.strokeColor = color.black;
f.textColor = color.blue;
f.fillColor = ["RGB",1,0.66,0.75];

f.comb = true;                            // Declare this is a comb field
f.charLimit = 10;                         // Max number of characters
```

### commitOnSelChange

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

F

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether a field value gets committed once the selection changes:

When true, the field value is committed the instant a selection is made.

When false, the user is free to switch the selection repeatedly with no commit; the field value commits only once the field loses focus — that is, once the user clicks outside it.

Fields

combobox, listbox

### currentValueIndices

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Integer Array

R/W

| --- | --- | --- | --- | --- | --- |

Reads and writes single or multiple values of a list box or combo box.

Read

Hands back the options-array indices for the strings that make up a list box or combo box field's value. Those indices start at 0. A single-string field value comes back as one integer; otherwise the return is an array of integers ordered low to high. Should the field's current value fall outside the set of offered choices — as can happen with an editable combo box — the return is -1.

Write

Assigns the value of a list box or combo box, taking either one integer or an array of integers as its argument. To set a lone string as the value, hand it the 0-based index of that string within the options array. Bear in mind that with an editable combo box, when the value you want is not among the offered choices, you must set the value instead; that case aside, currentValueIndices is the preferred route for setting a list box or combo box value.

For a multiple selection on a list box that permits one, pass this property an array holding the indices — ordered low to high — of those strings within the options array. Pass an array of the form Field.value=["item1", "item3"] and it selects the items too. Whether a list box can take multiple selections is governed through multipleSelection.

numItems, getItemAt, insertItemAt, deleteItemAt and setItems are among the related methods and properties.

Fields

combobox, listbox

Example (Read)

A button's mouse-up action. Here the script reads a list box's current value.

```
var f = this.getField("myList");
var a = f.currentValueIndices;
if (typeof a == "number")     // A single selection
    console.println("Selection: " + f.getItemAt(a, false));
else {     // Multiple selections
    console.println("Selection:");
    for (var i = 0; i < a.length; i ++)
        console.println("   " + f.getItemAt(a[i], false));
}
```

Example (Write)

The following code, selects the second and fourth (0-based index values, 1 and 3, respectively) in a list box.

```
var f = this.getField("myList");
f.currentValueIndices = [1,3];
```

### defaultStyle

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

F

Span object

R/W

| --- | --- | --- | --- | --- | --- |

The form field's default style attributes are what this property sets. Should the user click into an empty field and start typing without first adjusting properties via the property toolbar, these are the properties that apply. The property takes the form of a single Span object that lacks a text property. A number of the default-style span's properties mirror those on the Field object, and editing them changes the field's defaultStyle property — and the reverse holds as well.

Which Field object properties also live in the default style, and how their values may differ, is detailed in the table below.

Field properties

defaultStyle (Span properties)

Description

alignment

alignment

The alignment property has the same values for both the default style and the Field object.

textFont

fontFamily fontStyle fontWeight

The value of this field property is a complete font name that represents the font family, weight, and style. In the default style property, each property is represented separately. If an exact match for the font properties specified in the default style cannot be found, a similar font will be used or synthesized.

textColor

textColor

The textColor property has the same values for both the default style and the Field object.

textSize

textSize

The textSize property has the same values for both the default style and the Field object.

| --- | --- | --- |

Note

While a field is empty, defaultStyle supplies the style for any newly entered text. Should a field already hold text when defaultStyle is altered, that existing text picks up none of the changes. Newly typed text takes on the attributes of the text it is inserted within (or whatever the toolbar specifies).

Paste rich text into a field and any attributes the pasted rich text leaves unspecified are taken from defaultStyle.

defaultStyle pays no attention to Superscript and Subscript.

Fields

rich text

Example: Change the default style for a text field.

```
var style = this.getField("Text1").defaultStyle;
style.textColor = color.red;
style.textSize = 18;

// if Courier Std is not found, use a monospace font
style.fontFamily = ["Courier Std", "monospace" ];

this.getField("Text1").defaultStyle = style;
```

### defaultValue

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

A field's default value — the value it reverts to when the form is reset. On combo boxes and list boxes, either an export value or a user value can supply the default. A clash may arise, say, when a field carries an export value and a user value that are identical yet point to different list items; in such a case the export value is checked first.

Fields

all except button, signature

Example:

```
var f = this.getField("Name");
f.defaultValue = "Enter your name here.";
```

### doNotScroll

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, the text field will not scroll, which holds the user to the rectangular area laid out for the field. Toggling this property on or off matches ticking or unticking the Scroll Long Text field on the field's Options tab.

Fields

text

### doNotSpellCheck

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

F

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, this editable text field skips spell checking. Toggling this property on or off matches unticking or ticking the Check Spelling attribute on the Options tab of the Field Properties dialog box.

Fields

combobox (editable), text

### delay

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

F

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Holds off the redraw of a field's appearance. Typically it serves to batch up a run of changes to a field's properties before asking the field to rebuild its look. Set the property true and the field waits until delay returns to false; only then does its appearance refresh, redrawing the field with its newest settings.

A matching Doc delay flag exists for when many fields are being changed at once.

Fields

all

Example: alter a check box's look — flip delay to true, apply the changes, then flip delay back to false.

```
// Get the myCheckBox field
var f = this.getField("myCheckBox");
// Set the delay and change the fields properties
// to beveled edge and medium thickness line.
f.delay = true;
f.borderStyle = border.b;
.
..        // A number of other changes
f.strokeWidth = 2;
f.delay = false; // Force the changes now
```

### display

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

D

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether the field shows or hides both on screen and in print. The table below lists the display property's values.

Effect

Keyword

Field shows both on screen and when printed

display.visible

Field is suppressed both on screen and when printed

display.hidden

Field shows on screen yet stays out of print

display.noPrint

Field is suppressed on screen yet does print

display.noView
