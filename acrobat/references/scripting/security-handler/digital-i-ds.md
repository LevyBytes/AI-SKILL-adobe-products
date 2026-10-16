# digitalIDs

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | Yes | All | Object | R |

Holds the certificates tied to the digital IDs this security handler currently has selected.

What comes back is a generic object carrying these properties:

| Property | Type | Version (Key) | Description |
| --- | --- | --- | --- |
| oEndUserSignCert | Certificate object | 6.0 | For signing, this SecurityHandler object turns to the certificate tied to the digital IDs presently selected. With nothing selected, the property reads undefined. |
| oEndUserCryptCert | Certificate object | 6.0 | When this SecurityHandler object encrypts a document, it relies on the certificate tied to the digital IDs presently selected. With nothing selected, the property reads undefined. |
| certs | Array of Certificate objects | 6.0 | Every digital ID available to this SecurityHandler object has a matching certificate, and they arrive here as an array. |
| stores | Array of Strings | 6.0 | One string per Certificate object, each naming the store that holds the digital ID. The exact string is the security handler's call. With Adobe.PPKLite the permitted entries are 'PKCS12' and 'MSCAPI'. |

Every digital ID sitting in Password-protected digital ID files — PKCS#12 as well as APF — is handed back by the Adobe.PPKLite security handler, and on Windows it adds in IDs kept in the Windows (MSCAPI) store.

The user-interface can set both oEndUserSignCert and oEndUserCryptCert. On top of that, the login method can set oEndUserSignCert. The upshot: oEndUserCryptCert surfaces only when the Security Handler object came from getHandler with bUIEngine turned on.

Example: Write out to a file the certificate tied to the digital IDs presently selected.

```javascript
var sh = security.getHandler( "Adobe.PPKMS", true );
var ids = sh.digitalIDs;
var oCert = ids.oEndUserSignCert;
security.exportToFile( oCert, "/c/MySigningCert.cer" );
```
