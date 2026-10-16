# streamEncode

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

This function applies encoding to a stream object. It typically serves to ship data within a SOAP method when Base 64 or hex encoding is required.

Note

From Acrobat 8.0 onward this method is deprecated; fresh services ought to adopt Net.streamEncode (see Net methods).

Parameters

| Parameter | Description |
| --- | --- |
| oStream | A stream object to encode with the named encoding type. |
| cEncoder | A string naming the encoding type. Allowed values are “hex” (for hex-encoded) and “base64” (base 64-encoded). |

Returns

A ReadStream object carrying the chosen encoding.
