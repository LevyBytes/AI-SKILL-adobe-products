# Indesign (part 70)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Number of leading body rows where border stroke formatting is skipped. Requires start row stroke count and/or end row stroke count to be 1 or greater.
  \*/
  skipFirstAlternatingStrokeRows: number

/\*\*

- When true, the first header-row occurrence is skipped.
  \*/
  skipFirstHeader: boolean

/\*\*

- Number columns on the table's right side that do not receive the column fill color. Applies when alternating fills are defined for table columns.
  \*/
  skipLastAlternatingFillColumns: number

/\*\*

- Number of trailing body rows that do not receive the row fill color. Applies when alternating fills are defined for table rows.
  \*/
  skipLastAlternatingFillRows: number

/\*\*

- Number of columns on the table's right side where border stroke formatting is skipped. Requires start column stroke count and/or end column stroke count to be 1 or greater.
  \*/
  skipLastAlternatingStrokeColumns: number

/\*\*

- Number of body rows at the table's end where border stroke formatting is skipped. Requires start row stroke count and/or end row stroke count to be 1 or greater.
  \*/
  skipLastAlternatingStrokeRows: number

/\*\*

- When true, the last footer-row occurrence is skipped.
  \*/
  skipLastFooter: boolean

/\*\*

- Space placed after the table.
  \*/
  spaceAfter: number | string

/\*\*

- Space placed before the table.
  \*/
  spaceBefore: number | string

/\*\*

- Spline items collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Columns in the first alternating fills group use this fill swatch (color, gradient, tint, or mixed ink). Applies when alternating fills are defined for table columns.
  \*/
  startColumnFillColor: Swatch

/\*\*

- Column count for the first alternating fills group. Applies when alternating fills are defined for table columns.
  \*/
  startColumnFillCount: number

/\*\*

- When true, columns in the first alternating fills group overprint. Applies when alternating fills are defined for table columns.
  \*/
  startColumnFillOverprint: boolean

/\*\*

- Tint percentage for columns in the first alternating fills group. (Range: 0 to 100) Applies when alternating fills are defined for table columns.
  \*/
  startColumnFillTint: number

/\*\*

- Column borders in the first alternating column strokes group use this stroke swatch (color, gradient, tint, or mixed ink).
  \*/
  startColumnStrokeColor: Swatch

/\*\*

- Column count for the first alternating column strokes group.
  \*/
  startColumnStrokeCount: number

/\*\*

- Stroke gap swatch for column borders in the first alternating column strokes group (color, gradient, tint, or mixed ink). Applies when start column stroke count is 1 or greater.
  \*/
  startColumnStrokeGapColor: Swatch

/\*\*

- When true, gaps in the column borders of the first alternating column strokes group overprint. Applies when start column stroke count is 1 or greater.
  \*/
  startColumnStrokeGapOverprint: boolean

/\*\*

- Tint percentage for column-border gap color in the first alternating column strokes group. (Range: 0 to 100) Applies when start column stroke count is 1 or greater.
  \*/
  startColumnStrokeGapTint: number

/\*\*

- When true, column borders in the first alternating column strokes group overprint. Applies when start column stroke count is 1 or greater.
  \*/
  startColumnStrokeOverprint: boolean

/\*\*

- For the first alternating column-stroke group, sets border tint percentage. (Range: 0 to 100) Applies when start column stroke count is 1 or greater.
  \*/
  startColumnStrokeTint: number

/\*\*

- Stroke type used for columns in the first alternating strokes group.
  \*/
  startColumnStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for column borders in the first alternating column strokes group. Applies when start column stroke count is 1 or greater.
  \*/
  startColumnStrokeWeight: number | string

/\*\*

- Rows in the first alternating fills group use this fill swatch (color, gradient, tint, or mixed ink). Applies when alternating fills are defined for table rows.
  \*/
  startRowFillColor: Swatch

/\*\*

- Row count for the first alternating fills group. Applies when alternating fills are defined for table rows.
  \*/
  startRowFillCount: number

/\*\*

- When true, rows in the first alternating fills group overprint. Applies when alternating fills are defined for table rows.
  \*/
  startRowFillOverprint: boolean

/\*\*

- Tint percentage for rows in the first alternating fills group. (Range: 0 to 100) Applies when alternating fills are defined for table rows.
  \*/
  startRowFillTint: number

/\*\*

