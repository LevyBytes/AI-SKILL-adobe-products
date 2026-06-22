# Creating Tables, Selecting Editing Tables

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Creating tables; Selecting and editing tables — Select table cells, rows, and columns.

## Creating tables

Rows and columns of cells make up a table. Each cell behaves like a text frame that can contain text, anchored frames, or other tables. Tables can be built in Adobe InDesign CS5 or brought in from outside applications.

Note

In Adobe InCopy, switch to Layout view before creating, editing, or formatting tables.

### Create tables

A table is made from rows and columns of cells. A cell acts like a text frame where text, inline graphics, or other tables can be added. Tables can be created from nothing, converted from existing text, or embedded inside another table.

When a table is created, it spans the container text frame's width. If the insertion point is at the start of a line, the table appears on that same line; if the insertion point is in the middle of a line, the table starts on the next line.

Tables move with nearby text in the same way as inline graphics. For example, a table moves through threaded frames when text above it changes point size or when text is added or deleted. A table, however, cannot be placed on a text-on-path frame.

Vertical tables are created in the same manner as horizontal tables. A table's writing direction comes from the text frame used to create it, and the table direction changes when the text frame direction changes. This also applies when a table is created inside a frame grid. Cell writing direction can still be changed independently of the table writing direction.

Note

Check the text frame writing direction before making a table.

Michael Murphy has an article on creating and formatting tables, Mind Your Table Manners.

Jeff Witchell from InfiniteSkills.com offers a video demonstration, The basics of setting up tables.

### Create a table from scratch

The table that you create spans the text frame's width.

With the Type tool, place the insertion point where the table should appear. Choose Table > Insert Table. Enter the row and column counts. For the body row, enter the horizontal-cell count; for Column, enter the vertical-cell count. If the table content will continue through more than one column or frame, set how many header or footer rows should repeat the information. Optionally, choose a table style. Click OK.

A table style determines row height. For example, cell styles in a table style can format separate table areas. When those cell styles include paragraph styles, the paragraph style leading value sets the row height for that area. If no paragraph style is used, row height comes from the document's default slug. The slug is based on the leading value; here, a slug is the approximate height of the highlighting in selected text.

### Create a table from existing text

Before converting text into a table, prepare the text correctly.

For conversion setup, insert tabs, commas, paragraph returns, or another character between columns. Use tabs, commas, paragraph returns, or another character between rows as well. In many cases, text can become a table without editing. With the Type tool, select the text that should be converted. Choose Table > Convert Text To Table. In Column Separator and Row Separator, specify where each new column and row starts. Choose Tab, Comma, or Paragraph, or type a character, such as a semicolon (;), into those separator fields. Any typed character appears in the menu the next time a table is created from text. If columns and rows use the same separator, enter the number of columns for the table. Optionally, choose a table style for formatting. Click OK.

When a row contains fewer items than the table's column count, empty cells complete that row.

### Embed a table within a table

Use either method below.

Select the cells or table to embed, then choose Edit > Cut or Copy. Put the insertion point in the destination cell for the table, then choose Edit > Paste.

Click inside a cell, choose Table > Insert Table, enter the row and column counts, and then click OK.

Change the cell inset if needed. (See Format text within a table.)

When a table is created inside a cell, the mouse cannot select portions of that table that overset the cell boundary. Expand the row or column instead; alternatively, put the insertion point at the table's beginning, then use keyboard shortcuts to move the insertion point and select text.

### Importing tables from other applications

Using the Place command to import a Microsoft Word document with tables, or a Microsoft Excel spreadsheet, brings the data in as an editable table. The Import Options dialog box controls formatting during that import.

Data from an Excel spreadsheet or Word table can also be pasted into an InDesign or InCopy document. Formatting for text pasted from another application is controlled by Clipboard Handling preferences. With Text Only, the content becomes unformatted tabbed text that can later be converted into a table. With All Information, pasted text appears as a formatted table.

When pasting text from another application into an existing table, add enough rows and columns for the incoming text, choose Text Only in Clipboard Handling preferences, and ensure at least one cell is selected unless the pasted table should be embedded inside a cell.

For more control over imported table formatting, or to keep spreadsheet formatting, import the table with the Place command. To preserve a spreadsheet link, enable Create Links When Placing Text And Spreadsheet Files in File Handling preference settings.

Note

Tabbed text can also be copied and pasted across selected table cells. This method is useful for replacing content while keeping formatting. For example, if the content of a formatting table in a monthly magazine needs updating, one option is linking to an Excel spreadsheet. When the replacement content comes from another source, copy the tabbed text with the new content, select the cell range in the formatted InDesign table, and paste.

