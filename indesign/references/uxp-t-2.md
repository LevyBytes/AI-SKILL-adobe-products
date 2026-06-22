# Table Style, Table Styles

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TableStyle; TableStyles.

## TableStyle

A table-style definition.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the TableStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the TableStyle, which can be a Document, Application or TableStyleGroup.
> _Read Only_
>
> Number **index**
>
> Position of the TableStyle inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> Measurement Unit (Number or String)=any **graphicLeftInset**
>
> Left inset used by the graphic cell.
> Measurement Unit (Number or String)=any **graphicTopInset**
>
> Top inset used by the graphic cell.
> Measurement Unit (Number or String)=any **graphicRightInset**
>
> Right inset used by the graphic cell.
> Measurement Unit (Number or String)=any **graphicBottomInset**
>
> Bottom inset used by the graphic cell.
> Boolean **clipContentToGraphicCell**
>
> When true, graphic cell content is clipped to the cell's width and height.
> Measurement Unit (Number or String)=any **textTopInset**
>
> Top inset used by the text cell.
> Measurement Unit (Number or String)=any **textLeftInset**
>
> Left inset used by the text cell.
> Measurement Unit (Number or String)=any **textBottomInset**
>
> Bottom inset used by the text cell.
> Measurement Unit (Number or String)=any **textRightInset**
>
> Right inset used by the text cell.
> Boolean **clipContentToTextCell**
>
> When true, text cell content is clipped to the cell's width and height.
> String **name**
>
> Name assigned to the TableStyle.
> Mixed **basedOn**
>
> Base style for this style. Can return: TableStyle or String.
> StrokeOrderTypes **strokeOrder**
>
> Order used when row and column strokes meet at corners.
> Measurement Unit (Number or String)=any **topBorderStrokeWeight**
>
> Stroke weight used for the table's top border stroke.
> StrokeStyle **topBorderStrokeType**
>
> Stroke type applied to the top border. Can also accept: String.
> Swatch **topBorderStrokeColor**
>
> Swatch that defines the table top border stroke color, using a color, gradient, tint, or mixed ink.
> Number **topBorderStrokeTint**
>
> Percentage tint applied to the table top border stroke. (Range: 0 to 100)
> Boolean **topBorderStrokeOverprint**
>
> When true, top border strokes overprint.
> Swatch **topBorderStrokeGapColor**
>
> Swatch for the table top border stroke gap color, using a color, gradient, tint, or mixed ink. Use only with a non-solid top border stroke type.
> Number **topBorderStrokeGapTint**
>
> Percentage tint for the table top border stroke gap color. (Range: 0 to 100) Use only with a non-solid top border stroke type.
> Boolean **topBorderStrokeGapOverprint**
>
> When true, the top border stroke gap overprints. Use only with a non-solid top border stroke type.
> Measurement Unit (Number or String)=any **leftBorderStrokeWeight**
>
> Stroke weight used for the left border stroke.
> StrokeStyle **leftBorderStrokeType**
>
> Stroke type applied to the left border. Can also accept: String.
> Swatch **leftBorderStrokeColor**
>
> Swatch that defines the left border stroke color, using a color, gradient, tint, or mixed ink.
> Number **leftBorderStrokeTint**
>
> Percentage tint applied to the left border stroke. (Range: 0 to 100)
> Boolean **leftBorderStrokeOverprint**
>
> When true, the left border stroke overprints.
> Swatch **leftBorderStrokeGapColor**
>
> Swatch for the left border stroke gap color, using a color, gradient, tint, or mixed ink. Use only with a non-solid left border stroke type.
> Number **leftBorderStrokeGapTint**
>
> Percentage tint for the left border stroke gap color. (Range: 0 to 100) Use only with a non-solid left border stroke type.
> Boolean **leftBorderStrokeGapOverprint**
>
> When true, the left border stroke gap overprints. Use only with a non-solid left border stroke type.
> Measurement Unit (Number or String)=any **bottomBorderStrokeWeight**
>
> Stroke weight used for the bottom border stroke.
> StrokeStyle **bottomBorderStrokeType**
>
> Stroke type applied to the bottom border. Can also accept: String.
> Swatch **bottomBorderStrokeColor**
>
> Swatch that defines the bottom border stroke color, using a color, gradient, tint, or mixed ink.
> Number **bottomBorderStrokeTint**
>
> Percentage tint applied to the bottom border stroke. (Range: 0 to 100)
> Boolean **bottomBorderStrokeOverprint**
>
> When true, the bottom border stroke overprints.
> Swatch **bottomBorderStrokeGapColor**
>
> Swatch for the bottom border stroke gap color, using a color, gradient, tint, or mixed ink. Use only with a non-solid bottom border stroke type.
> Number **bottomBorderStrokeGapTint**
>
> Percentage tint for the bottom border stroke gap color. (Range: 0 to 100) Use only with a non-solid bottom border stroke type.
> Boolean **bottomBorderStrokeGapOverprint**
>
> When true, the bottom border stroke gap overprints. Use only with a non-solid bottom border stroke type.
> Measurement Unit (Number or String)=any **rightBorderStrokeWeight**
>
> Stroke weight used for the right border stroke.
> StrokeStyle **rightBorderStrokeType**
>
> Stroke type applied to the right border. Can also accept: String.
> Swatch **rightBorderStrokeColor**
>
> Swatch that defines the right border stroke color, using a color, gradient, tint, or mixed ink.
> Number **rightBorderStrokeTint**
>
> Percentage tint applied to the right border stroke. (Range: 0 to 100)
> Boolean **rightBorderStrokeOverprint**
>
> When true, the right border stroke overprints.
> Swatch **rightBorderStrokeGapColor**
>
> Swatch for the right border stroke gap color, using a color, gradient, tint, or mixed ink. Use only with a non-solid right border stroke type.
> Number **rightBorderStrokeGapTint**
>
> Percentage tint for the right border stroke gap color. (Range: 0 to 100) Use only with a non-solid right border stroke type.
> Boolean **rightBorderStrokeGapOverprint**
>
> When true, the right border stroke gap color overprints. Use only with a non-solid right border stroke type.
> Measurement Unit (Number or String)=any **spaceBefore**
>
> Space placed above the table.
> Measurement Unit (Number or String)=any **spaceAfter**
>
> Space placed below the table.
> Number **skipFirstAlternatingStrokeRows**
>
> Count of body rows at the start of the table that bypass border stroke formatting. Applies when the start row stroke count is at least 1 and/or the end row stroke count is at least 1.
> Number **skipLastAlternatingStrokeRows**
>
> Count of body rows at the end of the table that bypass border stroke formatting. Applies when the start row stroke count is at least 1 and/or the end row stroke count is at least 1.
> Number **startRowStrokeCount**
>
> Row count in the first alternating row strokes group.
> Swatch **startRowStrokeColor**
>
> Swatch defining row border color in the first alternating row strokes group, using a color, gradient, tint, or mixed ink. Applies when start row stroke count is at least 1.
> Measurement Unit (Number or String)=any **startRowStrokeWeight**
>
> Stroke weight for row borders in the first alternating row strokes group. Applies when start row stroke count is at least 1.
> StrokeStyle **startRowStrokeType**
>
> Stroke type for the first alternating row-stroke group. Can also accept: String.
> Number **startRowStrokeTint**
>
> Percentage tint for borders in the first alternating row strokes group. (Range: 0 to 100) Applies when start row stroke count is at least 1.
> Boolean **startRowStrokeGapOverprint**
>
> When true, the row border stroke gap color in the first alternating row strokes group overprints. Applies when start row stroke count is at least 1.
> Swatch **startRowStrokeGapColor**
>
> Swatch that sets the row border stroke gap color in the first alternating row strokes group, using a color, gradient, tint, or mixed ink. Applies when start row stroke count is at least 1.
> Number **startRowStrokeGapTint**
>
> Percentage tint for the row border gap color in the first alternating rows group. (Range: 0 to 100) Applies when start row stroke count is at least 1.
> Boolean **startRowStrokeOverprint**
>
> When true, row borders in the first alternating row strokes group overprint. Applies when start row stroke count is at least 1.
> Number **endRowStrokeCount**
>
> Row count in the second alternating row strokes group.
> Swatch **endRowStrokeColor**
>
> Swatch defining row border stroke color in the second alternating row strokes group, using a color, gradient, tint, or mixed ink. Applies when end row stroke count is at least 1.
> Measurement Unit (Number or String)=any **endRowStrokeWeight**
>
> Stroke weight for row borders in the second alternating row strokes group. Applies when end row stroke count is at least 1.
> StrokeStyle **endRowStrokeType**
>
> Stroke type for the second alternating row-stroke group. Can also accept: String.
> Number **endRowStrokeTint**
>
> Percentage tint for row borders in the second alternating strokes group. (Range: 0 to 100) Applies when end row stroke count is at least 1.
> Boolean **endRowStrokeOverprint**
>
> When true, rows in the second alternating rows group overprint. Applies when end row stroke count is at least 1.
> Swatch **endRowStrokeGapColor**
>
> Swatch defining row border gap color in the second alternating rows group, using a color, gradient, tint, or mixed ink. Applies when end row stroke count is at least 1.
> Number **endRowStrokeGapTint**
>
> Percentage tint for gap color on rows in the second alternating strokes group. (Range: 0 to 100) Applies when end row stroke count is at least 1 and end row stroke type is not solid.
> Boolean **endRowStrokeGapOverprint**
>
> When true, the row border gap in the second alternating rows group overprints. Applies when end row stroke count is at least 1.
> Number **skipFirstAlternatingStrokeColumns**
>
> Count of columns on the table's left side that bypass border stroke formatting. Applies when the start column stroke count is at least 1 and/or the end column stroke count is at least 1.
> Number **skipLastAlternatingStrokeColumns**
>
> Count of columns on the table's right side that bypass border stroke formatting. Applies when the start column stroke count is at least 1 and/or the end column stroke count is at least 1.
> Number **startColumnStrokeCount**
>
> Column count in the first alternating column strokes group.
> Swatch **startColumnStrokeColor**
>
> Swatch defining column border stroke color in the first alternating column strokes group, using a color, gradient, tint, or mixed ink.
> Measurement Unit (Number or String)=any **startColumnStrokeWeight**
>
> Stroke weight for column borders in the first alternating column strokes group. Applies when start column stroke count is at least 1.
> StrokeStyle **startColumnStrokeType**
>
> Stroke type for the first alternating column-stroke group. Can also accept: String.
> Number **startColumnStrokeTint**
>
> Percentage tint assigned to borders in the first alternating column-stroke group. (Range: 0 to 100) Applies when start column stroke count is at least 1.
> Boolean **startColumnStrokeOverprint**
>
> When true, column borders in the first alternating column strokes group overprint. Applies when start column stroke count is at least 1.
> Swatch **startColumnStrokeGapColor**
>
> Swatch defining column border stroke gap color in the first alternating column strokes group, using a color, gradient, tint, or mixed ink. Applies when start column stroke count is at least 1.
> Number **startColumnStrokeGapTint**
>
> Percentage tint for column border gap color in the first alternating column strokes group. (Range: 0 to 100) Applies when start column stroke count is at least 1.
> Boolean **startColumnStrokeGapOverprint**
>
> When true, the column border gap in the first alternating column strokes group overprints. Applies when start column stroke count is at least 1.
> Number **endColumnStrokeCount**
>
> Column count in the second alternating column strokes group.
> Swatch **endColumnStrokeColor**
>
> Swatch defining column border stroke color in the second alternating column strokes group, using a color, gradient, tint, or mixed ink. Applies when end column stroke count is at least 1.
> Measurement Unit (Number or String)=any **endColumnStrokeWeight**
>
> Stroke weight for column borders in the second alternating column strokes group. Applies when end column stroke count is at least 1.
> StrokeStyle **endColumnLineStyle**
>
> Stroke type for the second alternating column-stroke group. Can also accept: String.
> Number **endColumnStrokeTint**
>
> Percentage tint assigned to borders in the second alternating column-stroke group. (Range: 0 to 100) Applies when end column stroke count is at least 1.
> Boolean **endColumnStrokeOverprint**
>
> When true, column borders in the second alternating column strokes group overprint. Applies when end column stroke count is at least 1.
> Swatch **endColumnStrokeGapColor**
>
> Swatch defining column border stroke gap color in the second alternating column strokes group, using a color, gradient, tint, or mixed ink. Applies when end column stroke count is at least 1.
> Number **endColumnStrokeGapTint**
>
> Percentage tint for column border gap color in the second alternating column strokes group. (Range: 0 to 100) Applies when end column stroke count is at least 1.
> Boolean **endColumnStrokeGapOverprint**
>
> When true, the column border stroke gap in the second alternating column strokes group overprints. Applies when end column stroke count is at least 1.
> Boolean **columnFillsPriority**
>
> When true, alternating row fills are hidden. When false, alternating column fills are hidden.
> Number **skipFirstAlternatingFillRows**
>
> Number of body rows at the table start skipped before the row fill color is applied. Applies when alternating fills are defined for table rows.
> Number **skipLastAlternatingFillRows**
>
> Number of body rows at the table end where the row fill color is not applied. Applies when alternating fills are defined for table rows.
> Swatch **startRowFillColor**
>
> Swatch defining fill color for rows in the first alternating fills group, using a color, gradient, tint, or mixed ink. Applies when alternating fills are defined for table rows.
> Number **startRowFillCount**
>
> Row count in the first alternating fills group. Applies when alternating fills are defined for table rows.
> Number **startRowFillTint**
>
> Percentage tint for rows in the first alternating fills group. (Range: 0 to 100) Applies when alternating fills are defined for table rows.
> Boolean **startRowFillOverprint**
>
> When true, rows in the first alternating fills group overprint. Applies when alternating fills are defined for table rows.
> Number **endRowFillCount**
>
> Row count in the second alternating fills group. Applies when alternating fills are defined for table rows.
> Swatch **endRowFillColor**
>
> Swatch defining fill color for rows in the second alternating fills group, using a color, gradient, tint, or mixed ink. Applies when alternating fills are defined for table rows.
> Number **endRowFillTint**
>
> Percentage tint for rows in the second alternating fills group. (Range: 0 to 100) Applies when alternating fills are defined for table rows.
> Boolean **endRowFillOverprint**
>
> When true, rows in the second alternating fills group overprint. Applies when alternating fills are defined for table rows.
> Number **skipFirstAlternatingFillColumns**
>
> Number of columns on the table's left side skipped before the column fill color is applied. Applies when alternating fills are defined for table columns.
> Number **skipLastAlternatingFillColumns**
>
> Number of columns on the table's right side where the column fill color is not applied. Applies when alternating fills are defined for table columns.
> Number **startColumnFillCount**
>
> Column count in the first alternating fills group. Applies when alternating fills are defined for table columns.
> Swatch **startColumnFillColor**
>
> Swatch defining fill color for columns in the first alternating fills group, using a color, gradient, tint, or mixed ink. Applies when alternating fills are defined for table columns.
> Number **startColumnFillTint**
>
> Percentage tint for columns in the first alternating fills group. (Range: 0 to 100) Applies when alternating fills are defined for table columns.
> Boolean **startColumnFillOverprint**
>
> When true, columns in the first alternating fills group overprint. Applies when alternating fills are defined for table columns.
> Number **endColumnFillCount**
>
> Column count in the second alternating fills group. Applies when alternating fills are defined for table columns.
> Swatch **endColumnFillColor**
>
> Swatch defining fill color for columns in the second alternating fill group, using a color, gradient, tint, or mixed ink. Applies when alternating fills are defined for table columns.
> Number **endColumnFillTint**
>
> Percentage tint for columns in the second alternating fills group. (Range: 0 to 100) Applies when alternating fills are defined for table columns.
> Boolean **endColumnFillOverprint**
>
> When true, columns in the second alternating fills group overprint. Applies when alternating fills are defined for table columns.
> Boolean **headerRegionSameAsBodyRegion**
>
> When true, the header region uses the body region's cell style.
> Boolean **footerRegionSameAsBodyRegion**
>
> When true, the footer region uses the body region's cell style.
> Boolean **leftColumnRegionSameAsBodyRegion**
>
> When true, the left column region uses the body region's cell style.
> Boolean **rightColumnRegionSameAsBodyRegion**
>
> When true, the right column region uses the body region's cell style.
> CellStyle **headerRegionCellStyle**
>
> Cell style assigned to the header region. Can also accept: String.
> CellStyle **footerRegionCellStyle**
>
> Cell style assigned to the footer region. Can also accept: String.
> CellStyle **leftColumnRegionCellStyle**
>
> Cell style assigned to the left column region. Can also accept: String.
> CellStyle **rightColumnRegionCellStyle**
>
> Cell style assigned to the right column region. Can also accept: String.
> CellStyle **bodyRegionCellStyle**
>
> Cell style assigned to the body region. Can also accept: String.
> String **label**
>
> Property that can hold any string value.
> Object **properties**
>
> Property used to set multiple properties at once.

