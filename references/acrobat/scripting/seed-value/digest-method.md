# SeedValue.digestMethod

Type: Array of strings. Access: R/W.

(Acrobat 8) A roster of digest methods that are acceptable for use during signing. Permitted string values are SHA1, SHA256, SHA384, SHA512, MD5, and RIPEMD160.

Note

This applies solely when the DigitalID holds RSA public/private keys. Should it instead hold DSA public/private keys, the value stays fixed at SHA1.

Whether this counts as a required constraint is signaled by the flags property.
