# Output Structure

The conversion returns a primary `.md` file. Its semantic elements follow the PDF's reading order and document structure.

## Elements

The output includes Markdown text syntax, document hierarchy, inline formatting and emphasis, links and references, images and figures, and tables with complex layouts.

## Content types

### Text elements

- Headings use Markdown levels H1-H6.
- Paragraphs retain spacing and formatting.
- Ordered and unordered lists retain nesting.
- Bold, italic and other text emphasis use Markdown formatting.
- Links use Markdown link syntax.

### Images and figures

Enable figure extraction in the request when images are needed. For an uploaded asset, set `getFigures` to the JSON boolean `true`; the external-storage request uses `params.getFigures`.

Figures are embedded as base64 image data and referenced in the Markdown output, retaining original image quality, alt text and captions. Check their association and accuracy against the PDF before downstream use. See [Request parameters](rest-api.md) for the two request forms.

### Tables

Tables use Markdown table syntax, retain column alignment and cell formatting, and support complex table structures. Check the converted table against the PDF before using its values.

## Element types and paths

| Category | Element type | Meaning |
| --- | --- | --- |
| Aside | Aside | Outside the regular content flow. |
| Figure | Figure | Non-reflowable graph, image or flowchart. |
| Footnote | Footnote | Footnote content. |
| Headings | H, H1, H2, etc | Heading levels. |
| List | L, Li, Lbl, Lbody | List, item, label and body elements. |
| Paragraph | P, ParagraphSpan | Paragraphs and their segments. |
| Reference | Reference | Link content. |
| Section | Sect | Logical document section. |
| StyleSpan | StyleSpan | Text styling variation. |
| Table | Table, TD, TH, TR | Table, data cell, header cell and row. |
| Title | Title | Document title. |

## Reading order

The conversion preserves natural flow, content hierarchy, column layouts, page transitions, inline elements and references. Review this order before chunking the Markdown or comparing document versions.
