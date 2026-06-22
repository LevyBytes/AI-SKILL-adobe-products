# Cell

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Represents one cell in a table.

## Instance

> _Read Only_
>
> XMLItem **associatedXMLElement**
>
> XML element linked to the Cell.
> _Read Only_
>
> Number **id**
>
> Unique Cell ID.
> _Read Only_
>
> String **name**
>
> Cell name.
> _Read Only_
>
> Number **index**
>
> Position of the Cell inside its containing object.
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
> True when the story contains overset text.
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
> PageItem **allPageItems**
>
> Lists every page item inside the Cell.
> _Read Only_
>
> Graphic **allGraphics**
>
> Lists every graphic inside the Cell.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully.
> _Read Only_
>
> Mixed **parent**
>
> Parent for the Cell, which may be a XMLElement, Cell, Table, Column or Row.
> _Read Only_
>
> Texts **texts**
>
> Text object collection.
> _Read Only_
>
> Characters **characters**
>
> Character collection.
> _Read Only_
>
> Words **words**
>
> Word collection.
> _Read Only_
>
> Lines **lines**
>
> Line collection.
> _Read Only_
>
> TextColumns **textColumns**
>
> Text column collection.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Paragraph collection.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Insertion point collection.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Text style range collection.
> _Read Only_
>
> Footnotes **footnotes**
>
> Footnote collection.
> _Read Only_
>
> Endnotes **endnotes**
>
> Endnote collection.
> _Read Only_
>
> TextVariableInstances **textVariableInstances**
>
> Text variable instance collection.
> _Read Only_
>
> Tables **tables**
>
> Table collection.
> _Read Only_
>
> Cells **cells**
>
> Table cell collection.
> _Read Only_
>
> Rows **rows**
>
> Table row collection.
> _Read Only_
>
> Columns **columns**
>
> Table column collection.
> _Read Only_
>
> Ovals **ovals**
>
> Ellipse collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> SplineItems collection.
> _Read Only_
>
> PageItems **pageItems**
>
> PageItems collection for processing every contained page item, whether the container is a document, page, or group, without filtering by type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Rectangle collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Graphic line collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Text frame collection.
> _Read Only_
>
> Polygons **polygons**
>
> Polygon collection.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Endnote text frame collection.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> _Read Only_
>
> Changes **changes**
>
> Change collection.
> _Read Only_
>
> Notes **notes**
>
> Note collection.
> _Read Only_
>
> Groups **groups**
>
> Group collection.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> FormFields **formFields**
>
> Form field collection.
> _Read Only_
>
> Buttons **buttons**
>
> Button collection.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Multi-state object collection.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Checkbox collection.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Combobox collection.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Listbox collection.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Radio button collection.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Text box collection.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Signature field collection.
> _Read Only_
>
> HiddenTexts **hiddenTexts**
>
> Hidden text object collection.
> Measurement Unit (Number or String)=any **height**
>
> Cell height. For a table or column, this is the total of the row heights.
> Measurement Unit (Number or String)=any **width**
>
> Cell width. For a table or row, this is the total of the column widths.
> Mixed **contents**
>
> Text contents. For rows or columns, a string fills each cell in that row or column. With an array, the first array value fills the left-most row cell or top-most column cell; following values continue rightward for rows or downward for columns. Returns one of: PageItem, String, SpecialCharacters enumerator or Array of Strings, SpecialCharacters enumerators or PageItems. Accepts one of: PageItem, NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators, NothingEnum enumerators or PageItems.
> Number **gradientFillLength**
>
> Length for a linear gradient, or radius for a radial gradient, applied to the object's fill.
> Number **gradientFillAngle**
>
> Linear gradient angle applied to the object's fill. (Range: -180 to 180)
> Measurement Unit (Number or String)=any **gradientFillStart**
>
> Starting point for a Cell fill gradient in page coordinates, formatted as [x, y].
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
> Swatch used for the object's fill: color, gradient, tint, or mixed ink. Can also accept: String.
> Number **fillTint**
>
> Fill tint percentage for the object.
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
> True places the diagonal line ahead of cell contents.
> Measurement Unit (Number or String)=any **diagonalLineStrokeWeight**
>
> Stroke weight for diagonal lines.
> StrokeStyle **diagonalLineStrokeType**
>
> Stroke type used by the diagonal line or lines. Can also accept: String.
> Swatch **diagonalLineStrokeColor**
>
> Swatch that defines the diagonal line color.
> Number **diagonalLineStrokeTint**
>
> Diagonal line tint percentage. (Range: 0 to 100)
> Boolean **diagonalLineStrokeOverprint**
>
> True makes the diagonal line stroke overprint.
> Swatch **diagonalLineStrokeGapColor**
>
> Swatch for the diagonal line stroke gap, using a color, gradient, tint, or mixed ink. Note: Solid diagonal line stroke type disallows this setting.
> Number **diagonalLineStrokeGapTint**
>
> Diagonal line stroke gap color tint percentage. Note: Solid diagonal line stroke type disallows this setting.
> Boolean **diagonalLineStrokeGapOverprint**
>
> True overprints the diagonal line stroke gap. Note: Solid diagonal line stroke type disallows this setting.
> Boolean **clipContentToCell**
>
> True clips cell content to the cell width and height. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell
> FirstBaseline **firstBaselineOffset**
>
> Distance from the text baseline to the cell top inset.
> VerticalJustification **verticalJustification**
>
> Vertical alignment setting for the cell.
> Measurement Unit (Number or String)=any **paragraphSpacingLimit**
>
> Caps added paragraph-to-paragraph space inside a cell. Note: Applies only with justified vertical justification.
> Measurement Unit (Number or String)=any **minimumFirstBaselineOffset**
>
> Distance from the text baseline to the top inset of the frame or cell.
> Number **rotationAngle**
>
> Cell rotation angle in degrees, limited to 0, 90, 180, or 270.
> Measurement Unit (Number or String)=any **leftEdgeStrokeWeight**
>
> Stroke weight for the left edge border.
> StrokeStyle **leftEdgeStrokeType**
>
> Stroke type for the left edge. Can also accept: String.
> Swatch **leftEdgeStrokeColor**
>
> Swatch applied to the left edge border stroke: color, gradient, tint, or mixed ink.
> Number **leftEdgeStrokeTint**
>
> Tint percentage for the left edge border stroke. (Range: 0 to 100)
> Boolean **leftEdgeStrokeOverprint**
>
> True makes the left edge border stroke overprint.
> Swatch **leftEdgeStrokeGapColor**
>
> Swatch applied to the left edge border stroke gap: color, gradient, tint, or mixed ink. Note: Solid left edge stroke type disallows this setting.
> Number **leftEdgeStrokeGapTint**
>
> Left edge border stroke gap color tint. (Range: 0 to 100) Note: Solid left edge stroke type disallows this setting.
> Boolean **leftEdgeStrokeGapOverprint**
>
> True overprints the left edge border stroke gap color. Note: Solid left edge stroke type disallows this setting.
> Measurement Unit (Number or String)=any **topEdgeStrokeWeight**
>
> Stroke weight for the top edge border.
> StrokeStyle **topEdgeStrokeType**
>
> Stroke type for the top edge. Can also accept: String.
> Swatch **topEdgeStrokeColor**
>
> Swatch applied to the top edge border stroke: color, gradient, tint, or mixed ink.
> Number **topEdgeStrokeTint**
>
> Tint percentage for the top edge border stroke. (Range: 0 to 100)
> Boolean **topEdgeStrokeOverprint**
>
> True makes the top edge border stroke overprint.
> Swatch **topEdgeStrokeGapColor**
>
> Swatch applied to the top edge border stroke gap: color, gradient, tint, or mixed ink. Note: Solid top edge stroke type disallows this setting.
> Number **topEdgeStrokeGapTint**
>
> Top edge border stroke gap color tint. (Range: 0 to 100) Note: Solid top edge stroke type disallows this setting.
> Boolean **topEdgeStrokeGapOverprint**
>
> True overprints the top edge border stroke gap color. Note: Solid top edge stroke type disallows this setting.
> Measurement Unit (Number or String)=any **rightEdgeStrokeWeight**
>
> Stroke weight for the right edge border.
> StrokeStyle **rightEdgeStrokeType**
>
> Stroke type for the right edge. Can also accept: String.
> Swatch **rightEdgeStrokeColor**
>
> Swatch color for the right edge border stroke.
> Number **rightEdgeStrokeTint**
>
> Tint percentage for the right edge border stroke. (Range: 0 to 100)
> Boolean **rightEdgeStrokeOverprint**
>
> True makes the right edge border stroke overprint.
> Swatch **rightEdgeStrokeGapColor**
>
> Swatch applied to the right edge border stroke gap: color, gradient, tint, or mixed ink. Note: Solid right edge stroke type disallows this setting.
> Number **rightEdgeStrokeGapTint**
>
> Right edge border stroke gap color tint. (Range: 0 to 100) Note: Solid right edge stroke type disallows this setting.
> Boolean **rightEdgeStrokeGapOverprint**
>
> True overprints the right edge border stroke gap color. Note: Solid right edge stroke type disallows this setting.
> Measurement Unit (Number or String)=any **bottomEdgeStrokeWeight**
>
> Stroke weight for the bottom edge border.
> StrokeStyle **bottomEdgeStrokeType**
>
> Stroke type for the bottom edge. Can also accept: String.
> Swatch **bottomEdgeStrokeColor**
>
> Swatch applied to the bottom edge border stroke: color, gradient, tint, or mixed ink.
> Number **bottomEdgeStrokeTint**
>
> Tint percentage for the bottom edge border stroke.
> Boolean **bottomEdgeStrokeOverprint**
>
> True makes the bottom edge border stroke overprint.
> Swatch **bottomEdgeStrokeGapColor**
>
> Swatch applied to the bottom edge border stroke gap: color, gradient, tint, or mixed ink. Note: Solid bottom edge stroke type disallows this setting.
> Number **bottomEdgeStrokeGapTint**
>
> Bottom edge border stroke gap color tint. (Range: 0 to 100) Note: Solid bottom edge stroke type disallows this setting.
> Boolean **bottomEdgeStrokeGapOverprint**
>
> True overprints the bottom edge border stroke gap color. Note: Solid bottom edge stroke type disallows this setting.
> Measurement Unit (Number or String)=any **innerRowStrokeWeight**
>
> Stroke weight for inner row border strokes.
> StrokeStyle **innerRowStrokeType**
>
> Stroke type for the inner row. Can also accept: String.
> Swatch **innerRowStrokeColor**
>
> Swatch color for the inner row border stroke.
> Number **innerRowStrokeTint**
>
> Tint percentage for the inner row border stroke. (Range: 0 to 100)
> Boolean **innerRowStrokeOverprint**
>
> True makes the inner row border stroke overprint.
> Swatch **innerRowStrokeGapColor**
>
> Swatch applied to the inner row border stroke gap: color, gradient, tint, or mixed ink. Note: Solid inner row stroke type disallows this setting.
> Number **innerRowStrokeGapTint**
>
> Inner row border stroke gap tint value. (Range: 0 to 100) Note: Solid inner row stroke type disallows this setting.
> Boolean **innerRowStrokeGapOverprint**
>
> True overprints the inner row border stroke gap color. Note: Solid inner row stroke type disallows this setting.
> Measurement Unit (Number or String)=any **innerColumnStrokeWeight**
>
> Stroke weight for the inner column border.
> StrokeStyle **innerColumnStrokeType**
>
> Stroke type for the inner column. Can also accept: String.
> Swatch **innerColumnStrokeColor**
>
> Swatch color for the inner column border stroke.
> Number **innerColumnStrokeTint**
>
> Tint percentage for the inner column border stroke. (Range: 0 to 100)
> Boolean **innerColumnStrokeOverprint**
>
> True makes the inner column border stroke overprint.
> Swatch **innerColumnStrokeGapColor**
>
> Swatch applied to the inner column border stroke gap: color, gradient, tint, or mixed ink. Note: Solid inner column stroke type disallows this setting.
> Number **innerColumnStrokeGapTint**
>
> Inner column border stroke gap color tint. (Range: 0 to 100) Note: Solid inner column stroke type disallows this setting.
> Boolean **innerColumnStrokeGapOverprint**
>
> True overprints the inner column border stroke gap color. Note: Solid inner column stroke type disallows this setting.
> Measurement Unit (Number or String)=any **minimumHeight**
>
> Minimum height for cells in the Cell. Note: When auto grow is true, added content can expand cells beyond this value. Also, redistribution can be affected by minimum height.
> Measurement Unit (Number or String)=any **maximumHeight**
>
> Maximum growth height for cells in the Cell. Note: Even with auto grow set to true, this maximum cannot be surpassed. Also, redistribution can be affected by maximum height.
> Boolean **keepWithNextRow**
>
> True keeps the row with the next row when a table splits across text frames or pages.
> StartParagraph **startRow**
>
> Controls where the row begins.
> Boolean **autoGrow**
>
> True lets the height of the cell or cells in the Cell adjust automatically to fit cell content. Note: Cells may grow or shrink to the maximum or minimum height, when specified.
> RowTypes **rowType**
>
> Row type value.
> CellTypeEnum **cellType**
>
> Cell content type.
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
> True clips graphic cell content to the cell width and height.
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
> True clips text cell content to the cell width and height.
> CellStyle **appliedCellStyle**
>
> Cell style assigned to the cell. Can also accept: String.
> HorizontalOrVertical **writingDirection**
>
> Text direction inside the cell.
> String **label**
>
> Settable property that accepts any string.
> Object **properties**
>
> Property used to set multiple properties together.

