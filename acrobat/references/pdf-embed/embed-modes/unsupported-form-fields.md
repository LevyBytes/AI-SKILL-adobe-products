# Unsupported form fields

As things stand in this release, the form fields below are not supported:

- XFA forms
- Digital Signature fields.
- Barcode fields.
- File picker text field
- RTF (rich text) text field
- Fields containing JavaScript or any kind of calculation and
  validation
- Text field and drop downs with some special and custom formats
- PDF Actions that includes button Submit scenarios (only button
  viewing is supported)

Once the API spots form fields it cannot support, a dialog surfaces over the rendered PDF:

[Figure: No Support for Form Fields message](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/formnosupport.png)
