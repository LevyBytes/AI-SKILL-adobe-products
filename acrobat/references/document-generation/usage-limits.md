# Usage Limits

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
