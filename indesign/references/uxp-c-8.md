# Column, Columns

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Column; Columns.

## Column

A column in a table.

### Instance

> _Read Only_
>
> String **name**
>
> Name of the Column.
> _Read Only_
>
> Number **index**
>
> Position of the Column inside the object that contains it.
> _Read Only_
>
> Number **rowSpan**
>
> Count of rows spanned by the object.
> _Read Only_
>
> Number **columnSpan**
>
> Count of columns spanned by the object.
> _Read Only_
>
> Boolean **overflows**
>
> True indicates that the story contains overset text.
> _Read Only_
>
> Row **parentRow**
>
> Cell's parent row.
> _Read Only_
>
> Column **parentColumn**
>
> Cell's parent column.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Table **parent**
>
> Parent object for the Column, a Table.
> _Read Only_
>
> Cells **cells**
>
> Collection of table cells.
> _Read Only_
>
> Rows **rows**
>
> Collection of table rows.
> _Read Only_
>
> Columns **columns**
>
> Collection of table columns.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Measurement Unit (Number or String)=any **height**
>
> Column height. For a table or column, this is the total of the row heights.
> Measurement Unit (Number or String)=any **width**
>
> Column width. For a table or row, this is the total of the column widths.
> Mixed **contents**
>
> Text contents. For rows or columns, a string value fills every cell in that row or column. With an array, the first entry goes into the left-most row cell or top-most column cell, and later entries continue into the next cell to the right for rows or the next lower cell for columns. May return: PageItem, String, SpecialCharacters enumerator or Array of Strings, SpecialCharacters enumerators or PageItems. Allowed input: PageItem, NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators, NothingEnum enumerators or PageItems.
> Number **gradientFillLength**
>
> Fill gradient length for a linear gradient, or radius for a radial gradient, on the object.
> Number **gradientFillAngle**
>
> Angle for the object's linear fill gradient. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point, in page coordinates, for a gradient applied to the Column fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **topInset**
>
> Cell top inset. Deprecated API; use TextTopInset or GraphicTopInset
> Measurement Unit (Number or String)=any **leftInset**
>
> Cell left inset. Deprecated API; use TextLeftInset or GraphicLeftInset
> Measurement Unit (Number or String)=any **bottomInset**
>
> Cell bottom inset. Deprecated API; use TextBottomInset or GraphicBottomInset
> Measurement Unit (Number or String)=any **rightInset**
>
> Cell right inset. Deprecated API; use TextLeftInset or GraphicRightInset
> Swatch **fillColor**
>
> Swatch applied to the object's fill, such as a color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Fill tint as a percentage.
> Boolean **overprintFill**
>
> True makes the object's fill overprint.
> Boolean **topLeftDiagonalLine**
>
> True draws a diagonal line from the top left.
> Boolean **topRightDiagonalLine**
>
> True draws a diagonal line from the top right.
> Boolean **diagonalLineInFront**
>
> True draws it ahead of cell contents.
> Measurement Unit (Number or String)=any **diagonalLineStrokeWeight**
>
> Stroke weight for the diagonal line.
> StrokeStyle **diagonalLineStrokeType**
>
> Stroke type for the diagonal line or lines. Can also accept: String.
> Swatch **diagonalLineStrokeColor**
>
> Diagonal line color, given as a swatch.
> Number **diagonalLineStrokeTint**
>
> Diagonal line tint, as a percentage. (Range: 0 to 100)
> Boolean **diagonalLineStrokeOverprint**
>
> True makes the diagonal line stroke overprint.
> Swatch **diagonalLineStrokeGapColor**
>
> Swatch applied to the diagonal line stroke gap, such as a color, gradient, tint, or mixed ink. Note: Invalid for a solid diagonal line stroke type.
> Number **diagonalLineStrokeGapTint**
>
> Tint, as a percentage, for the diagonal line stroke gap color. Note: Invalid for a solid diagonal line stroke type.
> Boolean **diagonalLineStrokeGapOverprint**
>
> True makes the diagonal line stroke gap overprint. Note: Invalid for a solid diagonal line stroke type.
> Boolean **clipContentToCell**
>
> True clips the cell's content to the cell width and height. Deprecated API; use ClipContentsToTextCell or ClipContentsToPageItemCell
> FirstBaseline **firstBaselineOffset**
>
> Distance from the text baseline to the cell's top inset.
> VerticalJustification **verticalJustification**
>
> Vertical alignment for the cell.
> Measurement Unit (Number or String)=any **paragraphSpacingLimit**
>
> Maximum paragraph spacing that can be inserted in a cell. Note: Applies solely when verticalJustification is justified.
> Measurement Unit (Number or String)=any **minimumFirstBaselineOffset**
>
> Space from the text baseline to the top inset of the frame or cell.
> Number **rotationAngle**
>
> Cell rotation angle in degrees. Allowed set: 0, 90, 180, 270.
> Measurement Unit (Number or String)=any **leftEdgeStrokeWeight**
>
> Stroke weight for the left edge border.
> StrokeStyle **leftEdgeStrokeType**
>
> Stroke type for the left edge. Can also accept: String.
> Swatch **leftEdgeStrokeColor**
>
> Swatch applied to the left edge border stroke, such as a color, gradient, tint, or mixed ink.
> Number **leftEdgeStrokeTint**
>
> Left edge border stroke tint, as a percentage. (Range: 0 to 100)
> Boolean **leftEdgeStrokeOverprint**
>
> True makes the left edge border stroke overprint.
> Swatch **leftEdgeStrokeGapColor**
>
> Swatch applied to the left edge border stroke gap, such as a color, gradient, tint, or mixed ink. Note: Invalid for a solid left edge stroke type.
> Number **leftEdgeStrokeGapTint**
>
> Tint, as a percentage, for the left edge border stroke gap color. (Range: 0 to 100) Note: Invalid for a solid left edge stroke type.
> Boolean **leftEdgeStrokeGapOverprint**
>
> True makes the left edge border stroke gap color overprint. Note: Invalid for a solid left edge stroke type.
> Measurement Unit (Number or String)=any **topEdgeStrokeWeight**
>
> Stroke weight for the top edge border.
> StrokeStyle **topEdgeStrokeType**
>
> Stroke type for the top edge. Can also accept: String.
> Swatch **topEdgeStrokeColor**
>
> Swatch applied to the top edge border stroke, such as a color, gradient, tint, or mixed ink.
> Number **topEdgeStrokeTint**
>
> Top edge border stroke tint, as a percentage. (Range: 0 to 100)
> Boolean **topEdgeStrokeOverprint**
>
> True makes the top edge border stroke overprint.
> Swatch **topEdgeStrokeGapColor**
>
> Swatch applied to the top edge border stroke gap, such as a color, gradient, tint, or mixed ink. Note: Invalid for a solid top edge stroke type.
> Number **topEdgeStrokeGapTint**
>
> Tint, as a percentage, for the top edge border stroke gap color. (Range: 0 to 100) Note: Invalid for a solid top edge stroke type.
> Boolean **topEdgeStrokeGapOverprint**
>
> True makes the top edge border stroke gap color overprint. Note: Invalid for a solid top edge stroke type.
> Measurement Unit (Number or String)=any **rightEdgeStrokeWeight**
>
> Stroke weight for the right edge border.
> StrokeStyle **rightEdgeStrokeType**
>
> Stroke type for the right edge. Can also accept: String.
> Swatch **rightEdgeStrokeColor**
>
> Right edge border stroke color, specified as a swatch.
> Number **rightEdgeStrokeTint**
>
> Right edge border stroke tint, as a percentage. (Range: 0 to 100)
> Boolean **rightEdgeStrokeOverprint**
>
> True makes the right edge border stroke overprint.
> Swatch **rightEdgeStrokeGapColor**
>
> Swatch applied to the right edge border stroke gap, such as a color, gradient, tint, or mixed ink. Note: Invalid for a solid right edge stroke type.
> Number **rightEdgeStrokeGapTint**
>
> Tint, as a percentage, for the right edge border stroke gap color. (Range: 0 to 100) Note: Invalid for a solid right edge stroke type.
> Boolean **rightEdgeStrokeGapOverprint**
>
> True makes the right edge border stroke gap color overprint. Note: Invalid for a solid right edge stroke type.
> Measurement Unit (Number or String)=any **bottomEdgeStrokeWeight**
>
> Stroke weight for the bottom edge border.
> StrokeStyle **bottomEdgeStrokeType**
>
> Stroke type for the bottom edge. Can also accept: String.
> Swatch **bottomEdgeStrokeColor**
>
> Swatch applied to the bottom edge border stroke, such as a color, gradient, tint, or mixed ink.
> Number **bottomEdgeStrokeTint**
>
> Bottom edge border stroke tint, as a percentage.
> Boolean **bottomEdgeStrokeOverprint**
>
> True makes the bottom edge border stroke overprint.
> Swatch **bottomEdgeStrokeGapColor**
>
> Swatch applied to the bottom edge border stroke gap, such as a color, gradient, tint, or mixed ink. Note: Invalid for a solid bottom edge stroke type.
> Number **bottomEdgeStrokeGapTint**
>
> Tint, as a percentage, for the bottom edge border stroke gap color. (Range: 0 to 100) Note: Invalid for a solid bottom edge stroke type.
> Boolean **bottomEdgeStrokeGapOverprint**
>
> True makes the bottom edge border stroke gap color overprint. Note: Invalid for a solid bottom edge stroke type.
> Measurement Unit (Number or String)=any **innerRowStrokeWeight**
>
> Stroke weight for the inner row borders.
> StrokeStyle **innerRowStrokeType**
>
> Stroke type for the inner row. Can also accept: String.
> Swatch **innerRowStrokeColor**
>
> Inner row border stroke color, specified as a swatch.
> Number **innerRowStrokeTint**
>
> Inner row border stroke tint, as a percentage. (Range: 0 to 100)
> Boolean **innerRowStrokeOverprint**
>
> True makes the inner row border stroke overprint.
> Swatch **innerRowStrokeGapColor**
>
> Swatch applied to the inner row border stroke gap, such as a color, gradient, tint, or mixed ink. Note: Invalid for a solid inner row stroke type.
> Number **innerRowStrokeGapTint**
>
> Inner row border stroke tint, as a percentage. (Range: 0 to 100) Note: Invalid for a solid inner row stroke type.
> Boolean **innerRowStrokeGapOverprint**
>
> True makes the inner row border stroke gap color overprint. Note: Invalid for a solid inner row stroke type.
> Measurement Unit (Number or String)=any **innerColumnStrokeWeight**
>
> Stroke weight for the inner column border.
> StrokeStyle **innerColumnStrokeType**
>
> Stroke type for the inner column. Can also accept: String.
> Swatch **innerColumnStrokeColor**
>
> Inner column border stroke color, specified as a swatch.
> Number **innerColumnStrokeTint**
>
> Inner column border stroke tint, as a percentage. (Range: 0 to 100)
> Boolean **innerColumnStrokeOverprint**
>
> True makes the inner column border stroke overprint.
> Swatch **innerColumnStrokeGapColor**
>
> Swatch applied to the inner column border stroke gap, such as a color, gradient, tint, or mixed ink. Note: Invalid for a solid inner column stroke type.
> Number **innerColumnStrokeGapTint**
>
> Tint, as a percentage, for the inner column border stroke gap color. (Range: 0 to 100) Note: Invalid for a solid inner column stroke type.
> Boolean **innerColumnStrokeGapOverprint**
>
> True makes the inner column border stroke gap color overprint. Note: Invalid for a solid inner column stroke type.
> Measurement Unit (Number or String)=any **minimumHeight**
>
> Minimum height for cells in the Column. Note: When auto grow is true, added content may let cells exceed this value automatically. The minimum height can also influence redistribution.
> Measurement Unit (Number or String)=any **maximumHeight**
>
> Maximum height allowed for cells in the Column. Note: This limit still applies when auto grow is true. The maximum height can also influence redistribution.
> Boolean **keepWithNextRow**
>
> True keeps the row together with the next row when a table breaks across text frames or pages.
> StartParagraph **startRow**
>
> Specifies where the row begins.
> Boolean **autoGrow**
>
> True allows the height of the cell or Column cells to change automatically so cell content fits. Note: Cells may grow or shrink up to the maximum or minimum height when those bounds are specified.
> RowTypes **rowType**
>
> Row type.
> Measurement Unit (Number or String)=any **graphicLeftInset**
>
> Graphic cell left inset.
> Measurement Unit (Number or String)=any **graphicTopInset**
>
> Graphic cell top inset.
> Measurement Unit (Number or String)=any **graphicRightInset**
>
> Graphic cell right inset.
> Measurement Unit (Number or String)=any **graphicBottomInset**
>
> Graphic cell bottom inset.
> Boolean **clipContentToGraphicCell**
>
> True clips the graphic cell's content to the cell width and height.
> Measurement Unit (Number or String)=any **textTopInset**
>
> Text cell top inset.
> Measurement Unit (Number or String)=any **textLeftInset**
>
> Text cell left inset.
> Measurement Unit (Number or String)=any **textBottomInset**
>
> Text cell bottom inset.
> Measurement Unit (Number or String)=any **textRightInset**
>
> Text cell right inset.
> Boolean **clipContentToTextCell**
>
> True clips the text cell's content to the cell width and height.
> HorizontalOrVertical **writingDirection**
>
> Text direction in the cell.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. Every text line becomes a polygon object. If the converted text is one letter without internal spaces or separated parts, the polygon contains a single path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True removes the original text. False creates separate outline object(s) above the text. (Optional) |

