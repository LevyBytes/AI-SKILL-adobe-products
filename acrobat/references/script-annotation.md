# Annotation (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — Annotation

An Acrobat annotation is what this object models. You can produce one either with Acrobat's annotation tool or programmatically through the Doc object's addAnnot method.

You first have to tie an annotation to a JavaScript variable before you can work with it; a Doc object method such as getAnnot does that binding:

```
var a = this.getAnnot(0, "Important");
```

With that variable a in hand, the script gains control over the annotation called "Important" sitting on page 1 (pages count from 0). The snippet that follows, for instance, saves the annotation's type into the variable thetype and then reassigns its author to "John Q. Public".

```
var thetype = a.type;          // read property
a.author = "John Q. Public";   // write property
```

The Doc object's getAnnots method offers a second route to reach an Annotation object.

Note

From Adobe Reader 5.1 onward, every annotation property except contents is readable. Whether you may write to these properties hinges on the Comments document rights, signaled by the C icon.

Note

What scripting calls annotations show up in the Acrobat interface under the label comments .

### Annotation types

The type property records which of several kinds an annotation is. The table that follows names each kind next to the full set of documented properties that getProps hands back.

Annotation type

Properties

Caret

author, borderEffectIntensity, borderEffectStyle, caretSymbol, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

Circle

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, dash, delay, fillColor, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

FileAttachment

attachIcon, attachment, author, borderEffectIntensity, borderEffectStyle, cAttachmentPath, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, point, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

FreeText

alignment, author, borderEffectIntensity, borderEffectStyle, callout, contents, creationDate, dash, delay, fillColor, hidden, inReplyTo, intent, lineEnding, lock, modDate, name, noView, opacity, page, print, readOnly, rect, refType, richContents, richDefaults, rotate, seqNum, strokeColor, style, subject, textFont, textSize, toggleNoView, type, width

Highlight

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, quads, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

Ink

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, dash, delay, gestures, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

Line

arrowBegin, arrowEnd, author, borderEffectIntensity, borderEffectStyle, contents, creationDate, dash, delay, doCaption, fillColor, hidden, inReplyTo, intent, leaderExtend, leaderLength, lock, modDate, name, noView, opacity, page, points, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

Polygon

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, dash, delay, fillColor, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, vertices, width

PolyLine

arrowBegin, arrowEnd, author, borderEffectIntensity, borderEffectStyle, contents, creationDate, dash, delay, fillColor, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, vertices, width

Redact

