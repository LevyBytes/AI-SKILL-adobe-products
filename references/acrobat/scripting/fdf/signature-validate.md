# signatureValidate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All but Reader |

Checks an FDF object's signature and hands back a SignatureInfo object that reports the signature's properties.

Parameters

| Parameter | Description |
| --- | --- |
| oSig | (optional) The security handler enlisted to validate the signature. This may be a SecurityHandler object or else a generic object carrying the properties below:<br><br>oSecHdlr: The SecurityHandler object to use to validate this signature.<br><br>bAltSecHdlr: A Boolean. Set it true and a substitute security handler — picked according to the user's preference settings — is allowed to validate the signature. It defaults to false, which means validation falls to the security handler named by the signature's handlerName property. Supply oSecHdlr and this parameter is ignored. Leave oSig out entirely and validation again falls to the handler named by the signature's handlerName property. |
| bUI | (optional) Set true to permit the UI to appear, where needed, during validation of the data file. That UI can serve to pick a validation handler when none has been named. |

Returns

A SignatureInfo object. The signature status is described in status property.

Example: Open an FDF file, if signed, validate it the signature and return information to the console.

```javascript
fdf = app.openFDF("/c/temp/myDoc.fdf");
eng = security.getHandler( "Adobe.PPKLite" );
if (fdf.isSigned)
{
    var oSigInfo = fdf.signatureValidate({
        oSig: eng,
        bUI: true
    });
    console.println("Signature Status: " + oSigInfo.status);
    console.println("Description: " + oSigInfo.statusText);
} else {
    console.println("FDF not signed");
}
```