### Add text to a table

Table cells can contain text, anchored objects, XML tags, and other tables. Extra text lines make a row taller unless a fixed row height has been set. Footnotes cannot be placed in tables.

With the Type tool active, use one of these methods:

Set the insertion point in a cell and enter the text. Enter or Return starts another paragraph within that same cell. Tab advances through cells; when the insertion point is in the final cell, Tab creates a new row. Shift+Tab moves backward through the cells.

Copy the text, put the insertion point in a cell, and choose Edit > Paste.

Put the insertion point in the cell where the text should go, choose File > Place, and double-click a text file.

### Add graphics to a table

For a standalone InCopy document, switch to Layout view before adding a graphic to a table. In a linked InDesign document, place the graphic with InDesign so resizing the text frame is easier to control.

Use any of these methods:

Put the insertion point at the intended graphic location, choose File > Place, and double-click the graphic's filename.

Put the insertion point where the graphic should be anchored, choose Object > Anchored Object > Insert, and define the settings. A graphic can be added to the anchored object later.

Copy a graphic or frame, set the insertion point, and choose Edit > Paste.

If an inserted graphic is larger than the cell, the cell height grows to fit it, but the cell width remains unchanged; the graphic can extend past the cell's right edge. When the row that contains the graphic uses a fixed height, any graphic taller than that row height makes the cell overset.

Note

One way to prevent an overset cell is to place the image outside the table first, resize it there, and then paste it into the table cell.

### Add table headers and footers

A long table can continue through multiple columns, frames, or pages. Headers and footers let repeated information appear at the top or bottom of each separated part of the table.

Header and footer rows can be included while the table is being created. The Table Options dialog box can also add those rows later and adjust their table appearance. Body rows can be reassigned for use as headers or footers.

Header rows repeated once per frame

Header rows repeated once per frame Note

For sequential table labels such as Table 1A, Table 1B, and later entries, put a variable in either the header or the footer. (See Create running captions for figures and tables.)

### Convert existing rows to header or footer rows

For header rows, select rows at the top of the table; for footer rows, select rows at the bottom. Choose Table > Convert Rows > To Header or To Footer.

### Change header or footer row options

Set the insertion point inside the table, then choose Table > Table Options > Headers And Footers. Enter the desired count of header rows or footer rows. Empty rows may be inserted at the table's top or bottom. Choose whether header or footer information is shown in every text column (when text frames use more than one column), once per frame, or only once per page. Enable Skip First when the header information should not appear in the first table row. Enable Skip Last when the footer information should not appear in the final table row.

Skip First is useful when the header or footer needs to show a continued label. For a multipage table, for instance, the header could read "Table 2 (Continued)." Because "(Continued)" should be omitted at the start of the table, enable Skip First and type Table 2 in the first row.

Click OK.

### Remove header or footer rows

Use either of these methods:

Put the insertion point in the header row or footer row. Run Table > Convert Rows > To Body.

Choose Table > Table Options > Headers And Footers, then adjust the header-row or footer-row count.

### More like this

- Formatting tables
- Creating and Formatting Tables video
- Place (import) text
- Resize columns, rows, and tables
- Work with overset cells
- Break tables across frames
- Create variables for runningheaders and footers

## Selecting and editing tables — Select table cells, rows, and columns

Selecting some or all text inside one cell looks like selecting text outside a table. When the selection crosses into multiple cells, both the cells and the cell contents become selected.

For a table that continues across more than one frame, hovering over any repeated header row or footer row other than the first one shows a lock icon. That icon means text or cells in that row cannot be selected there. To select cells in a header row or footer row, move to the start of the table.

### Selecting and editing tables — Select cells

With the Type tool active, use one of these methods:

For one cell, click inside the cell or select text, then choose Table > Select > Cell.

For several cells, drag across a cell border. Avoid dragging the column line or row line, because that resizes the table.

Note

Esc toggles between selecting all text in a cell and selecting the cell itself.

### Selecting and editing tables — Select entire columns or rows

With the Type tool active, use one of these methods:

Click inside a cell or select text, then choose Table > Select > Column or Row.

Hover along a column's top edge or a row's left edge until the pointer changes to an arrow shape ( or ), then click to select the full row or column.

Before and after selecting Row

Before and after selecting Row

### Selecting and editing tables — Select all header, body, or footer rows

Click in the table or select table text, then choose Table > Select > Header Rows, Body Rows, or Footer Rows.

