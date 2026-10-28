# newUser

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Backs enrollment with the Adobe.PPKLite and Adobe.PPKMS security handlers by minting a fresh self-sign credential.

Note

Overwriting a file that already exists is something this method will not let the user do.

Parameters

| Parameter | Description |
| --- | --- |
| cPassword | (optional) Whatever password is needed to reach the password-protected digital ID file. Adobe.PPKMS pays this parameter no mind. |
| cDIPath | (optional) Where the password-protected digital ID file sits, given as a device-independent path. Adobe.PPKMS pays this parameter no mind. - As of Acrobat 6.0, cDIPath has to be a safe path (see Safe path) and finish with the extension .pfx. |
| oRDN | The relative distinguished name (RDN), given as an RDN object, that carries the issuer or subject name for a certificate. Only cn is required. Should the country c appear, it must run two characters under the ISO 3166 standard (say, "US"). |
| oCPS | (optional, Acrobat 6.0) A generic object holding certificate policy information slated for the Certificate Policy extension of the certificate. The object's properties are: - oid is required and points to the certificate policy object identifier. - url (optional) is a URL leading to fuller information about the policy the certificate was issued under - notice (optional) is a trimmed-down version of that information, tucked into the certificate. |
| bUI | (optional, Acrobat 6.0) Set true to let the user interface drive enrollment. Every security handler backing this method backs this parameter. |
| cStore | (optional, Acrobat 7.0) A string naming the store where the minted credential must land. With the Adobe.PPKLite security handler, the legal store identifiers are "PKCS12" and "MSCAPI". Drop this parameter while supplying cDIPath and the credential lands in a PKCS#12 file; otherwise it lands in the CAPI store. |

Returns

true on success; on failure it throws an exception.

Example 1: Mint a new PPKLite self-sign credential (Acrobat 5.0 syntax)

```javascript
var ppklite = security.getHandler(security.PPKLiteHandler);
var oRDN = { cn: "Fred NewUser", c: "US" };
var oCPS = {oid: "1.2.3.4.5",
    url: "http://www.example.com/mycps.html",
    notice: "This is a self generated certificate, hence the "
        + "recipient must verify it's authenticity through an out "
        + "of band mechanism" };
ppklite.newUser( "testtest", "/d/temp/FredNewUser.pfx", oRDN, oCPS);

// Alternate generic object syntax, allowing additional parameters
var oParams = {
    cPassword : "myPassword",
    cDIPath : "/d/temp/FredNewUser.pfx",
    oRDN : oRDN,
    oCPS : oCPS,
    bUI : false
};
ppklite.newUser( oParams );
```

Example 2: Pull a certificate out of an already-signed field and build the RDN from it

```javascript
var f = this.getField( "mySignature" );
f.signatureValidate();
var sigInfo = f.signatureInfo();
var certs = sigInfo.certificates;
var oSubjectDN = certs[0].subjectDN;

ppklite.newUser({
    cPassword: "dps017",
    cDIPath: "/c/temp/DPSmith.pfx",
    oRDN: oSubjectDN
});
```