### Methods

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Converts text into outlines. Each text line becomes a polygon object. If the converted text is a single letter with no internal spaces or detached pieces, its polygon has one path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True deletes the source text. False puts separate outline object(s) above the text. (Optional) |

> **autoTag**()
>
> Applies default XML preference tags to the object or its parent story.
> **recompose**()
>
> Forces Cell text composition to update.
> Text **findText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> Text **changeText**( Boolean **reverseOrder** )
>
> Finds text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> Text **findGrep**( Boolean **reverseOrder** )
>
> Finds text matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> Text **changeGrep**( Boolean **reverseOrder** )
>
> Finds text matching the find what value, then replaces it with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> Text **findGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching the find what value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> Text **changeGlyph**( Boolean **reverseOrder** )
>
> Finds glyphs matching the find what value, then replaces them with the change to value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> Text **findTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> Text **changeTransliterate**( Boolean **reverseOrder** )
>
> Finds text matching the find character type value, then replaces it with the change character type value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | reverseOrder | True orders returned results from the end back to the start. (Optional) |

> **remove**()
>
> Deletes the Cell.
> Cell **merge**( Mixed **with** )
>
> Combines cells.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Cell, Row, or Column to combine with this cell. Can accept: Cell, Row or Column. (Optional) |

> Cell **unmerge**()
>
> Separates every merged cell in the Cell.
> **split**( HorizontalOrVertical **using** )
>
> Splits the cell on the supplied axis.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HorizontalOrVertical | using | Direction used when splitting the cell. |

> **convertCellType**( CellTypeEnum **finalCellType**, Boolean **flagToPreserveData** )
>
> Changes the cell type. The new cell type parameter is required; data preservation is optional.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellTypeEnum | finalCellType | CellTypeEnum value that the cell should convert to. |
| Boolean | flagToPreserveData | True preserves the cell data. When converting a graphic cell to a text cell, the page item becomes inline. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Sets the label using the value for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Gets the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> **clearCellStyleOverrides**( Boolean **clearingOverridesThroughRootCellStyle** )
>
> Clears Cell Style overrides.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | clearingOverridesThroughRootCellStyle | True removes every override, including overrides not defined in the underlying cell style. (Optional) |

> **convertBulletsAndNumberingToText**()
>
> Turns bullet and numbering markers into editable text.
> **select**( SelectionOptions **existingSelection** )
>
> Makes this object selected.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SelectionOptions | existingSelection | Selection state for the Cell relative to objects already selected. (Optional) |

> String **toSource**()
>
> Produces source text that returns the Cell when executed.
> Cell **getElements**()
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
| String | eventType | Event type. |
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

## See also

- [Characters](uxp-characters.md)
