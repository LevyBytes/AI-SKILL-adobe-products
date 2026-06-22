# Doc (part 3)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

```
var inch = 72, x0 = 2*inch, y0 = 4*inch;
var scaledInch = .5*inch;
var nNodes = 60;
var theta = 2*Math.PI/nNodes;
var points = new Array();
for (var i = 0; i <= nNodes; i++) {
    Theta = i*theta;
    points[i] = [x0 + 2*Math.cos(3*Theta)*Math.cos(Theta)*scaledInch,
    y0 + 2*Math.cos(3*Theta)*Math.sin(Theta)*scaledInch];
}
var annot = this.addAnnot({
    type: "Ink",
    page: 0,
    name: "myRose",
    author: "A. C. Robat",
    contents: "Three leaf rose",
    gestures: [points],
    strokeColor: color.red,
    width: 1
});
```

### addField

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

F

| --- | --- | --- | --- |

Builds a fresh form field and hands it back as a Field object.

Note

(Acrobat 6.0): From Acrobat 6.0 onward, documents whose forms usage rights are turned on can invoke this method inside Adobe Reader. Earlier than 6.0, Adobe Reader could not reach it.

Parameters

Parameter

Description

cName

What to name the field being created. A hierarchy can be expressed through the dot separator syntax (as an illustration, name.last yields a parent node, name, plus a child node, last).

cFieldType

Which kind of form field to build. The permitted types are: text button combobox listbox checkbox radiobutton signature

nPageNum

A 0-based index identifying the page that receives the field.

oCoords

Four numbers, given in rotated user space, that fix the form field's dimensions and location. They list the bounding rectangle's coordinates in this sequence: upper-left x, upper-left y, lower-right x and lower-right y . Consult also the rect property on the Field object. - Coordinates pulled from the Info panel for the bounding rectangle have to be converted out of info space into rotated user space. Achieve this by taking the info space y coordinate away from the on-screen page height.

| --- | --- |

Returns

The Field object that was just made.

Example: A batch sequence could run the code below to drop a navigational icon onto every page of a document, across each document within a chosen group of documents.

```
var inch = 72;
for (var p = 0; p < this.numPages; p++) {
    // Position a rectangle (.5 inch, .5 inch)
    var aRect = this.getPageBox( {nPage: p} );
    aRect[0] += .5*inch;            // from upper left hand corner of page.
    aRect[2] = aRect[0]+.5*inch;    // Make it .5 inch wide
    aRect[1] -= .5*inch;
    aRect[3] = aRect[1] - 24;       // and 24 points high

    // Now construct a button field with a right arrow from ZapfDingbats
    var f = this.addField("NextPage", "button", p, aRect )
    f.setAction("MouseUp", "this.pageNum++");
    f.delay = true;
    f.borderStyle = border.s;
    f.highlight = "push";
    f.textSize = 0;                 // Auto-sized
    f.textColor = color.blue;
    f.fillColor = color.ltGray;
    f.textFont = font.ZapfD
    f.buttonSetCaption("341")      // A right arrow
    f.delay = false;
}
```

For a further illustration, look at the setAction method on the Field object.

### addIcon

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

All

| --- | --- | --- | --- |

Registers a fresh named Icon object into the document-level icon tree, filing it under the name you give.

See also icons, getIcon, importIcon, removeIcon, and the Field object methods buttonGetIcon, buttonImportIcon, and buttonSetIcon.

Parameters

cName

What to call the new object

icon

Which Icon object to register.

| --- | --- |

Example: Here a button field in the document already carries an icon, and this snippet labels that icon with a name. With getIcon, that name then fetches the icon object so it can serve, say, a different button.

```
var f = this.getField("myButton");
this.addIcon("myButtonIcon", f.buttonGetIcon());
```

### addLink

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Provided the user holds permission to add links to the document, attaches a fresh link at the coordinates you give on the page you name. See also getLinks, removeLinks and the Link object.

Parameters

Parameter

Description

nPage

Which page is to receive the new link.

oCoords

Four numbers, in rotated user space, that set the link's size and where it sits. They give the bounding rectangle's coordinates in this sequence: upper-left x, upper-left y, lower-right x and lower-right y .

| --- | --- |

Returns

