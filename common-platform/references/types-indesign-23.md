# Indesign (part 23)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Gets the selected range of HyperlinkPageItemSources entries.
- @param from Starting HyperlinkPageItemSource, index, or name for the range.
- @param to Ending HyperlinkPageItemSource, index, or name for the range.
  \*/
  itemByRange(from: HyperlinkPageItemSource | number | string, to: HyperlinkPageItemSource | number | string): HyperlinkPageItemSource[]

/\*\*

- Gets the collection's final HyperlinkPageItemSource.
  \*/
  lastItem(): HyperlinkPageItemSource

/\*\*

- Gets the collection's midpoint HyperlinkPageItemSource.
  \*/
  middleItem(): HyperlinkPageItemSource

/\*\*

- Gets the collection member positioned after the specified HyperlinkPageItemSource.
- @param obj HyperlinkPageItemSource located immediately before the requested HyperlinkPageItemSource.
  \*/
  nextItem(obj: HyperlinkPageItemSource): HyperlinkPageItemSource

/\*\*

- Gets the HyperlinkPageItemSource positioned just before the supplied index.
- @param obj Index for the HyperlinkPageItemSource located just after the requested HyperlinkPageItemSource.
  \*/
  previousItem(obj: HyperlinkPageItemSource): HyperlinkPageItemSource

/\*\*

- Builds an executable source string that resolves back to the HyperlinkPageItemSource.
  \*/
  toSource(): string
  }

/\*\*

- Represents text or an insertion point used as a hyperlink source.
  \*/
  declare class HyperlinkTextSource {
  /\*\*
  - CharacterStyle applied to this hyperlink text source.
    \*/
    appliedCharacterStyle: CharacterStyle

/\*\*

- Event listener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection exposed by this object.
  \*/
  readonly events: Events

/\*\*

- True when this hyperlink remains hidden.
  \*/
  readonly hidden: boolean

/\*\*

- Unique ID assigned to HyperlinkTextSource.
  \*/
  readonly id: number

/\*\*

- Position of HyperlinkTextSource inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String slot available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to HyperlinkTextSource.
  \*/
  name: string

/\*\*

- Document that owns HyperlinkTextSource.
  \*/
  readonly parent: Document

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- Text or insertion point used as the hyperlink source.
  \*/
  sourceText: Text

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Handler that responds to the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Fetches the label value stored for the supplied key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into an array of object references.
  \*/
  getElements(): HyperlinkTextSource[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to receive the value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this HyperlinkTextSource.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Event type that was registered.
- @param handler Handler that was registered.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Navigates to the hyperlink source.
  \*/
  showSource(): void

/\*\*

- Builds an executable source string that resolves back to the HyperlinkTextSource.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for hyperlink text sources.
  \*/
  declare class HyperlinkTextSources {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the HyperlinkTextSource at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: HyperlinkTextSource

/\*\*

- Creates and returns a new hyperlink text source.
- @param source Text or insertion point that becomes linked.
- @param withProperties Initial property values for the new HyperlinkTextSource
  \*/
  add(source: Text, withProperties: object): HyperlinkTextSource

/\*\*

- Gets any HyperlinkTextSource from the collection.
  \*/
  anyItem(): HyperlinkTextSource

/\*\*

- Reports how many HyperlinkTextSource elements exist.
  \*/
  count(): number

/\*\*

- Gets all HyperlinkTextSource entries in the collection.
  \*/
  everyItem(): HyperlinkTextSource[]

/\*\*

- Gets the collection's first HyperlinkTextSource.
  \*/
  firstItem(): HyperlinkTextSource

/\*\*

- Resolves a HyperlinkTextSource by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): HyperlinkTextSource

/\*\*

- Resolves a HyperlinkTextSource by ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): HyperlinkTextSource

/\*\*

- Resolves a HyperlinkTextSource by name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): HyperlinkTextSource

/\*\*

- Gets the selected range of HyperlinkTextSources entries.
- @param from Starting HyperlinkTextSource, index, or name for the range.
- @param to Ending HyperlinkTextSource, index, or name for the range.
  \*/
  itemByRange(from: HyperlinkTextSource | number | string, to: HyperlinkTextSource | number | string): HyperlinkTextSource[]

/\*\*

- Gets the collection's final HyperlinkTextSource.
  \*/
  lastItem(): HyperlinkTextSource

/\*\*

- Gets the collection's midpoint HyperlinkTextSource.
  \*/
  middleItem(): HyperlinkTextSource

/\*\*

- Gets the collection member positioned after the specified HyperlinkTextSource.
- @param obj HyperlinkTextSource located immediately before the requested HyperlinkTextSource.
  \*/
  nextItem(obj: HyperlinkTextSource): HyperlinkTextSource

/\*\*

- Gets the HyperlinkTextSource positioned just before the supplied index.
- @param obj Index for the HyperlinkTextSource located just after the requested HyperlinkTextSource.
  \*/
  previousItem(obj: HyperlinkTextSource): HyperlinkTextSource

/\*\*

