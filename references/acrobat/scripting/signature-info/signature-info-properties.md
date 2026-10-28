# SignatureInfo properties

These properties are defined by every handler.

| Property | Type | Access | Version (Key) | Description |
| --- | --- | --- | --- | --- |
| buildInfo | Object | R | 6.0 | An object bundling software build and version details for the signature. The technical note PDF Signature Build Dictionary Specification spells out its format. |
| date | Date object | R | 5.0 | When the signature was created — date and time — handed back as a JavaScript Date object. |
| dateTrusted | Boolean | R | 7.0 | A Boolean reporting whether the date traces to a trusted source. Absent this value, treat the date as coming from somewhere untrusted (the signer's computer system time, for instance). |
| digestMethod | String | R/W | 8.0 | Which digest method signing should use. Under Acrobat 8 the legal entries are SHA1, SHA256, SHA384, SHA512 and RIPEMD160. The caller had better be sure the signature handler at hand can back the chosen digest method. |
| handlerName | String | R | 5.0 | Carries the security handler's language-independent name, the one placed in the signature dictionary as the Filter attribute. As a rule this is the handler that built the signature, but it may instead point to whichever handler the creator wants applied during validation. |
| handlerUserName | String | R | 5.0 | The language-dependent name matching the security handler named by handlerName. You only get it while that named security handler is available. |
| handlerUIName | String | R | 5.0 | For the handler that handlerName points to, this holds the language-dependent name. It surfaces only when that handler happens to be available. |
| location | String | R/W | 5.0 | An optional location the user supplies when signing. It might be a real place (a city, say) or a hostname. |
| mdp | String | R/W | 6.0 | Either the Modification Detection and Prevention (MDP) setting under which the field or FDF object now being read was signed, or the MDP setting to apply at signing time. The values run:<br><br>allowNone allowAll default defaultAndComments<br><br>Turn to Modification Detection and Prevention (MDP) Values for the specifics. allowAll, the default, says MDP plays no part in the signature, which keeps this from being a certification signature. |
| name | String | R | 5.0 | The name of whoever created the signature. |
| numFieldsAltered | Number | R | 5.0 only | Deprecated. How many fields shifted between the prior signature and this one. Used only for signature fields.<br><br>As of Acrobat 7.0, lean on the Field object method signatureGetModifications instead. |
| numFieldsFilledIn | Number | R | 5.0 only | Deprecated. How many fields were filled-in between the prior signature and this one. Used only for signature fields.<br><br>As of Acrobat 7.0, lean on the Field object method signatureGetModifications instead. |
| numPagesAltered | Number | R | 5.0 only | Deprecated. How many pages shifted between the prior signature and this one. Used only for signature fields.<br><br>As of Acrobat 7.0, lean on the Field object method signatureGetModifications instead. |
| numRevisions | Number | R | 5.0 | How many revisions the document holds. Used only for signature fields. |
| reason | String | R/W | 5.0 | The reason for signing that the user supplies. |
| revision | Number | R | 5.0 | Which signature revision this signature field lines up with. Used only for signature fields. |
| sigValue | String | R | 7.0 | The signature's raw bytes, delivered as a hex encoded string. |
| status | Number | R | 5.0 | How valid the signature is, worked out during the most recent signatureValidate call.<br><br>For the matching return codes, look to the status property within the table status and idValidity properties. |
| statusText | String | R | 5.0 | The language-dependent text string, fit for user display, that spells out the signature validity status, worked out during the most recent signatureValidate call. |
| subFilter | String | R/W | 6.0 | Which format signing should use. The PDF Reference carries the full roster of supported values. For public key signatures the familiar entries take in adbe.pkcs7.sha1, adbe.pkcs7.detached, and adbe.x509.rsa_sha1. The caller had better know that a particular signature handler can back<br><br>this format. |
| timeStamp | String | W | 7.0 | Holds the address of the time-stamping server used to stamp the signature. Only http or https are accepted as the scheme and transport protocol when retrieving time stamps.<br><br>Writing is the only operation permitted on this property. When a time stamp is applied, validation sets dateTrusted to true (assuming the time stamp signature itself is trusted), and at that point verifyDate matches the signing date. |
| verifyDate | Date object | R | 7.0 | Records when the signature was signed, or, if validation has run, when it was verified.<br><br>A timestamped signature yields the signing date in verifyDate; without a timestamp, the verifying date is what you get instead.<br><br>A JavaScript Date object is what this property hands back. |
| verifyHandlerName | String | R | 6.0 | Carries the locale-neutral identifier of the security handler that checked this signature. Expect null here whenever validation has not run — that is, whenever status equals 1. |
| verifyHandlerUIName | String | R | 6.0 | Carries the locale-specific label that pairs with the handler named in verifyHandlerName. Expect null whenever validation has not run, that is, whenever status equals 1). |
