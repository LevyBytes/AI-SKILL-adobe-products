# Free Tier

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

- [Delete Pages](rest/delete-pages/reference-index.md)
- [Insert Pages](rest/insert-pages/reference-index.md)
- [Replace Pages](rest/replace-pages/reference-index.md)
