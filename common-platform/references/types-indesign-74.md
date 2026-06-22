# Indesign (part 74)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Weight applied to the bottom edge border stroke.
  \*/
  bottomEdgeStrokeWeight: number | NothingEnum

/\*\*

- Deprecated bottom inset API for the cell. Use TextBottomInset or GraphicBottomInset.
  \*/
  bottomInset: number | NothingEnum

/\*\*

- When true, cell content is clipped to the cell width and height. This API is deprecated; use ClipContentsToTextCell or ClipContentsToPageItemCell.
  \*/
  clipContentToCell: boolean | NothingEnum

/\*\*

- When true, graphic-cell content is clipped to the cell width and height.
  \*/
  clipContentToGraphicCell: boolean | NothingEnum

/\*\*

- When true, text-cell content is clipped to the cell width and height.
  \*/
  clipContentToTextCell: boolean | NothingEnum

/\*\*

- When true, the diagonal line is drawn in front of cell contents.
  \*/
  diagonalLineInFront: boolean | NothingEnum

/\*\*

- Swatch used for the diagonal line color.
  \*/
  diagonalLineStrokeColor: Swatch | NothingEnum

/\*\*

- Swatch applied to the diagonal line stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Does not apply to solid diagonal line stroke types.
  \*/
  diagonalLineStrokeGapColor: Swatch | NothingEnum

/\*\*

- When true, the diagonal line stroke gap overprints. Note: Does not apply to solid diagonal line stroke types.
  \*/
  diagonalLineStrokeGapOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the diagonal line stroke gap color. Note: Does not apply to solid diagonal line stroke types.
  \*/
  diagonalLineStrokeGapTint: number | NothingEnum

/\*\*

- When true, the diagonal line stroke overprints.
  \*/
  diagonalLineStrokeOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the diagonal line. (Range: 0 to 100).
  \*/
  diagonalLineStrokeTint: number | NothingEnum

/\*\*

- Stroke style used by the diagonal line(s).
  \*/
  diagonalLineStrokeType: StrokeStyle | NothingEnum | string

/\*\*

- Weight applied to the diagonal line stroke.
  \*/
  diagonalLineStrokeWeight: number | NothingEnum

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Swatch applied to the object's fill; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  fillColor: Swatch | NothingEnum | string

/\*\*

- Tint percentage for the object's fill.
  \*/
  fillTint: number | NothingEnum

/\*\*

- Distance from the text baseline to the cell's top inset.
  \*/
  firstBaselineOffset: FirstBaseline | NothingEnum

/\*\*

- Angle for a linear gradient applied to the object's fill. (Range: -180 to 180).
  \*/
  gradientFillAngle: number | NothingEnum

/\*\*

- Length for a linear gradient, or radius for a radial gradient, applied to the object's fill.
  \*/
  gradientFillLength: number | NothingEnum

/\*\*

- Gradient fill start point for the CellStyle, using page coordinates in the format [x, y].
  \*/
  gradientFillStart: [number | string, number | string] | NothingEnum

/\*\*

- Bottom inset for the graphic cell.
  \*/
  graphicBottomInset: number | NothingEnum

/\*\*

- Left inset for the graphic cell.
  \*/
  graphicLeftInset: number | NothingEnum

/\*\*

- Right inset for the graphic cell.
  \*/
  graphicRightInset: number | NothingEnum

/\*\*

- Top inset for the graphic cell.
  \*/
  graphicTopInset: number | NothingEnum

/\*\*

- Unique ID for the CellStyle.
  \*/
  readonly id: number

/\*\*

- CellStyle position inside its containing object.
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

- Swatch applied to the left edge border stroke; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  leftEdgeStrokeColor: Swatch | NothingEnum

/\*\*

- Swatch applied to the left edge border stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Does not apply to solid left edge stroke types.
  \*/
  leftEdgeStrokeGapColor: Swatch | NothingEnum

/\*\*

