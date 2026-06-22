# Indesign (part 84)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Containing object for TabStop: TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory.
  \*/
  readonly parent: any

/\*\*

- Location value used by this tab stop.
  \*/
  position: number | string

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): TabStop[]

/\*\*

- Deletes this TabStop.
  \*/
  remove(): void

/\*\*

- Unregisters a previously attached event listener.
- @param eventType Event category that was registered.
- @param handler Handler that was registered for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the TabStop.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- TabStop collection.
  \*/
  declare class TabStops {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TabStop at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: TabStop

/\*\*

- Builds a TabStop instance.
- @param withProperties Starting property values for the new TabStop.
  \*/
  add(withProperties: object): TabStop

/\*\*

- Gets an arbitrary TabStop from the collection.
  \*/
  anyItem(): TabStop

/\*\*

- Reports how many elements the TabStop collection contains.
  \*/
  count(): number

/\*\*

- Gets all TabStop objects from the collection.
  \*/
  everyItem(): TabStop[]

/\*\*

- Gets the first TabStop in collection order.
  \*/
  firstItem(): TabStop

/\*\*

- Gets a TabStop by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): TabStop

/\*\*

- Gets the TabStops spanning the requested range.
- @param from Starting TabStop, index, or name for the range.
- @param to Ending TabStop, index, or name for the range.
  \*/
  itemByRange(from: TabStop | number | string, to: TabStop | number | string): TabStop[]

/\*\*

- Gets the final TabStop in collection order.
  \*/
  lastItem(): TabStop

/\*\*

- Gets the middle TabStop from the collection.
  \*/
  middleItem(): TabStop

/\*\*

- Gets the TabStop immediately after the supplied TabStop in collection order.
- @param obj TabStop positioned before the requested TabStop.
  \*/
  nextItem(obj: TabStop): TabStop

/\*\*

- Gets the TabStop immediately before the supplied index.
- @param obj Index of the TabStop positioned after the requested TabStop.
  \*/
  previousItem(obj: TabStop): TabStop

/\*\*

- Creates executable source text that resolves back to the TabStop.
  \*/
  toSource(): string
  }

/\*\*

- NestedStyle object.
  \*/
  declare class NestedStyle {
  /\*\*
  - CharacterStyle used for the affected text.
    \*/
    appliedCharacterStyle: CharacterStyle | string

/\*\*

- Delimiting expression that controls how far into the paragraph the nested style extends.
  \*/
  delimiter: string | NestedStyleDelimiters

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- When true, the nested style includes the last delimiter; when false, it stops before that delimiter.
  \*/
  inclusive: boolean

/\*\*

- Position of this NestedStyle inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Containing object for NestedStyle: TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory.
  \*/
  readonly parent: any

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- Count of matching delimiter instances through which, or up to which, the nested style applies.
  \*/
  repetition: number

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): NestedStyle[]

/\*\*

- Deletes this NestedStyle.
  \*/
  remove(): void

/\*\*

- Unregisters a previously attached event listener.
- @param eventType Event category that was registered.
- @param handler Handler that was registered for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the NestedStyle.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- NestedStyle collection.
  \*/
  declare class NestedStyles {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the NestedStyle at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: NestedStyle

/\*\*

- Builds a NestedStyle instance.
- @param withProperties Starting property values for the new NestedStyle.
  \*/
  add(withProperties: object): NestedStyle

/\*\*

- Gets an arbitrary NestedStyle from the collection.
  \*/
  anyItem(): NestedStyle

/\*\*

- Reports how many elements the NestedStyle collection contains.
  \*/
  count(): number

/\*\*

- Gets all NestedStyle objects from the collection.
  \*/
  everyItem(): NestedStyle[]

/\*\*

- Gets the first NestedStyle in collection order.
  \*/
  firstItem(): NestedStyle

/\*\*

- Gets a NestedStyle by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): NestedStyle

/\*\*

- Gets the NestedStyles spanning the requested range.
- @param from Starting NestedStyle, index, or name for the range.
- @param to Ending NestedStyle, index, or name for the range.
  \*/
  itemByRange(from: NestedStyle | number | string, to: NestedStyle | number | string): NestedStyle[]

/\*\*

- Gets the final NestedStyle in collection order.
  \*/
  lastItem(): NestedStyle

/\*\*

- Gets the middle NestedStyle from the collection.
  \*/
  middleItem(): NestedStyle

/\*\*