The Link object that was just made.

Example 1: Place plain navigational links into the bottom-left and bottom-right corners on every page of the current document. The bottom-left link jumps to the prior page, while the bottom-right one advances to the following page.

```
var linkWidth = 36, linkHeight = 18;
for ( var i=0; i < this.numPages; i++)
{
    var cropBox = this.getPageBox("Crop", i);
    var linkRect1 = [0,linkHeight,linkWidth,0];
    var offsetLink = cropBox[2] - cropBox[0] - linkWidth;
    var linkRect2 = [offsetLink,linkHeight,linkWidth + offsetLink,0]
    var lhLink = this.addLink(i, linkRect1);
    var rhLink = this.addLink(i, linkRect2);
    var nextPage = (i + 1) % this.numPages;
    var prevPage = (i - 1) % this.numPages;
    var prevPage = (prevPage>=0) ? prevPage : -prevPage;
    lhLink.setAction( "this.pageNum = " + prevPage);
    lhLink.borderColor = color.red;
    lhLink.borderWidth = 1;
    rhLink.setAction( "this.pageNum = " + nextPage);
    rhLink.borderColor = color.red;
    rhLink.borderWidth = 1;
}
```

Turn to the Link object to learn how a link's properties and action get configured.

Example 2: Hunt through the document for the word "Acrobat" and wrap a link around each occurrence.

```
for (var p = 0; p < this.numPages; p++)
{
    var numWords = this.getPageNumWords(p);
    for (var i=0; i<numWords; i++)
    {
        var ckWord = this.getPageNthWord(p, i, true);
        if ( ckWord == "Acrobat")
        {
            var q = this.getPageNthWordQuads(p, i);
            // Convert quads in default user space to rotated
            // User space used by Links.
            m = (new Matrix2D).fromRotated(this,p);
            mInv = m.invert()
            r = mInv.transform(q)
            r=r.toString()
            r = r.split(",");
            l = addLink(p, [r[4], r[5], r[2], r[3]]);
            l.borderColor = color.red;
            l.borderWidth = 1;
            l.setAction("this.getURL('http://www.example.com/')");
        }
    }
}
```

### addRecipientListCryptFilter

Version (Key)

Save-Prefs

Security

Product

6.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Attaches a crypt filter to the document. Encrypting Data objects is what the crypt filter handles.

See also the cCryptFilter parameter of the importDataObject, createDataObject, and setDataObjectContents methods.

Note

Execution is restricted to a batch, an application initialization, or a console event. See also Privileged context.

Parameters

Parameter

Description

cCryptFilter

The crypt filter's language-independent name. Reuse this very name for the cCryptFilter parameter of the Doc methods importDataObject, createDataObject, and setDataObjectContents.

| --- | --- |

Note

On Acrobat 7.0, cCryptFilter has to equal DefEmbeddedFile ; on every other Acrobat version, any string serves as cCryptFilter.

oGroup

A Group-object array naming the recipients the data should be encrypted for.

Example: The script below encrypts the present document and tucks it inside a PDF document.

```
var Note = "Select the list of people that you want to send this"

     + " document to. Each person must have both an email address"

     + " and a certificate that you can use when creating the"

     + "envelope.";
var oOptions = { bAllowPermGroups: false, cNote: Note,
    bRequireEmail: true };
var oGroups = security.chooseRecipientsDialog( oOptions );
var env = app.openDoc( "/c/temp/ePaperMailEnvelope.pdf" );
env.addRecipientListCryptFilter( "MyFilter", oGroups );
env.importDataObject( "secureMail0", this.path, "MyFilter" );
var envPath = "/c/temp/outMail.pdf";
env.saveAs( envPath );
```

Note

Although this script ran from the console, it works best as a folder JavaScript woven into a bigger script that ships PDF documents securely.

### addRequirement

Version (Key)

Save-Prefs

Security

Product

7.0.5

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Lets a PDF document be built such that some requirement has to be met for the document to work correctly in Acrobat.

Whenever Acrobat opens a document that carries a requirement, it attempts to meet that requirement before letting the user interact with the document at will. Should the requirement go unmet, the application can restrict what the document is able to do.

Note

Calling this method is limited to a console or batch event. See Privileged context.

Parameters

Parameter

