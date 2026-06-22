# Indesign (part 73)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Swatch used for the left border stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Applies to non-solid left border stroke types.
  \*/
  leftBorderStrokeGapColor: Swatch

/\*\*

- When true, the left border stroke gap overprints. Note: Applies to non-solid left border stroke types.
  \*/
  leftBorderStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the gap color on the left border stroke. (Range: 0 to 100) Note: Applies to non-solid left border stroke types.
  \*/
  leftBorderStrokeGapTint: number

/\*\*

- When true, the left border stroke overprints.
  \*/
  leftBorderStrokeOverprint: boolean

/\*\*

- Tint percentage for the left border stroke. (Range: 0 to 100)
  \*/
  leftBorderStrokeTint: number

/\*\*

- Stroke style used by the left border.
  \*/
  leftBorderStrokeType: StrokeStyle | string

/\*\*

- Weight applied to the left border stroke.
  \*/
  leftBorderStrokeWeight: number | string

/\*\*

- Cell style assigned to the left column region.
  \*/
  leftColumnRegionCellStyle: CellStyle | string

/\*\*

- When true, the left column region uses the body-region cell style.
  \*/
  leftColumnRegionSameAsBodyRegion: boolean

/\*\*

- Name assigned to the TableStyle.
  \*/
  name: string

/\*\*

- Parent object for the TableStyle, either a Document, Application, or TableStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- Swatch used by the right border stroke; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  rightBorderStrokeColor: Swatch

/\*\*

- Swatch used for the right border stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Applies to non-solid right border stroke types.
  \*/
  rightBorderStrokeGapColor: Swatch

/\*\*

- When true, the right border stroke gap color overprints. Note: Applies to non-solid right border stroke types.
  \*/
  rightBorderStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the gap color on the right border stroke. (Range: 0 to 100) Note: Applies to non-solid right border stroke types.
  \*/
  rightBorderStrokeGapTint: number

/\*\*

- When true, the right border stroke overprints.
  \*/
  rightBorderStrokeOverprint: boolean

/\*\*

- Tint percentage for the right border stroke. (Range: 0 to 100)
  \*/
  rightBorderStrokeTint: number

/\*\*

- Stroke style used by the right border.
  \*/
  rightBorderStrokeType: StrokeStyle | string

/\*\*

- Weight applied to the right border stroke.
  \*/
  rightBorderStrokeWeight: number | string

/\*\*

- Cell style assigned to the right column region.
  \*/
  rightColumnRegionCellStyle: CellStyle | string

/\*\*

- When true, the right column region uses the body-region cell style.
  \*/
  rightColumnRegionSameAsBodyRegion: boolean

/\*\*

- Count of left-side table columns omitted before column fill color formatting begins. Note: Applies when table-column alternating fills are configured.
  \*/
  skipFirstAlternatingFillColumns: number

/\*\*

- Count of body rows at the table start omitted before row fill color formatting begins. Note: Applies when table-row alternating fills are configured.
  \*/
  skipFirstAlternatingFillRows: number

/\*\*

- Count of left-side table columns that do not receive border stroke formatting. Note: Applies when start column stroke count is at least 1 and/or end column stroke count is at least 1.
  \*/
  skipFirstAlternatingStrokeColumns: number

/\*\*

- Count of body rows at the table start that do not receive border stroke formatting. Note: Applies when start row stroke count is at least 1 and/or end row stroke count is at least 1.
  \*/
  skipFirstAlternatingStrokeRows: number

/\*\*

- Count of right-side table columns where the column fill color is not applied. Note: Applies when table-column alternating fills are configured.
  \*/
  skipLastAlternatingFillColumns: number

/\*\*

- Count of body rows at the table end where the row fill color is not applied. Note: Applies when table-row alternating fills are configured.
  \*/
  skipLastAlternatingFillRows: number

/\*\*

- Count of right-side table columns that do not receive border stroke formatting. Note: Applies when start column stroke count is at least 1 and/or end column stroke count is at least 1.
  \*/
  skipLastAlternatingStrokeColumns: number

/\*\*

- Count of body rows at the table end that do not receive border stroke formatting. Note: Applies when start row stroke count is at least 1 and/or end row stroke count is at least 1.
  \*/
  skipLastAlternatingStrokeRows: number

/\*\*

- Space following the table.
  \*/
  spaceAfter: number | string

/\*\*

- Space preceding the table.
  \*/
  spaceBefore: number | string

/\*\*

