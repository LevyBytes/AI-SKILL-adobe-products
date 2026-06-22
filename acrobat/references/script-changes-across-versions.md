# Changes Across Versions, Acrobat Xi Changes, Acrobat X Changes, Acrobat 9 0 Changes ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Changes Across Versions; Acrobat XI changes; Acrobat X changes; Acrobat 9.0 changes; Acrobat 8.1 changes; Acrobat 8.0 changes; Acrobat 7.0.5 changes; Acrobat 7.0 changes.

## Changes Across Versions

A rundown of the capabilities and behavioral updates that arrived in Acrobat and the releases before it.

## Acrobat XI changes

### Changes Across Versions — Acrobat XI changes

Fuller coverage of each item below lives in the JavaScript for Acrobat API Reference and in Developing Acrobat Applications Using JavaScript.

### Changes to PrintParams object

Support for the colorOverride property on the PrintParams object has been dropped.

## Acrobat X changes

### Changes Across Versions — Acrobat X changes

Fuller coverage of each item below lives in the JavaScript for Acrobat API Reference and in Developing Acrobat Applications Using JavaScript.

### New JavaScript version

JavaScript version 1.8 is what this release runs on.

### Impact of Acrobat menu restructuring on JavaScript APIs

From Acrobat X forward, the count of top-level menus was trimmed down. Only these top-level entries remain from Acrobat X onward: File, Edit, View, Window, and Help. Any earlier script that pointed at a top-level menu item that has since disappeared will no longer resolve.

From Acrobat X forward, toolbar commands surface through the Tools pane along the right edge of the screen. Because of that, the methods and properties for tailoring the toolbar — app.addToolButton, hideToolBarButton, and removeToolButton — now act on the Tools pane region instead. As an illustration, app.addToolButton drops a button onto the Plugin Addon Tools panel inside the Tools pane.

### New util method

A fresh util method, readFileIntoStream, reads an outside file into a JavaScript stream, can base64-encode it along the way, and hands back the data as a base64 encoded stream.

### Changes to search object

What follows are the property changes applied to the "search" object

Gone now are the thesaurus and soundex properties

The legacySearch property has been deprecated and from here on always reports false.

### Changes to SearchExecuteQuery

These entries were stripped out of the nWordOptions parameter on SearchExecuteQuery :

kWordOptionSoundsLike

kWordOptionThesaurus

### Function SearchIsLegacySearchAvailable deprecated

SearchIsLegacySearchAvailable is now deprecated and will return false in every case.

### Enhancements to PDFOptPDFVersion

These were folded into PDFOptPDFVersion :

kPDFOptAcrobat9

kPDFOptAcrobat10

### Enhancements to Doc object

The Doc object picked up the following improvements in this release:

### Enhancements to the getDataObjectContents method

When this method tries to reach the bytes of an embedded file attachment meeting any of the conditions below, it fails and raises a NotAllowedError (extension matching ignores letter case throughout):

The extension on the attachment is ".SWF". When a trustworthy .SWF application or module — one running inside Acrobat's Rich Media Annotation or a PDF Portfolio navigator — is granted access to the content bytes of embedded .SWF attachments, that legitimate .SWF could end up pulling in a hostile .SWF.

Note

Should you rely on the Data.MIMEType property to determine whether a Data object stands for a .SWF file, keep in mind that such files report application/x-shockwave-flash as their MIME type.

The attachment carries a ".GIF", ".JPG", ".JPEG", or ".PNG" extension while its opening three content bytes match a .SWF header signature ("FWS" or "CWS"). This restriction exists because the very same ActionScriptflash.display.Loader class load() method used for pulling in GIF, JPEG, and PNG images is equally capable of pulling in a SWF. Rename a malicious SWF to one of those image extensions and it could be loaded.

### Enhancements to the SaveAs Method

The SaveAs method on the Doc object gained these improvements:

### New Values of cConvID

cConvID picked up these new values:

Value

Valid Extension

com.adobe.acrobat.docx

docx

com.adobe.acrobat.xlsx

xlsx

| --- | --- |

### Deprecated Values of cConvID

Acrobat X marks the conversion IDs below as deprecated. They carry no registration, yet — strictly when invoked through the JavaScript doc.saveAs call — they map behind the scenes onto valid, registered conversion IDs. Later Acrobat releases will retire support for the deprecated conversion IDs entirely.

Deprecated cConvID

Equivalent Valid cConvID

com.adobe.acrobat.html-3-20

com.adobe.acrobat.html

com.adobe.acrobat.htm l- 4-01-css-1-00

com.adobe.acrobat.html

| --- | --- |

### New timestampSign and certifyInvisibleSign Doc methods

