# Doc (part 4)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

(optional) A Boolean stating that the watermark ought to be added as a FixedPrint Watermark annotation. This makes the watermark print at a set size and position no matter the size of the page being printed onto. When true, bOnTop is disregarded. By default this is false.

nRotation

(optional) How many degrees to spin the watermark counterclockwise. By default this is 0.

nOpacity

(optional) Which opacity the watermark uses, where 0 means transparent and 1.0 means opaque. By default this is 1.0.

| --- | --- |

Example 1: Lays "Confidential" as a watermark over the center of every page in the current document.

```
this.addWatermarkFromText("Confidential", 0, font.Helv, 24, color.red);
```

Example 2: Lays a multiline watermark on every page of the current document, set 1 inch down and 1 inch across from the upper-right corner.

```
this.addWatermarkFromText({
    cText: "Confidential DocumentrA. C. Robat",
    nTextAlign: app.constants.align.right,
    nHorizAlign: app.constants.align.right,
    nVertAlign: app.constants.align.top,
    nHorizValue: -72, nVertValue: -72
});
```

### addWeblinks

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Sweeps the pages you name for any text carrying an http: scheme and turns each one into a link with a URL action.

See also the removeWeblinks method

Parameters

Parameter

Description

nStart

(optional) A 0-based index marking where an inclusive page range begins. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names.

nEnd

(optional) A 0-based index marking where an inclusive page range ends. Leave both nStart and nEnd out and the range spans every page in the document. Supply nEnd by itself and the range runs from 0 through nEnd.

| --- | --- |

Returns

How many web links were added to the document.

Example: Comb the whole document, converting every bit of content that reads like a web address into a web link. Then report how many links were made.

```
var numWeblinks = this.addWeblinks();
console.println("There were " + numWeblinks +

     " instances of text that looked like a web address,"

     +" and converted as such.");
```

### applyRedactions

Version (Key)

Save-Prefs

Security

Product

9.0

D

No

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Puts redaction marks into effect across the document, stripping out every bit of content underneath, and if you wish stripping out the marks as well.

Parameters

Parameter

Description

aMarks

(optional) Which redaction annotations to apply, given as an array. Leave it out and every redaction mark in the document is applied.

bKeepMarks

(optional) A boolean; when true, the redaction marks stay put after being applied. Leave it out or set it false and the redaction marks are stripped away. By default this is false.

bShowConfirmation

(optional) A boolean; when true, the user sees a confirmation dialog before any redaction marks get applied or stripped. Leave it out or set it false and no confirmation appears. By default this is false.

cProgText

(optional) A string the UI shows together with a progress monitor for this operation. Left blank or omitted, nothing about progress is shown.

| --- | --- |

Returns

true when the document changed, false otherwise.

Example 1: Put every redaction mark in the current document into effect, showing the progress message given

```
this.applyRedactions({cProgText: "Applying redactions through JS..."});
```

Example 2: Put into effect only the redaction marks sitting on the first page, showing a confirmation beforehand.

```
var markArray = Array();
var pageAnnots = this.getAnnots(0);
for (var i=0; i < pageAnnots.length; i++) {
   if (pageAnnots[i].type == "Redact") {
       markArray[markArray.length] = pageAnnots[i];
   }
}
if (markArray.length > 0) {
   this.applyRedactions({
       aMarks:
markArray,
       bKeepMarks:
false,
       bShowConfirmation:
true,
       cProgText:
"Applying page 1 redactions..."
   });
}
```

### bringToFront

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Pulls an already-open document to the front.

Example: Among the open documents, this example looks for the one titled "Annual Report" and pulls it to the front.

```
var d = app.activeDocs;
for (var i = 0; i < d.length; i++)
    if (d[i].info.Title == "Annual Report") d[i].bringToFront();
```

### calculateNow

Version (Key)

Save-Prefs

Security

Product

3.01

No

No

All

| --- | --- | --- | --- |

Compels every calculation field in the current document to recompute.

A form holding lots of calculations can lag noticeably once the user types data into a field, even a non-calculation one. A workaround is to disable calculations for a stretch, then re-enable them afterward (see example).

Example: Turn off calculations

