# Signatureinfo

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — SignatureInfo

A generic JavaScript object that carries the properties of a digital signature. A handful of properties hold across all handlers, and more can be tacked on.

Field object methods signatureValidate and signatureInfo return the SignatureInfo object, and it is fed to the FDF object methods signatureSign and signatureValidate.

When you sign the object, the writable properties are yours to set.

### SignatureInfo properties

These properties are defined by every handler.

Property

Type

Access

Version (Key)

Description

buildInfo

Object

R

6.0

An object bundling software build and version details for the signature. The technical note PDF Signature Build Dictionary Specification spells out its format.

date

Date object

R

5.0

When the signature was created — date and time — handed back as a JavaScript Date object.

dateTrusted

Boolean

R

7.0

A Boolean reporting whether the date traces to a trusted source. Absent this value, treat the date as coming from somewhere untrusted (the signer's computer system time, for instance).

digestMethod

String

R/W

8.0

Which digest method signing should use. Under Acrobat 8 the legal entries are SHA1, SHA256, SHA384, SHA512 and RIPEMD160. The caller had better be sure the signature handler at hand can back the chosen digest method.

handlerName

String

R

5.0

Carries the security handler's language-independent name, the one placed in the signature dictionary as the Filter attribute. As a rule this is the handler that built the signature, but it may instead point to whichever handler the creator wants applied during validation.

handlerUserName

String

R

5.0

The language-dependent name matching the security handler named by handlerName. You only get it while that named security handler is available.

handlerUIName

String

R

5.0

For the handler that handlerName points to, this holds the language-dependent name. It surfaces only when that handler happens to be available.

location

String

R/W

5.0

An optional location the user supplies when signing. It might be a real place (a city, say) or a hostname.

mdp

String

R/W

6.0

Either the Modification Detection and Prevention (MDP) setting under which the field or FDF object now being read was signed, or the MDP setting to apply at signing time. The values run:

allowNone allowAll default defaultAndComments

Turn to Modification Detection and Prevention (MDP) Values for the specifics. allowAll, the default, says MDP plays no part in the signature, which keeps this from being a certification signature.

name

String

R

5.0

The name of whoever created the signature.

numFieldsAltered

Number

R

5.0 only

Deprecated. How many fields shifted between the prior signature and this one. Used only for signature fields.

As of Acrobat 7.0, lean on the Field object method signatureGetModifications instead.

numFieldsFilledIn

Number

R

5.0 only

Deprecated. How many fields were filled-in between the prior signature and this one. Used only for signature fields.

As of Acrobat 7.0, lean on the Field object method signatureGetModifications instead.

numPagesAltered

Number

R

5.0 only

Deprecated. How many pages shifted between the prior signature and this one. Used only for signature fields.

As of Acrobat 7.0, lean on the Field object method signatureGetModifications instead.

numRevisions

Number

R

5.0

How many revisions the document holds. Used only for signature fields.

reason

String

R/W

5.0

The reason for signing that the user supplies.

revision

Number

R

5.0

Which signature revision this signature field lines up with. Used only for signature fields.

sigValue

String

R

7.0

The signature's raw bytes, delivered as a hex encoded string.

status

Number

R

5.0

How valid the signature is, worked out during the most recent signatureValidate call.

For the matching return codes, look to the status property within the table status and idValidity properties.

statusText

String

R

5.0

The language-dependent text string, fit for user display, that spells out the signature validity status, worked out during the most recent signatureValidate call.

subFilter

String

R/W

6.0

Which format signing should use. The PDF Reference carries the full roster of supported values. For public key signatures the familiar entries take in adbe.pkcs7.sha1, adbe.pkcs7.detached, and adbe.x509.rsa_sha1. The caller had better know that a particular signature handler can back

this format.

timeStamp

String

W

7.0

Holds the address of the time-stamping server used to stamp the signature. Only http or https are accepted as the scheme and transport protocol when retrieving time stamps.

Writing is the only operation permitted on this property. When a time stamp is applied, validation sets dateTrusted to true (assuming the time stamp signature itself is trusted), and at that point verifyDate matches the signing date.

verifyDate

Date object

R

7.0

Records when the signature was signed, or, if validation has run, when it was verified.

A timestamped signature yields the signing date in verifyDate; without a timestamp, the verifying date is what you get instead.

A JavaScript Date object is what this property hands back.

verifyHandlerName

String

R

6.0

Carries the locale-neutral identifier of the security handler that checked this signature. Expect null here whenever validation has not run — that is, whenever status equals 1.

verifyHandlerUIName

String

R

6.0

Carries the locale-specific label that pairs with the handler named in verifyHandlerName. Expect null whenever validation has not run, that is, whenever status equals 1).

