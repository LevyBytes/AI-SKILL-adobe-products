# Acrobat 6 0 Changes, Acrobat 5 0 Changes, Alerter, Alternatepresentation ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Acrobat 6.0 changes; Acrobat 5.0 changes; Alerter; AlternatePresentation; annotAttachment.

## Acrobat 6.0 changes

### Changes Across Versions — Acrobat 6.0 changes

This version of Acrobat is where the safe-path concept first appeared.

### Introduced in Acrobat 6.0

Acrobat 6 introduced these properties and methods:

ADBC object

SQL types

AlternatePresentation object

properties:

active

type

methods:

start

stop

Annotation object

properties:

borderEffectIntensity

borderEffectStyle

inReplyTo

richContents

toggleNoView

methods:

getStateInModel

transitionToState

app object

properties:

fromPDFConverters

printColorProfiles

printerNames

runtimeHighlight

runtimeHighlightColor

thermometer

viewerType

methods:

addToolButton

getPath

mailGetAddrs

newFDF

openFDF

popUpMenuEx

removeToolButton

Bookmark object

methods:

setAction

catalog object

properties:

isIdle

jobs

methods:

getIndex

remove

Certificate object

properties:

keyUsage

usage

Collab object

methods:

addStateModel

removeStateModel

console object

methods:

close

dbg object

properties:

bps

methods:

c

cb

q

sb

si

sn

so

sv

Directory object

properties:

info

methods:

connect

DirConnection object

properties:

canList

canDoCustomSearch

canDoCustomUISearch

canDoStandardSearch

groups

name

uiName

methods:

search

setOutputFields

Doc object

properties:

alternatePresentations

documentFileName

metadata

permStatusReady

methods:

addLink

addRecipientListCryptFilter

addRequirement

encryptForRecipients

exportAsText

exportXFAData

getLegalWarnings

getLinks

getOCGs

getPrintParams

importXFAData

newPage

removeLinks

setAction

setPageAction

setPageTabOrder

Error object

properties:

fileName

lineNumber

message

name

methods:

toString

event object

properties:

fieldFull

richChange

richChangeEx

richValue

FDF object

properties:

deleteOption

isSigned

numEmbeddedFiles

methods:

addContact

addEmbeddedFile

addRequest

close

mail

save

signatureClear

signatureSign

signatureValidate

Field object

properties:

buttonFitBounds

comb

commitOnSelChange

defaultStyle

radiosInUnison

richText

richValue

rotation

methods:

getLock

setLock

signatureGetSeedValue

signatureSetSeedValue

Index object

methods:

build

Link object

properties:

borderColor

borderWidth

highlightMode

rect

methods:

setAction

OCG object

properties:

name

state

methods:

setAction

PrintParams object

properties:

binaryOK

bitmapDPI

colorOverride

colorProfile

constants

downloadFarEastFonts

fileName

firstPage

flags

fontPolicy

gradientDPI

interactive

lastPage

pageHandling

pageSubset

printAsImage

printContent

printerName

psLevel

rasterFlags

reversePages

tileLabel

tileMark

tileOverlap

tileScale

transparencyLevel

usePrinterCRD

useT1Conversion

Report object

properties:

style

search object

properties:

docInfo

docText

docXMP

bookmarks

ignoreAsianCharacterWidth

jpegExif

legacySearch

markup

matchWholeWord

wordMatching

security object

methods:

chooseRecipientsDialog

getSecurityPolicies

importFromFile

SecurityHandler object

properties:

digitalIDs

directories

directoryHandlers

signAuthor

signFDF

methods:

newDirectory

SOAP object

properties:

wireDump

methods:

connect

request

response

streamDecode

streamEncode

streamFromString

stringFromStream

Span object

properties:

alignment

fontFamily

fontStretch

fontStyle

fontWeight

text

textColor

textSize

strikethrough

subscript

superscript

underline

spell object

properties:

languages

languageOrder

methods:

customDictionaryClose

customDictionaryCreate

customDictionaryExport

customDictionaryOpen

ignoreAll

Thermometer object

properties:

cancelled

duration

value

text

methods:

begin

end

util object

methods:

printd

spansToXML

xmlToSpans

| --- | --- |

### Modified in Acrobat 6.0

Enhancements and revisions reached the items listed here:

app object

methods:

addMenuItem

alert

listMenuItems

listToolbarButtons

response

Doc object

properties:

layout

zoomType

methods:

createDataObject

exportAsFDF

exportAsXFDF

