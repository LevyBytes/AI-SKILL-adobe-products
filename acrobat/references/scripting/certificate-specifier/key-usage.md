# CertificateSpecifier.keyUsage

Type: Object. Access: R/W.

(Acrobat 8.0) An array of integers, each one naming an acceptable key-usage extension the signing certificate is required to carry.

Build each integer this way:

Starting at the least significant bit, every key-usage type (as defined in RFC 3280) takes up two bits:

digitalSignature(bits 2,1),

nonRepudiation(4,3)

keyEncipherment(6,5)

dataEncipherment(8,7)

keyAgreement(10,9)

keyCertSign(12,11)

cRLSign(14,13)

encipherOnly(16,15)

decipherOnly(18,17)

The value of the two bits have the following semantics:

00: the corresponding keyUsage must not be set

01: the corresponding keyUsage must be set

10 and 11: the state of the corresponding keyUsage doesn’t matter.

For example, if it is required that the key-usage type digitalSignature be set and the state of all other key-usage types do not matter, then the corresponding integer would be 0x7FFFFFFD. That is, to represent digitalSignature, set 01 for bits 2 and 1 respectively, and set 11 for all other key-usage types.

Whether this counts as a required constraint is signaled by the matching flag within the flags property.
