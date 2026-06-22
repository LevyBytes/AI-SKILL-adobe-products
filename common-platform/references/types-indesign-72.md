# Indesign (part 72)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the inner row border stroke gap. Note: unavailable when the inner row stroke type is solid.
  \*/
  innerRowStrokeGapColor: Swatch

/\*\*

- When true, the inner row border stroke gap color overprints. Note: unavailable when the inner row stroke type is solid.
  \*/
  innerRowStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the inner row border stroke. (Range: 0 to 100) Note: unavailable when the inner row stroke type is solid.
  \*/
  innerRowStrokeGapTint: number

/\*\*

- When true, the inner row border stroke overprints.
  \*/
  innerRowStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the inner row border stroke. (Range: 0 to 100)
  \*/
  innerRowStrokeTint: number

/\*\*

- Stroke style assigned to the inner row.
  \*/
  innerRowStrokeType: StrokeStyle | string

/\*\*

- Weight used for the inner row border strokes.
  \*/
  innerRowStrokeWeight: number | string

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- When true, keeps this row together with the following row if the table splits across text frames or pages.
  \*/
  keepWithNextRow: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the left edge border stroke.
  \*/
  leftEdgeStrokeColor: Swatch

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the left edge border stroke gap. Note: unavailable when the left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapColor: Swatch

/\*\*

- When true, the left edge border stroke gap color overprints. Note: unavailable when the left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the left edge border stroke gap color. (Range: 0 to 100) Note: unavailable when the left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapTint: number

/\*\*

- When true, the left edge border stroke overprints.
  \*/
  leftEdgeStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the left edge border stroke. (Range: 0 to 100)
  \*/
  leftEdgeStrokeTint: number

/\*\*

- Stroke style assigned to the left edge.
  \*/
  leftEdgeStrokeType: StrokeStyle | string

/\*\*

- Weight used for the left edge border stroke.
  \*/
  leftEdgeStrokeWeight: number | string

/\*\*

- Deprecated API for the cell's left inset. Use TextLeftInset or GraphicLeftInset instead.
  \*/
  leftInset: number | string

/\*\*

- Greatest height cells in the Row may reach. Note: the maximum height is still enforced even when auto grow is true, and it can influence redistribution.
  \*/
  maximumHeight: number | string

/\*\*

- Space from the text baseline to the top inset of the frame or cell.
  \*/
  minimumFirstBaselineOffset: number | string

/\*\*

- Smallest allowed height for cells in the Row. Note: when auto grow is true, added content can expand cells beyond this value, and the minimum may affect redistribution.
  \*/
  minimumHeight: number | string

/\*\*

- Row name.
  \*/
  readonly name: string

/\*\*

- True when the story contains overset text.
  \*/
  readonly overflows: boolean

/\*\*

- When true, the object's fill overprints.
  \*/
  overprintFill: boolean

/\*\*

- Upper bound for extra paragraph spacing inside a cell. Note: applies only with justified vertical justification.
  \*/
  paragraphSpacingLimit: number | string

/\*\*

- Owning Table for this Row.
  \*/
  readonly parent: Table

/\*\*

- Column that contains this cell.
  \*/
  readonly parentColumn: Column

/\*\*

- Row that contains this cell.
  \*/
  readonly parentRow: Row

/\*\*

- Object used to assign multiple settings in one operation.
  \*/
  properties: object

/\*\*

- Swatch used as the color for the right edge border stroke.
  \*/
  rightEdgeStrokeColor: Swatch

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the right edge border stroke gap. Note: unavailable when the right edge stroke type is solid.
  \*/
  rightEdgeStrokeGapColor: Swatch

/\*\*

- When true, the right edge border stroke gap color overprints. Note: unavailable when the right edge stroke type is solid.
  \*/
  rightEdgeStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the right edge border stroke gap color. (Range: 0 to 100) Note: unavailable when the right edge stroke type is solid.
  \*/
  rightEdgeStrokeGapTint: number

/\*\*

- When true, the right edge border stroke overprints.
  \*/
  rightEdgeStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the right edge border stroke. (Range: 0 to 100)
  \*/
  rightEdgeStrokeTint: number

/\*\*

- Stroke style assigned to the right edge.
  \*/
  rightEdgeStrokeType: StrokeStyle | string

/\*\*

- Weight used for the right edge border stroke.
  \*/
  rightEdgeStrokeWeight: number | string

/\*\*

- Deprecated API for the cell's right inset. Use TextLeftInset or GraphicRightInset instead.
  \*/
  rightInset: number | string

/\*\*