- When true, the left edge border stroke gap color overprints. Note: Does not apply to solid left edge stroke types.
  \*/
  leftEdgeStrokeGapOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the left edge border stroke gap color. (Range: 0 to 100) Note: Does not apply to solid left edge stroke types.
  \*/
  leftEdgeStrokeGapTint: number | NothingEnum

/\*\*

- When true, the left edge border stroke overprints.
  \*/
  leftEdgeStrokeOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the left edge border stroke. (Range: 0 to 100).
  \*/
  leftEdgeStrokeTint: number | NothingEnum

/\*\*

- Stroke style used by the left edge.
  \*/
  leftEdgeStrokeType: StrokeStyle | NothingEnum | string

/\*\*

- Weight applied to the left edge border stroke.
  \*/
  leftEdgeStrokeWeight: number | NothingEnum

/\*\*

- Deprecated left inset API for the cell. Use TextLeftInset or GraphicLeftInset.
  \*/
  leftInset: number | NothingEnum

/\*\*

- Space from the text baseline to the top inset of the frame or cell.
  \*/
  minimumFirstBaselineOffset: number | NothingEnum

/\*\*

- Style name.
  \*/
  name: string

/\*\*

- When true, the object's fill overprints.
  \*/
  overprintFill: boolean | NothingEnum

/\*\*

- Maximum extra paragraph spacing allowed in a cell. Note: Available only with justified vertical justification.
  \*/
  paragraphSpacingLimit: number | NothingEnum

/\*\*

- Parent object for the CellStyle, either a Document, Application, or CellStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- Swatch color used by the right edge border stroke.
  \*/
  rightEdgeStrokeColor: Swatch | NothingEnum

/\*\*

- Swatch applied to the right edge border stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Does not apply to solid right edge stroke types.
  \*/
  rightEdgeStrokeGapColor: Swatch | NothingEnum

/\*\*

- When true, the right edge border stroke gap color overprints. Note: Does not apply to solid right edge stroke types.
  \*/
  rightEdgeStrokeGapOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the right edge border stroke gap color. (Range: 0 to 100) Note: Does not apply to solid right edge stroke types.
  \*/
  rightEdgeStrokeGapTint: number | NothingEnum

/\*\*

- When true, the right edge border stroke overprints.
  \*/
  rightEdgeStrokeOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the right edge border stroke. (Range: 0 to 100).
  \*/
  rightEdgeStrokeTint: number | NothingEnum

/\*\*

- Stroke style used by the right edge.
  \*/
  rightEdgeStrokeType: StrokeStyle | NothingEnum | string

/\*\*

- Weight applied to the right edge border stroke.
  \*/
  rightEdgeStrokeWeight: number | NothingEnum

/\*\*

- Deprecated right inset API for the cell. Use TextLeftInset or GraphicRightInset.
  \*/
  rightInset: number | NothingEnum

/\*\*

- Cell rotation angle in degrees, one of 0, 90, 180, or 270.
  \*/
  rotationAngle: number | NothingEnum

/\*\*

- Bottom inset for the text cell.
  \*/
  textBottomInset: number | NothingEnum

/\*\*

- Left inset for the text cell.
  \*/
  textLeftInset: number | NothingEnum

/\*\*

- Right inset for the text cell.
  \*/
  textRightInset: number | NothingEnum

/\*\*

- Top inset for the text cell.
  \*/
  textTopInset: number | NothingEnum

/\*\*

- Swatch applied to the top edge border stroke; accepted kinds are color, gradient, tint, and mixed ink.
  \*/
  topEdgeStrokeColor: Swatch | NothingEnum

/\*\*

- Swatch applied to the top edge border stroke gap; accepted kinds are color, gradient, tint, and mixed ink. Note: Does not apply to solid top edge stroke types.
  \*/
  topEdgeStrokeGapColor: Swatch | NothingEnum

/\*\*

