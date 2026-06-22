# Indesign (part 69)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Tint percentage for the top edge border stroke gap color. (Range: 0 to 100). Note: invalid when top edge stroke type is solid.
  \*/
  topEdgeStrokeGapTint: number

/\*\*

- When true, the top edge border stroke overprints.
  \*/
  topEdgeStrokeOverprint: boolean

/\*\*

- Tint percentage for the top edge border stroke. (Range: 0 to 100)
  \*/
  topEdgeStrokeTint: number

/\*\*

- Stroke style for the top edge.
  \*/
  topEdgeStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the top edge border stroke.
  \*/
  topEdgeStrokeWeight: number | string

/\*\*

- Top inset for the cell. Deprecated API; use TextTopInset or GraphicTopInset.
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

- Vertical alignment for the cell.
  \*/
  verticalJustification: VerticalJustification

/\*\*

- Width of the Cell. For a table or row, this is the combined column-width total.
  \*/
  width: number | string

/\*\*

- Collection containing words.
  \*/
  readonly words: Words

/\*\*

- Text direction used in the cell.
  \*/
  writingDirection: HorizontalOrVertical

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Applies default XML preference tags to the object or its parent story.
  \*/
  autoTag(): void

/\*\*

- Locates glyphs matching the find-what value, then substitutes the change-to value.
- @param reverseOrder True requests results in reverse order.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find-what value, then substitutes the change-to value.
- @param reverseOrder True requests results in reverse order.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find-what value, then substitutes the change-to value.
- @param reverseOrder True requests results in reverse order.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find-character-type value, then substitutes the change-character-type value.
- @param reverseOrder True requests results in reverse order.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Clears Cell Style Overrides.
- @param clearingOverridesThroughRootCellStyle True clears every override, including overrides not defined in the underlying cell style.
  \*/
  clearCellStyleOverrides(clearingOverridesThroughRootCellStyle?: boolean): void

/\*\*

- Converts bullets and numbering into text.
  \*/
  convertBulletsAndNumberingToText(): void

/\*\*

- Converts the cell type. The new cell type parameter is required; preserving data is optional.
- @param finalCellType Target Cell Type for the conversion.
- @param flagToPreserveData True keeps the cell data; converting a graphic cell to a text cell turns the page item inline.
  \*/
  convertCellType(finalCellType: CellTypeEnum, flagToPreserveData?: boolean): void

/\*\*

- Changes text into outlines. Each text line becomes a polygon object; if the converted text is one letter without internal spaces or detached pieces, that polygon has only one path. Note: use allow outlines to check whether a font permits outline creation.
- @param deleteOriginal True removes the original text; false places separate outline object(s) over it.
  \*/
  createOutlines(deleteOriginal?: boolean): PageItem[]

/\*\*

- Gets the label value for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Locates glyphs matching the find-what value.
- @param reverseOrder True requests results in reverse order.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find-what value.
- @param reverseOrder True requests results in reverse order.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find-what value.
- @param reverseOrder True requests results in reverse order.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find-character-type value.
- @param reverseOrder True requests results in reverse order.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): Cell[]

/\*\*

- Assigns the label value for the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Combines the cells.
- @param with* Cell(s) used as the merge target.
  \*/
  merge(with*: Cell | Row | Column): Cell

/\*\*

- Recomposes text in the Cell.
  \*/
  recompose(): void

/\*\*

- Removes this Cell.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Marks the object as selected.
- @param existingSelection Selection state for the Cell relative to prior selections.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Divides the cell along the specified axis.
- @param using Direction used to split the cell.
  \*/
  split(using: HorizontalOrVertical): void

/\*\*

- Creates source text that evaluates back to the Cell.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Separates every merged cell in the Cell.
  \*/
  unmerge(): Cell[]
  }

/\*\*

