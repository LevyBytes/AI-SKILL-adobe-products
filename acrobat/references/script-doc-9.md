# Doc (part 9)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

A device-independent path pointing to the PDF that supplies the replacement pages. This path is allowed to be stated relative to wherever the current document sits.

nStart

(optional) A 0-based index marking where an inclusive page range starts in the source document used for replacement. When neither nStart nor nEnd is given, the whole source document is pulled. Supplying nStart alone narrows the range to just the one page nStart points at.

nEnd

(optional) A 0-based index marking where an inclusive page range ends in the source document used for replacement. When neither nStart nor nEnd is given, the whole source document is pulled. Supplying nEnd alone makes the range run from page 0 through nEnd.

| --- | --- |

### resetForm

Version (Key)

Save-Prefs

Security

Product

3.01

D

No

F

| --- | --- | --- | --- |

Returns the document's fields to their starting state. A reset field reverts to whatever its default is — for text fields that default is normally empty.

Note

Should the form hold signature fields, you'll need signature rights to run this method inside Adobe Reader.

Parameters

Parameter

Description

aFields

(optional) An array naming which fields to reset. Leave it out or pass null and the whole form's fields reset. Non-terminal fields are allowed in the array.

| --- | --- |

Example 1: pick the fields to reset, then reset them.

```
var fields = new Array();
fields[0] = "P1.OrderForm.Description";
fields[1] = "P1.OrderForm.Qty";
this.resetForm(fields);
```

The same fields can be reset using only one line of code:

```
this.resetForm(["P1.OrderForm.Description","P1.OrderForm.Qty"]);
```

Example 2: here's how to reset an entire subtree. Hand "name" into the fields array, say, and every name field below it — name.first and name.last among them — gets reset.

```
this.resetForm(["name"]);
```

### saveAs

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

Requires save rights

| --- | --- | --- | --- |

Writes the file out to the device-independent path named in the mandatory cPath parameter. Web optimization is not applied to the saved file. From Acrobat 6.0 onward, the document may instead be turned into a different file type (something other than PDF) and saved according to whatever cConvID holds.

Note

Execution is restricted to a batch or console event only. See Privileged context. JavaScript events are discussed under the event object.

(Adobe Reader S ): documents carrying Save usage rights can use this method within Adobe Reader.

Parameters

Parameter

Description

cPath

The device-independent path the file is written to. - cPath has to be a safe path (see Safe path) and bear an extension that suits the cConvID value. Consult the Values of cConvID and Valid Extensions table further down. When these security requirements go unmet, the method raises a NotAllowedError (see Error object) and fails.

cConvID

(optional, Acrobat 6.0) A conversion ID string naming the target conversion file type. The currently supported cConvID values are enumerated by app.fromPDFConverters. Omit cConvID and PDF is assumed.

cFS

(optional, Acrobat 7.0) A string naming the source file system. Two are accepted: “” (the empty string) for the default file system, and “CHTTP”. The default file system applies by default. This only matters when the web server supports WebDAV.

bCopy

(optional, Acrobat 7.0) A Boolean; pass true to save the PDF as a copy. Defaults to false.

bPromptToOverwrite

(optional, Acrobat 7.0) A Boolean; pass true and the user is prompted whenever the destination file is already there. Defaults to false.

| --- | --- |

Returns

A successful call returns undefined. Any error throws. As one case, the method raises a NotAllowedError (see Error object) when the user refuses an overwrite.

Note

Before Acrobat 7.0 this method gave back no value at all.

Values of cConvID and Valid Extensions

cConvID

Valid extensions

com.adobe.acrobat.eps

eps

com.adobe.acrobat.html

html, htm

com.adobe.acrobat.jpeg

jpeg, jpg, jpe

com.adobe.acrobat.jp2k

jpf, jpx, jp2, j2k, j2c, jpc

com.adobe.acrobat.docx

docx

com.adobe.acrobat.doc

doc

com.callas.preflight.pdfa

pdf

com.callas.preflight.pdfe

pdf

com.callas.preflight.pdfx

pdf