The next section, Signature support for Emerging PAdES ETSI ESI standard, covers the new Doc methods timestampSign and certifyInvisibleSign in more depth.

### Signature support for Emerging PAdES ETSI ESI standard

A multi-part standard from the European Telecommunications Standards Institute (ETSI) lays out a set of profiles for PAdES — Advanced Electronic Signatures aimed at Portable Document Format (PDF) files. Further detail is at: http://www.etsi.org/website/newsandevents/200909_electronicsignature.aspx

Part of the standard is a "timestamp the document" feature that drops an invisible timestamp signature onto a document. A matching JavaScript Doc method now ships in this release to accomplish the same thing. On top of that, the release adds a Doc method for applying an invisible certification (the menu-item equivalent already existed in Acrobat, and JavaScript now reaches it too). Each of these methods accepts the identical parameters to field.signatureSign, only operating at the Doc level. They may run solely within a batch, console, or application initialization event.

### Adding an invisible timestamp

timestampSign, a new Doc method, attaches an invisible timestamp to a document.

NOTE: Reader does not offer this method.

### Adding an invisible Certification

certifyInvisibleSign, a new Doc method, attaches an invisible certification to a document.

The JavaScript API reference, in its Doc object writeup, has fuller detail on these methods.

### ADBC Support Removed from Documentation

Going back to the prior Acrobat release, ADBC has had no support. With this release, the ADBC support section has been pulled from the Acrobat SDK documentation.

## Acrobat 9.0 changes

### Changes Across Versions — Acrobat 9.0 changes

Important: On the Mac OS, the user JavaScript folder now sits in a different place. To find it, run app.getPath("user", "javascript") in the JavaScript debugger console window. Move any JavaScript files from the old user folder over to the new spot.

The util. crackURL method is now able to split a URL written with IPv6 addressing into its parts. Its returned object gains a new nURLType property.

Two field properties, display and hidden, no longer depend on forms rights to work inside Adobe Reader.

Two methods join the API. app. loadPolicyFile points at a cross-domain policy file, while Doc. applyRedactions commits redaction marks.

Version 8 shipped two printing parameters that went undocumented. Through the DuplexType and NumCopies properties on the PrintParams object, callers can set duplex mode and the copy count for printing. The printerName status shifts as well — that property now works on the Mac OS too. Wording around how the printer is chosen when printerName holds the empty string was also revised.

Doc. nocache, which arrived in version 7.0, is now undefined and has been dropped from the docs. From version 8.0 on, when a user inside a browser leaves a page holding a PDF, Acrobat and Adobe Reader shut down almost instantly and discard any temporary data. Return to that PDF and the form data is no longer there.

The info object gains a new Authors property. Feed it a semi-colon delimited list when there are several authors.

JavaScript API for PDF portfolios — also known as portable collections and PDF packages — debuts in Acrobat 9. The table that follows enumerates them.

App object

methods:

newCollection

Doc object

properties:

collection

Data object

methods:

getFieldValue

setFieldValue

Collection object

properties:

fields

initialDoc

initialView

methods:

addField

getField

removeField

collectionField object

properties:

name

order

readOnly

sort

text

type

| --- | --- |

Acrobat 6.0 (and Later) Compatible Media leans on the host operating system to find and start a multimedia player already on the user's machine; Acrobat 9.0, by contrast, plays Flash video (FLV) and Flash applications (SWF) on its own, whether embedded into a PDF or streamed to it. With Flash handled natively, playback stays dependable across platforms. No extra media player or particular codec is required.

The multimedia stack in Acrobat 9.0, built on rich media annotations, supersedes Acrobat 6.0 (and Later) Compatible Media. For that reason, anyone authoring PDFs that carry multimedia assets is urged to adopt the rich media annotations of Acrobat 9.

What follows is a list of the JavaScript API backing rich media annotations.

Doc object

methods:

getAnnotRichMedia

getAnnotsRichMedia

AnnotRichMedia object

properties:

activated

context3D

name

page

rect

subtype

methods:

callAS

| --- | --- |

## Acrobat 8.1 changes

### Changes Across Versions — Acrobat 8.1 changes

Fresh security limits now apply to the search object's addIndex, query, and removeIndex methods, and to the spell object's removeWord method. Each of those method writeups has the details.

## Acrobat 8.0 changes

### Changes Across Versions — Acrobat 8.0 changes

E4X — that is, ECMA-357 — is now understood by the JavaScript interpreter. The specification itself is documented in "EMCAScript for XML (E4X) Specification", http://www.ecma-international/publications/standards/Ecma-357.htm . The following metadata example shows E4X in action.

Within the Preferences dialog box (Ctrl + K), the JavaScript category now carries a fresh security checkbox, "Enable global object security policy".

