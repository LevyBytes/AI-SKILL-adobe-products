# Pdf To Markdown Api

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: How Tos; PDF to Markdown.

## How Tos

To get up to speed fast with the PDF Extract features inside the [PDFServices SDK](api-gettingstarted-10.md), lean on the [samples and documentation](api-extract-api.md), which walk through capabilities such as:

- Pulling a PDF out as JSON: its content, structure, and the renditions of table and figure elements, together with Character Bounding Boxes

The [PDFServices SDK](api-gettingstarted-10.md) also ships code examples for plenty of other PDF actions, among them:

- Building a PDF out of many source formats — HTML, Microsoft Office files, and plain text included
- Turning a PDF into other formats or into an image
- Merging whole PDFs or only chosen page ranges
- Running OCR so a PDF becomes searchable, with a locale you specify
- Shrinking PDFs at a chosen compression level and linearizing them
- Locking PDFs behind password(s) and stripping password protection back off
- Routine page handling — inserting, replacing, deleting, reordering, and rotating
- Breaking a single PDF apart into several files

### How It Works

Behind the scenes, PDF Extract leans on AI/ML to spot and sort the different objects that make up a document — paragraphs, lists, headings, tables, and images among them — then pulls out the text, the formatting, and the document's structural relationships, handing all of it back inside a JSON file. If you want the table data on its own, it can additionally be supplied as .CSV or .XLSX files, while any extracted imagery comes back as .PNG files. More detail lives in the [PDF Extract API white paper](https://www.adobe.com/cc-shared/assets/pdf/trust-center/ungated/whitepapers/doc-cloud/adobe-document-services-security-overview.pdf).

### Custom timeout configuration

Although the APIs apply inferred timeout values and ship with defaults, the SDK still lets you set your own timeouts on the API calls, so you can match the configuration to your own environment and connection speed. Beyond what is described below, there are also working code samples to consult:

