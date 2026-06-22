# Limits

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Billing for the Adobe PDF Services API is metered in Document Transactions, a unit tied to the
first endpoint request (that is, the API call) together with the digital output produced; each
operation listed in the table below carries its own count. The usage caps that apply are spelled
out below with worked examples so the math is clear. None of these caps touch the PDF Embed API.

A greater processing quota comes with paid credentials, which means signing a separate written
agreement. For the available purchase options, consult the
[pricing page](https://developer.adobe.com/document-services/pricing/main#adobe-pdf-services-api).

When an operation below yields a Document, its Document Transactions are tallied against these page
thresholds: for Extract and PDF To Markdown, one Document Transaction covers up to 5 pages; Accessibility
Auto-Tag costs 10 Document Transactions for each page; Electronic Seal costs 10 Document Transactions for
each PDF; and every remaining operation counts one Document Transaction for up to 50 pages.

### Document Transaction Definitions

| OPERATION | CAPABILITY | METRIC |
| --- | --- | --- |
| Accessibility Auto-Tag | Tag the content in a PDF to improve accessibility | 10 Document Transactions (per page) |
| Electronic Seal | Applies an organizational seal to a PDF using a digital certificate | 10 Document Transactions (per PDF) |
| Document Generation | Create PDF and Word documents from your own authored Microsoft Word templates and JSON data | Document Transaction |
| Extract and PDF To Markdown | Extracts PDF Elements such as text, images, tables in a structured format from a PDF. | Document Transaction (per 5 pages) |
| Create | Create PDF from static/dynamic HTML, HTML(with inline CSS), HTML(specified via URL), MS Office and other supported file types. File types: BMP, DOC, DOCX, GIF, JPEG, JPG, MD, PNG, PPT, PPTX, RTF, TIF, TIFF, TXT, XLS, XLSX, ZIP | Document Transaction |
| Export | Convert PDF to MS Office and other supported file types. File types: DOC, DOCX, JPEG, PNG, PPTX, RTF, XLSX | Document Transaction |
| Combine | Combine multiple PDFs or pages in PDFs to a single PDF | Document Transaction |
| OCR | Convert scanned PDF to editable and searchable PDF | Document Transaction |
| Compress | Reduce the size of a PDF | Document Transaction |
| Protect | Set user password in a PDF to prevent others from opening and viewing the Document | Document Transaction: the 50-page count does not apply |
| Remove Password | Remove password security from a PDF document. This can only be accomplished using the owner password of the document, which must be passed in the operation. | Document Transaction: the 50-page count does not apply |
| Linearize | Optimize a PDF for [Fast Web View](https://helpx.adobe.com/acrobat/using/optimizing-pdfs-acrobat-pro.html#EnableFastWebViewinaPDF) | Document Transaction |
| Split | Split a PDF document into multiple smaller PDFs | Document Transaction |
| Insert Pages | Insert one or more pages from different PDFs into a PDF | Document Transaction |
| Replace Pages | Replace one or more pages in a single PDF from pages in other PDFs | Document Transaction |
| Delete Pages | Delete one or more pages in a single PDF | Document Transaction |
| Rotate Pages | Rotate one or more pages in a single PDF | Document Transaction |
| Reorder Pages | Reorder one or more pages in a single PDF | Document Transaction |
| Get PDF Properties | Get XMP metadata properties of a PDF file | Document Transaction: the 50-page count does not apply |
| Accessibility Checker | Check accessibility of a PDF and generate an accessibility report | Document Transaction: the 50-page count does not apply |
| Watermark | Add a watermark to specified pages in a PDF | Document Transaction |
| Export Form Data | Export PDF form data and return it as a JSON file | Document Transaction |
| Import Form Data | Import form data from a json file in a PDF | Document Transaction |

### Examples

| OPERATION | EXAMPLE | CALCULATION |
| --- | --- | --- |
| Document Generation | Generating a fifteen-page PDF Document from a two-page Microsoft Word template and 1MB JSON file consumes one Document Transaction. | 1 (Operation: Document Generation) x 1 (Document) = 1 Document Transaction |
| Accessibility Auto-Tag | Auto-tagging a five-page PDF consumes 50 Document Transactions. | 1 (Operation: Auto-Tag) X 1 (5-page document) = 50 Document Transactions |
| Electronic Seal | Sealing one PDF Document consumes 10 Document Transactions. | 1 (Operation: Electronic Sealing) X 1 (document) = 10 Document Transactions |
| Extract PDF and PDF To Markdown | Extracting PDF Elements from an 8-page PDF Document consumes two Document Transactions. | 1 (Operation: Extract PDF) x 2 (5-page document) = 2 Document Transactions |
| Create, Export | Converting ten single page Word Documents into ten PDF Documents consumes ten Document Transactions. | 1 (Operation: create) x 10 (documents) = 10 Document Transactions |
| Combine | Combining six different PDF Documents into a single 250-page PDF Document consumes five Document Transactions. | 1 (Operation: combine) x 5 (50-page documents) = 5 Document Transactions |
| OCR | Running OCR on a single 50-page document consumes one Document Transaction. | 1 (Operation: OCR) x 1 (50-page document) = 1 Document Transaction |
| Compress, Protect | Setting password protection for a single PDF document consumes one Document Transaction. | 1 (Operation: protect) x 1 (document) = 1 Document Transaction |
| Linearize | Optimizing one PDF document with three pages will consume one Document Transaction. | 1 (Operation: Linearize) x 1 (document) = 1 Document Transaction |
| Insert, replace, rotate, reorder, delete pages | Inserting ten pages into a 100-page PDF document consumes three Document Transactions. | 1 (Operation: Insert) x 3 (50-page documents) = 2 Document Transactions |
| Create + Reorder | Converting a 10-page Word Document into a single PDF and then reordering five of the pages in the same PDF Document consumes two Document Transactions. | 1 (Operation: create) x 1 (document) + 1 (Operation: reorder) x 1 (document) = 2 Document Transactions |
| Combine + Rotate + OCR | Combining three PDF Documents into a single 30-page PDF, then rotating two pages of the PDF, and then running OCR on the PDF consumes three Document Transactions. | 1 (Operation: combine) x 1 (document) + 1 (Operation: rotate) x 1 (document) + 1 (Operation: OCR) x 1 (document) = 3 Document Transactions |
| Replace + Delete + Export | Replacing seven pages in a single 45-page PDF document, then deleting three pages on the same PDF document, and finally exporting the PDF document to a PPT document will consume three Document Transactions. | 1 (Operation: replace) x 1 (document) + 1 (Operation: delete) x 1 (document) + 1 (Operation: export) x 1 (document) = 3 Document Transactions |
| Create + Combine + Protect | Creating a 10-page PDF document from an HTML page, then combining the PDF into four other 5-page PDF documents, and finally password protecting all four PDF documents will consume nine Document Transactions. | 1 (Operation: create) x 1 (document) + 1 (Operation: combine) x 4 (documents) + 1 (Operation: export) x 4 (documents) = 9 Document Transactions |

### Usage Limits

A handful of usage caps govern the PDF Services API and the operations beneath it, each keyed to a single
initial endpoint request. Any file you submit that goes past the caps listed here will be rejected and come
back as an error.

| USAGE LIMIT | VALUE |
| --- | --- |
| Document limit (Combine, Insert, Replace, Split) | 20 |
| File size (for all documents)\*\* | 100MB |
| Output images per Document Transaction (Export) | 50 |
| Page limit (Extract and PDF To Markdown)\* | 400 |
| Page limit (Accessibility Auto-Tag)\* | 200 |
| Page limit (Scanned - Extract, PDF To Markdown and Accessibility Auto-Tag)\* | 150 |
| JSON file size (Document Generation,HTML to PDF and Import PDFForm) | 10MB |
| Maximum Requests Per Minute | 100 RPM\*\* (Enterprise), 25 RPM (Free Tier) |

_Documents packed with lots of tables may hit a reduced page ceiling._

\*_Want to know how RPM or file size might scale within your ETLA? [Contact us](https://developer.adobe.com/document-services/pricing/contact/sales/)._

### Free Tier

To let you explore its capabilities without spending anything, the PDF Services API ships with a Free
Tier. Signing up for the Free Tier grants free credentials good for 500 Document Transactions each month.
Each Document Transaction is keyed to the first endpoint request (that is, the API call) plus the digital
output; the tables above lay out the licensing metrics in full.

Charges accrue one Document Transaction at a time.

Example 1:

- On March 20, you convert a ten-page Word document into PDF. This consumes 1 Document Transaction of the Free Tier quota, leaving you with 499 Document Transactions available for consumption through March 31.
  - 1 (Operation: convert) x 1 (document) = 1 Document Transaction On April 1, your Free Tier quota resets to 500 Document Transactions.

Example 2:

- Combining 20 single-page documents into one PDF and then running OCR on the PDF consumes 2 Document Transactions of the quota.
  - 1 (Operation: combine) x 1 (document) + 1 (Operation: OCR) x 1 (document) = 2 Document Transactions

With that much processing on the house, you should be able to spin up the straightforward APIs and start
building without putting much in.

A greater processing quota comes with paid credentials, which means signing a separate written agreement.
For the available purchase options, take a look at our
[pricing page](https://developer.adobe.com/document-services/pricing/main#adobe-pdf-services-api).

## See also

- [Delete Pages](api-delete-pages.md)
- [Insert Pages](api-insert-pages.md)
- [Replace Pages](api-replace-pages.md)