Description

cType

Which kind of document requirement. The Requirements Enumerator object spells out the kinds.

oReq

(Optional) A Requirement object.

| --- | --- |

Requirements enumerator object

Every requirement type a document might carry so as to work properly in Acrobat is listed by this object.

Property

Description

requirements.EnableJavaScripts

Certain documents hold data-validation scripts that could go unrun if the Enable JavaScript Execution user preference has been switched off. Through this property a PDF document can compel its scripts to run within Acrobat. The user gets a prompt either to permit JavaScript execution for that specific document or to open it read-only.

| --- | --- |

Requirement object

Properties describing what the requirement is about are held by this generic object

Property

Description

aRH

(Optional) An array of ReqHandler objects.

| --- | --- |

ReqHandler object

Details about a requirement handler usable when Acrobat encounters an unrecognized requirement live in this generic object. For that unrecognized requirement, the viewer ought to hand off requirement checking to the array's first handler that supports the type. Where no requirement handler turns up to cope with the unrecognized requirement, the viewer should supply a generic message.

Property

Description

cType

A string naming the requirement handler's type (the ReqHandlers Enumerator object holds a list of the names available).

cScriptName

(Optional) A string giving the name of a document-level JavaScript that the document contains. It can appear when cType holds the value reqHandlers.JS. Should the requirement be satisfied, the named script won't run.

| --- | --- |

ReqHandlers Enumerator object

The kinds of requirement handlers a document might carry are enumerated by this object.

Property

Description

reqHandlers.JS

Document-level scripts that handle unrecognized requirements inside the PDF document are managed by this handler.

reqHandlers.NoOp

Through this handler, older viewers can skip past unrecognized requirements.

| --- | --- |

Example: Attach a requirement that switches on JavaScript in a document.

```
addRequirement(this.requirements.EnableJavaScripts,
    {[{cType: reqHandlers.JS, cScriptName: "requirement"}]});
```

### addScript

Version (Key)

Save-Prefs

Security

Product

6.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Installs a document-level script onto a document. See also setAction, setPageAction, the Bookmark object setAction method, and the Field object setAction method.

Note

Whatever script cName already had defined is overwritten by this method.

Parameters

Parameter

Description

cName

What to name the script. Where one of that name is already present, the old script gives way to the new.

cScript

A JavaScript expression that fires once the document opens.

| --- | --- |

Example: Sound a beep on each occasion the document opens.

```
this.addScript("My Code", "app.beep(0);");
```

For one more illustration, see the disclosed property.

### addThumbnails

Version (Key)

Save-Prefs

Security

Product

5.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Generates thumbnails for the pages you name within the document. See also the removeThumbnails method.

Parameters

Parameter

Description

nStart

(optional) A 0-based index marking where an inclusive page range begins. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names. Supply nEnd by itself and the range runs from 0 through nEnd.

nEnd

(optional) A 0-based index marking where an inclusive page range ends. Refer to nStart for the particulars.

| --- | --- |

### addWatermarkFromFile

Version (Key)

Save-Prefs

Security

Product

7.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Drops in a page as a watermark over the pages you name within the document, lodging the watermark inside an optional content group (OCG). See also the OCG object.

Note

Execution is confined to a batch or console event. See also Privileged context.

Parameters

Parameter

Description

cDIPath

The watermark source file's device-independent path. Should whatever sits at that location not be a PDF file, Acrobat tries to turn it into one.

nSourcePage

(optional) The 0-based index of which page in the source file becomes the watermark. By default this is 0.

nStart

(optional) The 0-based index of the first page within the range that the watermark gets added to. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names. Supply nEnd by itself and the range runs from 0 through nEnd.

nEnd

(optional) The final page within the range that the watermark gets added to. Refer to nStart for the particulars.

bOnTop

(optional) A Boolean fixing the watermark's z-ordering. When true (the default), the watermark sits over all other page content. When false, it goes beneath all other page content. Where bFixedPrint is true, this parameter is disregarded.

bOnScreen

(optional) A Boolean stating whether the watermark shows while the document is viewed on screen. This defaults to true.

bOnPrint

(optional) A Boolean stating whether the watermark shows while the document is printed. This defaults to true.

nHorizAlign