- When true, the top edge border stroke gap color overprints. Note: Does not apply to solid top edge stroke types. .
  \*/
  topEdgeStrokeGapOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the top edge border stroke gap color. (Range: 0 to 100) Note: Does not apply to solid top edge stroke types.
  \*/
  topEdgeStrokeGapTint: number | NothingEnum

/\*\*

- When true, the top edge border stroke overprints.
  \*/
  topEdgeStrokeOverprint: boolean | NothingEnum

/\*\*

- Tint percentage for the top edge border stroke. (Range: 0 to 100).
  \*/
  topEdgeStrokeTint: number | NothingEnum

/\*\*

- Stroke style used by the top edge.
  \*/
  topEdgeStrokeType: StrokeStyle | NothingEnum | string

/\*\*

- Weight applied to the top edge border stroke.
  \*/
  topEdgeStrokeWeight: number | NothingEnum

/\*\*

- Cell top inset. This API is deprecated; use TextTopInset or GraphicTopInset instead.
  \*/
  topInset: number | NothingEnum

/\*\*

- When true, a diagonal is drawn from the top left.
  \*/
  topLeftDiagonalLine: boolean | NothingEnum

/\*\*

- When true, a diagonal is drawn from the top right.
  \*/
  topRightDiagonalLine: boolean | NothingEnum

/\*\*

- Cell vertical alignment setting.
  \*/
  verticalJustification: VerticalJustification | NothingEnum

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates another CellStyle with the same settings.
  \*/
  duplicate(): CellStyle

/\*\*

- Looks up the label value stored for the supplied key.
- @param key Key to query.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into object-reference array entries.
  \*/
  getElements(): CellStyle[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to assign.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates the style to the requested position.
- @param to Target position, either relative to a reference object or inside the containing object.
- @param reference Reference object, needed for before and after placements.
  \*/
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): CellStyle

/\*\*

- Deletes this style.
- @param replacingWith Style used in place of the removed style.
  \*/
  remove(replacingWith: CellStyle): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that returns the CellStyle when run.
  \*/
  toSource(): string

/\*\*

- Returns this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for cell styles.
  \*/
  declare class CellStyles {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number | NothingEnum

/\*\*

- Retrieves the CellStyle at the supplied index.
- @param index Index to retrieve.
  \*/
  [index: number]: CellStyle

/\*\*

- Creates a CellStyle.
- @param withProperties Starting property values for the new CellStyle
  \*/
  add(withProperties: object): CellStyle

/\*\*

- Provides any CellStyle from the collection.
  \*/
  anyItem(): CellStyle

/\*\*

- Reports how many CellStyle elements are present.
  \*/
  count(): number

/\*\*

- Provides all CellStyle objects in the collection.
  \*/
  everyItem(): CellStyle[]

/\*\*

- Provides the first CellStyle in collection order.
  \*/
  firstItem(): CellStyle

/\*\*

- Retrieves the CellStyle at the supplied index or name.
- @param index Index or name to retrieve.
  \*/
  item(index: number | string): CellStyle

/\*\*

- Retrieves the CellStyle with the supplied ID.
- @param id ID to retrieve.
  \*/
  itemByID(id: number): CellStyle

/\*\*

- Retrieves the CellStyle with the supplied name.
- @param name Name to retrieve.
  \*/
  itemByName(name: string): CellStyle

/\*\*

- Retrieves CellStyles spanning the supplied range.
- @param from Starting CellStyle, index, or name.
- @param to Ending CellStyle, index, or name.
  \*/
  itemByRange(from: CellStyle | number | string, to: CellStyle | number | string): CellStyle[]

/\*\*

- Provides the last CellStyle in collection order.
  \*/
  lastItem(): CellStyle

/\*\*

- Provides the middle CellStyle in collection order.
  \*/
  middleItem(): CellStyle

/\*\*

- Provides the CellStyle immediately after the supplied CellStyle.
- @param obj CellStyle positioned before the requested CellStyle.
  \*/
  nextItem(obj: CellStyle): CellStyle

/\*\*

- Provides the CellStyle immediately before the supplied index.
- @param obj Index of the CellStyle positioned after the requested CellStyle.
  \*/
  previousItem(obj: CellStyle): CellStyle

/\*\*

- Builds a string that returns the CellStyle when run.
  \*/
  toSource(): string
  }