- Cell rotation, in degrees, restricted to 0, 90, 180, or 270.
  \*/
  rotationAngle: number

/\*\*

- Count of rows covered by this object.
  \*/
  readonly rowSpan: number

/\*\*

- Type assigned to the row.
  \*/
  rowType: RowTypes

/\*\*

- Table-row collection.
  \*/
  readonly rows: Rows

/\*\*

- Start position for the row.
  \*/
  startRow: StartParagraph

/\*\*

- Bottom inset for the text cell.
  \*/
  textBottomInset: number | string

/\*\*

- Left inset for the text cell.
  \*/
  textLeftInset: number | string

/\*\*

- Right inset for the text cell.
  \*/
  textRightInset: number | string

/\*\*

- Top inset for the text cell.
  \*/
  textTopInset: number | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the top edge border stroke.
  \*/
  topEdgeStrokeColor: Swatch

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the top edge border stroke gap. Note: unavailable when the top edge stroke type is solid.
  \*/
  topEdgeStrokeGapColor: Swatch

/\*\*

- When true, the top edge border stroke gap color overprints. Note: unavailable when the top edge stroke type is solid.
  \*/
  topEdgeStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the top edge border stroke gap color. (Range: 0 to 100) Note: unavailable when the top edge stroke type is solid.
  \*/
  topEdgeStrokeGapTint: number

/\*\*

- When true, the top edge border stroke overprints.
  \*/
  topEdgeStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the top edge border stroke. (Range: 0 to 100)
  \*/
  topEdgeStrokeTint: number

/\*\*

- Stroke style assigned to the top edge.
  \*/
  topEdgeStrokeType: StrokeStyle | string

/\*\*

- Weight used for the top edge border stroke.
  \*/
  topEdgeStrokeWeight: number | string

/\*\*

- Deprecated API for the cell's top inset. Use TextTopInset or GraphicTopInset instead.
  \*/
  topInset: number | string

/\*\*

- When true, a diagonal line begins at the top left.
  \*/
  topLeftDiagonalLine: boolean

/\*\*

- When true, a diagonal line begins at the top right.
  \*/
  topRightDiagonalLine: boolean

/\*\*

- Vertical alignment used by the cell.
  \*/
  verticalJustification: VerticalJustification

/\*\*

- Row width; for a table or row, this is the combined width of its columns.
  \*/
  width: number | string

/\*\*

- Text direction inside the cell.
  \*/
  writingDirection: HorizontalOrVertical

/\*\*

- Registers an event listener.
- @param eventType Event type to register.
- @param handler Handler for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Replaces glyphs matching the find what value with the change to value.
- @param reverseOrder When true, result order is reversed.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Replaces GREP matches for the find what value with the change to value.
- @param reverseOrder When true, result order is reversed.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Replaces text matching the find what value with the change to value.
- @param reverseOrder When true, result order is reversed.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Replaces text matching the find character type value with the change character type value.
- @param reverseOrder When true, result order is reversed.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Turns text into outline objects. Each text line becomes a polygon object. For a single-letter conversion with no internal spaces or detached pieces, that polygon has one path only. Note: to check whether a font permits outline creation, see allow outlines.
- @param deleteOriginal When true, removes the source text. When false, puts separate outline object(s) above the text.
  \*/
  createOutlines(deleteOriginal?: boolean): PageItem[]

/\*\*

- Finds glyphs matching the find what value.
- @param reverseOrder When true, result order is reversed.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds GREP text matching the find what value.
- @param reverseOrder When true, result order is reversed.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder When true, result order is reversed.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value.
- @param reverseOrder When true, result order is reversed.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Resolves the object specifier into object-reference array entries.
  \*/
  getElements(): Row[]

/\*\*

- Combines cells.
- @param with* Cell, Row, or Column target to combine with.
  \*/
  merge(with*: Cell | Row | Column): Cell

/\*\*

- Reflows text in this Row.
  \*/
  recompose(): void

/\*\*

- Makes the specified Row range evenly sized. Note: maximum or minimum height or width settings on cells in the range can keep the result from being perfectly equal.
- @param using Direction for the redistribution.
- @param thru Final Row included in the range.
  \*/
  redistribute(using: HorizontalOrVertical, thru: Cell | Column | Row): void

/\*\*

- Removes this Row.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Event type already registered.
- @param handler Handler already registered.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Selects this object.
- @param existingSelection How the Row selection relates to objects selected earlier.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Divides the cell on the requested axis.
- @param using Axis direction used for the split.
  \*/
  split(using: HorizontalOrVertical): void