```
this.calculate = false;
.....
```

Turn on calculations

```
this.calculate = true;
```

Automatic calculation holds off until the user commits data after this.calculate becomes true. You can force calculation to happen with the code below.

```
this.calculateNow();
```

### certifyInvisibleSign

Version (Key)

Save-Prefs

Security

Product

10.0

D

Yes

All but Reader

| --- | --- | --- | --- |

Places an invisible certification onto a document. Adobe Reader does not offer this method.

Parameters

Parameter

Description

oSig

The signature engine object.

oInfo

(optional) Extra signing information.

cDIPath

(optional) Where to save the signed file. Leave the path out and the file overwrites itself.

bUI

(optional) Pass TRUE to allow UI interaction. It may be FALSE provided a path and certificate are given. By default this is FALSE.

cLegalAttest

(optional) The reason for signing.

| --- | --- |

Hands back TRUE when the signing went through.

Example:

```
var myEngine = security.getHandler( "Adobe.PPKLite" );
myEngine.login( "password", "/C/Users/username/Desktop/PrivateUser.pfx" );

var myInfo =  {password: "password",
               reason: "SaveAs Test",
               mdp: "defaultAndComments"};

this.certifyInvisibleSign({
    oSig:myEngine,
    oInfo:myInfo,
    cDIPath:"/c/temp/sigSign.pdf",
    cLegalAttest: "Certified using JavaScript",
    bUI:false
});
```

### closeDoc

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Requires save rights

| --- | --- | --- | --- |

Shuts the document.

With Adobe Reader 5.1 and beyond, the method is permitted at all times:

Where the document was modified and no Document Save Rights exist, it shuts with no warning and the changes vanish.

Where Document Save Rights exist, the user can choose to save the modified file.

Note

Browsers do not support this command.

Use this method with care, since it abruptly alters the document state and can disturb any JavaScript still running after the close. Firing it off a Page event or Document event might make the application act oddly.

Before Acrobat 7.0, a document that shuts itself by running this.closeDoc halts whatever script comes after it. Under Acrobat 7.0, the script is permitted to keep going and finish on its own. Even so, referencing the Doc of the now-closed document raises an exception.

Parameters

Parameter

Description

bNoSave

(optional) A Boolean saying whether to shut the document without saving: - When false (the default), the user is asked to save the document if it was modified. - When true, the document shuts with no prompt and no save, even after modification. Use this feature warily, because it can lose data without the user's go-ahead.

| --- | --- |

Example 1: Working from the console, shut every open document.

```
var d = app.activeDocs;
for( var i in d ) d[i].closeDoc();
```

You can run the code below as a mouse-up action out of an open document. It shuts all disclosed open documents. So that the code's own execution isn't cut short abruptly, it deliberately leaves the active document for last.

```
var d = app.activeDocs;
for( var i in d )
    if( d[i] != this ) d[i].closeDoc();
if ( this.disclosed ) this.closeDoc();
```

Example 2: Spin up three test files in a row and save them into a directory. Because saveAs carries a security restriction, this code has to run in the console.

```
var myDoc = app.newDoc();
for (var i=0; i < 3; i++) {
    myDoc.info.Title = "Test File " + i;
    myDoc.saveAs("/c/temp/test"+i+".pdf);
}
myDoc.closeDoc(true);
```

For yet another closeDoc illustration, refer to saveAs.

### colorConvertPage

Version (Key)

Save-Prefs

Security

Product

8.0

D

NO

Acrobat Pro only

| --- | --- | --- | --- |

Carries out color conversion on one page of the document.

Parameters

Parameter

Description

pageNum

A 0-based index naming which page number of the document is to be converted.

actions

An array of colorConvertAction objects driving this color conversion. The colorConvertAction object entry lists its properties. For every object on the page, the actions get tested against that object's attributes and color spaces in whatever order they sit in the actions array, until one matches and gets run. Think of the action list the way most email clients handle filters: each object is weighed against every action's selection criteria, in turn, until a matching action surfaces. That action then runs on the object. Bear in mind that actions don't chain, save for the case of aliased ink definitions.

inkActions

