# Create Tables, Format Tables

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add tables and data; Create and import tables; Add text, graphics, and headers to tables; Embed a table within a table; Select tables, rows, and columns; Adjust rows, columns, and cells in tables; Change the alignment of a table within a frame; Cut, copy, and paste table contents; Move, copy, and duplicate tables, rows, and columns; Format text in tables; Combine tables; Break tables across frames; Convert tables to text.

## Add tables and data

### Create tables

Create and import tables

Add text, graphics, and headers to tables

Embed a table within a table

### Format tables

Select tables, rows, and columns

Adjust rows, columns, and cells in tables

Change the alignment of a table within a frame

Cut, copy, and paste table contents

Move, copy, and duplicate tables, rows, and columns

Format text in tables

Combine tables

Break tables across frames

Convert tables to text

### Table and cell styles

Define and apply table and cell styles

Apply table cell styles

Import table and cell styles

Manage table and cell styles

Base one table or cell style on another

Override table style

### Strokes and fills

Add strokes and fills to cells

Add alternating strokes and fills

Add diagonal lines to a cell

Table stroke and fill options

Change table border settings

## Create and import tables

Use Adobe InDesign to build tables in several ways: from a blank table, converted text, or imported material.

Tables can start from scratch, come from existing text, or be imported from Microsoft Word or Excel. The table occupies the text frame width and is placed on the current line or the next line based on where the cursor is located. Tables move with text through threaded frames, but text-on-a-path frames cannot contain them.

### Create using Insert Table

Select the Type tool and set the insertion point where the table should be inserted.

Select Table > Insert Table.

Enter the number of Body Rows and Columns.

If the table will continue across multiple frames, adjust the header or footer rows.

If needed, choose a Table Style other than the default style.

Select OK.

### Create using Create Table

With Create Table, a text frame does not have to exist before you start. After you draw the table in the document, InDesign creates a text frame sized to that table.

Select Table > Create Table.

Enter the number of Body Rows and Columns.

If the table will continue across multiple frames, adjust the header or footer rows.

If needed, choose a Table Style other than the default style.

Select OK.

### Create from existing text

Turn structured text into a table by specifying the separators. When a row has fewer items than the column count, InDesign automatically creates empty cells.

Set up the text with separators between columns and rows, such as tabs, commas, or paragraph returns.

Use the Type tool to select the text.

Select Table > Convert Text to Table.

Specify the column and row separators.

If one separator is used for both columns and rows, select the Number of Columns.

If needed, choose a Table Style other than the default style.

Select OK.

### Import tables using Place

Use File > Place to import tables from Microsoft Word or Excel when you need more control, or use clipboard methods when speed matters. Both approaches keep the table structure, can carry formatting, and leave the placed content editable.

Select File > Place.

Choose the Word document or Excel spreadsheet that contains a table.

Enable Show Import Options, then choose the file.

Set the Import Options dialog box choices as needed, then select OK.

Select anywhere in the document to place the table.

Tip

For preserving spreadsheet formatting or controlling the table's appearance more closely, use the Place command rather than pasting.

### Paste content into an existing table

Use Table > Insert > Row or Column to add the rows and columns you need.

Open Edit > Preferences > Clipboard Handling or InDesign > Preferences > Clipboard Handling (macOS).

Choose Text Only for unformatted tabbed text, or choose All Information (Index Markers, Swatches, Styles, etc.) when the paste should retain table formatting.

Select OK.

Put the insertion point in a cell, or select a cell, unless you plan to embed the table.

Copy the Excel or Word data.

Select Edit > Paste.

### Maintain links to source files

This workflow keeps the imported table connected to its source spreadsheet.

Open Edit > Preferences > File Handling.

Enable Create Links When Placing Text and Spreadsheet Files, then select OK.

Use File > Place to import the table.

## Add text, graphics, and headers to tables

Use Adobe InDesign to place text, images, and header or footer rows inside tables.