exportDataObject

flattenPages

getField (see Extended Methods) getURL

importDataObject

importIcon

print

saveAs

spawnPageFromTemplate

submitForm

event object

properties:

changeEx

Field object

properties:

name

methods:

buttonImportIcon

signatureInfo

signatureSign

signatureValidate

global object

Only Boolean, Number, and String variables can hold persistent global data. With Acrobat 6.0, the ceiling on global persistent variables dropped from 32 KB down to 2-4 KB. Whatever string data lands past that ceiling gets discarded.

search object

methods:

query

SecurityHandler object

What follows debuted in Acrobat 5.0 as properties and methods on the PPKLite Signature Handler Object. As of Acrobat 6.0, they belong to the SecurityHandler object instead. Every one of them carries a new description, and a few gained extra parameters. - To sign with JavaScript methods, the digital signature profile must be a .pfx file rather than the .apf used by older Acrobat versions. Converting an .apf profile to the newer .pfx type is done through the UI: click Advanced > Manage Digital IDs > My Digital ID Files > Select My Digital ID File to bring the .apf profile in. properties:

appearances

isLoggedIn

loginName

loginPath

name

signInvisible

signVisible

uiName

methods:

login

logout

newUser

setPasswordTimeout

Template t object

methods: spawn

| --- | --- |

Extended Methods

Acrobat 6.0 broadened the Document .getField method so that it can pull back the Field object for individual widgets. Refer to the Field object for how widgets work and how to handle them.

### Deprecated in Acrobat 6.0

search object

properties: soundex thesaurus

spell object

methods:

addDictionary

removeDictionary

| --- | --- |

### Introduced in Acrobat 6.0.2

Listed in the table below are the objects, properties, and methods belonging to the Multimedia plug-in. Under Acrobat 6.0.2, multimedia JavaScript had its own dedicated document, titled the "Acrobat Multimedia JavaScript Reference".

app object

properties:

media

monitors

app.media object

properties:

align

canResize

closeReason

defaultVisible

ifOffScreen

layout

monitorType

openCode

over

pageEventNames

raiseCode

raiseSystem

renditionType

status

trace

version

windowType

methods:

addStockEvents

alertFileNotFound

alertSelectFailed

argsDWIM

canPlayOrAlert

computeFloatWinRect

constrainRectToScreen

createPlayer

getAltTextData

getAltTextSettings

getAnnotStockEvents

getAnnotTraceEvents

getPlayers

getPlayerStockEvents

getPlayerTraceEvents

getRenditionSettings

getURLData

getURLSettings

getWindowBorderSize

openPlayer

removeStockEvents

startPlayer

Doc object

properties:

innerAppWindowRect

innerDocWindowRect

media

outerAppWindowRect

outerDocWindowRect

pageWindowRect

Doc.media object

properties:

canPlay

methods:

deleteRendition

getAnnot

getAnnots

getRendition

newPlayer

event object

A new Screen type used with Multimedia along with associated event names.

Events object

methods:

add

dispatch

remove

EventListener object

methods:

afterBlur

afterClose

afterDestroy

afterDone

afterError

afterEscape

afterEveryEvent

afterFocus

afterPause

afterPlay

afterReady

afterScript

afterSeek

afterStatus

afterStop

onBlur

onClose

onDestroy

onDone

onError

onEscape

onEveryEvent

onFocus

onGetRect

onPause

onPlay

onReady

onScript

onSeek

onStatus

onStop

Marker object

properties:

frame

index

name

time

Markers object

properties:

player

methods:

get

MediaOffset object

properties:

frame

marker

time

MediaPlayer object

properties:

annot

defaultSize

doc

events

hasFocus

id

innerRect i isOpen isPlaying

markers

outerRect

page

settings

uiSize

visible

methods:

close

open

pause

play

seek

setFocus

stop

triggerGetRect

where

MediaReject object

properties:

rendition

MediaSelection object

properties:

selectContext

players

rejects

rendition

MediaSettings object

properties:

autoPlay

baseURL

bgColor

bgOpacity

endAt

floating

duration

floating

layout

monitor

monitorType

page

palindrome

players

rate

repeat

showUI

startAt

visible

volume

windowType

Monitor object

properties:

colorDepth

isPrimary

rect

workRect

Monitors object

methods:

bestColor

bestFit

desktop

document

filter

largest

leastOverlap

mostOverlap

nonDocument

primary

secondary

select

tallest

widest

PlayerInfo object

properties:

id

