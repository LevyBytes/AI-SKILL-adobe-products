# Annotation (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — Annotation

| --- | --- | --- | --- | --- | --- |

An annotation's name. The Doc object getAnnot method can take this value to locate the annotation and get at its properties and methods.

Annotations: All

Example: Find the annotation called myNote and tack on a comment.

```
var gannot = this.getAnnot(0, "myNote");
gannot.contents += "rrDon't forget to check with Smith";
```

### noteIcon

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

Names the icon shown when the annotation is displayed. Among the accepted values:

Check

Circle

Comment

Cross

Help

Insert

Key

NewParagraph

Note(default)

Paragraph

RightArrow

RightPointer

Star

UpArrow

UpLeftArrow

Annotations: Text

Example: See the contents property.

### noView

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, the annotation is concealed on screen, yet any appearance it owns is reserved for printing alone.

Annotations: All

Example: See the toggleNoView property.

### opacity

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

number

R/W

| --- | --- | --- | --- | --- | --- |

The fixed opacity applied when the annotation is painted. It covers every visible part of the annotation while closed — background and border included — but spares the pop-up window shown once it opens. Legal values run 0.0 - 1.0, and 0.5 renders the annotation semitransparent.

Annotations: All

### overlayText

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

A string holding the overlay text to be painted over the redacted area once the affected content is stripped out.

Annotations: Redact

Example: Configure the redaction settings on one specific redaction annotation.

```
var a = this.getAnnots();                              // get all annotations in doc
var r = a[0]           ;                               // the first one is Redact type
r.setProps({                                           // now set its properties
   overlayText: " A.C. Robat ",
   alignment: 0,
   repeat: true,
   fillColor:color.blue,
   textColor: color.green
});
```

A Redact annotation comes with its own popup; here we attach a note to that popup.

```
r.setProps({ contents: "Shall we redact this paragraph?" });
```

See also the applyRedactions method of the Doc object.

### page

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

integer

R/W

| --- | --- | --- | --- | --- | --- |

Which page holds the annotation.

Annotations: All

Example: The snippet below shifts the Annotation object annot off its present page and onto page 3 (pages count from 0).

```
annot.page = 2;
```

### point

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

array

R/W

| --- | --- | --- | --- | --- | --- |

A pair of numbers, [ x ul, y ul ], marking the upper-left corner — in default user space — of the icon belonging to a text, sound, or file attachment annotation.

Annotations: Text, Sound, FileAttachment

Example: Drop a help note icon at the coordinates you name; it ends up sitting at the popup note's top-right corner.

```
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    point: [400,500],
    contents: "Call Smith to get help on this paragraph.",
    popupRect: [400,400,550,500],
    popupOpen: true,
    noteIcon: "Help"
});
```

See also the noteIcon property and the Doc object addAnnot method.

### points

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

array

R/W

| --- | --- | --- | --- | --- | --- |

A pair of points, [[x 1 , y 1 ], [ x 2 , y 2]], that fixes where the line begins and ends in default user space.

Annotations: Line

Example: Stroke a line joining the two points you give.

```
var annot = this.addAnnot({
    type: "Line",
    page: 0,
    author: "A. C. Robat",
    doCaption: true,
    contents: "Look at this again!",
    points: [[10,40],[200,200]],
});
```

See the arrowBegin and arrowEnd properties, the setProps method, and the Doc object addAnnot method.

### popupOpen

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, the pop-up text note shows up already opened as the page comes into view.

Annotations: All except FreeText, Sound, FileAttachment

Example: See the print property.

### popupRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

array

R/W

| --- | --- | --- | --- | --- | --- |

Four numbers [ x ll, y ll, x ur , y ur ] that, read in default user space, give in turn the lower-left x, the lower-left y, the upper-right x, and the upper-right y of the rectangle for the pop-up annotation tied to a parent annotation. That rectangle is what places the pop-up on the page.

Annotations: All except FreeText, Sound, FileAttachment

Example: See the print property.

### print

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Flags whether the annotation prints (true) or is left out (false).

Annotations: All

### quads

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

array

R/W

| --- | --- | --- | --- | --- | --- |

A run of 8 x n numbers laying out the coordinates of n quadrilaterals in default user space. Each quadrilateral wraps a word or a stretch of adjacent words in the text beneath the annotation. The PDF Reference covers this further. To obtain a word's quads, call the Doc object getPageNthWordQuads method.

Annotations: Highlight, StrikeOut, Underline, Squiggly,Redact

Example: See the Doc object getPageNthWordQuads method.

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

C

array

R/W

| --- | --- | --- | --- | --- | --- |

Inside the rect array sit four numbers [ x ll, y ll, x ur, y ur ]. Measured in default user space, they supply, respectively, the lower-left x, the lower-left y, the upper-right x, and the upper-right y of the rectangle pinning down where the annotation sits on the page. See also the related popupRect property.

Annotations: All

### readOnly

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Annotations: All

### refType

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

