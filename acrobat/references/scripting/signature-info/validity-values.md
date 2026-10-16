# Validity Values

The docValidity and objValidity properties hand back the codes below. (See SignatureInfo object public key security handler properties). Compared with the status property, they pin down the signature's validity at a finer grain.

| Status code | Description |
| --- | --- |
| kDSSigValUnknown | Validity not yet determined. |
| kDSSigValUnknownTrouble | Validity could not be determined because of errors encountered during the validation process. |
| kDSSigValUnknownBytesNotReady | Validity could not be determined because all bytes are not available, for example, when viewing a file in a web browser. Even when bytes are not immediately available, this value may not be returned if the underlying implementation blocks when bytes are not ready. Adobe makes no commitment regarding whether validation checks will block or not block. However, the implementation in Acrobat 6.0 will block when validating docValidity and not block when validating objValidity. |
| kDSSigValInvalidTrouble | Validity for this digest was not computed because there were errors in the formatting or information contained in this signature. There is sufficient evidence to conclude that the signature is invalid. |
| kDSSigValUnused | The validity for this digest is not used (for example, no document validity if no byte range). |
| kDSSigValJustSigned | The signature was just signed, so it is implicitly valid. |
| kDSSigValFalse | The digest or validity is invalid. |
| kDSSigValTrue | The digest or validity is valid. |