### Selecting and editing tables — Select the entire table

With the Type tool active, use one of these methods:

Click in the table or select text, then choose Table > Select > Table.

Move the pointer to the table's upper-left corner until it changes to an arrow shape, then click to select the whole table.

Before and after selecting table

Before and after selecting table

Use the Type tool to drag across the full table.

Note

A table can also be selected in the same manner as an anchored graphic: place the insertion point immediately before or after the table, then press the Right Arrow key or Left Arrow key while holding Shift to select the table.

### Selecting and editing tables — Insert rows and columns

Rows and columns can be inserted in several different ways.

### Selecting and editing tables — Insert a row

Place the insertion point in a row above or below the location for the new row. Choose Table > Insert > Row. Enter the number of rows to add. Choose whether the new row or rows go before or after the current row, then click OK.

The added cells use formatting from the row that contained the insertion point.

Note

When the insertion point is in the last cell, pressing Tab also creates a new row.

### Selecting and editing tables — Insert a column

Place the insertion point in a column beside the location for the new column. Choose Table > Insert > Column. Enter the number of columns to add. Choose whether the new column or columns go before or after the current column, then click OK.

The added cells use formatting from the column that contained the insertion point.

### Selecting and editing tables — Insert multiple rows and columns

Click in a cell to place the insertion point, then choose Table > Table Options > Table Setup. Enter a different row and column count, then click OK.

Additional rows appear at the bottom of the table; additional columns appear on the right side.

Note

The Table panel can also change the row and column counts. To show the Table panel, choose Window > Type & Tables > Table.

### Selecting and editing tables — Insert a row or column by dragging

When columns are added by dragging, dragging beyond one and one-half times the width of the dragged column creates new columns that match the original column's width. If the drag inserts only one column, that column may be narrower or wider than the column used as the drag source. Rows follow the same pattern unless the dragged row has Row Height set to At Least. In that situation, when only one row is created, InDesign resizes the new row as needed so it is tall enough for the text.

Move the Type tool over a column or row border until a double-arrow icon ( or ) appears. Press and hold the mouse button, then hold Alt (Windows) or Option (Mac OS) while dragging downward to add a row or rightward to add a column. If Alt or Option is pressed before the mouse button is held down, the Hand tool appears, so start the drag before pressing Alt or Option. Note

Dragging cannot insert rows or columns at a table's top or left edges. Those fields select rows or columns instead.

Note

In horizontal tables, dragging cannot insert rows or columns at the top or left edges; in vertical tables, the unavailable edges are the top and right. Those fields are reserved for selecting rows or columns.

### Selecting and editing tables — Delete rows, columns, or tables

- To remove a row, column, or table, put the insertion point inside the table or select text in it, then choose Table > Delete > Row, Column, or Table.
- To remove rows and columns through the Table Options dialog box, choose Table > Table Options > Table Setup. Enter a different row and column count, then click OK. Rows are removed from the table bottom; columns are removed from the right side.

Note

In a vertical table, rows are removed from the left side of the table, and columns are removed from the bottom.

- To remove a row or column with the mouse, move the pointer over the border on the table's bottom or right side until a double-arrow icon ( or ) appears; hold down the mouse button; then hold Alt (Windows) or Option (Mac OS) while dragging up to delete rows or left to delete columns.

Note

If Alt or Option is pressed before the mouse button is held down, the Hand tool appears; press Alt or Option only after the drag has begun.

- To clear cell contents without deleting the cells, select the cells that contain the text to remove, or use the Type tool to select text inside the cells. Press Backspace or Delete, or choose Edit > Clear.

### Selecting and editing tables — Change the alignment of a table within a frame

A table takes on the width of the paragraph or table cell where it was created. The text frame or table can still be resized so the table becomes wider or narrower than the frame. When the sizes differ, choose the table's alignment position inside the frame.

Set the insertion point immediately to the table's right or left. Confirm that the text insertion point sits on the table paragraph rather than inside the table. In the frame, the insertion point becomes as tall as the table. In the Paragraph panel or Control panel, click an alignment button such as Align Center.

### Selecting and editing tables — Navigate within a table

Use Tab or the arrow keys to navigate inside a table. In long tables, you can also jump straight to a specific row.

### Selecting and editing tables — Move within a table using Tab

- Press Tab to go to the next cell. Pressing Tab in the last table cell creates a new row. For table tab and indent behavior, see Format text within a table.
- Press Shift+Tab to go to the previous cell. If the first table cell contains the insertion point, Shift+Tab sends it to the last table cell.

