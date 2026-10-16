# CertificateSpecifier.url

Type: String. Access: R/W.

A URL usable for enrolling to get a new credential whenever no matching credential turns up.

One degenerate use of this property has the URL aiming at a web service that acts as a DigitalID store — say a signature web service suited to server-based signing. The URL then signals that any signer holding a DigitalID from that web service is acceptable for signing.

Whether this is required or optional is conveyed by the matching flag within the flags property.