The annotation's reference type. It tells apart whether inReplyTo points to an ordinary threaded-discussion link or to a group link. The accepted values are "R" and "Group". Further detail is in the PDF Reference.

Annotations: All

### repeat

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

D

No

C

boolean

R/W

| --- | --- | --- | --- | --- | --- |

When set to true, whatever string overlayText holds is tiled across the redacted area once the covered content is stripped out. Default value: false.

Annotations: Redact

### richContents

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

C

Array of Span objects

R/W

| --- | --- | --- | --- | --- | --- |

Reading this property returns both the textual content and the formatting carried by an annotation. That rich text is delivered as an array of Span objects, each one bundling a stretch of text together with how it is styled.

Annotations: All except Sound, FileAttachment

Example: Create a text annotation and give it some rich text contents.

```
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    point: [72,500],
    popupRect: [72, 500,6*72,500-2*72],
    popupOpen: true,
    noteIcon: "Help"
});

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
annot.richContents = spans;
```

For more Span object usage, consult the richValue method on the Field object plus the richValue, richChange, and richChangeEx methods on the event object.

### richDefaults

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

C

Span object

R/W

| --- | --- | --- | --- | --- | --- |

Use this property to set the baseline styling applied to a free text annotation. Further specifics are covered under the defaultStyle property on the Field object.

Annotations: FreeText

### rotate

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

integer

R/W

| --- | --- | --- | --- | --- | --- |

Counterclockwise rotation of the annotation against the page, given in degrees as one of 0, 90, 180, or 270. Only free text annotations honor this setting.

Annotations: FreeText

### seqNum

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

C

integer

R

| --- | --- | --- | --- | --- | --- |

Each annotation on a page carries this read-only sequence number.

Annotations: All

### soundIcon

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

Names the icon shown for a sound annotation; “Speaker” is one accepted value.

Annotations: Sound

### state

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

Holds the current state of a text annotation, and which values are legal hinges on the stateModel in force. Under a Marked model the choices are Marked and Unmarked; under a Review model they are Accepted, Rejected, Cancelled, Completed and None.

Annotations: Text

### stateModel

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

From Acrobat 6.0 onward, an annotation can be tagged with a per-author state. That state lives in a separate text annotation that points back at the original through its IRT entry (refer to the inReplyTo property). Two state-model flavors exist: “Marked” and “Review”.

Annotations: Text

See also the getStateInModel method.

### strokeColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

color

R/W

| --- | --- | --- | --- | --- | --- |

Controls the annotation’s drawn color, expressed as a transparent, gray, RGB, or CMYK value. With a free text annotation, this same property colors both the border and the text. Refer to Color arrays for how these arrays are built and consumed by the property.

Annotations: All

Example: Make a text note red.

```
var annot = this.addAnnot({type: "Text"});
annot.strokeColor = color.red;
```

### style

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

Reads or assigns the border style, accepting S (solid) and D (dashed). Although every annotation type carries this property, it actually matters only for line, free text, circle, square, polyline, polygon, and ink annotations.

Annotations: All

See the dash property for an example.

### subject

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

A brief line summarizing what the annotation concerns. This text surfaces in the pop-up window’s title bar when one is present, otherwise in the properties dialog box.

Annotations: All

### textFont

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

Picks which font lays out the text inside a free text annotation. The recognized fonts are exposed as properties on the font object (compare the textFont property on the Field object).

To apply some other font, set textFont to a string holding that font’s PostScript name when laying out the free text annotation.

Annotations: FreeText

Example: Create a FreeText annotation using the Helvetica font.

```
var annot = this.addAnnot({
    page: 0,
    type: "FreeText",
    textFont: font.Helv, // or, textFont: "Viva-Regular",
    textSize: 10,
    rect: [200, 300, 200+150, 300+3*12], // height for three lines
    width: 1,
    alignment: 1 });
```

### textSize

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

number

R/W

| --- | --- | --- | --- | --- | --- |

Sets the point size of text in a free text annotation. Permitted sizes are zero plus everything from 4 through 144 inclusive, where zero means pick the biggest size that still lets every character fit within the annotation’s rectangle.

Annotations: FreeText

Example: See the textFont property.

### toggleNoView

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

C

string

R/W

| --- | --- | --- | --- | --- | --- |

When true, hovering the mouse over the annotation or selecting it flips the noView flag.

Should an annotation have both noView and toggleNoView turned on, it normally stays hidden; it only appears while the pointer rests on it or it is selected.

Annotations: All

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

C

string

R

| --- | --- | --- | --- | --- | --- |

The annotation’s type. You can assign this only inside the object-literal argument handed to the addAnnot method of the Doc object. Allowed values are:

Text

FreeText

Line

Square

Circle

Polygon

PolyLine

Highlight

Underline

Squiggly

StrikeOut

Stamp

Caret

Ink

FileAttachment

Sound

Annotations: All

### vertices

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

C

Array of arrays

R/W

| --- | --- | --- | --- | --- | --- |

A list of coordinate arrays giving, in turn, the horizontal then vertical positions of every vertex of a polygon or polyline annotation, measured in default user space. The PDF Reference covers the specifics.

