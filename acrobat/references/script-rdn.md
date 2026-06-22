# Rdn, Readstream, Rendition, Report ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: RDN; ReadStream; Rendition; Report; Row.

## RDN

### JavaScript APIs — RDN

This catch-all object stands for a Relative Distinguished Name. securityHandler. newUser draws on it, as do the certificate. issuerDN and subjectCN properties.

Its properties are as follows.

Property

Type

Access

Version (Key)

Description

businessCategory

String

R

8.0

Business category

c

String

R

5.0

Country or region. Has to be a two-letter uppercase string per the ISO 3166 standard (for instance, "US").

cn

String

R

5.0

Common name (for instance, "John Smith")

countryOfCitizenship

String

R

8.0

Country of citizenship

countryOfResidence

String

R

8.0

Country of residence

dateOfBirth

String

R

8.0

Date of birth (newUser offers no support for this)

dc

String

R

8.0

Domain Component

dnQualifier

String

R

8.0

Distinguished Name Qualifier

e

String

R

6.0

Email address (for instance, "jsmith@example.com")

gender

String

R

8.0

Gender

generationQualifier

String

R

8.0

Generation qualifier

givenName

String

R

8.0

Given name

initials

String

R

8.0

Initials

l

String

R

8.0

Locality or province

name

String

R

8.0

Name

nameAtBirth

String

R

8.0

Name at birth

o

String

R

5.0

Organization name (for instance, "Adobe Systems Incorporated")

ou

String

R

5.0

Organizational unit (for instance, "Acrobat Engineering")

placeOfBirth

String

R

8.0

Place of birth

postalAddress

String

R

8.0

Postal address (newUser offers no support for this)

postalCode

String

R

8.0

Postal code

pseudonym

String

R

8.0

Pseudonym

serialNumber

String

R

8.0

Serial number

sn

String

R

8.0

Surname

st

String

R

8.0

State

street

String

R

8.0

Street

title

String

R

8.0

Title

| --- | --- | --- | --- | --- |

## ReadStream

### JavaScript APIs — ReadStream

A ReadStream is an object literal standing in for a stream of data. One method on it lets you read that data stream.

Method

Parameters

Returns

Description

read

nBytes

String

You hand the read method a byte count, and it hands back a hex-encoded string carrying the stream's data. Reading consumes the stream, and once the end is reached read yields a zero-length string to signal it.

| --- | --- | --- | --- |

## Rendition

### JavaScript APIs — Rendition

A Rendition holds everything required to play a media clip: the media data embedded inside it (or else a URL) plus its playback settings. It lines up with a Rendition over in Acrobat's authoring interface.

Rendition serves as a base type underlying either a MediaRendition or a MediaSelector. Wherever a function takes a Rendition, either of those two may be passed. Both MediaRendition and MediaSelector expose the properties and methods covered in this section. Read the type property to tell a MediaRendition apart from a MediaSelector.

### Rendition properties

### altText

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

Holds the rendition's alternate-text string, or an empty string when none was given. You only get this property when the rendition's type is app.media.renditionType.media (a MediaRendition).

Example: Get the altText of a rendition.

```
this.media.getRendition("myClip").altText;
```

See the examples that follow app.media. getAltTextSettings.

### doc

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

Doc

R

| --- | --- | --- | --- | --- | --- |

Points back to the document in which the Rendition lives.

### fileName

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

For embedded media this yields an empty string. In every other case it gives back the media's file name or URL. You only get this property when the rendition's type is app.media.renditionType.media.

### type

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

Number

R

| --- | --- | --- | --- | --- | --- |

Carries an app.media.renditionType value that tells you which kind of rendition this is.

For now the two kinds are MediaRendition and RenditionList:

Should Rendition.type match app.media.renditionType.media, what you have is a MediaRendition. That is a single Rendition, the same one shown on the Settings tab of the Multimedia Properties dialog box.

Should Rendition.type match app.media.renditionType.selector, what you have is a RenditionList, an array of MediaRendition. This is the list shown on the Settings tab of the Multimedia Properties dialog box.

Because later releases of Acrobat could introduce further renditionType values, your JavaScript should never take for granted that only today's app.media.renditionType values will turn up.

### uiName

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

Gives the Rendition's name, taken from the N entry of its dictionary inside the PDF file.

Example: Run the snippet below from within a Rendition action.

```
console.println("Preparing to play ""
    + event.action.rendition.uiName + """);
```

See the event object for a description of event.action.rendition.

### Rendition methods

### getPlaySettings

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Builds and hands back a MediaSettings object, which you can then turn into a MediaPlayer object.

Only a MediaRendition offers this method.

Parameters

Parameter

Description

bGetData

