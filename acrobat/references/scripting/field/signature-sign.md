# signatureSign

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | Requires digital signature rights |

Applies a signature to the field through the security handler you name. Consult security. getHandler and securityHandler. login as well.

Note

Execution of this method is restricted to a batch, console, or application initialization event. Refer to Privileged context. A treatment of JavaScript events lives in the event object.

A signature field that already carries a signature cannot be re-signed. To wipe signature fields clean, call resetForm.

Parameters

| Parameter | Description |
| --- | --- |
| oSig | Names the SecurityHandler object that performs the signing. An exception is raised when the handler you pass cannot perform signing. Certain security handlers demand that the user log in first before any signing happens. When oSig is omitted, the handler gets chosen from user preferences, or by querying the user if bUI is true. |
| oInfo | (optional) A SignatureInfo object that lists the writable properties belonging to the signature. Consult signatureInfo as well. |
| cDIPath | (optional) The device-independent path naming where the file is saved once the signature has been applied. When left out, the file goes back to wherever it originally lived. |
| bUI | (optional, Acrobat 6.0) A Boolean controlling whether the security handler surfaces its user interface during signing. When true, the signing dialog boxes pick up oInfo and cDIPath as their defaults. When false (the default), no user interface appears and signing proceeds silently. |
| cLegalAttest | (optional, Acrobat 6.0) A string you may supply while building a certification signature. A certification signature is one whose SignatureInfo object carries an mdp property set to anything besides allowAll. As such a signature is produced, the document gets scanned for legal warnings, and any found are baked into the document. To learn which legal warnings turn up, a caller first invokes the Doc getLegalWarnings method. Should warnings end up embedded, the author can attach an attestation explaining why those warnings apply to the document. |

Returns

true if the signature was applied successfully, false otherwise.

Example 1: Sign the “Signature” field with the PPKLite signature handler:

Use your own signing profile and credentials. The surrounding reference explains the optional signing metadata; the password shown in the source is illustrative.

```javascript
var myEngine = security.getHandler( "Adobe.PPKLite" );
myEngine.login( "dps017", "/c/profile/dps.pfx" );
var f = this.getField("Signature");

// Sign the field
f.signatureSign( myEngine,
    {   password: "dps017",             // provide password
        location: "San Jose, CA",       // .
        reason: "I am approving this document",
        contactInfo: "dpsmith@example.com",
        appearance: "Fancy"});
```

Note

A password appears in the example above. Whether that was actually needed hinges on whether the Password Timeout had lapsed. You can drive the Password Timeout from a script through securityHandler.setPasswordTimeout.

Example 2: Sign an certification signature field.

```javascript
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
