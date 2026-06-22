# Doc (part 5)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Doc and Doc.Media APIs — Doc

Example: Encrypt every string and stream the document holds. The resulting file stays openable in Acrobat 5.0 and later releases:

```
var sh = security.getHandler( "Adobe.PPKMS" );
var dir = sh.directories[0];
var dc = dir.connect();

dc.setOutputFields({oFields:["certificates"]});
var importantUsers = dc.search({oParams:{lastName:"Smith"}});
var otherUsers = dc.search({oParams: {lastName:"Jones" }});

this.encryptForRecipients({
    oGroups :
    [
        {userEntities:importantUsers,permissions:{allowAll:true }},
        {userEntities: otherUsers, permissions:{allowPrinting:"highQuality"}}
    ],
    bMetaData : true
});
```

### encryptUsingPolicy

Version (Key)

Save-Prefs

Security

Product

7.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Applies encryption to the document by way of a chosen policy object and handler. The call can prompt the user and may end up generating a new security policy.

Note

Only a batch, console, or application initialization event can run this method. Refer also to Privileged context.

Parameters

Parameter

Description

oPolicy

The policy object that governs the document’s encryption. It might be a SecurityPolicy object handed back by chooseSecurityPolicy or getSecurityPolicies. Alternatively, supply a generic object whose policyId property is set. Passing a predefined policy ID pulls in and applies the matching policy; passing an unrecognized one yields an error. One predefined policy ID behaves specially: setting policyId to “adobe_secure_for_recipients” prompts the Adobe LiveCycle Policy Server to build a fresh policy. (Publishing requires a configured Policy Server.)

An error comes back if this special policy ID is paired with a null oGroups.

oGroups

(optional) An array of Group objects the handler is to apply alongside the policy. Precisely what happens hinges on both the chosen policy and the handler in play. Permission data may ride along inside the Group object; whether it gets honored depends on the policy and its companion security handler. The default value is null.

oHandler

(optional) The SecurityHandler object used for encryption. A mismatch between this object and the handler name in the oPolicy object causes failure. Leave it out and the handler’s default object steps in. With the APS security handler, you can spin up a new SecurityHandler in advance, authenticate through the login call to a server Acrobat is not set up for, and then feed that SecurityHandler in via oHandler — opening the door to policies absent from the server Acrobat targets. With the PPKLite security handler, you could likewise build a SecurityHandler ahead of time, open a digital ID file Acrobat is not configured with through the login call, and pass it in via oHandler — letting you tap certificates held in that digital ID file but not in Acrobat.

bUI

(optional) When true, the interface may appear (say, for authentication). When false, no interface shows. An error returns if interaction becomes necessary yet stays disallowed. The default value is false.

| --- | --- |

Returns

What comes back is a SecurityPolicyResults object, carrying the properties below.

Property

Type

Description

errorCode

Integer

The error code handed back by the handler that implements the policy. Three outcomes are possible:

0 = Success.

errorText is not defined.

unknownRecipients may be defined.

policyApplied is defined.

1 = Failure.

errorText is defined.

unknownRecipients may be defined.

policyApplied is not defined.

2 = Abort, the user aborted the process.

errorText is not defined.

unknownRecipients is not defined.

policyApplied is not defined.

errorText

String

The localized description of the error, when present. Consult errorCode for the conditions under which it is set.

policyApplied

Object

The SecurityPolicy object that was applied, when present. Where the supplied policy was “adobe_secure_for_recipients”, the call minted a new policy and the matching policy object surfaces here. Consult errorCode for the conditions under which it is set.

unknownRecipients

Recipients object

Recipients that were supplied but could not be honored while applying the policy, when present. Consult errorCode for the conditions under which it is set.

| --- | --- | --- |

Example 1: Apply encryption to a just-created document by way of a policy you pick.

```
var doc = app.newDoc();
var policy = security.chooseSecurityPolicy();
var results = doc.encryptUsingPolicy( { oPolicy: policy } );
if ( results.errorCode == 0)
    console.println("The policy applied was: " + results.policyApplied.name);
```

