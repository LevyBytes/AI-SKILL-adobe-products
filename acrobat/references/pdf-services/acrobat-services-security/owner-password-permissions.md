# Processing PDF files that have restricted permissions (Owner Password)

Apart from the cases below, Acrobat Services cannot work with PDF files that carry any security setting permitting or denying functionality in conforming PDF readers.

**Extract API**: Extract API cannot work with PDF files whose security settings block content copying. In that case the call comes back with a statusCode of 400 and the errorCode '`DISQUALIFIED_PERMISSIONS`'.

[Figure: CopyNotAllowed](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/copy-not-allowed.png)

**PDF to Images**: PDF to Images API cannot work with PDF files whose security settings block content copying, page extraction, document assembly, or printing.
