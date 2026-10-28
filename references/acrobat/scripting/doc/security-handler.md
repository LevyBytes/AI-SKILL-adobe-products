# securityHandler

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | String | R |

The name of whichever security handler encrypted the document. When no handler applies, for instance on an unencrypted document, the value is null.

Example:

```javascript
console.println(this.securityHandler != null ?
    "This document is encrypted with " + this.securityHandler
    + " security." :   "This document is unencrypted.");
```

Were the document encrypted with the standard security handler, this script might print the following.

Reference data, output or notation; not an executable JavaScript program.

```text
This document is encrypted with Standard security.
```
