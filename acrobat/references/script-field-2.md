# Field (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — Field

| --- | --- |

The older hidden and print properties are superseded by this one.

Fields

all

Example:

```
// Assign the display property
var f = getField("myField");
f.display = display.noPrint;

// Test whether field is hidden on screen and in print
if (f.display == display.hidden) console.println("hidden");
```

### doc

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

object

R

| --- | --- | --- | --- | --- | --- |

Hands back the Doc of the document the field is part of.

Fields

all

### editable

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Sets whether a combo box can be edited. When true, the user may type a selection; when false, the user is held to one of the supplied selections.

Fields

combobox

Example:

```
var f = this.getField("myComboBox");
f.editable = true;
```

### exportValues

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

F

Array

R/W

| --- | --- | --- | --- | --- | --- |

A string array carrying the field's export values. It holds as many elements as the field has annotations, and those elements map to the annotations in creation order (tab-order has no effect).

On radio button fields this property is what makes the field operate properly as a group: whichever button is checked at the moment lends its value to the field overall.

On check box fields, absent a specified export value, "Yes" (or its localized equivalent) is the default while the field is checked. "Off" is the default while it is unchecked — the same as a radio button field with none of its buttons checked.

Fields

checkbox, radiobutton

Example: build a radio button field and assign its export values.

```
var d = 40;
var f = this.addField("myRadio","radiobutton",0,  [200, 510, 210, 500]);
this.addField("myRadio","radiobutton",0,  [200+d, 510-d, 210+d, 500-d]);
this.addField("myRadio","radiobutton",0,  [200, 510-2*d, 210, 500-2*d]);
this.addField("myRadio","radiobutton",0,  [200-d, 510-d, 210-d, 500-d]);
f.strokeColor = color.black;
// Now give each radio field an export value
f.exportValues = ["North", "East", "South", "West"];
```

### fileSelect

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

Yes

F

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, raises the file-select flag on the text field's Options tab (Field is Used for File Selection). This marks the field's value as the path to a file whose contents may be sent along with the form.

Either the user types the path straight into the field, or the user browses to the file. (See the browseForFileToSubmit method.)

Note

The file select flag cannot coexist with the multiline, charLimit, password, and defaultValue properties. On Mac OS, moreover, raising the file select flag makes the field read-only, so the user is obliged to browse for the file to place in it. (See browseForFileToSubmit.)

Setting this property is possible only during a batch or console event. See Privileged context. A discussion of JavaScript events lives in the event object.

Fields

text

### fillColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

D

No

F

Array

R/W

| --- | --- | --- | --- | --- | --- |

Sets a field's background color, which fills the field's rectangle. Values may be given as transparent, gray, RGB, or CMYK color. For how to build color arrays and how their values feed this property, see Color arrays.

Earlier editions of this spec called the property bgColor. That older name still works for backward compatibility, but relying on it is no longer recommended.

Fields

all

Example: Swap the background color of a text field — red becomes blue, and any other current color becomes yellow.

```
var f = this.getField("myField");
if (color.equal(f.fillColor, color.red))
    f.fillColor = color.blue;
else
    f.fillColor = color.yellow;
```

### hidden

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

D

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Note

The display property now takes over this role, so this one is best avoided.

A value of false leaves the field on screen for the user; true hides it. False is what you get by default.

Fields

all

### highlight

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

Sets the visual response a button gives when clicked. There are four supported highlight modes:

none: Clicking produces no visible feedback.

invert: The area inside the button's rectangle flips briefly.

push: If a down face exists for the button, it shows for a moment.

outline: The rectangle's border flips briefly.

Each mode maps to a state on the convenience highlight object, like so:

Type

Keyword

none

highlight.n

invert

highlight.i

push

highlight.p

outline

highlight.o

| --- | --- |

Fields

button

Example: Give a button field the "invert" highlight.

```
var f = this.getField("myButton");
f.highlight = highlight.i;
```

lineWidth

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

D

No

F

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Sets how thick the line is when the outline of a field's rectangle gets stroked. A transparent stroke color makes this setting irrelevant, except where a beveled border is involved. The accepted values are:

