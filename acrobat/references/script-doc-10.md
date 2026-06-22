# Doc (part 10)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

(optional, Acrobat 4.0) Pass true to submit by the HTTP GET method. Pass false (the default) for a POST. GET is permitted only when Acrobat Web Capture handles the submission (the browser interface backs POST alone) and only when the data travels as HTML (that is, cSubmitAs is HTML).

bAnnotations

(optional, Acrobat 5.0) Pass true and annotations ride along in the submitted FDF or XML file. Defaults to false. Relevant only when cSubmitAs is FDF or XFDF.

bXML

(optional, Acrobat 5.0) Set true for an XML submission; false is the default. - Now deprecated — turn to cSubmitAs in its place.

bIncrChanges

(optional, Acrobat 5.0) Pass true to fold the PDF document's incremental changes into the submitted FDF file. Defaults to false. Has effect for cSubmitAs FDF alone, and is absent from Adobe Reader.

bPDF

(optional, Acrobat 5.0) Set true to send the whole PDF document; false is the default. When true, every other parameter but cURL is disregarded. Not available in Adobe Reader. - Now deprecated — turn to cSubmitAs in its place.

bCanonical

(optional, Acrobat 5.0) Pass true to render any submitted dates in the standard format (namely D:YYYYMMDDHHmmSSOHH'mm' ; see the PDF Reference ). Defaults to false.

bExclNonUserAnnots

(optional, Acrobat 5.0) Pass true to drop any annotations the current user doesn't own. Defaults to false.

bExclFKey

(optional, Acrobat 5.0) Pass true to drop the F entry. Defaults to false.

cPassword

(optional, Acrobat 5.0) The password used to derive the encryption key, should the FDF file need encrypting ahead of submission. Hand in the value true (no quotes) to reuse whatever password the user already typed (this Acrobat session) for sending or receiving an encrypted FDF file. With no password entered yet, the user gets prompted for one. However the password arrives — passed in or asked of the user — this new password is held for the rest of this Acrobat session for later outgoing or incoming encrypted FDF files. Applies only when cSubmitAs is FDF.

Caution

From Acrobat 8.0 on, password-encrypted FDF files can no longer be created. Supply this parameter, and any form that tries handing off a password-encrypted FDF raises an ESErrorInvalidArgs exception; the submission is blocked from going through.

bEmbedForm

(optional, Acrobat 6.0) Pass true and the call tucks the whole form supplying the data into the FDF file. Applies only when cSubmitAs is FDF.

oJavaScript

(optional, Acrobat 6.0) Lets you carry Before, After, and Doc scripts into a submitted FDF file. When present, the value converts straight into a matching CosObj and serves as the JavaScript attribute inside the FDF file. For instance:

oJavaScript: { Before: 'app.alert("before!")', After: 'app.alert("after")', Doc: [ "MyDocScript1", "myFunc1()", "MyDocScript2", "myFunc2()" ] }\* Only applicable if `cSubmitAs is FDF. `

cSubmitAs

(optional, Acrobat 6.0) This parameter sets the submission format. Values are:

FDF: (default): Submit as FDF

XFDF: Submit as XFDF

HTML: Submit as HTML

XDP: Submit as XDP

XML: submit as XML. In Acrobat 7.0, form data is submitted in XML format unless the parameter oXML (new to Acrobat 7.0) contains a valid XMLData object, in which case that is what gets submitted instead.

XFD: Submit as Adobe Form Client Data File

PDF: Submit the complete PDF document; all other parameters except cURL are ignored. (Save rights required) The choice of PDF is not available in Adobe Reader, unless the document has save rights. This parameter supersedes the individual format parameters. However, they are considered in the following priority order, from high to low: cSubmitAs, bPDF, bXML, bFDF.

bInclNMKey

(optional, Acrobat 6.0) Pass true to take in the NM entry of any annotations. Defaults to false.

aPackets

(optional, Acrobat 6.0) An array of strings naming which packets to fold into an XDP submission. Relevant only when cSubmitAs is XDP. The possible strings are:

config

datasets

sourceSet

stylesheet

template

pdf: The PDF should be embedded; if pdf is not included, only a link to the PDF is included in the XDP.

xfdf: Include annotations in the XDP (since that packet uses XFDF format)

\*: Every packet ought to be present inside the XDP. For pdf, the out-of-the-box behavior keeps it as a reference. Embedding the actual PDF inside the XDP requires you to name pdf explicitly among the listed packets. - (Save rights required) Listing pdf explicitly while submitting an XDP out of Adobe Reader means the document needs document save rights. Out of the box, the value is: ["datasets", "xfdf"].

cCharset

(optional, Acrobat 6.0) Sets which encoding the submitted values use. Accepted string values are utf-8, utf-16, Shift-JIS, BigFive, GBK, and UHC. When omitted, whatever Acrobat normally does takes over. XML-style formats always go out as utf-8. With other formats, Acrobat picks whichever host encoding suits the submitted values best. An XFDF submission disregards this setting entirely and sticks with utf-8.

oXML

(optional, Acrobat 7.0) Relevant only when cSubmitAs is set to XML. Supply an XMLData object here, and that object becomes the submission.

cPermID

