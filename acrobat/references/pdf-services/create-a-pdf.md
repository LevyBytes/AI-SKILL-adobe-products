# Create a PDF

Reach for the example below when you need to turn Microsoft Office documents — Word, Excel, PowerPoint — and a range of [supported file formats](https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF) into PDFs. Although a .docx conversion is what gets shown, every format listed here works with the SDK:

- Microsoft Word (DOC, DOCX)
- Microsoft PowerPoint (PPT, PPTX)
- Microsoft Excel (XLS, XLSX)
- Text (TXT, RTF)
- Image (BMP, JPEG, GIF, TIFF, PNG)

When a Word or PowerPoint source carries an embedded TrueType font, that very same embedded TrueType font is preserved in the generated PDF.
See [Benefits of embedding custom fonts](https://support.microsoft.com/en-us/office/benefits-of-embedding-custom-fonts-cb3982aa-ea76-4323-b008-86670f222dbc#OfficeVersion=Windows) for the details.

Two situations cause us to refuse HTML-to-PDF requests that carry urls:

1. A scheme other than HTTPS is used.
2. A non-routable IP address is what the hostname points to — including any case where a redirect ultimately lands on such an address.

For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).
