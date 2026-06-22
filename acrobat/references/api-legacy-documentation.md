# Authentication, Pdf Accessibility Auto Tag Api

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Authentication — How to get started?; Introduction — PDF Embed API for viewing and collaboration within your web pages; PDF Services API Licensing — Paid programs.

## Authentication — How to get started?

**STEP 1: Get Credentials -** An Adobe-provided credential is needed before you can invoke PDF Services API. To obtain one, [click here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) and run through the workflow. Make sure you copy the credential values and stash them somewhere secure.

**Validity term:** Your credential's associated certificate stays valid for one year. That said, you can just generate a fresh credential or apply a new certificate to the existing one from the [Document Cloud Developer Console](https://developer.adobe.com/console/).

**STEP 2: Generate JWT -** Take the credential you made in STEP-1 and use it to produce a signed JSON Web Token (JWT). JWT can be generated in either of these two ways:

**• Using Adobe IO Console:**

Goto [Document Cloud Developer Console](https://developer.adobe.com/console/) > Select your newly created Integration > Click on "Service Account (JWT)" > Goto "Generate JWT" tab.

Paste your private.key (from the Credentials zip downloaded in STEP-1) > Click on "Generate token".

Save the Generated JWT and Sample cURL command to retrieve access_token in STEP-3.

**• Using JWT Libraries:** You can find the steps for generating the JWT with libraries referenced here.

Grab [sample code](https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/samples/#sample-code) in whatever programming language you prefer to build the JWT. When generating the JWT, apply the metascope noted here.

**STEP 3: Retrieve Access Token -** To authorize the request, the PDF Services APIs need an access_token. Take the "Exchange JWT" API from the Postman Collection, supply your client_id, client_secret (found in the pdfservices-api-credentials.json file inside the Credentials zip downloaded in STEP-1) and the JWT you generated above to obtain the access_token — or simply run the saved Sample cURL command from STEP-2 to get it.

To learn how the request must be shaped to fetch the access_token, follow this link [How to retrieve Access Token](https://developer.adobe.com/developer-console/docs/guides/#!AdobeDocs/adobeio-auth/master/JWT/JWT.md#exchanging-jwt-to-retrieve-an-access-token)?

## Introduction — PDF Embed API for viewing and collaboration within your web pages

Only a few lines of JavaScript are needed for the [PDF Embed API](api-pdf-embed-api.md) to bring PDF viewing into any web application. A variety of embed modes makes it simple to back different views, spanning full browser, boxed containers, and in line. Collaboration on documents comes from support for commenting, drawing, highlighting, and text editing tools. Meanwhile, analytics insights open the door to embedding dynamic interactivity that lifts end-user experiences — chats, prompts, and other event triggers fired by PDF viewing activity.

### Introduction — PDF Services API to automate for your document workflows

Through the [PDF Services API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/legacy-documentation/pdf-services-api/index.md) you get many operations for manipulating documents programmatically and automating all sorts of document workflows. It's easy to spin up a PDF from a dynamic HTML report, apply a password so the document can't be opened without authorization, shrink its size so it attaches cleanly to an email, or pull out text plus tables, images and document structure that power downstream solutions.

On top of that, there's the ability to compress or linearize a document for quicker web viewing, plus inserting, reordering, rotating, replacing, and deleting pages within documents.

Bundled with the PDF Services API are ready-to-use code samples for Java, Node.js and .NET, along with a [Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api)

On top of that, the PDF Services API shows up on [Power Automate](https://docs.microsoft.com/en-us/power-automate/), where easy-to-integrate Power Automate connectors are available.

### Introduction — Document Generation API for automating document workflows

Serving as a cloud-based web service, the [Document Generation API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/legacy-documentation/document-generation-api/index.md) lets you generate high fidelity PDF and Word documents fed by dynamic data inputs. With Document Generation API in hand, merging your data(e.g. JSON file) into Word templates yields dynamic documents — think contracts and agreements, invoices, proposals, reports, forms, branded marketing documents and more.

Pull Document Generation API into any application using the [PDFServices SDK](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/legacy-documentation/pdf-services-api/index.md#sdk) for Node.js, .Net, and Java. [Start with a Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api)

## PDF Services API Licensing — Paid programs

Licensing for the Adobe PDF Services API is metered by the Document Transaction (formerly the PDF Transaction). What it keys off is twofold — that first endpoint request (i.e., API call) together with the digital output — and every operation is laid out in the table further down. Content limits are in force, and examples accompany them to keep things clear.

A bigger processing quota comes with paid credentials, which call for a separate written agreement. For purchase options and more detail, take a look at our [pricing page](https://developer.adobe.com/document-services/pricing/main/).

The Operations listed below that yield a Document are tallied against these page limits:

The Operations listed below that yield a Document are tallied against these page limits:

- Extract PDF Operation: up to 5 pages per Document Transaction
- All other Operations: up to 50 pages per Document Transaction

### Metrics

| Operation | Capability | Metric |
| --- | --- | --- |
| Document Generation | Create PDF and Word documents from your own authored Microsoft Word templates and JSON data | Document Transaction |
| Extract PDF | Extracts PDF Elements such as text, images, tables in a structured format from a PDF. | Document Transaction (up to 5 pages) |
| Create | Create PDF from static/dynamic HTML, HTML(with inline CSS), HTML(specified via URL), MS Office and other supported file types. File types: BMP, DOC, DOCX, GIF, JPEG, JPG, PNG, PPT, PPTX, RTF, TIF, TIFF, TXT, XLS, XLSX, ZIP | Document Transaction |
| Export | Convert PDF to MS Office and other supported file types. File types: DOC, DOCX, JPEG, PNG, PPTX, RTF, XLSX | Document Transaction |
| Combine | Combine multiple PDFs or pages in PDFs to a single PDF | Document Transaction |
| OCR | Convert scanned PDF to editable and searchable PDF | Document Transaction |
| Compress | Reduce the size of a PDF | Document Transaction |
| Protect | Set user password in a PDF to prevent others from opening and viewing the Document | Document Transaction |
| Remove Password | Remove password security from a PDF document. This can only be accomplished using the owner password of the document, which must be passed in the operation. | Document Transaction |
| Linearize | Optimize a PDF for [Fast Web View](https://helpx.adobe.com/acrobat/using/optimizing-pdfs-acrobat-pro.html#EnableFastWebViewinaPDF) | Document Transaction |
| Split | Split a PDF document into multiple smaller PDFs | Document Transaction |
| Insert Pages | Insert one or more pages from different PDFs into a PDF | Document Transaction |
| Replace Pages | Replace one or more pages in a single PDF from pages in other PDFs | Document Transaction |
| Delete Pages | Delete one or more pages in a single PDF | Document Transaction |
| Rotate Pages | Rotate one or more pages in a single PDF | Document Transaction |
| Reorder Pages | Reorder one or more pages in a single PDF | Document Transaction |
| Get PDF Properties | Get XMP metadata properties of a PDF file | Document Transaction: the 50-page count does not apply |

### Examples

For Extract PDF the document count behind Document Transactions is rounded up in 5-page increments, while for the other PDF Tools it rounds up in 50-page increments.

| Operation | Example | Calculation |
| --- | --- | --- |
| Document Generation | Generating a fifteen-page PDF Document from a two-page Microsoft Word template and 1MB JSON file consumes one Document Transaction | 1 (Operation: Document Generation) x 1 (Document) = 1 Document Transaction |
| Extract PDF | Extracting PDF Elements from an 8 page PDF Document consumes two Document Transactions | 1 (Operation: Extract PDF) x 2 (5 page document) = 2 Document Transactions |
| Create, Export | Converting ten single page Word Documents into ten PDF Documents consumes ten Document Transactions. | 1 (Operation: create) x 10 (documents) = 10 Document Transactions |
| Combine | Combining six different PDF Documents into a single 250 page PDF Document consumes five Document Transactions. | 1 (Operation: combine) x 5 (50 page documents) = 5 Document Transactions |
| OCR | Running OCR on a single 50 page document consumes one Document Transaction | 1 (Operation: OCR) x 1 (50 page document) = 1 Document Transaction |
| Compress, Protect | Setting password protection for a single PDF document consumes one Document Transaction | 1 (Operation: protect) x 1 (document) = 1 Document Transaction |
| Linearize | Optimizing one PDF document with three pages will consume one Document Transaction. | 1 (Operation: Linearize) x 1 (document) = 1 Document Transaction |
| Insert, replace, rotate, reorder, delete pages | Inserting ten pages into a 100 page PDF document consumes three Document Transactions. | 1 (Operation: Insert) x 3 (50-page documents) = 2 Document Transactions |
| Create + Reorder | Converting a 10 page Word Document into a single PDF and then reordering five of the pages in the same PDF Document consumes two Document Transactions. | 1 (Operation: create) x 1 (document) + 1 (Operation: reorder) x 1 (document) = 2 Document Transactions |
| Combine + Rotate + OCR | Combining three PDF Documents into a single 30 page PDF, then rotating two pages of the PDF, and then running OCR on the PDF consumes three Document Transactions. | 1 (Operation: combine) x 1 (document) + 1 (Operation: rotate) x 1 (document) + 1 (Operation: OCR) x 1 (document) = 3 Document Transactions |
| Replace + Delete + Export | Replacing seven pages in a single 45 page PDF document, then deleting three pages on the same PDF document, and finally exporting the PDF document to a PPT document will consume three Document Transactions. | 1 (Operation: replace) x 1 (document) + 1 (Operation: delete) x 1 (document) + 1 (Operation: export) x 1 (document) = 3 Document Transactions |
| Create + Combine + Protect | Creating a 10 page PDF document from an HTML page, then combining the PDF into four other 5 page PDF documents, and finally password protecting all four PDF documents will consume nine Document Transactions. | 1 (Operation: create) x 1 (document) + 1 (Operation: combine) x 4 (documents) + 1 (Operation: export) x 4 (documents) = 9 Document Transactions |

### Usage limits

Operation metrics are subject to a handful of usage limits. Any files sent in for processing that go past the content limits listed below will not succeed and will return an error message.

| Usage limit | Value |
| --- | --- |
| Document limit (combine, insert, replace, split) | 20 |
| Document file size | 100MB |
| Output images per Document Transaction (export) | 50 |
| Page limit (OCR)\* | 100 |
| Page limit(Non-Scanned - Extract API)\* | 400 |
| JSON file size (Document Generation and HTML to PDF) | 10MB |
| Maximum Requests Per Minute | 25 RPM |

_When a document packs in many tables, its page limit can drop below these values._

## Licensing Metrics & Free Tier

So you can explore its great features without paying anything, the PDF Services API includes a Free Tier. Those on the Free Tier receive free credentials covering 500 Document Transactions per month. What counts as a Document Transaction rests on the initial endpoint request (i.e., API call) plus the digital output. The tables above spell out the licensing metrics in detail.

Billing is figured on a per Document Transaction basis.

Example 1:

- Turning a ten-page Word document into a PDF uses 1 Document Transaction from the trial quota.
- 1 (Operation: convert) x 1 (document) = 1 Document Transaction

Example 2:

- Merging 20 single page documents into one PDF and then running OCR on that PDF uses 2 Document Transactions from the trial quota.
- 1 (Operation: combine) x 1 (document) + 1 (Operation: OCR) x 1 (document) = 2 Document Transactions

With this ample supply of processing power, you should be able to get going on the easy-to-use APIs for very little outlay.

A bigger processing quota comes with paid credentials, which call for a separate written agreement. For purchase options and more detail, take a look at our [pricing page](https://developer.adobe.com/document-services/pricing/main/).

## See also

- [Delete Pages](api-delete-pages.md)
- [Insert Pages](api-insert-pages.md)
- [Replace Pages](api-replace-pages.md)
