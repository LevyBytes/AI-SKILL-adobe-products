# streamDecode

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Decodes the oStream object under the encoding type named by cEncoder, handing back a decoded ReadStream object. Its common use is reaching data that came back from a SOAP method already encoded in Base64 or hex.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.streamDecode (see Net methods).

Parameters

| Parameter | Description |
| --- | --- |
| oStream | A stream object to decode with the named encoding type. |
| cEncoder | Allowed values for this string are “hex” (hex-encoded) and “base64” (Base 64-encoded). |

Returns

ReadStream object
