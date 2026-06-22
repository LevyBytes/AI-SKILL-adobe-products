# Indesign (part 67)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): PreflightProfileRule[]

/\*\*

- Stores the specified value under the specified label key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this PreflightProfileRule.
  \*/
  remove(): void

/\*\*

- Detaches the event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the PreflightProfileRule.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for preflight profile rules.
  \*/
  declare class PreflightProfileRules {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a PreflightProfileRule by the specified index.
- @param index Index value.
  \*/
  [index: number]: PreflightProfileRule

/\*\*

- Creates and adds a preflight rule on the profile.
- @param id Rule ID to add.
- @param withProperties Starting property values for the new PreflightProfileRule
  \*/
  add(id: string, withProperties: object): any

/\*\*

- Gets an arbitrary PreflightProfileRule from the collection.
  \*/
  anyItem(): PreflightProfileRule

/\*\*

- Counts elements in the PreflightProfileRule.
  \*/
  count(): number

/\*\*

- Gets all PreflightProfileRule objects from the collection.
  \*/
  everyItem(): PreflightProfileRule[]

/\*\*

- Gets the first PreflightProfileRule from the collection.
  \*/
  firstItem(): PreflightProfileRule

/\*\*

- Looks up a PreflightProfileRule by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): PreflightProfileRule

/\*\*

- Finds a PreflightProfileRule by ID.
- @param id ID value.
  \*/
  itemByID(id: number): PreflightProfileRule

/\*\*

- Finds a PreflightProfileRule by name.
- @param name Name value.
  \*/
  itemByName(name: string): PreflightProfileRule

/\*\*

- Gets the PreflightProfileRules entries inside the requested range.
- @param from Starting PreflightProfileRule, index, or name for the range.
- @param to Ending PreflightProfileRule, index, or name for the range.
  \*/
  itemByRange(from: PreflightProfileRule | number | string, to: PreflightProfileRule | number | string): PreflightProfileRule[]

/\*\*

- Gets the last PreflightProfileRule from the collection.
  \*/
  lastItem(): PreflightProfileRule

/\*\*

- Gets the middle PreflightProfileRule from the collection.
  \*/
  middleItem(): PreflightProfileRule

/\*\*

- Gets the PreflightProfileRule positioned after the supplied PreflightProfileRule in the collection.
- @param obj PreflightProfileRule positioned immediately before the requested PreflightProfileRule.
  \*/
  nextItem(obj: PreflightProfileRule): PreflightProfileRule

/\*\*

- Gets the PreflightProfileRule positioned before the specified index.
- @param obj Index for the PreflightProfileRule positioned after the requested PreflightProfileRule.
  \*/
  previousItem(obj: PreflightProfileRule): PreflightProfileRule

/\*\*

- Builds executable source text that resolves back to the PreflightProfileRule.
  \*/
  toSource(): string
  }

/\*\*

- Stroke style object.
  \*/
  declare class StrokeStyle {
  /\*\*
  - Collection object for event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection object for events.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the StrokeStyle.
  \*/
  readonly id: number

/\*\*

- Position of the StrokeStyle inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name of the StrokeStyle.
  \*/
  name: string

/\*\*

- Parent object for the StrokeStyle (a Document or Application).
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning multiple properties in one call.
  \*/
  properties: object

/\*\*

- Stroke style type.
  \*/
  readonly strokeStyleType: string

/\*\*

- Attaches an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate of this StrokeStyle.
  \*/
  duplicate(): StrokeStyle

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): StrokeStyle[]

/\*\*

- Deletes this stroke style.
- @param replacingWith Stroke style to use as the replacement for the removed style. .
  \*/
  remove(replacingWith: StrokeStyle | string): void

/\*\*

- Detaches the event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the StrokeStyle.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for stroke styles.
  \*/
  declare class StrokeStyles {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a StrokeStyle by the specified index.
- @param index Index value.
  \*/
  [index: number]: StrokeStyle

/\*\*

- Gets an arbitrary StrokeStyle from the collection.
  \*/
  anyItem(): StrokeStyle

/\*\*

- Counts elements in the StrokeStyle.
  \*/
  count(): number

/\*\*

- Gets all StrokeStyle objects from the collection.
  \*/
  everyItem(): StrokeStyle[]

/\*\*

- Gets the first StrokeStyle from the collection.
  \*/
  firstItem(): StrokeStyle

/\*\*

- Looks up a StrokeStyle by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): StrokeStyle

