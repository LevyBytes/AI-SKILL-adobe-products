# Formatting Tables, Table Strokes Fills

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Formatting tables; Table strokes and fills — About table strokes and fills.

## Formatting tables

Format text inside a table with the Control panel or Character panel, the same panels used for text outside tables. For table-level formatting, the two primary dialog boxes are Table Options and Cell Options. Those dialog boxes let you adjust row and column counts, table border and fill appearance, spacing before and after the table, header rows, footer rows, and other table formatting.

For table structure formatting, use the Table panel, the Control panel, or the context menu. Select one or more cells, then right-click (Windows) or Control-click (Mac OS) to open a context menu that contains table options.

### Resize columns, rows, and tables

Several methods are available for changing the size of columns, rows, and tables.

### Resize columns and rows

Select cells in the columns and rows that need new dimensions. Use one of these methods:

- In the Table panel, enter Column Width and Row Height values.
- Choose Table > Cell Options > Rows And Columns, set Row Height and Column Width options, and click OK.

Note

At Least sets a minimum row height, so rows become taller as text is added or the point size increases. Exactly creates a fixed row height, so adding or deleting text does not change the row height. Fixed row height commonly produces overset cell content. (See Work with overset cells.)

Move the pointer over a column or row edge until a double-arrow icon ( or ) appears. Drag left or right to change column width, or drag up or down to resize the row vertically.

Before and after dragging to resize rows

Before and after dragging to resize rows

Initially, the current font's slug height controls row height. Because of that, row height can also change when you alter the type point size for full rows of text or change the row height setting. The Maximum setting in the Rows And Columns area of the Cell Options dialog box controls the highest row height.

### Resize rows or columns without changing the table width

- Drag an inside row or column edge while holding Shift; do not drag the table boundary. One row or column expands while the other contracts.
- For proportional row or column resizing, hold Shift as you drag the right table border or bottom table edge.

Dragging the right table edge with Shift changes all columns proportionally; dragging the bottom table edge with Shift changes all rows proportionally.

For vertical text, drag the table's lower edge, which is the left-hand corner, while holding Shift to resize row height proportionally, or to resize vertical text row width proportionally.

### Resize the entire table

With the Type tool , move the pointer over the lower-right table corner until it changes to an arrow shape , then drag to make the table larger or smaller. Hold Shift to keep the table's height and width in proportion.

For a vertical table, use the Type tool to place the pointer over the lower-left table corner until the pointer changes to an arrow shape , then drag to make the table larger or smaller.

Note

When a table continues through more than one frame in a story, the pointer cannot resize the whole table.

### Distribute columns and rows evenly

Select cells in the columns or rows that need matching widths or heights. Choose Table > Distribute Rows Evenly or Distribute Columns Evenly.

### Change the spacing before or after a table

Click inside the table, then choose Table > Table Options > Table Setup. In Table Spacing, enter separate values for Space Before and Space After, and click OK.

Changing Space Before for a table does not change spacing for a table row positioned at the top of a frame.

### Break tables across frames

Keep options control how many rows stay together and where a row starts or breaks, including at the top of a column or frame.

A table that is taller than its containing frame oversets that frame. When the frame is threaded to another frame, the table continues in the next frame. Rows flow into threaded frames one row at a time, and a single row cannot be split across several frames. Use header rows or footer rows when repeated information should appear in the new frame.

Put the insertion point in the appropriate row, or select cells across the rows to keep together. Choose Table > Cell Options > Rows And Columns. To keep those rows together, select Keep With Next Row. To force the row to begin in a chosen place, use the Start Row menu to choose an option such as In Next Frame, and click OK. Note

For one table that spans both pages of a spread, adding an empty column at the center can create inset margins.

### Add text before a table

A table is tied to the paragraphs immediately before and after it. If the table begins a text frame, clicking above the table will not place the insertion point there; use arrow keys to move the insertion point before the table instead.

Place the insertion point at the first cell's paragraph start, press Left Arrow key, and type. Use one of the following cases:

