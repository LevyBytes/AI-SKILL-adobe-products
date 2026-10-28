# Usage limits

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
