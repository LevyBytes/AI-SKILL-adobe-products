# April 22, 2025; Java SDK 4.3.0 Release

- The PDF Services Java SDKs picked up [Export PDF Form Data](../export-pdf-form-data/reference-index.md) and [Import PDF Form Data](../import-pdf-form-data/reference-index.md), so users can extract and populate form data.
- The Excel to PDF operation can now convert just the active sheet rather than the whole workbook.
- The Create PDF operation now honors pageRange across every supported file format, making page-by-page conversion possible.
- A `waitTimeToLoad` option arrived in the HTML to PDF operation, letting users cap the wait (in milliseconds) before the PDF is finalized.
