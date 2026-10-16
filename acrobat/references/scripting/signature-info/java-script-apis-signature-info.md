# JavaScript APIs — SignatureInfo

A generic JavaScript object that carries the properties of a digital signature. A handful of properties hold across all handlers, and more can be tacked on.

Field object methods signatureValidate and signatureInfo return the SignatureInfo object, and it is fed to the FDF object methods signatureSign and signatureValidate.

When you sign the object, the writable properties are yours to set.
