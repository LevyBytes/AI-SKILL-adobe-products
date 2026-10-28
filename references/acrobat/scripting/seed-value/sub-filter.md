# SeedValue.subFilter

Type: Array of Strings. Access: R/W.

An array listing the signature formats that are acceptable. For the known formats, see the Signature Info object's subFilter property.

Whichever name appears earliest in the array while matching an encoding the signature handler supports is the encoding that ends up being used to sign. Where subFilter is given and the flags property marks this entry as a required constraint, the earliest matching encodings must be used for signing, or signing must not occur. Where the flags property marks it an optional constraint, the earliest matching encoding should be used if available; failing that, a different encoding may be used.