mimeTypes

name

version

methods:

canPlay

canUseData

PlayerInfoList object

methods:

select

Rendition object

properties:

altText

doc

fileName

type

uiName

methods:

getPlaySettings

select

testCriteria

ScreenAnnot object

properties:

altText

alwaysShowFocus

display

doc

events

extFocusRect

innerDeviceRect

noTrigger

outerDeviceRect

page

player

rect

methods:

hasFocus

setFocus

| --- | --- |

## Acrobat 5.0 changes

### Changes Across Versions — Acrobat 5.0 changes

### Introduced in Acrobat 5.0

ADBC object

methods: getDataSourceList newConnection

AlternatePresentation object

properties:

alignment

AP

arrowBegin

arrowEnd

author

contents

doc

fillColor

hidden

modDate

name

noView

page

point

points

popupRect

print

rect

readOnly

rotate

strokeColor

textFont

type

soundIcon

width

methods:

destroy

getProps

setProps

app object

properties:

activeDocs

fs

plugIns

viewerVariation

methods:

addMenuItem

addSubMenu

clearInterval

clearTimeOut

listMenuItems

listToolbarButtons

newDoc

openDoc

popUpMenu

setInterval

setTimeOut

Bookmark object

properties:

children

color

doc

name

open

parent

style

methods:

createChild

execute

insertChild

remove

color object

methods:

convert

equal

console object

methods:

getColumnList

getTableList

console

Data object

properties:

creationDate

modDate

MIMEType

name

path

size

Doc object

properties:

bookmarkRoot

disclosed (5.0.5) icons

info

layout

securityHandler

selectedAnnots

sounds

templates

URL

methods:

addAnnot

addField

addIcon

addThumbnails

addWeblinks

bringToFront

closeDoc

createDataObject

createTemplate

deletePages

deleteSound

exportAsXFDF

exportDataObject

extractPages

flattenPages

getAnnot

getAnnots

getDataObject

getIcon

getPageBox

getPageLabel

getPageNthWord

getPageNthWordQuads

getPageRotation

getPageTransition

getSound

importAnXFDF

importDataObject

importIcon

importSound

importTextData

insertPages

movePage

print

removeDataObject

removeField

removeIcon

removeTemplate

removeThumbnails

removeWeblinks

replacePages

saveAs

selectPageNthWord

setPageBoxes

setPageLabels

setPageRotations

setPageTransitions

submitForm

syncAnnotScan

event object

properties:

changeEx

keyDown

targetName

Field object

properties:

buttonAlignX

buttonAlignY

buttonPosition

buttonScaleHow

buttonScaleWhen

currentValueIndices

doNotScroll

doNotSpellCheck

exportValues

fileSelect

multipleSelection

rect

strokeColor

submitName

valueAsString

methods:

browseForFileToSubmit

buttonGetCaption

buttonGetIcon

buttonSetCaption

buttonSetIcon

checkThisBox

defaultIsChecked

isBoxChecked

isDefaultChecked

setAction

signatureInfo

signatureSign

signatureValidate

FullScreen object

properties:

backgroundColor

clickAdvances

cursor

defaultTransition

escapeExits

isFullScreen

loop

timeDelay

transitions

usePageTiming

useTimer

global object

methods:

subscribe

identity object

properties:

corporation

email

loginName

name

Index object

properties:

available

name

path

selected

PlayerInfo object

properties:

certified

loaded

name

path

version

PPKLite Signature Handler Object (now listed under the| SecurityHandler object)

properties:

appearances

isLoggedIn

loginName

loginPath

name

signInvisible

signVisible

uiName

methods:

login

logout

newUser

setPasswordTimeout

Report object

properties:

absIndent

color

absIndent

methods:

breakPage

divide

indent

outdent

open

mail

writeText

save

writeText

search object

properties:

available

indexes

markup

maxDocs

proximity

refine

soundex

stem

methods:

addIndex

getIndexForPath

query

removeIndex

security object

properties:

handlers

validateSignaturesOnOpen

methods:

getHandler

spell object

properties:

available

dictionaryNames

dictionaryOrder

domainNames s methods:

addDictionary

addWord

check

checkText

checkWord

removeDictionary

removeWord

userWords

TableInfo object

properties:

columnCount

rowCount

methods:

execute

getColumn

getColumnArray

getRow

nextRow

Template object

properties:

hidden

name

methods:

spawn

| --- | --- |

### Modified in Acrobat 5.0

The console can serve as an editor and is able to run JavaScript code.

