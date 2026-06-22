# Releasenotes (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Change history

| Change | Language | Description |
| --- | --- | --- |
| Changed | Node JS | Enhanced Document Generation interface to support Json Object and Json array as Fragments data. |

### 2.2.0 (January, 2022; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | Adding support for [fragments](api-document-generation-api-2.md) feature. |
| Changed | Java | Java SDK is enabled to connect to Internet through Proxy where proxy server settings can be set via client config. |
| Changed | All | PDF Extract API bug fixes and stability release. |

### Adobe Document Generation Server Side Release (10 January, 2022; server side release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | Adding support for [fragments](api-document-generation-api-2.md) feature. |
| Changed | All | Adding support to add [images](api-document-generation-api-5.md) (only base64 encoded image data was supported initially) through publicly accessible URLs. |
| Changed | All | Adding support for primitive type [list](api-document-generation-api-5.md) ### Adobe Document Generation Server Side Release (14 December, 2021; server side release) Change Language Description |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New | All | Adding support for additional tags (`<strong>` and `<em>`) in [styling and formatting](api-document-generation-api-4.md) feature. |
| New | All | Support for [dynamic table constructs](api-document-generation-api.md). |

### Extract PDF Server Side Release (15 November, 2021; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | The option to include styling information is generally available. |
| Changed | All | Identification of scanned content is now performed at the page level rather than per document. |
| Changed | All | Bug fixes and stability improvements. |

### Adobe Document Generation Server Side Release (20 October, 2021; server side release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | HTML [styling and formatting](api-document-generation-api-4.md) support in json data. |
| New | All | Support for [horizontal tables](api-document-generation-api-5.md). |
| New | All | Support for SVG images. |

### Extract PDF Server Side Release (29 September, 2021; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | Support for more descriptive error messages and PDF Extract API bug fixes. |

### 2.1.0 (September, 2021; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | .NET | Extract operation is now available in .NET SDK as part of **Adobe.PDFServicesSDK**. |
| New | Java, Node JS, .NET | Support for fetching the properties of a PDF file - metadata including page count, PDF version, file size, compliance levels, font info, permissions and more. |
| New | Java, Node JS, .NET | Support for returning the list of images besides returning ZIP of all image files. |
| New | Java, Node JS, .NET | Support for converting the content hosted on a URL to PDF files. |
| New | Java, Node JS, .NET | Support for converting an HTML file containing inline CSS to PDF files. |

### Extract PDF Server Side Release (26 Aug, 2021; server side release)

| Change | Language | Description |
| --- | --- | --- |
| Changed | All | PDF Extract API bug fixes and stability release |

### 2.0.0 (May, 2021; major release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | Extract operation released as part of **pdfservices-sdk** |
| Changed | Java | artifactId changed from pdftools-sdk to **pdfservices-sdk** |
| Changed | Node JS | NPM package name changed from @adobe/documentservices-pdftools-node-sdk to **@adobe/pdfservices-node-sdk** |
| Changed | Node JS | For HTML to PDF Conversions, the PageLayout object interface is moved inside html object. |
| Changed | .NET | Nuget package name changed from Adobe.DocumentServices.PDFTools to **Adobe.PDFServicesSDK** |
| New | Python | Python SDK “pdfservices-sdk” v1.0 is released for ML Services which consists of ExtractPDFOperation currently. |

### 1.3.0 (March, 2021; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | Added a feature to the create PDF operation to specify the document language of input file. |
| New | All | Added Document Merge Operation that merges a Word based document template with the input JSON data to generate the output document in either Word or PDF format. |
| New | All | Added support to get the developer error codes in exceptions. |
| New | All | Added a feature to the compress PDF operation to reduce the file size based on compression level. |

### 1.2.0 (September, 2020; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | Added more features to the password-protect operation to secure a PDF with an owner password and to enable users to restrict features like printing, editing and copying. |
| New | All | Added an operation for removing password protection from a PDF. |
| New | All | Added a split PDF operation that splits a PDF document into multiple smaller documents by simply specifying either the number of files, pages per file, or page ranges. |

### 1.1.0 (June, 2020; minor release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | Added a password-protect operation to securely open a PDF. |
| New | All | Added an operation for inserting a PDF file into an existing PDF. |
| New | All | Added a replace file operation which replaces a PDF with another. |
| New | All | Added an operation for deleting pages from a PDF. |
| New | All | Added a rotate page(s) operation for rotating one or more pages in a PDF. |
| New | All | Added reorder page(s) operation to support rearranging page(s) in a PDF. |
| New | All | Added a compress PDF operation to reduce a PDF file size. |
| New | All | Added a linearize operation to convert a PDF file into a web optimized PDF file for incremental access in network environments. |
| Changed | All | Changed the combine file limit from 12 to 20. |

### 1.0.0 (March, 2020; First major release)

| Change | Language | Description |
| --- | --- | --- |
| New | All | Added create PDF operation to create PDF from Office formats, image formats and HTML (doc, docx, ppt, pptx, xls, xlsx, txt, rtf, bmp, gif, tiff, jpeg, png). |
| New | All | Added export PDF operation to export PDF to Office formats and image formats (doc, docx, pptx, rtf, xlsx, jpeg, png). |
| New | All | Added combine PDF files operation. |
| New | All | Added an OCR operation to convert PDF files into a searchable PDF. |

## See also

- [Releasenotes](api-releasenotes-3.md)