/\*\*

- Finds a StrokeStyle by ID.
- @param id ID value.
  \*/
  itemByID(id: number): StrokeStyle

/\*\*

- Finds a StrokeStyle by name.
- @param name Name value.
  \*/
  itemByName(name: string): StrokeStyle

/\*\*

- Gets the StrokeStyles entries inside the requested range.
- @param from Starting StrokeStyle, index, or name for the range.
- @param to Ending StrokeStyle, index, or name for the range.
  \*/
  itemByRange(from: StrokeStyle | number | string, to: StrokeStyle | number | string): StrokeStyle[]

/\*\*

- Gets the last StrokeStyle from the collection.
  \*/
  lastItem(): StrokeStyle

/\*\*

- Gets the middle StrokeStyle from the collection.
  \*/
  middleItem(): StrokeStyle

/\*\*

- Gets the StrokeStyle positioned after the supplied StrokeStyle in the collection.
- @param obj StrokeStyle positioned immediately before the requested StrokeStyle.
  \*/
  nextItem(obj: StrokeStyle): StrokeStyle

/\*\*

- Gets the StrokeStyle positioned before the specified index.
- @param obj Index for the StrokeStyle positioned after the requested StrokeStyle.
  \*/
  previousItem(obj: StrokeStyle): StrokeStyle

/\*\*

- Builds executable source text that resolves back to the StrokeStyle.
  \*/
  toSource(): string
  }

/\*\*

- Dashed stroke style object.
  \*/
  declare class DashedStrokeStyle extends StrokeStyle {
  /\*\*
  - Dash and gap pattern, using the format [dash length1, gap length1, dash length2, gap length2]. Up to ten values are supported.
    \*/
    dashArray: (number | string)[]

/\*\*

- End shape for an open path.
  \*/
  endCap: EndCap

/\*\*

- Corner adjustment used by the DashedStrokeStyle.
  \*/
  strokeCornerAdjustment: StrokeCornerAdjustment
  }

/\*\*

- Collection object for dashed stroke styles.
  \*/
  declare class DashedStrokeStyles {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a DashedStrokeStyle by the specified index.
- @param index Index value.
  \*/
  [index: number]: DashedStrokeStyle

/\*\*

- Constructs a new DashedStrokeStyle.
- @param withProperties Starting property values for the new DashedStrokeStyle
  \*/
  add(withProperties: object): DashedStrokeStyle

/\*\*

- Gets an arbitrary DashedStrokeStyle from the collection.
  \*/
  anyItem(): DashedStrokeStyle

/\*\*

- Counts elements in the DashedStrokeStyle.
  \*/
  count(): number

/\*\*

- Gets all DashedStrokeStyle objects from the collection.
  \*/
  everyItem(): DashedStrokeStyle[]

/\*\*

- Gets the first DashedStrokeStyle from the collection.
  \*/
  firstItem(): DashedStrokeStyle

/\*\*

- Looks up a DashedStrokeStyle by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): DashedStrokeStyle

/\*\*

- Finds a DashedStrokeStyle by ID.
- @param id ID value.
  \*/
  itemByID(id: number): DashedStrokeStyle

/\*\*

- Finds a DashedStrokeStyle by name.
- @param name Name value.
  \*/
  itemByName(name: string): DashedStrokeStyle

/\*\*

- Gets the DashedStrokeStyles entries inside the requested range.
- @param from Starting DashedStrokeStyle, index, or name for the range.
- @param to Ending DashedStrokeStyle, index, or name for the range.
  \*/
  itemByRange(from: DashedStrokeStyle | number | string, to: DashedStrokeStyle | number | string): DashedStrokeStyle[]

/\*\*

- Gets the last DashedStrokeStyle from the collection.
  \*/
  lastItem(): DashedStrokeStyle

/\*\*

- Gets the middle DashedStrokeStyle from the collection.
  \*/
  middleItem(): DashedStrokeStyle

/\*\*

- Gets the DashedStrokeStyle positioned after the supplied DashedStrokeStyle in the collection.
- @param obj DashedStrokeStyle positioned immediately before the requested DashedStrokeStyle.
  \*/
  nextItem(obj: DashedStrokeStyle): DashedStrokeStyle

/\*\*

- Gets the DashedStrokeStyle positioned before the specified index.
- @param obj Index for the DashedStrokeStyle positioned after the requested DashedStrokeStyle.
  \*/
  previousItem(obj: DashedStrokeStyle): DashedStrokeStyle

