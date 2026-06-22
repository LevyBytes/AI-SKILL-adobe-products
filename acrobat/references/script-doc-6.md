# Doc (part 6)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

```
/* Extract pages to folder */
// Regular expression used to acquire the base name of file
var re = /.pdf$/i;
// filename is the base name of the file Acrobat is working on
var filename = this.documentFileName.replace(re,"");
try {for (var i = 0; i < this.numPages; i++)
        this.extractPages({
            nStart: i,
            cPath: "/F/temp/"+filename+"_" + i +".pdf"
        });
} catch (e) { console.println("Aborted: " + e) }
```

### flattenPages

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Every annotation sitting within a span of pages is folded into the page contents. Omit the page range and the conversion sweeps across every annotation the document holds.

Note

Tread carefully here. Each annotation on the named span of pages — form fields, comments, and links included — gets flattened. Their visual appearances may survive, yet they cease to be annotations.

Parameters

Parameter

Description

nStart

(optional) A 0-based index pinning where an inclusive page range opens within the current document. Give nStart on its own and the range shrinks to the lone page it points at.

nEnd

(optional) A 0-based index pinning where that inclusive page range closes within the current document.

nNonPrint

(optional, Acrobat 6.0) This parameter governs the treatment of non-printing annotations. Its values are:

0: (default) flattens non-printing annotations.

1: leaves non-printing annotations untouched.

2: strips non-printing annotations out of the document.

| --- | --- |

Example: Flatten every page the document holds.

```
this.flattenPages();
```

### getAnnot

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Hands back the Annotation object that lives on a given page of the document.

Parameters

nPage

Whichever page holds the Annotation object.

cName

What the Annotation object is called.

| --- | --- |

Returns

The Annotation object, or null if there is no such annotation.

Example: Attempt to get a particular annotation.

```
var ann = this.getAnnot(0, "OnMarketShare");
if (ann == null)
    console.println("Not Found!")
else
    console.println("Found it! type: " + ann.type);
```

### getAnnotRichMedia

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Fetches, by name, an AnnotRichMedia object belonging to a specified page.

Parameters

Parameter

Description

nPage

A 0-based number naming the page on which the AnnotRichMedia object sits.

cName

What the AnnotRichMedia object is called.

| --- | --- |

Returns

An AnnotRichMedia object, or undefined if there is no such object.

See also getAnnotsRichMedia.

### getAnnot3D

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Pulls back, by name, an Annot3D object from a given page.

Parameters

nPage

A 0-based number giving the page where the Annot3D object lives.

cName

What the Annot3D object is called.

| --- | --- |

Returns

The Annot3D object, or undefined if there is no such object.

### getAnnots

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Returns an array of Annotation objects matching the criteria you specify. See also getAnnot and syncAnnotScan.

Parameters

Parameter

Description

nPage

(optional) A 0-based page number. Supply it and only that page's annotations come back; leave it out and annotations meeting the search criteria are gathered from every page.

nSortBy

(optional) Which sort method gets applied to the resulting array. Its values are:

`ANSB_N`one: (default) leaves the array unsorted — the same as omitting this argument altogether.

`ANSB_P`age: sorts primarily by page number.

`ANSB_A`uthor: sorts primarily by author.

`ANSB_M`odDate: sorts primarily by the modification date.

`ANSB_T`ype: sorts primarily by annotation type.

bReverse

(optional) Set it true and the array's order under nSortBy gets flipped.

nFilterBy

(optional) Restricts the result to annotations that satisfy particular criteria. Its values are:

`ANFB_S`houldNone: (default) returns every annotation — the same as leaving this argument off.

`ANFB_S`houldPrint: keeps only the annotations eligible to print.

`ANFB_S`houldView: keeps only the annotations eligible to be viewed.

`ANFB_S`houldEdit: keeps only the annotations eligible to be edited.

`ANFB_S`houldAppearInPanel: keeps only those annotations surfacing in the annotations pane.

`ANFB_S`houldSummarize: keeps only the annotations a summary may carry.

`ANFB_S`houldExport: keeps only the annotations an export may carry.

| --- | --- |

Returns

An array of Annotation objects, or null if none are found.

Example: Gather every annotation off page one and print details about them to the console.

```
this.syncAnnotScan();
var annots = this.getAnnots({
    nPage:0,
    nSortBy: ANSB_Author,
    bReverse: true
});
console.show();
console.println("Number of Annotations: " + annots.length);
var msg = "%s in a %s annot said: "%s"";
for (var i = 0; i < annots.length; i++)
    console.println(util.printf(msg, annots[i].author, annots[i].type,
        annots[i].contents));
```

