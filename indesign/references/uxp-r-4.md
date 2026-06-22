# Row, Rows, Ruby Alignments, Ruby Kenten Position ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Row; Rows; RubyAlignments; RubyKentenPosition; RubyOverhang; RubyParentSpacing; RubyTypes.

## Row

A row in a table.

### Instance

> _Read Only_
>
> String **name**
>
> Row name value.
> _Read Only_
>
> Number **index**
>
> Position of the Row inside the object that contains it.
> _Read Only_
>
> Number **rowSpan**
>
> Count of rows covered by the object.
> _Read Only_
>
> Number **columnSpan**
>
> Count of columns covered by the object.
> _Read Only_
>
> Boolean **overflows**
>
> True indicates overset text in the story.
> _Read Only_
>
> Row **parentRow**
>
> Row that contains the cell.
> _Read Only_
>
> Column **parentColumn**
>
> Column that contains the cell.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Table **parent**
>
> Containing Table for the Row.
> _Read Only_
>
> Cells **cells**
>
> Collection containing the table cells.
> _Read Only_
>
> Rows **rows**
>
> Collection containing table rows.
> _Read Only_
>
> Columns **columns**
>
> Collection containing table columns.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Measurement Unit (Number or String)=any **height**
>
> Row height. For a table or column, this value represents the total of the row heights.
> Measurement Unit (Number or String)=any **width**
>
> Row width. For a table or row, this value represents the total of the column widths.
> Mixed **contents**
>
> Text held by the object. For rows or columns, a string fills every cell in that row or column; an array fills cells sequentially, starting with the left-most cell in a row or the top-most cell in a column, then continuing to the next cell to the right for rows or the next lower cell for columns. Can return: PageItem, String, SpecialCharacters enumerator or Array of Strings, SpecialCharacters enumerators or PageItems. Can also accept: PageItem, NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators, NothingEnum enumerators or PageItems.
> Number **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, used on the object's fill.
> Number **gradientFillAngle**
>
> Angle for the linear gradient on the object's fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Start point, in page coordinates, for a gradient applied to the Row fill, formatted as [x, y].
> Measurement Unit (Number or String)=any **topInset**
>
> Top inset for the cell. Deprecated API; use TextTopInset or GraphicTopInset.
> Measurement Unit (Number or String)=any **leftInset**
>
> Left inset for the cell. Deprecated API; use TextLeftInset or GraphicLeftInset.
> Measurement Unit (Number or String)=any **bottomInset**
>
> Bottom inset for the cell. Deprecated API; use TextBottomInset or GraphicBottomInset.
> Measurement Unit (Number or String)=any **rightInset**
>
> Right inset for the cell. Deprecated API; use TextLeftInset or GraphicRightInset.
> Swatch **fillColor**
>
> Swatch applied to the object's fill, including color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Fill tint expressed as a percentage.
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
> True places the diagonal line ahead of the cell contents.
> Measurement Unit (Number or String)=any **diagonalLineStrokeWeight**
>
> Stroke weight assigned to the diagonal line.
> StrokeStyle **diagonalLineStrokeType**
>
> Stroke type used for the diagonal line or lines. Can also accept: String.
> Swatch **diagonalLineStrokeColor**
>
> Diagonal line color supplied as a swatch.
> Number **diagonalLineStrokeTint**
>
> Diagonal line tint expressed as a percentage. (Range: 0 to 100)
> Boolean **diagonalLineStrokeOverprint**
>
> True makes the diagonal line stroke overprint.
> Swatch **diagonalLineStrokeGapColor**
>
> Swatch applied to the diagonal line stroke gap, including color, gradient, tint, or mixed ink. Note: does not apply when the diagonal line uses a solid stroke type.
> Number **diagonalLineStrokeGapTint**
>
> Tint percentage for the diagonal line stroke gap color. Note: does not apply when the diagonal line uses a solid stroke type.
> Boolean **diagonalLineStrokeGapOverprint**
>
> True makes the diagonal line stroke gap overprint. Note: does not apply when the diagonal line uses a solid stroke type.
> Boolean **clipContentToCell**
>
> True clips the cell content to the cell width and height. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell.
> FirstBaseline **firstBaselineOffset**
>
> Distance from the text baseline to the cell's top inset.
> VerticalJustification **verticalJustification**
>
> Vertical alignment used in the cell.
> Measurement Unit (Number or String)=any **paragraphSpacingLimit**
>
> Maximum extra spacing allowed between paragraphs in a cell. Note: applies only for justified vertical justification.
> Measurement Unit (Number or String)=any **minimumFirstBaselineOffset**
>
> Spacing between the text baseline and the frame or cell top inset.
> Number **rotationAngle**
>
> Cell rotation angle in degrees. Valid set: 0 degrees, 90 degrees, 180 degrees, or 270 degrees.
> Measurement Unit (Number or String)=any **leftEdgeStrokeWeight**
>
> Stroke weight for the left edge border.
> StrokeStyle **leftEdgeStrokeType**
>
> Stroke type for the left edge. Can also accept: String.
> Swatch **leftEdgeStrokeColor**
>
> Swatch applied to the left edge border stroke, including color, gradient, tint, or mixed ink.
> Number **leftEdgeStrokeTint**
>
> Left edge border stroke tint expressed as a percentage. (Range: 0 to 100)
> Boolean **leftEdgeStrokeOverprint**
>
> True makes the left edge border stroke overprint.
> Swatch **leftEdgeStrokeGapColor**
>
> Swatch applied to the left edge border stroke gap, including color, gradient, tint, or mixed ink. Note: does not apply when the left edge uses a solid stroke type.
> Number **leftEdgeStrokeGapTint**
>
> Tint percentage for the left edge border stroke gap color. (Range: 0 to 100) Note: does not apply when the left edge uses a solid stroke type.
> Boolean **leftEdgeStrokeGapOverprint**
>
> True makes the left edge border stroke gap color overprint. Note: does not apply when the left edge uses a solid stroke type.
> Measurement Unit (Number or String)=any **topEdgeStrokeWeight**
>
> Stroke weight for the top edge border.
> StrokeStyle **topEdgeStrokeType**
>
> Stroke type for the top edge. Can also accept: String.
> Swatch **topEdgeStrokeColor**
>
> Swatch applied to the top edge border stroke, including color, gradient, tint, or mixed ink.
> Number **topEdgeStrokeTint**
>
> Top edge border stroke tint expressed as a percentage. (Range: 0 to 100)
> Boolean **topEdgeStrokeOverprint**
>
> True makes the top edge border stroke overprint.
> Swatch **topEdgeStrokeGapColor**
>
> Swatch applied to the top edge border stroke gap, including color, gradient, tint, or mixed ink. Note: does not apply when the top edge uses a solid stroke type.
> Number **topEdgeStrokeGapTint**
>
> Tint percentage for the top edge border stroke gap color. (Range: 0 to 100) Note: does not apply when the top edge uses a solid stroke type.
> Boolean **topEdgeStrokeGapOverprint**
>
> True makes the top edge border stroke gap color overprint. Note: does not apply when the top edge uses a solid stroke type.
> Measurement Unit (Number or String)=any **rightEdgeStrokeWeight**
>
> Stroke weight for the right edge border.
> StrokeStyle **rightEdgeStrokeType**
>
> Stroke type for the right edge. Can also accept: String.
> Swatch **rightEdgeStrokeColor**
>
> Right edge border stroke color specified as a swatch.
> Number **rightEdgeStrokeTint**
>
> Right edge border stroke tint expressed as a percentage. (Range: 0 to 100)
> Boolean **rightEdgeStrokeOverprint**
>
> True makes the right edge border stroke overprint.
> Swatch **rightEdgeStrokeGapColor**
>
> Swatch applied to the right edge border stroke gap, including color, gradient, tint, or mixed ink. Note: does not apply when the right edge uses a solid stroke type.
> Number **rightEdgeStrokeGapTint**
>
> Tint percentage for the right edge border stroke gap color. (Range: 0 to 100) Note: does not apply when the right edge uses a solid stroke type.
> Boolean **rightEdgeStrokeGapOverprint**
>
> True makes the right edge border stroke gap color overprint. Note: does not apply when the right edge uses a solid stroke type.
> Measurement Unit (Number or String)=any **bottomEdgeStrokeWeight**
>
> Stroke weight for the bottom edge border.
> StrokeStyle **bottomEdgeStrokeType**
>
> Stroke type for the bottom edge. Can also accept: String.
> Swatch **bottomEdgeStrokeColor**
>
> Swatch applied to the bottom edge border stroke, including color, gradient, tint, or mixed ink.
> Number **bottomEdgeStrokeTint**
>
> Bottom edge border stroke tint expressed as a percentage.
> Boolean **bottomEdgeStrokeOverprint**
>
> True makes the bottom edge border stroke overprint.
> Swatch **bottomEdgeStrokeGapColor**
>
> Swatch applied to the bottom edge border stroke gap, including color, gradient, tint, or mixed ink. Note: does not apply when the bottom edge uses a solid stroke type.
> Number **bottomEdgeStrokeGapTint**
>
> Tint percentage for the bottom edge border stroke gap color. (Range: 0 to 100) Note: does not apply when the bottom edge uses a solid stroke type.
> Boolean **bottomEdgeStrokeGapOverprint**
>
> True makes the bottom edge border stroke gap color overprint. Note: does not apply when the bottom edge uses a solid stroke type.
> Measurement Unit (Number or String)=any **innerRowStrokeWeight**
>
> Stroke weight for the inner row border strokes.
> StrokeStyle **innerRowStrokeType**
>
> Stroke type for the inner row. Can also accept: String.
> Swatch **innerRowStrokeColor**
>
> Inner row border stroke color specified as a swatch.
> Number **innerRowStrokeTint**
>
> Inner row border stroke tint expressed as a percentage. (Range: 0 to 100)
> Boolean **innerRowStrokeOverprint**
>
> True makes the inner row border stroke overprint.
> Swatch **innerRowStrokeGapColor**
>
> Swatch applied to the inner row border stroke gap, including color, gradient, tint, or mixed ink. Note: does not apply when the inner row uses a solid stroke type.
> Number **innerRowStrokeGapTint**
>
> Tint percentage for the inner row border stroke. (Range: 0 to 100) Note: does not apply when the inner row uses a solid stroke type.
> Boolean **innerRowStrokeGapOverprint**
>
> True makes the inner row border stroke gap color overprint. Note: does not apply when the inner row uses a solid stroke type.
> Measurement Unit (Number or String)=any **innerColumnStrokeWeight**
>
> Stroke weight for the inner column border.
> StrokeStyle **innerColumnStrokeType**
>
> Stroke type for the inner column. Can also accept: String.
> Swatch **innerColumnStrokeColor**
>
> Inner column border stroke color specified as a swatch.
> Number **innerColumnStrokeTint**
>
> Inner column border stroke tint expressed as a percentage. (Range: 0 to 100)
> Boolean **innerColumnStrokeOverprint**
>
> True makes the inner column border stroke overprint.
> Swatch **innerColumnStrokeGapColor**
>
> Swatch applied to the inner column border stroke gap, including color, gradient, tint, or mixed ink. Note: does not apply when the inner column uses a solid stroke type.
> Number **innerColumnStrokeGapTint**
>
> Tint percentage for the inner column border stroke gap color. (Range: 0 to 100) Note: does not apply when the inner column uses a solid stroke type.
> Boolean **innerColumnStrokeGapOverprint**
>
> True makes the inner column border stroke gap color overprint. Note: does not apply when the inner column uses a solid stroke type.
> Measurement Unit (Number or String)=any **minimumHeight**
>
> Minimum height allowed for cells in the Row. Note: with auto grow enabled, content can make cells larger than this value; the minimum height can also influence redistribution.
> Measurement Unit (Number or String)=any **maximumHeight**
>
> Maximum height cells in the Row are allowed to reach. Note: cells cannot exceed this value even with auto grow set to true, and redistribution can also be affected by the maximum height.
> Boolean **keepWithNextRow**
>
> True keeps this row together with the following row when the table breaks across text frames or pages.
> StartParagraph **startRow**
>
> Specifies the row start location.
> Boolean **autoGrow**
>
> True lets the Row's cell height or cell heights change automatically to fit cell content. Note: cells may grow or shrink up to the specified maximum or minimum height.
> RowTypes **rowType**
>
> Row type value.
> Measurement Unit (Number or String)=any **graphicLeftInset**
>
> Left inset for the graphic cell.
> Measurement Unit (Number or String)=any **graphicTopInset**
>
> Top inset for the graphic cell.
> Measurement Unit (Number or String)=any **graphicRightInset**
>
> Right inset for the graphic cell.
> Measurement Unit (Number or String)=any **graphicBottomInset**
>
> Bottom inset for the graphic cell.
> Boolean **clipContentToGraphicCell**
>
> True clips the graphic cell content to the cell width and height.
> Measurement Unit (Number or String)=any **textTopInset**
>
> Top inset for the text cell.
> Measurement Unit (Number or String)=any **textLeftInset**
>
> Left inset for the text cell.
> Measurement Unit (Number or String)=any **textBottomInset**
>
> Bottom inset for the text cell.
> Measurement Unit (Number or String)=any **textRightInset**
>
> Right inset for the text cell.
> Boolean **clipContentToTextCell**
>
> True clips the text cell content to the cell width and height.
> HorizontalOrVertical **writingDirection**
>
> Text direction used in the cell.
> Object **properties**
>
> Property bag used to set several properties in one operation.