/\*\*

- Builds executable source text that resolves back to the DashedStrokeStyle.
  \*/
  toSource(): string
  }

/\*\*

- Dotted stroke style object.
  \*/
  declare class DottedStrokeStyle extends StrokeStyle {
  /\*\*
  - Gap lengths between dots. Define up to five values.
    \*/
    dotArray: (number | string)[]

/\*\*

- Corner adjustment used by the DottedStrokeStyle.
  \*/
  strokeCornerAdjustment: StrokeCornerAdjustment
  }

/\*\*

- Collection object for dotted stroke styles.
  \*/
  declare class DottedStrokeStyles {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a DottedStrokeStyle by the specified index.
- @param index Index value.
  \*/
  [index: number]: DottedStrokeStyle

/\*\*

- Constructs a new DottedStrokeStyle.
- @param withProperties Starting property values for the new DottedStrokeStyle
  \*/
  add(withProperties: object): DottedStrokeStyle

/\*\*

- Gets an arbitrary DottedStrokeStyle from the collection.
  \*/
  anyItem(): DottedStrokeStyle

/\*\*

- Counts elements in the DottedStrokeStyle.
  \*/
  count(): number

/\*\*

- Gets all DottedStrokeStyle objects from the collection.
  \*/
  everyItem(): DottedStrokeStyle[]

/\*\*

- Gets the first DottedStrokeStyle from the collection.
  \*/
  firstItem(): DottedStrokeStyle

/\*\*

- Looks up a DottedStrokeStyle by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): DottedStrokeStyle

/\*\*

- Finds a DottedStrokeStyle by ID.
- @param id ID value.
  \*/
  itemByID(id: number): DottedStrokeStyle

/\*\*

- Finds a DottedStrokeStyle by name.
- @param name Name value.
  \*/
  itemByName(name: string): DottedStrokeStyle

/\*\*

- Gets the DottedStrokeStyles entries inside the requested range.
- @param from Starting DottedStrokeStyle, index, or name for the range.
- @param to Ending DottedStrokeStyle, index, or name for the range.
  \*/
  itemByRange(from: DottedStrokeStyle | number | string, to: DottedStrokeStyle | number | string): DottedStrokeStyle[]

/\*\*

- Gets the last DottedStrokeStyle from the collection.
  \*/
  lastItem(): DottedStrokeStyle

/\*\*

- Gets the middle DottedStrokeStyle from the collection.
  \*/
  middleItem(): DottedStrokeStyle

/\*\*

- Gets the DottedStrokeStyle positioned after the supplied DottedStrokeStyle in the collection.
- @param obj DottedStrokeStyle positioned immediately before the requested DottedStrokeStyle.
  \*/
  nextItem(obj: DottedStrokeStyle): DottedStrokeStyle

/\*\*

- Gets the DottedStrokeStyle positioned before the specified index.
- @param obj Index for the DottedStrokeStyle positioned after the requested DottedStrokeStyle.
  \*/
  previousItem(obj: DottedStrokeStyle): DottedStrokeStyle

/\*\*

- Builds executable source text that resolves back to the DottedStrokeStyle.
  \*/
  toSource(): string
  }

/\*\*

- Striped stroke style object.
  \*/
  declare class StripedStrokeStyle extends StrokeStyle {
  /\*\*
  - For a striped stroke pattern, width and position data for stripes. Stripe entries are encoded as [start1, end1, start2, end2] start-end pairs; values represent stroke-weight percentages. Each entry must be greater than the one before it. (Range: 0 to 100).
    \*/
    stripeArray: number[]
    }

/\*\*

- Collection object for striped stroke styles.
  \*/
  declare class StripedStrokeStyles {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a StripedStrokeStyle by the specified index.
- @param index Index value.
  \*/
  [index: number]: StripedStrokeStyle

/\*\*

- Constructs a new StripedStrokeStyle.
- @param withProperties Starting property values for the new StripedStrokeStyle
  \*/
  add(withProperties: object): StripedStrokeStyle

/\*\*

- Gets an arbitrary StripedStrokeStyle from the collection.
  \*/
  anyItem(): StripedStrokeStyle

/\*\*

- Counts elements in the StripedStrokeStyle.
  \*/
  count(): number

/\*\*

- Gets all StripedStrokeStyle objects from the collection.
  \*/
  everyItem(): StripedStrokeStyle[]

/\*\*

- Gets the first StripedStrokeStyle from the collection.
  \*/
  firstItem(): StripedStrokeStyle

/\*\*

- Looks up a StripedStrokeStyle by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): StripedStrokeStyle