### getAnnotsRichMedia

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

For the page you name, this method yields an array of AnnotRichMedia objects.

Parameters

Parameter

Description

nPage

A 0-based number identifying the page that holds the AnnotRichMedia object.

| --- | --- |

Returns

An array of AnnotRichMedia objects, or undefined if none is found.

See also getAnnotRichMedia.

### getAnnots3D

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

For a single page, this method delivers an array of Annot3D objects.

Caution

Steer clear of this method when you are layering Flash content onto a 3D annotation that already exists. Reach for getAnnotsRichMedia in those situations instead.

Parameters

nPage

A 0-based number marking the page that holds the Annot3D objects.

| --- | --- |

Returns

An array of Annot3D objects, or undefined if none is found.

### getColorConvertAction

Version (Key)

Save-Prefs

Security

Product

8.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Retrieves a colorConvertAction object that mirrors the default color conversion settings.

Look to colorConvertPage as well; two colorConvertAction arrays are what it accepts as parameters.

Returns

A colorConvertAction object

Example: Get a colorConvertAction object, set it up to convert everything to RGB. (Note that we do not convert any alternate spaces, hence the “space type” match is for anything but alternate spaces.)

```
// Get a color convert action
var toRGB = this.getColorConvertAction();

// Set up the action for a conversion to RGB
toRGB.matchAttributesAny = -1;
toRGB.matchSpaceTypeAny = ~toRGB.constants.spaceFlags.AlternateSpace;
toRGB.matchIntent = toRGB.constants.renderingIntents.Any;
toRGB.convertProfile = "Apple RGB";
toRGB.convertIntent = toRGB.constants.renderingIntents.Document;
toRGB.embed = true;
toRGB.preserveBlack = false;
toRGB.useBlackPointCompensation = true;
toRGB.action = toRGB.constants.actions.Convert;

// Convert the first page of the document
var result = this.colorConvertPage(0,[toRGB],[]);
```

### getDataObject

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Fetches one particular Data object. See also dataObjects, createDataObject, exportDataObject, importDataObject, and removeDataObject.

Parameters

cName

The name of the data object to obtain.

| --- | --- |

Returns

The Data object corresponding to the specified name.

Example: Get a specific file attachment, and write various information to the console.

```
var MyData = this.getDataObject("MyData");
console.show(); console.clear();
for (var i in MyData) console.println("MyData." + i + "=" + MyData[i]);
```

### getDataObjectContents

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Opens up the contents of the file attachment tied to a DataObject.

Parameters

Parameter

Description

cName

Which Data object to fetch, given by its name.

bAllowAuth

(optional) Its default is false. Set it to true and a dialog box gathers the user's authorization. Such authorization may be needed when encryptForRecipients encrypted the data object. The bAllowAuth flag being true is what lets authorization dialog boxes appear.

| --- | --- |

Returns

ReadStream object

Whenever any one of the conditions below holds for an embedded file attachment, the method aborts and a NotAllowedError is raised on the attempt to read that attachment's content (every match on a file name extension ignores case):

The attachment's file name extension is “.SWF”. Granting a bona fide .SWF application or module — one running as part of Acrobat's Rich Media Annotation or PDF Portfolio navigator — access to the content bytes of .SWF embedded file attachments opens a hole: that legitimate .SWF might in turn pull in a malicious .SWF.

Note

Should you lean on the Data.MIMEType property to test whether a Data object stands for a .SWF file, bear in mind that application/x-shockwave-flash is the MIME type carried by .SWF files.

A “.GIF”, “.JPG”, “.JPEG”, or “.PNG” extension is carried by the attachment, yet its leading three content bytes spell out a .SWF file's header signature (“FWS” or “CWS”). This safeguard exists because the very same ActionScriptflash.display.Loader class load() method that loads GIF, JPEG, and PNG images is equally capable of loading a SWF file. Rename a malicious SWF file's extension to one of those image types and the SWF could end up loaded.

Related objects, properties, and methods are dataObjects, getDataObject, openDataObject, createDataObject, importDataObject, setDataObjectContents, and removeDataObject, and the data object.

Example: This snippet belongs to a circulating memo. A PDF file makes the rounds among the people on an email list. Each recipient types in a budget figure, then passes the document along to whoever comes next on the list. Just before the document goes out, that budget number gets tacked onto an embedded tab-delimited document, budget.xls, which is attached to this document. Once the document reaches the final recipient, that person can open the budget.xls attachment in a spreadsheet application and review all the budget numbers.