Annotations: Polygon, PolyLine

### width

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

C

number

R/W

| --- | --- | --- | --- | --- | --- |

Width of the border in points. A value of 0 leaves no border drawn, and the property defaults to 1.

Annotations: Square, Circle, Line, Ink, FreeText

### Annotation methods

destroy

getProps

getStateInModel

setProps

transitionToState

### destroy

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

C

| --- | --- | --- | --- |

Deletes the annotation and takes it off the page; afterward the object is no longer valid.

Example: Remove all “FreeText” annotations on page 0.

```
var annots = this.getAnnots({ nPage:0 });
for (var i = 0; i < annots.length; i++)
    if (annots[i].type == "FreeText") annots[i].destroy();
```

### getProps

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

C

| --- | --- | --- | --- |

Retrieves an annotation’s gathered properties, which makes it handy for duplicating one.

Returns

An object literal listing the annotation’s properties — identical in shape to the one you pass into the addAnnot method of the Doc object.

Example 1: Replicate one annotation onto each page throughout the document.

```
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    rect: [40, 40, 140, 140]
});

// Make a copy of the properties of annot
var copy_props = annot.getProps();

// Now create a new annot with the same properties on every page
var numpages = this.numPages;
for (var i=0; i < numpages; i++) {
    var copy_annot = this.addAnnot(copy_props);
    // but move it to page i
    copy_annot.page=i;
}
```

Example 2: Display all properties and values of an annotation.

```
var a = this.getAnnots(0);     // get all annots on page 0
if ( a != null ) {
    var p = a[0].getProps();     // get the properties of first one
    for ( o in p ) console.println( o + " : " + p[o] );
}
```

### getStateInModel

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

C

| --- | --- | --- | --- |

Reports where the annotation currently stands within a given state model. The transitionToState method is a related call.

Parameters

Parameter

Description

cStateModel

The state model to determine the state of the annotation.

| --- | --- |

Returns

You get back an array of identifiers describing the annotation’s present state:

An exclusive state model yields just one state — or none at all when nothing has been set.

A non-exclusive model can return several states, or no entries when nothing is set and no default applies.

Example: Summarize, across every page of the document, the status carried by each annotation.

```
annots = this.getAnnots()
for ( var i= 0; i< annots.length; i++) {
    states = annots[i].getStateInModel("Review");
    if ( states.length > 0 ) {
        for(j = 0; j < states.length; j++)
        {
            var d = util.printd(2, states[j].modDate);
            var s = states[j].state;
            var a = states[j].author;

            console.println(annots[i].type + ": " + a + " "
                + s + " " + d + "on page "
                + (annots[i].page+1) );
        }

    }
}
```

### setProps

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

C

| --- | --- | --- | --- |

Parameters

Parameter

Description

object literal

A plain object that lays out which properties the new Annotation object should carry (type, rect, page, and so on). It matches the parameter taken by the addAnnot method of the Doc object.

| --- | --- |

Returns

The Annotation object

Example: Set various properties of a Line annotation.

```
var annot = this.addAnnot({type: "Line"})
annot.setProps({
    page: 0,
    points: [[10,40],[200,200]],
    strokeColor: color.red,
    author: "A. C. Robat",
    contents: "Check with Jones on this point.",
    popupOpen: true,
    popupRect: [200, 100, 400, 200], // Place rect at tip of the arrow
    arrowBegin: "Diamond",
    arrowEnd: "OpenArrow"
});
```

### transitionToState

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

C

| --- | --- | --- | --- |

Moves the annotation into cState by running a state transition, and the move gets logged in the annotation’s audit trail.

See also the getStateInModel method.

Note

States behave correctly across a multiuser setup only when every user shares the same state model definitions. The safest approach is to keep those definitions in a folder-level JavaScript file that you can hand out to everyone or install on every machine.

Parameters

Parameter

Description

cStateModel

The state model in which to perform the state transition. cStateModel must have been previously added by calling the Collab method addStateModel.

cState

A valid state in the state model to transition to.

| --- | --- |

Example: Define a custom set of transition states, then set the state of an annotation.

```
try {
    // Create a document
    var myDoc = app.newDoc();
    // Create an annot
    var myAnnot = myDoc.addAnnot
    ({
        page: 0,
        type: "Text",
        point: [300,400],
        name: "myAnnot",
    });
    // Create the state model
    var myStates = new Object();
    myStates["initial"] = {cUIName: "Haven't reviewed it"};
    myStates["approved"] = {cUIName: "I approve"};
    myStates["rejected"] = {cUIName: "Forget it"};
    myStates["resubmit"] = {cUIName: "Make some changes"};
    Collab.addStateModel({
        cName: "ReviewStates",
        cUIName: "My Review",
        oStates: myStates,
        cDefault: "initial"
    });
} catch(e) { console.println(e); }
// Change the states
myAnnot.transitionToState("ReviewStates", "resubmit");
myAnnot.transitionToState("ReviewStates", "approved");
```
