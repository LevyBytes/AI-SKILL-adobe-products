# Doc (part 8)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

For the export counterpart to this method, see exportAsText.

Note

(Acrobat 8.0) Supply cPath and this method runs only during batch and console events. See Privileged context. A discussion of JavaScript events sits in the event object.

Parameters

Parameter

Description

cPath

(optional) A relative device-independent path leading to the text file. Skip it and the user gets prompted to locate the text data file.

nRow

(optional) The 0-based index of whichever data row gets imported, the header row aside. Skip it and the user gets prompted to choose the row to import.

| --- | --- |

Returns

An integer return code.

Returns

code Description

-3

Warning: Missing Data

-2

Warning: User Cancelled Row Select

-1

Warning: User Cancelled File Select

0

No Error

1

Error: Cannot Open File

2

Error: Cannot Load Data

3

Error: Invalid Row

| --- | --- |

Example 1: Picture text fields carrying the names "First", "Middle", and "Last", paired with a data file whose opening row lays out those same three strings — "First", "Middle", and "Last" — split by tabs, then four more rows of tab-separated name data beneath.

```
First    Middle    Last
A.       C.        Robat
T.       A.        Croba
A.       T.        Acrob
B.       A.        Tacro
// Import the first row of data from "myData.txt".
this.importTextData("/c/data/myData.txt", 0)
```

Example (continued)

A mouse-up action for a button is what the code below supplies. Each button click cycles through the text file, filling the three fields "First", "Middle", and "Last" with name data.

```
if (typeof cnt == "undefined") cnt = 0;
    this.importTextData("/c/data/textdata.txt", cnt++ % 4)
```

A spreadsheet or a database can stand in for the data file.

### importXFAData

Version (Key)

Save-Prefs

Security

Product

6.0

D

Yes

F

| --- | --- | --- | --- |

Brings in the XFA file you name. importAnXFDF and importTextData are also worth a look.

Note

Batch and console events alone permit this method. See Privileged context.

Parameters

Parameter

Description

cPath

(optional) The XFA file's device-independent path. That path may sit relative to where the current document is. Leave this parameter off and a dialog box opens for the user to pick the file.

| --- | --- |

insertPages

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Drops pages from a source document into the current one. Skip the page range and the method takes every page the source document holds.

deletePages and replacePages are also worth a look.

Note

Batch and console events alone permit this method. See Privileged context. A discussion of JavaScript events sits in the event object.

Parameters

Parameter

Description

nPage

(optional) The 0-based index of the page that the source document pages get inserted after. Pass -1 to slot the pages ahead of the document's first page.

cPath

The device-independent path leading to the PDF file that supplies the inserted pages. That path may sit relative to where the current document is.

nStart

(optional) A 0-based index setting where an inclusive range of source-document pages to insert begins. Give only nStart and the range narrows to the single page nStart names.

nEnd

(optional) A 0-based index setting where an inclusive range of source-document pages to insert ends. Give only nEnd and the range runs from 0 through nEnd.

| --- | --- |

Example: Slot a cover page onto the document in play.

```
this.insertPages ({
    nPage: -1,
    cPath: "/c/temp/myCoverPage.pdf",
    nStart: 0
});
```

### mailDoc

Version (Key)

Save-Prefs

Security

Product

4.0

No

No

Requires document save rights

| --- | --- | --- | --- |

Saves the current PDF and sends it off as an attachment to every recipient, whether or not the user gets involved.

mailForm, app. mailGetAddrs, app. mailMsg, the FDF object mail method, and the Report object mail method are also worth a look.

Note

(Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, falling back to true. See Privileged context.

`(Save Rights) For Adobe Reader 5.1 and later, this method is allowed, but document Save rights are required in case the document is changed.

On Windows, this method needs the client computer's default mail program set up as MAPI enabled.

Parameters

Parameter

Description

bUI

(optional) With true the default, the remaining parameters feed a compose-new-message window shown to the user. Set it false and cTo becomes mandatory while the rest stay optional. - (Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, falling back to true. See Privileged context.

cTo

(optional) The semicolon-delimited list of recipients for the message.

cCc

(optional) The semicolon-delimited list of CC recipients for the message.

cBcc

(optional) The semicolon-delimited list of BCC recipients for the message.

cSubject

(optional) The subject of the message. The length limit is 64 KB.

cMsg

(optional) The content of the message. The length limit is 64 KB.

| --- | --- |

Example: Open the compose message window.

```
this.mailDoc(true);
```

Mail the attached PDF off to apstory@example.com and dpsmith@example.com. From Acrobat 7.0 on, running the code below in a privileged context becomes a requirement if the bUI parameter (set false) is to be honored.

```
this.mailDoc({
    bUI: false,
    cTo: "apstory@example.com",
    cCC: "dpsmith@example.com",

     cSubject: "The Latest News",
    cMsg: "A.P., attached is my latest news story in PDF."
});
```

### mailForm

Version (Key)

Save-Prefs

Security

Product

4.0

No

No

Requires forms rights

| --- | --- | --- | --- |

Sends the form data out and mails the FDF file it produces as an attachment to every recipient, user interaction or not. Signed signature fields get no support from the method.

mailDoc, app. mailGetAddrs, app. mailMsg, the FDF object mail method, and the Report object mail method are also worth a look.

Note

On Windows, this method needs the client machine's default mail program set up as MAPI enabled.

Parameters

Parameter

Description

bUI

Set it true and the remaining parameters feed a compose-new-message window shown to the user. Set it false and cTo becomes mandatory while the rest stay optional. - (Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, falling back to true. See Privileged context.

cTo

(required if bUI is true) A semicolon-delimited list of recipients for the message.

cCc

(optional) A semicolon-delimited list of CC recipients for the message.

cBcc

(optional) A semicolon-delimited list of BCC recipients for the message.

cSubject

(optional) The subject of the message. The length limit is 64 KB.

cMsg

(optional) The content of the message. The length limit is 64 KB.

| --- | --- |

Example: Open the compose message window.

```
this.mailForm(true);
```

Send the mail with the attached FDF file to fun1@example.com and fun2@example.com.

```
this.mailForm(false, "fun1@example.com; fun2@example.com", "", "",
    "This is the subject", "This is the body of the mail.");
```

### movePage

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Shifts a page to another spot within the document.

Parameters

Parameter

Description

nPage

(optional) The 0-based index of whichever page gets moved. It defaults to 0.

nAfter

(optional) The 0-based index of the page that the named page gets moved after. Pass -1 to shift the page ahead of the document's first page. The default lands it at the document's last page.

| --- | --- |

Example: Flip the document's pages into reverse order.

```
for (i = this.numPages - 1; i >= 0; i--) this.movePage(i);
```

### newPage

Version (Key)

Save-Prefs

Security

Product

6.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Drops a fresh page into the active document.

Note

Batch and console events alone permit this method. See Privileged context.

Parameters

Parameter

Description

nPage

(optional) Within a 1-based page-numbering scheme, the page that the new page lands after. The default is the document's last page. Pass 0 to put a page ahead of the first one. An out-of-range page range gets clipped back to the valid span of pages.

nWidth

(optional) The page width, in points. Its default value is 612.

nHeight

(optional) The page height, in points. Its default value is 792.

| --- | --- |

Example: Tack on a fresh page sized to mirror the doc's pages.

```
var Rect = this.getPageBox("Crop");
this.newPage(0, Rect[2], Rect[1]);
```

### openDataObject

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Hands back the Doc of a PDF that sits as an embedded data object — an attachment — inside the document this method runs against.

Rather than returning a Doc, the method can throw an exception whenever any of these hold true:

The document this method runs against lacks the embedded data object asked for.

What the data object holds is not a PDF document.

Permissions bar opening attachments by way of JavaScript.

Once you no longer need the document, close it with closeDoc.

Parameters

cName

The name of the data object.

| --- | --- |

A data object's name is a property carried by the Data object. The object picks up its name at embed time — the Acrobat UI assigns it automatically, or the JavaScript methods createDataObject and importDataObject assign it programmatically.

Returns

Doc or an exception is thrown.

Kindred objects, properties, and methods include dataObjects, getDataObjectContents, setDataObjectContents, createDataObject, and importDataObject, plus the data object.

Example: Crack open a PDF attachment, then lift its form data out.

```
var oDoc = this.openDataObject("myAttachment");
try {
    var myField = this.getField("myTextField");
    // Get the value of "yourTextField" in PDF attachment
    var yourField = oDoc.getField("yourTextField");
    // View this value in "myTextField"
    myField.value = yourField.value;
    oDoc.closeDoc();
} catch(e) { app.alert("Operation failed");}
```

See also Example 5 (Acrobat 7.0) following the submitForm method.

### preflight

Version (Key)

Save-Prefs

Security

Product

9.0

D

No

Acrobat Pro only

| --- | --- | --- | --- |

Runs a Preflight profile against the document. A failed Preflight run throws an exception.

Parameters

Parameter

Description

oProfile

Which Preflight profile drives the Preflight run, given as a PreflightProfile object.

bOmitFixups

(optional) Skip every fixup the Preflight profile carries. Leave bOmitFixups unspecified and false stands in.

oThermometer

(optional) Bring up the status window and progress bar that signal a long operation underway. Grab a Thermometer object through app.thermometer. Leave oThermometer unspecified and no progress shows.

| --- | --- |

Returns

A PreflightResult object.

Example: Run a Preflight profile and show the progress of the operation.

```
var oProfile = Preflight.getProfileByName("Magazine Ads")
if( oProfile != undefined )
{
   var oThermometer = app.thermometer;
   var myPreflightResult = this.preflight( oProfile, false, oThermometer);
   if( myPreflightResult.numErrors > 0 ) {
   console.println( "Preflight found " + myPreflightResult.numErrors + " Errors.");
} else {
   console.println( "Preflight found no Errors.");
}
```

### print

Version (Key)

Save-Prefs

Security

Product

3.01

No

Yes

All

| --- | --- | --- | --- |

Sends to the printer either all the document's pages or a chosen count of them.

From Acrobat 6.0 onward, printing can lean on the settings held in a PrintParams object in place of the other parameters. The permanent print settings stay untouched.

Note

(Acrobat 6.0) Printing to a file demands a safe path (see Safe path). An existing file will not be overwritten by the print method.

(Acrobat 7.0) Only batch, console, and menu events can drive non-interactive printing. You make printing non-interactive by setting bUI to false or by switching the interactive property to silent, like so:

```
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.silent;
```

Step outside batch, console, and menu events and both bUI and interactive lose their effect — a print dialog box always comes up.

See also Privileged context.

Note

On a Windows platform, the file name has to end in either a .ps or a .prn extension (case insensitive). On top of that, the print method refuses to drop a file straight into the root directory, the windows directory, or the windows system directory.

Break any of the security restrictions above and an InvalidArgsError (see Error object) exception fires while print fails.

Parameters

Parameter

Description

bUI

(optional) With true the default, a UI comes up so the user can supply printing details and OK the action.

nStart

(optional) A 0-based index marking where an inclusive page range begins. Leave both nStart and nEnd unspecified and every page in the document prints. Give only nStart and the range collapses to the single page nStart names. Use nStart and nEnd together and bUI has to be false.

nEnd

(optional) A 0-based index marking where an inclusive page range ends. Leave both nStart and nEnd unspecified and every page in the document prints. Give only nEnd and the range runs from 0 through nEnd. Use nStart and nEnd together and bUI has to be false.

bSilent

(optional) Set it true to keep the cancel dialog box hidden while the document prints. The default is false.

bShrinkToFit

(optional, Acrobat 5.0) Set it true and the page shrinks, where needed, to fit inside the printed page's imageable area. Set it false and it does not. The default is false.

bPrintAsImage

(optional, Acrobat 5.0) Set it true to print pages as an image. The default is false.

bReverse

(optional, Acrobat 5.0) Set it true to print from nEnd back to nStart. The default is false.

bAnnotations

(optional, Acrobat 5.0) With true the default, annotations get printed.

printParams

(optional, Acrobat 6.0) The PrintParams object holding the settings to print with. Pass this parameter and every other one is disregarded.

| --- | --- |

Example 1: Send the page in view to the printer.

```
this.print(false, this.pageNum, this.pageNum);
// Print a file silently
this.print({bUI: false, bSilent: true, bShrinkToFit: true});
```

Example 2 (Acrobat 6.0)

Print current document to a known printer.

```
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.automatic;
pp.printerName = "hp officejet d series";
this.print(pp);
```

Note

Leave printerName as an empty string while fileName carries something, and the current document gets written to disk as a PostScript file.

Example 3 (Acrobat 6.0)

Write the document in play out to a PostScript file.

```
var pp = this.getPrintParams();
pp.fileName = "/c/temp/myDoc.ps";
pp.printerName = "";
this.print(pp);
```

### removeDataObject

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Requies file attachment rights

| --- | --- | --- | --- |

Wipes from the document whichever data object carries the name you give.

Kindred objects, properties, and methods include dataObjects, getDataObject, openDataObject, createDataObject, removeDataObject, importDataObject, getDataObjectContents, and setDataObjectContents, plus the data object.

Parameters

cName

Which data object, named here, gets deleted.

| --- | --- |

A data object's name is a property carried by the Data object. The object picks up its name at embed time — either the Acrobat UI assigns it automatically or the JavaScript methods createDataObject and importDataObject assign it programmatically.

Example:

```
this.removeDataObject("MyData");
```

### removeField

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

F

| --- | --- | --- | --- |

Strips the named field out of the document. Where that field shows on more than one page, every representation goes away.

Note

(Acrobat 6.0): From Acrobat 6.0 on, removeField works inside Adobe Reader for documents that carry forms usage rights.

Parameters

cName

Which field, by name, gets stripped.

| --- | --- |

Example:

```
this.removeField("myBadField");
```

### removeIcon

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Strips the named icon out of the document.

Worth consulting as well: icons, addIcon, getIcon, and importIcon, the Field object methods buttonGetIcon, buttonImportIcon, and buttonSetIcon, plus the Icon object.

Parameters

cName

The name of the icon to remove.

| --- | --- |

An icon's name is a property carried by the Icon object. The name comes either from importIcon, as the icon file enters the document, or from addIcon, which names an icon sitting outside the document-level named icons tree.

Example: Clear every named icon out of the document.

```
for ( var i = 0; i < this.icons.length; i++)
    this.removeIcon(this.icons[i].name);
```

### removeLinks

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Provided the user holds permission to strip links from the document, clears every link on the named page that falls within the named coordinates

Worth consulting as well: addLink, getLinks, and the Link object.

Parameters

Parameter

Description

nPage

The 0-based index of the page that links get removed from.

oCoords

A four-number array in rotated user space — the coordinates of a rectangle, listed in this order: upper-left x, upper-left y, lower-right x, and lower-right y .

| --- | --- |

Example: Strip every link out of the document.

```
// Remove all links from the document
for ( var p = 0; p < this.numPages; p++)
{
    var b = this.getPageBox("Crop", p);
    this.removeLinks(p, b);
}
```

To tally how many links got removed, lean on getLinks.

### removePreflightAuditTrail

Version (Key)

Save-Prefs

Security

Product

9.0

D

No

Acrobat Pro only

| --- | --- | --- | --- |

Strips the document's current audit trail out.

Returns

true if successfully removed, false otherwise.

### removeRequirement

Version (Key)

Save-Prefs

Security

Product

7.0.5

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Strips an existing requirement out of a PDF document. Once a requirement is gone, Acrobat no longer has to satisfy it to open the document. Pull a requirement and the document might stop working right.

Note

A console or batch event is the only place this method can be called from.

Parameters

Parameter

Description

cType

Which kind of requirement gets removed. The Requirements Enumerator object describes the types.

| --- | --- |

### removeScript

Version (Key)

Save-Prefs

Security

Product

7.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Deletes a document-level JavaScript, provided the caller holds permission to remove scripts.

Parameters

cName

A string giving the name of the script you want deleted.

| --- | --- |

Returns

On success the result is undefined. Should the named script not exist, the call raises an exception.

Example: register a document-level script and then take it back out.

```
this.addScript("myScript", "app.alert('A.C. Robat welcomes you!')");
```

Now remove this script:

```
this.removeScript("myScript");
```

removeTemplate

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Deletes the template of the given name from the document.

See also templates, createTemplate, getTemplate, and the Template object.

Note

Execution is restricted to a batch or console event only. See Privileged context. The event object covers how JavaScript events work.

Parameters

cName

The name identifying the template to delete.

| --- | --- |

A template carries its name as a property of the Template object. That name gets assigned at creation time, whether through the Acrobat UI or by way of the getTemplate JavaScript method.

### removeThumbnails

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Strips the thumbnails from the pages you name within the document. See also addThumbnails.

Parameters

Parameter

Description

nStart

(optional) A 0-based index marking where an inclusive page range begins. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nStart alone narrows the range to just the one page nStart points at.

nEnd

(optional) A 0-based index marking where an inclusive page range ends. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nEnd alone makes the range run from page 0 through nEnd.

| --- | --- |

### removeWeblinks

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Walks the pages you name in search of links whose action targets a given web URL, and strips those out. See also addWeblinks.

Note

Only weblinks created through the application's UI are taken out by this call. Links driven from JavaScript instead (getURL, for instance) stay put.

Parameters

Parameter

Description

nStart

(optional) A 0-based index marking where an inclusive page range begins. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nStart alone narrows the range to just the one page nStart points at.

nEnd

(optional) A 0-based index marking where an inclusive page range ends. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nEnd alone makes the range run from page 0 through nEnd.

| --- | --- |

Returns

A count of how many web links were stripped from the document.

Example: clear every web link out of the document and print the outcome to the console window.

```
var numWeblinks = this.removeWeblinks();
console.println("There were " + numWeblinks +

     " web links removed from the document.");
```

### replacePages

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Swaps pages of the current document for pages drawn from a source document.

See also deletePages, extractPages, and insertPages.

Note

Execution is restricted to a batch or console event only. See Privileged context. The event object covers how JavaScript events work.

Parameters

Parameter

Description

nPage

(optional) The 0-based index of the page where replacement begins. Defaults to 0.

cPath
