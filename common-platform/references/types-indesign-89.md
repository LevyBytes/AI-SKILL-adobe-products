# Indesign (part 89)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- True when the object specifier resolves successfully.
  \*/
  readonly isValid: boolean

/\*\*

- User-settable string metadata.
  \*/
  label: string

/\*\*

- CharacterStyleGroup name.
  \*/
  name: string

/\*\*

- Owning object for the CharacterStyleGroup: Document, Application or CharacterStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type name.
- @param handler Listener callback or file handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Copies the CharacterStyleGroup.
  \*/
  duplicate(): CharacterStyleGroup

/\*\*

- Reads the label value stored for a key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into object references.
  \*/
  getElements(): CharacterStyleGroup[]

/\*\*

- Stores a keyed label value.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Repositions the style.
- @param to Placement relative to the reference object or inside the owning container.
- @param reference Reference object. Needed for before/after placement.
  \*/
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): CharacterStyleGroup

/\*\*

- Removes the style.
- @param replacingWith Style applied in place of the removed style.
  \*/
  remove(replacingWith: ParagraphStyle | CharacterStyle): void

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to this CharacterStyleGroup.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- CharacterStyleGroup collection.
  \*/
  declare class CharacterStyleGroups {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the CharacterStyleGroup at an index.
- @param index Numeric index.
  \*/
  [index: number]: CharacterStyleGroup

/\*\*

- Adds a CharacterStyleGroup.
- @param withProperties Starting property values for the CharacterStyleGroup being created.
  \*/
  add(withProperties: object): CharacterStyleGroup

/\*\*

- Chooses an arbitrary CharacterStyleGroup from this collection.
  \*/
  anyItem(): CharacterStyleGroup

/\*\*

- Reports how many CharacterStyleGroup elements are present.
  \*/
  count(): number

/\*\*

- Provides all CharacterStyleGroup objects from this collection.
  \*/
  everyItem(): CharacterStyleGroup[]

/\*\*

- Provides the collection's initial CharacterStyleGroup.
  \*/
  firstItem(): CharacterStyleGroup

/\*\*

- Finds a CharacterStyleGroup by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): CharacterStyleGroup

/\*\*

- Finds a CharacterStyleGroup by ID.
- @param id ID value.
  \*/
  itemByID(id: number): CharacterStyleGroup

/\*\*

- Finds a CharacterStyleGroup by name.
- @param name Name value.
  \*/
  itemByName(name: string): CharacterStyleGroup

/\*\*

- Provides CharacterStyleGroups spanning the requested range.
- @param from Range start, given as a CharacterStyleGroup, index, or name.
- @param to Range end, given as a CharacterStyleGroup, index, or name.
  \*/
  itemByRange(from: CharacterStyleGroup | number | string, to: CharacterStyleGroup | number | string): CharacterStyleGroup[]

/\*\*

- Provides the final CharacterStyleGroup in this collection.
  \*/
  lastItem(): CharacterStyleGroup

/\*\*

- Provides the center CharacterStyleGroup from this collection.
  \*/
  middleItem(): CharacterStyleGroup

/\*\*

- Provides the CharacterStyleGroup positioned immediately after the supplied CharacterStyleGroup.
- @param obj CharacterStyleGroup that precedes the requested one.
  \*/
  nextItem(obj: CharacterStyleGroup): CharacterStyleGroup

/\*\*

- Provides the CharacterStyleGroup positioned immediately before the supplied index.
- @param obj Index belonging to the CharacterStyleGroup after the requested one.
  \*/
  previousItem(obj: CharacterStyleGroup): CharacterStyleGroup

/\*\*

- Builds executable source text that resolves back to this CharacterStyleGroup.
  \*/
  toSource(): string
  }

/\*\*

