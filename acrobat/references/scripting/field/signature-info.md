# signatureInfo

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Hands back a SignatureInfo object holding the signature's properties, captured as a snapshot at the instant of the call. The security handler in use may tack on further properties unique to itself.

Note

This method carries no timing restrictions on when it may run. That said, the named security handler, oSig, will not necessarily be on hand at all times. Consult the security. getHandler method for specifics.

Certain properties of a signature handler — certificates among them, which belongs to the SignatureInfo object — can come back null until validation has occurred. For that reason, invoke signatureInfo once more after signatureValidate.

Parameters

| Parameter | Description |
| --- | --- |
| oSig | (optional) Which SecurityHandler object retrieves the signature properties. Leave it out and the security handler falls to the user preferences — typically whichever handler produced the signature. |

Returns

A SignatureInfo object carrying the signature's properties. The same kind of object also turns up when signing signature fields, when signing FDF objects, and with the FDF object's signatureValidate method.

Example: reach into a SignatureInfo object's properties.

```javascript
// Get all info
var f = getField( "Signature1" );
f.signatureValidate();
var s = f.signatureInfo();
console.println( "Signature Attributes:" );
for(i in s) console.println( i + " = " + s[i] );

// Get particular info
var f = this.getField("Signature1"); // uses the ppklite sig handler
var Info = f.signatureInfo();
// Some standard signatureInfo properties
console.println("name = " + Info.name);
console.println("reason = " + Info.reason);
console.println("date = " + Info.date);

// Additional signatureInfo properties from PPKLite
console.println("contact info = " + Info.contactInfo);

// Get the certificate; first (and only) one
var certificate = Info.certificates[0];

// Common name of the signer
console.println("subjectCN = " +  certificate.subjectCN);
console.println("serialNumber = " +  certificate.serialNumber);

// Display some information about the distinguished name of signer
console.println("subjectDN.cn = " + certificate.subjectDN.cn);
console.println("subjectDN.o = " +  certificate.subjectDN.o);
```