- Swatch used as the fill for columns in the first alternating fill set; it may be a color, gradient, tint, or mixed ink. Note: Applies when table-column alternating fills are configured.
  \*/
  startColumnFillColor: Swatch

/\*\*

- Column quantity used by the first alternating fill set. Note: Applies when table-column alternating fills are configured.
  \*/
  startColumnFillCount: number

/\*\*

- When true, columns in the first alternating fill set overprint. Note: Applies when table-column alternating fills are configured.
  \*/
  startColumnFillOverprint: boolean

/\*\*

- Tint percentage used for columns in the first alternating fill set. (Range: 0 to 100) Note: Applies when table-column alternating fills are configured.
  \*/
  startColumnFillTint: number

/\*\*

- Swatch used for column-border strokes in the first alternating column-stroke set; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  startColumnStrokeColor: Swatch

/\*\*

- Number of columns in the first alternating column-stroke set.
  \*/
  startColumnStrokeCount: number

/\*\*

- Swatch used for column-border stroke gaps in the first alternating column-stroke set; accepted kinds are color, gradient, tint, and mixed ink. Note: Applies when start column stroke count is at least 1.
  \*/
  startColumnStrokeGapColor: Swatch

/\*\*

- When true, column-border gaps in the first alternating column-stroke set overprint. Note: Applies when start column stroke count is at least 1.
  \*/
  startColumnStrokeGapOverprint: boolean

/\*\*

- Tint percentage for gap color on column borders in the first alternating column-stroke set. (Range: 0 to 100) Note: Applies when start column stroke count is at least 1.
  \*/
  startColumnStrokeGapTint: number

/\*\*

- When true, column borders in the first alternating column-stroke set overprint. Note: Applies when start column stroke count is at least 1.
  \*/
  startColumnStrokeOverprint: boolean

/\*\*

- Tint percentage for column borders in the first alternating column-stroke set. (Range: 0 to 100) Note: Applies when start column stroke count is at least 1.
  \*/
  startColumnStrokeTint: number

/\*\*

- Stroke style applied to columns in the first alternating stroke set.
  \*/
  startColumnStrokeType: StrokeStyle | string

/\*\*

- Weight applied to column-border strokes in the first alternating column-stroke set. Note: Applies when start column stroke count is at least 1.
  \*/
  startColumnStrokeWeight: number | string

/\*\*

- Swatch used as the fill for rows in the first alternating fill set; it may be a color, gradient, tint, or mixed ink. Note: Applies when table-row alternating fills are configured.
  \*/
  startRowFillColor: Swatch

/\*\*

- Row quantity used by the first alternating fill set. Note: Applies when table-row alternating fills are configured.
  \*/
  startRowFillCount: number

/\*\*

- When true, rows in the first alternating fill set overprint. Note: Applies when table-row alternating fills are configured.
  \*/
  startRowFillOverprint: boolean

/\*\*

- Tint percentage used for rows in the first alternating fill set. (Range: 0 to 100) Note: Applies when table-row alternating fills are configured.
  \*/
  startRowFillTint: number

/\*\*

- Swatch used for row-border strokes in the first alternating row-stroke set; accepted kinds are color, gradient, tint, and mixed ink. Note: Applies when start row stroke count is at least 1.
  \*/
  startRowStrokeColor: Swatch

/\*\*

- Number of rows in the first alternating row-stroke set.
  \*/
  startRowStrokeCount: number

/\*\*

- Swatch used for row-border stroke gaps in the first alternating row-stroke set; accepted kinds are color, gradient, tint, and mixed ink. Note: Applies when start row stroke count is at least 1.
  \*/
  startRowStrokeGapColor: Swatch

/\*\*

- When true, the row-border stroke gap color in the first alternating row-stroke set overprints. Note: Applies when start row stroke count is at least 1.
  \*/
  startRowStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the row gap color in the first alternating row set. (Range: 0 to 100) Note: Applies when start row stroke count is at least 1.
  \*/
  startRowStrokeGapTint: number

/\*\*

- When true, row borders in the first alternating row-stroke set overprint. Note: Applies when start row stroke count is at least 1.
  \*/
  startRowStrokeOverprint: boolean

/\*\*

- Tint percentage for borders in the first alternating row-stroke set. (Range: 0 to 100) Note: Applies when start row stroke count is at least 1.
  \*/
  startRowStrokeTint: number

/\*\*

- Stroke style applied to rows in the first alternating stroke set.
  \*/
  startRowStrokeType: StrokeStyle | string

