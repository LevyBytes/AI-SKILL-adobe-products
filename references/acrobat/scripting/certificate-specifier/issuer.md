# CertificateSpecifier.issuer

Type: Array of Certificate objects. Access: R/W.

A roster of Certificate objects acceptable for signing. When given, the signing certificate has to be issued by a certificate that matches one of those in the array exactly. Whether this is required or optional is conveyed by the matching flag within the flags property.