com.adobe.acrobat.png

png

com.adobe.acrobat.ps

ps

com.adobe.acrobat.rtf

rft

com.adobe.acrobat.xlsx

xlsx

com.adobe.acrobat.spreadsheet

xml

com.adobe.acrobat.accesstext

txt

com.adobe.acrobat.plain-text

txt

com.adobe.acrobat.tiff

tiff, tif

com.adobe.acrobat.xml-1-00

xml

com.adobe.acrobat.pptx (Acrobat Professional only)

pptx

| --- | --- |

Deprecated Values of cConvID (as of Acrobat 10)

The IDs below were deprecated at Acrobat 10. They carry no registration, yet — strictly when used with the doc.saveAs JavaScript call — they map internally onto valid, registered conversion IDs. A later Acrobat release will drop support for the deprecated IDs entirely.

Deprecated cConvID

Equivalent Valid cConvID

com.adobe.acrobat.html-3-20

com.adobe.acrobat.html

com.adobe.acrobat.htm l- 4-01-css-1-00

com.adobe.acrobat.html

| --- | --- |

Note

Whenever the conversion ID maps to jpeg, jp2k, png, or tiff, each page lands in its own file, named by tacking "_Page_#" onto the basename taken from the supplied file name. So with cPath set to "/C/temp/mySaveAsDocs/myJPGs.jpg", you'd get myJPGs_Page_1.jpg, myJPGs_Page_2.jpg, and onward.

Example 1: the script outline below could run as a batch sequence. The premise: a PDF holding form fields is already open. Those fields have to be filled from a database, after which the document is saved.

```
// code lines to read from a database and populate the form with data
// now save file to a folder; use customerID from database record
// as name
var row = statement.getRow();
.......
this.saveAs("/c/customer/invoices/" + row.customerID + ".pdf");
```

Example 2: lean on newDoc and addField to build a form's layout on the fly, fill it from a database, and save.

```
var myDoc = app.newDoc()
// layout some dynamic form fields
// connect to database, populate with data, perhaps from a database
..........
// save the doc and/or print it; print it silently this time
// to default printer
myDoc.saveAs("/c/customer/invoices/" + row.customerID + ".pdf");
myDoc.closeDoc(true);       // close the doc, no notification
```

Example 3 (Acrobat 6.0)

Save the current document in rich text format:

```
this.saveAs("/c/myDocs/myDoc.rtf", "com.adobe.acrobat.rtf");
```

For the roster of supported conversion ID strings, see fromPDFConverters.

Example 3 (Acrobat 7.0)

Write the document out to a WebDAV folder.

```
this.saveAs({
    cPath: "http://www.example.com/WebDAV/myDoc.pdf",
    bPromptToOverwrite: true,
    cFS: "CHTTP"
});
```

### scroll

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Brings the named point on the current page into the center of the current view. Express these coordinates in rotated user space. The PDF Reference has the specifics.

Parameters

nX

The x coordinate of the point to bring into view.

nY

The y coordinate of the point to bring into view.

| --- | --- |

### selectPageNthWord

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Switches the current page number and highlights the word you specify on that page.

See also getPageNthWord, getPageNthWordQuads, and getPageNumWords.

Parameters

Parameter

Description

nPage

(optional) The 0-based index of the page to act on. Defaults to 0, the document's first page.

nWord

(optional) The 0-based index of the word to fetch. Defaults to 0, the first word on the page.

bScroll

(optional) Controls whether a selected word that isn't currently visible gets scrolled into view. Defaults to true.

| --- | --- |

Example: fetch a specific word and select it.

```
// Get the 20th word on page 2 (page 1, 0-based)
var cWord = this.getPageNthWord(1, 20);
// Select that word (highlight) for the user to see, and change the page if

 // necessary.
this.selectPageNthWord(1, 20);
```

### setAction

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Attaches the document's JavaScript action for a particular trigger.

See also addScript, setPageAction, the Bookmark object setAction method, and the Field object setAction method.

Note

Whatever action was already set for the chosen trigger gets overwritten by this method.