- [Java](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithCustomTimeouts.java)
- [.NET](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/CreatePDFWithCustomTimeouts/Program.cs)
- [Node.js](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-custom-timeouts.js)
- [Python](https://github.com/adobe/pdfservices-python-sdk-samples/blob/master/src/extractpdf/extract_txt_from_pdf_with_custom_timeouts.py)

### Java timeout configuration

Available properties:

- **connectTimeout**: Default: 2000. The longest stretch, in milliseconds, permitted while an initial HTTPS connection is being opened.
- **socketTimeout**: Default: 10000. The longest gap, in milliseconds, tolerated between one HTTP response packet and the next.

Supply your own values for these properties through a custom `ClientConfig` class:

###

```javascript
ClientConfig clientConfig = ClientConfig.builder()
    .withConnectTimeout(3000)
    .withSocketTimeout(20000)
    .build();
```

### .NET timeout configuration

Available properties:

- **timeout**: Default: 400000. The longest span, in milliseconds, allowed to cover opening a connection, dispatching a request, and receiving a response.

Set replacement values for these properties by way of a custom `ClientConfig` class:

###

```javascript
ClientConfig clientConfig = ClientConfig.ConfigBuilder()
    .WithTimeout(500000)
    .Build();
```

### Node.js timeout configuration

Available properties:

- **timeout**: Default: 10000. The longest the request may run, in milliseconds, before it is cut off. Should it run past `timeout`, the request is aborted.

Adjust these properties by passing a custom `ClientConfig` class:

###

```javascript
const clientConfig = new ClientConfig({
  timeout: 15000,
});
```

### Python timeout configuration

Available properties:

- **connectTimeout**: Default: 4000. How many milliseconds Requests holds out for the client to open a connection to the Server.
- **readTimeout**: Default: 10000. How many milliseconds the client holds out for the server to return a response.

Tune these properties using a custom `ClientConfig` class:

###

```javascript
client_config = ClientConfig((connect_timeout = 4000), (read_timeout = 10000));
```

## PDF to Markdown

Bundled with the PDF Services API, the PDF to Markdown API runs as a cloud-hosted web service that takes PDF documents — whether born-digital or scanned — and renders them automatically into clean, LLM-friendly Markdown. As it converts, the service holds on to the document's structure and formatting, producing the Markdown format that has become a staple of LLM pipelines, content authoring, and documentation.

### Structured Information Output Format

What a PDF to Markdown operation produces includes:

- A primary `.md` file containing the converted Markdown content

### Output Structure

The following is a summary of key elements in the converted Markdown:

### Elements

Semantic elements drawn from the PDF arrive as an ordered list that holds to the document's natural reading order and structure. Among the things the conversion takes care of:

- Text content with proper Markdown syntax
- Document hierarchy and structure
- Inline formatting and emphasis
- Links and references
- Images and figures
- Tables and complex layouts

### Content Types

Here is how the API treats the various content types:

### Text Elements

- **Headings**: Converted to appropriate Markdown heading levels (H1-H6)
- **Paragraphs**: Preserved with proper spacing and formatting
- **Lists**: Both ordered and unordered lists with proper nesting
- **Text Emphasis**: Bold, italic, and other text formatting
- **Links**: Preserved with proper Markdown link syntax

### Images and Figures

- Provided as base64-embedded images in the Markdown output
- Referenced correctly in the Markdown output
- Original quality preserved
- Proper alt-text and captions maintained

### Tables

- Converted to Markdown table syntax
- Column alignment preserved
- Cell content formatting maintained
- Complex table structures supported

### Element Types and Paths

These are the structural elements the API detects and converts:

| Category | Element Type | Description |
| --- | --- | --- |
| Aside | Aside | Content that is not part of the regular content flow |
| Figure | Figure | Non-reflowable constructs such as graphs, images, and flowcharts |
| Footnote | Footnote | Footnote |
| Headings | H, H1, H2, etc | Heading levels |
| List | L, Li, Lbl, Lbody | List and list item elements |
| Paragraph | P, ParagraphSpan | Paragraphs and paragraph segments |
| Reference | Reference | Links |
| Section | Sect | Logical section of the document |
| StyleSpan | StyleSpan | Styling variations within text |
| Table | Table, TD, TH, TR | Table elements |
| Title | Title | Document title |

### Reading Order

Within the Markdown that comes out, the reading order holds onto:

- Natural document flow
- Proper content hierarchy
- Column-based layouts
- Page transitions
- Inline elements and references

### Use Cases

Where the PDF to Markdown API really earns its keep:

- **LLM and RAG ingestion**: Turn PDFs into Markdown ready for chunking, embeddings, and retrieval-augmented generation (RAG).
- **Prompt and context packaging**: Generate Markdown that drops cleanly into prompts and agent workflows — easy to paste, structure, and cite.
- **Training data preparation**: Build LLM fine-tuning datasets out of PDF content once it has been reviewed, cleaned up, and labeled.
- **Doc-as-code workflows**: Feed what was in the PDF through Git-driven review and versioning, side-by-side diffs, and generators for static sites.
- **Knowledge base publishing**: Move PDFs into documentation platforms and internal wikis as tidy, editable Markdown.
- **Legacy and archive modernization**: Render older PDFs so they turn searchable, editable, and maintainable.
- **Automated document processing**: Make PDF-to-text conversion uniform across ETL and document-processing pipelines.
- **Enterprise search and indexing**: Pipe the resulting Markdown into in-house search engines and stores of organizational knowledge.
- **Compliance and audit readiness**: Render PDF policies, SOPs, and manuals searchable and simpler to review for changes.
- **Content QA and change tracking**: Diff converted Markdown between document versions to surface updates and regressions.
- **Analytics and classification**: Apply the Markdown output to topic modeling, tagging, deduplication, and routing workflows.
- **Localization workflows**: Start from converted Markdown as the basis for translation and multi-language documentation.

### API Limitations

File Constraints and Processing Limits are covered under [Licensing and Usage Limits](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/dcserviceslicensing.md).

### Document Requirements

- A file has to be free of protection, or at least permit its content to be copied
- No support for:
  - Hidden objects (JavaScript, OCG)
  - XFA and fillable forms
  - Complex annotations
  - CAD drawings or vector art
  - Password-protected content

### REST API

Our public API Reference covers the [PDF to Markdown API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/PDF-To-Markdown).