An array of colorConvertAction objects spelling out the ink actions for this color conversion. The ink list sets the actions for individual separations, be they in Separation or DeviceN. Among other uses, this lets you set up ink aliases. When a DeviceN holds some inks to alias and some to convert, the color converts through OPP technology, so the converted portion lands as process while the aliased portion stays spot. With ink actions the match fields go ignored. The action list ought to carry an underlying Separation or DeviceN that spells out the behavior; whenever that underlying space draws a Preserve or Decalibrate from the action list, the ink-action-list aliases come into play.

| --- | --- |

Returns

A Boolean value; returns true when the page changed, and otherwise returns false.

Example: For an example, see getColorConvertAction.

### createDataObject

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Requires forms rights

| --- | --- | --- | --- |

Builds a Data object.

Data objects lend themselves to ad hoc construction. That helps when the data originates in JavaScript from somewhere other than an external file (ADBC database calls, for instance).

Related objects, properties, and methods are dataObjects, getDataObject, openDataObject, importDataObject, removeDataObject, getDataObjectContents, and setDataObjectContents, and the data object.

Parameters

Parameter

Description

cName

Which name to tie to the data object.

cValue

A string holding the data to embed.

cMIMEType

(optional) The data's MIME type. This defaults to "text/plain".

cCryptFilter

(optional, Acrobat 6.0) Which crypt filter, by its language-independent name, encrypts this data object. That crypt filter has to have been added beforehand to the document's crypt-filter list through the Doc addRecipientListCryptFilter method, or else an exception is raised. You can use the predefined Identity crypt filter so this data object stays unencrypted inside a file that the Doc encryptForRecipients method otherwise encrypts.

| --- | --- |

Example:

```
this.createDataObject("MyData.txt", "This is some data.");
```

Refer as well to the sample shown right after addRecipientListCryptFilter.

### createTemplate

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

All but Reader

| --- | --- | --- | --- |

Note

Within Adobe Reader 5.1 onward, Advanced Form Features rights made this method usable. That changed at Adobe Reader 7.0: from that release on, the call is blocked and raises a NotAllowedError exception.

Turns the indicated page into a visible template. Related items worth consulting are the templates property, both the getTemplate and removeTemplate methods, and the Template object.

Note

Only a batch or console event may run this method. (Refer to Privileged context.) A treatment of JavaScript events lives in the event object.

Parameters

Parameter

Description

cName

The name that will be tied to this page.

nPage

(optional) A zero-based index pointing at the page to act on. It defaults to 0 — namely the document’s opening page.

| --- | --- |

Returns

The newly created Template object.

Example: Starting at page 2, turn every remaining page into a hidden template. Because each template becomes hidden, this.numPages shifts to report the reduced count of pages still visible. Watch how, across the iterations that follow, page 2 alone is turned into a template and then hidden — at which point whatever page came next slides into the page 2 slot.

```
numNewTemplates = this.numPages - 2;
for ( var i = 0; i < numNewTemplates; i++)
{
    var t = this.createTemplate({cName:"myTemplate"+i, nPage:2 });
    t.hidden = true;
}
```

### deletePages

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Requires forms rights

| --- | --- | --- | --- |

Removes pages from the document. When neither endpoint of the range is given, only the first page (page 0) goes away. Compare insertPages, extractPages, and replacePages.

Note

A document must always retain at least one page, so deleting every page is not possible.

(Acrobat 6.0): From release 6.0 forward, spawned pages can be removed by this method from inside Adobe Reader whenever the document carries enabled forms usage rights.

Parameters

Parameter

Description

nStart

(optional) A zero-based index naming the opening page of the deletion range. It defaults to 0 — the document’s first page.

nEnd

(optional) The closing page of the deletion range. Leave nEnd out and removal touches only the page that nStart points to.

| --- | --- |

Example: Remove the pages spanning index 1 to 3 (base 0), endpoints included.

```
this.deletePages({nStart: 1, nEnd: 3});
```

### deleteSound

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

All but Reader

| --- | --- | --- | --- |

Removes from the document whichever Sound object carries the given name.

Related entries are sounds, getSound, importSound, and the Sound object.

Parameters

cName

Which sound object, by name, gets removed.

