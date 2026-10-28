# CertificateSpecifier.flags

Type: Number. Access: R/W.

A collection of bit flags that govern which of this object's properties below are mandatory. Form the value as the bitwise OR of the values that follow, each switched on when its matching property is required:

1: subject

2: issuer

4: oid

8: subjectDN

16: Reserved

32: keyUsage

64: url\*

If this field is not present, all properties are optional.
