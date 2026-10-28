# setPasswordTimeout

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Fixes how many seconds may pass between signatures before the password lapses. The lone handler backing this method is Adobe.PPKLite, where a new user starts at a default timeout of 0 (the password is always required).

Parameters

| Parameter | Description |
| --- | --- |
| cPassword | The password it takes to set the timeout value. |
| iTimeout | How long the timeout runs, in seconds. Use 0 to always expire — that is, always require the password. Use 0x7FFFFFFF to never expire. |

Returns

Should the user still be logged out of the Adobe.PPKLite security handler, or should it fail for any other cause, an exception is thrown.

Example: Here the script logs in to the PPKLite security handler and pins the password timeout at 30 seconds. Once that timeout lapses — 30 seconds here — the signer has to hand over a password. While it has yet to lapse, no password is asked for.

```javascript
var ppklite= security.getHandler( "Adobe.PPKLite" );
ppklite.login( "dps017", "/d/profiles/DPSmith.pfx" );

 ppklite.setPasswordTimeout( "dps017", 30 );
```