/\*\*

- Groups CellStyle entries.
  \*/
  declare class CellStyleGroup {
  /\*\*
  - Every CellStyle entry.
    \*/
    readonly allCellStyles: CellStyle[]

/\*\*

- Nested collection of cell style groups.
  \*/
  readonly cellStyleGroups: CellStyleGroups

/\*\*

- Nested collection of cell styles.
  \*/
  readonly cellStyles: CellStyles

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the CellStyleGroup.
  \*/
  readonly id: number

/\*\*

- CellStyleGroup position within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- CellStyleGroup name.
  \*/
  name: string

/\*\*

- Parent of the CellStyleGroup: a Document, Application or CellStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning multiple properties in one operation.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates another CellStyleGroup with the same settings.
  \*/
  duplicate(): CellStyleGroup

/\*\*

- Looks up the label value stored for the supplied key.
- @param key Key to query.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into object-reference array entries.
  \*/
  getElements(): CellStyleGroup[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to assign.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates the style to the requested position.
- @param to Target position, either relative to a reference object or inside the containing object.
- @param reference Reference object, needed for before and after placements.
  \*/
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): CellStyleGroup

/\*\*

- Deletes this style.
- @param replacingWith Style used in place of the removed style.
  \*/
  remove(replacingWith: ParagraphStyle | CharacterStyle): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that returns the CellStyleGroup when run.
  \*/
  toSource(): string

/\*\*

- Returns this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for cell style groups.
  \*/
  declare class CellStyleGroups {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the CellStyleGroup at the supplied index.
- @param index Index to retrieve.
  \*/
  [index: number]: CellStyleGroup

/\*\*

- Creates a CellStyleGroup.
- @param withProperties Starting property values for the new CellStyleGroup
  \*/
  add(withProperties: object): CellStyleGroup

/\*\*

- Provides any CellStyleGroup from the collection.
  \*/
  anyItem(): CellStyleGroup

/\*\*

- Reports how many CellStyleGroup elements are present.
  \*/
  count(): number

/\*\*

- Provides all CellStyleGroup objects in the collection.
  \*/
  everyItem(): CellStyleGroup[]

/\*\*

- Provides the first CellStyleGroup in collection order.
  \*/
  firstItem(): CellStyleGroup

/\*\*

- Retrieves the CellStyleGroup at the supplied index or name.
- @param index Index or name to retrieve.
  \*/
  item(index: number | string): CellStyleGroup

/\*\*

- Retrieves the CellStyleGroup with the supplied ID.
- @param id ID to retrieve.
  \*/
  itemByID(id: number): CellStyleGroup

/\*\*

- Retrieves the CellStyleGroup with the supplied name.
- @param name Name to retrieve.
  \*/
  itemByName(name: string): CellStyleGroup

/\*\*

- Retrieves CellStyleGroups spanning the supplied range.
- @param from Starting CellStyleGroup, index, or name.
- @param to Ending CellStyleGroup, index, or name.
  \*/
  itemByRange(from: CellStyleGroup | number | string, to: CellStyleGroup | number | string): CellStyleGroup[]

/\*\*

- Provides the last CellStyleGroup in collection order.
  \*/
  lastItem(): CellStyleGroup

/\*\*

- Provides the middle CellStyleGroup in collection order.
  \*/
  middleItem(): CellStyleGroup

/\*\*

- Provides the CellStyleGroup immediately after the supplied CellStyleGroup.
- @param obj CellStyleGroup positioned before the requested CellStyleGroup.
  \*/
  nextItem(obj: CellStyleGroup): CellStyleGroup

/\*\*

- Provides the CellStyleGroup immediately before the supplied index.
- @param obj Index of the CellStyleGroup positioned after the requested CellStyleGroup.
  \*/
  previousItem(obj: CellStyleGroup): CellStyleGroup

/\*\*

- Builds a string that returns the CellStyleGroup when run.
  \*/
  toSource(): string
  }

/\*\*

- Represents a nested line style.
  \*/
  declare class NestedLineStyle {
  /\*\*
  - Character style assigned to the text.
    \*/
    appliedCharacterStyle: CharacterStyle | string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- NestedLineStyle position within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Number of lines that receive the nested style.
  \*/
  lineCount: number

/\*\*

- Owning object for the NestedLineStyle; allowed parents include TextDefault, a Paragraph, a ParagraphStyle, Text, an InsertionPoint, a TextStyleRange, a TextColumn, a Line, a Word, a Character, a Story or an XmlStory.
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning multiple properties in one operation.
  \*/
  properties: object

/\*\*

- Number of line-style rules to step back.
  \*/
  repeatLast: number

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into object-reference array entries.
  \*/
  getElements(): NestedLineStyle[]

/\*\*

- Deletes the NestedLineStyle.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that returns the NestedLineStyle when run.
  \*/
  toSource(): string

/\*\*

- Returns this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for nested line styles.
  \*/
  declare class NestedLineStyles {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the NestedLineStyle at the supplied index.
- @param index Index to retrieve.
  \*/
  [index: number]: NestedLineStyle

/\*\*

- Creates a NestedLineStyle.
- @param withProperties Starting property values for the new NestedLineStyle
  \*/
  add(withProperties: object): NestedLineStyle

/\*\*

- Provides any NestedLineStyle from the collection.
  \*/
  anyItem(): NestedLineStyle

/\*\*

- Reports how many NestedLineStyle elements are present.
  \*/
  count(): number

/\*\*

- Provides all NestedLineStyle objects in the collection.
  \*/
  everyItem(): NestedLineStyle[]

/\*\*

- Provides the first NestedLineStyle in collection order.
  \*/
  firstItem(): NestedLineStyle

/\*\*

- Retrieves the NestedLineStyle at the supplied index or name.
- @param index Index or name to retrieve.
  \*/
  item(index: number | string): NestedLineStyle

/\*\*

- Retrieves NestedLineStyles spanning the supplied range.
- @param from Starting NestedLineStyle, index, or name.
- @param to Ending NestedLineStyle, index, or name.
  \*/
  itemByRange(from: NestedLineStyle | number | string, to: NestedLineStyle | number | string): NestedLineStyle[]

/\*\*

- Provides the last NestedLineStyle in collection order.
  \*/
  lastItem(): NestedLineStyle

/\*\*

- Provides the middle NestedLineStyle in collection order.
  \*/
  middleItem(): NestedLineStyle

/\*\*

- Provides the NestedLineStyle immediately after the supplied NestedLineStyle.
- @param obj NestedLineStyle positioned before the requested NestedLineStyle.
  \*/
  nextItem(obj: NestedLineStyle): NestedLineStyle

/\*\*

- Provides the NestedLineStyle immediately before the supplied index.
- @param obj Index of the NestedLineStyle positioned after the requested NestedLineStyle.
  \*/
  previousItem(obj: NestedLineStyle): NestedLineStyle

/\*\*

- Builds a string that returns the NestedLineStyle when run.
  \*/
  toSource(): string
  }

/\*\*

- Represents a nested GREP style.
  \*/
  declare class NestedGrepStyle {
  /\*\*
  - Character style assigned to the text.
    \*/
    appliedCharacterStyle: CharacterStyle | string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- GREP expression that drives automatic styling.
  \*/
  grepExpression: string

/\*\*

- NestedGrepStyle position within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Owning object for the NestedGrepStyle; allowed parents include TextDefault, a Paragraph, a ParagraphStyle, Text, an InsertionPoint, a TextStyleRange, a TextColumn, a Line, a Word, a Character, a Story or an XmlStory.
  \*/
  readonly parent: any