Example 2: Encrypt a newly created document using a template policy. (A LiveCycle Policy Server must be configured for publishing before running this example.)

```
var doc = app.newDoc();
var groups = [ { userEntities: [{email:"jdoe@example.com"},

     {email:"bsmith@example.com"} ]}
];
var policy = { policyId: "adobe_secure_for_recipients" };
var results = doc.encryptUsingPolicy({
    oPolicy: policy,
    oGroups: groups,
    bUI: true
});
if ( results.errorCode == 0)
    console.println("The policy applied was: "
        + results.policyApplied.name);
```

### exportAsFDF

Version (Key)

Save-Prefs

Security

Product

4.0

No

Yes

F

| --- | --- | --- | --- |

Writes the form fields out to the local hard drive as an FDF file.

Note

Whenever the cPath parameter is given, batch and console events are the only contexts in which this method may run. Refer also to Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

Parameter

Description

bAllFields

(optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out.

bNoPassword

(optional) When true (the default), text fields whose password flag is set are kept out of the exported FDF file.

aFields

(optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the FDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields (refer to the example below).

bFlags

(optional) When true, field flags get written into the FDF file produced. False is the default.

cPath

(optional) A string giving the device-independent path for the file. That path may be taken relative to where the current document sits. Drop the parameter and a dialog box lets the user pick the file. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .fdf extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete.

bAnnotations

(optional, Acrobat 6.0) When true, annotations get written into the FDF file produced. False is the default.

| --- | --- |

Example 1: Send out the whole form — empty fields and all — together with flags.

```
this.exportAsFDF(true, true, null, true);
```

Example 2: Send out the name subtree without flags.

```
this.exportAsFDF(false, true, "name");
```

A shortcut for exporting an entire subtree is what this example demonstrates. Handing “name” to the aFields parameter causes fields like “name.title”, “name.first”, “name.middle”, and “name.last” to export.

### exportAsFDFStr

Version (Key)

Save-Prefs

Security

Product

8.0

No

No

All

| --- | --- | --- | --- |

Produces the very results the doc.exportAsFDF method would, except it hands them back as a string rather than writing a file.

Parameters

Parameter

Description

bAllFields

(optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out.

bNoPassword

(optional) When true (the default), text fields whose password flag is set are kept out of the exported FDF file.

aFields

(optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the FDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields (refer to the example below).

bFlags

(optional) When true, field flags get written into the FDF file produced. False is the default.

bAnnotations

This has to stay false — its default — because annotations get no support.

cHRef

If you provide it, its value lands as the source or target file inside the returned FDF expression (that is, the value carried by the FDF dictionary’s F key).

| --- | --- |

Returns

The file contents the doc.exportAsFDF method would have produced, delivered as a string. When cHRef is provided, it lands as the value of the F key inside the FDF dictionary. Leave it out and the F key carries whatever value doc.exportAsFDF would generate.

Example: Pull the FirstName, LastName and Address fields back as an FDF-format string of form data.

```
var cFDF = this.exportAsFDFStr({
   aFields: ["FirstName", "LastName", "Address"],
   cHRef: "http://www.example.com/formcatalog/ThisFormName.pdf"
});
```

### exportAsText

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

F

| --- | --- | --- | --- |

Writes the form fields out to a local hard disk as a tab-delimited text file. That text file abides by the conventions Microsoft Excel sets. Notably, exportAsText deals correctly with quotes and with multiline text fields.

Two lines get written to the text file: the first is a tab-delimited roster of the names of the fields named by aFields, and the second is a tab-delimited roster of those fields’ values.

Note

Whenever the cPath parameter is given, this method may run only during a batch or console event. Refer also to Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

Parameter

Description

bNoPassword

(optional) When true (the default), text fields whose password flag is set are kept out of the exported text file.

aFields

(optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes.

cPath

(optional) A string giving the device-independent path for the file. That path may be taken relative to where the current document sits. Drop the parameter and a dialog box lets the user pick the file. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .txt extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete.

| --- | --- |

Example: Run the script below from the console to write every field out to a tab-delimited file:

```
this.exportAsText();
```

When a tab-delimited file needs to carry more than a single data line, consult getDataObjectContents

### exportAsXFDF

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

F

| --- | --- | --- | --- |

Writes the form fields out to the local hard drive as an XFDF file.

Acrobat form data takes an XML form in XFDF. Refer to the document XML Form Data Format Specification.

A matching import counterpart to this method exists: importAnXFDF.

Note

Whenever the cPath parameter is given, batch and console events are the only contexts in which this method may run. See Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

Parameter

Description

bAllFields

(optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out.

bNoPassword

(optional) When true (the default), text fields whose password flag is set are kept out of the exported XFDF.

aFields

(optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the XFDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields.

cPath

(optional) A string giving the device-independent path for the file. That path may be taken relative to where the current document sits. Drop the parameter and a dialog box lets the user pick the file. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .xfdf extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete.

bAnnotations

(optional, Acrobat 6.0) When true, annotations get written into the XFDF file produced. False is the default.

| --- | --- |

### exportAsXFDFStr

Version (Key)

Save-Prefs

Security

Product

8.0

No

No

All

| --- | --- | --- | --- |

Produces the very results the doc.exportAsXFDF method would, except it hands them back as a string rather than writing a file.

Parameters

Parameter

Description

bAllFields

(optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out.

bNoPassword

(optional) When true (the default), text fields whose password flag is set are kept out of the exported XFDF file.

aFields

(optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the XFDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields.

bAnnotations

This has to stay false — its default — because annotations get no support.

cHRef

If you provide it, its value lands as the source or target file inside the returned XFDF expression (that is, the value of the href attribute on the f element that is a child of the xfdf element).

| --- | --- |

Returns

The file contents the doc.exportAsXFDF method would have produced, delivered as a string. When cHRef is provided, it lands as the value of the href attribute on the f element child of the xfdf element. Leave it out and that f element’s href attribute carries whatever value doc.exportAsXFDF would generate.

Example: Pull the values of the FirstName, LastName and Address form fields back as an XFDF-format string.

```
var cXFDF = this.exportAsXFDFStr({
   aFields: ["FirstName", "LastName", "Address"],
   cHRef: "http://www.example.com/formcatalog/ThisFormName.pdf"
});
```

### exportDataObject

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Pulls the named data object out to a file outside the document.

Kindred objects, properties, and methods are dataObjects, openDataObject, createDataObject, removeDataObject, importDataObject, getDataObjectContents, and setDataObjectContents, and the data object.

Note

From Acrobat 6.0 on, supplying a non-null cDIPath parameter triggers a NotAllowedError (refer to Error object) exception and the method fails.

Should cDIPath be left out of the call, a file selection dialog box appears so the user can choose where to save the embedded data object.

Parameters

Parameter

Description

cName

Which data object, by name, gets pulled out.

cDIPath

(optional) A device-independent path that the data object is extracted to. This path can be absolute or taken relative to the current document. Omit it and the user is asked to name a save location. - (Acrobat 6.0) Support for this parameter has ended and it should be avoided. Review the security notes above.

bAllowAuth

(optional, Acrobat 6.0) When true, a dialog box collects the user’s authorization. Authorization can be needed if the encryptForRecipients method had encrypted the data object. Setting bAllowAuth to true is what permits authorization dialog boxes. The default value is false.

nLaunch

(optional, Acrobat 6.0) nLaunch decides whether the file is launched, that is opened, once saved. A launch can mean firing up an external application when the file is not a PDF. The values of nLaunch run as follows: - A value of 0 keeps the file from launching after the save. - A value of 1 saves the file and then launches it. Launching raises a security alert warning for the user when the file is not a PDF. The user is asked for a save path. - A value of 2 saves the file and then launches it. Launching raises a security alert warning for the user when the file is not a PDF. Here a temporary path serves and the user is not asked for a save path. Acrobat deletes the temporary file it creates when the application shuts down. The default value is 0.

| --- | --- |

Example 1: Ask the user where, and to which file, the extraction should go.

```
this.exportDataObject("MyData");
```

Example 2 (Acrobat 6.0)

Pull out a PDF document and open it up in the viewer.

```
this.exportDataObject({ cName: "MyPDF.pdf", nLaunch: 2 });
```

Example 3: For a file attachment brought in through the importDataObject method, the cName parameter of that method sets the value of the attachment’s Data.name property. Attaching a file through the UI, by contrast, names it automatically. Such attachments pick up the running names “Untitled Object”, “Untitled Object 2”, “Untitled Object 3”, and so on.

Exporting a file attached via the UI means first locating the attachment’s name. The code below exports whichever file the UI attached last, if there is one.

```
var d = this.dataObjects;
if ( d == null ) console.println("No file attachments");
else {
    for ( var i = d.length - 1; i>=0; i--)
        if ( d[i].name.indexOf("Untitled Object") != -1 ) break;
    if ( i != -1 ) this.exportDataObject(d[i].name);
    else console.println("No attachment was embedded by UI");
}
```

### exportXFAData

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

F

| --- | --- | --- | --- |

Draws out the document’s XFA data, if there is any, and writes it to an XDP file.

Note

To export XFA data from Adobe Reader, the document is required to carry export form rights.

Whenever the cPath parameter is given, batch, console, and menu events are the only contexts in which this method may run. See Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

Parameter

Description

cPath

(optional) A device-independent path for the file. The path may be taken relative to the document. Omit this parameter and a dialog box lets the user pick the file. These conditions must hold for the path: - It has to be a safe path (refer to Safe path). - When bXDP is true, the file name must carry an .xdp extension. - When bXDP is false, the file name must carry an .xml extension. Failing these conditions, this method raises a NotAllowedError (refer to Error object) exception.

bXDP

(optional) When true (the default), the data goes out in XDP format. Otherwise it goes out as plain XML data.

aPackets

(optional) An array of strings naming which packets the XDP export includes. This parameter matters only when bXDP is true. The allowed strings are: template datasets stylesheet xfdf sourceSet pdf config _ Naming pdf embeds the PDF file; otherwise the XDP file carries only a link to it. Naming xfdf brings annotations into the XDP file (since that packet relies on XFDF format). The _ entry pulls every packet into the XDP file. Even so, the pdf packet defaults to being included by reference . Embedding the PDF file inside the XDP file requires naming pdf among the packets outright. - (Save rights required) Exporting in XDP format from Adobe Reader calls for document save rights solely when pdf is named explicitly. This parameter defaults to: ["datasets", "xfdf"].

| --- | --- |

Example: Export XFA data. Every packet figures in the following example; the PDF document, though, is referenced rather than embedded:

```
this.exportXFAData({
    cPath: "/c/temp/myData.xdp",
    bXDP: true,
    aPackets: ["*"]
})
```

Here every packet figures in, and this time the PDF document is embedded inside the XDP file.

```
this.exportXFAData({
    cPath: "/c/temp/myData.xdp",
    bXDP: true,
    aPackets: ["*","pdf"]
})
```

### extractPages

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Builds a fresh document out of pages lifted from the current one. Leave the page range unspecified and the method lifts every page in the document.

Compare deletePages, insertPages, and replacePages.

Note

Whenever the cPath parameter is given, this method may run only during a batch and console event, or by way of an external call (OLE, for instance). See Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

Parameter

Description

nStart

(optional) A 0-based index marking where the range of pages to lift from the source document begins. Give only nStart and the range collapses to the single page nStart names.

nEnd

(optional) A 0-based index marking where the range of pages to lift from the source document ends. Give only nEnd and the range runs from 0 through nEnd.

cPath

(optional) The device-independent path the new document is saved to. The path name may be taken relative to where the current document sits. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .pdf extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete.

| --- | --- |

Returns

With cPath left unspecified, the Doc for the new document comes back; otherwise the return is the null object.

Example: The batch sequence below walks each selected file, lifts out every page, and saves each one into a folder under a unique name. It might serve, say, when a client’s one-page bills come off an application bundled together in a single PDF file. The client wants the pages split apart for distribution or for separate print runs.