- Gets the NestedStyle immediately after the supplied NestedStyle in collection order.
- @param obj NestedStyle positioned before the requested NestedStyle.
  \*/
  nextItem(obj: NestedStyle): NestedStyle

/\*\*

- Gets the NestedStyle immediately before the supplied index.
- @param obj Index of the NestedStyle positioned after the requested NestedStyle.
  \*/
  previousItem(obj: NestedStyle): NestedStyle

/\*\*

- Creates executable source text that resolves back to the NestedStyle.
  \*/
  toSource(): string
  }

/\*\*

- Endnote object.
  \*/
  declare class Endnote {
  /\*\*
  - Character collection for this endnote.
    \*/
    readonly characters: Characters

/\*\*

- Endnote range associated with this object.
  \*/
  endnoteTextRange: EndnoteRange

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the Endnote.
  \*/
  readonly id: number

/\*\*

- Position of this Endnote inside its container.
  \*/
  readonly index: number

/\*\*

- InsertionPoint collection for this endnote.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String storage field available for arbitrary labels.
  \*/
  label: string

/\*\*

- Line collection for this endnote.
  \*/
  readonly lines: Lines

/\*\*

- Endnote name, implemented as an alias for the label property.
  \*/
  name: string

/\*\*

- Containing object for Endnote: InsertionPoint, Story, XmlStory, Cell or Table.
  \*/
  readonly parent: any

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- InsertionPoint location of the endnote marker in the parent story.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- TextColumn collection for this endnote.
  \*/
  readonly textColumns: TextColumns

/\*\*

- TextStyleRange collection for this endnote.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Text object collection for this endnote.
  \*/
  readonly texts: Texts

/\*\*

- Word collection for this endnote.
  \*/
  readonly words: Words

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Removes both the endnote reference and its linked endnote text range.
  \*/
  deleteEndnote(): void

/\*\*

- Reads the label value stored under a given key.
- @param key Key whose label value should be returned.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): Endnote[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key used for label storage.
- @param value Value to store for that key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Inserts contents into the endnote text range at the specified text index; the insertion point must be inside the start and end range indices and exclude the markers.
- @param storyOffset InsertionPoint location within the story.
- @param contents Text content to insert.
  \*/
  insertTextInEndnote(storyOffset: InsertionPoint, contents: string): void

/\*\*

- Unregisters a previously attached event listener.
- @param eventType Event category that was registered.
- @param handler Handler that was registered for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the Endnote.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Endnote collection.
  \*/
  declare class Endnotes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Endnote at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: Endnote

/\*\*

- Gets an arbitrary Endnote from the collection.
  \*/
  anyItem(): Endnote

/\*\*

- Reports how many elements the Endnote collection contains.
  \*/
  count(): number

/\*\*

- Gets all Endnote objects from the collection.
  \*/
  everyItem(): Endnote[]

/\*\*

- Gets the first Endnote in collection order.
  \*/
  firstItem(): Endnote

/\*\*

- Gets an Endnote by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): Endnote

/\*\*

- Gets the Endnote matching the supplied ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): Endnote

/\*\*

- Gets the Endnote matching the supplied name.
- @param name Name to look up.
  \*/
  itemByName(name: string): Endnote

/\*\*

- Gets the Endnotes spanning the requested range.
- @param from Starting Endnote, index, or name for the range.
- @param to Ending Endnote, index, or name for the range.
  \*/
  itemByRange(from: Endnote | number | string, to: Endnote | number | string): Endnote[]

/\*\*

- Gets the final Endnote in collection order.
  \*/
  lastItem(): Endnote

/\*\*

- Gets the middle Endnote from the collection.
  \*/
  middleItem(): Endnote

/\*\*

- Gets the Endnote immediately after the supplied Endnote in collection order.
- @param obj Endnote positioned before the requested Endnote.
  \*/
  nextItem(obj: Endnote): Endnote

/\*\*

- Gets the Endnote immediately before the supplied index.
- @param obj Index of the Endnote positioned after the requested Endnote.
  \*/
  previousItem(obj: Endnote): Endnote

/\*\*

- Creates executable source text that resolves back to the Endnote.
  \*/
  toSource(): string
  }

/\*\*

