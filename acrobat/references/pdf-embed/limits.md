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