For horizontal tables, move to the first cell's paragraph start, press left arrow key, and type.

For vertical tables, move to the first cell's paragraph start, press Up Arrow key, and type.

### Format text within a table

Text in a table generally uses the same formatting methods as text outside a table.

### Insert tabs into a table cell

When the insertion point is inside a table, Tab moves it to the next cell. A tab character can still be inserted inside a table cell. Define table tab settings in the Tabs panel; those settings apply to the paragraph that contains the insertion point.

With the Type tool , put the insertion point where the tab should be inserted. Choose Type > Insert Special Character > Other > Tab.

To edit tab settings, select the columns or cells to change, choose Type > Tabs to open the Tabs panel, and adjust the tab settings.

Note

After using the Tabs ruler to set a decimal tab for a cell or a set of cells, pressing Tab at the start of every paragraph is usually unnecessary for decimal alignment. Paragraphs align automatically on the decimal character unless other paragraph formatting, such as center alignment, overrides the decimal tab.

### Change the alignment of text within a table cell

With the Type tool , select the cell or cells to change. Choose Table > Cell Options > Text. Under Vertical Justification, choose an Align setting: Align Top, Align Center, Align Bottom, or Justify Vertically.

When Justify is selected, set the Paragraph Spacing Limit; this value caps the extra space that can be inserted between paragraphs.

For First Baseline, choose an option that controls the offset of text from the top of the cell.

(See Align or justify text vertically within a text frame.)

These choices match the corresponding choices in the Text Frame Options dialog box.

Click OK. Note

Use the Paragraph panel alignment option to change horizontal alignment inside a cell. To align cell text on a decimal tab, add a decimal tab setting through the Tabs panel.

### Rotate text in a cell

To rotate cell text, put the insertion point inside the target cell, or select every cell to change. Open Table > Cell Options > Text, or use the Table panel. Choose the required Rotation value, then click OK.

### Change cell inset spacing

With the Type tool, click inside a target cell or select the cell range that needs the change. Open Table > Cell Options > Text, or bring up the Table panel. In Cell Insets, enter the Top, Bottom, Left, and Right values, then click OK.

Larger inset values often make the row taller. When row height is fixed, leave enough space for those inset amounts; otherwise the cell can end up with overset text.

### Merge and split cells

Table cells can be combined into one cell or divided into separate cells.

### Merge cells

Two or more cells that share a row or a column can become one cell. For instance, the top row can be merged so it functions as a single table title cell.

Using the Type tool, select the cells to merge. Choose Table > Merge Cells.

### Unmerge cells

Click inside the merged cell, then choose Table > Unmerge Cells.

### Split cells

Cells may be divided vertically or horizontally, which helps when building form-style tables. Multiple selected cells can also be split in either direction.

Place the insertion point in the cell to divide, or select a row, column, or cell block. Choose Table > Split Cell Vertically or Split Cell Horizontally.

### Work with overset cells

As text or graphics are added, table cells usually grow downward to fit the new content. If the row has a fixed height and the inserted text or graphic is too large, a small red dot appears at the lower-right of the cell to show that the cell is overset.

Overset text cannot continue into a different cell. Correct it by editing or resizing the contents, enlarging the cell, or increasing the text frame that contains the table.

Inline graphics, or text that uses fixed leading, can extend outside cell edges. Enable Clip Contents To Cell to trim text or inline graphics that would otherwise pass beyond a cell boundary. This behavior does not apply when inline graphics overset past the bottom edge of a Horizontal cell.

### Display the contents of an overset cell

Use either method:

Make the cell larger.

Adjust the text formatting. To select everything in the overset cell, click inside that cell, press Esc, and then format the text from the Control panel.

### Clip an image in a cell

An image that exceeds the cell size spills past the cell borders. The parts outside those borders can be clipped.

Put the insertion point in the cell to clip, or select the cell or cells to modify. Choose Table > Cell Options > Text. Enable Clip Contents To Cell, then click OK.

### Change the cell writing direction