| --- | --- | --- | --- | --- |

### SignatureInfo object public key security handler properties

These extra properties are available for definition by public key security handlers:

Property

Type

Access

Version (Key)

Description

appearance

String

W

5.0

Names the user-set appearance applied while signing this field. Because PPKLite and PPKMS rely on the standard appearance handler here, you can look up the appearance names under the signature appearance configuration dialog box of the Security user preferences.

Leaving it unset falls back to the Standard Text appearance. Applies solely to visible signature fields.

certificates

Array

R

5.0

Holds an ordered chain of certificates identifying the signer. Position zero is the signer's own certificate; the entries that follow trace the chain upward to the certificate authority that issued it. Only a single entry appears here when the certificate is self-signed.

contactInfo

String

R/W

5.0

Stores whatever contact details the user supplied for trust decisions. A phone number that document recipients can dial to reach the author is one example. Relying on this to establish trust does not scale well and is discouraged.

byteRange

Array

R

6.0

Lists, as numbers, exactly which bytes this signature covers.

docValidity

Number

R

6.0

Reports the validity of the signature's document byte range digest as of the most recent signatureValidate call. Every PDF document signature field signature carries a byte range digest.

Return codes are explained under Validity Values.

idPrivValidity

Number

R

6.0

Reports how valid the signer's identity is. The meaning is handler-dependent; consult Private Validity Values for the values the Adobe.PPKLite and Adobe.PPKMS handlers produce.

Until the signature has been validated this stays 0 — that is, whenever status equals 1.

idValidity

Number

R

6.0

Gives the validity of the signer's identity expressed as a number.

For the return codes, consult the idValidity property entry in the table status and idValidity properties.

objValidity

Number

R

6.0

Reports the validity of the signature's object digest as of the most recent signatureValidate call. In PDF documents, object digests are carried by signature field certification signatures and by document-level application rights signatures. Object digests sign every FDF file.

Return codes are explained under Validity Values.

revInfo

Object

R

7.0

Wraps two properties, CRL and OCSP, inside one generic object. Each is an array of hex-encoded strings, and every string holds the raw bytes of the revocation data applied when revocation-checking a certificate.

CRL strings stand for CRLs; OCSP strings stand for OCSP responses. Because this data can grow very large, these arrays fill only when the relevant application preference is enabled.

trustFlags

Number

R

6.0

Each bit here marks something the signer is trusted to do. Treat the value as meaningful only while status equals 4. The recipient's trust database — the Acrobat Address Book (Adobe.AAB), for instance — is where these settings come from. Bit assignments are:

1: Trusted for signatures

2: Trusted for certifying documents

3: Trusted for dynamic content such as multimedia

4: Adobe internal use

5: The JavaScript in the PDF file is trusted to operate outside the normal PDF restrictions

password

String

W

5.0

Supplies the authentication password needed to reach a private key earmarked for signing. Whether it is demanded at all depends on what the security handler's policies require.

| --- | --- | --- | --- | --- |

### status and idValidity properties

Codes that the SignatureInfo Object returns through its status and idValidity properties appear in the table below.

Status code

Description

-1

Not a signature field.

0

Signature is blank or unsigned.

1

Unknown status. This occurs if the signature has not yet been validated; for example, if the document has not completed downloading over a network connection.

2

Signature is invalid.

3

Signature is valid but the identity of the signer could not be verified.

4

Signature is valid and the identity of the signer is valid.

| --- | --- |

### Validity Values

The docValidity and objValidity properties hand back the codes below. (See SignatureInfo object public key security handler properties). Compared with the status property, they pin down the signature's validity at a finer grain.

Status code

Description

kDSSigValUnknown

Validity not yet determined.