```
// Get the name and department of the current recipient
var firstName = this.getField("Name.First").value;
var lastName =  this.getField("Name.Last").value;
var deptName =  this.getField("Dept.Name").value;
// Get the budget number
var deptBudget =  this.getField("Dept.Budget").value;
if ( app.viewerVersion >= 7 ) {
    // Get the file stream object of the embedded file
    var oFile = this.getDataObjectContents("budget.xls");
    // Convert to a string
    var myBudget = util.stringFromStream(oFile, "utf-8");
    // Append current data to the end, using tabs to separate info
    var myBudget = myBudget + "rn" + firstName
        + "t" + lastName + "t" + deptName + "t" + deptBudget;
    // Convert back to a file stream
    var oFile = util.streamFromString(myBudget, "uft-8");
    // Now "overwrite" budget.xls
    this.setDataObjectContents("budget.xls", oFile);
} else {
        app.alert("Acrobat 7.0 or later is required."

             + " Your budget data will not be included. "
            + "Will e-mail on to the next correspondent, sorry. "
            + "Send in your budget request using traditional methods.");
}
```

What follows in the code, though omitted here, stores the document and forwards it to the next name on the mailing list.

getDataObjectContents, setDataObjectContents, util. stringFromStream, and util. streamFromString are the calls this example draws on.

### getField

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Binds a Field object out of the PDF document to a JavaScript variable.

From Acrobat 6.0 forward, the Field object of a single widget can be returned by this method. The Field object entry has more on this.

Parameters

cName

Which field you are after, by name.

| --- | --- |

Returns

A Field object representing a form field in the PDF document.

Example 1: Turn a text field into a multiline one and treble its height

```
var f = this.getField("myText");
var aRect = f.rect;               // Get bounding rectangle
f.multiline = true;               // Make it multiline
var height = aRect[1]-aRect[3];   // Calculate height
aRect[3] -= 2* height;            // Triple the height of the text field
f.rect = aRect;                   // and make it so
```

Example 2 (Acrobat 6.0)

Wire up a JavaScript action on a single widget — here, a radio button:

```
var f = this.getField("myRadio.0");
f.setAction("MouseUp",
    "app.alert('Thanks for selecting the first choice.');");
```

Example 3: List all properties of a field. This technique can be used to programmatically duplicate a field and its properties.

```
f = this.getField("myField");
for ( var i in f ) {
    try {
        if ( typeof f[i] != "function" )    // Do not list field methods
            console.println( i + ":" + f[i] )
    } catch(e) {}           // An exception occurs when we get a property
}                         // that does not apply to this field type.
```

### getIcon

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Fetches one particular icon object. See also the icons property, the addIcon, importIcon, and removeIcon methods, and the Field object methods buttonGetIcon, buttonImportIcon, and buttonSetIcon.

Parameters

cName

The name of the icon object to obtain.

| --- | --- |

Returns

The Icon object carrying the given name in the document, or null when no icon goes by that name.

Example: Below sits a custom keystroke script belonging to a combo box. Each item's face name in that combo box doubles as the name of one of the document's icons. Pick a different item and its matching icon shows up as the button face on the “myPictures” field.

```
if (!event.willCommit) {
    var b = this.getField("myPictures");
    var i = this.getIcon(event.change);
    b.buttonSetIcon(i);
}
```

See the Field object buttonSetIcon method or a more elaborate variation on this example.

### getLegalWarnings

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back this document's legal warnings packaged as an object, with one entry per warning turned up in the document.

Note

Across Acrobat releases earlier than 8.0, a call to Document.getLegalWarnings would dirty the document.

Adobe Reader cannot run the process that inspects a file to compile this warning list.

Parameters

Parameter

Description

bExecute

Pass true and the file gets inspected, with every warning that turns up returned. Acrobat 8 carries out that inspection by way of a PDF/SigQ conformance check. Pass false — the default — and back come the warnings already embedded in the file, plus the certifier's attestation should one exist. Under Acrobat 6 and 7, the act of certifying can embed legal warnings into a file (through cLegalAttest on the Field object method signatureSign ). Under Acrobat 8, the certifier may still tuck in an attestation, though no longer the warnings themselves. Reach that attestation by invoking this method with bExecute=false.

| --- | --- |

Returns

A DocLegalWarning object that pairs property names with the values of legal warnings. Each entry's value counts how many times that warning shows up in the document. With bExecute set to false, the PDF Reference lists the possible property names. With bExecute set to true, the property names line up with the PDF/SigQ level A violations enumerated below. Keep in mind that the warnings the PDF Reference lists overlap with — yet differ markedly from — the list below.