Leave it checked — which is the default — and every write to a global variable records the origin that performed it. From then on only matching origins may read that variable. With files, that limits access to the file that set the value, holding the same path it held at the moment of the write. With documents loaded from URLs, only the web host that set the value may reach it.

One notable carve-out applies to the limits just described. A global variable may still be declared and read in a privileged context, within the console, inside a batch sequence, and in folder JavaScript.

Leave it unchecked and documents of differing origins can all reach the variable — the way things worked prior to version 8.0.

Consult the global object section for more particulars and examples.

A fresh restriction confines app.execMenuItem to a roster of safe menu items. Refer to the security note.

Acrobat 8.0 brings in the following properties and methods:

Certificate object

properties:

privateKeyValidityEnd

privateKeyValidityStart

validityEnd (First introduced in version 7.0.5, but undocumented.)

validityStart (First introduced in version 7.0.5, but undocumented.)

CertificateSpecifier Object

properties:

subjectDN

keyUsage

urlType

Expanded description of the url property.

Added four new bit flags to the flags property: subjectDN, issuerDN, keyUsage, url.

colorConvertAction object

properties:

action

alias

colorantName

convertIntent

convertProfile

embed

isProcessColor

matchAttributesAll

matchAttributesAny

matchIntent

matchSpaceTypeAll

matchSpaceTypeAny

preserveBlack

useBlackPointCompensation

Doc object

properties:

xfa (First introduced in version 6.0.2, but undocumented.)

XFAForeground

methods:

colorConvertPage

embedOutputIntent

exportAsFDFStr

exportAsXFDFStr

getColorConvertAction

Net object

properties:

SOAP (Net.SOAP has properties and methods aliased with SOAP.wireDump, SOAP.connect, SOAP.request, SOAP.response.)

Discovery (Net.Discovery has methods aliased with SOAP.queryServices and SOAP.resolveService.)

HTTP

methods: _ streamDecode _ streamDigest \* streamEncode

Net.HTTP object

methods:

request

PrintParams

properties:

booklet

constants. bookletBindings

constants. bookletDuplexModes

constants.handling.booklet ( See

pageHandling for a description.)

RDN object

properties: Added 22 properties to the RDN object: businessCategory, countryOfCitizenship, countryOfResidence, dateOfBirth, dc, dnQualifier, gender, generationQualifier, givenName, initials, l, name, nameAtBirth, placeOfBirth, postalAddress, postalCode, pseudonym, serialNumber, sn, st, street, title

SecurityHandler object

properties: The following three properties were previously undocumented.

docDecrypt

docEncrypt

validateFDF

SeedValue Object

Added three new flags: legalAttestations, shouldAddRevInfo, digestMethod.

Change of behavior of the reasons property.

Added the digestMethod property.

Change in wording of the description of the version property.

Added the shouldAddRevInfo property.

SignatureInfo object

properties: digestMethod

| --- | --- |

These properties and methods were altered in Acrobat 8.0:

app object

methods:

openDoc (cDest parameter added)

Doc object

methods:

addAnnot (New default values for the author property.)

addRecipientListCryptFilter (Added note for Acrobat 7.0.)

getLegalWarnings (No longer dirties document. Return value changed.)

importTextData (Can be only executed during a console or batch event.)

FDF object

methods:

addEmbeddedFile (Updated description of the nSaveOption parameter for version 8.)

Field object

methods:

buttonImportIcon (Can be executed only during a console or batch event)

FullScreen object

properties:

escapeExits (Can be set to false only during console and batch events)

LoginParameters Object

Modified wording of the cURI and cUserId properties.

submitForm method

The cPassword parameter is no longer usable. Beginning with Acrobat 8.0, creating password-encrypted FDF files is not possible. Supply that parameter and a form attempting to submit a password-encrypted FDF raises an ESErrorInvalidArgs exception, and the submission never happens.

| --- | --- |

## Acrobat 7.0.5 changes

### Changes Across Versions — Acrobat 7.0.5 changes

Columns 5 and 6 on the quick bars are gone.

These properties and methods arrived in Acrobat 7.0.5:

Collab object

methods:

documentToStream

Data object

properties:

description

Doc object

properties:

hostContainer

isModal

viewState

methods:

addRequirement

removeRequirement

Embedded PDF object

properties:

messageHandler

method: postMessage

HostContainer object

properties:

messageHandler

methods:

postMessage

util object

methods:

crackURL

| --- | --- |

These properties and methods were revised in Acrobat 7.0.5:

SOAP object

methods:

request (cRequestStyle and cContent parameters added)

response (cRequestStyle and cContent parameters added)

| --- | --- |

## Acrobat 7.0 changes

### Changes Across Versions — Acrobat 7.0 changes