(optional) A number setting the watermark's horizontal alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center.

nVertAlign

(optional) A number setting the watermark's vertical alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center.

nHorizValue

(optional) A number that nudges the watermark's horizontal placement on the page. When bPercentage is true, it stands for a share of the horizontal page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0.

nVertValue

(optional) A number that nudges the watermark's vertical placement on the page. When bPercentage is true, it stands for a share of the vertical page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0.

bPercentage

(optional) A Boolean telling whether nHorizValue and nVertValue stand for a share of the page size or a literal count of points. By default this is false.

nScale

(optional) Which scale the watermark uses, with 1.0 meaning 100%. Passing -1 tells the watermark to fit the page while holding its proportions. By default this is 1.0.

bFixedPrint

(optional) A Boolean stating that this watermark ought to be added as a FixedPrint Watermark annotation. That lets watermarks print at a set size and position no matter the size of the page being printed onto. When true, bOnTop is disregarded. By default this is false.

nRotation

(optional) How many degrees to spin the watermark counterclockwise. By default this is 0.

nOpacity

(optional) Which opacity the watermark uses, where 0 means transparent and 1.0 means opaque. By default this is 1.0.

| --- | --- |

Example 1: Takes watermark.pdf's first page and lays it as a watermark over the center of every page in the current document.

```
this.addWatermarkFromFile("/C/temp/watermark.pdf");
```

Example 2: Takes watermark.pdf's second page and lays it as a watermark across the opening 10 pages of the current document. That watermark is turned 45 degrees counterclockwise and set 1 inch down plus 2 inches across from the page's upper-left corner.

```
this.addWatermarkFromFile({
    cDIPath: "/C/temp/watermark.pdf",
    nSourcePage: 4, nEnd: 9,
    nHorizAlign: app.constants.align.left,
    nVertAlign: app.constants.align.top,
    nHorizValue: 144, nVertValue: -72,
    nRotation: 45
});
```

### addWatermarkFromText

Version (Key)

Save-Prefs

Security

Product

7.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Lays the text you supply as a watermark over the pages you name within the document, lodging the watermark inside an optional content group (OCG).

See the OCG object.

Parameters

Parameter

Description

cText

Which text serves as the watermark. More than one line is permitted. The characters "r" mark a newline.

nTextAlign

(optional) How cText is aligned inside the watermark. For the values on offer, see app. constants .align. Where cText runs to just one line, this parameter does nothing.

cFont

(optional) Which font this watermark uses. Valid fonts appear as properties on the font object, as the textFont property of the Field object lists. You can supply any font by passing a string holding the font's PostScript name. By default this is font.Helv.

nFontSize

(optional) The point size of the font used for the watermark. This defaults to 24.

aColor

(optional) Which color the watermark uses. See Color arrays. By default this is color.black.

nStart

(optional) The 0-based index of the first page within the range that the watermark gets added to. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names.

nEnd

(optional) The final page within the range that the watermark gets added to. Leave both nStart and nEnd out and the range spans every page in the document. Supply nEnd by itself and the range runs from 0 through nEnd.

bOnTop

(optional) A Boolean fixing the watermark's z-ordering. Passing true puts the watermark over all other page content. Passing false puts the watermark beneath all other page content. Where bFixedPrint is true, this parameter is disregarded. This defaults to true.

bOnScreen

(optional) A Boolean stating whether the watermark shows while the document is viewed on screen.

bOnPrint

(optional) A Boolean stating whether the watermark shows while the document is printed.

nHorizAlign

(optional) A number setting the watermark's horizontal alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center.

nVertAlign

(optional) A number setting the watermark's vertical alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center.

nHorizValue

(optional) A number that nudges the watermark's horizontal placement on the page. When bPercentage is true, it stands for a share of the horizontal page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0.

nVertValue

(optional) A number that nudges the watermark's vertical placement on the page. When bPercentage is true, it stands for a share of the vertical page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0.

bPercentage

(optional) A Boolean telling whether nHorizValue and nVertValue stand for a share of the page size or a literal count of points. By default this is false.

nScale

(optional) Which scale the watermark uses, with 1.0 meaning 100%. Passing -1 tells the watermark to fit the page while holding its proportions. By default this is 1.0.

bFixedPrint