Enhancements and revisions reached the items listed here:

app object

language \* execMenuItem

Doc object

exportAsFDF

print

submitForm

event object

type

Field object

textFont

value

buttonImportIcon

getItemAt

util object

printd

| --- | --- |

The portion covering the event object was substantially expanded to make the Acrobat JavaScript Event model easier to grasp.

### Deprecated in Acrobat 5.0

The properties and methods below were deprecated:

app object

fullscreen

numPlugIns

getNthPlugInName

Doc object

author

creationDate

creationDate

keywords

modDate

numTemplates

producer

title

getNthTemplate

spawnPageFromTemplate

Field object

hidden

TTS object

soundCues \* speechCues

| --- | --- |

### Modified in Acrobat 5.05

A new glyph was placed on the quick bar to flag which methods Acrobat Approval lacks.

On the Doc object, the disclosed property was added.

Changes for 5.1

### Modified in Adobe Reader 5.1

For the Adobe 5.1 Reader, access to the properties and methods below was changed:

Annotation object

properties:

alignment

AP

arrowBegin

arrowEnd

author

contents

doc

fillColor

hidden

methods:

destroy

getProps

setProps

modDate

name

noView

page

point

points

popupRect

print

rect

readOnly

rotate

strokeColor

textFont

type

soundIcon

width

Doc object

properties:

selectedAnnots

methods:

addAnnot

addField

exportAsFDF

exportAsXFDF

getAnnot

getAnnots

getNthTemplate

importAnFDF

importAnXFDF

importDataObject

mailDoc

mailForm

spawnPageFromTemplate

submitForm

syncAnnotScan

Template object

methods:

spawn

| --- | --- |

## Alerter

### JavaScript APIs — Alerter

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Under assorted circumstances — a media file that cannot be found, for instance — the Acrobat multimedia plug-in shows error alerts. Through JavaScript, those alerts can be customized for a whole document or for one media player on its own.

Whenever an alert arises, the internal app.media.alert function runs with parameters describing it. To deal with the alert, app.media.alert hunts for alerter objects and invokes their dispatch methods in the sequence below:

```
args.alerter
doc.media.alerter
doc.media.stockAlerter
```

For alerts tied to one specific player, pass an alerter object in args.alerter when calling app.media.createPlayer or app.media.openPlayer.

For alerts spanning a whole document, assign an alerter object to doc.media.alerter.

Setting args.alerter or doc.media.alerter to null switches off every alert for that player or document.

The fallback alerts that kick in when no custom alerter is given come from doc.media.stockAlerter. app.media.alert sets this property up on its own. As a rule, developer code has no reason to touch doc.media.stockAlerter.

### Alerter methods

### dispatch

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Invoked by app.media.alert to deal with alert situations.

Parameters

alert An Alert object (see below).

Returns

A Boolean — true halts any further alert processing, false lets processing carry on.

Alert object

Properties

Type

Description

type

String

All alert types

doc

Doc object

All alert types

fromUser

Boolean

All alert types

error

Object

Comes with the Exception type alert. A message property hangs off the error object:

error: { message: String }

errorText

String

Comes with the PlayerError type alert.

fileName

String

Comes with the FileNotFound type alert.

selection

MediaSelection object

Comes with the SelectFailed type alert.

| --- | --- | --- |

Example 1: Bring up a media player while suppressing all of its alerts.

```
app.media.openPlayer({ alerter: null });

// A more elaborate way to do the same thing
app.media.openPlayer(
{
    alerter:
    {
        dispatch() { return true; }
    }
});
```

Example 2: Across every player in the document, record any alerts into a text field and still let the standard alert box show.

```
function logAlerts( doc )
{
    count = 0;
    doc.alerter =
    {
        dispatch( alert )
        {
            doc.getField("AlertLog").value += "Alert #"
                + ++count + ": " + alert.type + "n";
        }
    }
}
logAlerts( this );

// Another way to keep the counter
function logAlerts( doc )
{
    doc.alerter =
    {
        count = 0,
        dispatch( alert )
        {
            doc.getField("AlertLog").value += "Alert #"
                + ++this.count + ": " + alert.type + "n";
        }
    }
}
logAlerts( this );
```

Example 3: Take care of the PlayerError alert right here, leaving the rest to default handling.

```
this.media.alerter =
{
    dispatch( alert )
    {
        switch( alert.type )
        {
            case "PlayerError":
            app.alert( "Player error: " + alert.errorText );
            return true;
        }
    }
}
```

## AlternatePresentation

### JavaScript APIs — AlternatePresentation

A document's specific alternate presentation is reached through this object. To get hold of an AlternatePresentation object, call the alternatePresentations method on the Doc object.

The PDF Reference holds more about alternate presentations.

### AlternatePresentation properties

### active

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

boolean

R

| --- | --- | --- | --- | --- | --- |

When the presentation is running, this property reads true; otherwise it reads false. An active presentation dictates the way its owning document is shown.

Example: See the start method for an example.

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

string

R

| --- | --- | --- | --- | --- | --- |

What kind of alternate presentation this is. As things stand, "SlideShow" is the sole supported type.

### AlternatePresentation methods

### start

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Flips the document view over into alternate presentation mode and turns the active property to true. Should this or another alternate presentation already be running, an exception is raised.

Parameters

Parameter

Description

cOnStop

(optional) An expression that Acrobat evaluates once the presentation ends for whatever reason — a stop call, a direct user action, or the presentation's own logic.

cCommand

(optional) A command or script handed to the alternate presentation. - The command is specific to that presentation, not a JavaScript expression.

| --- | --- |

Example: Suppose the document holds a presentation named "MySlideShow".

```
// oMySlideShow is an AlternatePresentation object
oMySlideShow = this.alternatePresentations.MySlideShow;
if (!oMySlideShow.active) oMySlideShow.start();
```

Observe how this.alternatePresentations reaches the named presentation through its property name.

### stop

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Halts the presentation and returns the document to its normal (PDF) presentation. If the presentation is not running, an exception is raised.

Example: Here, oMySlideShow stands for an AlternatePresentations object. A related example appears under start.

```
// Stop the show if already active
if (oMySlideShow.active) oMySlideShow.stop();
```

## annotAttachment

### JavaScript APIs — annotAttachment

The annotAttachment object stands for the file held inside a FileAttachment-type annotation. Much like the Data object, it carries both the byte content and the descriptive metadata of that attached file.

Consult the PDF Reference if you need fuller coverage of annotations.

### annotAttachment properties

### contentStream

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

This is a ReadStream that exposes the byte stream of the file attachment, letting your script reach into whatever content the annotAttachment object is holding.

When you try to read the bytes of an embedded file attachment, the call raises a NotAllowedError and fails whenever any one of the conditions listed below holds (extension comparisons ignore letter case):

The extension on the attachment is ".SWF". Granting a trusted .SWF — one running inside Acrobat's Rich Media Annotation or as a PDF Portfolio navigator — access to the raw bytes of other .SWF embedded attachments would open the door for that trusted .SWF to pull in a hostile one.

Note

Should you rely on the Data.MIMEType property to test whether a Data object holds a .SWF file, remember that .SWF files report the MIME type application/x-shockwave-flash.

The extension reads ".GIF", ".JPG", ".JPEG", or ".PNG" yet the opening three bytes carry a .SWF header signature ("FWS" or "CWS"). This guard exists because the very same ActionScriptflash.display.Loader load() method that pulls in GIF, JPEG, and PNG images is equally capable of pulling in a SWF; rename a malicious SWF to one of those image extensions and it could slip through and load.

### creationDate

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

date

R

| --- | --- | --- | --- | --- | --- |

When the attached file was created.

### MIMEtype

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

string

R

| --- | --- | --- | --- | --- | --- |

The attached file's MIME type.

### modDate

Version (Key)

Save-Prefs

Security

Product

Type

Access

11.0

No

No

No

date

R

| --- | --- | --- | --- | --- | --- |

When the attached file was last changed.

### name

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

string

R

| --- | --- | --- | --- | --- | --- |

What the attached file is named.

### pathname

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

string

R

| --- | --- | --- | --- | --- | --- |

The path that locates the attached file.

### size

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

number

R

| --- | --- | --- | --- | --- | --- |

How many bytes the attachment occupies once uncompressed.

Example:

```
var annot = this.addAnnot({
    page: 0
    type: "FileAttachment",
    point: [400,500],
    author: "A. C. Robat",
    contents: "Call Smith to get help on this paragraph.",
    cAttachmentPath: "/d/a.pdf",
});
var attachObj = annot.attachment;
console.println("Name: " + attachObj.name);
console.println("Type: " + attachObj.MIMEType);
console.println("Size: "+ attachObj.size);
console.println("==============Content=================");
var stm = attachObj.contentStream;
console.println(util.stringFromStream(stm));
```
