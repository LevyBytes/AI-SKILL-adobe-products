# signatureSign

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader |

Applies a signature to the FDF object using the security object you name. An FDF object accepts only a single signature. The signing happens in memory, and the object is not written to disk on its own — invoke save afterward to persist the signed FDF object, and invoke signatureClear to wipe FDF signatures.

Parameters

| Parameter | Description |
| --- | --- |
| oSig | The SecurityHandler object enlisted to do the signing. As a rule a security object has to be initialized before it can sign anything. Whether your security handler can sign FDF files at all is something to confirm in its documentation; the SecurityHandler object's signFDF property reports whether a given security object is up to signing FDF files. |
| oInfo | (optional) A SignatureInfo object containing the writable properties of the signature. |
| nUI | (optional) Which kind of dialog box surfaces during signing. The values are:<br><br>0: Show no dialog box.<br><br>1: Show a simplified dialog box with no editable fields (fields can be provided in oInfo).<br><br>2: Show a more elaborate dialog box that includes editable fields for reason, location, and contact information. The default is 0. |
| cUISignTitle | (optional) The title to use for the sign dialog box. It is used only if nUI is non-zero. |
| cUISelectMsg | (optional) A message to display when a user must select a resource for signing, such as selecting a credential. It is used only when nUI is non-zero. |

Returns

true when the signature went on successfully; otherwise false.

Example: Open an existing FDF data file and sign.

```javascript
var eng = security.getHandler( "Adobe.PPKLite" );
eng.login("myPassword","/c/test/Acme.pfx");
var myFDF = app.openFDF( "/c/temp/myData.fdf" );
if( !myFDF.isSigned ) {
    myFDF.signatureSign({
        oSig: eng,
        nUI: 1,
        cUISignTitle: "Sign Embedded File FDF",
        cUISelectMsg: "Please select a Digital ID to use to "
            + "sign your embedded file FDF."
    });
    myFDF.save( "/c/temp/myData.fdf" );
};
```