Table cells can hold text, anchored objects, XML tags, other tables, and images for structured layouts. As content is added, the row height grows automatically to fit extra text lines or graphics unless the row height uses a fixed value. Tables do not accept footnotes.

Add text to table cells

With the Type tool, put the insertion point in the cell.

Type the content directly in the cell.

Press Enter (Windows) or Return (macOS) to start a new paragraph within the same cell.

Use Tab to advance through cells; use Shift + Tab to move backward. If the insertion point is in the table's final cell, pressing Tab automatically adds a new row.

### Copy or place text from external sources

When text already exists elsewhere, paste it or place text files into the table.

With the Type tool, set the insertion point in the destination cell.

To paste copied text, select Edit > Paste.

To place a text file, select File > Place, then double-click the text file.

### Add graphics to a table

Set the insertion point in the cell with the Type tool.

Select File > Place.

In the Place dialog box, choose the graphics file and change any prompted import options.

Select Open to load the graphics into the place cursor.

Click inside the target cell to place the graphic.

Images can be placed in table cells by using Object > Anchored Object > Insert and then adding a graphic. Another option is to position the insertion point and select Edit > Paste after copying a graphic or frame.

To prevent an overset cell, place the image outside the table, resize it, and then paste it into the table cell.

### Add graphics from CC Libraries

With the Type tool, put the insertion point in the cell.

Switch to the CC Libraries panel.

In the Graphics category, pick the graphics.

Drag-and-drop the graphics into the cell.

Note

InDesign snippets from the Graphics category in the CC Libraries panel cannot be drag-and-dropped.

If the graphic you insert is larger than its cell, InDesign increases the cell height enough to fit it; the cell width stays unchanged, so the artwork can protrude past the right side of the cell. When the graphic sits in a fixed-height row and is taller than that row, the cell becomes overset.

### Add header and footer rows

When a table flows into another column, frame, or page, the data can become hard to interpret without repeated context. Header and footer rows keep orientation visible by repeating key information at each table segment's beginning or end, including continuation notes or column labels. Add these rows during table creation, add them afterward in the Table Options dialog box, or turn existing body rows into header or footer rows.

### Convert existing rows to header or footer rows

Highlight the top table rows that should become header rows, or highlight bottom rows that should become footer rows.

Choose Table > Convert Rows > To Header or To Footer.

### Add header or footer rows

Put the insertion point in the table.

Choose Table > Table Options > Headers and Footers.

In the Table Options dialog box, enter how many Header Rows or Footer Rows you need. InDesign inserts blank rows at the top or bottom of the table as necessary.

Choose the repeat behavior for the header or footer:

- Every Text Column: shows the header or footer in every column in a text frame with multiple columns.
- Once per Frame: shows it one time in each threaded frame.
- Once per Page: shows it one time on each page.

Enable Skip First when the header should not appear in the first row of the table. Skip First removes header or footer text from the beginning of the table; for tables that continue across pages, it keeps labels such as "(Continued)" off the first row.

Enable Skip Last when the footer should not appear in the last row of the table.

Select OK.

## Embed a table within a table

Explore how Adobe InDesign supports tables placed inside other table cells for building complex nested structures.

Put one table into a cell when hierarchical data or a more complex layout requires a nested table. The outer table remains editable, each table can be formatted on its own, and the nested table takes on the width of its containing cell.

### Embed an existing table

With the Type tool, select the cells or table you intend to embed.

Choose Edit > Cut or Copy.

Put the insertion point in the destination cell.

Choose Edit > Paste.

Change the cell inset if needed.

### Insert a new table inside a cell

Using the Type tool, put the insertion point in the table cell.

Choose Table > Insert Table.

Enter the needed row and column counts.

Select OK.

Modify the cell inset if required.

Note

When a table placed in a cell extends outside the cell boundary, the hidden portion cannot be selected with the pointer. Increase the row or column size, or put the cursor at the beginning and use keyboard shortcuts to move through and select the hidden content.

