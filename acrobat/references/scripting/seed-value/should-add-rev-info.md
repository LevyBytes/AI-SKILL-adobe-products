# SeedValue.shouldAddRevInfo

Type: Boolean. Access: R/W.

(Acrobat 8) When set to true, directs the application to perform revocation checking on the signing certificate and its associated chains, folding all that revocation data into the signature itself.

Pertinent only when subFilter is adbe.pkcs7.detached or adbe.pkcs7.sha1, and inapplicable to adbe.x509.rsa_sha1. So if subFilter is adbe.x509.rsa_sha1 and revocation information is required, the signing operation fails.

Where shouldAddRevInfo is true and the flags property marks this a required constraint, the work just described has to succeed; if it cannot, signing must fail.

The default value is false.