/\*\*

- Finds a StripedStrokeStyle by ID.
- @param id ID value.
  \*/
  itemByID(id: number): StripedStrokeStyle

/\*\*

- Finds a StripedStrokeStyle by name.
- @param name Name value.
  \*/
  itemByName(name: string): StripedStrokeStyle

/\*\*

- Gets the StripedStrokeStyles entries inside the requested range.
- @param from Starting StripedStrokeStyle, index, or name for the range.
- @param to Ending StripedStrokeStyle, index, or name for the range.
  \*/
  itemByRange(from: StripedStrokeStyle | number | string, to: StripedStrokeStyle | number | string): StripedStrokeStyle[]

/\*\*

- Gets the last StripedStrokeStyle from the collection.
  \*/
  lastItem(): StripedStrokeStyle

/\*\*

- Gets the middle StripedStrokeStyle from the collection.
  \*/
  middleItem(): StripedStrokeStyle

/\*\*

- Gets the StripedStrokeStyle positioned after the supplied StripedStrokeStyle in the collection.
- @param obj StripedStrokeStyle positioned immediately before the requested StripedStrokeStyle.
  \*/
  nextItem(obj: StripedStrokeStyle): StripedStrokeStyle

/\*\*

- Gets the StripedStrokeStyle positioned before the specified index.
- @param obj Index for the StripedStrokeStyle positioned after the requested StripedStrokeStyle.
  \*/
  previousItem(obj: StripedStrokeStyle): StripedStrokeStyle

/\*\*

- Builds executable source text that resolves back to the StripedStrokeStyle.
  \*/
  toSource(): string
  }

/\*\*

- TOC style definition object.
  \*/
  declare class TOCStyle {
  /\*\*
  - When true, TOC entries get bookmarks.
    \*/
    createBookmarks: boolean

/\*\*

- Collection object for event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection object for events.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the TOCStyle.
  \*/
  readonly id: number

/\*\*

- When true, build the TOC from the whole book. When false, limit it to entries from this document. Note: only applies to documents that are in a book.
  \*/
  includeBookDocuments: boolean

/\*\*

- When true, text on hidden layers contributes TOC entries.
  \*/
  includeHidden: boolean

/\*\*

- Position of the TOCStyle inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued label property.
  \*/
  label: string

/\*\*

- When true, create a text anchor in the source paragraph.
  \*/
  makeAnchor: boolean

/\*\*

- Name of the TOCStyle.
  \*/
  name: string

/\*\*

- Import format for numbered paragraphs entering the TOC.
  \*/
  numberedParagraphs: NumberedParagraphsOptions

/\*\*

- Parent object for the TOCStyle (a Document).
  \*/
  readonly parent: Document

/\*\*

- Property bag for assigning multiple properties in one call.
  \*/
  properties: object

/\*\*

- When true, strip forced line breaks.
  \*/
  removeForcedLineBreak: boolean

/\*\*

- When true, place the lowest-level TOC entries on the previous entry line.
  \*/
  runIn: boolean

/\*\*

- Story direction for the table of contents.
  \*/
  setStoryDirection: HorizontalOrVertical

/\*\*

- TOC title text.
  \*/
  title: string

/\*\*

- Paragraph style used by the TOC title.
  \*/
  titleStyle: ParagraphStyle

/\*\*

- Collection object for TOC style entries.
  \*/
  readonly tocStyleEntries: TOCStyleEntries

/\*\*

- Attaches an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate of this TOCStyle.
  \*/
  duplicate(): TOCStyle

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): TOCStyle[]

/\*\*

- Stores the specified value under the specified label key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this TOCStyle.
  \*/
  remove(): void

/\*\*

- Detaches the event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the TOCStyle.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for TOC styles.
  \*/
  declare class TOCStyles {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a TOCStyle by the specified index.
- @param index Index value.
  \*/
  [index: number]: TOCStyle

/\*\*

- Constructs a new TOCStyle.
- @param withProperties Starting property values for the new TOCStyle
  \*/
  add(withProperties: object): TOCStyle

/\*\*

- Gets an arbitrary TOCStyle from the collection.
  \*/
  anyItem(): TOCStyle