| --- | --- |

Example:

```
this.deleteSound("Moo");
```

### embedDocAsDataObject

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

Requires attachment rigths

| --- | --- | --- | --- |

Stores the given document inside the current one as a Data Object.

Note

From Adobe Reader 7.0 onward this call works when the host document holds file-attachment rights; however, should the document being embedded have been modified, it must itself carry document Save rights.

Parameters

Parameter

Description

cName

The name that will be tied to the data object.

oDoc

Which document gets embedded as the data object.

cCryptFilter

(optional) A crypt filter, given by its language-independent name, that encrypts this data object. That filter must already sit in the document’s crypt-filter list — added earlier through the addRecipientListCryptFilter method — or an exception results. To keep this data object unencrypted within a file that the encryptForRecipients method otherwise encrypts, apply the predefined Identity crypt filter.

bUI

(optional) When true, an alert is permitted if oDoc needs saving yet its permissions forbid the save. Default value is false.

| --- | --- |

Example: Suppose an envelope file carrying a “myFilter” crypt filter was authored earlier and folded into the current document.

```
var authorEmail = "johndoe@example.com";
var envelopeDoc = this.openDataObject( "envelope" );
envelopeDoc.embedDocAsDataObject( "attachment", this, "myFilter" );
envelopeDoc.title.Author = authorEmail;
envelopeDoc.mailDoc({
    cTo: "support@example.com",
    cSubject: "Application from " + authorEmail
});
```

### embedOutputIntent

Version (Key)

Save-Prefs

Security

Product

8.0

D

No

Acrobat Pro only

| --- | --- | --- | --- |

Stores a color profile inside the file to serve as a PDF/X Output Intent (consult the PDF Reference ).

Parameters

Parameter

Description

outputIntentColorSpace

A string holding the description of the profile that the output intent should use. The app object’s printColorProfiles property supplies the roster of color profiles you can draw from.

| --- | --- |

Example: Embed a color profile.

```
this.embedOutputIntent("U.S. Sheetfed Coated v2")
```

### encryptForRecipients

Version (Key)

Save-Prefs

Security

Product

6.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Locks down the document for the listed recipients by relying on each recipient’s public-key certificate. No encryption actually happens until the save occurs. You may sort recipients into groups, and every group can carry its own distinct permission settings. Should the operation fail, this method raises an exception.

Note

Batch, console, and app initialization events are the contexts where this method is available. Refer also to Privileged context.

Related entries include the createDataObject method, the security. chooseRecipientsDialog method, and the data object.

Parameters

Parameter

Description

oGroups

An array of generic Group objects that list the recipients for which the document is to be encrypted.

bMetaData

(optional) When true (the default), document metadata is to be encrypted. Flipping this to false yields a document viewable solely in Acrobat 6.0 or later.

bUI

(optional) When true, the handler shows its interface, letting the user pick which recipients the document is encrypted for. The default value is false.

| --- | --- |

Returns

On success, true; failing that, an exception gets thrown.

Group object

A generic JavaScript object that lets a set of permissions be bound to a recipient list targeted for encryption of a document or data. encryptForRecipients receives this object, and security.chooseRecipientsDialog hands it back. Its properties are the following.

Property

Description

permissions

A Permissions object carrying the group’s permission set.

userEntities

An array of UserEntity objects — the users the permissions cover.

| --- | --- |

Permissions object

A generic JavaScript object holding a permission set, used within a Group object. Its properties are listed below. Every Boolean property defaults to false.

Property

Type

Access

Description

allowAll

Boolean

R/W

Indicates whether complete, unrestricted access is granted. A true value supersedes every other property.

allowAccessibility

Boolean

R/W

Indicates whether content access for visually impaired users is granted. When true, content may be pulled out for use by applications that, say, read text aloud.

allowContentExtraction

Boolean

R/W

Indicates whether copying and extracting content is granted.

allowChanges

String

R/W

Which document edits are permitted. Values are:

none documentAssembly fillAndSign editNotesFillAndSign all

allowPrinting

String

R/W

Which printing security level the document permits. Values are:

none lowQuality highQuality

| --- | --- | --- | --- |