DocLegalWarning object

The properties below characterize the PDF/SigQ1-A Violations.

Property

Description

AlternateImages

An alternate version is forbidden inside an Image XObject.

Annotations

The document carries comments, whose visual appearances can shift depending on external variables.

CatalogHasAA

Concealed actions the end user may neither intend nor know about reside in the document. Examples run from JavaScript actions — firing on document open or save and so forth — to triggering a menu command or kicking off multimedia playback.

CatalogHasOpenAction

The document holds concealed actions set to fire on open. The end user may neither intend nor be aware of these actions. Such things range from running a menu command or starting multimedia to JavaScript actions tied to events like document open and save.

DevDep`GS_FL`

The FL key appears in the document's extended graphic state. That key holds a number setting how much flatness tolerance to allow while objects are drawn. Content might render one way in Acrobat and differently elsewhere.

DevDep`GS_TR`

A PDF transfer function in the document reinterprets and swaps out color — it could, for instance, turn black into white.

DocHasCryptFilter

Part or all of the content sits encrypted under a method that standard Acrobat installations lack. The document might, for example, be guarded by LiveCycle Policy Server. Streams encrypted by way of the crypt filter live in the document.

DocHasNonSigField

Form fields other than signatures are present in the document. How such fields look can vary with external variables.

DocHasPresentation

Presentations are barred, since one might house animations or other pieces capable of altering how the document looks or acts.

DocHasPSXObj

External variables can shift the visual elements — a logo, say, recoloring itself according to time or zoom level. PostScript XObjects are not permitted.

DocHasXFA

Documents built on XFA (dynamic forms) are disallowed, because forms of that kind could change the document's look or behavior.

DynamicSigAP

Signed signature fields whose visual appearance can vary with external variables are present in the document.

ExternalOPIdicts

Images that sit outside the PDF file are linked as alternates by the document — a high-resolution alternate image might be named for printing, for example. Images and form XObject must not carry an OPI alternate version.

ExternalRefXObjects

The document links out to images that the PDF file itself does not contain. External XObjects are not permitted.

ExternalStreams

External streams are present in the document. The author has tagged certain PDF bytes as a stream that may draw its data from somewhere external.

GoTo3DViewActions

Go To 3D View actions in the document can rework the document's look by handling 3D views without the user catching on.

GoToEHasF

The document links out to external PDF documents over the Internet, file system, or network, with no say over what that linked content contains. Embedded Go To actions must not point to external hierarchies.

GoToRemoteAction

Go To actions that may reach out to external content are present in the document.

InvalidEOF

Stray bytes trail past the PDF's end of file marker in the file.

InvalidFileHeader

Stray bytes sit ahead of the PDF's file header in the file.

JavaScriptActions

JavaScript actions capable of firing without the user knowing are present in the document.

LaunchActions

Launch File Attachment actions are present in the document.

MalformedContentStm

Drawing instructions are malformed: a syntax error. The grammar that governs page content definition is broken by the page content. The instruction might call for drawing a square, say, while the syntax used to do so is wrong.

MovieActions

Launch Movie actions that may fire without the user knowing are present in the document.

NonEmbeddedFonts

Fonts that are not embedded sit in the document. Open it on a system missing the needed fonts and Acrobat swaps in some other font. Keeping font-related warnings switched on is always advisable.

OptionalContent

The document's content is split into layers, and those layers can be shown or hidden silently on the fly.

PageHasAA

Concealed actions that the end user may neither intend nor know about reside on a page. The range covers menu-command execution, multimedia playback, and JavaScript actions bound to events such as document open or save.

RenditionActions

Rendition actions that may be used to fire off movies without the user knowing are present in the document.

SetOCStateActions

SetOCState actions in the document can recolor the document's look by toggling layers' visibility without the user catching on.

SigFieldHasAA

Actions that a mouse over or other user interaction could trigger sit on a signature field. They take in menu-command execution, multimedia playback, and JavaScript actions hooked to events like document open and save.

SigFieldHasAction

Actions that a click could trigger sit on a signature field. The set includes starting multimedia, running a menu command, and JavaScript actions attached to events such as document open and save.

SoundActions

Launch sound actions are present in the document.

TrueTypeFonts

This document draws on TrueType fonts. Because they are programs and may shift the document's appearance according to external variables, TrueType and TrueType-based OpenType fonts are disallowed. PDF/SigQ does not mandate this restriction, and it goes unreported unless the preference setting securityDigSigbTrueTypeFontPDFSigQWarn is set to 1.

UnknownNamedAction
