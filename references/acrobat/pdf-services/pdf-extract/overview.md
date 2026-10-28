# PDF Extract API overview

**What is Extract?**

Bundled with the PDF Services API, the PDF Extract API suite is a cloud-hosted web service built on Adobe's Sensei AI that pulls content and structural information out of PDF documents automatically, whether they are native or scanned. You can choose between two output formats:

- **Structured JSON output** ([Extract PDF](../extract-api.md)): Returns the content together with its structural detail as JSON
- **Markdown output** ([PDF to Markdown](../pdf-to-markdown/reference-index.md)): Renders the PDF's content into tidy, LLM-friendly Markdown

Whichever format you pick, text, intricate tables, and figures are all pulled from the PDF:

- Text comes out in contextual blocks — paragraphs, headings, lists, footnotes, and the like — carrying font, styling, and other formatting details with it.
- Tables are parsed and extracted so each cell arrives with its contents and formatting, and the service works out on its own which cells stretch across several rows or columns.
- With Extract JSON, the table data ships inside the resulting JSON and may optionally also be written to CSV and XLSX files. Tables additionally come out as PNG images, letting you eyeball the table data to confirm it.

- Anything flagged as a figure or image is pulled out as PNG files (Extract PDF) or base64 files (PDF to Markdown).
