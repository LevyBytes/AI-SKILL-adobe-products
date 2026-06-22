# Indesign (part 68)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Reports how many elements the TOCStyle has.
  \*/
  count(): number

/\*\*

- Provides all TOCStyle entries in the collection.
  \*/
  everyItem(): TOCStyle[]

/\*\*

- Provides the first TOCStyle from the collection.
  \*/
  firstItem(): TOCStyle

/\*\*

- Provides the TOCStyle selected by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): TOCStyle

/\*\*

- Provides the TOCStyle selected by ID.
- @param id ID value.
  \*/
  itemByID(id: number): TOCStyle

/\*\*

- Provides the TOCStyle selected by name.
- @param name Name value.
  \*/
  itemByName(name: string): TOCStyle

/\*\*

- Provides the TOCStyles objects inside the requested range.
- @param from Range start: TOCStyle, index, or name.
- @param to Range end: TOCStyle, index, or name.
  \*/
  itemByRange(from: TOCStyle | number | string, to: TOCStyle | number | string): TOCStyle[]

/\*\*

- Provides the last TOCStyle from the collection.
  \*/
  lastItem(): TOCStyle

/\*\*

- Provides the middle TOCStyle from the collection.
  \*/
  middleItem(): TOCStyle

/\*\*

- Provides the TOCStyle immediately after the supplied TOCStyle in the collection.
- @param obj TOCStyle immediately before the desired TOCStyle.
  \*/
  nextItem(obj: TOCStyle): TOCStyle

/\*\*

- Provides the TOCStyle immediately before the supplied index.
- @param obj Index for the TOCStyle immediately after the desired TOCStyle.
  \*/
  previousItem(obj: TOCStyle): TOCStyle

/\*\*

- Creates source text that evaluates back to the TOCStyle.
  \*/
  toSource(): string
  }

/\*\*

- Definition for a TOC entry.
  \*/
  declare class TOCStyleEntry {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- ParagraphStyle used by the TOC entry.
  \*/
  formatStyle: ParagraphStyle | string

/\*\*

- Position index for the TOCStyleEntry inside its container.
  \*/
  readonly index: number

/\*\*

- True when object specifier resolution yields valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Indent level assigned to the TOC entry.
  \*/
  level: number

/\*\*

- Name assigned to the TOCStyleEntry.
  \*/
  name: string

/\*\*

- Page-number position used by the TOC entry style.
  \*/
  pageNumberPosition: PageNumberPosition

/\*\*

- CharacterStyle used for the entry page number.
  \*/
  pageNumberStyle: CharacterStyle | string

/\*\*

- Parent object for the TOCStyleEntry (a TOCStyle).
  \*/
  readonly parent: TOCStyle

/\*\*

- Property bag for assigning several properties in one operation.
  \*/
  properties: object

/\*\*

- Separator string placed between entry text and page numbers.
  \*/
  separator: string

/\*\*

- CharacterStyle used for the separator between TOC entry text and page numbers.
  \*/
  separatorStyle: CharacterStyle | string

/\*\*

- When true, entries are alphabetized.
  \*/
  sortAlphabet: boolean

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): TOCStyleEntry[]

/\*\*

- Removes this TOCStyleEntry.
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

- Creates source text that evaluates back to the TOCStyleEntry.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing TOC style entries.
  \*/
  declare class TOCStyleEntries {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Provides the TOCStyleEntry selected by index.
- @param index Index value.
  \*/
  [index: number]: TOCStyleEntry

/\*\*

- Creates a TOC style entry.
- @param styleName Paragraph style included as TOC entries in the TOC.
- @param withProperties Initial property values for the new TOCStyleEntry.
  \*/
  add(styleName: string, withProperties: object): TOCStyleEntry

/\*\*

- Provides any TOCStyleEntry from the collection.
  \*/
  anyItem(): TOCStyleEntry

/\*\*

- Reports how many elements the TOCStyleEntry has.
  \*/
  count(): number

/\*\*

- Provides all TOCStyleEntry entries in the collection.
  \*/
  everyItem(): TOCStyleEntry[]

/\*\*

- Provides the first TOCStyleEntry from the collection.
  \*/
  firstItem(): TOCStyleEntry

/\*\*

- Provides the TOCStyleEntry selected by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): TOCStyleEntry

/\*\*

- Provides the TOCStyleEntry selected by name.
- @param name Name value.
  \*/
  itemByName(name: string): TOCStyleEntry

/\*\*

- Provides the TOCStyleEntries objects inside the requested range.
- @param from Range start: TOCStyleEntry, index, or name.
- @param to Range end: TOCStyleEntry, index, or name.
  \*/
  itemByRange(from: TOCStyleEntry | number | string, to: TOCStyleEntry | number | string): TOCStyleEntry[]

