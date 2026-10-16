# status and idValidity properties

Codes that the SignatureInfo Object returns through its status and idValidity properties appear in the table below.

| Status code | Description |
| --- | --- |
| -1 | Not a signature field. |
| 0 | Signature is blank or unsigned. |
| 1 | Unknown status. This occurs if the signature has not yet been validated; for example, if the document has not completed downloading over a network connection. |
| 2 | Signature is invalid. |
| 3 | Signature is valid but the identity of the signer could not be verified. |
| 4 | Signature is valid and the identity of the signer is valid. |