/\*\*

- Weight applied to row-border strokes in the first alternating row-stroke set. Note: Applies when start row stroke count is at least 1.
  \*/
  startRowStrokeWeight: number | string

/\*\*

- Corner display order for row strokes and column strokes.
  \*/
  strokeOrder: StrokeOrderTypes

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

- Swatch used by the table's top border stroke; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  topBorderStrokeColor: Swatch

/\*\*

- Swatch used for the table's top border stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Applies to non-solid top border stroke types.
  \*/
  topBorderStrokeGapColor: Swatch

/\*\*

- When true, the top border stroke gap overprints. Note: Applies to non-solid top border stroke types.
  \*/
  topBorderStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the gap color on the table's top border stroke. (Range: 0 to 100) Note: Applies to non-solid top border stroke types.
  \*/
  topBorderStrokeGapTint: number

/\*\*

- When true, top border strokes overprint.
  \*/
  topBorderStrokeOverprint: boolean

/\*\*

- Tint percentage for the table's top border stroke. (Range: 0 to 100)
  \*/
  topBorderStrokeTint: number

/\*\*

- Stroke style used by the top border.
  \*/
  topBorderStrokeType: StrokeStyle | string

/\*\*

- Weight applied to the table's top border stroke.
  \*/
  topBorderStrokeWeight: number | string

/\*\*

- Registers an event listener.
- @param eventType Event type to register.
- @param handler Event handler to call.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate TableStyle.
  \*/
  duplicate(): TableStyle

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references as an array.
  \*/
  getElements(): TableStyle[]

/\*\*

- Stores the specified value as the label for the specified key.
- @param key Key to assign.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates the style to the requested position.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: Needed if the to parameter names after or before.
  \*/
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): TableStyle

/\*\*

- Removes the style.
- @param replacingWith Style used in place of the removed style.
  \*/
  remove(replacingWith: TableStyle): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that returns the TableStyle when executed.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for table styles.
  \*/
  declare class TableStyles {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TableStyle at the specified index.
- @param index Index value.
  \*/
  [index: number]: TableStyle

/\*\*

- Creates a TableStyle.
- @param withProperties Starting property values for the new TableStyle
  \*/
  add(withProperties: object): TableStyle

/\*\*

- Gets any TableStyle from the collection.
  \*/
  anyItem(): TableStyle

/\*\*

- Shows how many elements are in the TableStyle.
  \*/
  count(): number

/\*\*

- Gets all TableStyle objects from the collection.
  \*/
  everyItem(): TableStyle[]

/\*\*

- Gets the first TableStyle in the collection.
  \*/
  firstItem(): TableStyle

/\*\*

- Gets the TableStyle matching the specified index or name.
- @param index Index or name.
  \*/
  item(index: number | string): TableStyle

/\*\*

- Gets the TableStyle matching the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): TableStyle

/\*\*

- Gets the TableStyle matching the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): TableStyle

/\*\*

- Gets TableStyles from the specified range.
- @param from TableStyle, index, or name marking the range start.
- @param to TableStyle, index, or name marking the range end.
  \*/
  itemByRange(from: TableStyle | number | string, to: TableStyle | number | string): TableStyle[]

/\*\*

- Gets the final TableStyle in the collection.
  \*/
  lastItem(): TableStyle

/\*\*

- Gets the middle TableStyle in the collection.
  \*/
  middleItem(): TableStyle

/\*\*

- Gets the TableStyle whose index comes after the specified TableStyle in the collection.
- @param obj TableStyle that precedes the wanted TableStyle.
  \*/
  nextItem(obj: TableStyle): TableStyle

/\*\*

- Gets the TableStyle whose index comes before the specified index.
- @param obj Index of the TableStyle that follows the wanted TableStyle.
  \*/
  previousItem(obj: TableStyle): TableStyle

/\*\*

- Builds a string that returns the TableStyle when executed.
  \*/
  toSource(): string
  }

/\*\*