- Collection containing table cells.
  \*/
  declare class Cells {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Provides the Cell selected by index.
- @param index Index value.
  \*/
  [index: number]: Cell

/\*\*

- Provides any Cell from the collection.
  \*/
  anyItem(): Cell

/\*\*

- Reports how many elements the Cell has.
  \*/
  count(): number

/\*\*

- Provides all Cell entries in the collection.
  \*/
  everyItem(): Cell[]

/\*\*

- Provides the first Cell from the collection.
  \*/
  firstItem(): Cell

/\*\*

- Provides the Cell selected by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Cell

/\*\*

- Provides the Cell selected by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Cell

/\*\*

- Provides the Cell selected by name.
- @param name Name value.
  \*/
  itemByName(name: string): Cell

/\*\*

- Provides the Cells objects inside the requested range.
- @param from Range start: Cell, index, or name.
- @param to Range end: Cell, index, or name.
  \*/
  itemByRange(from: Cell | number | string, to: Cell | number | string): Cell[]

/\*\*

- Provides the last Cell from the collection.
  \*/
  lastItem(): Cell

/\*\*

- Provides the middle Cell from the collection.
  \*/
  middleItem(): Cell

/\*\*

- Provides the Cell immediately after the supplied Cell in the collection.
- @param obj Cell immediately before the desired Cell.
  \*/
  nextItem(obj: Cell): Cell

/\*\*

- Provides the Cell immediately before the supplied index.
- @param obj Index for the Cell immediately after the desired Cell.
  \*/
  previousItem(obj: Cell): Cell

/\*\*

- Creates source text that evaluates back to the Cell.
  \*/
  toSource(): string
  }

/\*\*