## Select tables, rows, and columns

Learn how table element selection in Adobe InDesign works with the Type tool and pointer methods for editing and formatting.

Table selections follow the same general rules as text selections. Selecting text inside a single cell selects only that text; extending the selection across cells selects the cells and their contents.

For tables that continue through several frames, header and footer rows that appear outside the table's beginning or end display a lock indicator and cannot be selected directly. To edit those rows, place the insertion point at the start of the table.

### Select cells

### Select a single cell

Choose the Type tool.

Place the insertion point in a cell, or highlight text within it.

Choose Table > Select > Cell.

### Select multiple cells

Choose the Type tool.

Drag across cell boundaries so adjacent cells are included. Keep the drag away from row and column borders so the table does not resize.

Tip

Press Esc to toggle between selecting the cell contents and selecting the whole cell.

### Select rows or columns

### Select a column or row using the menu

Choose the Type tool.

Put the insertion point inside a cell, or select text.

Choose Table > Select > Column or Row.

### Use the pointer to select a column or row

Choose the Type tool.

Hover over a column edge or row edge until the pointer turns into a right-pointing arrow or bottom-pointing arrow .

Click the column or row.

### Select header, body, or footer rows

Put the insertion point in a table, or select text, with the Type tool.

Choose Table > Select > Header Rows or Body Rows or Footer Rows.

### Select the entire table

### Select the entire table using the menu

Choose the Type tool.

Place the insertion point in a table, or highlight text.

Choose Table > Select > Table.

### Select the entire table using the pointer

Choose the Type tool.

Move the pointer to the table's upper-left corner until it becomes a slanted arrow .

Select the table.

### Select the entire table using drag

Activate the Type tool for this method.

Drag over the complete table area.

Note

To treat a table as an anchored-object selection, position the insertion point on either side of the table, then extend the selection with Shift + Right Arrow or Left Arrow.

## Adjust rows, columns, and cells in tables

Learn how Adobe InDesign lets you change table size, set spacing, and merge or split cells through panels, dialog boxes, and direct edits.

Use panels, dialog boxes, or direct manipulation to resize columns, rows, and tables so spacing and alignment fit the layout. To change the structure, merge cells that share a row or column into one cell, or split cells horizontally or vertically.

### Resize columns and rows

Select cells in the rows or columns you need to resize with the Type tool.

Choose Table > Cell Options > Rows and Columns.

In the Cell Options dialog box, set the needed Row Height and Column Width. The default row height follows the slug height of the current font and responds to type size or row-setting changes. At Least lets rows grow when text or point size increases; Exactly uses a fixed height and may create overset text. The Maximum value sets the upper limit for row height.

Select OK.

### Resize without changing table width

Hold Shift while you drag an internal row or column edge; one row or column grows as the neighboring one shrinks.

Hold Shift while dragging a table boundary to resize every row or column proportionally.

### Resize the entire table

Choose the Type tool, then move the pointer near the table's lower-right corner until it changes into an arrow.

Drag to make the table larger or smaller.

Hold Shift to preserve the table's height-to-width proportions.

Note

When the table flows through more than one frame in a story, the pointer cannot resize the whole table.

### Distribute rows and columns evenly

Select cells in the rows or columns you want to adjust with the Type tool.

Choose Table > Distribute Rows Evenly or Distribute Columns Evenly.

### Change spacing before or after a table

Spacing before a table has no effect when a row sits at the beginning of a frame.

Place the insertion point on the table.

Choose Table > Table Options > Table Setup.

In the Table Options dialog box, enter values for Space Before and Space After.

### Merge and unmerge cells

With the Type tool, select the cells to merge.

Choose Table > Merge Cells.

To reverse the merge, put an insertion point in the merged cell and choose Table > Unmerge Cells.

### Split cells

With the Type tool, put the insertion point in the cell to split, or select a row, column, or group of cells.