kDSSigValUnknownTrouble

Validity could not be determined because of errors encountered during the validation process.

kDSSigValUnknownBytesNotReady

Validity could not be determined because all bytes are not available, for example, when viewing a file in a web browser. Even when bytes are not immediately available, this value may not be returned if the underlying implementation blocks when bytes are not ready. Adobe makes no commitment regarding whether validation checks will block or not block. However, the implementation in Acrobat 6.0 will block when validating docValidity and not block when validating objValidity.

kDSSigValInvalidTrouble

Validity for this digest was not computed because there were errors in the formatting or information contained in this signature. There is sufficient evidence to conclude that the signature is invalid.

kDSSigValUnused

The validity for this digest is not used (for example, no document validity if no byte range).

kDSSigValJustSigned

The signature was just signed, so it is implicitly valid.

kDSSigValFalse

The digest or validity is invalid.

kDSSigValTrue

The digest or validity is valid.

| --- | --- |

### Private Validity Values

Checking whether the signer's identity is valid depends on which handler performs the check. The value here can hold information worth knowing about an identity. Find the identity itself in the idPrivValidity property. Shown below are the values for the Adobe.PPKMS and Adobe.PPKLite security handlers. A matching idValidity value, shared across every handler, is also derived from this one.

Status Code

idValidity Mapping

Security Handler

Description

kIdUnknown

1 (unknown)

PPKMS, PPKLite

Validity not yet determined.

kIdTrouble

1 (unknown)

PPKMS, PPKLite

Could not determine validity because of errors, for example, internal errors, or could not build the chain, or could not check basic policy.

kIdInvalid

2 (invalid)

PPKMS, PPKLite

Certificate is invalid: not time nested, invalid signature, invalid/unsupported constraints, invalid extensions, chain is cyclic.

kIdNotTimeValid

2 (invalid)

PPKMS, PPKLite

Certificate is outside its time window (too early or too late).

kIdRevoked

2 (invalid)

PPKMS

Certificate has been revoked.

kIdUntrustedRoot

1 (unknown)

PPKMS, PPKLite

Certificate has an untrusted root certificate.

kIdBrokenChain

2 (invalid)

PPKMS, PPKLite

Could not build a certificate chain up to a self-signed root certificate.

kIdPathLenConstraint

2 (invalid)

PPKLite

Certificate chain has exceeded the specified length restriction. The restriction was specified in Basic Constraints extension of one of the certificates in the chain.

kIdCriticalExtension

1 (unknown)

PPKMS

One of the certificates in the chain has an unrecognized critical extension.

kIdJustSigned

4 (valid)

PPKMS, PPKLite

Just signed by user (similar to kIdIsSelf)

kIdAssumedValid

3 (idunknown)

PPKMS

Certificate is valid to a trusted root, but revocation could not be checked and was not required.

kIdIsSelf

4 (valid)

PPKMS, PPKLite

Certificate is my credential (no further checking was done).

kIdValid

4 (valid)

PPKMS, PPKLite

Certificate is valid to a trusted root (in the Windows or Acrobat Address Book).

kIdRevocationUnknown

?

PPKMS, PPKLite

Certificate is valid to a trusted root, but revocation could not be checked and was required by the user.

| --- | --- | --- | --- |

### Modification Detection and Prevention (MDP) Values

MDP settings govern which document edits may happen before a signature stops being valid. For signature fields, edits get logged outside the byte range and may cover changes saved incrementally into the document as well as in-memory changes made between opening a document and validating its signature. Only a document's first signature accepts MDP settings, and applying MDP produces a certification signature. One of these four values applies to MDP:

allowAll: Permit every change to a document with none of them voiding the signature. The upshot is that MDP goes unused for that signature. This matched how Acrobat 4.0 through 5.1 behaved.

allowNone: Block every document change unless the signature is voided. Be aware this also locks down the author's own signature.

default: Permit form field fill-in when the document contains form fields. Failing that, block any document change unless the signature is voided.

defaultAndComments: Permit form field fill-in when form fields exist in the document and allow annotations (comments) to be added, removed, or edited. Failing that, block any document change unless the signature is voided. Be aware that annotations can mask parts of a document and so alter how it looks on screen.
