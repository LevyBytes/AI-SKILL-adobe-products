# validatePreflightAuditTrail

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | D | No | Acrobat Pro only |

Checks the validity of the embedded audit trail currently present.

Returns

How valid the embedded audit trail currently is. The validity codes are.

| Value | Description |
| --- | --- |
| -1 | Not a signature field. |
| 0 | The signature is blank. |
| 1 | Unknown status. |
| 2 | The signature is invalid. |
| 3 | The signature of the document is valid but the identity of signer could not be verified. |
| 4 | The signature of the document is valid and the identity of signer is valid. |
