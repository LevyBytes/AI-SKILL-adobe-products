# Private Validity Values

Checking whether the signer's identity is valid depends on which handler performs the check. The value here can hold information worth knowing about an identity. Find the identity itself in the idPrivValidity property. Shown below are the values for the Adobe.PPKMS and Adobe.PPKLite security handlers. A matching idValidity value, shared across every handler, is also derived from this one.

| Status Code | idValidity Mapping | Security Handler | Description |
| --- | --- | --- | --- |
| kIdUnknown | 1 (unknown) | PPKMS, PPKLite | Validity not yet determined. |
| kIdTrouble | 1 (unknown) | PPKMS, PPKLite | Could not determine validity because of errors, for example, internal errors, or could not build the chain, or could not check basic policy. |
| kIdInvalid | 2 (invalid) | PPKMS, PPKLite | Certificate is invalid: not time nested, invalid signature, invalid/unsupported constraints, invalid extensions, chain is cyclic. |
| kIdNotTimeValid | 2 (invalid) | PPKMS, PPKLite | Certificate is outside its time window (too early or too late). |
| kIdRevoked | 2 (invalid) | PPKMS | Certificate has been revoked. |
| kIdUntrustedRoot | 1 (unknown) | PPKMS, PPKLite | Certificate has an untrusted root certificate. |
| kIdBrokenChain | 2 (invalid) | PPKMS, PPKLite | Could not build a certificate chain up to a self-signed root certificate. |
| kIdPathLenConstraint | 2 (invalid) | PPKLite | Certificate chain has exceeded the specified length restriction. The restriction was specified in Basic Constraints extension of one of the certificates in the chain. |
| kIdCriticalExtension | 1 (unknown) | PPKMS | One of the certificates in the chain has an unrecognized critical extension. |
| kIdJustSigned | 4 (valid) | PPKMS, PPKLite | Just signed by user (similar to kIdIsSelf) |
| kIdAssumedValid | 3 (idunknown) | PPKMS | Certificate is valid to a trusted root, but revocation could not be checked and was not required. |
| kIdIsSelf | 4 (valid) | PPKMS, PPKLite | Certificate is my credential (no further checking was done). |
| kIdValid | 4 (valid) | PPKMS, PPKLite | Certificate is valid to a trusted root (in the Windows or Acrobat Address Book). |
| kIdRevocationUnknown | ? | PPKMS, PPKLite | Certificate is valid to a trusted root, but revocation could not be checked and was required by the user. |