/\*\*

- Provides the last TOCStyleEntry from the collection.
  \*/
  lastItem(): TOCStyleEntry

/\*\*

- Provides the middle TOCStyleEntry from the collection.
  \*/
  middleItem(): TOCStyleEntry

/\*\*

- Provides the TOCStyleEntry immediately after the supplied TOCStyleEntry in the collection.
- @param obj TOCStyleEntry immediately before the desired TOCStyleEntry.
  \*/
  nextItem(obj: TOCStyleEntry): TOCStyleEntry

/\*\*

- Provides the TOCStyleEntry immediately before the supplied index.
- @param obj Index for the TOCStyleEntry immediately after the desired TOCStyleEntry.
  \*/
  previousItem(obj: TOCStyleEntry): TOCStyleEntry

/\*\*

- Creates source text that evaluates back to the TOCStyleEntry.
  \*/
  toSource(): string
  }

/\*\*

- Table cell object.
  \*/
  declare class Cell {
  /\*\*
  - Lists every Graphic inside the Cell.
    \*/
    readonly allGraphics: Graphic[]

/\*\*

- Lists every PageItem inside the Cell.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- CellStyle used by the cell.
  \*/
  appliedCellStyle: CellStyle | string

/\*\*

- XML element linked to the Cell.
  \*/
  readonly associatedXMLElement: XMLItem

/\*\*

- When true, the cell height, or the heights of cells in the Cell, adjusts automatically to fit content. Note: growth and shrinkage are limited by any specified maximum or minimum height.
  \*/
  autoGrow: boolean

/\*\*

- Swatch for the bottom edge border stroke, using color, gradient, tint, or mixed ink.
  \*/
  bottomEdgeStrokeColor: Swatch

/\*\*

- Swatch for the gap of the bottom edge border stroke, using color, gradient, tint, or mixed ink. Note: invalid when bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapColor: Swatch

/\*\*

- When true, the gap color of the bottom edge border stroke overprints. Note: invalid when bottom edge stroke type is solid.
  \*/
  bottomEdgeStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the bottom edge border stroke gap color. (Range: 0 to 100). Note: invalid when bottom edge stroke type is solid.
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

- Stroke style for the bottom edge.
  \*/
  bottomEdgeStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the bottom edge border stroke.
  \*/
  bottomEdgeStrokeWeight: number | string

/\*\*

- Bottom inset for the cell. Deprecated API; use TextBottomInset or GraphicBottomInset.
  \*/
  bottomInset: number | string

/\*\*

- Collection containing buttons.
  \*/
  readonly buttons: Buttons

/\*\*

- Content type for the cell.
  \*/
  cellType: CellTypeEnum

/\*\*

- Collection containing table cells.
  \*/
  readonly cells: Cells

/\*\*

- Collection containing changes.
  \*/
  readonly changes: Changes

/\*\*

- Collection containing characters.
  \*/
  readonly characters: Characters

/\*\*

- Collection containing checkboxes.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- When true, cell content is clipped to the cell width and height. The API has been deprecated. Use ClipContentsToTextCell or ClipContentsToPageItemCell.
  \*/
  clipContentToCell: boolean

/\*\*

- When true, graphic-cell content is clipped to the cell width and height.
  \*/
  clipContentToGraphicCell: boolean

/\*\*

- When true, text-cell content is clipped to the cell width and height.
  \*/
  clipContentToTextCell: boolean

/\*\*

- Column-span count for the object.
  \*/
  readonly columnSpan: number

/\*\*

- Collection containing table columns.
  \*/
  readonly columns: Columns

/\*\*

- Collection containing comboboxes.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Text contents. For rows or columns, a string fills every cell in that row or column; an array fills from the left-most row cell or top-most column cell, then continues to the next cell to the right for rows or the next lower cell for columns, and proceeds in order.
  \*/
  contents: PageItem | string | SpecialCharacters | string[] | PageItems | NothingEnum

/\*\*

- When true, the diagonal line is drawn in front of cell contents.
  \*/
  diagonalLineInFront: boolean

/\*\*

- Swatch used for the diagonal line color.
  \*/
  diagonalLineStrokeColor: Swatch

/\*\*

- Swatch for the gap of the diagonal line stroke, using color, gradient, tint, or mixed ink. Note: invalid when diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapColor: Swatch

/\*\*

- When true, the diagonal-line stroke gap overprints. Note: invalid when diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the diagonal-line stroke gap color. Note: invalid when diagonal line stroke type is solid.
  \*/
  diagonalLineStrokeGapTint: number

/\*\*

- When true, the diagonal-line stroke overprints.
  \*/
  diagonalLineStrokeOverprint: boolean

/\*\*

- Tint percentage for the diagonal line. (Range: 0 to 100)
  \*/
  diagonalLineStrokeTint: number

/\*\*

- Stroke style for the diagonal line(s).
  \*/
  diagonalLineStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the diagonal line.
  \*/
  diagonalLineStrokeWeight: number | string

/\*\*

- Collection containing endnote text frames.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- Collection containing endnotes.
  \*/
  readonly endnotes: Endnotes

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Swatch for the fill of the object, using color, gradient, tint, or mixed ink.
  \*/
  fillColor: Swatch | string

/\*\*

- Tint percentage for the fill of the object.
  \*/
  fillTint: number

/\*\*

- Distance from the text baseline to the cell top inset.
  \*/
  firstBaselineOffset: FirstBaseline

/\*\*

- Collection containing footnotes.
  \*/
  readonly footnotes: Footnotes

/\*\*

- Collection containing form fields.
  \*/
  readonly formFields: FormFields

/\*\*

- Linear-gradient angle for the object fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Length for a linear-gradient fill, or radius for a radial-gradient fill, on the object.
  \*/
  gradientFillLength: number

/\*\*

- Gradient fill starting point for the Cell, in page coordinates and formatted as [x, y].
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

- Collection containing graphic lines.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Right inset for the graphic cell.
  \*/
  graphicRightInset: number | string

/\*\*

- Top inset for the graphic cell.
  \*/
  graphicTopInset: number | string

/\*\*

- Collection containing groups.
  \*/
  readonly groups: Groups

/\*\*

- Height of the Cell. For a table or column, this is the combined row-height total.
  \*/
  height: number | string

/\*\*

- Collection containing hidden text objects.
  \*/
  readonly hiddenTexts: HiddenTexts

/\*\*

- Unique ID for the Cell.
  \*/
  readonly id: number

/\*\*

- Position index for the Cell inside its container.
  \*/
  readonly index: number

/\*\*

- Swatch-defined color for the inner column border stroke.
  \*/
  innerColumnStrokeColor: Swatch

/\*\*

- Swatch for the gap of the inner column border stroke, using color, gradient, tint, or mixed ink. Note: invalid when inner column stroke type is solid.
  \*/
  innerColumnStrokeGapColor: Swatch

/\*\*

- When true, the gap color of the inner column border stroke overprints. Note: invalid when inner column stroke type is solid.
  \*/
  innerColumnStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the inner column border stroke gap color. (Range: 0 to 100). Note: invalid when inner column stroke type is solid.
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

- Stroke style for the inner column.
  \*/
  innerColumnStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the inner column border stroke.
  \*/
  innerColumnStrokeWeight: number | string

/\*\*

- Swatch-defined color for the inner row border stroke.
  \*/
  innerRowStrokeColor: Swatch

/\*\*

- Swatch for the gap of the inner row border stroke, using color, gradient, tint, or mixed ink. Note: invalid when inner row stroke type is solid.
  \*/
  innerRowStrokeGapColor: Swatch

/\*\*

- When true, the gap color of the inner row border stroke overprints. Note: invalid when inner row stroke type is solid.
  \*/
  innerRowStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the inner row border stroke. (Range: 0 to 100). Note: invalid when inner row stroke type is solid.
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

- Stroke style for the inner row.
  \*/
  innerRowStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the inner row border strokes.
  \*/
  innerRowStrokeWeight: number | string

/\*\*

- Collection containing insertion points.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when object specifier resolution yields valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- When true, the row stays with the following row when a table breaks across text frames or pages.
  \*/
  keepWithNextRow: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- Swatch for the left edge border stroke, using color, gradient, tint, or mixed ink.
  \*/
  leftEdgeStrokeColor: Swatch

/\*\*

- Swatch for the gap of the left edge border stroke, using color, gradient, tint, or mixed ink. Note: invalid when left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapColor: Swatch

/\*\*

- When true, the gap color of the left edge border stroke overprints. Note: invalid when left edge stroke type is solid.
  \*/
  leftEdgeStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the left edge border stroke gap color. (Range: 0 to 100). Note: invalid when left edge stroke type is solid.
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

- Stroke style for the left edge.
  \*/
  leftEdgeStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the left edge border stroke.
  \*/
  leftEdgeStrokeWeight: number | string

/\*\*

- Left inset for the cell. Deprecated API; use TextLeftInset or GraphicLeftInset.
  \*/
  leftInset: number | string

/\*\*

- Collection containing lines.
  \*/
  readonly lines: Lines

/\*\*

- Collection containing listboxes.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Maximum height that cells in the Cell can reach. Note: this limit still applies when auto grow is true, and it can influence redistribution.
  \*/
  maximumHeight: number | string

/\*\*

- Space from the text baseline to the top inset of the frame or cell.
  \*/
  minimumFirstBaselineOffset: number | string

/\*\*

- Minimum height for cells in the Cell. Note: with auto grow enabled, added content can expand cells beyond this amount, and the minimum can influence redistribution.
  \*/
  minimumHeight: number | string

/\*\*

- Collection containing multi-state objects.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Name assigned to the Cell.
  \*/
  readonly name: string

/\*\*

- Collection containing notes.
  \*/
  readonly notes: Notes

/\*\*

- Collection containing ellipses.
  \*/
  readonly ovals: Ovals

/\*\*

- True when the story contains overset text.
  \*/
  readonly overflows: boolean

/\*\*

- When true, the object fill overprints.
  \*/
  overprintFill: boolean

/\*\*

- PageItems collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Maximum extra spacing allowed between paragraphs in a cell. Note: valid only with justified vertical justification.
  \*/
  paragraphSpacingLimit: number | string

/\*\*

- Collection containing paragraphs.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Parent object for the Cell (a XMLElement, Cell, Table, Column or Row).
  \*/
  readonly parent: any

/\*\*

- Parent Column for the cell.
  \*/
  readonly parentColumn: Column

/\*\*

- Parent Row for the cell.
  \*/
  readonly parentRow: Row

/\*\*

- Collection containing polygons.
  \*/
  readonly polygons: Polygons

/\*\*

- Property bag for assigning several properties in one operation.
  \*/
  properties: object

/\*\*

- Collection containing radio buttons.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Swatch-defined color for the right edge border stroke.
  \*/
  rightEdgeStrokeColor: Swatch

/\*\*

- Swatch for the gap of the right edge border stroke, using color, gradient, tint, or mixed ink. Note: invalid when right edge stroke type is solid.
  \*/
  rightEdgeStrokeGapColor: Swatch

/\*\*

- When true, the gap color of the right edge border stroke overprints. Note: invalid when right edge stroke type is solid.
  \*/
  rightEdgeStrokeGapOverprint: boolean

/\*\*

- Tint percentage for the right edge border stroke gap color. (Range: 0 to 100). Note: invalid when right edge stroke type is solid.
  \*/
  rightEdgeStrokeGapTint: number

/\*\*

- When true, the right edge border stroke overprints.
  \*/
  rightEdgeStrokeOverprint: boolean

/\*\*

- Tint percentage for the right edge border stroke. (Range: 0 to 100)
  \*/
  rightEdgeStrokeTint: number

/\*\*

- Stroke style for the right edge.
  \*/
  rightEdgeStrokeType: StrokeStyle | string

/\*\*

- Stroke weight for the right edge border stroke.
  \*/
  rightEdgeStrokeWeight: number | string

/\*\*

- Right inset for the cell. Deprecated API; use TextLeftInset or GraphicRightInset.
  \*/
  rightInset: number | string

/\*\*

- Cell rotation angle in degrees, limited to 0, 90, 180, or 270.
  \*/
  rotationAngle: number

/\*\*

- Row-span count for the object.
  \*/
  readonly rowSpan: number

/\*\*

- Row type.
  \*/
  rowType: RowTypes

/\*\*

- Collection containing table rows.
  \*/
  readonly rows: Rows

/\*\*

- Collection containing signature fields.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- SplineItems collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Marks the row start position.
  \*/
  startRow: StartParagraph

/\*\*

- Collection containing tables.
  \*/
  readonly tables: Tables

/\*\*

- Bottom inset for the text cell.
  \*/
  textBottomInset: number | string

/\*\*

- Collection containing text boxes.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Collection containing text columns.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Collection containing text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Left inset for the text cell.
  \*/
  textLeftInset: number | string

/\*\*

- Right inset for the text cell.
  \*/
  textRightInset: number | string

/\*\*

- Collection containing text style ranges.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Top inset for the text cell.
  \*/
  textTopInset: number | string

/\*\*

- Collection containing text variable instances.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Collection containing text objects.
  \*/
  readonly texts: Texts

/\*\*

- Swatch for the top edge border stroke, using color, gradient, tint, or mixed ink.
  \*/
  topEdgeStrokeColor: Swatch

/\*\*

- Swatch for the gap of the top edge border stroke, using color, gradient, tint, or mixed ink. Note: invalid when top edge stroke type is solid.
  \*/
  topEdgeStrokeGapColor: Swatch

/\*\*

- When true, the gap color of the top edge border stroke overprints. Note: invalid when top edge stroke type is solid.
  \*/
  topEdgeStrokeGapOverprint: boolean