Choose Table > Split Cell Vertically or Split Cell Horizontally.

## Change the alignment of a table within a frame

Adobe InDesign paragraph alignment controls can place a table at the left edge, centered, or at the right edge when its text frame is wider than the table.

New tables initially take their width from the containing paragraph or table cell. After you resize either the text frame or the table, the table may no longer match the frame width. If it is narrower, paragraph alignment determines its placement inside the frame.

With the Type tool, click immediately before or after the table.

Make sure the insertion point is in the table paragraph rather than inside a table cell.

Confirm that the insertion point spans the table height in the frame.

Select Type > Paragraph.

Choose the Align left icon, Align center icon, or Align right icon.

## Cut, copy, and paste table contents

Use standard editing commands in Adobe InDesign to relocate or duplicate cells, rows, and complete tables within a document.

InDesign handles cut, copy, and paste operations for table elements much like regular text editing, while adding choices that apply to cells and whole tables. Pasted cells can be placed inside one existing cell as a nested table, or they can overwrite selected cells in another table.

These techniques make it easier to rearrange table data, reuse formatting, and assemble complex table structures without rebuilding the content manually.

### Cut or copy text within table cells

With the Type tool, highlight the cell text to cut or copy.

Select Edit > Cut or Copy.

Click with the Type tool at the destination for the text.

Select Edit > Paste.

### Cut or copy table cells

Using the Type tool, select the table cells that need to be cut or copied.

Select Edit > Cut or Copy.

For a nested-table paste, click in the destination cell and select Edit > Paste.

To overwrite cells, first select cells in the target table; make sure enough empty cells are available below and to the right, then select Edit > Paste.

### Move or copy an entire table

Click inside the table with the Type tool to set the insertion point.

Select Table > Select > Table.

Use Edit > Cut when moving the table, or Edit > Copy when making a duplicate.

Click where the table should be inserted, then select Edit > Paste.

## Move, copy, and duplicate tables, rows, and columns

Adobe InDesign lets you move, copy, and duplicate table rows and columns so table content can be reorganized or reused quickly.

Several row and column operations are available inside a table. You can relocate rows or columns within the current table, duplicate them, paste them before or after another row or column, and copy row contents into a column or column contents into a row.

### Drag and drop or duplicate rows and columns

Rows and columns can be dragged to new positions inside the same table, and you can create duplicates during the drag.

Select the full row or column that will move. Dragging does not work with partial selections.

Move the pointer over the selected row or column until the move cursor is displayed.

Drag the selected row or column to the target position in the table.

Let go of the pointer to drop the row or column.

Note

- A row can be dropped only as a row, and a column only as a column.
- Drag and drop is limited to the same table.
- Moving rows or columns keeps the total count unchanged.
- Header rows must stay within the header section when moved.

### Duplicate rows or columns

During a drag operation, rows or columns can be duplicated.

With the Type tool, select the entire row or column you need to copy.

Hold Alt (Windows) or Option (macOS), then place the pointer over the selection until the move and duplicate cursor is shown.

Drag the row or column to the intended place in the table.

Release the pointer to make the duplicate.

Multiple adjacent rows or columns can be duplicated in one operation. On macOS, this adds to the total row or column count. Header, footer, and body rows can also be duplicated into different sections with Alt-drag (Windows) or Option-drag (macOS).

### Copy rows or columns and paste before or after

Copied rows or columns can be pasted before or after a different row or column. The same technique also moves row or column copies from one table into another.

Choose the row or column to copy, then press Ctrl + C.

Choose the destination row or column.

Select Table > Paste Before or Paste After.

### Remove header or footer rows

When header or footer rows are unnecessary, convert them to body rows.

With the Type tool, select the header or footer rows you want to change.

Select Table > Table Options > Headers and Footers.

In the Table Dimensions section, select and complete Header Rows and Footer Rows.

Select OK.

