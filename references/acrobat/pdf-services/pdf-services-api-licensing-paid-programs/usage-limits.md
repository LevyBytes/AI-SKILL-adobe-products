# Usage limits

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
