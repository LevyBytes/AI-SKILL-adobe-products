# streamDigest

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Digests the oStream object under the encoding type named by cEncoder, returning a ReadStream object that holds the computed digest of oStream. It typically serves to compute a digest that confirms the original data stream's integrity, or that feeds a web service's authentication scheme.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.streamDigest (see Net methods).

Parameters

| Parameter | Description |
| --- | --- |
| oStream | A stream object whose digest is to be computed with the named message digest algorithm. |
| cEncoder | The digest algorithm to apply. cEncoder has to take one of these values:<br><br>StreamDigest.MD5: Digest the content using the MD5 Digest Algorithm (see RFC 1321).<br><br>StreamDigest.SHA1: Digest the content using the SHA-1 Digest Algorithm (see RFC 3174). |

Returns

A ReadStream object holding the stream's binary digest. Before it can serve as a string, convert the result into a text form such as Base64 or hex via SOAP.streamEncode.

Example: Turn a string into a stream first, then run streamDigest over it.

```javascript
var srcStm = SOAP.streamFromString("This is a string I want to digest");
var digest = SOAP.streamDigest(srcStm, StreamDigest.SHA1);
```
