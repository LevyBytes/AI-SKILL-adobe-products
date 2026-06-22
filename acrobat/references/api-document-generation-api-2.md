# Dcserviceslicensing, Fragments

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PDF Services API Licensing — Paid programs; Fragments.

## PDF Services API Licensing — Paid programs

Licensing for the Adobe PDF Services API is metered by Document Transaction (the former name was PDF Transactions), counted from the opening endpoint request — that is, the API call — together with the digital output, and each operation in the table that follows is spelled out below. Content limits are in force, and examples accompany them to keep things clear.

A larger processing quota comes with paid credentials, which call for signing a separate written agreement. For the ways you can buy, take a look at our
[pricing page](https://developer.adobe.com/document-services/pricing/main/).

For the Operations listed below that yield a Document, Document Transactions are tallied under these page limits:

For the Operations listed below that yield a Document, Document Transactions are tallied under these page limits:

- Extract and PDF To Markdown Operations: 1 Document Transaction for up to 5 pages
- Accessibility Auto-Tag Operation: 10 Document Transactions per page
- Electronic Seal Operation: 10 Document Transactions per PDF
- All other Operations: 1 Document Transaction for up to 50 pages

### Metrics

| Operation | Capability | Metric |
| --- | --- | --- |
| Accessibility Auto-Tag | Tag the content in a PDF to improve accessibility | 10 Document Transactions (per page) |
| Electronic Seal | Applies an organizational seal to a PDF using a digital certificate | 10 Document Transactions (per PDF) |
| Document Generation | Create PDF and Word documents from your own authored Microsoft Word templates and JSON data | Document Transaction |
| Extract and PDF To Markdown | Extracts PDF Elements such as text, images, tables in a structured format from a PDF. PDF To Markdown converts PDF to LLM-friendly Markdown. | Document Transaction (per 5 pages) |
| Create | Create PDF from static/dynamic HTML, HTML(with inline CSS), HTML(specified via URL), MS Office and other supported file types. File types: BMP, DOC, DOCX, GIF, JPEG, JPG, PNG, PPT, PPTX, RTF, TIF, TIFF, TXT, XLS, XLSX, ZIP | Document Transaction |
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

### Examples

For Extract PDF and PDF To Markdown the document tally used to figure Document Transactions rounds up in 5-page steps, while every other PDF Tool rounds up in 50-page steps.

| Operation | Example | Calculation |
| --- | --- | --- |
| Document Generation | Generating a fifteen-page PDF Document from a two-page Microsoft Word template and 1MB JSON file consumes one Document Transaction | 1 (Operation: Document Generation) x 1 (Document) = 1 Document Transaction |
| Accessibility Auto-Tag | Auto-tagging a five-page PDF consumes 50 Document Transactions. | 1 (Operation: Auto-Tag) x 5 (pages) = 50 Document Transactions |
| Electronic Seal | Sealing one PDF Document consumes 10 Document Transactions. | 1 (Operation: Electronic Sealing) x 1 (document) = 10 Document Transactions |
| Extract PDF and PDF To Markdown | Extracting PDF Elements or converting to Markdown from an 8-page PDF Document consumes two Document Transactions | 1 (Operation: Extract PDF or PDF To Markdown) x 2 (5-page document) = 2 Document Transactions |
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

A number of usage limits are tied to the operation metrics. Any file pushed through for processing that goes past the content limits listed below will not complete and instead returns an error message.

| Usage limit | Value |
| --- | --- |
| Document limit (combine, insert, replace, split) | 20 |
| Document file size (for all documents) | 100MB |
| Output images per Document Transaction (export) | 50 |
| Page limit (Extract and PDF To Markdown)\* | 400 |
| Page limit (Accessibility Auto-Tag)\* | 200 |
| Page limit (Scanned - Extract, PDF To Markdown and Accessibility Auto-Tag)\* | 150 |
| Page limit (OCR)\* | 100 |
| JSON file size (Document Generation and HTML to PDF) | 10MB |
| Maximum Requests Per Minute | 25 RPM |

\*_Page limits may be lower for documents with a large number of tables._

## Licensing Metrics & Free Tier

A Free Tier ships with the PDF Services API so you can explore its standout features without paying a cent. Sign up for the Free Tier and you receive complimentary credentials good for processing 500 Document Transactions each month. A Document Transaction starts from the opening endpoint request — in other words, the API call — together with the digital output. The tables above lay out the licensing metrics in detail.

Each Document Transaction is the unit on which processing gets tallied.

Example 1:

- Turning a Word document of ten pages into a PDF draws 1 Document
  Transaction from the trial quota.
- 1 (Operation: convert) x 1 (document) = 1 Document Transaction

Example 2:

- Merging 20 one-page documents into a single PDF and then OCRing
  that PDF draws 2 Document Transactions from the trial quota.
- 1 (Operation: combine) x 1 (document) + 1 (Operation: OCR) x 1
  (document) = 2 Document Transactions

With this ample pool of processing on hand, you can stand up the easy-to-use APIs and get going for very little outlay.

A larger processing quota comes with paid credentials, which call for signing a separate written agreement. For the ways you can buy, take a look at our
[pricing page](https://developer.adobe.com/document-services/pricing/main/).

## Fragments

Special tags called Fragments let you assemble a composition out of text tags or out of other fragments. Because fragments are reusable building blocks, you can define several of these compositions once and then drop them into whatever templates need them.

### How to use ?

Fragments — How to use ?

Working with fragments through the API means building a **fragments** json and supplying it as a parameter inside the request body; the SDKs offer the same capability if you prefer that route.

The json below sets up fragments for two scenarios — an **address** and a **name**.

```json
{
  "addressDetails": "<br>{{streetDetails}}<br>{{localityDetails}}",
  "streetDetails": "<span style=\"color: 0000FF;\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}",
  "localityDetails": "<span style=\"color: 006400;\">{{city}},<i>{{state}}</i>-<b>{{pincode}}</b>",
  "fullname": "<span style=\"color: ff0000;\">{{firstname}} {{lastnameStyled}}",
  "lastnameStyled": "<span STYLE=\"font-size:14mm\"><b><i>{{lastname}}</i></b>"
}
```

Within that json, the **address** scenario relies on the fragments `addressDetails`, `streetDetails`, and `localityDetails`, while the **name** scenario uses `fullname` and `lastnameStyled`. Here is what each one assembles:

`addressDetails` is built from the `streetDetails` and `localityDetails` fragment tags.

`streetDetails` brings together the `addressline1`, `addressline2`, and `addressline3` text tags.

`localityDetails` pulls in the `state`, `city`, and `pincode` text tags.

`fullname` combines the `firstname` text tag with the `lastnameStyled` fragment tag.

`lastnameStyled` wraps the `lastname` text tag.

Supplying values for the text tags referenced above is the job of the **jsonDataForMerge** json, which looks like this:

```json
{
  "addressline1": "Sample Address Line 1",
  "addressline2": "Sample Address Line 2",
  "addressline3": "Sample Address Line 3",
  "city": "Sample City",
  "state": "Sample State",
  "pincode": "42132xx",
  "zip": "Sample zip",
  "firstname": "John",
  "lastname": "Roy",
  "country": "India",
  "street": "Sample Street",
  "postcode": "Sample PostCode",
  "arr": [1, 2, 3]
}
```

A second style for writing the **fragments** json also exists: group fragments that belong together into one object, keep unrelated ones in a separate object, and collect every object inside a json array.

```json
[
  {
    "addressDetails": "<br>{{streetDetails}}<br>{{localityDetails}}",
    "streetDetails": "<span style=\"color: 0000FF;\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}",
    "localityDetails": "<span style=\"color: 006400;\">{{city}},<i>{{state}}</i>-<b>{{pincode}}</b>"
  },
  {
    "fullname": "<span style=\"color: ff0000;\">{{firstname}} {{lastnameStyled}}",
    "lastnameStyled": "<span STYLE=\"font-size:14mm\"><b><i>{{lastname}}</i></b>"
  }
]
```

Here the first object in the array carries the **address** fragments and the second carries the **name** fragments.

Resolving a nested fragment such as `streetDetails` works by searching the very object that holds its parent fragment — in this case `addressDetails`. That lookup is the mechanism behind nested fragment resolution.

Should the same fragment key appear in more than one object, the resolver picks whichever object holds that key earliest in the list.

Snapshots of sample input and output documents follow to show fragments in action.

In this case the Word document template file makes use of the `addressDetails` fragment.

This is the appearance of the resulting output document:

[Figure: Output of address fragment in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/address-output.png)

The `fullname` fragment can be applied in the word document template file in a comparable way.

And here is the output document that gets produced:

[Figure: Output of name fragment in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/name-output.png)

### Other supported constructs

Fragments — Other supported constructs

### Conditionals

Compute a fragment's value according to the conditions you set.

Here is how that input data looks in JSON:

```json
[
  {
    "addressDetails": "<br>{{streetDetails}}<br>{{localityDetails}}",
    "streetDetails": "<span style=\"color: 0000FF;\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}</span>",
    "localityDetails": "<span style=\"color: 006400;\">{% conditional-section expr(country=\"India\") %}{{street}} {{postcode}} {{city}},<i>{{country}}</i> {% end-section %}{% conditional-section expr(country=\"USA\") %}{{street}}{{city}} {{state}} {{zip}},<i>{{country}}</i> {% end-section %}</span>"
  },
  {
    "fullname": "<span style=\"color: ff0000;\">{{firstname}} {{lastnameStyled}}</span>",
    "lastnameStyled": "<span STYLE=\"font-size:14mm\"><b><i>{{lastname}}</i></b></span>"
  }
]
```

Inside `localityDetails` sits a conditional phrase whose outcome depends on the `country` text tag.
When the country resolves to India, `localityDetails` lays out as
`street`
`postCode` `city`,
`country`. When it resolves to the USA, `localityDetails` instead lays out as
`street`
`city` `state` `zip`,
`country`.

[Figure: Output of fragment with condition in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-condition.png)

### Optional

Marking a tag within the fragment as _optional_ swaps that tag for an empty string whenever it is absent from both the input and the fragment json data.

The input data, expressed as JSON, reads:

```json
[
  {
    "fullname": "{{firstname}} {{middlename:optional(true)}} {{lastname}}"
  },
  {
    ...
  }
]
```

Notice that the `middlename` tag in the fragment above carries an optional property. With that property turned on (true), an absent `middlename` tag simply becomes an empty string.

[Figure: Output of fragment with optional value in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-optional.png)

### Default

You may attach a _default value_ to a tag within the fragment.

In JSON form, the input data is:

```json
[
  {
    "team": "ABC, {{organisation:default-val(\"Org\")}}"
  },
  {
    ...
  }
]
```

In the fragment above, whenever the `organisation` tag is missing from both the input and the fragment json data, the supplied default (i.e. "Org") steps in.

[Figure: Output of fragment with default value in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-default.png)

### Prefix

You may attach a _prefix value_ to a tag within the fragment.

Shown as JSON, the input data is:

```json
[
  {
    "doctor": "{{doctorName:prefix(\"Dr. \")}}",
    "doctorName": "{{firstname}} {{lastname}}"
  },
  {
    ...
  }
]
```

In the fragment above, the `doctor` tag wraps a `doctorName` tag that has a prefix value assigned. As a result, the output places the prefix (i.e. "Dr. ") ahead of whatever `doctorName` resolves to.

[Figure: Output of fragment with prefix in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-prefix.png)

### Limitations

Fragments — Limitations

- Inside fragments, Expressions and Jsonata functions cannot be used.

## See also

- [Delete Pages](api-delete-pages.md)
- [Insert Pages](api-insert-pages.md)
- [Replace Pages](api-replace-pages.md)
