Use [PDF Properties](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.pdfproperties) to inspect a PDF's encryption and permission settings. In the REST job's completed response, read `metadata.security_info.permissions`; encryption details are its sibling `metadata.security_info.encryption`.

This reduced response shows permission fields within their enclosing objects:

```json
{
  "status": "done",
  "metadata": {
    "security_info": {
      "permissions": {
        "assistive_technology": false,
        "form_filling": false,
        "copying": false,
        "page_extraction": false,
        "document_assembly": false,
        "commenting": false,
        "printing": "none",
        "editing": false
      }
    }
  }
}
```

`printing` is a string; the seven other fields shown are Booleans. Do not coerce `printing` to Boolean: the nonempty string `"none"` does not grant printing. Inspect the actual returned fields rather than assuming a missing field grants permission. The [job-status contract](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.pdfproperties.jobstatus) defines the REST envelope; SDK result objects can expose different accessors.

The permissions correspond to the [Acrobat Security dialog](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/no-permission.png). Apply the [operation-specific restrictions](the-effect-of-pdf-permissions-on-adobe-pdf-services-api.md); inspecting permissions does not remove them. For authorized removal, follow the [password selection and request requirements](user-password-protection.md).