Parameters

Parameter

Description

cTrigger

Names the trigger point the action attaches to. Values are: WillClose WillSave DidSave WillPrint DidPrint

cScript

The JavaScript expression that runs once the trigger fires.

| --- | --- |

Example: wire up WillSave and DidSave actions. The code reads the file size both before and after the save, then compares them.

```
// WillSave script
var myWillSave = 'var filesizeBeforeSave = this.filesize;r'
    + 'console.println("File size before saving is " + '
    + ' filesizeBeforeSave );';

// DidSave script
var myDidSave =  'var filesizeAfterSave = this.filesize;r'
    + 'console.println("File size after saving is "'

     + 'filesizeAfterSave);r'
    + 'var difference = filesizeAfterSave - filesizeBeforeSave;r'
    + 'console.println("The difference is " + difference );r'
    + 'if ( difference < 0 )rt'
    + 'console.println("Reduced filesize!");r'
    + 'elsert'
    + 'console.println("Increased filesize!");'

// Set document actions...
this.setAction("WillSave", myWillSave);
this.setAction("DidSave", myDidSave);
```

### setDataObjectContents

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

Requires attachment rights

| --- | --- | --- | --- |

Overwrites the file attachment named by cName, putting the oStream parameter's contents in its place.

Parameters

Parameter

Description

cName

The name tied to the Data object that oStream is to replace.

oStream

A ReadStream object that holds the file attachment's contents.

cCryptFilter

(optional) The language-independent name of a crypt filter to apply when encrypting this data object. That crypt filter has to already sit in the document's crypt-filter list, added earlier via the addRecipientListCryptFilter method; otherwise an exception is thrown. You can reach for the predefined Identity crypt filter to leave this data object unencrypted inside a file that the encryptForRecipients method has otherwise encrypted.

| --- | --- |

Example 1: See getDataObjectContents.

Example 2: a file attachment called Acrobat.xml lives in this document. The script opens it, refreshes the XML data, then writes the revised XML document back into the attachment. That XML file attachment can also be submitted; see the submitForm method. The XML data in play here comes from the example that follows XMLData. applyXPath.

```
// Get the file stream object of the attachment
var Acrobat = this.getDataObjectContents("Acrobat.xml");

// Convert to a string
var cAcrobat = util.stringFromStream(Acrobat, "utf-8");

// Parse this and get XFAObject
var myXML = XMLData.parse(cAcrobat,false);

// Change the value of grandad's income
myXML.family.grandad.personal.income.value = "300000";

// Save the XML document as a string, cAcrobat
var cAcrobat = myXML.saveXML('pretty');

// Convert to a file stream
var Acrobat = util.streamFromString(cAcrobat, "utf-8");

// Now "update" the attachment Acrobat.xml with this file stream
this.setDataObjectContents("Acrobat.xml", Acrobat);
```

The associated objects, properties, and methods include dataObjects, getDataObject, openDataObject, createDataObject, importDataObject, getDataObjectContents, and removeDataObject, plus the data object.

### setPageAction

Version (Key)

Save-Prefs

Security

Product

6.0

D

NO

Not available in Reader

| --- | --- | --- | --- |

Attaches the action of a document page for a particular trigger.

See also setAction, addScript, the Bookmark object setAction method, and the Field object setAction method.

Note

Any action already defined for the page and trigger you chose will be overwritten by this method.

Parameters

Parameter

Description

nPage

The 0-based index of the document page that gains an action.

cTrigger

The action's trigger. Values are: Open Close

cScript

The JavaScript expression that runs once the trigger fires.

| --- | --- |

Example: this makes the application beep the moment the first page opens.

```
this.setPageAction(0, "Open", "app.beep(0);");
```

### setPageBoxes

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Defines a rectangle bounding the named box across the pages you specify.

See also getPageBox.

Parameters

Parameter

Description

cBox

(optional) The box-type value, one of: Art Bleed Crop Media Trim Keep in mind the BBox box type is read-only and turns up only in getPageBox. For what these boxes mean, see the PDF Reference.

nStart