> **recompose**()
>
> Recomposes text in the Column.
> Text **findText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value, then replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns results in reverse order. (Optional) |

> **remove**()
>
> Removes the Column.
> Cell **merge**( Mixed **with** )
>
> Combines the cells.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Cell(s) to combine with. Allowed: Cell, Row or Column. (Optional) |

> Cell **unmerge**()
>
> Separates all merged cells in the Column.
> **split**( HorizontalOrVertical **using** )
>
> Splits the cell on the specified axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HorizontalOrVertical | using | Direction used to split the cell. |

> **redistribute**( HorizontalOrVertical **using**, Mixed **thru** )
>
> Makes the specified Column range uniform in size. Note: Exact equality can be blocked when some cells in the range have maximum or minimum height or width values.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HorizontalOrVertical | using | Direction used for redistribution. |
| Mixed | thru | Final Column in the range. Allowed: Cell, Column or Row. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection status for the Column relative to previously selected objects. (Optional) |

> String **toSource**()
>
> Produces a string that, when executed, returns the Column.
> Column **getElements**()
>
> Resolves the object specifier and creates an array containing object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Allowed: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Allowed: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Columns

A collection containing table columns.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Mixed **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Adds a new Column.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | at | Column location, either relative to the reference object or within the table. (Optional) |
| Mixed | reference | Reference object. Note: It must be inside the table. Needed only when the at value contains before or after. Allowed: Row, Column, Cell or Table. (Optional) |
| Object | withProperties | Starting property values for the new Column. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Column collection.
> Column **item**( Mixed **index** )
>
> Gets the Column identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Allowed: Long Integer or String. |

> Column **itemByName**( String **name** )
>
> Gets the Column with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> Column **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Columns inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Column, index, or name used as the range start. Allowed: Column, Long Integer or String. |
| Mixed | to | Column, index, or name used as the range end. Allowed: Column, Long Integer or String. |

> Column **firstItem**()
>
> Gets the first Column in the collection.
> Column **lastItem**()
>
> Gets the last Column in the collection.
> Column **middleItem**()
>
> Gets the middle Column in the collection.
> Column **previousItem**( Column **obj** )
>
> Gets the Column whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Column | obj | Index of the Column that comes after the desired Column. |

> Column **nextItem**( Column **obj** )
>
> Gets the Column whose index comes after the specified Column in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Column | obj | Column whose index is immediately before the desired Column. |

> Column **anyItem**()
>
> Gets any Column from the collection.
> Column **everyItem**()
>
> Gets every Column in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the Column.
> Column **[]**( Number **index** )
>
> Gets the Column at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |
