# Doc (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

This object is what links a PDF open in the viewer to the JavaScript interpreter, exposing methods and properties for reaching into the PDF document.

JavaScript offers several routes to the Doc object:

Most of the time, the this object refers to the Doc object of the document underneath.

A handful of properties and methods — extractPages, app.activeDocs, and app. openDoc among them — return the Doc object.

You can frequently reach the Doc object by way of event objects, one of which is built for every event that fires a JavaScript:

On mouse, focus, blur, calculate, validate, and format events, event.target gives back the Field object that set off the event. From there the Field object's Doc method takes you to the Doc object.

On every other event, event.target refers to the Doc.

Example 1: Access through this object

Read this document's page count by way of this:

```
var nPages = this.numPages;
// Get the crop box for "this" document:
var aCrop = this.getPageBox();
```

Example 2: Access through return values

Hands values back from one document so as to open, change, save, and close a different one.

```
// Path relative to "this" doc:
var myDoc = app.openDoc("myNovel.pdf", this);
myDoc.info.Title = "My Great Novel";
myDoc.saveAs(myDoc.path);
myDoc.closeDoc(true);
```

Example 3: Access through the event object.

For mouse, calculate, validate, format, focus, and blur events:

```
var myDoc = event.target.doc;
```

For all other events (for example, batch or console events):

```
var myDoc = event.target;
```

### Doc properties

### alternatePresentations

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

Object undefined

R

| --- | --- | --- | --- | --- | --- |

Points to the document's AlternatePresentation object. Should the machinery for showing alternate presentations be missing, this property reads as undefined.

Through the AlternatePresentation object you reach the document's alternate presentations. Under the PDF language extension, a single document can hold many named alternate presentations. Every alternate presentation of a recognized type gains a matching alternatePresentations property on the document; that property carries the same name as its alternate presentation and points to that presentation's AlternatePresentation object. When the document contains no recognized alternate presentations, this object stays empty (it exposes no properties).

Full details on alternate presentations live in the PDF Reference.

Note

To match the present implementation, give the alternate presentation an ASCII name. So far the only alternate presentation type built is "SlideShow".

For the properties and methods that drive an alternate presentation, look at the AlternatePresentation object.

Example 1: Test whether the AlternatePresentation object is present:

```
if( typeof this.alternatePresentations != "undefined" )
{
    // Assume AlternatePresentations are present
    // List the names of all alternate presentations in the doc
    for ( var ap in this.alternatePresentations ) console.println(ap);
}
```

Example 2: Get the slide show named MySlideShow and start the show.

```
// oMySlideShow is an AlternatePresentation object
oMySlideShow = this.alternatePresentations["MySlideShow"];
oMySlideShow.start();
```

### author

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

The author of the document.

### baseURL

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Relative web links inside the document are resolved against the document's base URL. See also URL.

Example: Assigns the base URL, then adds a link that jumps to a page relative to that base URL.

```
console.println("Base URL was " + this.baseURL);
this.baseURL = "http://www.example.com/products/";
console.println("Base URL is " + this.baseURL);
// Add a link to the first page
var link = this.addLink(0, [200,200, 400, 300])
// Set an action that goes to the Example Reader page on the Example website.
link.setAction("this.getURL('reader',false)")
```

### bookmarkRoot

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

The bookmark tree's root bookmark. The user never sees it; it serves as a programmatic handle for reaching the tree and the child bookmarks beneath it.

Example: See the Bookmark object for an example.

### calculate

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true (which is the default), this document is allowed to run calculations; when false, it is not. This property takes over from the app.calculate property, which is now discouraged.

### collection

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

Collection object or a null object if there is no collection in this PDF.

R

| --- | --- | --- | --- | --- | --- |

This property holds a collection object representing the collection inside the PDF. You adjust the collection's properties by way of that collection object.

Note

There is no way to convert a PDF file into a PDF collection, and a document's PDF-collection status cannot be stripped away.

To make a fresh collection, reach for app.newCollection.

```
if (this.collection) {
   var collection = this.collection;
   // Do something with the collection...
}
```

### creationDate

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

The document's creation date.

### creator

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

No

String

R

| --- | --- | --- | --- | --- | --- |

Note

The info property now takes the place of this one.

The application that created the document (for instance, "Adobe FrameMaker" or "Adobe PageMaker").

### dataObjects

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

An array holding every named data object found in the document.

Companion properties and methods are openDataObject, getDataObject, createDataObject, importDataObject, removeDataObject, getDataObjectContents, and setDataObjectContents.

Example: List all embedded files in the document.

```
var d = this.dataObjects;
for (var i = 0; i < d.length; i++)
    console.println("Data Object[" + i + "]=" + d[i].name);
```