### Methods

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. A polygon object is produced for each text line. If the converted text consists of a single letter with no internal spaces or detached pieces, that polygon has one path only. Note: to check whether outlines may be created for a font, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True removes the original text; false places separate outline object(s) above it. (Optional) |

> **recompose**()
>
> Reflows the text in the Row.
> Text **findText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Locates text matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Locates glyphs matching the find what value, then substitutes the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Locates text matching the find character type value, then substitutes the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True returns matching results in reverse order. (Optional) |

> **remove**()
>
> Removes the Row.
> Cell **merge**( Mixed **with** )
>
> Combines the cells.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Cell(s) used as the merge target. Accepts: Cell, Row or Column. (Optional) |

> Cell **unmerge**()
>
> Separates all merged cells in the Row.
> **split**( HorizontalOrVertical **using** )
>
> Divides the cell on the named axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HorizontalOrVertical | using | Axis direction used for splitting the cell. |

> **redistribute**( HorizontalOrVertical **using**, Mixed **thru** )
>
> Evens the specified range of Rows so the Rows use a uniform size. Note: maximum or minimum height or width settings on some cells in the range may keep the result from being perfectly even.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HorizontalOrVertical | using | Direction used for redistribution. |
| Mixed | thru | Final Row in the range. Accepts: Cell, Column or Row. (Optional) |

