# SeedValue.version

Type: Number. Access: R/W.

The lowest version number the signature handler must have to sign this signature field. Valid values are 1 and 2. With 1, the parser has to recognize every seed value dictionary entry laid out in PDF 1.5. With 2, it has to recognize every seed value dictionary entry laid out in PDF 1.7 and earlier.

Whether this counts as a required constraint is signaled by the flags property.

Note

In the PDF Reference at version 1.6 and below, the V entry — the key tied to the version parameter — is mistakenly listed as an integer type; in fact this entry is of type real.