- Table style group object.
  \*/
  declare class TableStyleGroup {
  /\*\*
  - Contains all Table styles.
    \*/
    readonly allTableStyles: TableStyle[]

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the TableStyleGroup.
  \*/
  readonly id: number

/\*\*

- TableStyleGroup position inside its containing object.
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

- Name assigned to the TableStyleGroup.
  \*/
  name: string

/\*\*

- Parent object for the TableStyleGroup, either a Document, Application, or TableStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- Table style group collection.
  \*/
  readonly tableStyleGroups: TableStyleGroups

/\*\*

- Table style collection.
  \*/
  readonly tableStyles: TableStyles

/\*\*

- Registers an event listener.
- @param eventType Event type to register.
- @param handler Event handler to call.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate TableStyleGroup.
  \*/
  duplicate(): TableStyleGroup

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references as an array.
  \*/
  getElements(): TableStyleGroup[]

/\*\*

- Stores the specified value as the label for the specified key.
- @param key Key to assign.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates the style to the requested position.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: Needed if the to parameter names after or before.
  \*/
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): TableStyleGroup

/\*\*

- Removes the style.
- @param replacingWith Style used in place of the removed style.
  \*/
  remove(replacingWith: ParagraphStyle | CharacterStyle): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that returns the TableStyleGroup when executed.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for table style groups.
  \*/
  declare class TableStyleGroups {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TableStyleGroup at the specified index.
- @param index Index value.
  \*/
  [index: number]: TableStyleGroup

/\*\*

- Creates a TableStyleGroup.
- @param withProperties Starting property values for the new TableStyleGroup
  \*/
  add(withProperties: object): TableStyleGroup

/\*\*

- Gets any TableStyleGroup from the collection.
  \*/
  anyItem(): TableStyleGroup

/\*\*

- Shows how many elements are in the TableStyleGroup.
  \*/
  count(): number

/\*\*

- Gets all TableStyleGroup objects from the collection.
  \*/
  everyItem(): TableStyleGroup[]

/\*\*

- Gets the first TableStyleGroup in the collection.
  \*/
  firstItem(): TableStyleGroup

/\*\*

- Gets the TableStyleGroup matching the specified index or name.
- @param index Index or name.
  \*/
  item(index: number | string): TableStyleGroup

/\*\*

- Gets the TableStyleGroup matching the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): TableStyleGroup

/\*\*

- Gets the TableStyleGroup matching the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): TableStyleGroup

/\*\*

- Gets TableStyleGroups from the specified range.
- @param from TableStyleGroup, index, or name marking the range start.
- @param to TableStyleGroup, index, or name marking the range end.
  \*/
  itemByRange(from: TableStyleGroup | number | string, to: TableStyleGroup | number | string): TableStyleGroup[]

/\*\*

- Gets the final TableStyleGroup in the collection.
  \*/
  lastItem(): TableStyleGroup

/\*\*

- Gets the middle TableStyleGroup in the collection.
  \*/
  middleItem(): TableStyleGroup

/\*\*

- Gets the TableStyleGroup whose index comes after the specified TableStyleGroup in the collection.
- @param obj TableStyleGroup that precedes the wanted TableStyleGroup.
  \*/
  nextItem(obj: TableStyleGroup): TableStyleGroup

/\*\*

- Gets the TableStyleGroup whose index comes before the specified index.
- @param obj Index of the TableStyleGroup that follows the wanted TableStyleGroup.
  \*/
  previousItem(obj: TableStyleGroup): TableStyleGroup

/\*\*

- Builds a string that returns the TableStyleGroup when executed.
  \*/
  toSource(): string
  }

/\*\*

- Cell style object.
  \*/
  declare class CellStyle {
  /\*\*
  - Paragraph style applied to text.
    \*/
    appliedParagraphStyle: ParagraphStyle | NothingEnum | string

/\*\*

- Style this style derives from.
  \*/
  basedOn: CellStyle | string

/\*\*

- Swatch applied to the bottom edge border stroke; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  bottomEdgeStrokeColor: Swatch | NothingEnum

/\*\*

- Swatch applied to the bottom edge border stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Does not apply to solid bottom edge stroke types.
  \*/
  bottomEdgeStrokeGapColor: Swatch | NothingEnum

/\*\*

- When true, the bottom edge border stroke gap color overprints. Note: Does not apply to solid bottom edge stroke types.
  \*/
  bottomEdgeStrokeGapOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the bottom edge border stroke gap color. (Range: 0 to 100) Note: Does not apply to solid bottom edge stroke types.
  \*/
  bottomEdgeStrokeGapTint: number | NothingEnum

/\*\*

- When true, the bottom edge border stroke overprints.
  \*/
  bottomEdgeStrokeOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the bottom edge border stroke.
  \*/
  bottomEdgeStrokeTint: number | NothingEnum

/\*\*

- Stroke style used by the bottom edge.
  \*/
  bottomEdgeStrokeType: StrokeStyle | NothingEnum | string
