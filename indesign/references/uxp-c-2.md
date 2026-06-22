# Cell Style, Cell Styles, Cell Type Enum

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: CellStyle; CellStyles; CellTypeEnum.

## CellStyle

A cell style definition.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the CellStyle.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the CellStyle, either a Document, Application or CellStyleGroup.
> _Read Only_
>
> Number **index**
>
> Position of the CellStyle inside its containing object.
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
> Mixed **graphicLeftInset**
>
> Left inset for the graphic cell. Returns: Unit or NothingEnum enumerator.
> Mixed **graphicTopInset**
>
> Top inset for the graphic cell. Returns: Unit or NothingEnum enumerator.
> Mixed **graphicRightInset**
>
> Right inset for the graphic cell. Returns: Unit or NothingEnum enumerator.
> Mixed **graphicBottomInset**
>
> Bottom inset for the graphic cell. Returns: Unit or NothingEnum enumerator.
> Mixed **clipContentToGraphicCell**
>
> When true, graphic cell content is clipped to the cell width and height. Returns: Boolean or NothingEnum enumerator.
> Mixed **textTopInset**
>
> Top inset for the text cell. Returns: Unit or NothingEnum enumerator.
> Mixed **textLeftInset**
>
> Left inset for the text cell. Returns: Unit or NothingEnum enumerator.
> Mixed **textBottomInset**
>
> Bottom inset for the text cell. Returns: Unit or NothingEnum enumerator.
> Mixed **textRightInset**
>
> Right inset for the text cell. Returns: Unit or NothingEnum enumerator.
> Mixed **clipContentToTextCell**
>
> When true, text cell content is clipped to the cell width and height. Returns: Boolean or NothingEnum enumerator.
> Mixed **basedOn**
>
> Style used as the base for this style. Returns: CellStyle or String.
> Mixed **appliedParagraphStyle**
>
> Paragraph style assigned to the text. Returns: ParagraphStyle or NothingEnum enumerator. Also accepts: String.
> Mixed **gradientFillLength**
>
> Fill gradient length for a linear gradient, or radius for a radial gradient. Returns: Real or NothingEnum enumerator.
> Mixed **gradientFillAngle**
>
> Angle used by a linear gradient on the object's fill. (Range: -180 to 180). Returns: Real or NothingEnum enumerator.
> Mixed **gradientFillStart**
>
> Gradient fill start point for the CellStyle in page coordinates, formatted as [x, y]. Returns: Array of 2 Units or NothingEnum enumerator.
> Mixed **topInset**
>
> Cell top inset. Deprecated API; use TextTopInset or GraphicTopInset instead. Returns: Unit or NothingEnum enumerator.
> Mixed **leftInset**
>
> Cell left inset. Deprecated API; use TextLeftInset or GraphicLeftInset instead. Returns: Unit or NothingEnum enumerator.
> Mixed **bottomInset**
>
> Cell bottom inset. Deprecated API; use TextBottomInset or GraphicBottomInset instead. Returns: Unit or NothingEnum enumerator.
> Mixed **rightInset**
>
> Cell right inset. Deprecated API; use TextLeftInset or GraphicRightInset instead. Returns: Unit or NothingEnum enumerator.
> Mixed **fillColor**
>
> Fill swatch for color, gradient, tint, or mixed ink. Returns: Swatch or NothingEnum enumerator. Also accepts: String.
> Mixed **fillTint**
>
> Fill tint percentage. Returns: Real or NothingEnum enumerator.
> Mixed **overprintFill**
>
> When true, the object's fill overprints. Returns: Boolean or NothingEnum enumerator.
> Mixed **topLeftDiagonalLine**
>
> When true, draws a diagonal line from the top left. Returns: Boolean or NothingEnum enumerator.
> Mixed **topRightDiagonalLine**
>
> When true, draws a diagonal line from the top right. Returns: Boolean or NothingEnum enumerator.
> Mixed **diagonalLineInFront**
>
> When true, places the diagonal line in front of cell contents. Returns: Boolean or NothingEnum enumerator.
> Mixed **diagonalLineStrokeWeight**
>
> Stroke weight for diagonal lines. Returns: Unit or NothingEnum enumerator.
> Mixed **diagonalLineStrokeType**
>
> Stroke type for diagonal line or lines. Returns: StrokeStyle or NothingEnum enumerator. Also accepts: String.
> Mixed **diagonalLineStrokeColor**
>
> Swatch-specified color for diagonal lines. Returns: Swatch or NothingEnum enumerator.
> Mixed **diagonalLineStrokeTint**
>
> Tint percentage for diagonal lines. (Range: 0 to 100). Returns: Real or NothingEnum enumerator.
> Mixed **diagonalLineStrokeOverprint**
>
> When true, diagonal line strokes overprint. Returns: Boolean or NothingEnum enumerator.
> Mixed **diagonalLineStrokeGapColor**
>
> Gap swatch for diagonal line strokes, using color, gradient, tint, or mixed ink. Solid diagonal line stroke type does not support this value. Returns: Swatch or NothingEnum enumerator.
> Mixed **diagonalLineStrokeGapTint**
>
> Tint percentage for the diagonal line stroke gap color. Solid diagonal line stroke type does not support this value. Returns: Real or NothingEnum enumerator.
> Mixed **diagonalLineStrokeGapOverprint**
>
> When true, the diagonal line stroke gap overprints. Solid diagonal line stroke type does not support this value. Returns: Boolean or NothingEnum enumerator.
> Mixed **clipContentToCell**
>
> When true, cell content is clipped to the cell width and height. Deprecated API; use ClipContentsToTextCell or ClipContentsToPageItemCell instead. Returns: Boolean or NothingEnum enumerator.
> Mixed **firstBaselineOffset**
>
> Distance from the text baseline to the cell's top inset. Returns: FirstBaseline enumerator or NothingEnum enumerator.
> Mixed **verticalJustification**
>
> Vertical alignment for the cell. Returns: VerticalJustification enumerator or NothingEnum enumerator.
> Mixed **paragraphSpacingLimit**
>
> Limits added paragraph spacing in a cell; this applies only when vertical justification is justified. Returns: Unit or NothingEnum enumerator.
> Mixed **minimumFirstBaselineOffset**
>
> Spacing between the text baseline and the top inset of the frame or cell. Returns: Unit (0 - 8640 points) or NothingEnum enumerator.
> Mixed **rotationAngle**
>
> Cell rotation angle in degrees; allowed values are 0, 90, 180, or 270. Returns: Real or NothingEnum enumerator.
> Mixed **leftEdgeStrokeWeight**
>
> Stroke weight for the left edge border. Returns: Unit or NothingEnum enumerator.
> Mixed **leftEdgeStrokeType**
>
> Stroke type for the left edge. Returns: StrokeStyle or NothingEnum enumerator. Also accepts: String.
> Mixed **leftEdgeStrokeColor**
>
> Swatch applied to the left edge border stroke, using color, gradient, tint, or mixed ink. Returns: Swatch or NothingEnum enumerator.
> Mixed **leftEdgeStrokeTint**
>
> Tint percentage for the left edge border stroke. (Range: 0 to 100). Returns: Real or NothingEnum enumerator.
> Mixed **leftEdgeStrokeOverprint**
>
> When true, the left edge border stroke overprints. Returns: Boolean or NothingEnum enumerator.
> Mixed **leftEdgeStrokeGapColor**
>
> Gap swatch for the left edge border stroke, using color, gradient, tint, or mixed ink. Solid left edge stroke type does not support this value. Returns: Swatch or NothingEnum enumerator.
> Mixed **leftEdgeStrokeGapTint**
>
> Left edge border stroke gap tint percentage. (Range: 0 to 100) Solid left edge stroke type does not support this value. Returns: Real or NothingEnum enumerator.
> Mixed **leftEdgeStrokeGapOverprint**
>
> When true, the left edge border stroke gap color overprints. Solid left edge stroke type does not support this value. Returns: Boolean or NothingEnum enumerator.
> Mixed **topEdgeStrokeWeight**
>
> Stroke weight for the top edge border. Returns: Unit or NothingEnum enumerator.
> Mixed **topEdgeStrokeType**
>
> Stroke type for the top edge. Returns: StrokeStyle or NothingEnum enumerator. Also accepts: String.
> Mixed **topEdgeStrokeColor**
>
> Swatch applied to the top edge border stroke, using color, gradient, tint, or mixed ink. Returns: Swatch or NothingEnum enumerator.
> Mixed **topEdgeStrokeTint**
>
> Tint percentage for the top edge border stroke. (Range: 0 to 100). Returns: Real or NothingEnum enumerator.
> Mixed **topEdgeStrokeOverprint**
>
> When true, the top edge border stroke overprints. Returns: Boolean or NothingEnum enumerator.
> Mixed **topEdgeStrokeGapColor**
>
> Gap swatch for the top edge border stroke, using color, gradient, tint, or mixed ink. Solid top edge stroke type does not support this value. Returns: Swatch or NothingEnum enumerator.
> Mixed **topEdgeStrokeGapTint**
>
> Top edge border stroke gap tint percentage. (Range: 0 to 100) Solid top edge stroke type does not support this value. Returns: Real or NothingEnum enumerator.
> Mixed **topEdgeStrokeGapOverprint**
>
> When true, the top edge border stroke gap color overprints. Solid top edge stroke type does not support this value. Returns: Boolean or NothingEnum enumerator.
> Mixed **rightEdgeStrokeWeight**
>
> Stroke weight for the right edge border. Returns: Unit or NothingEnum enumerator.
> Mixed **rightEdgeStrokeType**
>
> Stroke type for the right edge. Returns: StrokeStyle or NothingEnum enumerator. Also accepts: String.
> Mixed **rightEdgeStrokeColor**
>
> Swatch-specified color for the right edge border stroke. Returns: Swatch or NothingEnum enumerator.
> Mixed **rightEdgeStrokeTint**
>
> Tint percentage for the right edge border stroke. (Range: 0 to 100). Returns: Real or NothingEnum enumerator.
> Mixed **rightEdgeStrokeOverprint**
>
> When true, the right edge border stroke overprints. Returns: Boolean or NothingEnum enumerator.
> Mixed **rightEdgeStrokeGapColor**
>
> Gap swatch for the right edge border stroke, using color, gradient, tint, or mixed ink. Solid right edge stroke type does not support this value. Returns: Swatch or NothingEnum enumerator.
> Mixed **rightEdgeStrokeGapTint**
>
> Right edge border stroke gap tint percentage. (Range: 0 to 100) Solid right edge stroke type does not support this value. Returns: Real or NothingEnum enumerator.
> Mixed **rightEdgeStrokeGapOverprint**
>
> When true, the right edge border stroke gap color overprints. Solid right edge stroke type does not support this value. Returns: Boolean or NothingEnum enumerator.
> Mixed **bottomEdgeStrokeWeight**
>
> Stroke weight for the bottom edge border. Returns: Unit or NothingEnum enumerator.
> Mixed **bottomEdgeStrokeType**
>
> Stroke type for the bottom edge. Returns: StrokeStyle or NothingEnum enumerator. Also accepts: String.
> Mixed **bottomEdgeStrokeColor**
>
> Swatch applied to the bottom edge border stroke, using color, gradient, tint, or mixed ink. Returns: Swatch or NothingEnum enumerator.
> Mixed **bottomEdgeStrokeTint**
>
> Tint percentage for the bottom edge border stroke. Returns: Real or NothingEnum enumerator.
> Mixed **bottomEdgeStrokeOverprint**
>
> When true, the bottom edge border stroke overprints. Returns: Boolean or NothingEnum enumerator.
> Mixed **bottomEdgeStrokeGapColor**
>
> Gap swatch for the bottom edge border stroke, using color, gradient, tint, or mixed ink. Solid bottom edge stroke type does not support this value. Returns: Swatch or NothingEnum enumerator.
> Mixed **bottomEdgeStrokeGapTint**
>
> Bottom edge border stroke gap tint percentage. (Range: 0 to 100) Solid bottom edge stroke type does not support this value. Returns: Real or NothingEnum enumerator.
> Mixed **bottomEdgeStrokeGapOverprint**
>
> When true, the bottom edge border stroke gap color overprints. Solid bottom edge stroke type does not support this value. Returns: Boolean or NothingEnum enumerator.
> String **name**
>
> Name of the style.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> **remove**( CellStyle **replacingWith** )
>
> Removes this CellStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellStyle | replacingWith | Replacement style applied where the deleted style had been used. (Optional) |