(optional) A Boolean. Set it true and the MediaSettings object hands back the MediaData (See MediaSettings. data).

| --- | --- |

Returns

A MediaSettings object

Note

app.media.getAltTextSettings invokes getPlaySettings(false) to pull the right settings for showing alternate text.

Among the properties carried on this MediaSettings object are:

autoPlay

baseURL

(if specified in rendition)

bgColor

bgOpacity

data

(if bGetData is true)

duration

endAt

layout

monitorType

palindrome

showUI

rate

repeat

startAt

visible

volume

windowType

| --- | --- |

As things stand in this release of Acrobat, the settings object carries every one of these properties, save for the exceptions flagged above. Where a value such as startAt was never set, null stands in. Down the road this could shift toward reporting only the values genuinely provided and assuming defaults for whatever is left.

Example:

```
// Get the MediaSettings for this Rendition
var settings = myRendition.getPlaySettings();
if( settings.startAt !== null ) // Do NOT use this strict comparison!
...
if( settings.startAt ) // This is OK
...
```

See app.media. getAltTextSettings and app.media. openPlayer for examples of usage.

### select

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Picks a media player to run a MediaRendition or a RenditionSelector. When the Rendition is a RenditionSelector, select looks over each MediaRendition inside it and settles on the best fit. (Look to type for what RenditionSelector and MediaRendition mean.)

What comes back is a MediaSelection object, which you can turn into a MediaSettings object and from there into a MediaPlayer object.

Parameters

Parameter

Description

bWantRejects

(optional) When bWantRejects is true, the rejects property on the returned MediaSelection holds details about the media players passed over while selecting.

oContext

(optional) oContext is a MediaSelection.selectContext value carried over from an earlier Rendition.select call. With it you can build a loop that keeps calling Rendition.select until a media player turns up that meets whatever selection tests you care to run in JavaScript.

| --- | --- |

Returns

A MediaSelection object

Example 1: Get a usable MediaSelection for this Rendition.

```
var selection = rendition.select();
```

Example 2: Get the name of the selected rendition. This script is executed from a Rendition action event.

```
var selection = event.action.rendition.select();
console.println( "Preparing to play " + selection.rendition.uiName);
```

### testCriteria

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Checks the Rendition against whatever criteria the PDF file spells out, such as a minimum bandwidth, then returns a Boolean saying whether every one of those criteria was met.

Returns

Boolean

## Report

### JavaScript APIs — Report

With the Report object you can drive the creation of PDF documents through JavaScript, the kind suited to reporting. Build one with the writeText constructor, as in:

```
var rep = new Report();
```

From there its properties and methods let you compose and format the report.

### Report properties

### absIndent

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

Not available in Reader

Number

R/W

| --- | --- | --- | --- | --- | --- |

Governs the absolute level of indentation. Lean on the indent and outdent methods wherever you can, since they deal with indentation overflows the right way.

Indent a report past the page's midpoint and the effective indent snaps back to the middle. Keep in mind that divide signals when indentation has gone too far.

### color

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

Not available in Reader

Color

R/W

| --- | --- | --- | --- | --- | --- |

Sets the color used for whatever text and divisions land in the report.

You put text into the report through writeText, and divisions (horizontal rules) through divide.

Example:

```
var rep = new Report();
rep.size = 1.2;
rep.color = color.blue;
rep.writeText("Hello World!");
```

### size

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

Not available in Reader

Number

R/W

| --- | --- | --- | --- | --- | --- |

Sets the size of any text writeText produces. It works as a multiplier: the actual size comes from the size property times the default size tied to the chosen style.

Example: Write a "Hello World!" document.

```
var rep = new Report();
rep.size = 1.2;
rep.writeText("Hello World!");
```

### style

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Not available in Reader

String

R/W

| --- | --- | --- | --- | --- | --- |

Picks the font style applied to text that writeText produces. Allowed style values are:

```
DefaultNoteText
NoteTitle
```

Example: Start a new report, set font size, write short text and open report.

```
var rep = new Report();
rep.size = 1.2;
rep.style = "DefaultNoteText";
rep.writeText("Hello World!");
rep.open("My Report");
```

### Report methods

### breakPage

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Closes off the present page and opens a fresh one.

### divide

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Lays a horizontal rule across the page at the present spot, using the width you give. It runs from the current indent over to the right edge of the bounding box. When the indent sits past the box's midpoint, the rule reflects that.

Parameters

nWidth

(optional) The width to give the horizontal rule.

| --- | --- |

### indent

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Pushes the present indentation mark forward by nPoints, or by the default amount. Indent a report past the page's midpoint and the effective indent snaps back to the middle. Keep in mind that divide leaves a mark showing whether indentation has gone too far.

