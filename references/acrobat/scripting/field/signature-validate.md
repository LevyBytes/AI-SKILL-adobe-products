# signatureValidate

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Checks a signature field’s signature and hands back its validity state. How long this runs, and how heavy the computation gets, depends on which signature handler signed the signature — it can be slow.

Note

Calling this method carries no timing restrictions. That said, the oSig parameter is not always on hand. Consult security. getHandler for the specifics.

Parameters

| Parameter | Description |
| --- | --- |
| oSig | (optional) The security handler that validates the signature. You pass either a SecurityHandler object or a SignatureParameters object here. When this handler goes unspecified, the method falls back on whichever security handler the signature’s handlerName property points to. |
| bUI | (optional, Acrobat 6.0) When true, the UI is permitted to appear during validation should that prove necessary. That UI can serve to pick a validation handler when none has been named. It defaults to false. |

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

| oSecHdlr | The security handler object to use to validate this signature. |
| --- | --- |
| bAltSecHdlr | When true, validation may fall to an alternate security handler picked according to the user’s preference settings. The default, false, routes validation through the security handler named by the signature’s handlerName property instead. Supplying oSecHdlr makes this parameter moot. |

Example: Check a signature’s validity and write the outcome out to the console.

```javascript
var f = this.getField("Signature1") // Get signature field
var status = f.signatureValidate();
var sigInfo = f.signatureInfo();
if ( status < 3 )
     var msg = "Signature not valid! " + sigInfo.statusText;
else
    var msg = "Signature valid! " + sigInfo.statusText;
app.alert(msg);
```