(optional, Acrobat 7.0) Assigns a permanent ID to the submitted PDF, used when cSubmitAs is PDF or when bEmbedForm is true. That permanent ID lands as the opening element of the docID array (docID[0]). The document currently open is left unchanged.

cInstID

(optional, Acrobat 7.0) Assigns an instance ID to the submitted PDF, used when cSubmitAs is PDF or when bEmbedForm is true. That instance ID lands as the second element of the docID array (docID[1]). The document currently open is left unchanged.

cUsageRights

(optional, Acrobat 7.0) Attaches extra usage rights to the submitted PDF, used when cSubmitAs is PDF or when bEmbedForm is true. submitFormUsageRights.RMA is the sole acceptable value. The document currently open is left unchanged.

| --- | --- |

Example 1: Submit the form to the server.

```
this.submitForm("http://www.example.com/cgi-bin/myscript.cgi#FDF");
```

Example 2: Submit selected form fields to a server-side script as FDF.

```
var aSubmitFields = new Array( "name", "id", "score" );
this.submitForm({
    cURL: "http://www.example.com/cgi-bin/myscript.cgi#FDF",
    aFields: aSubmitFields,
    cSubmitAs: "FDF" // the default, not needed here
});
```

Example 3: Here is a quick way to submit an entire subtree at once. Handing "name" to the field parameter sends along "name.title ", "name.first ", "name.middle " and "name.last ".

```
this.submitForm("http://www.example.com/cgi-bin/myscript.cgi#FDF",
    true, false, "name");
```

Example 4: Submit form as XFDF to a server-side script.

```
this.submitForm({
    cURL: "http://www.example.com/cgi-bin/myscript.cgi#FDF",
    cSubmitAs: "XFDF"
});
```

Example 5 (Acrobat 7.0)

When a PDF holds multiple XFA forms as attachments, the script below pulls the XML data out of every attachment and joins it together. That merged data then gets submitted.

```
var oParent = event.target;
var oDataObjects = oParent.dataObjects;
if (oDataObjects == null)
    app.alert("This form has no attachments!");
else {
    var nChildren = oDataObjects.length;
    var oFirstChild = oParent.openDataObject(oDataObjects[0].name);
    var oSubmitData = oFirstChild.xfa.data.nodes.item(0).clone(true);

     for (var iChild = 1; iChild < nChildren; iChild++) {
        var oNextChild = oParent.openDataObject(
            oDataObjects[iChild].name);

         oSubmitData.nodes.append(oNextChild.xfa.data.nodes.item(0));

         oNextChild.closeDoc();
    }
    oParent.submitForm({
    cURL: "http://www.example.com/cgi-bin/myCGI.pl#FDF",

     cSubmitAs: "XML",

     oXML: oSubmitData
    });
    oFirstChild.closeDoc();
}
```

Here, dataObjects and openDataObject are exercised alongside properties and methods belonging to the XFA object.

Example 6 (Acrobat 7.0)

Sends the active document out as a PDF. cPermID, cInstID and cUsageRights all come into play in this script.

```
this.submitForm({
    cUrl: myURL,
    cSubmitAs: "PDF",
    cPermID: someDoc.docID[0],
    cInstID: someDoc.docID[1],
    cUsageRights: submitFormUsageRights.RMA });
```

### syncAnnotScan

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Ensures that, by the moment this method hands back control, every annotation has already been scanned.

Displaying or working with the document's annotations as a whole depends on all of them having been found first. Because scanning is expensive, a background routine ordinarily sweeps each page during idle moments hunting for annotations. A good deal of annotation behavior still functions smoothly before that background sweep has gathered the complete annotation list.

Call this method whenever you need the full set of annotations.

See also getAnnots.

Example: Hold until the full annotation scan finishes, then fetch the document's annotation array and order it by author.

That second line stays on hold until syncAnnotScan comes back, and that return happens only once the document's annotation scan has run to completion.

```
this.syncAnnotScan();
annots = this.getAnnots({nSortBy:ANSB_Author});
// Now, do something with the annotations.
```

### timestampSign

Version (Key)

Save-Prefs

Security

Product

10.0

D

Yes

All

| --- | --- | --- | --- |

Applies a timestamp that stays invisible to a document.

Parameters

Parameter

Description

oSig

(optional) The signature engine object. Leave this out and the built-in default signature engine handles it.

cDIPath

(optional) Where on disk the signed file should be written. Omit it, and the file overwrites itself in place.

bUI

(optional) Pass TRUE to permit UI interaction. FALSE is acceptable as long as a path is provided. FALSE is the default.

| --- | --- |

Returns

TRUE when the signing went through.

Example:

```
var myEngine = security.getHandler( "Adobe.PPKLite" );
// Note that login is not required

this.timestampSign({
    oSig:myEngine,
    cDIPath:"/c/temp/TSsigSign.pdf",
    bUI:false
});
```

### validatePreflightAuditTrail

Version (Key)

Save-Prefs

Security

Product

9.0

D

No

Acrobat Pro only

| --- | --- | --- | --- |

Checks the validity of the embedded audit trail currently present.

Returns

How valid the embedded audit trail currently is. The validity codes are.

Value

Description

-1

Not a signature field.

0

The signature is blank.

1

Unknown status.

2

The signature is invalid.

3

The signature of the document is valid but the identity of signer could not be verified.

4

The signature of the document is valid and the identity of signer is valid.

| --- | --- |