/\*\*

- Builds executable source text that returns the Row.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Separates every merged cell in this Row.
  \*/
  unmerge(): Cell[]
  }

/\*\*

- Collection class for table rows.
  \*/
  declare class Rows {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Row at the requested index.
- @param index Index value.
  \*/
  [index: number]: Row

/\*\*

- Adds a Row.
- @param at Placement for the Row relative to a reference object or inside the table.
- @param reference Reference object. Note: it must belong to the table, and is needed only when at contains before or after.
- @param withProperties Initial property values supplied during Row creation
  \*/
  add(at?: LocationOptions, reference?: Row | Column | Cell | Table, withProperties?: object): any

/\*\*

- Gets an arbitrary Row from the collection.
  \*/
  anyItem(): Row

/\*\*

- Shows how many elements the Row contains.
  \*/
  count(): number

/\*\*

- Gets all Row objects in the collection.
  \*/
  everyItem(): Row[]

/\*\*

- Gets the first Row in the collection.
  \*/
  firstItem(): Row

/\*\*

- Gets the Row identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Row

/\*\*

- Gets the Row identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): Row

/\*\*

- Gets Rows bounded by the requested range.
- @param from Row, index, or name at the range start.
- @param to Row, index, or name at the range end.
  \*/
  itemByRange(from: Row | number | string, to: Row | number | string): Row[]

/\*\*

- Gets the final Row in the collection.
  \*/
  lastItem(): Row

/\*\*

- Gets the center Row in the collection.
  \*/
  middleItem(): Row

/\*\*

- Gets the Row whose index comes after the supplied Row.
- @param obj Row that precedes the requested Row.
  \*/
  nextItem(obj: Row): Row

/\*\*

- Gets the Row indexed before the supplied index.
- @param obj Index belonging to the Row after the requested Row.
  \*/
  previousItem(obj: Row): Row

/\*\*

- Builds executable source text that returns the Row.
  \*/
  toSource(): string
  }

/\*\*