- EndnoteRange object.
  \*/
  declare class EndnoteRange {
  /\*\*
  - Contents for EndnoteRange; setting or replacing this content skips the endnote number.
    \*/
    endnoteRangeContent: string | SpecialCharacters | string[] | NothingEnum

/\*\*

- Final index of the endnote range object.
  \*/
  readonly endnoteRangeEndIndex: number

/\*\*

- Initial index of the endnote range object.
  \*/
  readonly endnoteRangeStartIndex: number

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the EndnoteRange.
  \*/
  readonly id: number

/\*\*

- Position of this EndnoteRange inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String storage field available for arbitrary labels.
  \*/
  label: string

/\*\*

- EndnoteRange name, implemented as an alias for the label property.
  \*/
  name: string

/\*\*

- Containing object for EndnoteRange: Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or XmlStory.
  \*/
  readonly parent: any

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- Endnote reference linked to this endnote text range.
  \*/
  sourceEndnote: Endnote

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Removes this endnote range and its linked endnote anchor.
  \*/
  deleteEndnoteRange(): void

/\*\*

- Reads the label value stored under a given key.
- @param key Key whose label value should be returned.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): EndnoteRange[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key used for label storage.
- @param value Value to store for that key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Unregisters a previously attached event listener.
- @param eventType Event category that was registered.
- @param handler Handler that was registered for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the EndnoteRange.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- EndnoteRange collection.
  \*/
  declare class EndnoteRanges {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the EndnoteRange at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: EndnoteRange

/\*\*

- Gets an arbitrary EndnoteRange from the collection.
  \*/
  anyItem(): EndnoteRange

/\*\*

- Reports how many elements the EndnoteRange collection contains.
  \*/
  count(): number

/\*\*

- Gets all EndnoteRange objects from the collection.
  \*/
  everyItem(): EndnoteRange[]

/\*\*

- Gets the first EndnoteRange in collection order.
  \*/
  firstItem(): EndnoteRange

/\*\*

- Gets an EndnoteRange by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): EndnoteRange

/\*\*

- Gets the EndnoteRange matching the supplied ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): EndnoteRange

/\*\*

- Gets the EndnoteRange matching the supplied name.
- @param name Name to look up.
  \*/
  itemByName(name: string): EndnoteRange

/\*\*

- Gets the EndnoteRanges spanning the requested range.
- @param from Starting EndnoteRange, index, or name for the range.
- @param to Ending EndnoteRange, index, or name for the range.
  \*/
  itemByRange(from: EndnoteRange | number | string, to: EndnoteRange | number | string): EndnoteRange[]

/\*\*

- Gets the final EndnoteRange in collection order.
  \*/
  lastItem(): EndnoteRange

/\*\*

- Gets the middle EndnoteRange from the collection.
  \*/
  middleItem(): EndnoteRange

/\*\*

- Gets the EndnoteRange immediately after the supplied EndnoteRange in collection order.
- @param obj EndnoteRange positioned before the requested EndnoteRange.
  \*/
  nextItem(obj: EndnoteRange): EndnoteRange

/\*\*

- Gets the EndnoteRange immediately before the supplied index.
- @param obj Index of the EndnoteRange positioned after the requested EndnoteRange.
  \*/
  previousItem(obj: EndnoteRange): EndnoteRange

/\*\*

- Creates executable source text that resolves back to the EndnoteRange.
  \*/
  toSource(): string
  }

/\*\*

- EndnoteTextFrame object.
  \*/
  declare class EndnoteTextFrame extends TextFrame {}

/\*\*

- EndnoteTextFrame collection.
  \*/
  declare class EndnoteTextFrames {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the EndnoteTextFrame at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: EndnoteTextFrame

/\*\*

- Builds an EndnoteTextFrame instance.
- @param layer Layer used when creating the EndnoteTextFrame.
- @param at Insertion location for the EndnoteTextFrame, relative to the reference object or inside the container.
- @param reference Reference object; required when at is before or after.
- @param withProperties Initial EndnoteTextFrame property values.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): EndnoteTextFrame

/\*\*

- Gets an arbitrary EndnoteTextFrame from the collection.
  \*/
  anyItem(): EndnoteTextFrame

/\*\*

- Reports how many elements the EndnoteTextFrame collection contains.
  \*/
  count(): number

/\*\*

- Gets all EndnoteTextFrame objects from the collection.
  \*/
  everyItem(): EndnoteTextFrame[]

/\*\*

- Gets the first EndnoteTextFrame in collection order.
  \*/
  firstItem(): EndnoteTextFrame

/\*\*

- Gets an EndnoteTextFrame by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): EndnoteTextFrame

/\*\*

- Gets the EndnoteTextFrame matching the supplied ID.
  \*/
  itemByID(id: number): EndnoteTextFrame

/\*\*

- Gets the EndnoteTextFrame matching the supplied name.
  \*/
  itemByName(name: string): EndnoteTextFrame