- Row borders in the first alternating row strokes group use this color swatch (color, gradient, tint, or mixed ink). Applies when start row stroke count is 1 or greater.
  \*/
  startRowStrokeColor: Swatch

/\*\*

- Row count for the first alternating row strokes group.
  \*/
  startRowStrokeCount: number

/\*\*

- Row-border stroke gap color in the first alternating row strokes group is supplied as a swatch (color, gradient, tint, or mixed ink). Applies when start row stroke count is 1 or greater.
  \*/
  startRowStrokeGapColor: Swatch

/\*\*

- When true, the row border stroke gap color in the first alternating row strokes group overprints. Applies when start row stroke count is 1 or greater.
  \*/
  startRowStrokeGapOverprint: boolean

/\*\*

- Tint percentage for row-border gap color in the first alternating rows group. (Range: 0 to 100) Applies when start row stroke count is 1 or greater.
  \*/
  startRowStrokeGapTint: number

/\*\*

- When true, row borders in the first alternating row strokes group overprint. Applies when start row stroke count is 1 or greater.
  \*/
  startRowStrokeOverprint: boolean

/\*\*

- Tint percentage for borders in the first alternating row strokes group. (Range: 0 to 100) Applies when start row stroke count is 1 or greater.
  \*/
  startRowStrokeTint: number

/\*\*

- Stroke type used for rows in the first alternating strokes group.
  \*/
  startRowStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for row borders in the first alternating row strokes group. Applies when start row stroke count is 1 or greater.
  \*/
  startRowStrokeWeight: number | string

/\*\*

- Insertion point positioned before the table in the story containing it.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- Display order for row and column strokes where corners meet.
  \*/
  strokeOrder: StrokeOrderTypes

/\*\*

- Direction setting for the table.
  \*/
  tableDirection: TableDirectionOptions

/\*\*

- Bottom inset value for the text cell.
  \*/
  textBottomInset: number | string

/\*\*

- Text boxes are exposed through this collection.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Text frames are exposed through this collection.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Left inset value for the text cell.
  \*/
  textLeftInset: number | string

/\*\*

- Right inset value for the text cell.
  \*/
  textRightInset: number | string

/\*\*

- Top inset value for the text cell.
  \*/
  textTopInset: number | string

/\*\*

- Text variable instances are exposed through this collection.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Table top border stroke color uses a swatch (color, gradient, tint, or mixed ink).
  \*/
  topBorderStrokeColor: Swatch

/\*\*

- Gap color for the table's top border stroke, supplied as a swatch (color, gradient, tint, or mixed ink). Applies only when top border stroke type is not solid.
  \*/
  topBorderStrokeGapColor: Swatch

/\*\*

- When true, the top border stroke gap overprints. Applies only when top border stroke type is not solid.
  \*/
  topBorderStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the table's top border stroke gap color. (Range: 0 to 100) Applies only when top border stroke type is not solid.
  \*/
  topBorderStrokeGapTint: number

/\*\*

- When true, the top border strokes overprint.
  \*/
  topBorderStrokeOverprint: boolean

/\*\*

- Tint percentage for the table's top border stroke. (Range: 0 to 100)
  \*/
  topBorderStrokeTint: number

/\*\*

- Stroke type used for the top border.
  \*/
  topBorderStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the table's top border stroke.
  \*/
  topBorderStrokeWeight: number | string

/\*\*

- Width of the Table; for a table or row, this equals the combined column widths.
  \*/
  width: number | string

/\*\*

- Adds an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Applies default tags from XML preference to the object or parent story.
  \*/
  autoTag(): void

/\*\*

- Finds glyphs matching the find what value, then replaces them with the change to value.
- @param reverseOrder When true, output order is reversed.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value, then replaces it with the change to value.
- @param reverseOrder When true, output order is reversed.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value, then replaces it with the change to value.
- @param reverseOrder When true, output order is reversed.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value, then replaces it with the change character type value.
- @param reverseOrder When true, output order is reversed.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Clear Table Style Overrides
  \*/
  clearTableStyleOverrides(): void

/\*\*

- Converts bullets and numbering into text.
  \*/
  convertBulletsAndNumberingToText(): void

/\*\*