Beyond the standard properties shared by any markup-type annotation (the Highlight type's property list is one example), three properties belong specifically to Redact: alignment, overlayText, and repeat.

Sound

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, point, print, readOnly, rect, refType, richContents, rotate, seqNum, soundIcon, strokeColor, style, subject, toggleNoView, type, width

Square

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, dash, delay, fillColor, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

Squiggly

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, quads, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

Stamp

AP, author, borderEffectIntensity, borderEffectStyle, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, readOnly, rect, refType, rotate, seqNum, strokeColor, style, subject, toggleNoView, type

StrikeOut

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, quads, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

Text

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, noteIcon, opacity, page, point, popupOpen, popupRect, print, readOnly, rect, refType, richContents, rotate, seqNum, state, stateModel, strokeColor, style, subject, toggleNoView, type, width

Underline

author, borderEffectIntensity, borderEffectStyle, contents, creationDate, delay, hidden, inReplyTo, intent, lock, modDate, name, noView, opacity, page, popupOpen, popupRect, print, quads, readOnly, rect, refType, richContents, rotate, seqNum, strokeColor, style, subject, toggleNoView, type, width

| --- | --- |

### Annotation properties

Every Annotation property is described in the PDF Reference, which also lays out the storage scheme for each one.

Within the PDF document, certain property values are kept as names while others are kept as strings (the PDF Reference covers which is which). Any value stored as a name is capped at 127 characters.

AP, beginArrow, endArrow, attachIcon, noteIcon, and soundIcon are among the properties subject to that 127-character ceiling.

### alignment

Version (Key)

Save-Prefs

Security

Product

Type

Access

11.0

D

No

C

number

R/W

| --- | --- | --- | --- | --- | --- |

Sets how the text is justified within a FreeText annotation.

From version 8.0 forward, if the annotation happens to be a Redact type, this same property governs how the overlayText is justified.

Alignment

Value

Left aligned

0

Centered

1

Right aligned

2

| --- | --- |

Annotations: FreeText, Redact

### attachment

Version (Key)

Save-Prefs

Security

Product

Type

Access

11.0

No

No

All

object

R

| --- | --- | --- | --- | --- | --- |

Stands for the annotAttachment object tied to a FileAttachment-type annotation.

From version 11.0 onward, this property names the object to attach whenever the annotation is a FileAttachment type. Ask for it on any other annotation type and you get back undefined. An invalid attachment triggers the ESErrorGenral exception.

Annotations: FileAttachment

Example:

```
var annot = this.addAnnot({
       page: 0,
       type: "FileAttachment",
       point: [400,500],
       author: "A. C. Robat",
       contents: "Call Smith to get help on this paragraph.",
       cAttachmentPath: "/d/a.pdf"
   });
   var attachmentObj = annot.attachment;
```

### AP

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

Holds the named appearance applied when a stamp annotation is rendered. Here are the names of the built-in stamp annotations:

Approved

AsIs

Confidential

Departmental

Draft

Experimental

Expired

Final

ForComment

ForPublicRelease

NotApproved

NotForPublicRelease

Sold

TopSecret

Annotations: Stamp

Example: Programmatically add a stamp annotation.

```
var annot = this.addAnnot({
    page: 0,
    type: "Stamp",
    author: "A. C. Robat",
    name: "myStamp",
    rect: [400, 400, 550, 500],
    contents: "Try it again, this time with order and method!",
    AP: "NotApproved" });
```

Note

To learn a given stamp's name, open the PDF that holds it inside the Stamps folder. The Doc object icons property will list every stamp name the document is presently using.

### arrowBegin

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

Picks the line-cap style governing the shape drawn at the start of a line annotation. These are the values you may use:

None (default)

OpenArrow

ClosedArrow

ROpenArrow\* // Acrobat 6.0

RClosedArrow\* // Acrobat 6.0

Butt\* // Acrobat 6.0

Diamond

Circle

Square

Slash // Acrobat 7.0

Annotations: Line, PolyLine

Example: See the setProps method.

### arrowEnd

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

Picks the line-cap style governing the shape drawn at the end of a line annotation. Permitted values appear here:

None (default)

OpenArrow

ClosedArrow

ROpenArrow\* // Acrobat 6.0

RClosedArrow\* // Acrobat 6.0

Butt\* // Acrobat 6.0

Diamond

Circle

Square

Slash // Acrobat 7.0

Annotations: Line, PolyLine

Example: See the setProps method.

### attachIcon

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

Paperclip

PushPin (default)

Graph

Tag

Annotations: FileAttachment

### author

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

Reads or writes who authored the annotation.

Annotations: All

Example: See the contents property.

### borderEffectIntensity

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

How strong the border effect is, where one exists — in other words, the degree of cloudiness on a cloudy rectangle, polygon, or oval.

Annotations: All

### borderEffectStyle

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

When set, names which border-effect style applies. For now the choices are limited to the empty string (meaning none) or "C" for cloudy.

Annotations: All

### callout

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

array

R/W

| --- | --- | --- | --- | --- | --- |

Annotations: FreeText

### cAttachmentPath

Version (Key)

Save-Prefs

Security

Product

Type

Access

11.0

D

No

C

string

W

| --- | --- | --- | --- | --- | --- |

(Optional) Gives the device-independent path to the file that should be attached. Leave it unset and the File Open dialog box appears so the user can choose a data file. It has no bearing on annotation types apart from FileAttachment. The PDF Reference holds more on this.

Annotations: FileAttachment

Example:

```
var annot = this.addAnnot({
       page: 0,
       type: "FileAttachment",
       point: [400,500],
       author: "A. C. Robat",
       contents: "Call Smith to get help on this paragraph.",
       cAttachmentPath: "/d/a.pdf"
   });
```

### caretSymbol

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

The mark attached to a Caret annotation — a visible cue flagging where text has been edited. Acceptable values are "" (none), "P" (paragraph symbol), or "S" (space symbol).

Annotations: Caret

### contents

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

Reaches the body text of any annotation that carries a pop-up window. On sound and file attachment annotations, it holds the descriptive text shown for them.

Annotations: All

Example: Create a text annotation, with author and contents specified.

```
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    point: [400,500],
    author: "A. C. Robat",
    contents: "Call Smith to get help on this paragraph.",
    noteIcon: "Help"
});
```

The Doc object addAnnot method is also worth consulting.

### creationDate

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

C

date

R

| --- | --- | --- | --- | --- | --- |

The moment — date and time — at which the annotation came into being.

Annotations: All

### dash

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

array

R/W

| --- | --- | --- | --- | --- | --- |

An array of dashes that lays out the pattern of strokes and gaps for drawing a dashed border. Take [3, 2]: it draws the border as 3-point dashes interleaved with 2-point gaps.

The style property has to be set to D before the dash array takes effect.

Annotations: FreeText, Line, PolyLine, Polygon, Circle, Square, Ink

Example: With annot standing in for an Annotation object, the snippet here switches its border over to a dashed one.

```
annot.setProps({ style: "D", dash: [3,2] });
```

See also the example following the delay property.

### delay

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

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Set this to true and edits to the annotation pile up in a queue, firing only once delay returns to false. (It mirrors how the Field object delay property works.)

Annotations: All

Example: Taking annot as an Annotation object, the lines that follow turn its border dashed.

```
annot.delay=true;
annot.style = "D";
annot.dash = [4,3];
annot.delay = false;
```

### doc

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

object

R

| --- | --- | --- | --- | --- | --- |

The Doc object for whichever document the annotation lives in.

Annotations: All

Example: Build an annotation and show the doc property at work.

```
var inch = 72;
var annot = this.addAnnot({
    page: 0,
    type: "Square",
    rect: [1*inch, 3*inch, 2*inch, 3.5*inch]
});
/* displays, for example, "file:///C|/Adobe/Annots/myDoc.pdf" */
console.println(annot.doc.URL);
```

### doCaption

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

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Annotations: Line

Example: See the example following the points property.

### fillColor

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

Establishes the fill color behind circle, square, line, polygon, polyline, and free text annotations. You express the value as transparent, gray, RGB, or CMYK color. Color arrays explains how to build these arrays and how this property consumes their values.

Annotations: Circle, Square, Line, Polygon, PolyLine, FreeText

Example: Make a Circle annotation, then give it a fill behind.

```
var annot = this.addAnnot(
{
    type: "Circle",
    page: 0,
    rect: [200,200,400,300],
    author: "A. C. Robat",
    name: "myCircle",
    popupOpen: true,
    popupRect: [200,100,400,200],
    contents: "Hi World!",
    strokeColor: color.red,
    fillColor: ["RGB",1,1,.855]
});
```

### gestures

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

A collection of arrays where each one captures a stroked path. Inside each, x and y coordinates alternate in default user space to mark successive points on the path. As the path renders, those points get joined by straight or curved segments in a manner left to the implementation. Further detail lives in the PDF Reference.

Annotations: Ink

### hidden

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

When true, the annotation stays invisible: nobody sees it, interacts with it, or prints it.

Annotations: All

### inReplyTo

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

When it carries a value, it holds the name of whichever annotation the present one is replying to.

Annotations: All

### intent

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

Through this property a markup annotation can take on distinct behavior according to how it is meant to be used. The Callout Tool, say, is really a free text annotation whose intent reads FreeTextCallout.

Although every annotation defines the property, at present only free text, polygon, and line annotations ever assign intent a non-empty value.

Annotations: All

Listed below are the UI tools for creating annotations that carry special appearances.

UI

Annotation type

Intent

Callout Tool

FreeText

FreeTextCallout

Cloud Tool

Polygon

PolygonCloud

Arrow Tool

Line

LineArrow

Dimensioning Tool

Line

LineDimension

| --- | --- | --- |

### leaderExtend

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

number

R/W

| --- | --- | --- | --- | --- | --- |

Sets how far the leader-line extensions reach. These run from each endpoint of the line at a right angle to it, projecting 180 degrees away from the leader lines themselves. Keep the value at zero or above.

Zero is the default, meaning no leader-line extension.

Annotations: Line

### leaderLength

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

number

R/W

| --- | --- | --- | --- | --- | --- |

Sets how long the leader lines are. They project at a right angle from each endpoint of the line. A negative value flips the leader lines to the opposite orientation.

Zero is the default, signifying no leader line.

Annotations: Line

### lineEnding

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

Controls how the tip of a callout line is drawn. It matters solely for a free text annotation whose intent equals FreeTextCallout. The values you can supply include:

None (default)

OpenArrow

ClosedArrow

ROpenArrow: Acrobat 6.0

RClosedArrow: Acrobat 6.0

Butt: Acrobat 6.0

Diamond

Circle

Square

Slash: Acrobat 7.0

Annotations: FreeText

### lock

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

When true, the annotation is locked. This behaves like readOnly, the difference being that a locked annotation can still be reached via the properties dialog box in the UI.

Annotations: All

### modDate

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

date

R/W

| --- | --- | --- | --- | --- | --- |

When the annotation was most recently modified.

Annotations: All

Example: Print the modification date to the console.

```
console.println(util.printd("mmmm dd, yyyy", annot.modDate));
```

### name

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
