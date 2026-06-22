# Indesign (part 71)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- When true, the inner column border stroke gap color overprints. Not valid when inner column stroke type is solid.
  \*/
  innerColumnStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the inner column border stroke gap color. (Range: 0 to 100) Not valid when inner column stroke type is solid.
  \*/
  innerColumnStrokeGapTint: number

/\*\*

- When true, the inner column border stroke overprints.
  \*/
  innerColumnStrokeOverprint: boolean

/\*\*

- Tint percentage for the inner column border stroke. (Range: 0 to 100)
  \*/
  innerColumnStrokeTint: number

/\*\*

- Stroke type used for the inner column.
  \*/
  innerColumnStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the inner column border stroke.
  \*/
  innerColumnStrokeWeight: number | string

/\*\*

- Inner row border stroke color, supplied as a swatch.
  \*/
  innerRowStrokeColor: Swatch

/\*\*

- Inner row border stroke gap uses this swatch (color, gradient, tint, or mixed ink). Not valid when inner row stroke type is solid.
  \*/
  innerRowStrokeGapColor: Swatch

/\*\*

- When true, the inner row border stroke gap color overprints. Not valid when inner row stroke type is solid.
  \*/
  innerRowStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the inner row border stroke. (Range: 0 to 100) Not valid when inner row stroke type is solid.
  \*/
  innerRowStrokeGapTint: number

/\*\*

- When true, the inner row border stroke overprints.
  \*/
  innerRowStrokeOverprint: boolean

/\*\*

- Tint percentage for the inner row border stroke. (Range: 0 to 100)
  \*/
  innerRowStrokeTint: number

/\*\*

- Stroke type used for the inner row.
  \*/
  innerRowStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the inner row border strokes.
  \*/
  innerRowStrokeWeight: number | string

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- When true, the row stays with the next row if the table is split across text frames or pages.
  \*/
  keepWithNextRow: boolean

/\*\*

- Left edge border stroke uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  leftEdgeStrokeColor: Swatch

/\*\*

- Left edge border stroke gap uses this swatch (color, gradient, tint, or mixed ink). Not valid when left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapColor: Swatch

/\*\*

- When true, the left edge border stroke gap color overprints. Not valid when left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the left edge border stroke gap color. (Range: 0 to 100) Not valid when left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapTint: number

/\*\*

- When true, the left edge border stroke overprints.
  \*/
  leftEdgeStrokeOverprint: boolean

/\*\*

- Tint percentage for the left edge border stroke. (Range: 0 to 100)
  \*/
  leftEdgeStrokeTint: number

/\*\*

- Stroke type used for the left edge.
  \*/
  leftEdgeStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the left edge border stroke.
  \*/
  leftEdgeStrokeWeight: number | string

/\*\*

- Left inset for the cell. Deprecated API; use TextLeftInset or GraphicLeftInset
  \*/
  leftInset: number | string

/\*\*

- Maximum height allowed for cells in the Column. Even when auto grow is true, this value cannot be exceeded. Redistribution may also be affected by the maximum height.
  \*/
  maximumHeight: number | string

/\*\*

- Space between the text baseline and the top inset of the frame or cell.
  \*/
  minimumFirstBaselineOffset: number | string

/\*\*

- Minimum height for cells in the Column. When auto grow is true, cells may grow beyond this amount as content is added. Redistribution may also be affected by the minimum height.
  \*/
  minimumHeight: number | string

/\*\*

- Name of the Column.
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

- Owning Table for this Column.
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

- Column width; for a table or row, this is the combined width of its columns.
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
  getElements(): Column[]

/\*\*

- Combines cells.
- @param with* Cell, Row, or Column target to combine with.
  \*/
  merge(with*: Cell | Row | Column): Cell

/\*\*

- Reflows text in this Column.
  \*/
  recompose(): void

/\*\*

- Makes the specified Column range evenly sized. Note: maximum or minimum height or width settings on cells in the range can keep the result from being perfectly equal.
- @param using Direction for the redistribution.
- @param thru Final Column included in the range.
  \*/
  redistribute(using: HorizontalOrVertical, thru: Cell | Column | Row): void

/\*\*

- Removes this Column.
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
- @param existingSelection How the Column selection relates to objects selected earlier.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Divides the cell on the requested axis.
- @param using Axis direction used for the split.
  \*/
  split(using: HorizontalOrVertical): void

/\*\*

- Builds executable source text that returns the Column.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Separates every merged cell in this Column.
  \*/
  unmerge(): Cell[]
  }

/\*\*

- Collection class for table columns.
  \*/
  declare class Columns {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Column at the requested index.
- @param index Index value.
  \*/
  [index: number]: Column

/\*\*

- Adds a Column.
- @param at Placement for the Column relative to a reference object or inside the table.
- @param reference Reference object. Note: it must belong to the table, and is needed only when at contains before or after.
- @param withProperties Initial property values supplied during Column creation
  \*/
  add(at?: LocationOptions, reference?: Row | Column | Cell | Table, withProperties?: object): any

/\*\*

- Gets an arbitrary Column from the collection.
  \*/
  anyItem(): Column

/\*\*

- Shows how many elements the Column contains.
  \*/
  count(): number

/\*\*

- Gets all Column objects in the collection.
  \*/
  everyItem(): Column[]

/\*\*

- Gets the first Column in the collection.
  \*/
  firstItem(): Column

/\*\*

- Gets the Column identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Column

/\*\*

- Gets the Column identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): Column

/\*\*

- Gets Columns bounded by the requested range.
- @param from Column, index, or name at the range start.
- @param to Column, index, or name at the range end.
  \*/
  itemByRange(from: Column | number | string, to: Column | number | string): Column[]

/\*\*

- Gets the final Column in the collection.
  \*/
  lastItem(): Column