- Builds an executable source string that resolves back to the HyperlinkTextSource.
  \*/
  toSource(): string
  }

/\*\*

- Represents a text-based hyperlink destination or an insertion-point destination.
  \*/
  declare class HyperlinkTextDestination {
  /\*\*
  - Text or insertion point targeted by the hyperlink.
    \*/
    destinationText: InsertionPoint | Text

/\*\*

- Event listener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection exposed by this object.
  \*/
  readonly events: Events

/\*\*

- True when this hyperlink remains hidden.
  \*/
  readonly hidden: boolean

/\*\*

- Unique ID assigned to HyperlinkTextDestination.
  \*/
  readonly id: number

/\*\*

- Position of HyperlinkTextDestination inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String slot available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to HyperlinkTextDestination.
  \*/
  name: string

/\*\*

- Document that owns HyperlinkTextDestination.
  \*/
  readonly parent: Document

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Handler that responds to the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Fetches the label value stored for the supplied key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into an array of object references.
  \*/
  getElements(): HyperlinkTextDestination[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to receive the value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this HyperlinkTextDestination.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Event type that was registered.
- @param handler Handler that was registered.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Navigates to the hyperlink destination.
  \*/
  showDestination(): void

/\*\*

- Builds an executable source string that resolves back to the HyperlinkTextDestination.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for hyperlink text destinations.
  \*/
  declare class HyperlinkTextDestinations {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the HyperlinkTextDestination at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: HyperlinkTextDestination

/\*\*

- Creates and returns a new hyperlink text destination.
- @param destination Text or insertion-point location targeted by the hyperlink.
- @param withProperties Initial property values for the new HyperlinkTextDestination
  \*/
  add(destination: Text, withProperties: object): HyperlinkTextDestination

/\*\*

- Gets any HyperlinkTextDestination from the collection.
  \*/
  anyItem(): HyperlinkTextDestination

/\*\*

- Reports how many HyperlinkTextDestination elements exist.
  \*/
  count(): number

/\*\*

- Gets all HyperlinkTextDestination entries in the collection.
  \*/
  everyItem(): HyperlinkTextDestination[]

/\*\*

- Gets the collection's first HyperlinkTextDestination.
  \*/
  firstItem(): HyperlinkTextDestination

/\*\*

- Resolves a HyperlinkTextDestination by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): HyperlinkTextDestination

/\*\*

- Resolves a HyperlinkTextDestination by ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): HyperlinkTextDestination

/\*\*

- Resolves a HyperlinkTextDestination by name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): HyperlinkTextDestination

/\*\*

- Gets the selected range of HyperlinkTextDestinations entries.
- @param from Starting HyperlinkTextDestination, index, or name for the range.
- @param to Ending HyperlinkTextDestination, index, or name for the range.
  \*/
  itemByRange(from: HyperlinkTextDestination | number | string, to: HyperlinkTextDestination | number | string): HyperlinkTextDestination[]

/\*\*

- Gets the collection's final HyperlinkTextDestination.
  \*/
  lastItem(): HyperlinkTextDestination

/\*\*

- Gets the collection's midpoint HyperlinkTextDestination.
  \*/
  middleItem(): HyperlinkTextDestination

/\*\*

- Gets the collection member positioned after the specified HyperlinkTextDestination.
- @param obj HyperlinkTextDestination located immediately before the requested HyperlinkTextDestination.
  \*/
  nextItem(obj: HyperlinkTextDestination): HyperlinkTextDestination

/\*\*

- Gets the HyperlinkTextDestination positioned just before the supplied index.
- @param obj Index for the HyperlinkTextDestination located just after the requested HyperlinkTextDestination.
  \*/
  previousItem(obj: HyperlinkTextDestination): HyperlinkTextDestination

/\*\*

- Builds an executable source string that resolves back to the HyperlinkTextDestination.
  \*/
  toSource(): string
  }

/\*\*