### delay

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Use this property to hold off redrawing appearance changes across every field in the document. It typically buffers a run of field changes before you ask the fields to rebuild their appearance. While it is true, each change waits in a queue until delay returns to false, at which moment every field on the page is redrawn.

See also the Field object delay property.

### dirty

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

D

No

Not available in Reader

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Tracks whether changes to the document have left it needing a save. Clearing the dirty flag comes in handy after changes that should not trigger a save, such as refreshing a status field.

Note

For a temporary or freshly made document, setting dirty to false changes nothing — the user is still prompted to save changes before the document closes. See requiresFullSave.

Example 1: Resets a form and then sets dirty to false. Once the reset runs, the user may close the document without dismissing a Save dialog box.

```
var f = this.getField("MsgField");
f.value = "You have made too many mistakes, I'm resetting the form. "
    + "Start over, this time follow the directions!";
this.resetForm();
this.dirty = false;
```

Example 2: Writes into a text field to prompt the user to finish the form. The script is written so that filling the field leaves the document's save state untouched.

```
var f = this.getField("MsgField");
var b = this.dirty;
f.value = "Please fill in the fields below.";
this.dirty = b;
```

### disclosed

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.05

No

Yes

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Controls whether JavaScript scripts running in other documents may reach this document.

Before they return its Doc, the app.openDoc and app.activeDocs methods consult the document's disclosed property.

Note

You may set the disclosed property only during batch, console, Page/Open and Doc/Open events. For background on JavaScript events, see the event object. See also Privileged context.

Example 1: To disclose a document to others, drop the code at the document's top level (either at the document level or as a page open action):

```
this.disclosed = true;
```

Example 2: The code below can run inside an Execute JavaScript Batch Sequence to disclose every selected document.

```
this.addScript("Disclosed", "this.disclosed = true;");
```

### docID

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

Array

R

| --- | --- | --- | --- | --- | --- |

An array of two hex-encoded binary strings. The first is a permanent identifier fixed from the file's contents when it was first created, and it survives incremental updates unchanged. The second is a shifting identifier drawn from the file's contents as of its most recent update. The optional ID entry in a PDF file's trailer dictionary defines both. (See the PDF Reference.)

For a usage example, see Example 6 (Acrobat 7.0).

### documentFileName

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

String

R

| --- | --- | --- | --- | --- | --- |

The Doc's referenced document, given as the bare file name plus extension. The device-independent path is left out. See also the path and URL properties. For the document's file size, turn to the filesize property.

Example: Get the document file name.

```
console.println('"The file name of this document is '
    + this.documentFileName +'."');
```

Run that script against this document — the JavaScript for Acrobat API Reference — and it prints the statement below:

```
"The file name of this document is js_api_reference.pdf"
```

### dynamicXFAForm

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

Reads true when the document is a dynamic XFA form, and false otherwise.

In a dynamic XFA form, certain fields can grow or shrink to fit whatever values they hold.

Example: For a usage example, see the xfa object.

### external

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

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reports whether the active document is open inside Acrobat itself or hosted in some outside frame, for instance a web browser.

Example: Test if this document happens to be sitting in a browser.

```
if ( this.external )
{
    // Viewing from a browser
}
else
{
    // Viewing in the Acrobat application.
}
```

### filesize

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

How large the document is, measured in bytes.

Example (Acrobat 5.0)

Compare the byte count of a document before a save against its byte count afterward:

```
// Add the following code to the "Document Will Save" section
var filesizeBeforeSave = this.filesize
console.println("File size before saving is " + filesizeBeforeSave);

// Add the following code to the "Document Did Save" section
var filesizeAfterSave = this.filesize
console.println("File size after saving is " + filesizeAfterSave);
var difference = filesizeAfterSave - filesizeBeforeSave;
console.println("The difference is " + difference );
if ( difference < 0 )
    console.println("Reduced filesize!");
else
    console.println("Increased filesize!");
```

### hidden

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

Evaluates to true when the window holding the document is not shown. A window can end up hidden because, say, batch processing is acting on it, or because it was deliberately launched without a visible frame. Both the openDataObject and app.openDoc methods let you open a document whose window stays hidden.

Example: Launch a document, then confirm whether its window is hidden.

```
oDoc = app.openDoc({
    cPath:"/C/myDocs/myHidden.pdf",
    bHidden: true
});
console.println("It is " + oDoc.hidden + " that this document hidden.");
oDoc.closeDoc();
```

### hostContainer

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

Yields a HostContainer object when the PDF sits embedded inside some outer container, a web browser for example; in any other case the value comes back as undefined.

Note

On the Mac OS platform this property has no implementation.

### icons

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

Array null

R

| --- | --- | --- | --- | --- | --- |