See writeText for an example of usage.

Parameters

Parameter

Description

nPoints

(optional) How many points to advance the indentation mark by.

| --- | --- |

### mail

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Wraps up report generation and sends the report by email.

See also mailGetAddrs, app. mailMsg, the Doc mailForm method, and the FDF object mail method.

Parameters

Parameter

Description

bUI

(optional) Says whether a user interface appears. When true (the default), the remaining parameters preload the compose-new-message window shown to the user. When false, cTo becomes mandatory and the rest stay optional. - (Acrobat 7.0) Run this method outside a privileged context and bUI is ignored, defaulting to true. See Privileged context.

cTo

(optional) The message recipients, given as a semicolon-separated list.

cCc

(optional) The CC recipients, given as a semicolon-separated list.

cBcc

(optional) The BCC recipients, given as a semicolon-separated list.

cSubject

(optional) The message subject. It may run up to 64 KB.

cMsg

(optional) The message body. It may run up to 64 KB.

| --- | --- |

### open

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Wraps up report generation, brings the report up in Acrobat, and returns a Doc you can use to work on the report further.

Parameters

cTitle

The report title.

| --- | --- |

Returns

A Doc.

Example: Open a report, get the Doc, and set some properties of the document.

```
var docRep = rep.open("myreport.pdf");
docRep.info.Title = "End of the month report: August 2000";
docRep.info.Subject = "Summary of comments at the August meeting";
```

See writeText for a more complete example.

### outdent

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Does the reverse of indent, pulling the present indentation mark back by nPoints or by the default amount.

See writeText for an example of usage.

Parameters

Parameter

Description

nPoints

(optional) How many points to pull the indentation mark back by.

| --- | --- |

### Report

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

A constructor. Builds a fresh Report object using the media and bounding boxes you give (measured in points, each 1/72 of an inch). Without arguments it falls back to an 8.5 x 11 inch media box and a bounding box set in 0.5 inches from the media box on every side.

Parameters

aMedia

(optional) The media type.

aBBox

(optional) The bounding box size.

| --- | --- |

Returns

A Report object.

### save

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Wraps up report generation and writes the report out to the path you name.

Note

This method runs solely within a batch or console event. See Privileged context. For more on JavaScript events, turn to the event object.

Parameters

Parameter

Description

cDIPath

The device-independent path.

cFS

(optional) The file system. "CHTTP" is the sole accepted value for cFS. When you use it, cDIPath ought to be a URL. This matters only where the web server offers WebDAV.

| --- | --- |

Example 1:

```
rep.save("/c/myReports/myreport.pdf");
```

Example 2:

```
rep.save({
    cDIPath: "http://www.example.com/reports/WebDAV/myreport.pdf",

     cFS:"CHTTP"}
);
```

### writeText

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Puts a block of text into the report. Each call starts fresh on a new line at the present indentation mark. Roman, CJK, and WGL4 text all wrap correctly.

Parameters

String

The block of text to use.

| --- | --- |

Example:

```
// Get the comments in this document, and sort by author
this.syncAnnotScan();
annots = this.getAnnots({nSortBy: ANSB_Author});

// Open a new report
var rep = new Report();

rep.size = 1.2;
rep.color = color.blue;

 if (annots) {
    rep.writeText("Summary of Comments: By Author");
    rep.color = color.black;
    rep.writeText(" ");
    rep.writeText("Number of Comments: " + annots.length);
    rep.writeText(" ");

    var msg = "200 page %s: "%s"";
    var theAuthor = annots[0].author;
    rep.writeText(theAuthor);
    rep.indent(20);
    for (var i=0; i < annots.length; i++) {
        if (theAuthor != annots[i].author) {
            theAuthor = annots[i].author;
            rep.writeText(" ");
            rep.outdent(20);
            rep.writeText(theAuthor);
            rep.indent(20);
        }
        rep.writeText(
            util.printf(msg, 1 + annots[i].page, annots[i].contents));
    }
} else {
    var msg = "No annotations found in this document, %s.";
    rep.writeText(util.printf(msg, this.documentFileName));
}
// Now open the report
var docRep = rep.open("myreport.pdf");
docRep.info.Title = "End of the month report: August 2006";
docRep.info.Subject = "Summary of comments at the August meeting";
```

## Row

### JavaScript APIs — Row

Every column's data for a single row lands in this catch-all JavaScript object. The Statement object method hands it back. Its properties are these:

Property

Type

Access

Description

columnArray

Array

R

An array of Column objects.

It matches what the Statement object method would give back if you called it on that same Statement object at the very moment this row object came into being.

column properties

any

R

For each column the query pulls in, there is a matching property that holds that row's data for that column.

| --- | --- | --- | --- |