- Represents a table style.
  \*/
  declare class TableStyle {
  /\*\*
  - Style used as this style's base.
    \*/
    basedOn: TableStyle | string

/\*\*

- Cell style applied to the body region.
  \*/
  bodyRegionCellStyle: CellStyle | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the bottom border stroke color.
  \*/
  bottomBorderStrokeColor: Swatch

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used as the bottom border stroke gap color. Note: valid only when the bottom border stroke type is not solid.
  \*/
  bottomBorderStrokeGapColor: Swatch

/\*\*

- When true, the bottom border stroke gap overprints. Note: valid only when the bottom border stroke type is not solid.
  \*/
  bottomBorderStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the bottom border stroke gap color. (Range: 0 to 100) Note: valid only when the bottom border stroke type is not solid.
  \*/
  bottomBorderStrokeGapTint: number

/\*\*

- When true, the bottom border stroke overprints.
  \*/
  bottomBorderStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the bottom border stroke. (Range: 0 to 100)
  \*/
  bottomBorderStrokeTint: number

/\*\*

- Stroke style assigned to the bottom border.
  \*/
  bottomBorderStrokeType: StrokeStyle | string

/\*\*

- Weight used for the bottom border stroke.
  \*/
  bottomBorderStrokeWeight: number | string

/\*\*

- When true, clips graphic-cell content to the cell's width and height.
  \*/
  clipContentToGraphicCell: boolean

/\*\*

- When true, clips text-cell content to the cell's width and height.
  \*/
  clipContentToTextCell: boolean

/\*\*

- When true, alternating row fills are hidden; when false, alternating column fills are hidden.
  \*/
  columnFillsPriority: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for columns in the second alternating fill group. Note: valid when table-column alternating fills are defined.
  \*/
  endColumnFillColor: Swatch

/\*\*

- Column count in the second alternating fills group. Note: valid when table-column alternating fills are defined.
  \*/
  endColumnFillCount: number

/\*\*

- When true, columns in the second alternating fills group overprint. Note: valid when table-column alternating fills are defined.
  \*/
  endColumnFillOverprint: boolean

/\*\*

- Tint percentage for the second alternating fills group's columns. (Range: 0 to 100) Note: applies only after table-column alternating fills are defined.
  \*/
  endColumnFillTint: number

/\*\*

- Stroke style assigned to columns in the second alternating strokes group.
  \*/
  endColumnLineStyle: StrokeStyle | string

/\*\*

- Swatch (color, gradient, tint, or mixed ink) assigned to borders for the second alternating column-stroke group. Note: applies only when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeColor: Swatch

/\*\*

- Column count in the second alternating column strokes group.
  \*/
  endColumnStrokeCount: number

/\*\*

- Swatch (color, gradient, tint, or mixed ink) assigned as the gap color for borders in the second alternating column-stroke group. Note: applies only when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeGapColor: Swatch

/\*\*

- When true, the gap for column-border strokes in the second alternating column-stroke group overprints. Note: applies only when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeGapOverprint: boolean

/\*\*

- Column-border gap color tint for the second alternating column-stroke group, as a percentage. (Range: 0 to 100) Note: applies only when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeGapTint: number

/\*\*

- When true, column borders in the second alternating column-stroke group overprint. Note: applies only when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeOverprint: boolean

/\*\*

- Tint percentage for borders on columns in the second alternating column-stroke set. (Range: 0 to 100) Note: Applies when end column stroke count is at least 1.
  \*/
  endColumnStrokeTint: number

/\*\*

- Border weight for columns in the second alternating column-stroke set. Note: Applies when end column stroke count is at least 1.
  \*/
  endColumnStrokeWeight: number | string

/\*\*

- Swatch assigned as the fill for rows in the second alternating fill set; it may be a color, gradient, tint, or mixed ink. Note: Applies when table-row alternating fills are configured.
  \*/
  endRowFillColor: Swatch

/\*\*

- Row quantity used by the second alternating fill set. Note: Applies when table-row alternating fills are configured.
  \*/
  endRowFillCount: number

/\*\*

- When true, rows belonging to the second alternating fill set overprint. Note: Applies when table-row alternating fills are configured.
  \*/
  endRowFillOverprint: boolean

/\*\*

- Tint percentage used for rows in the second alternating fill set. (Range: 0 to 100) Note: Applies when table-row alternating fills are configured.
  \*/
  endRowFillTint: number

/\*\*

- Swatch used for row-border strokes in the second alternating row-stroke set; it can be a color, gradient, tint, or mixed ink. Note: Applies when end row stroke count is at least 1.
  \*/
  endRowStrokeColor: Swatch

/\*\*

- Number of rows included in the second alternating row-stroke set.
  \*/
  endRowStrokeCount: number

/\*\*

- Swatch used for row-border gaps in the second alternating row set; valid swatch kinds include color, gradient, tint, and mixed ink. Note: Applies when end row stroke count is at least 1.
  \*/
  endRowStrokeGapColor: Swatch

/\*\*

- When true, the row-border gaps in the second alternating row set overprint. Note: Applies when end row stroke count is at least 1.
  \*/
  endRowStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the row gap color in the second alternating stroke set. (Range: 0 to 100) Note: Applies when end row stroke count is at least 1 and end row stroke type is not solid.
  \*/
  endRowStrokeGapTint: number

/\*\*

- When true, rows in the second alternating row set overprint. Note: Applies when end row stroke count is at least 1.
  \*/
  endRowStrokeOverprint: boolean

/\*\*

- Tint percentage for row borders in the second alternating stroke set. (Range: 0 to 100) Note: Applies when end row stroke count is at least 1.
  \*/
  endRowStrokeTint: number

/\*\*

- Stroke style applied to rows in the second alternating stroke set.
  \*/
  endRowStrokeType: StrokeStyle | string

/\*\*

- Weight applied to row-border strokes in the second alternating row-stroke set. Note: Applies when end row stroke count is at least 1.
  \*/
  endRowStrokeWeight: number | string

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Cell style assigned to the footer region.
  \*/
  footerRegionCellStyle: CellStyle | string

/\*\*

- When true, the footer region uses the body-region cell style.
  \*/
  footerRegionSameAsBodyRegion: boolean

/\*\*

- Bottom inset for the graphic cell.
  \*/
  graphicBottomInset: number | string

/\*\*

- Left inset for the graphic cell.
  \*/
  graphicLeftInset: number | string

/\*\*

- Right inset for the graphic cell.
  \*/
  graphicRightInset: number | string

/\*\*

- Top inset for the graphic cell.
  \*/
  graphicTopInset: number | string

/\*\*

- Cell style assigned to the header region.
  \*/
  headerRegionCellStyle: CellStyle | string

/\*\*

- When true, the header region uses the body-region cell style.
  \*/
  headerRegionSameAsBodyRegion: boolean

/\*\*

- Unique ID for the TableStyle.
  \*/
  readonly id: number

/\*\*

- TableStyle position inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- User-settable string property.
  \*/
  label: string

/\*\*

- Swatch used by the left border stroke; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  leftBorderStrokeColor: Swatch