- CompositeFont object.
  \*/
  declare class CompositeFont {
  /\*\*
  - CompositeFontEntry collection.
    \*/
    readonly compositeFontEntries: CompositeFontEntries

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Unique CompositeFont ID.
  \*/
  readonly id: number

/\*\*

- Position of the CompositeFont inside its parent container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully.
  \*/
  readonly isValid: boolean

/\*\*

- User-settable string metadata.
  \*/
  label: string

/\*\*

- CompositeFont name.
  \*/
  name: string

/\*\*

- Owning object for the CompositeFont: Application or Document.
  \*/
  readonly parent: any

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type name.
- @param handler Listener callback or file handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for a key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into object references.
  \*/
  getElements(): CompositeFont[]

/\*\*

- Stores a keyed label value.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this CompositeFont.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to this CompositeFont.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- CompositeFont collection.
  \*/
  declare class CompositeFonts {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the CompositeFont at an index.
- @param index Numeric index.
  \*/
  [index: number]: CompositeFont

/\*\*

- Adds a CompositeFont.
- @param withProperties Starting property values for the CompositeFont being created.
  \*/
  add(withProperties: object): CompositeFont

/\*\*

- Chooses an arbitrary CompositeFont from this collection.
  \*/
  anyItem(): CompositeFont

/\*\*

- Reports how many CompositeFont elements are present.
  \*/
  count(): number

/\*\*

- Provides all CompositeFont objects from this collection.
  \*/
  everyItem(): CompositeFont[]

/\*\*

- Provides the collection's initial CompositeFont.
  \*/
  firstItem(): CompositeFont

/\*\*

- Finds a CompositeFont by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): CompositeFont

/\*\*

- Finds a CompositeFont by ID.
- @param id ID value.
  \*/
  itemByID(id: number): CompositeFont

/\*\*

- Finds a CompositeFont by name.
- @param name Name value.
  \*/
  itemByName(name: string): CompositeFont

/\*\*

- Provides CompositeFonts spanning the requested range.
- @param from Range start, given as a CompositeFont, index, or name.
- @param to Range end, given as a CompositeFont, index, or name.
  \*/
  itemByRange(from: CompositeFont | number | string, to: CompositeFont | number | string): CompositeFont[]

/\*\*

- Provides the final CompositeFont in this collection.
  \*/
  lastItem(): CompositeFont

/\*\*

- Provides the center CompositeFont from this collection.
  \*/
  middleItem(): CompositeFont

/\*\*

- Provides the CompositeFont positioned immediately after the supplied CompositeFont.
- @param obj CompositeFont that precedes the requested one.
  \*/
  nextItem(obj: CompositeFont): CompositeFont

/\*\*

- Provides the CompositeFont positioned immediately before the supplied index.
- @param obj Index belonging to the CompositeFont after the requested one.
  \*/
  previousItem(obj: CompositeFont): CompositeFont

/\*\*

- Builds executable source text that resolves back to this CompositeFont.
  \*/
  toSource(): string
  }

/\*\*

- CompositeFontEntry object.
  \*/
  declare class CompositeFontEntry {
  /\*\*
  - Font assigned to the CompositeFontEntry, as a Font object or font-family name.
    \*/
    appliedFont: Font | string

/\*\*

- Baseline-shift amount.
  \*/
  baselineShift: number

/\*\*

- Characters affected by the set.
  \*/
  customCharacters: string

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Font-style name.
  \*/
  fontStyle: string

/\*\*

- Horizontal scaling assigned to the CompositeFontEntry.
  \*/
  horizontalScale: number

/\*\*

- Unique ID assigned to the CompositeFontEntry.
  \*/
  readonly id: number

/\*\*

- Index position of the CompositeFontEntry inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Arbitrary string property value.
  \*/
  label: string

/\*\*

- When true, the CompositeFontEntry is locked.
  \*/
  readonly locked: boolean

/\*\*

- Name assigned to the CompositeFontEntry.
  \*/
  name: string

/\*\*

- Parent reference for the CompositeFontEntry (a CompositeFont).
  \*/
  readonly parent: CompositeFont

/\*\*

- Property bag for setting several properties together.
  \*/
  properties: object

/\*\*

- Entry size compared with the base entry. Note: Base entry values remain read-only.
  \*/
  relativeSize: number

/\*\*

- When true, characters scale from the center.
  \*/
  scaleOption: boolean

/\*\*

- Vertical scale applied to the CompositeFontEntry.
  \*/
  verticalScale: number

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): CompositeFontEntry[]

/\*\*

- Stores the label value under the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the CompositeFontEntry.
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

- Produces executable source text that returns the CompositeFontEntry.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing composite font entries.
  \*/
  declare class CompositeFontEntries {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the CompositeFontEntry addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: CompositeFontEntry

/\*\*

- Creates a fresh CompositeFontEntry.
- @param withProperties Property values used when creating CompositeFontEntry
  \*/
  add(withProperties: object): CompositeFontEntry

/\*\*

- Returns an arbitrary CompositeFontEntry from the collection.
  \*/
  anyItem(): CompositeFontEntry

/\*\*

- Reports how many elements the CompositeFontEntry contains.
  \*/
  count(): number

/\*\*

- Returns all CompositeFontEntry entries from the collection.
  \*/
  everyItem(): CompositeFontEntry[]

/\*\*

- Gets the first CompositeFontEntry from the collection.
  \*/
  firstItem(): CompositeFontEntry

/\*\*

- Returns the CompositeFontEntry addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): CompositeFontEntry

/\*\*

