# addRecipientListCryptFilter

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Attaches a crypt filter to the document. Encrypting Data objects is what the crypt filter handles.

See also the cCryptFilter parameter of the importDataObject, createDataObject, and setDataObjectContents methods.

Note

Execution is restricted to a batch, an application initialization, or a console event. See also Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cCryptFilter | The crypt filter's language-independent name. Reuse this very name for the cCryptFilter parameter of the Doc methods importDataObject, createDataObject, and setDataObjectContents. |

Note

On Acrobat 7.0, cCryptFilter has to equal DefEmbeddedFile ; on every other Acrobat version, any string serves as cCryptFilter.

oGroup

A Group-object array naming the recipients the data should be encrypted for.

Example: The script below encrypts the present document and tucks it inside a PDF document.

```javascript
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