Set the text insertion point in the cell whose direction should change, or select the cell or cells to update. Choose Table > Cell Options > Text. Pick the type direction from the Writing Direction menu in the cell options, then click OK.

The same type direction can be chosen from the Writing Direction pop-up menu in the Table panel. When creating a cell style, another option is Cell Direction Runs Against Story Direction in the Text section.

### More like this

- Table strokes and fills
- Creating and Formatting Tables video
- Change the alignment of a table within a frame
- Add table headers and footers
- Specify characters for decimal tabs
- Combine tables
- Create tables
- Define table and cell styles

## Table strokes and fills — About table strokes and fills

Tables can receive strokes and fills through several controls. Use Table Options to adjust the table-border stroke and to create alternating strokes or fills for rows and columns. For individual cells, including header and footer cells, use Cell Options or the Swatches, Stroke, and Color panels.

Formatting chosen in Table Options normally takes precedence over matching formatting already applied to cells. If Preserve Local Formatting is selected in Table Options, strokes and fills on individual cells remain intact.

For table or cell formatting that you reuse often, define and apply table styles or cell styles.

### Table strokes and fills — Change the table border

The table border can be edited from Table Setup or from the Stroke panel.

With the insertion point placed in a cell, choose Table > Table Options > Table Setup. In Table Border, configure weight, stroke type, color, tint, and gap values. (See Table stroke and fill options.) In Stroke Drawing Order, choose one of these options:

Best Joins

With this option, row strokes come forward where differently colored strokes intersect. When crossing strokes such as double lines meet, they join and the intersections connect.

Row Strokes In Front

This option draws row strokes in front.

Column Strokes In Front

This option draws column strokes in front.

InDesign 2.0 Compatibility

This option draws row strokes in front. It also joins crossing strokes such as double lines, but connects the intersections only where strokes meet in a T-shape.

To keep individual-cell stroke formatting from being replaced, select Preserve Local Formatting. Click OK. Note

When a table has no stroke or fill, use View > Extras > Show Frame Edges to show its cell boundaries.

### Table strokes and fills — Add stroke and fill to cells

Stroke and fill can be applied to cells from Cell Options, the Stroke panel, or the Swatches panel.

### Table strokes and fills — Add stroke and fill using Cell Options

Use the Preview proxy to control which cell lines receive stroke or fill formatting by selecting or clearing those lines. To change all rows or columns in the table, apply an alternating stroke or fill pattern and set the second pattern to 0.

With the Type tool, click in a target cell or select the cells that should receive a stroke or fill. For header/footer rows, select the header/footer cells at the table start. Open Table > Cell Options > Strokes And Fills, then use the proxy preview area to identify the lines that stroke changes should affect. For example, to place a heavy stroke on only the outside lines, click an inside line to clear it. Active lines appear blue; inactive lines appear gray. Choose the proxy lines that should be changed.

Choose the proxy preview lines that should receive the change. Note

In the proxy preview area, double-click an outside line to select the whole outer selection rectangle. Double-click an inside line to select all inside lines. Triple-click anywhere in the proxy to select or clear every line.

For Cell Stroke, set weight, stroke type, color, tint, and gap values as needed. (See Table stroke and fill options.) For Cell Fill, set the color and tint values. If needed, select Overprint Stroke and Overprint Fill, then click OK.

### Table strokes and fills — Add a stroke to cells using the Stroke panel

Only InDesign includes the Stroke panel; InCopy does not.

Select the cell or cells to modify. To stroke header or footer cells, start by selecting the header or footer row. Open Window > Stroke. In the proxy preview area, indicate which lines the stroke changes should affect. In the Tools panel, verify that the Object button is selected. (When the Text button is selected, stroke changes apply to text instead of cells.) Enter a weight value and choose a stroke type.

### Table strokes and fills — Add a fill to cells using the Swatches panel

Select the cell or cells to modify. For a header or footer fill, select the header or footer row. Choose Window > Color > Swatches to open the Swatches panel. Confirm that the Object button is selected. (When the Text button is selected, color changes apply to text instead of cells.) Choose a swatch.