- Returns the CompositeFontEntry addressed by ID.
- @param id ID value.
  \*/
  itemByID(id: number): CompositeFontEntry

/\*\*

- Returns the CompositeFontEntry addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): CompositeFontEntry

/\*\*

- Returns entries from the requested span of CompositeFontEntries.
- @param from CompositeFontEntry, index, or name used as range start.
- @param to CompositeFontEntry, index, or name used as range end.
  \*/
  itemByRange(from: CompositeFontEntry | number | string, to: CompositeFontEntry | number | string): CompositeFontEntry[]

/\*\*

- Gets the last CompositeFontEntry from the collection.
  \*/
  lastItem(): CompositeFontEntry

/\*\*

- Gets the middle CompositeFontEntry from the collection.
  \*/
  middleItem(): CompositeFontEntry

/\*\*

- Returns the CompositeFontEntry immediately after the supplied CompositeFontEntry in the collection.
- @param obj CompositeFontEntry whose index precedes the desired CompositeFontEntry.
  \*/
  nextItem(obj: CompositeFontEntry): CompositeFontEntry

/\*\*

- Returns the CompositeFontEntry immediately before the supplied index.
- @param obj Index for the CompositeFontEntry immediately after the desired CompositeFontEntry.
  \*/
  previousItem(obj: CompositeFontEntry): CompositeFontEntry

/\*\*

- Produces executable source text that returns the CompositeFontEntry.
  \*/
  toSource(): string
  }

/\*\*

- Named grid object.
  \*/
  declare class NamedGrid {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Default grid property set. Note: It applies to named, layout, and frame (story) grids.
  \*/
  readonly gridData: GridDataInformation

/\*\*

- Unique ID assigned to the NamedGrid.
  \*/
  readonly id: number

/\*\*

- Index position of the NamedGrid inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Arbitrary string property value.
  \*/
  label: string

/\*\*

- Name assigned to the NamedGrid.
  \*/
  name: string

/\*\*

- Parent reference for the NamedGrid (a Document or Application).
  \*/
  readonly parent: any

/\*\*

- Collection containing preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Property bag for setting several properties together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): NamedGrid[]

/\*\*

- Stores the label value under the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the NamedGrid.
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

- Produces executable source text that returns the NamedGrid.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing named grids.
  \*/
  declare class NamedGrids {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the NamedGrid addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: NamedGrid

/\*\*

- Creates a fresh NamedGrid.
- @param withProperties Property values used when creating NamedGrid
  \*/
  add(withProperties: object): NamedGrid

/\*\*

- Returns an arbitrary NamedGrid from the collection.
  \*/
  anyItem(): NamedGrid

/\*\*

- Reports how many elements the NamedGrid contains.
  \*/
  count(): number

/\*\*

- Returns all NamedGrid entries from the collection.
  \*/
  everyItem(): NamedGrid[]

/\*\*

- Gets the first NamedGrid from the collection.
  \*/
  firstItem(): NamedGrid

/\*\*

- Returns the NamedGrid addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): NamedGrid

/\*\*

- Returns the NamedGrid addressed by ID.
- @param id ID value.
  \*/
  itemByID(id: number): NamedGrid

/\*\*

- Returns the NamedGrid addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): NamedGrid

/\*\*

- Returns entries from the requested span of NamedGrids.
- @param from NamedGrid, index, or name used as range start.
- @param to NamedGrid, index, or name used as range end.
  \*/
  itemByRange(from: NamedGrid | number | string, to: NamedGrid | number | string): NamedGrid[]

/\*\*

- Gets the last NamedGrid from the collection.
  \*/
  lastItem(): NamedGrid

/\*\*

- Gets the middle NamedGrid from the collection.
  \*/
  middleItem(): NamedGrid

/\*\*

- Returns the NamedGrid immediately after the supplied NamedGrid in the collection.
- @param obj NamedGrid whose index precedes the desired NamedGrid.
  \*/
  nextItem(obj: NamedGrid): NamedGrid

/\*\*

- Returns the NamedGrid immediately before the supplied index.
- @param obj Index for the NamedGrid immediately after the desired NamedGrid.
  \*/
  previousItem(obj: NamedGrid): NamedGrid

/\*\*

- Produces executable source text that returns the NamedGrid.
  \*/
  toSource(): string
  }

/\*\*

- Indexing sort option object.
  \*/
  declare class IndexingSortOption {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Header type value.
  \*/
  headerType: HeaderTypes | NothingEnum

/\*\*

- When true, this indexing sort option is included.
  \*/
  include: boolean

/\*\*

- Index position of the IndexingSortOption inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name assigned to the IndexingSortOption.
  \*/
  readonly name: string