/\*\*

- Gets the center Column in the collection.
  \*/
  middleItem(): Column

/\*\*

- Gets the Column whose index comes after the supplied Column.
- @param obj Column that precedes the requested Column.
  \*/
  nextItem(obj: Column): Column

/\*\*

- Gets the Column indexed before the supplied index.
- @param obj Index belonging to the Column after the requested Column.
  \*/
  previousItem(obj: Column): Column

/\*\*

- Builds executable source text that returns the Column.
  \*/
  toSource(): string
  }

/\*\*

- Represents a table row.
  \*/
  declare class Row {
  /\*\*
  - When true, cells in the Row may automatically grow or shrink in height to fit content. Note: cells can change only within any specified maximum or minimum height limits.
    \*/
    autoGrow: boolean

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the bottom edge border stroke.
  \*/
  bottomEdgeStrokeColor: Swatch

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the bottom edge border stroke gap. Note: unavailable when the bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapColor: Swatch

/\*\*

- When true, the bottom edge border stroke gap color overprints. Note: unavailable when the bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the bottom edge border stroke gap color. (Range: 0 to 100) Note: unavailable when the bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapTint: number

/\*\*

- When true, the bottom edge border stroke overprints.
  \*/
  bottomEdgeStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the bottom edge border stroke.
  \*/
  bottomEdgeStrokeTint: number

/\*\*

- Stroke style assigned to the bottom edge.
  \*/
  bottomEdgeStrokeType: StrokeStyle | string

/\*\*

- Weight used for the bottom edge border stroke.
  \*/
  bottomEdgeStrokeWeight: number | string

/\*\*

- Deprecated API for the cell's bottom inset. Use TextBottomInset or GraphicBottomInset instead.
  \*/
  bottomInset: number | string

/\*\*

- Table-cell collection.
  \*/
  readonly cells: Cells

/\*\*

- Deprecated API: when true, clips cell content to the cell's width and height. Use ClipContentsToTextCell or ClipContentsToPageItemCell instead.
  \*/
  clipContentToCell: boolean

/\*\*

- When true, clips graphic-cell content to the cell's width and height.
  \*/
  clipContentToGraphicCell: boolean

/\*\*

- When true, clips text-cell content to the cell's width and height.
  \*/
  clipContentToTextCell: boolean

/\*\*

- Count of columns covered by this object.
  \*/
  readonly columnSpan: number

/\*\*

- Table-column collection.
  \*/
  readonly columns: Columns

/\*\*

- Text content. For rows or columns, a string value fills every cell in the row or column; with an array, the first array value fills the left-most cell in a row or the top-most cell in a column; subsequent values fill the next cell to the right for rows, or the next lower cell for columns.
  \*/
  contents: PageItem | string | SpecialCharacters | string[] | PageItems | NothingEnum

/\*\*

- When true, the diagonal line is drawn above cell contents.
  \*/
  diagonalLineInFront: boolean

/\*\*

- Swatch used for the diagonal line color.
  \*/
  diagonalLineStrokeColor: Swatch

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the diagonal line stroke gap. Note: unavailable when the diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapColor: Swatch

/\*\*

- When true, the diagonal line stroke gap overprints. Note: unavailable when the diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the diagonal line stroke gap color. Note: unavailable when the diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapTint: number

/\*\*

- When true, the diagonal line stroke overprints.
  \*/
  diagonalLineStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the diagonal line. (Range: 0 to 100)
  \*/
  diagonalLineStrokeTint: number

/\*\*

- Stroke style assigned to the diagonal line(s).
  \*/
  diagonalLineStrokeType: StrokeStyle | string

/\*\*

- Weight used for the diagonal line stroke.
  \*/
  diagonalLineStrokeWeight: number | string

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the object's fill.
  \*/
  fillColor: Swatch | string

/\*\*

- Percentage tint applied to the object's fill.
  \*/
  fillTint: number

/\*\*

- Gap between the text baseline and the cell's top inset.
  \*/
  firstBaselineOffset: FirstBaseline

/\*\*

- Angle for a linear gradient used on the object's fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Length for a linear gradient, or radius for a radial gradient, used on the object's fill.
  \*/
  gradientFillLength: number

/\*\*

- Gradient start point for the Row fill, in page coordinates and formatted as [x, y].
  \*/
  gradientFillStart: (number | string)[]

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

- Row height; for a table or column, this is the combined height of its rows.
  \*/
  height: number | string

/\*\*

- Row index inside the containing object.
  \*/
  readonly index: number

/\*\*

- Swatch used as the color for the inner column border stroke.
  \*/
  innerColumnStrokeColor: Swatch

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used for the inner column border stroke gap. Note: unavailable when the inner column stroke type is solid.
  \*/
  innerColumnStrokeGapColor: Swatch

/\*\*

- When true, the inner column border stroke gap color overprints. Note: unavailable when the inner column stroke type is solid.
  \*/
  innerColumnStrokeGapOverprint: boolean

/\*\*

- Percentage tint for the inner column border stroke gap color. (Range: 0 to 100) Note: unavailable when the inner column stroke type is solid.
  \*/
  innerColumnStrokeGapTint: number

/\*\*

- When true, the inner column border stroke overprints.
  \*/
  innerColumnStrokeOverprint: boolean

/\*\*

- Percentage tint applied to the inner column border stroke. (Range: 0 to 100)
  \*/
  innerColumnStrokeTint: number

/\*\*

- Stroke style assigned to the inner column.
  \*/
  innerColumnStrokeType: StrokeStyle | string

/\*\*

- Weight used for the inner column border stroke.
  \*/
  innerColumnStrokeWeight: number | string

/\*\*

- Swatch used as the color for the inner row border stroke.
  \*/
  innerRowStrokeColor: Swatch