### Methods

> **remove**( TableStyle **replacingWith** )
>
> Removes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TableStyle | replacingWith | Style applied as the replacement for the removed style. (Optional) |

> TableStyle **duplicate**()
>
> Creates a duplicate of the TableStyle.
> TableStyle **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the style to the requested place.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Object used as the reference. This parameter is required if to specifies before or after. Accepts: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Stored value. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds executable source text that resolves back to the TableStyle.
> TableStyle **getElements**()
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

## TableStyles

A collection containing table styles.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> TableStyle **add**( Object **withProperties** )
>
> Creates a TableStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the created TableStyle. (Optional) |

> Number **count**()
>
> Reports how many TableStyle elements are present.
> TableStyle **item**( Mixed **index** )
>
> Gets the TableStyle addressed by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> TableStyle **itemByName**( String **name** )
>
> Gets the TableStyle with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> TableStyle **itemByID**( Number **id** )
>
> Gets the TableStyle with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> TableStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TableStyles found inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TableStyle, index, or name for the range. Can accept: TableStyle, Long Integer or String. |
| Mixed | to | Ending TableStyle, index, or name for the range. Can accept: TableStyle, Long Integer or String. |

> TableStyle **firstItem**()
>
> Gets the first TableStyle from the collection.
> TableStyle **lastItem**()
>
> Gets the final TableStyle from the collection.
> TableStyle **middleItem**()
>
> Gets the center TableStyle from the collection.
> TableStyle **previousItem**( TableStyle **obj** )
>
> Gets the TableStyle positioned immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TableStyle | obj | TableStyle index that comes after the TableStyle being requested. |

> TableStyle **nextItem**( TableStyle **obj** )
>
> Gets the TableStyle positioned after the supplied TableStyle in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TableStyle | obj | TableStyle whose position is before the TableStyle being requested. |

> TableStyle **anyItem**()
>
> Gets an arbitrary TableStyle from the collection.
> TableStyle **everyItem**()
>
> Gets all TableStyle entries in the collection.
> String **toSource**()
>
> Builds executable source text that resolves back to the TableStyle.
> TableStyle **[]**( Number **index** )
>
> Gets the TableStyle at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
