# isLoggedIn

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | Yes | All | Boolean | R |

Comes back true while you are logged into this SecurityHandler object. Consult the login method.

How this property is decided varies by security handler. The Adobe.PPKLite handler reports true once a user is logged in to a profile file — also called a credential file, built as a PKCS#12 file. Adobe.PPKMS reports true at all times.

Example: A throwaway script that shows isLoggedIn in action.

```javascript
var ppklite = security.getHandler("Adobe.PPKLite", true);
console.println( "Is logged in = " + ppklite.isLoggedIn ); // False
ppklite.login( "dps017", "/C/signatures/DPSmith.pfx");
console.println( "Is logged in = " + ppklite.isLoggedIn ); // True
```
