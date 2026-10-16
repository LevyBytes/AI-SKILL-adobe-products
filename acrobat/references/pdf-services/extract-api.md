# Extract Api

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Running an SDK extract operation yields a zip archive that holds the following:

- A structuredData.json file carrying both the pulled-out content and
  the PDF's element structure. The default output is described in the [JSON
  schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/extract-json-output-schema2.json); for
  what the output looks like with the styling option turned on, see the [Styling JSON
  schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/extract-json-output-schema-styling-info.json)
  instead.
- One or more renditions folders holding a rendition for every element type you asked for as input. That folder is named either "tables" or "figures" to match the element type you chose, and the renditions inside it carry filenames tied back to the element entries in the JSON file.

[Figure: Extract sample directory structure](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/extractsamplefiles.png)

Below is a rundown of the main elements you'll find in the extracted JSON (with further notes in the [JSON
schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/extract-json-output-schema2.json)):

- Elements : A position-ordered list, drawn from the document's structure tree, of semantic elements such as headings, paragraphs, tables, and figures. Headers and footers are left out of the output. On top of that, a heading that recurs from page to page is recorded only the first time it appears.
- Bounds : The box that wraps around the content items making up the element. It's omitted for any element that holds no content items, an empty table cell being one example. These bounds follow PDF specification coordinates.
  PDF pages are generally specified in inches (like A4 page is 8.3 inches x 11.7 inches). If values are required in coordinates, we need a DPI value i.e. dots per inches. As per PDF specification, 72 DPI is used when creating a PDF. So, width of an A4 page is specified to be ~= 598 units (8.3 inches x 72) when creating the PDF.
  All values reported in Extract use this 72 dpi based coordinates. Again as per PDF spec, absolute values of bounds are in a coordinate system where origin is (0,0), up and right directions are positive. Going by this coordinate system, for all rects reported in Extract, bottom < top and left < right.
  In Extract JSON schema, all rects are of type #/definitions/rect and rect is defined as:

  **description: Rectangle/Box in PDF coordinate system (bottom-left is origin). Values are in PDF user space units. Order of values - left, bottom, right, top.**

- Font : Describes the font tied to the element's first character. Surfaced for text elements only.
- TextSize : Gives the point size of the final character. Surfaced for text elements only.
- Attributes: Carries extra properties such as line height and text alignment.
- Path : Pinpoints where elements sit in the structure tree, naming both the element type and its instance number. Together with bounds, the Path establishes the document's reading order. The element
  types follow the [ISO
  standard](https://www.iso.org/standard/75839.html), and a convenience summary appears below:
  - Aside : Material that sits outside the document's normal content
    flow
  - Figure : Fixed, non-reflowable items such as graphs, images, and
    flowcharts
  - Footnote : FootNote
  - H, H1, H2, etc : Heading Level
  - L : List
  - Li : List Item
  - Lbl : List Item label
  - Lbody : List item body
  - P : Paragraph
  - ParagraphSpan : Marks a portion of a paragraph. Shows up when a
    paragraph gets split, typically by a page break or column
    break.
  - Reference : Link
  - Sect : A self-contained logical division within the document
  - StyleSpan : Flags a styling change in the text compared with
    its parent container.
  - Sub : One line within a paragraph that spans several lines (addresses, for example).
    Such paragraphs are created in HTML using `<br>` inside `<p>` tags
  - Table : Table
  - TD : Table cell
  - TH : Table header cell
  - TR : Table row
  - Title : The document's title — the standout heading that can
    characterize the entire document.
  - TOC : Table of contents
  - TOCI : Table of contents item
  - Watermark : Watermark
- Text : The element's text, given in UTF-8 and surfaced for text elements only. Where inline elements are listed apart from their parent block element, this field carries references pointing to those inline elements.
- Figures : Flagged as a Figure in the Path attribute and stored as a PNG inside the figures folder, under the filename recorded in the filePaths attribute.
- Tables : Flagged as a Table in the Path attribute and stored in the tables folder as a .CSV, .XLSX, and .PNG, under the filename recorded in the filePaths attribute.
- FilePaths : Lists the paths pointing to the extra output files produced (images
  and spreadsheets).
- Pages : Per-page property list for the PDF, covering page number, width, height, and rotation.
- Reading Order : How content reads across columns, over page breaks, and including asides is captured by the sequence of entries in the Elements array. Under normal mode, an element lifted out of its container can break this rule (for instance, a reference link sitting mid-paragraph). Styling mode, by contrast, keeps the order intact, laying out every Element and its Kids in natural reading sequence. The .json file's Bounds and path element are what fix the reading order.