- Converts the table into text.
- @param columnSeparator Character inserted between each column's content in the converted text. It may be any single character, including a letter, number, punctuation mark, space, or tab. Enter the character itself, not a named label; for example, use ',' instead of 'Comma'. Escape double quotes, single quotes, or a backslash by adding an extra backslash before them. Use ^p for paragraphs.
- @param rowSeparator Character used between each row's content in the converted text. It may be any single character, including a letter, number, punctuation mark, space, or tab. Enter the character itself, not a named label; for example, use , instead of Comma. Escape double quotes, single quotes, or a backslash by adding an extra backslash before them. Use ^p for paragraphs.
  \*/
  convertToText(columnSeparator: string, rowSeparator: string): Text

/\*\*

- Converts text into outlines. Each text line becomes a polygon object. If converted text is one letter with no internal spaces or detached parts, that polygon has one path only. To determine whether a font permits outline creation, see allow outlines.
- @param deleteOriginal When true, original text is deleted. When false, separate outline object(s) are created over the text.
  \*/
  createOutlines(deleteOriginal?: boolean): PageItem[]

/\*\*

- Gets the label value stored for the specified key.
- @param key Key.
  \*/
  extractLabel(key: string): string

/\*\*

- Finds glyphs matching the find what value.
- @param reverseOrder When true, output order is reversed.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder When true, output order is reversed.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder When true, output order is reversed.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value.
- @param reverseOrder When true, output order is reversed.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Resolves the object specifier, returning object references as an array.
  \*/
  getElements(): Table[]

/\*\*

- Assigns the value stored for the specified key to the label.
- @param key Key.
- @param value Value.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Links the page item to the specified XML element while keeping current content.
- @param using XML element.
  \*/
  markup(using: XMLElement): void

/\*\*

- Recomposes text in the Table.
  \*/
  recompose(): void

/\*\*

- Deletes the Table.
  \*/
  remove(): void

/\*\*

- Removes the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Marks this object as selected.
- @param existingSelection Selection status for the Table relative to objects already selected.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Generates a string that can be executed to return the Table.
  \*/
  toSource(): string

/\*\*

- Retrieves the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Splits all merged Table cells back apart.
  \*/
  unmerge(): Cell[]
  }

/\*\*

- Tables collection.
  \*/
  declare class Tables {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Returns the Table at the specified index.
- @param index Index.
  \*/
  [index: number]: Table

/\*\*

- Creates a table.
- @param to Placement location, either relative to the reference object or within the container object.
- @param reference Reference object. Required when the to value specifies before or after.
- @param withProperties Initial Table property values
  \*/
  add(to?: LocationOptions, reference?: Table | XMLElement | XmlStory | TextFrame | EndnoteTextFrame | Text | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Story | Cell, withProperties?: object): Table

/\*\*

- Returns any Table from the collection.
  \*/
  anyItem(): Table

/\*\*

- Displays the element count in the Table.
  \*/
  count(): number

/\*\*

- Yields every Table object held by the collection.
  \*/
  everyItem(): Table[]

/\*\*

- Yields the collection's first Table.
  \*/
  firstItem(): Table

/\*\*

- Returns the Table at the specified index or name.
- @param index Index value or name.
  \*/
  item(index: number | string): Table

/\*\*

- Finds a Table by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Table

/\*\*

- Finds a Table by name.
- @param name Name value.
  \*/
  itemByName(name: string): Table

/\*\*

- Returns Tables in the specified range.
- @param from Table, index, or name at the range start.
- @param to Table, index, or name at the range end.
  \*/
  itemByRange(from: Table | number | string, to: Table | number | string): Table[]

/\*\*

- Yields the collection's last Table.
  \*/
  lastItem(): Table

/\*\*

- Yields the collection's middle Table.
  \*/
  middleItem(): Table

/\*\*

- Finds the Table whose index comes after the specified Table in the collection.
- @param obj Table positioned immediately before the target Table.
  \*/
  nextItem(obj: Table): Table

/\*\*

- Finds the Table immediately before the supplied index.
- @param obj Index of the Table positioned after the target Table.
  \*/
  previousItem(obj: Table): Table

/\*\*

- Generates a string that can be executed to return the Table.
  \*/
  toSource(): string
  }

/\*\*