- Represents a hyperlink destination on a document page.
  \*/
  declare class HyperlinkPageDestination {
  /\*\*
  - Page targeted by the hyperlink.
    \*/
    destinationPage: Page

/\*\*

- Event listener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection exposed by this object.
  \*/
  readonly events: Events

/\*\*

- True when this hyperlink remains hidden.
  \*/
  readonly hidden: boolean

/\*\*

- Unique ID assigned to HyperlinkPageDestination.
  \*/
  readonly id: number

/\*\*

- Position of HyperlinkPageDestination inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String slot available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to HyperlinkPageDestination.
  \*/
  name: string

/\*\*

- When true or omitted, the destination can use a custom name, and moving it to another page does not rename it. When false, the page number supplies the destination name, the destination object's name property becomes read-only, and the name changes after moves to another page.
  \*/
  nameManually: boolean

/\*\*

- Document that owns HyperlinkPageDestination.
  \*/
  readonly parent: Document

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- View rectangle in [y1, x1, y2, x2] form. Note: usable only with a fixed view setting. Returned data may be an ordered array with top:Unit, left:Unit, bottom:Unit, right:Unit.
  \*/
  viewBounds: any

/\*\*

- Zoom value as a percentage. (Range: 5 to 4000) Note: usable only with a fixed view setting.
  \*/
  viewPercentage: number

/\*\*

- Page size used when opening the destination through the hyperlink.
  \*/
  viewSetting: HyperlinkDestinationPageSetting

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Handler that responds to the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Fetches the label value stored for the supplied key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into an array of object references.
  \*/
  getElements(): HyperlinkPageDestination[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to receive the value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this HyperlinkPageDestination.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Event type that was registered.
- @param handler Handler that was registered.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Navigates to the hyperlink destination.
  \*/
  showDestination(): void

/\*\*

- Builds an executable source string that resolves back to the HyperlinkPageDestination.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for hyperlink page destinations.
  \*/
  declare class HyperlinkPageDestinations {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the HyperlinkPageDestination at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: HyperlinkPageDestination

/\*\*

- Creates and returns a new hyperlink page destination.
- @param destination Document page targeted by the hyperlink.
- @param withProperties Initial property values for the new HyperlinkPageDestination
  \*/
  add(destination: Page, withProperties: object): HyperlinkPageDestination

/\*\*

- Gets any HyperlinkPageDestination from the collection.
  \*/
  anyItem(): HyperlinkPageDestination

/\*\*

- Reports how many HyperlinkPageDestination elements exist.
  \*/
  count(): number

/\*\*

- Gets all HyperlinkPageDestination entries in the collection.
  \*/
  everyItem(): HyperlinkPageDestination[]

/\*\*

- Gets the collection's first HyperlinkPageDestination.
  \*/
  firstItem(): HyperlinkPageDestination

/\*\*

- Resolves a HyperlinkPageDestination by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): HyperlinkPageDestination

/\*\*

- Resolves a HyperlinkPageDestination by ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): HyperlinkPageDestination

/\*\*

- Resolves a HyperlinkPageDestination by name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): HyperlinkPageDestination

/\*\*

- Gets the selected range of HyperlinkPageDestinations entries.
- @param from Starting HyperlinkPageDestination, index, or name for the range.
- @param to Ending HyperlinkPageDestination, index, or name for the range.
  \*/
  itemByRange(from: HyperlinkPageDestination | number | string, to: HyperlinkPageDestination | number | string): HyperlinkPageDestination[]

/\*\*

- Gets the collection's final HyperlinkPageDestination.
  \*/
  lastItem(): HyperlinkPageDestination

/\*\*

- Gets the collection's midpoint HyperlinkPageDestination.
  \*/
  middleItem(): HyperlinkPageDestination

/\*\*

- Gets the collection member positioned after the specified HyperlinkPageDestination.
- @param obj HyperlinkPageDestination located immediately before the requested HyperlinkPageDestination.
  \*/
  nextItem(obj: HyperlinkPageDestination): HyperlinkPageDestination

/\*\*

- Gets the HyperlinkPageDestination positioned just before the supplied index.
- @param obj Index for the HyperlinkPageDestination located just after the requested HyperlinkPageDestination.
  \*/
  previousItem(obj: HyperlinkPageDestination): HyperlinkPageDestination

/\*\*

- Builds an executable source string that resolves back to the HyperlinkPageDestination.
  \*/
  toSource(): string
  }

/\*\*

- Represents a hyperlink destination on a page in another document; hyperlink sources are described by hyperlink page item source or hyperlink text source entries.
  \*/
  declare class HyperlinkExternalPageDestination {
  /\*\*
  - Page index targeted by the hyperlink destination. Note: valid only for an external-page hyperlink destination.
    \*/
    destinationPageIndex: number

/\*\*

- Document path targeted by the hyperlink destination.
  \*/
  documentPath: File

/\*\*

- Event listener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection exposed by this object.
  \*/
  readonly events: Events

/\*\*

- True when this hyperlink remains hidden.
  \*/
  readonly hidden: boolean

/\*\*

- Unique ID assigned to HyperlinkExternalPageDestination.
  \*/
  readonly id: number

/\*\*

- Position of HyperlinkExternalPageDestination inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String slot available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to HyperlinkExternalPageDestination.
  \*/
  readonly name: string

/\*\*

- Document that owns HyperlinkExternalPageDestination.
  \*/
  readonly parent: Document

/\*\*

- Object used to set multiple properties in one assignment.
  \*/
  properties: object

/\*\*

- View rectangle in [y1, x1, y2, x2] form. Note: usable only with a fixed view setting. Returned data may be an ordered array with top:Unit, left:Unit, bottom:Unit, right:Unit.
  \*/
  viewBounds: any

/\*\*

- Zoom value as a percentage. (Range: 5 to 4000) Note: usable only with a fixed view setting.
  \*/
  viewPercentage: number

/\*\*

- Page size used when opening the destination through the hyperlink.
  \*/
  viewSetting: HyperlinkDestinationPageSetting

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Handler that responds to the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Fetches the label value stored for the supplied key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into an array of object references.
  \*/
  getElements(): HyperlinkExternalPageDestination[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to receive the value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this HyperlinkExternalPageDestination.
  \*/
  remove(): void