> **select**( SelectionOptions **existingSelection** )
>
> Selects this object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Row selection state relative to objects that are already selected. (Optional) |

> String **toSource**()
>
> Produces a string that can be executed to return the Row.
> Row **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type value. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Rows

A collection containing table rows.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Mixed **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a Row.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | at | Position for the Row, either relative to the reference object or within the table. (Optional) |
| Mixed | reference | Reference object. Note: it must belong to the table. This is required only when the at value contains before or after. Accepts: Row, Column, Cell or Table. (Optional) |
| Object | withProperties | Starting property values for the new Row. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Row.
> Row **item**( Mixed **index** )
>
> Gets the Row identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepted types: Long Integer or String. |

> Row **itemByName**( String **name** )
>
> Gets the Row with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Row **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Rows contained in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Row, index, or name at the start of the range. Can accept: Row, Long Integer or String. |
| Mixed | to | Ending boundary as a Row, index, or name. Accepted types: Row, Long Integer or String. |

> Row **firstItem**()
>
> Gets the first Row in the collection.
> Row **lastItem**()
>
> Gets the final Row in the collection.
> Row **middleItem**()
>
> Gets the middle Row in the collection.
> Row **previousItem**( Row **obj** )
>
> Gets the Row whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Row | obj | Index of the Row that follows the wanted Row. |

