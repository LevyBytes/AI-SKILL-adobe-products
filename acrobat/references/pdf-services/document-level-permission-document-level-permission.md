# Document Level Permission (_documentLevelPermission_)

Sets the DocMDP (i.e. Document Modification Detection and Prevention) permissions, which carry over onto the sealed document that is produced.

- `NO_CHANGES_ALLOWED` : Locks the document entirely; editing it in any way breaks the signature.
- `FORM_FILLING` : Lets the recipient fill forms, spawn page templates, and add approval signatures. When the caller leaves this unset, it is the value that applies.
- `FORM_FILLING_AND_ANNOTATIONS` : Everything `FORM_FILLING` permits, plus creating, removing, and editing annotations.

When Trusted Timestamping is in use, the Long Term Validation (LTV) data for Timestamp Certificates lands in the PDF only where Document Level Permission equals `FORM_FILLING` or `FORM_FILLING_AND_ANNOTATIONS`.
