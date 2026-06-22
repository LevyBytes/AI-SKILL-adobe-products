# Field (part 5)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — Field

Example 3: Pins the signing handler to PPKLite and forces the signer’s certificate to be issued by caCert. Because both are required seed values, the signing operation aborts whenever either of those constraints goes unmet.

```
var caCert = security.importFromFile("Certificate", "/C/temp/CA.cer");
f.signatureSetSeedValue({
    filter: "Adobe.PPKLite",
    certspec: {
        issuer: [caCert],
        url: "http://www.example.com/enroll.html",
        flags : 2
    },
    flags: 1
});
```

### signatureSign

Version (Key)

Save-Prefs

Security

Product

5.0

D

Yes

Requires digital signature rights

| --- | --- | --- | --- |

Applies a signature to the field through the security handler you name. Consult security. getHandler and securityHandler. login as well.

Note

Execution of this method is restricted to a batch, console, or application initialization event. Refer to Privileged context. A treatment of JavaScript events lives in the event object.

A signature field that already carries a signature cannot be re-signed. To wipe signature fields clean, call resetForm.

Parameters

Parameter

Description

oSig

Names the SecurityHandler object that performs the signing. An exception is raised when the handler you pass cannot perform signing. Certain security handlers demand that the user log in first before any signing happens. When oSig is omitted, the handler gets chosen from user preferences, or by querying the user if bUI is true.

oInfo

(optional) A SignatureInfo object that lists the writable properties belonging to the signature. Consult signatureInfo as well.

cDIPath

(optional) The device-independent path naming where the file is saved once the signature has been applied. When left out, the file goes back to wherever it originally lived.

bUI

(optional, Acrobat 6.0) A Boolean controlling whether the security handler surfaces its user interface during signing. When true, the signing dialog boxes pick up oInfo and cDIPath as their defaults. When false (the default), no user interface appears and signing proceeds silently.

cLegalAttest

(optional, Acrobat 6.0) A string you may supply while building a certification signature. A certification signature is one whose SignatureInfo object carries an mdp property set to anything besides allowAll. As such a signature is produced, the document gets scanned for legal warnings, and any found are baked into the document. To learn which legal warnings turn up, a caller first invokes the Doc getLegalWarnings method. Should warnings end up embedded, the author can attach an attestation explaining why those warnings apply to the document.

| --- | --- |

Returns

true if the signature was applied successfully, false otherwise.

Example 1: Sign the “Signature” field with the PPKLite signature handler:

```
var myEngine = security.getHandler( "Adobe.PPKLite" );
myEngine.login( "dps017", "/c/profile/dps.pfx" );
var f = this.getField("Signature");

// Sign the field
f.signatureSign( myEngine,
    {   password: "dps017",             // provide password
        location: "San Jose, CA",       // .
        .. see note below
        reason: "I am approving this document",
        contactInfo: "dpsmith@example.com",
        appearance: "Fancy"});
```

Note

A password appears in the example above. Whether that was actually needed hinges on whether the Password Timeout had lapsed. You can drive the Password Timeout from a script through securityHandler.setPasswordTimeout.

Example 2: Sign an certification signature field.

```
var myEngine = security.getHandler( "Adobe.PPKLite" );
myEngine.login( "dps017", "/c/profile/dps.pfx" );

var f = this.getField( "AuthorSigFieldName" );
var s = { reason: "I am the author of this document",
        mdp: "allowNone" };
f.signatureSign({
    oSig: myEngine,
    oInfo: s,
    bUI: false,
    cLegalAttest: "To reduce file size, fonts are not embedded."
});
```

### signatureValidate

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Checks a signature field’s signature and hands back its validity state. How long this runs, and how heavy the computation gets, depends on which signature handler signed the signature — it can be slow.

Note

Calling this method carries no timing restrictions. That said, the oSig parameter is not always on hand. Consult security. getHandler for the specifics.

Parameters

Parameter

Description

oSig

(optional) The security handler that validates the signature. You pass either a SecurityHandler object or a SignatureParameters object here. When this handler goes unspecified, the method falls back on whichever security handler the signature’s handlerName property points to.

bUI

(optional, Acrobat 6.0) When true, the UI is permitted to appear during validation should that prove necessary. That UI can serve to pick a validation handler when none has been named. It defaults to false.

| --- | --- |

Returns

The validity status of the signature. Validity values are:

-1: Not a signature field

0: Signature is blank

1: Unknown status

2: Signature is invalid

3: Signature of document is valid, identity of signer could not be verified

4: Signature of document is valid and identity of signer is valid.

See the signVisible and statusText properties of the SignatureInfo object.

SignatureParameters object

A plain object whose properties below dictate which security handlers signatureValidate draws on for validation:

oSecHdlr

The security handler object to use to validate this signature.

bAltSecHdlr

When true, validation may fall to an alternate security handler picked according to the user’s preference settings. The default, false, routes validation through the security handler named by the signature’s handlerName property instead. Supplying oSecHdlr makes this parameter moot.

| --- | --- |

Example: Check a signature’s validity and write the outcome out to the console.

```
var f = this.getField("Signature1") // Get signature field
var status = f.signatureValidate();
var sigInfo = f.signatureInfo();
if ( status < 3 )
     var msg = "Signature not valid! " + sigInfo.statusText;
else
    var msg = "Signature valid! " + sigInfo.statusText;
app.alert(msg);
```
