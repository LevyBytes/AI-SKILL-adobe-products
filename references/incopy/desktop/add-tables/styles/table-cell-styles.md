# Table Cell Styles

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Table and cell styles let table formatting work the way text styles handle text formatting. A table style gathers table-level formatting attributes, including table borders plus row and column strokes, so they can be applied together. A cell style can carry cell insets, paragraph styles, strokes, and fills. Editing a style automatically updates every table or cell that uses it.

Note

Text-style nesting and table-style nesting differ in one important way. A paragraph style may include character style attributes, but table styles do not contain the attributes of cell styles. You therefore cannot change the border color of interior cells with only a table style. Instead, create a cell style, then attach that cell style to the table style.

[Basic Table] and [None] styles

New documents include [Basic Table] for tables you create, and [None] for stripping cell styles from cells. You may edit [Basic Table], but neither [Basic Table] nor [None] can be renamed or deleted.

Using cell styles in table styles

While defining a table style, assign cell styles to table regions: header and footer rows, left and right columns, and body rows. For instance, the header row can use a cell style that applies a paragraph style, while the left and right columns can use separate cell styles that apply background shading.

Cell styles applied to regions in table style

A. Header row formatted with cell style that includes paragraph style B. Left column C. Body cells D. Right column

Cell styles applied to regions in table style

Cell style attributes

A cell style does not have to capture every formatting attribute on the selected cell. When building the style, choose which attributes belong to it. Applying that cell style then changes only those chosen attributes, such as cell fill color, while all other cell attributes are left alone.

Formatting precedence in styles

When formatting conflicts within a table cell, the order below controls the winning formatting:

Cell style precedence

1. Header/Footer 2. Left column/Right column 3. Body rows. If one cell is both in the header and in the left column, the header cell style supplies the formatting.

Table style precedence

1. Cell overrides 2. Cell style 3. Cell styles applied from a table style 4. Table overrides 5. Table styles. If the Cell Options dialog box applies one fill and the cell style applies another, the Cell Options dialog box fill takes precedence.

See www.adobe.com/go/vid0084 for a video tutorial about table styles.