Holds an array of the named Icon objects sitting in the document-level named icons tree. When the document carries no named icons at all, you get null back instead.

See also addIcon, getIcon, importIcon, removeIcon, the Field object properties buttonGetIcon, buttonImportIcon, buttonSetIcon, and the Icon object.

Example 1: Print how many named icons live in the active document.

```
if (this.icons == null)
    console.println("No named icons in this doc");
else
    console.println("There are " + this.icons.length
        + " named icons in this doc");
```

Example 2: Walk through every named icon in the active document.

```
for (var i = 0; i < this.icons.length; i++) {
    console.println("icon[" + i + "]=" + this.icons[i].name);
}
```

### info

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

D

No

All

Object

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

Gives back an object whose properties come straight from the PDF file's document information dictionary. (Consult the PDF Reference.) The standard keys are:

```
Title
Author
Authors                         (Acrobat 9.0)
Subject
Keywords
Creator
Producer
CreationDate
ModDate
Trapped
```

Under Acrobat these properties accept writes, and assigning to one marks the document as dirty. You can tack on extra document information fields by assigning properties beyond the standard set.

Under Adobe Reader, any attempt to write a property on this object raises an exception.

Note

Capitalization does not matter for the standard keys, so info.Keywords and info.keywords refer to the same thing.

With Acrobat 9.0 came the Authors (authors) property on the info object. Calling Authors hands you back the authors as a semicolon-separated list. Because author data lives in the XMP metadata, Doc.info.Authors pulls it out of that metadata as an array, and you can reach individual authors one by one. The Example 3 (Acrobat 9.0) further down shows how.

Example 1: Fetch the title of the active document.

```
var docTitle = this.info.Title;
```

Example 2: Pull details about the document.

```
this.info.Title = "JavaScript, The Definitive Guide";
this.info.ISBN = "1-56592-234-4";
this.info.PublishDate = new Date();
for (var i in this.info)
    console.println(i + ": "+ this.info[i]);
```

Output along these lines could come from the script above:

```
CreationDate: Mon Jun 12 14:54:09 GMT-0500 (Central Daylight Time) 2000
Producer: Acrobat Distiller 4.05 for Windows
Title: JavaScript, The Definitive Guide
Creator: FrameMaker 5.5.6p145
ModDate: Wed Jun 21 17:07:22 GMT-0500 (Central Daylight Time) 2000
SavedBy: Adobe Acrobat 4.0 Jun 19 2000
PublishDate: Tue Aug 8 10:49:44 GMT-0500 (Central Daylight Time) 2000
ISBN: 1-56592-234-4
```

Example 3 (Acrobat 9.0)

Here we walk through both writing and reading several authors. The Description tab inside the Document Properties dialog box is another way to enter more than one author.

Assign three authors to this document.

```
this.info.Authors=["Robat, A. C.", "Obe, A. D.","Torys, D. P."];
```

Run this.info.Authors inside the JavaScript Debugger Console window and you see this result:

```
Robat, A. C.,Obe, A. D.,Torys, D. P.
```

Retrieve each author in turn.

```
for (var i=0; i<this.info.Authors.length; i++)
    console.println((i+1) + ": " + this.info.Authors[i]);
```

The Console window then reports the following:

```
1: Robat, A. C.
2: Obe, A. D.
3: Torys, D. P.
```

### innerAppWindowRect

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

Hands back a rectangle, given as screen coordinates in an array, that marks the bounds of the Acrobat inner application window. Elements belonging to the outer application rectangle, such as the title bar and the resizing border, are left out of this one.

Example: Echo the Acrobat inner application window back to the console.

```
var coords = this.innerAppWindowRect;
console.println(coords.toSource())
// Possible output: [115, 154, 1307, 990]
```

See also innerDocWindowRect, outerAppWindowRect and outerDocWindowRect.

### innerDocWindowRect

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

Hands back a rectangle, given as screen coordinates in an array, that marks the bounds of the Acrobat inner document window. Elements belonging to the outer document rectangle, such as the title bar and the resizing border, are left out of this one.

How the document and application rectangles relate varies by platform. Take Windows, where the document window always nests within the application window; on Mac OS the two coincide.

See also innerAppWindowRect, outerAppWindowRect, outerDocWindowRect, and pageWindowRect.

### isModal

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

R

| --- | --- | --- | --- | --- | --- |

A Boolean reporting whether the document sits in a modal state at the moment, as happens when a modal dialog box is up via app.execDialog.

### keywords

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

object

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

Note

The info property now takes the place of this one.

The keyword terms characterizing the document (think "forms", "taxes", "government").

### layout

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

R/W

| --- | --- | --- | --- | --- | --- |

Adjusts how pages of the active document are laid out. The permitted values are:
