# JavaScript APIs — DirConnection

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | All |

A live connection to a directory — a store of user information that includes public-key certificates — is what this object represents. You open such connections through the connect method on the Directory object. One named directory may hold several connections open simultaneously. Every DirConnection object is required to support all the properties and methods documented here, except where noted otherwise.

Note

Since this object comes only from a Directory object, it inherits that object's security restrictions. That makes the DirConnection object reachable solely during batch, console, and application initialization, Adobe Reader included. See also Privileged context.
