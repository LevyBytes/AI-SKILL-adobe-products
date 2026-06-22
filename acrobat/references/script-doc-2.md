# Doc (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

```
SinglePage
OneColumn
TwoColumnLeft
TwoColumnRight
```

Two more values join the list in Acrobat 6.0 and onward:

```
TwoPageLeft
TwoPageRight
```

Example: Switch the document to a continuous facing arrangement in which its first page lands in the left column:

```
this.layout = "TwoColumnLeft";
```

### media

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

Doc.media object

R/W

| --- | --- | --- | --- | --- | --- |

Carries the document's multimedia properties together with its methods. You will find each of them documented under the Doc.media object.

### metadata

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

String

R/W

| --- | --- | --- | --- | --- | --- |

Opens up the XMP metadata that a PDF document carries inside it. What comes back is a string holding that metadata as XML. The PDF Reference covers embedded XMP metadata in detail.

Exceptions

Assigning metadata a string that is not valid XMP triggers RaiseError.

Example 1: Attempt to assign metadata that is not in XMP format.

```
this.metadata = "this is my metadata";
RaiseError: The given metadata was not in the XMP format
Global.metadata:1:Console undefined:Exec
 ===> The given metadata was not in the XMP format
```

Example 2: Generate a PDF report file holding a document's metadata.

```
var r = new Report();
r.writeText(this.metadata);
r.open("myMetadataReportFile");
```

Example 3: (Acrobat 8.0) Here is a demonstration of editing a document's metadata through E4X. It fills in the Copyright Status, the Copyright Notice, and the Copyright Info URL fields. You can fire this from the console or run it as a batch sequence.

```
   var CopyrightStatus = "True";
   var CopyrightNotice = "Copyright(C) 2006, Example Systems, Inc."
   var CopyrightInfoURL = "http://www.example.com"
   var meta = this.metadata;
   var myXMPData = new XML(meta);
   myx = new Namespace("adobe:ns:meta/");
   myrdf = new Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
   mypdf = new Namespace("http://ns.adobe.com/pdf/1.3/");
   myxap = new Namespace("http://ns.adobe.com/xap/1.0/");
   mydc = new Namespace("http://purl.org/dc/elements/1.1/");
   myxapRights = new Namespace("http://ns.adobe.com/xap/1.0/rights/");
   var p = myXMPData.myrdf::RDF.myrdf::Description;
   /*
       We test whether this element has a value already, if no, we assign it a

        value, otherwise we assign it another value.
   */
   if (p.mydc::rights.myrdf::Alt.myrdf::li.toString() == "") {
       p[0] +=  <rdf:Description rdf:about=""
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
           <dc:rights>
               <rdf:Alt>
                   <rdf:li xml:lang="x-default">
                       {CopyrightNotice}
                   </rdf:li>
               </rdf:Alt>
           </dc:rights>
       </rdf:Description>
   } else
       p.mydc::rights.myrdf::Alt.myrdf::li = CopyrightNotice;
/*
   Some elements are converted into attributes, so we need to first test
   whether the xapRights:Marked attribute is present, if not, we add it in as an
   element; otherwise, if the attribute is present, we update the attribute.
   Acrobat changes certain elements into attributes; the xapRights:Marked and
   xapRights:WebStatement are two such examples, but dc:rights above is one
   that is not changed into an attribute.
*/
   if (p.@myxapRights::Marked.toString() == "" ) {
       p[0] +=  <rdf:Description rdf:about=""
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:xapRights="http://ns.adobe.com/xap/1.0/rights/">
           <xapRights:Marked>{CopyrightStatus}</xapRights:Marked>
           <xapRights:WebStatement> {CopyrightInfoURL} </xapRights:WebStatement>
       </rdf:Description>
   } else {
       p.@myxapRights::Marked = CopyrightStatus;
       p.@myxapRights::WebStatement = CopyrightInfoURL;
   }
// Convert myXMPData into a string
   myNewXMPStr=myXMPData.toXMLString();
// and assign it to the document metadata
   this.metadata = myNewXMPStr;
```

### modDate

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

Date

R

| --- | --- | --- | --- | --- | --- |

Note

The info property now takes the place of this one.

When the document was most recently changed.

### mouseX

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

Returns the mouse's x coordinate, expressed in default user space and measured against the current page.

Example: Track the mouse position while the user drags the pointer across the viewer.

```
function getMouseCoor() {
    console.println( "("+this.mouseX+","+ this.mouseY+")" );
}
var ckMouse = app.setInterval("getMouseCoor()", 100);
var timeout = app.setTimeOut(
    "app.clearInterval(ckMouse); app.clearTimeOut(timeout)",2000);
```