Note

The story's writing direction changes which cell counts as first, last, previous, or next. In horizontal writing, the first cell is at the upper left, and the last cell is at the lower right. The previous cell is directly left; from a cell on the left edge, previous means the rightmost cell in the row above. The next cell is directly right; from a cell on the right edge, next means the leftmost cell in the row below. In vertical writing, the first cell is at the upper right, and the last cell is at the lower left. The previous cell is above; from a cell on the upper edge, previous means the bottom cell in the row on the right. The next cell is below; from a cell on the lower edge, next means the top cell in the row on the left.

### Selecting and editing tables — Move within a table using arrow keys

Use the arrow keys to move through table cells and from one cell to another. At the end of a row's final cell, pressing the Right Arrow key sends the insertion point back to the first cell in that same row. At the final cell in a column, pressing the Down Arrow key moves the insertion point to that column's first cell. In a vertical table, the Down Arrow key used from a row's last cell places the insertion point at the first cell of that row. Also in a vertical table, the Left Arrow key used from a column's last cell places the insertion point at the first cell of that column.

### Selecting and editing tables — Jump to a specific row in a table

Choose Table > Go To Row. Then use the applicable option:

Enter the row number to jump to, and click OK.

When the current table includes a header row or footer row, select Header or Footer from the menu, and click OK.

### Selecting and editing tables — Cut, copy, and paste table contents

For selected text inside a cell, Cut, Copy, and Paste work as they do with ordinary selected text outside tables. Entire cells, along with their contents, can be cut, copied, and pasted too. Pasting while the insertion point is inside a table creates a nested table from multiple pasted cells. The whole table can also be moved or duplicated.

Select the cells to cut or copy, and choose Edit > Cut or Copy. Use the needed option:

To nest one table in another, put the insertion point in the destination cell and choose Edit > Paste.

To overwrite cells already in the table, select one or more target cells, confirming that enough cells extend below and to the right of the selection, and choose Edit > Paste.

### Selecting and editing tables — Move or copy a table

Select the whole table by putting the insertion point in the table and choosing Table > Select > Table. Choose Edit > Cut or Copy, place the insertion point at the table's new location, and choose Edit > Paste.

### Selecting and editing tables — Convert tables to text

With the Type tool , put the insertion point in the table, or select table text. Choose Table > Convert Table To Text. For Column Separator and Row Separator, set the separators to use.

For cleaner output, choose different separators for columns and rows; for example, use tabs between columns and paragraph breaks between rows.

Click OK.

After a table is converted to text, the table rules disappear and the chosen separator is added after each row and column.

### Selecting and editing tables — Combine tables

The Paste command can combine two or more tables into one table.

In the target table, add at least the same number of blank rows as the rows being pasted from the other tables. Pasting is unavailable when fewer rows are inserted than the copied set requires. In the source table, select the cells to copy. Pasting is also unavailable when the copied selection contains more column cells than the target table can accept. Select at least one cell where the incoming rows should be placed, and choose Edit > Paste. Note

If incoming rows use formatting that differs from the surrounding table, create one or more cell styles and apply those styles to the pasted cells. To replace existing formatting while applying a cell style, hold Alt (Windows) or Option (Mac OS) as you click the cell style.

Anne-Marie Concepcion discusses table combining in Joining Tables.

### Selecting and editing tables — Working with tables in Story Editor

Choosing Edit > Edit In Story Editor shows tables and their contents in Story Editor. Tables can also be edited there.

Editing tables in Story Editor

A. Table icon B. Overset graphic

Editing tables in Story Editor

To show or hide the table in Story Editor, click the triangle at the left of the table icon at the table's top.

To check whether the table order follows rows or columns, open the table icon's context menu with right-click (Windows) or Ctrl-click (Mac OS), then choose Arrange By Rows or Arrange By Columns.

Use Layout view when you need to change or format the table. Columns and rows cannot be selected in Story Editor.

### Selecting and editing tables — Working with tables in Galley/Story view

In Galley view or Story view, tables and the content inside them remain editable.

Editing tables in Story view

Editing tables in Story view

To show or hide the table in Galley or Story view, click the triangle at the left of the table icon at the table's top.

To check whether the table order follows rows or columns, open the table icon's context menu with right-click (Windows) or Ctrl-click (Mac OS), then choose Arrange By Rows or Arrange By Columns.

Use Layout view when you need to change or format the table. Galley view and Story view do not allow column or row selection.

### More like this

- Keys for tables
- Resize columns, rows, and tables
- Table and cell styles