(optional) A 0-based index marking where an inclusive page range begins in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nStart alone narrows the range to just the one page nStart points at.

nEnd

(optional) A 0-based index marking where an inclusive page range ends in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed.

rBox

(optional) An array of four numbers, in rotated user space, that the named box is set to. Leave it out and the named box is removed.

| --- | --- |

### setPageLabels

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Fixes the numbering scheme for the named page and every page after it, up until the next page that carries its own label.

See also getPageLabel.

Parameters

Parameter

Description

nPage

(optional) The 0-based index of the page to be labeled.

aLabel

(optional) An array holding three required entries [cStyle, cPrefix, nStart ]: cStyle sets the page-numbering style. Options are:

D: decimal numbering

R or r: roman numbering, upper or lower case

A or a: alphabetic numbering, upper or lower case For the precise definitions of these styles, see the PDF Reference.

cPrefix is a string placed ahead of the numeric part of the page label. - nStart is the ordinal at which page numbering starts. Leave it out and numbering is stripped from the named page and the ones after it up to the next specified label. aLabel may not be null.

| --- | --- |

Example 1: across the document's ten pages, give the first three lowercase roman numerals, the next five plain numbers beginning at 1, and the final two an “Appendix-” prefix with alphabetics.

```
this.setPageLabels(0, [ "r", "", 1]);
this.setPageLabels(3, [ "D", "", 1]);
this.setPageLabels(8, [ "A", "Appendix-", 1]);
var s = this.getPageLabel(0);
for (var i = 1; i < this.numPages; i++)
    s += ", " + this.getPageLabel(i);
console.println(s);
```

The example will produce the following output on the console:

```
i, ii, iii, 1, 2, 3, 4, 5, Appendix-A, Appendix-B
```

Example 2: strip every page label out of a document.

```
for (var i = 0; i < this.numPages; i++) {
    if (i + 1 != this.getPageLabel(i)) {
        // Page label does not match ordinal page number.
        this.setPageLabels(i);
    }
}
```

### setPageRotations

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Turns the named pages of the current document.

See also getPageRotation.

Parameters

Parameter

Description

nStart

(optional) A 0-based index marking where an inclusive page range begins in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nStart alone narrows the range to just the one page nStart points at.

nEnd

(optional) A 0-based index marking where an inclusive page range ends in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nEnd alone makes the range run from page 0 through nEnd.

nRotate

(optional) How much rotation to put on the target pages. Allowed values are 0, 90, 180, or 270. Defaults to 0.

| --- | --- |

Example: spin pages 0 to 10 of the current document around.

```
this.setPageRotations(0, 10, 90);
```

### setPageTabOrder

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Defines how the form fields on a page tab. You can order tabbing by row, by column, or by structure.

Open a PDF 1.4 document in Acrobat 6.0 and field tabbing follows the same order it would under Acrobat 5.0. The reverse holds too: a PDF 1.5 document opened in Acrobat 5.0 tabs through fields just as it would in Acrobat 6.0.

Parameters

Parameter

Description

nPage

The 0-based index of the page number whose tabbing order is being set.

cOrder

Which order to use. Values are: rows columns structure

| --- | --- |

Example: make every page tab through its fields by rows.

```
for (var i = 0; i < this.numPages; i++)
    this.setPageTabOrder(i, "rows");
```

### setPageTransitions

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Applies the page transition over a particular run of pages.

See also getPageTransition.

Parameters

Parameter

Description

nStart

(optional) A 0-based index marking where an inclusive page range begins in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nStart alone narrows the range to just the one page nStart points at.

nEnd

(optional) A 0-based index marking where an inclusive page range ends in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nEnd alone makes the range run from page 0 through nEnd.

aTrans

(optional) The page-transition array carries three values: [nDuration, cTransition, nTransDuration]. - nDuration is the longest the page stays shown before the viewer flips to the next page on its own. Set it to -1 to switch off automatic page turning. - cTransition names the transition applied to the page. For the list of valid transitions, see fullScreen. transitions. - nTransDuration is how long, in seconds, the transition effect lasts. Omit aTrans and any page transitions on those pages are cleared.

