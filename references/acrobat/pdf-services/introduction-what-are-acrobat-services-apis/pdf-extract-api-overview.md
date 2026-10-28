# Introduction - PDF Extract API for extracting PDF structure and information

Powered by Adobe's Sensei AI technology, the [PDF Extract API (included with the PDF Services API)](../extract-api.md) is a cloud-based web service that automatically pulls content and structural information out of PDF documents — whether native or scanned — and emits it as structured JSON. Here is how it handles text, complex tables, and figures:

- Text comes out in contextual blocks — paragraphs, headings, lists, footnotes, etc. — carrying font, styling, and other text formatting details.

- For tables, extraction and parsing deliver the contents plus table formatting information for every cell. Cells spanning multiple rows or columns are detected automatically. The resulting JSON holds the table data, which can optionally also be written to CSV and XLSX files. PNG images of the tables are produced too, so the table data can be checked visually.

- Anything flagged as a figure or image is pulled out as a PNG file.

Document structure information rides along in the JSON output as well — for instance, the natural reading order of the extracted elements and how those elements are laid out on each page.

For developers, the PDF Extract API offers a way to extract and structure content destined for many downstream applications, among them content republishing, workflow automation, content analysis, and data aggregation, management, and search.

Embedding the PDF Extract API into any application is done through the [PDFServices SDK](../sdk/reference-index.md) for Node.js, Python, and Java. [Start with a Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api)