## Format text in tables

Adobe InDesign table cell text can use formatting, alignment, rotation, and spacing controls to improve readability.

Text in table cells uses the same formatting tools and methods as ordinary text. Cell-level options add finer control for alignment, spacing, tabs, and rotation.

### Insert tabs in a table cell

Using the Type tool, click inside a table cell.

Select Type > Insert Special Character > Other > Tab.

Select the needed cells or columns, then adjust tab settings with Type > Tabs.

Note

A decimal tab applied with the Tabs ruler automatically aligns cell text on the decimal character. A tab does not need to begin each paragraph unless other formatting, such as center alignment, overrides it.

### Change text alignment within a cell

Use the Paragraph panel for horizontal text alignment inside cells. Decimal alignment is based on tab settings.

With the Type tool, select the cell or cells to change.

Select Table > Cell Options > Text.

Open Align, then choose the alignment value: Align Top, Align Center, Align Bottom, or Justify Vertically.

When Justify Vertically is chosen, set Paragraph Spacing Limit to cap the amount of extra space inserted between paragraphs.

Use First Baseline and its settings to set the text offset within the cell. These settings match the controls in the Text Frame Options dialog box.

Select OK.

### Rotate text in a cell

Click in a cell, or select cells, with the Type tool.

Select Table > Cell Options > Text.

From the Rotation drop-down menu, choose the desired value.

Select OK.

### Change cell inset spacing for text cells

With the Type tool, click in a cell or select text cells.

Select Table > Cell Options > Text.

Enter Cell Insets values for Top, Bottom, Left, and Right. Larger inset spacing can make row height grow. Fixed row heights may produce overset text.

Select OK.

### Change cell inset spacing for graphic cells

Using the Selection tool, select the cell that contains the graphic.

Select Table > Cell Options > Graphics.

Enter Cell Insets values for Top, Bottom, Left, and Right.

Select OK.

Note

If the cell cannot be selected, select the link or embed symbol in the cell's upper-right corner, then press Esc.

## Combine tables

Adobe InDesign can combine two or more tables into one table.

The Paste command merges tables by copying cells from one table and placing them in another. Before pasting, add enough empty rows and columns in the target table for the incoming cells.

In the target table, add at least the same number of blank rows as the rows you will paste.

In the source table, mark the cells that will be copied.

Select Edit > Copy.

Within the target table, choose at least one cell for the pasted rows to start.

Select Edit > Paste.

Note

If the pasted rows are formatted differently from the rest of the table, create and apply cell styles to those pasted cells. For replacement of the current formatting, hold Alt (Windows) or Option (macOS) while selecting the cell style.

## Break tables across frames

Use Keep options and threaded frames in Adobe InDesign to decide how table rows continue through multiple frames.

A table that is taller than its frame becomes overset. After the frame is threaded to another frame, the table continues there, with rows moving into the next frame one row at a time. One row cannot be split across several frames. To keep context, header and footer rows may repeat in later frames.

Place the insertion point in a row, or select cells across the rows you need to control.

Select Table > Cell Options > Rows and Columns.

Turn on Keep with Next Row to keep the chosen rows together.

Choose a Start Row option for the row's starting location, for example in the next frame.

Select OK to apply the settings.

Note

For a single table spanning both pages of a spread, you may want to insert a blank column at the center of the table to create inset margins.

## Convert tables to text

Separator characters can turn Adobe InDesign table data into formatted text.

This process changes an existing InDesign table into plain text while letting you choose separators. The table structure is removed; each cell becomes text, and your selected separator characters mark the former column and row breaks.

With the Type tool, click inside the table to convert, or select text within that table.

Select Table > Convert Table to Text.

For the Column Separator option, choose the character added after each column, typically Tab.

For the Row Separator option, choose the character added after each row, typically Paragraph.

Select OK.

Tip

Use separate separators for columns and rows when possible, such as tabs for columns and paragraphs for rows.