| --- | --- |

Example: switch the document to full screen mode and lay on a few transitions:

```
this.setPageTransitions({ aTrans: [-1, "Random", 1] } );
app.fs.isFullScreen=true;
```

### spawnPageFromTemplate

Version (Key)

Save-Prefs

Security

Product

deprecated

No

No

D, F

| --- | --- | --- | --- |

Note

templates, createTemplate, and the Template object spawn method have taken over from this method.

Creates a page in the document from the supplied template, of the sort getNthTemplate hands back. Adobe Reader does not support the template feature.

Parameters

Parameter

Description

cTemplate

The template name.

nPage

(optional) The 0-based page number that the template is spawned before or into, which one depending on what bOverlay holds. Omit nPage and a fresh page appears at the document's end.

bRename

(optional) Sets whether fields get renamed. Defaults to true.

bOverlay

(optional, Acrobat 4.0) When false, the template goes in ahead of the page nPage names. When true (the default), it's laid over the top of that page.

oXObject

(optional, Acrobat 6.0) This parameter takes the value returned by a prior spawnPageFromTemplate call.

| --- | --- |

Returns

Ahead of Acrobat 6.0, nothing came back from this method. These days it returns an object standing for the page contents of the spawned page. You can then feed that returned object in as the optional oXObject parameter on later spawnPageFromTemplate calls.

Note

Spawning the same page over and over can swell the file size considerably. To sidestep that, spawnPageFromTemplate now hands back an object representing the spawned page's contents. Pass that return value as the oXObject parameter on subsequent spawnPageFromTemplate calls to spawn the same page again.

Example 1: spawn every template page within the current document.

```
var n = this.numTemplates;
var cTempl;
for (i = 0; i < n; i++) {
    cTempl = this.getNthTemplate(i);
    this.spawnPageFromTemplate(cTempl);
}
```

Example 2 (Acrobat 6.0)

This next example spawns one template 31 times by means of the oXObject parameter and return value. Going about it this way keeps the file size from ballooning.

```
var t = this.getNthTemplate(0)
var XO = this.spawnPageFromTemplate(t, this.numPages, false, false);
for (var i=0; i < 30; i++)
    this.spawnPageFromTemplate(t,this.numPages, false, false, XO);
```

### submitForm

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Sends the form off to a URL you specify. Calling it requires that you're running inside a web browser, or that the Acrobat Web Capture plug-in is installed. (A URL on the “mailto” scheme will still go through outside a web browser, so long as the SendMail plug-in is around.) From Adobe Reader 6.0 on, a web browser is no longer a prerequisite for this call.

Note

(Acrobat 6.0) Which parameters you pass brings restrictions on how this method may be used. Look to the notes folded into the parameter descriptions.

Secure connections over the https protocol are supported.

Parameters

Parameter

Description

cURL

The URL submitted to. When the submission yields FDF or XFDF (meaning cSubmitAs is “FDF” or “XFDF”) and the document is shown inside a browser window, this string has to finish with #FDF.

bFDF

(optional) Pass true (the default) and form data goes out as FDF; pass false and it goes out as URL-encoded HTML. - This option is deprecated; reach for cSubmitAs instead.

bEmpty

(optional) Pass true to submit every field, valueless ones included. Pass false (the default) to leave out fields that hold no value at the moment. - For an XDP, XML, or XFD submission (set via the cSubmitAs parameter below), this flag stops mattering: everything goes through, blank fields and all. See aFields.

aFields

(optional) Either an array of field names to submit or a string carrying a single field name: - When provided, only the named fields are submitted, save for any bEmpty rules out. - When omitted or null, every field is submitted, save for any bEmpty rules out. - When an empty array, no fields go. A submitted FDF file may yet carry data if bAnnotations is true. Non-terminal field names are allowed, letting you export a whole subtree of fields. - For an XDP, XML, or XFD submission (set via the cSubmitAs parameter), this flag stops mattering: everything goes through, blank fields and all. See bEmpty.

bGet