### Table strokes and fills — Add a gradient to cells using the Gradient panel

Select the cells to modify. To put a gradient on header or footer cells, first select the header or footer row. Open the Gradient panel with Window > Color > Gradient. Apply the gradient through Gradient Ramp, then tune the gradient settings as needed.

### Table strokes and fills — Add diagonal lines to a cell

With the Type tool, click in a target cell or select the cells where diagonal lines should be added. Choose Table > Cell Options > Diagonal Lines. Click the button for the diagonal-line type to add. In Line Stroke, enter the needed weight, type, color, and gap settings; enter a Tint percentage and choose Overprint options. From the Draw menu, choose Diagonal In Front to put the diagonal line ahead of the cell contents; choose Content In Front to put the diagonal line behind the cell contents, then click OK.

### Table strokes and fills — Table stroke and fill options

For table or cell strokes and fills, these options are available:

Weight

Sets the thickness of the line used for a table or cell border.

Type

Chooses the line style, such as Thick - Thin.

Color

Chooses the color used for a table or cell border. The available choices come from the Swatches panel.

Tint

Sets the ink percentage of the chosen color that is applied to the stroke or fill.

Gap Color

Adds color to the spaces between dashes, dots, or lines. When Type is set to Solid, this option is unavailable.

Gap Tint

Adds tint to the spaces between dashes, dots, or lines. When Type is set to Solid, this option is unavailable.

Overprint

When this option is selected, the ink chosen in the Color drop-down list prints over underlying colors instead of knocking those inks out.

### Table strokes and fills — Alternate strokes and fills in a table

Alternating strokes and fills can make a table easier to read or improve how it looks. Alternating strokes and fills in rows leave header and footer rows unchanged. Alternating strokes and fills in columns, however, do affect header and footer rows.

Alternating stroke and fill settings take precedence over cell stroke formatting unless Preserve Local Formatting is selected in Table Options.

Note

To put a fill or stroke on every body cell, rather than only on alternating cells, use alternating stroke and fill settings to make a non-alternating pattern. For that result, make the second pattern's Next value 0.

Before (left) and after (right) alternating fills in a table

Before (left) and after (right) alternating fills in a table

### Table strokes and fills — Add alternating strokes to a table

Put the insertion point in a cell, then choose Table > Table Options > Alternating Row Strokes or Alternating Column Strokes. In Alternating Pattern, pick the pattern type to use. Choose Custom when you need to define your own sequence; for instance, one column can use a thick black line and the following three columns can use thin yellow lines. In the Alternating section, configure the fills for the first pattern and for the next pattern. As an example, the first column could get a solid stroke while the next column uses a Thick - Thin line, creating the alternating sequence. Enter 0 for Next when strokes should apply to every row or column.

Note

In a table that flows through more than one frame, alternating strokes and fills for rows continue across the story rather than starting over in later frames. (See Break tables across frames.)

Turn on Preserve Local Formatting when table strokes formatted earlier should stay active. For Skip First and Skip Last, enter how many rows or columns at the start and end of the table should show no stroke attributes, then click OK.

### Table strokes and fills — Add alternating fills to a table

Click in a cell, then choose Table > Table Options > Alternating Fills. In Alternating Pattern, pick the pattern type to use. Choose Custom to define a sequence, such as one gray row followed by three yellow rows. Under Alternating, set the fill choices for the first pattern and the following pattern. For example, after choosing Every Second Column for Alternating Pattern, you could shade the first two columns with a gray tint and leave the next two columns blank. Enter 0 for Next when the fill should land on every row. Use Preserve Local Formatting to keep fills already formatted on the table. For Skip First and Skip Last, enter how many rows or columns at the table start and end should not receive fill attributes, then click OK.

### Table strokes and fills — Turn off alternating strokes and fills in a table

Set the insertion point anywhere in the table. Use Table > Table Options > Alternating Row Strokes, Alternating Column Strokes, or Alternating Fills. Set Alternating Pattern to None, then click OK.

### More like this

- Table and cell styles
