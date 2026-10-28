# Licensing Metrics & Free Tier

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

- [Delete Pages](../rest/delete-pages/reference-index.md)
- [Insert Pages](../rest/insert-pages/reference-index.md)
- [Replace Pages](../rest/replace-pages/reference-index.md)