> Row **nextItem**( Row **obj** )
>
> Gets the Row whose index comes after the specified Row in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Row | obj | Row whose index is before the wanted Row. |

> Row **anyItem**()
>
> Gets any Row in the collection.
> Row **everyItem**()
>
> Gets every Row in the collection.
> String **toSource**()
>
> Produces a string that can be executed to return the Row.
> Row **[]**( Number **index** )
>
> Gets the Row at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## RubyAlignments

Settings for ruby alignment.

### Class

> _Read Only_
>
> Number `RUBY_LEFT` = 1249012838
>
> Aligns ruby to the parent text's left-most character.
> _Read Only_
>
> Number `RUBY_CENTER` = 1249010548
>
> Centers ruby against the parent text.
> _Read Only_
>
> Number `RUBY_RIGHT` = 1249014388
>
> Aligns ruby to the parent text's right-most character.
> _Read Only_
>
> Number `RUBY_FULL_JUSTIFY` = 1249011306
>
> Spreads ruby with full justification over the parent text span.
> _Read Only_
>
> Number `RUBY_JIS` = 1249012339
>
> Uses Ruby JIS.
> _Read Only_
>
> Number `RUBY_EQUAL_AKI` = 1249011041
>
> Uses Ruby equal aki.
> _Read Only_
>
> Number `RUBY_1_AKI` = 1248997729
>
> Uses Ruby 1 aki.