0: none

1: thin

2: medium

3: thick

Earlier editions of this spec called this property borderWidth. That older name remains valid for backward compatibility, though using it is discouraged.

By default lineWidth is 1 (thin). You may supply any integer, but going past 5 tends to warp how the field looks.

Fields

all

Example: Bump the Text Box border up to medium thickness.

```
f.lineWidth = 2
```

### multiline

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Governs whether text wraps inside the field. Leave it false (the default) and the text field stays a single line. Set it true and the field accepts several lines, wrapping at the field edges.

Fields

text

Example: See the Doc getField method.

### multipleSelection

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

When true, signals that a list box permits more than one item to be selected at once.

See also type, value, and currentValueIndices.

Fields

listbox

### name

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

R

| --- | --- | --- | --- | --- | --- |

Hands back the field's fully qualified name as a string object.

From Acrobat 6.0 onward, when the Field object stands for a single individual widget, an appended '.' plus the widget index is tacked onto the returned name.

Fields

all

Example: Grab a Field object and print its name to the console.

```
var f = this.getField("myField");

// Displays "myField" in the console window
console.println(f.name);
```

### numItems

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

R

| --- | --- | --- | --- | --- | --- |

How many items a combo box or list box holds.

Fields

combobox, listbox

Example: Read off the item count of a list box.

```
var f = this.getField("myList");
console.println("There are " + f.numItems + " in this list box");
```

To reach the face names and values inside a combo box or list box, use the getItemAt method, which carries a further numItems example of its own.

### page

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

Integer Array

R

| --- | --- | --- | --- | --- | --- |

A field's page number, or an array of them. When a field shows up just once in the document, page hands back a single integer — the 0-based number of the page it sits on. With multiple appearances, you instead get an array of integers, where every entry is the 0-based page of one appearance. The sequence of those page numbers follows the creation order of the field's individual widgets, and tab-order has no bearing on it. Should an appearance land on a hidden template page, page reports -1 for that one.

Fields

all

Example 1: Work out whether a given field shows up on a single page or on several.

```
var f = this.getField("myField");
if (typeof f.page == "number")
    console.println("This field only occurs once on page " + f.page);
else
    console.println("This field occurs " + f.page.length + " times);
```

Example 2 (Acrobat 6.0)

You can lean on the page property to count the widgets tied to a field name. Here it counts the radio buttons within a radio button field.

```
var f = this.getField("myRadio");
if ( typeof f.page == "object" )
    console.println("There are " + f.page.length
        + " radios in this field.");
```

### password

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Controls whether the field masks entered data with asterisks. (What actually gets submitted is the real data, not the asterisks.) Turn this on and the field's contents are left out when the document is saved to disk.

Fields

text

### print

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

D, F

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Note

The display property now takes over this role, so this one is best avoided.

Set it true and the field prints along with the document; set it false and it stays off the printout. It's handy for keeping control buttons and similar fields — the ones that serve no purpose on paper — from showing up when printed.

Fields

all

### radiosInUnison

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

At false, radio buttons sharing a name and export value still act mutually exclusively, the way HTML radio buttons do. New radio buttons start out false.

At true, radio buttons sharing a name and export value toggle together as a group, the way they did in Acrobat 4.0.

Fields

radiobutton

### readonly

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Whether the field is read-only. Mark a field read-only and the user can view it but has no way to alter it.

Fields

all

Example: Fetch a field and lock it as read-only.

```
var f = this.getField("myTextField");
f.value = "You can't change this message!";
f.readonly = true;
```

### rect

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

Array

R/W

| --- | --- | --- | --- | --- | --- |

Four numbers, given in rotated user space, that pin down the form field's size and location. They are the bounding rectangle's coordinates, supplied in this sequence: upper-left x, upper-left y, lower-right x, then lower-right y.

Note

A rect property exists on the Annotation object too. Its coordinates, however, are not in rotated user space and follow a different order than the Field object's rect property.

Fields

all

Example 1: Place a 2-inch-wide text field immediately to the right of the field "myText".

```
var f = this.getField("myText");  // Get the Field object
var myRect = f.rect;              // and get its rectangle
myRect[0] = f.rect[2];            // The ulx for new = lrx for old
myRect[2] += 2 * 72;               // Move two inches for lry
f = this.addField("myNextText", "text", this.pageNum, myRect);
f.strokeColor = color.black;
```

Example 2: Shift an existing button field 10 points to the right.

```
var b = this.getField("myButton");
var aRect = b.rect;   // Make a copy of b.rect
aRect[0] += 10;       // Increment first x coordinate by 10
aRect[2] += 10;       // Increment second x coordinate by 10
b.rect = aRect;       // Update the value of b.rect
```

### required

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Whether the field must hold a value. When true, the field has to be non-null at the moment the user presses a submit button that posts the field's value. A null value triggers a warning to the user and blocks the submit from going through.

Fields

all except button

Example: Turn "myField" into a required field.

```
var f = this.getField("myField");
f.required = true;
```

### richText

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

When true, the field permits rich text formatting. It defaults to false.

Fields

text

Tied in here are richValue, defaultStyle, event. richValue, event. richChange, event. richChangeEx, the Annotation object richContents property, and the Span object.

Example 1: Pull a Field object and enable rich text formatting on it.

```
var f = this.getField("Text1");
f.richText = true;
```

For a fuller example, refer to richValue.

Example 2: Tally how many rich text fields the document contains.

```
var count = 0;
for ( var i = 0; i < this.numFields; i++)
{
    var fname = this.getNthFieldName(i);
    var f = this.getField(fname);
    if ( f.type == "text" && f.richText ) count++
}
console.println("There are a total of "+ count + " rich text fields.");
```

### richValue

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

Array of Span objects

R/W

| --- | --- | --- | --- | --- | --- |

This property holds both the text and the formatting of a rich text field. On any field type that isn't rich text, it comes back undefined. Its rich text content takes the form of an array of Span objects that carry the field's text and formatting.

Fields

rich text

Tied in here are richText, defaultStyle, event. richValue, event. richChange, event. richChangeEx, the Annotation object richContents property, and the Span object.

Example 1: Convert every bold run into red underlined text.

```
var f = this.getField("Text1");
var spans = f.richValue;
for ( var i = 0; i < spans.length; i++ )
{
    if( spans[i].fontWeight >= 700 )
    {
        spans[i].textColor = color.red;
        spans[i].underline = true;
    }
}
f.richValue = spans;
```

Example

2

Build a text field, flag it for rich text formatting, and drop rich text into it.

```
var myDoc = app.newDoc();                  // Create a blank doc
var Bbox = myDoc.getPageBox("Crop");       // Get crop box
var inch = 72;

// Add a text field at the top of the document
var f = myDoc.addField("Text1", "text", 0,
    [72, Bbox[1]-inch, Bbox[2]-inch, Bbox[1]-2*inch ] );
// Add some attributes to this text field
f.strokeColor = color.black;
f.richText = true;                         // Rich text
f.multiline = true;                        // Multiline

// Now build up an array of Span objects
var spans = new Array();
spans[0] = new Object();
spans[0].text = "Attention:r";
spans[0].textColor = color.blue;
spans[0].textSize = 18;

spans[1] = new Object();
spans[1].text = "Adobe Acrobat 6.0r";
spans[1].textColor = color.red;
spans[1].textSize = 20;
spans[1].alignment = "center";

spans[2] = new Object();
spans[2].text = "will soon be here!";
spans[2].textColor = color.green;
spans[2].fontStyle = "italic";
spans[2].underline = true;
spans[2].alignment = "right";

// Now give the rich field a rich value
f.richValue = spans;
```

### rotation

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

Not available in Reader

Integer

R/W

| --- | --- | --- | --- | --- | --- |

How far a widget is turned, measured in counterclockwise steps. The values you can use are 0, 90, 180, and 270.

Fields

all

Example: Drop a rotated text field onto every page and put text in it.

```
for ( var i=0; i < this.numPages; i++) {
    var f = this.addField("myRotatedText"+i,"text",i,[6, 6+72, 18, 6]);
    f.rotation = 90; f.value = "Confidential";
    f.textColor = color.red; f.readonly = true;
}
```

### strokeColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

D

No

F

Array

R/W

| --- | --- | --- | --- | --- | --- |

Sets the color used to stroke a field's rectangle with a line whose thickness matches the line width. You define the value with transparent, gray, RGB, or CMYK color. For how to build color arrays and how their values feed this property, consult Color arrays.

Earlier editions of this spec called this property borderColor. That older name still works for backward compatibility, but using it is discouraged.

Fields

all

Example: Recolor every text field in the document so its stroke is red.

```
   for ( var i=0; i < this.numFields; i++) {
       var fname = this.getNthFieldName(i);
       var f = this.getField(fname);
       if ( f.type == "text" ) f.strokeColor = color.red;
}
```

### style

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

Lets the user pick the glyph style for a check box or radio button — the glyph style being the graphic that marks the item as selected.

Keywords pair with the style values as shown here.

Style

Keyword

check

style.ch

cross

style.cr

diamond

style.di

circle

style.ci

star

style.st

square

style.sq

| --- | --- |

Fields

checkbox, radiobutton

Example: Here the glyph style is set to circle.

```
var f = this.getField("myCheckbox");
f.style = style.ci;
```

### submitName

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

String

R/W

| --- | --- | --- | --- | --- | --- |

When it isn't empty, this stands in for name during form submission. It only matters when the submission goes out in HTML (URL-encoded) format.

Fields

all

### textColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

D

No

F

Array

R/W

| --- | --- | --- | --- | --- | --- |

A field's foreground color. For text, button, or list box fields it is the text color, and for check box or radio button fields it is the check color. You set its values just as you do for fillColor. For how to build color arrays and how those values get set and applied here, see Color arrays.

Earlier editions of this spec called this property fgColor. That older name still works for backward compatibility, though using it is discouraged.

Note

Setting textColor with a transparent color space raises an exception.

Fields

all

Example: Here the foreground color is set to red.

```
var f = this.getField("myField");
f.textColor = color.red;
```

### textFont

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

The font applied when text is laid out in a text field, combo box, list box, or button. The valid fonts live as properties on the font object. From Acrobat 5.0 on, you can also use arbitrary fonts. See fonts.

Fields

button, combobox, listbox, text

font Object

Text font

Keyword

Times-Roman

font.Times

Times-Bold

font.TimesB

Times-Italic

font.TimesI

Times-BoldItalic

font.TimesBI

Helvetica

font.Helv

Helvetica-Bold

font.HelvB

Helvetica-Oblique

font.HelvI

Helvetica-BoldOblique

font.HelvBI

Courier

font.Cour

Courier-Bold

font.CourB

Courier-Oblique

font.CourI

Courier-BoldOblique

font.CourBI

Symbol

font.Symbol

ZapfDingbats

font.ZapfD

| --- | --- |

Use of arbitrary fonts

From Acrobat 5.0 on, you can lay out a text field, combo box, list box, or button with an arbitrary font by setting textFont to the PDSysFont font name that PDSysFontGetName returns. (See the Acrobat and PDF Library API Reference.)

Here is how to discover a font's PDSysFont font name:

Add a text field to a PDF document. Through the UI, set this field's text font to the font you want.

Bring up the JavaScript Debugger Console and run the script

```
this.getField("Text1").textFont
```

The code above takes the field's name to be Text1.

Whatever string the console prints back is the font name you need to set the text font from script.

Example: Switch the font to Helvetica.

```
var f = this.getField("myField");
f.textFont = font.Helv;
```

Example (Acrobat 5.0)

Switch myField's font to Viva-Regular.

```
var f = this.getField("myField");
f.textFont = "Viva-Regular";
```

### textSize

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

Sets the point size of the text shown across all controls. Within check box and radio button fields, that size dictates how big the check is. Sizes from 0 through 32767 are valid. Zero picks the biggest point size at which every bit of text data still fits inside the field's rectangle.

Fields

all

Example: Set "myField" to a text size of 28 points.

```
this.getField("myField").textSize = 28;
```

### type

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

R