> CellStyle **duplicate**()
>
> Copies this CellStyle object.
> CellStyle **move**( LocationOptions **to**, Mixed **reference** )
>
> Places the style at the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object; needed if to specifies before or after. Accepts: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Fetches the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the CellStyle reference.
> CellStyle **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## CellStyles

Cell styles represented as a collection.

### Instance

> _Read Only_
>
> Mixed **length**
>
> Collection size. Return values: Long Integer or NothingEnum enumerator.

### Methods

> CellStyle **add**( Object **withProperties** )
>
> Creates a CellStyle instance.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property seed values for the new CellStyle. (Optional) |

> Number **count**()
>
> Reports how many CellStyle elements are present.
> CellStyle **item**( Mixed **index** )
>
> Fetches the CellStyle identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> CellStyle **itemByName**( String **name** )
>
> Fetches the CellStyle that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> CellStyle **itemByID**( Number **id** )
>
> Fetches the CellStyle that has the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> CellStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the CellStyles covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, given as a CellStyle, index, or name. Can accept: CellStyle, Long Integer or String. |
| Mixed | to | Range end, given as a CellStyle, index, or name. Can accept: CellStyle, Long Integer or String. |

> CellStyle **firstItem**()
>
> Fetches the first CellStyle from the collection.
> CellStyle **lastItem**()
>
> Fetches the final CellStyle from the collection.
> CellStyle **middleItem**()
>
> Fetches the middle CellStyle from the collection.
> CellStyle **previousItem**( CellStyle **obj** )
>
> Fetches the CellStyle positioned immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellStyle | obj | CellStyle index that comes after the requested CellStyle. |

> CellStyle **nextItem**( CellStyle **obj** )
>
> Fetches the CellStyle whose index comes after the supplied CellStyle in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellStyle | obj | CellStyle whose index is before the requested CellStyle. |

> CellStyle **anyItem**()
>
> Fetches any CellStyle from the collection.
> CellStyle **everyItem**()
>
> Fetches every CellStyle from the collection.
> String **toSource**()
>
> Produces source text that returns the CellStyle when executed.
> CellStyle **[]**( Number **index** )
>
> Fetches the CellStyle at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## CellTypeEnum

Use CellTypeEnum to choose whether a cell is text-based or graphic-based.

### Class

> _Read Only_
>
> Number `TEXT_TYPE_CELL` = 1701730388
>
> Represents a text cell.
> _Read Only_
>
> Number `GRAPHIC_TYPE_CELL` = 1701728329
>
> Represents a graphic or Page item cell.