- Table column.
  \*/
  declare class Column {
  /\*\*
  - When true, cell height or cells in the Column may adjust automatically to fit content. If maximum or minimum height values are specified, they bound that adjustment.
    \*/
    autoGrow: boolean

/\*\*

- Bottom edge border stroke uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  bottomEdgeStrokeColor: Swatch

/\*\*

- Bottom edge border stroke gap uses this swatch (color, gradient, tint, or mixed ink). Not valid when bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapColor: Swatch

/\*\*

- When true, the bottom edge border stroke gap color overprints. Not valid when bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the bottom edge border stroke gap color. (Range: 0 to 100) Not valid when bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapTint: number

/\*\*

- When true, the bottom edge border stroke overprints.
  \*/
  bottomEdgeStrokeOverprint: boolean

/\*\*

- Tint percentage for the bottom edge border stroke.
  \*/
  bottomEdgeStrokeTint: number

/\*\*

- Stroke type used for the bottom edge.
  \*/
  bottomEdgeStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the bottom edge border stroke.
  \*/
  bottomEdgeStrokeWeight: number | string

/\*\*

- Bottom inset for the cell. Deprecated API; use TextBottomInset or GraphicBottomInset
  \*/
  bottomInset: number | string

/\*\*

- Table cells are exposed through this collection.
  \*/
  readonly cells: Cells

/\*\*

- When true, the cell's content is clipped to the cell width and height. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell
  \*/
  clipContentToCell: boolean

/\*\*

- When true, the graphic cell's content is clipped to the cell width and height.
  \*/
  clipContentToGraphicCell: boolean

/\*\*

- When true, the text cell's content is clipped to the cell width and height.
  \*/
  clipContentToTextCell: boolean

/\*\*

- Number of columns spanned by the object.
  \*/
  readonly columnSpan: number

/\*\*

- Table columns are exposed through this collection.
  \*/
  readonly columns: Columns

/\*\*

- Text contents. For rows or columns, a string fills every cell in the row or column; with an array, the first value fills the left-most cell in a row or the top-most cell in a column, then later values fill the next cell to the right for rows or the next lower cell for columns.
  \*/
  contents: PageItem | string | SpecialCharacters | string[] | PageItems | NothingEnum

/\*\*

- When true, the diagonal line is drawn in front of cell contents.
  \*/
  diagonalLineInFront: boolean

/\*\*

- Diagonal line color, supplied as a swatch.
  \*/
  diagonalLineStrokeColor: Swatch

/\*\*

- Diagonal line stroke gap uses this swatch (color, gradient, tint, or mixed ink). Not valid when diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapColor: Swatch

/\*\*

- When true, the diagonal line stroke gap overprints. Not valid when diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the diagonal line stroke gap color. Not valid when diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapTint: number

/\*\*

- When true, the diagonal line stroke overprints.
  \*/
  diagonalLineStrokeOverprint: boolean

/\*\*

- Diagonal line tint percentage. (Range: 0 to 100)
  \*/
  diagonalLineStrokeTint: number

/\*\*

- Stroke type used by the diagonal line(s).
  \*/
  diagonalLineStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the diagonal line.
  \*/
  diagonalLineStrokeWeight: number | string

/\*\*

- Event listeners are exposed through this collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events are exposed through this collection.
  \*/
  readonly events: Events

/\*\*

- Fill for the object uses this swatch (color, gradient, tint, or mixed ink).
  \*/
  fillColor: Swatch | string

/\*\*

- Tint percentage for the object's fill.
  \*/
  fillTint: number

/\*\*

- Distance between the text baseline and the cell's top inset.
  \*/
  firstBaselineOffset: FirstBaseline

/\*\*

- Angle for a linear gradient applied to the object's fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- For the object's fill, stores linear-gradient length or radial-gradient radius.
  \*/
  gradientFillLength: number

/\*\*

- Starting point, in page coordinates, for a gradient applied to the Column fill, formatted as [x, y].
  \*/
  gradientFillStart: (number | string)[]

/\*\*

- Bottom inset value for the graphic cell.
  \*/
  graphicBottomInset: number | string

/\*\*

- Left inset value for the graphic cell.
  \*/
  graphicLeftInset: number | string

/\*\*

- Right inset value for the graphic cell.
  \*/
  graphicRightInset: number | string

/\*\*

- Top inset value for the graphic cell.
  \*/
  graphicTopInset: number | string

/\*\*

- Height of the Column; for a table or column, this equals the combined row heights.
  \*/
  height: number | string

/\*\*

- Position of the Column inside its containing object.
  \*/
  readonly index: number

/\*\*

- Inner column border stroke color, supplied as a swatch.
  \*/
  innerColumnStrokeColor: Swatch

/\*\*

- Inner column border stroke gap uses this swatch (color, gradient, tint, or mixed ink). Not valid when inner column stroke type is solid.
  \*/
  innerColumnStrokeGapColor: Swatch
