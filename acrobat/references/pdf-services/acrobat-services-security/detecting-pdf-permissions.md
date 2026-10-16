# Detecting PDF Permissions

When the password is known and the document owner has allowed it, run the [Remove Protection API](https://developer.adobe.com/document-services/docs/apis/#tag/Remove-Protection) to strip the security from those PDF files before handing them to one of the other Acrobat Services.

Where that isn't an option, developers can read the permissions on a PDF file with the [PDF Properties API](https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Properties). What PDF Properties returns is a JSON object holding a "security_info" key nested inside a "permissions" key. That JSON mirrors what shows up in the Security Tab of the Acrobat Document Properties dialog.

```yaml
"permissions":
  {
    "assistive_technology": false,
    "form_filling": false,
    "copying": false,
    "page_extraction": false,
    "document_assembly": false,
    "commenting": false,
    "printing": "none",
    "editing": false,
  }
```

[Figure: NoPermission](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/no-permission.png)