- Table object.
  \*/
  declare class Table {
  /\*\*
  - Lists every Graphic inside the Table.
    \*/
    readonly allGraphics: Graphic[]

/\*\*

- Lists every PageItem inside the Table.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- Alternating-fill pattern.
  \*/
  alternatingFills: AlternatingFillsTypes

/\*\*

- TableStyle used by the table.
  \*/
  appliedTableStyle: TableStyle | string

/\*\*

- XML element linked to the Table.
  \*/
  readonly associatedXMLElement: XMLItem

/\*\*

- Body-row count.
  \*/
  bodyRowCount: number

/\*\*

- Swatch-defined color for the bottom border stroke, using color, gradient, tint, or mixed ink.
  \*/
  bottomBorderStrokeColor: Swatch

/\*\*

- Gap-color swatch for the bottom border stroke, using color, gradient, tint, or mixed ink. Note: use only if the bottom border stroke type is not solid.
  \*/
  bottomBorderStrokeGapColor: Swatch

/\*\*

- When true, overprinting applies to the bottom border stroke gap. Note: use only if the bottom border stroke type is not solid.
  \*/
  bottomBorderStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the bottom border stroke gap color. (Range: 0 to 100). Note: use only if the bottom border stroke type is not solid.
  \*/
  bottomBorderStrokeGapTint: number

/\*\*

- When true, the bottom border stroke overprints.
  \*/
  bottomBorderStrokeOverprint: boolean

/\*\*

- Tint percentage for the bottom border stroke. (Range: 0 to 100)
  \*/
  bottomBorderStrokeTint: number

/\*\*

- Stroke style for the bottom border.
  \*/
  bottomBorderStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the bottom border stroke.
  \*/
  bottomBorderStrokeWeight: number | string

/\*\*

- Footer placement.
  \*/
  breakFooters: HeaderFooterBreakTypes

/\*\*

- Header placement.
  \*/
  breakHeaders: HeaderFooterBreakTypes

/\*\*

- Collection containing buttons.
  \*/
  readonly buttons: Buttons

/\*\*

- Collection containing table cells.
  \*/
  readonly cells: Cells

/\*\*

- Collection containing changes.
  \*/
  readonly changes: Changes

/\*\*

- Collection containing checkboxes.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- When true, graphic-cell content is clipped to the cell width and height.
  \*/
  clipContentToGraphicCell: boolean

/\*\*

- When true, text-cell content is clipped to the cell width and height.
  \*/
  clipContentToTextCell: boolean

/\*\*

- Column count.
  \*/
  columnCount: number

/\*\*

- When true, alternating row fills are hidden; when false, alternating column fills are hidden.
  \*/
  columnFillsPriority: boolean

/\*\*

- Collection containing table columns.
  \*/
  readonly columns: Columns

/\*\*

- Collection containing comboboxes.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Cell contents supplied as an array: the first item fills the top-left cell, the second fills the next cell to the right, continuing across the top row before moving to the left-most cell of the second row and onward. Note: if there are fewer strings than table cells, the leftover cells stay blank.
  \*/
  contents: string[] | SpecialCharacters | NothingEnum

/\*\*

- When true, the table appears collapsed in story and galley views.
  \*/
  displayCollapsed: boolean

/\*\*

- Sets the display order for table cells in story and galley views.
  \*/
  displayOrder: DisplayOrderOptions

/\*\*

- Fill swatch for the second alternating-fill column group, using color, gradient, tint, or mixed ink. Note: applies when table columns use alternating fills.
  \*/
  endColumnFillColor: Swatch

/\*\*

- Number of columns assigned to the second alternating-fill group. Note: applies when table columns use alternating fills.
  \*/
  endColumnFillCount: number

/\*\*

- When true, columns from the second alternating-fill group overprint. Note: applies when table columns use alternating fills.
  \*/
  endColumnFillOverprint: boolean

/\*\*

- Tint percentage applied to columns from the second alternating-fill group. (Range: 0 to 100). Note: applies when table columns use alternating fills.
  \*/
  endColumnFillTint: number

/\*\*

- Stroke style for columns in the second alternating strokes group.
  \*/
  endColumnLineStyle: StrokeStyle | string

/\*\*

- Stroke swatch for borders in the second alternating-column-stroke group, using color, gradient, tint, or mixed ink. Note: applies when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeColor: Swatch

/\*\*

- Column count for the second alternating column strokes group.
  \*/
  endColumnStrokeCount: number

/\*\*

- Stroke-gap swatch for borders in the second alternating-column-stroke group, using color, gradient, tint, or mixed ink. Note: applies when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeGapColor: Swatch

/\*\*

- When true, the gap on borders from the second alternating-column-stroke group overprints. Note: applies when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeGapOverprint: boolean

/\*\*

- Tint percentage for border gap color in the second alternating-column-stroke group. (Range: 0 to 100). Note: applies when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeGapTint: number

/\*\*

- When true, borders from the second alternating-column-stroke group overprint. Note: applies when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeOverprint: boolean

/\*\*

- For the second alternating column-stroke group, sets border tint percentage. (Range: 0 to 100) Applies when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeTint: number

/\*\*

- Column borders in the second alternating column strokes group use this stroke weight. Applies when end column stroke count is 1 or greater.
  \*/
  endColumnStrokeWeight: number | string

/\*\*

- Rows in the second alternating fills group use this swatch for fill color (color, gradient, tint, or mixed ink). Applies when alternating fills are defined for table rows.
  \*/
  endRowFillColor: Swatch

/\*\*

- Row count for the second alternating fills group. Applies when alternating fills are defined for table rows.
  \*/
  endRowFillCount: number

/\*\*

- When true, rows from the second alternating fills group overprint. Applies when alternating fills are defined for table rows.
  \*/
  endRowFillOverprint: boolean

/\*\*

- Tint percentage for rows in the second alternating fills group. (Range: 0 to 100) Applies when alternating fills are defined for table rows.
  \*/
  endRowFillTint: number

/\*\*

- Row borders in the second alternating row strokes group use this stroke swatch (color, gradient, tint, or mixed ink). Applies when end row stroke count is 1 or greater.
  \*/
  endRowStrokeColor: Swatch

/\*\*

- Row count assigned to the second alternating row strokes group.
  \*/
  endRowStrokeCount: number

/\*\*

- Gap swatch for row borders in the second alternating rows group (color, gradient, tint, or mixed ink). Applies when end row stroke count is 1 or greater.
  \*/
  endRowStrokeGapColor: Swatch

/\*\*

- When true, the row-border gap in the second alternating rows group overprints. Applies when end row stroke count is 1 or greater.
  \*/
  endRowStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the row gap color in the second alternating strokes group. (Range: 0 to 100) Requires end row stroke count 1 or greater, with end row stroke type not solid.
  \*/
  endRowStrokeGapTint: number

/\*\*

- When true, rows in the second alternating rows group overprint. Applies when end row stroke count is 1 or greater.
  \*/
  endRowStrokeOverprint: boolean

/\*\*

- Tint percentage for row borders in the second alternating strokes group. (Range: 0 to 100) Applies when end row stroke count is 1 or greater.
  \*/
  endRowStrokeTint: number

/\*\*

- Stroke type used for rows in the second alternating strokes group.
  \*/
  endRowStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for row borders in the second alternating row strokes group. Applies when end row stroke count is 1 or greater.
  \*/
  endRowStrokeWeight: number | string

/\*\*

- Endnote text frames are exposed through this collection.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- Endnotes are exposed through this collection.
  \*/
  readonly endnotes: Endnotes

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Event listeners are exposed through this collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events are exposed through this collection.
  \*/
  readonly events: Events

/\*\*

- Count of footer rows.
  \*/
  footerRowCount: number

/\*\*

- Footnotes are exposed through this collection.
  \*/
  readonly footnotes: Footnotes

/\*\*

- Form fields are exposed through this collection.
  \*/
  readonly formFields: FormFields

/\*\*

- Bottom inset value for the graphic cell.
  \*/
  graphicBottomInset: number | string

/\*\*

- Left inset value for the graphic cell.
  \*/
  graphicLeftInset: number | string

/\*\*

- Graphic lines are exposed through this collection.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Right inset value for the graphic cell.
  \*/
  graphicRightInset: number | string

/\*\*

- Top inset value for the graphic cell.
  \*/
  graphicTopInset: number | string

/\*\*

- Groups are exposed through this collection.
  \*/
  readonly groups: Groups

/\*\*

- Count of header rows.
  \*/
  headerRowCount: number

/\*\*

- Height of the Table; for a table or column, this equals the combined row heights.
  \*/
  height: number | string

/\*\*

- Hidden text objects are exposed through this collection.
  \*/
  readonly hiddenTexts: HiddenTexts

/\*\*

- Unique ID assigned to the Table.
  \*/
  readonly id: number

/\*\*

- Position of the Table inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Any string can be assigned to this property.
  \*/
  label: string

/\*\*

- Left border stroke color uses a swatch (color, gradient, tint, or mixed ink).
  \*/
  leftBorderStrokeColor: Swatch

/\*\*

- Gap color for the left border stroke, supplied as a swatch (color, gradient, tint, or mixed ink). Applies only when left border stroke type is not solid.
  \*/
  leftBorderStrokeGapColor: Swatch

/\*\*

- When true, the left border stroke gap overprints. Applies only when left border stroke type is not solid.
  \*/
  leftBorderStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the left border stroke gap color. (Range: 0 to 100) Applies only when left border stroke type is not solid.
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

- Stroke type used for the left border.
  \*/
  leftBorderStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the left border stroke.
  \*/
  leftBorderStrokeWeight: number | string

/\*\*

- Listboxes are exposed through this collection.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Multi-state objects are exposed through this collection.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Name of the Table; this aliases the Table's label property.
  \*/
  name: string

/\*\*

- Notes are exposed through this collection.
  \*/
  readonly notes: Notes

/\*\*

- Ellipses are exposed through this collection.
  \*/
  readonly ovals: Ovals

/\*\*

- Use this page items collection to process every page item in a container, such as a document, page, or group, without regard to type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Table container may be a XMLElement, XmlStory, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell.
  \*/
  readonly parent: any

/\*\*

- Polygons are exposed through this collection.
  \*/
  readonly polygons: Polygons

/\*\*

- Multiple properties can be set together through this property.
  \*/
  properties: object

/\*\*

- Radio buttons are exposed through this collection.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangles are exposed through this collection.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Right border stroke color uses a swatch (color, gradient, tint, or mixed ink).
  \*/
  rightBorderStrokeColor: Swatch

/\*\*

- Gap color for the right border stroke, supplied as a swatch (color, gradient, tint, or mixed ink). Applies only when right border stroke type is not solid.
  \*/
  rightBorderStrokeGapColor: Swatch

/\*\*

- When true, the right border stroke gap color overprints. Applies only when right border stroke type is not solid.
  \*/
  rightBorderStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the right border stroke gap color. (Range: 0 to 100) Applies only when right border stroke type is not solid.
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

- Stroke type used for the right border.
  \*/
  rightBorderStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the right border stroke.
  \*/
  rightBorderStrokeWeight: number | string

/\*\*

- Table rows are exposed through this collection.
  \*/
  readonly rows: Rows

/\*\*

- Signature fields are exposed through this collection.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Number of left-side table columns skipped before column fill color is applied. Applies when alternating fills are defined for table columns.
  \*/
  skipFirstAlternatingFillColumns: number

/\*\*

- Number of leading body rows skipped before row fill color is applied. Applies when alternating fills are defined for table rows.
  \*/
  skipFirstAlternatingFillRows: number

/\*\*

- Number of columns at the table's left edge where border stroke formatting is skipped. Requires start column stroke count and/or end column stroke count to be 1 or greater.
  \*/
  skipFirstAlternatingStrokeColumns: number