### mouseY

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

Returns the mouse's y coordinate, expressed in default user space and measured against the current page.

### numFields

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

Integer

R

| --- | --- | --- | --- | --- | --- |

How many fields the document contains in total. See also getNthFieldName.

Example 1:

```
console.println("There are " + this.numFields + " in this document");
```

Example 2: Combining the numFields property with the getNthFieldName method, this script iterates over every field the document holds. Each button field is reworked to carry a beveled look (you could apply other tweaks to the document's buttons here too).

```
for ( var i = 0; i < this.numFields; i++) {
    var fname = this.getNthFieldName(i);
    if ( fname.type = "button" ) f.borderStyle = border.b;
}
```

### numPages

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

The count of pages the document holds.

Example 1:

```
console.println("There are " + this.numPages + " in this document");
```

Example 2: Remove the document's final page. Because numbering starts at 0, that last page sits at this.numPages - 1.

```
this.deletePages({ nStart: this.numPages - 1 });
```

### numTemplates

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

Integer

R

| --- | --- | --- | --- | --- | --- |

Note

The templates property now takes the place of this one.

The count of templates the document holds.

### path

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

The document's path, expressed in a device-independent form, such as:

```
/c/Program Files/Adobe/
Acrobat 11.0/Help/AcroHelp.pdf
```

To obtain just the document's file name, reach for the documentFileName property. See also the URL property.

### outerAppWindowRect

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

Array of Numbers

R

| --- | --- | --- | --- | --- | --- |

Hands back a rectangle, given as screen coordinates in an array, for the Acrobat outer application window. This one takes in elements like the title bar and the resizing border, which the inner application rectangle leaves out.

See also innerAppWindowRect, outerDocWindowRect, outerDocWindowRect, and pageWindowRect.

### outerDocWindowRect

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

Array of Numbers

R

| --- | --- | --- | --- | --- | --- |

Hands back a rectangle, given as screen coordinates in an array, for the Acrobat outer document window. This one takes in elements like the title bar and the resizing border, which the inner document rectangle leaves out.

How the application and document rectangles relate can vary across platforms. On Windows, for instance, the document window always nests within the application window. The windows coincide under Mac OS.

See also innerAppWindowRect, outerDocWindowRect, outerAppWindowRect, and pageWindowRect.

### pageNum

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

Reads or assigns which page of the document is current. Keep in mind that page values run from 0 when you set pageNum.

Example: Jump to the document's first page.

```
this.pageNum = 0;
```

Move the document forward by one page.

```
this.pageNum++;
```

### pageWindowRect

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

Array of Numbers

R

| --- | --- | --- | --- | --- | --- |

A rectangle, given as screen coordinates in an array, for the Acrobat page view window. That page view window is the region within the inner document window where the PDF content gets shown.

See also innerAppWindowRect, outerDocWindowRect, outerAppWindowRect, and outerDocWindowRect.

### permStatusReady

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

A Boolean telling you whether this document's permissions have finished resolving.

During a download across a network, a false here can mean the document is not yet reachable, specifically when permissions hinge on a certification signature spanning the whole document.

### producer

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Note

The info property now takes the place of this one.

Whatever produced the document (for instance, "Acrobat Distiller" or "PDFWriter").

### requiresFullSave

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Evaluates to true when the document still needs a full save, the case for ones that are temporary or freshly created. If not, it comes back false.

Example:

```
var oDoc = app.newDoc();
console.println("It is " + oDoc.requiresFullSave
    + " that this document requires a full save.");
```

### securityHandler

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

The name of whichever security handler encrypted the document. When no handler applies, for instance on an unencrypted document, the value is null.

Example:

```
console.println(this.securityHandler != null ?
    "This document is encrypted with " + this.securityHandler
    + " security." :   "This document is unencrypted.");
```

Were the document encrypted with the standard security handler, this script might print the following.

```
This document is encrypted with Standard security.
```

### selectedAnnots

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

Array

R

| --- | --- | --- | --- | --- | --- |

An array of Annotation objects, one for each markup annotation selected right now.

See also getAnnot and getAnnots.

Example: Print to the console the comments belonging to the selected annotations.

```
var aAnnots = this.selectedAnnots;
for (var i=0; i < aAnnots.length; i++)
    console.println(aAnnots[i].contents);
```

### sounds

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

Array

R

| --- | --- | --- | --- | --- | --- |

An array gathering every named Sound object the document contains.

See also getSound, importSound, deleteSound, and the Sound object.

Example:

```
var s = this.sounds;
for (i = 0; i < s.length; i++)
    console.println("Sound[" + i + "]=" + s[i].name);
```

### spellDictionaryOrder

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

Array

R/W

| --- | --- | --- | --- | --- | --- |

An array laying out the order in which dictionaries are searched for this document. A designer building a medical form, for example, might want a medical dictionary consulted ahead of the user's own preferred sequence.

The Spelling plug-in begins by scanning this array for words, and only then moves on to whichever dictionaries the user picked on the Spelling Preference panel. You can read the user's chosen order from spell.dictionaryOrder, while spell.dictionaryNames gives you an array of every dictionary currently installed.

Note

On a write, supplying any array element that is not a recognized dictionary name throws an exception.

### spellLanguageOrder

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Not allowed in Reader: Only available in Acrobat products

Array

R/W

| --- | --- | --- | --- | --- | --- |

An array laying out the language search order for this document. The Spelling plug-in checks this array for words first, then turns to the languages the user picked on the Spelling Preferences panel. The user's chosen order is readable from spell.languageOrder, and the spell.languages property yields an array of every installed language.

### subject

The subject assigned to the document.

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

D

No

No

String

R only in Reader

| --- | --- | --- | --- | --- | --- |

Note

The info property now takes the place of this one.

### templates

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

Array

R

| --- | --- | --- | --- | --- | --- |

An array holding each Template object found in the document. See also createTemplate, getTemplate, and removeTemplate.

Example: Print out all of the document's templates.

```
var t = this.templates
for ( var i=0; i < t.length; i++)
{
    var state = (t[i].hidden) ? "visible" : "hidden"
    console.println("Template: "" + t[i].name
        + "", current state: " + state);
}
```

### title

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

String

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

Note

The info property now takes the place of this one.

The title assigned to the document.

### URL

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

The document's URL. For a local document, the returned URL carries a file:/// scheme on Windows and UNIX, and file://localhost/ on Mac OS. That can diverge from the baseURL.

See also the path and documentFileName properties.

### viewState

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.05

No

No

All

Object

R/W

| --- | --- | --- | --- | --- | --- |

An opaque object standing in for the document's current view state. At a minimum that state captures the present page number, the scroll position, the zoom level, and where field focus sits.

Setting this value requires feeding back exactly what an earlier read of it returned. With that, you can bring a document's view state back.

Note

Only inside an embedded PDF is the object defined.

Example: This snippet reads the view state and ships it off to the host application, which is free to keep it and later hand it back to the viewer to reinstate the original view. A button inside the PDF document could run this code. That array's first element flags for the host what kind of message it is.

```
if(this.hostContainer)
{
    cVState = this.viewState.toSource();
    aMsg = new Array( "viewState", cVState );
    this.hostContainer.postMessage(aMsg);
}
```

Over on the host application side, the message handler could be shaped like this:

```
var cViewState=""; // Variable to save the viewState
function onMessageFunc( stringArray )
{
    var PDFObject = document.getElementById( PDFObjectID );
    if ( this != PDFObject.messageHandler )
        alert( "Incorrect this value in onMessage handler" );
    // The first entry in the encoming array is the signal
    var signal = stringArray[0];

    switch ( signal ) {
        case "Msg":
            var msgStr = "";
            for ( var i = 1; i < stringArray.length; i++ )
                msgStr += (stringArray[ i ] + "<br>");
            writeMsg( msgStr ); // A function to write to the document.
            break;

        case "viewState":
            // View state, let's save this
            cViewState = stringArray[1];
            break;
    }
}
```

A button lets you send the value of cViewState back into the embedded PDF. Down in the PDF's document-level JavaScript, you might write:

```
if ( this.hostContainer )
{
    myHostContainer = this.hostContainer;
    myHostContainer.messageHandler = {
        onMessage: function(aMessage) {
            var f = this.doc.getField("msg4pdf");
            var strValue = "";
            var signal = aMessage[0];
            switch ( signal ) {
                case "Msg":
                    for(var i = 1; i < aMessage.length; i++)
                        strValue += aMessage[i] + "r";
                    f.value = strValue;
                    break;
                case "viewState":
                    var restoreViewState = eval( aMessage[1] );
                    // Reset the viewState, begin sure to acquire the correct
                    // Doc as the doc property of this.
                    this.doc.viewState = restoreViewState;
                    break;
            }
        },
        onError: function(error, aMessage) {
                console.println("error: "+ error.toString())
        },
        onDisclose: HostContainerDisclosurePolicy.SameOriginPolicy,
        allowDeliverWhileDocIsModel: true
    };
    // The this object will be the messageHandler instance that the

     // method is being called on, so we save the Doc as a doc

     // property of the messageHandler instance.
    myHostContainer.messageHandler.doc = this;
}
```

### xfa

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.02

No

No

All

XFAObject

R

| --- | --- | --- | --- | --- | --- |

This property exists solely when the document is an XML form, meaning one authored in LiveCycle Designer. Where it does exist, xfa is a static XFAObject sitting as the root node of the underlying xfa model, and it opens the door to the xfa scripting object model (SOM).

For the particulars of the xfa SOM, turn to the Adobe XML Form Object Model Reference. A side-by-side look at the Acrobat and LiveCycle Designer scripting object models appears in Converting Acrobat JavaScript for Use in LiveCycle Designer Forms.

Note

If you call this property out of a folder level script, hand it the document's Doc object so that xfa runs in the right context. Refer to Example 2.

Example 1: Say this document is an XML form carrying a text field called EmployeeName. Here the xfa object is used to read and rewrite that field's value.

```
var eN = this.xfa.form.form1.EmployeeName;
console.println("nEmployeeName: " + eN.rawValue);
```

What lands in the console is

```
EmployeeName: A. C. Robat
```

Next, alter the EmployeeName value.

```
eN.rawValue = "Robat, A. C."
console.println("nEmployeeName: " + eN.rawValue);
```

What lands in the console is

```
EmployeeName: Robat, A. C.
```

So the field's value has now changed.

Example 2: From a folder level script file, invoke a function that leans on the xfa property by handing it the Doc object.

```
function isXFA(doc) {
    var wasWasNot = (typeof doc.xfa == "undefined") ? "not" : "";
    console.println("This document was "+wasWasNot+"created by Designer.");
}
```

You call the function as isXFA(this), whether from inside the document or from the console.

### XFAForeground

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Comes back true for a document that is an XFA Foreground form, and false in every other case.

From version 8.0 on, a PDF file can be brought into LiveCycle Designer as artwork. Whatever graphical richness that PDF holds then serves as a backdrop onto which form fields get dropped within LiveCycle Designer. The XFAForeground property tells you whether the PDF came about this way: a true means it was imported into LiveCycle Designer as artwork and afterward saved there.

Example: This script checks whether the active document is an XFA Foreground form, that is, one produced by importing a PDF into LiveCycle Designer and saving it.

```
if ( this.XFAForeground )
    console.println("This is an XFA Foreground form.");
```

### zoom

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

The zoom level on the current page. It accepts any percentage between 8.33% and 6400%, given as a plain number; a value of 100, for instance, stands for 100%.

Example: Double whatever the current zoom level is.

```
this.zoom *= 2;
```

Set the zoom to 200%.

```
this.zoom = 200;
```

### zoomType

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

The document's present zoom type. Valid zoom types are listed in the table that follows.

To reach any of the zoom types, use the handy zoomtype object, which defines them all.

Zoom type

Keyword

Version

NoVary

zoomtype.none

FitPage

zoomtype.fitP

FitWidth

zoomtype.fitW

FitHeight

zoomtype.fitH

FitVisibleWidth

zoomtype.fitV

Preferred

zoomtype.pref

ReflowWidth

zoomtype.refW

6.0

| --- | --- | --- |

Example: Make the document's zoom type fit the width.

```
this.zoomType = zoomtype.fitW;
```

### Doc methods

### addAnnot

Version (Key)

Save-Prefs

Security

Product

5.0

Saved

Yes

Required the right to manipulate comments

| --- | --- | --- | --- |

Builds an Annotation object carrying the properties you specify. Any property you leave out is filled in with the default for that annotation type.

Note

(Acrobat 8.0) addAnnot now behaves differently when the author property goes unspecified. Run in an unprivileged context, author defaults to the string undefined; run in a privileged context, the author property defaults to the current user's login name.

Parameters

Parameter

Description

object literal

A generic object spelling out the Annotation object's properties, things like type, rect, and page, that you want created.

| --- | --- |

Returns

The new Annotation object.

Example 1: This bare-bones example produces a square annotation.

```
var sqannot = this.addAnnot({type: "Square", page: 0});
```

sqannot ends up as a square annotation on the first page (numbering pages from 0).

Example 2: Place a Text annotation carrying assorted properties.

```
var annot = this.addAnnot
({
    page: 0,
    type: "Text",
    author: "A. C. Robat",
    point: [300,400],
    strokeColor: color.yellow,
    contents: "Need a little help with this paragraph.",
    noteIcon: "Help"
});
```

Example 3: Place a Square annotation carrying assorted properties.

```
   var annot = this.addAnnot({
       page: 0,
       type: "Square",
       rect: [0, 0, 100, 100],
       name: "OnMarketShare",
       author: "A. C. Robat",
       contents: "This section needs revision."
});
```

Example 4: An elaborate ink annotation shaped like a three-leaf rose.
