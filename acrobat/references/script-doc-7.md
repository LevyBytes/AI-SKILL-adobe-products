# Doc (part 7)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

Named actions that may set off menu items without the user knowing are present in the document.

UnknownPDFContent

PDF content goes unrecognized: content — PDF or custom — that the running version of Acrobat does not handle sits in the document. A later Acrobat release (PDF 1.8 or higher) may have produced it.

UnknownPDFContentStmOp

A drawing operator goes unrecognized: content — PDF or custom — that the running version of Acrobat does not handle sits in the document. A later Acrobat release may have produced it.

URIActions

Launch URI actions that link out to external content are present in the document.

XObjHasInterpolate

Image interpolation has been switched on by the document author. Image interpolation is not permitted at all.

| --- | --- |

Example: Run a document through processing and pull its legal PDF warnings.

```
var w = this.getLegalWarnings( true );
console.println( "Actual Legal PDF Warnings:" );
for(i in w) console.println( i + " = " + w[i] );

var w1 = this.getLegalWarnings( false );
console.println( "Declared Legal PDF Warnings:" );
for(i in w1) console.println( i + " = " + w1[i] );

// For a certification signature, note also if annotations are
// allowed by MDP settings

var f = this.getField( "AuthorSig" );
var s = f.signatureInfo();
if( s.mdp == "defaultAndComments" )
    console.println( "Annotations are allowed" );

// What does the author have to say about all this?

console.println( "Legal PDF Attestation:" );
console.println( w1.Attestation );
```

### getLinks

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Yields an array of the Link objects that fall inside the coordinates you name on a page. See also addLink and removeLinks.

Parameters

Parameter

Description

nPage

Whichever page holds the Link objects; page numbering starts at 0.

oCoords

A set of four rotated-user-space numbers spelling out a rectangle, listed as: upper-left x, upper-left y, lower-right x and lower-right y .

| --- | --- |

Returns

An array of Link objects.

Example: Count the number of links in a document and report to the console.

```
var numLinks=0;
for ( var p = 0; p < this.numPages; p++)
{
    var b = this.getPageBox("Crop", p);
    var l = this.getLinks(p, b);
    console.println("Number of Links on page " + p +" is " + l.length);
    numLinks += l.length;
}
console.println("Number of Links in Document is " + numLinks);
```

### getNthFieldName

Version (Key)

Save-Prefs

Security

Product

4.0

No

No

All

| --- | --- | --- | --- |

Returns the name carried by the document's n th field. See also numFields.

Parameters

nIndex

Position of the field whose name you want back.

| --- | --- |

Returns

The name of the field in the document.

Example: Walk through each field the document contains.

```
for (var i = 0; i < this.numFields; i++)
    console.println("Field[" + i + "] = " + this.getNthFieldName(i));
```

### getNthTemplate

Version (Key)

Save-Prefs

Security

Product

deprecated

No

No

All

Note

The templates property, the getTemplate method, and the Template object take the place of this method.

Returns the name of the document's n th template.

Parameters

nIndex

Position of the template you want back.

| --- | --- |

Returns

Whatever the named template is called.

### getPageBox

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Hands back a rotated-user-space rectangle that bounds the page's named box. See also setPageBoxes.

Parameters

Parameter

Description

cBox

(optional) Which box type. Values are: Art Bleed BBox Crop (default) Trim — turn to the PDF Reference for what each box means.

nPage

(optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page.

| --- | --- |

Returns

In rotated user space, a rectangle bounding the page's named box.

Example: Get the dimensions of the Media box.

```
var aRect = this.getPageBox("Media");
var width = aRect[2] - aRect[0];
var height = aRect[1] - aRect[3];
console.println("Page 1 has a width of " + width + " and a height of "

     + height);
```

### getPageLabel

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Returns, for the page you name, its page label information.

Parameters

Parameter

Description

nPage

(optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page.

| --- | --- |

Returns

Page label information for the specified page.

Example: See setPageLabels for an example.

### getPageNthWord

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Returns the page's n th word.

See also getPageNumWords and selectPageNthWord.

Note

Set the document security to block content extraction and this method raises an exception.

Parameters

Parameter

Description

nPage

(optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page.

nWord

(optional) A 0-based word index; absent a value it defaults to 0, namely the page's first word.

bStrip

(optional) Controls whether white space and punctuation are pulled off the word ahead of its return. Its default is true.

| --- | --- |

Returns

That page's n th word.

Example: See spell.checkWord for an example.

### getPageNthWordQuads

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Returns the quads list belonging to the page's n th word. Text markup, underline, strikeout, highlight and squiggly annotations can be built using the Annotation object's quads property. See also getPageNthWord, getPageNumWords, and selectPageNthWord.

Note

Set the document security to block content extraction and this method raises an exception.

Parameters

Parameter

Description

nPage

(optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page.

nWord

(optional) A 0-based word index; absent a value it defaults to 0, namely the page's first word.

| --- | --- |

Returns

The quads list for the n th word on the page.

Example: Put an underline beneath the fifth word sitting on a document's second page.

```
var annot = this.addAnnot({
    page: 1,
    type: "Underline",
    quads:  this.getPageNthWordQuads(1, 4),
    author: "A. C. Robat",
    contents: "Fifth word on second page"
});
```

See spell. checkWord for an additional example.

### getPageNumWords

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Reports the page's total word count.

See also getPageNthWord, getPageNthWordQuads, and selectPageNthWord.

Parameters

Parameter

Description

nPage

(optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page.

| --- | --- |

Returns

The number of words on the page.

Example: Tally up every word across a document

```
var cnt=0;
for (var p = 0; p < this.numPages; p++)
    cnt += getPageNumWords(p);
console.println("There are " + cnt + " words in this doc.");
```

For one more example, look to spell. in checkWord.

### getPageRotation

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Returns, for the page you name, its rotation. See also setPageRotations.

Parameters

Parameter

Description

nPage

(optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page.

| --- | --- |

Returns

The rotation value of 0, 90, 180, or 270.

### getPageTransition

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Returns, for the page you name, its transition. See also setPageTransitions.

Parameters

Parameter

Description

nPage

(optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page.

| --- | --- |

Returns

An array of three values: [ nDuration, cTransition, nTransDuration ].

nDuration sets the longest stretch the page stays on screen before the viewer flips ahead to the next page on its own. Set it to -1 and automatic page turning is off.

cTransition names the transition applied to the page. The app.fs. transitions property carries a list of the transitions you can use.

cTransDuration gives, in seconds, how long the transition effect runs.

### getPreflightAuditTrail

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Returns the embedded audit trail as it currently stands.

Returns

A PreflightAuditTrail object or Undefined if no audit trail exists.

### getPrintParams

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Returns a PrintParams object that mirrors the default print settings. Consult the print method too — these days a PrintParams object is the argument it expects.

Returns

A PrintParams object.

Example: Get the PrintParams object of the default printer.

```
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.automatic;
this.print(pp); // Print
```

### getSound

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Returns the sound object that carries the name you give. See also sounds, importSound, deleteSound, and the Sound object.

Parameters

cName

Which object to fetch, by name.

| --- | --- |

Returns

The Sound object corresponding to the specified name.

Example: Play a sound.

```
var s = this.getSound("Moo");
console.println("Playing the " + s.name + " sound.");
s.play();
```

### getTemplate

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Pulls the template you name back from the document. See also templates, createTemplate, removeTemplate, and the Template object.

Parameters

cName

The name of the template to retrieve.

| --- | --- |

Returns

The Template object or null if the named template does not exist in the document.

Example: Try to get a particular template and determine if it is hidden or visible.

```
var t = this.getTemplate("myTemplate");
if ( t != null ) console.println( "myTemplate exists and is "
    + eval( '( t.hidden) ? "hidden" : "visible"' ) + ".");
else console.println( "myTemplate is not present!");
```

### getURL

Version (Key)

Save-Prefs

Security

Product

4.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Performs a GET to fetch the URL you name from the Internet. When the active document is open within the browser, or when Acrobat Web Capture cannot be reached, retrieval falls to the Acrobat Weblink plug-in instead. Run from inside Acrobat, the call derives the current document's URL one of three ways: from the baseURL, from the URL attached to page 0 (the first page) for documents that arrived through Web Capture, or from the file system.

Note

From Acrobat 8.1 forward, URLs using the javascript or file schemes will run only within a privileged context — a batch or console event, for instance. Such URLs are recognizable by their leading scheme name, either javascript or file.

Note

Set bAppend to true and Adobe Reader cannot use this method.

The rough equivalent here is the "open a web page" action.

For something comparable, look at app. launchURL.

Parameters

Parameter

Description

cURL

Either a fully qualified URL or a relative one. A query string may trail the end of the URL.

bAppend

(optional) With true as the default, any page or pages that come back get tacked onto the current document. Three situations force this flag to false: the document running inside the web browser, the Acrobat Web Capture plug-in being unreachable, or a URL of type "file:///". - From Acrobat 6.0 onward, a true bAppend confines getURL to running during a console or batch event. See Privileged context.

| --- | --- |

Example:

```
this.getURL("http://www.example.com/", false);
```

### getUserUnitSize

Version (Key)

Save-Prefs

Security

Product

Type

Access

12.0

No

No

All

Integer

R

| --- | --- | --- | --- | --- | --- |

Hands back a page's UserUnit value. That value helps you work out page sizes when the pages run large — handy, say, for pages whose size goes past 14,400 units.

Per the PDF reference, UserUnit is a positive number stating the size of default user space units as multiples of 1 / 72 inch. Because user space coordinates cap the largest page size at 14,400, UserUnit becomes a scaling factor that lets you express bigger pages. Pair getUserUnitSize with any size-related API — getPageBox among them — to work out a page's true dimensions.

Parameters

nPage

The page's 0-based index.

| --- | --- |

Returns

A number giving the page's UserUnit value.

Example (Acrobat)

Determine the page size in inches:

```
var aRect = this.getPageBox("Media");
var pageHeight = aRect[1];
var pageWidth = aRect[2];
var userUnit  = this.getUserUnitSize(0);
var pageHeightInches = ((pageHeight * userUnit) / 72);
var pageWidthInches = ((pageWidth * userUnit) / 72);
console.println("nPage 1 height : " + pageHeightInches +
           " inches nPage 1 width : " + pageWidthInches + " inchesn");
```

### gotoNamedDest

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Jumps to a named destination living inside the PDF document. The PDF Reference covers named destinations and the means of creating them.

Parameters

cName

What the destination inside a document is named.

| --- | --- |

Example: Crack open a document, then jump to a named destination inside it. Here the document that openDoc pulls up is taken to be disclosed.

```
// Open a new document

 var myNovelDoc = app.openDoc("/c/fiction/myNovel.pdf");
// Go to a destination in this new doc
myNovelDoc.gotoNamedDest("chapter5");
// Close the old document
this.closeDoc();
```

For a leaner way to pull off this same job, look at Example 6 (Acrobat 8.0) right after openDoc.

### importAnFDF

Version (Key)

Save-Prefs

Security

Product

4.0

D

No

F

| --- | --- | --- | --- |

Brings in the FDF file you name. importAnXFDF and importTextData are also worth a look.

Parameters

Parameter

Description

cPath

(optional) The FDF file's device-independent path. It ought to resemble the value of an FDF file's F entry — one exported through the submitForm method or by way of the Forms > Manage Form Data > Export Data From Form menu item. That path may sit relative to where the current document is. Leave this parameter off and a dialog box opens for the user to pick the file.

| --- | --- |

Example: Wired to a Page Open event, the snippet below tests whether one particular function — ProcResponse — already exists; lacking it, the snippet installs a document-level JavaScript that lives inside an FDF file.

```
if(typeof ProcResponse == "undefined") this.importAnFDF("myDLJS.fdf");
```

Notice the path used here is relative. The trick comes in handy for auto-installing document-level scripts onto PDF files distilled out of a PostScript file.

### importAnXFDF

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

F

| --- | --- | --- | --- |

Brings in the XFDF file you name, which holds XML form data.

XFDF renders Acrobat form data as XML. Consult the document XML Form Data Format (XFDF) Specification.

exportAsXFDF, importAnFDF and importTextData are also worth a look.

Parameters

Parameter

Description

cPath

(optional) The XFDF file's device-independent path. That path may sit relative to where the current document is. Drop the parameter and a dialog box opens for the user to pick the file.

| --- | --- |

### importDataObject

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

All

| --- | --- | --- | --- |

Pulls an external file into the document and ties the name you give to the data object. Later on, that data object can be extracted or worked on.

Kindred objects, properties, and methods include dataObjects, getDataObject, openDataObject, createDataObject, exportDataObject, importDataObject, getDataObjectContents, and setDataObjectContents, plus the data object.

Note

Hand in a cDIPath parameter and this method runs only during a batch or console event, or through an external call — OLE, for example. See Privileged context. For a treatment of JavaScript events, turn to the event object.

Bring in a file attachment through importDataObject and its Data.name takes the value of the cName parameter. Attach a file by way of the UI, though, and the name gets set on its own — attachments pick up the sequential names "Untitled Object", "Untitled Object 2", "Untitled Object 3", and so on.

Parameters

Parameter

Description

cName

What name to tie to the data object.

cDIPath

(optional) A device-independent path pointing at a data file on the user's hard drive. The path can be absolute or relative to the current document. Skip it and the user gets prompted to find a data file.

cCryptFilter

(optional, Acrobat 6.0) The language-independent name of whichever crypt filter encrypts this data object. That crypt filter has to already sit in the document's crypt-filter list — added earlier through the Doc addRecipientListCryptFilter method — or an exception fires. Want this data object left unencrypted inside a file that the Doc encryptForRecipients method encrypts? Reach for the predefined Identity crypt filter.

| --- | --- |

Returns

true on success. An exception is thrown on failure.

Example: Attach two files into current document, and write all Data object information to the console.

```
function DumpDataObjectInfo(dataobj)
{
    for (var i in dataobj)
        console.println(dataobj.name + "[" + i + "]=" + dataobj[i]);
}
// Prompt the user for a data file to embed.
this.importDataObject("MyData");
DumpDataObjectInfo(this.getDataObject("MyData"));
// Embed Foo.xml (found in the parent directory for this doc).
this.importDataObject("MyData2", "../Foo.xml");
DumpDataObjectInfo(this.getDataObject("MyData2"));
```

### importIcon

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

All

| --- | --- | --- | --- |

Brings an icon into the document and pairs it with the name you specify.

Worth consulting as well: icons, addIcon, getIcon, removeIcon, the Field object methods buttonGetIcon, buttonImportIcon, buttonSetIcon, and the Icon object.

Starting at version 6.0, Acrobat tries first to open cDIPath as a PDF file. Should that fail, it attempts converting cDIPath into PDF out of one of the recognized graphics formats (BMP, GIF, JPEG, PCX, PNG, TIFF), then pulls the converted file in as a button icon.

Note

When cDIPath is supplied, a batch or console event is the only place this method can run. See Privileged context. A discussion of Acrobat JavaScript events sits in the event object.

Parameters

Parameter

Description

cName

What name to tie to the icon.

cDIPath

(optional) A device-independent path leading to a PDF file on the user's hard drive. That path can be absolute or relative to the current document. cDIPath may be given only within a batch environment or from the console. Leave it off and the nPage parameter goes ignored, with the user prompted instead to locate a PDF file and browse to a specific page.

nPage

(optional) The 0-based index of whichever page in the PDF file gets imported as an icon. It defaults to 0.

| --- | --- |

Returns

An integer that reports back whether the operation went through:

0: No error

1: The user cancelled the dialog box

-1: The selected file could not be opened

-2: The selected page was invalid

Example: This function comes in handy for stocking a document with a run of named icons to retrieve later. An author might, for instance, want a picture of a list box state to show up beside the list box whenever the user picks that state. Lacking this function, you could manage it with a batch of fields that get hidden and shown — but authoring that is awkward. Better to use a script along these lines:

```
var f = this.getField("StateListBox");
var b = this.getField("StateButton");
b.buttonSetIcon(this.getIcon(f.value));
```

A single field pulls off the same effect this way.

Building a simple user interface to add named icons to a document is doable. Picture two fields existing: one named IconName to carry the icon name, and one named IconAdd to add the icon to the document. IconAdd's mouse-up script would read:

```
var t = this.getField("IconName");
this.importIcon(t.value);
```

Run that same kind of script within a batch setting and you can stock a document with every selected icon file sitting in a folder.

### importSound

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

All

| --- | --- | --- | --- |

Brings a sound into the document and ties the name you give to that sound.

Note

When cDIPath is supplied, a batch or console event is the only place this method can run. See Privileged context. A discussion of JavaScript events sits in the event object.

Parameters

Parameter

Description

cName

What name to tie to the sound object.

cDIPath

(optional) A device-independent path leading to a sound file on the user's hard drive. That path can be absolute or relative to the current document. Skip it and the user gets prompted to find a sound file.

| --- | --- |

Example: Pull in a pair of sounds, then play each back.

```
this.importSound("Moo");
this.getSound("Moo").play();
this.importSound("Moof", "./moof.wav");
this.getSound("Moof").play();
```

Worth consulting as well: sounds, getSound, deleteSound, and the Sound object.

### importTextData

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

F

| --- | --- | --- | --- |

Pulls a single row of data out of a text file. Every row has to be tab delimited. That first row of the text file holds the column names for the tab-delimited data — names that double as field names for text fields living in the PDF file. Data rows count from 0, so the opening data row is row zero (the column-name row does not figure in the count). As a data row comes in, each column's datum becomes the field value of the field matching the column the datum belongs to.