## RubyKentenPosition

Settings that place kenten or ruby in relation to the parent character.

### Class

> _Read Only_
>
> Number `ABOVE_RIGHT` = 1248551282
>
> Positions kenten or ruby above and to the right of the parent character.
> _Read Only_
>
> Number `BELOW_LEFT` = 1248551532
>
> Positions kenten or ruby below and to the left of the parent character.

## RubyOverhang

Settings for ruby overhang.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Disallows ruby overhang.
> _Read Only_
>
> Number `RUBY_OVERHANG_ONE_RUBY` = 1249013553
>
> Sets ruby overhang to one ruby.
> _Read Only_
>
> Number `RUBY_OVERHANG_HALF_RUBY` = 1249013554
>
> Sets ruby overhang to one-half ruby.
> _Read Only_
>
> Number `RUBY_OVERHANG_ONE_CHAR` = 1249013603
>
> Sets ruby overhang to the size of one character.
> _Read Only_
>
> Number `RUBY_OVERHANG_HALF_CHAR` = 1249011811
>
> Sets ruby overhang to one-half the size of one chararacter.
> _Read Only_
>
> Number `RUBY_OVERHANG_NO_LIMIT` = 1249013621
>
> Removes the size limit for ruby overhang.

## RubyParentSpacing

Settings for ruby spacing against the parent text.

### Class

> _Read Only_
>
> Number `RUBY_PARENT_NO_ADJUSTMENT` = 1249013345
>
> Keeps ruby spacing from being based on the parent text.
> _Read Only_
>
> Number `RUBY_PARENT_BOTH_SIDES` = 1249010291
>
> Uses Ruby parent both sides.
> _Read Only_
>
> Number `RUBY_PARENT_121_AKI` = 1248997682
>
> Uses Ruby parent 121 aki.
> _Read Only_
>
> Number `RUBY_PARENT_EQUAL_AKI` = 1249014113
>
> Uses the parent text aki on the ruby characters.
> _Read Only_
>
> Number `RUBY_PARENT_FULL_JUSTIFY` = 1249014634
>
> Fully justifies ruby characters to the two parent-text edges.

## RubyTypes

Settings for ruby type.

### Class

> _Read Only_
>
> Number `GROUP_RUBY` = 1249011570
>
> Supplies ruby for a character group.
> _Read Only_
>
> Number `PER_CHARACTER_RUBY` = 1249013859
>
> Supplies ruby separately for each character in the group.