What had been a standalone document in version 6.0.2, the Acrobat Multimedia JavaScript Reference, was folded into the Acrobat JavaScript Scripting Reference, which now goes by JavaScript for Acrobat API Reference. For the full roster of multimedia JavaScript objects, properties, and methods, turn to the section Introduced in Acrobat 6.0.2.

Running JavaScript by way of a menu event no longer carries privilege. There is now a way to run privileged code from inside a non-privileged context.

In releases prior to Acrobat 7.0, a set of JavaScript files — AForm.js, ADBC.js, Annots.js, AnWizard.js, media.js, and SOAP.js — sat in the App JavaScript folder. From Acrobat 7.0 onward, Acrobat Pro, Acrobat Standard, and Adobe Reader no longer ship those files. A precompiled bytecode stands in for them to boost performance. One file in the App folder, debugger.js, is left out of that bytecode.

The bytecode also leaves out anything in the User JavaScript folder.

Putting your own .js files in the user JavaScript folder is recommended — the same location that holds glob.js. Any JavaScript that wires up menu items (addMenuItem ) belongs in config.js inside the User JavaScript folder. You can discover that folder's path at runtime by calling app.getPath("user","javascript") from the console.

Adobe Reader now ships a console window. Reach it under Edit > Preferences > JavaScript by choosing Show Console on Errors and Messages. Beyond errors and exceptions, you can also bring the console up programmatically through console.show(). The console object writeup notes a few more particulars.

The JavaScript Debugging window's debugging features can be turned on for Adobe Reader on the Windows and Mac OS platforms. Debugging inside Adobe Reader calls for installing the JavaScript file debugger.js and making the right edits to the Windows registry.

### Introduced in Acrobat 7.0

Acrobat 7.0 added the following to its property and method set.

Alerter object

methods:

dispatch

Annotation object

properties:

callout

caretSymbol

Present in version 6.0, documented in version 7.0. creationDate

Present in version 6.0, documented in version 7.0. dash

Present in version 5.0, documented in version 7.0. delay

Present in version 5.0, documented in version 7.0. doCaption

intent

leaderExtend

leaderLength

lineEnding

opacity

Present in version 5.0, documented in version 7.0. refType

richDefaults

Present in version 6.0, documented in version 7.0. seqNum

Present in version 5.0, documented in version 7.0. state

Present in version 6.0, documented in version 7.0. stateModel

Present in version 6.0, documented in version 7.0. style

Present in version 6.0, documented in version 7.0. subject

Annot3D object

properties:

activated

context3D

innerRect

name

page

rect

app object

properties:

constants

methods:

beginPriv

browseForDoc

endPriv

execDialog

launchURL

trustedFunction

trustPropagatorFunction

Dialog object

methods:

enable

end

load

store

Doc object

properties:

docID Present in version 6.0, documented in version 7.0.

dynamicXFAForm

external

hidden

mouseX

mouseY

noautocomplete

nocache (removed in version 9) requiresFullSave

methods:

addWatermarkFromFile

addWatermarkFromText

embedDocAsDataObject

encryptUsingPolicy

getAnnot3D

getAnnots3D

getDataObjectContents

getOCGOrder

openDataObject

removeScript

setDataObjectContents

setOCGOrder

Doc.media object

methods:

getOpenPlayers

Field object

methods:

signatureGetModifications

OCG object

properties:

constants

initState

locked

methods:

getIntent

setIntent

PlayerInfo object

methods:

honors

PrintParams object

properties:

nUpAutoRotate

nUpNumPagesH

nUpNumPagesV

nUpPageBorder

nUpPageOrder

search object

properties:

attachments

ignoreAccents

objectMetadata

proximityRange

security object

security constants

methods:

chooseSecurityPolicy

getSecurityPolicies

SecurityPolicy object

SecurityPolicy properties

SOAP object

methods:

queryServices

resolveService

streamDigest

util object

methods:

iconStreamFromIcon

streamFromString

stringFromStream

XMLData object

methods:

applyXPath

parse

| --- | --- |

### Modified in Acrobat 7.0

Enhancements and revisions reached the items listed here:

app object

methods:

addToolButton

execMenuItem

getPath

mailGetAddrs

openDoc

console object

Adobe Reader now includes the console window.

Doc object

methods:

createTemplate

mailDoc

print

saveAs

submitForm

Field object

methods:

signatureSetSeedValue

Index object

methods:

build

OCG object

properties:

name

PrintParams object

properties:

pageHandling

search object

properties:

indexes

security object

properties:

handlers

methods:

getHandler

SecurityHandler object

properties:

digitalIDs

methods:

login

newUser

SOAP object

methods:

connect

request

spell object

Adobe Reader 7.0 and later does not include the Spell object.

methods:

addWord

util object

methods:

printd

| --- | --- |
