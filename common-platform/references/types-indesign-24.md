# Indesign (part 24)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

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

- Builds an executable source string that resolves back to the HyperlinkExternalPageDestination.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for hyperlink external page destinations.
  \*/
  declare class HyperlinkExternalPageDestinations {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the HyperlinkExternalPageDestination at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: HyperlinkExternalPageDestination

/\*\*

- Creates and returns a new hyperlink external page destination.
- @param destination Destination page to use.
- @param withProperties Initial property values for the new HyperlinkExternalPageDestination
  \*/
  add(destination: Page, withProperties: object): HyperlinkExternalPageDestination

/\*\*

- Gets any HyperlinkExternalPageDestination from the collection.
  \*/
  anyItem(): HyperlinkExternalPageDestination

/\*\*

- Reports how many HyperlinkExternalPageDestination elements exist.
  \*/
  count(): number

/\*\*

- Gets all HyperlinkExternalPageDestination entries in the collection.
  \*/
  everyItem(): HyperlinkExternalPageDestination[]

/\*\*

- Gets the collection's first HyperlinkExternalPageDestination.
  \*/
  firstItem(): HyperlinkExternalPageDestination

/\*\*

- Resolves a HyperlinkExternalPageDestination by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): HyperlinkExternalPageDestination

/\*\*

- Resolves a HyperlinkExternalPageDestination by ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): HyperlinkExternalPageDestination

/\*\*

- Resolves a HyperlinkExternalPageDestination by name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): HyperlinkExternalPageDestination

/\*\*

- Gets the selected range of HyperlinkExternalPageDestinations entries.
- @param from Starting HyperlinkExternalPageDestination, index, or name for the range.
- @param to Ending HyperlinkExternalPageDestination, index, or name for the range.
  \*/
  itemByRange(from: HyperlinkExternalPageDestination | number | string, to: HyperlinkExternalPageDestination | number | string): HyperlinkExternalPageDestination[]

/\*\*

- Gets the collection's final HyperlinkExternalPageDestination.
  \*/
  lastItem(): HyperlinkExternalPageDestination

/\*\*

- Gets the collection's midpoint HyperlinkExternalPageDestination.
  \*/
  middleItem(): HyperlinkExternalPageDestination

/\*\*

- Gets the collection member positioned after the specified HyperlinkExternalPageDestination.
- @param obj HyperlinkExternalPageDestination located immediately before the requested HyperlinkExternalPageDestination.
  \*/
  nextItem(obj: HyperlinkExternalPageDestination): HyperlinkExternalPageDestination

/\*\*

- Gets the HyperlinkExternalPageDestination positioned just before the supplied index.
- @param obj Index for the HyperlinkExternalPageDestination located just after the requested HyperlinkExternalPageDestination.
  \*/
  previousItem(obj: HyperlinkExternalPageDestination): HyperlinkExternalPageDestination

/\*\*

- Builds an executable source string that resolves back to the HyperlinkExternalPageDestination.
  \*/
  toSource(): string
  }

/\*\*

- Represents a hyperlink destination backed by a URL.
  \*/
  declare class HyperlinkURLDestination {
  /\*\*
  - URL targeted by the hyperlink.
    \*/
    destinationURL: string

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

- Unique ID assigned to HyperlinkURLDestination.
  \*/
  readonly id: number

/\*\*

- Position of HyperlinkURLDestination inside its container.
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

- Name assigned to HyperlinkURLDestination.
  \*/
  name: string

/\*\*

- Document that owns HyperlinkURLDestination.
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
  getElements(): HyperlinkURLDestination[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to receive the value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this HyperlinkURLDestination.
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

- Builds an executable source string that resolves back to the HyperlinkURLDestination.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for hyperlink URL destinations.
  \*/
  declare class HyperlinkURLDestinations {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the HyperlinkURLDestination at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: HyperlinkURLDestination

/\*\*

- Creates and returns a new hyperlink URL destination.
- @param destination URL targeted by the hyperlink.
- @param withProperties Initial property values for the new HyperlinkURLDestination
  \*/
  add(destination: string, withProperties: object): HyperlinkURLDestination

/\*\*

- Gets any HyperlinkURLDestination from the collection.
  \*/
  anyItem(): HyperlinkURLDestination

/\*\*

- Reports how many HyperlinkURLDestination elements exist.
  \*/
  count(): number

/\*\*

- Gets all HyperlinkURLDestination entries in the collection.
  \*/
  everyItem(): HyperlinkURLDestination[]

/\*\*

- Gets the collection's first HyperlinkURLDestination.
  \*/
  firstItem(): HyperlinkURLDestination

/\*\*

- Resolves a HyperlinkURLDestination by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): HyperlinkURLDestination

/\*\*

- Resolves a HyperlinkURLDestination by ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): HyperlinkURLDestination

/\*\*

- Resolves a HyperlinkURLDestination by name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): HyperlinkURLDestination

/\*\*

- Gets the selected range of HyperlinkURLDestinations entries.
- @param from Starting HyperlinkURLDestination, index, or name for the range.
- @param to Ending HyperlinkURLDestination, index, or name for the range.
  \*/
  itemByRange(from: HyperlinkURLDestination | number | string, to: HyperlinkURLDestination | number | string): HyperlinkURLDestination[]

/\*\*

- Gets the collection's final HyperlinkURLDestination.
  \*/
  lastItem(): HyperlinkURLDestination

/\*\*

- Gets the collection's midpoint HyperlinkURLDestination.
  \*/
  middleItem(): HyperlinkURLDestination

/\*\*

- Gets the collection member positioned after the specified HyperlinkURLDestination.
- @param obj HyperlinkURLDestination located immediately before the requested HyperlinkURLDestination.
  \*/
  nextItem(obj: HyperlinkURLDestination): HyperlinkURLDestination

/\*\*

- Gets the HyperlinkURLDestination positioned just before the supplied index.
- @param obj Index for the HyperlinkURLDestination located just after the requested HyperlinkURLDestination.
  \*/
  previousItem(obj: HyperlinkURLDestination): HyperlinkURLDestination

/\*\*

- Builds an executable source string that resolves back to the HyperlinkURLDestination.
  \*/
  toSource(): string
  }

/\*\*

- Represents a cross-reference format.
  \*/
  declare class CrossReferenceFormat {
  /\*\*
  - CharacterStyle applied to this cross reference format.
    \*/
    appliedCharacterStyle: CharacterStyle

/\*\*

- Cross reference building block collection for this format.
  \*/
  readonly buildingBlocks: BuildingBlocks

/\*\*

- Event listener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection exposed by this object.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to CrossReferenceFormat.
  \*/
  readonly id: number

/\*\*

- Position of CrossReferenceFormat inside its container.
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

- Name assigned to CrossReferenceFormat.
  \*/
  name: string

/\*\*

- Document that owns CrossReferenceFormat.
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
  getElements(): CrossReferenceFormat[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to receive the value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this CrossReferenceFormat.
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

- Builds an executable source string that resolves back to the CrossReferenceFormat.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for cross-reference formats.
  \*/
  declare class CrossReferenceFormats {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the CrossReferenceFormat at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: CrossReferenceFormat

/\*\*

- Creates and returns a new cross reference format.
- @param name Format name.
- @param withProperties Initial property values for the new CrossReferenceFormat
  \*/
  add(name: string, withProperties: object): CrossReferenceFormat

/\*\*

- Gets any CrossReferenceFormat from the collection.
  \*/
  anyItem(): CrossReferenceFormat

/\*\*

- Reports how many CrossReferenceFormat elements exist.
  \*/
  count(): number

/\*\*

- Gets all CrossReferenceFormat entries in the collection.
  \*/
  everyItem(): CrossReferenceFormat[]

/\*\*

- Gets the collection's first CrossReferenceFormat.
  \*/
  firstItem(): CrossReferenceFormat

/\*\*

- Resolves a CrossReferenceFormat by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): CrossReferenceFormat

/\*\*

- Resolves a CrossReferenceFormat by ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): CrossReferenceFormat

/\*\*

- Resolves a CrossReferenceFormat by name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): CrossReferenceFormat

/\*\*

- Gets the selected range of CrossReferenceFormats entries.
- @param from Starting CrossReferenceFormat, index, or name for the range.
- @param to Ending CrossReferenceFormat, index, or name for the range.
  \*/
  itemByRange(from: CrossReferenceFormat | number | string, to: CrossReferenceFormat | number | string): CrossReferenceFormat[]

/\*\*

- Gets the collection's final CrossReferenceFormat.
  \*/
  lastItem(): CrossReferenceFormat

/\*\*

- Gets the collection's midpoint CrossReferenceFormat.
  \*/
  middleItem(): CrossReferenceFormat

/\*\*

- Gets the collection member positioned after the specified CrossReferenceFormat.
- @param obj CrossReferenceFormat located immediately before the requested CrossReferenceFormat.
  \*/
  nextItem(obj: CrossReferenceFormat): CrossReferenceFormat

/\*\*

- Gets the CrossReferenceFormat positioned just before the supplied index.
- @param obj Index for the CrossReferenceFormat located just after the requested CrossReferenceFormat.
  \*/
  previousItem(obj: CrossReferenceFormat): CrossReferenceFormat

/\*\*

- Builds an executable source string that resolves back to the CrossReferenceFormat.
  \*/
  toSource(): string
  }

/\*\*

- Represents a cross-reference text source.
  \*/
  declare class CrossReferenceSource extends HyperlinkTextSource {
  /\*\*
  - CrossReferenceFormat used by the cross reference source.
    \*/
    appliedFormat: CrossReferenceFormat

/\*\*

- Updates the cross reference text source content.
  \*/
  update(): void
  }

/\*\*

- Collection wrapper for cross-reference text sources.
  \*/
  declare class CrossReferenceSources {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the CrossReferenceSource at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: CrossReferenceSource

/\*\*

- Creates and returns a new cross reference text source.
- @param source Text or insertion point used to create the source.
- @param appliedFormat CrossReferenceFormat used by the cross reference source.
- @param withProperties Initial property values for the new CrossReferenceSource
  \*/
  add(source: Text, appliedFormat: CrossReferenceFormat, withProperties: object): CrossReferenceSource

/\*\*

- Gets any CrossReferenceSource from the collection.
  \*/
  anyItem(): CrossReferenceSource

/\*\*

- Reports how many CrossReferenceSource elements exist.
  \*/
  count(): number

/\*\*

- Gets all CrossReferenceSource entries in the collection.
  \*/
  everyItem(): CrossReferenceSource[]

/\*\*

- Gets the collection's first CrossReferenceSource.
  \*/
  firstItem(): CrossReferenceSource

/\*\*

- Resolves a CrossReferenceSource by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): CrossReferenceSource

/\*\*

- Resolves a CrossReferenceSource by ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): CrossReferenceSource

/\*\*

- Resolves a CrossReferenceSource by name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): CrossReferenceSource

/\*\*

- Gets the selected range of CrossReferenceSources entries.
- @param from Starting CrossReferenceSource, index, or name for the range.
- @param to Ending CrossReferenceSource, index, or name for the range.
  \*/
  itemByRange(from: CrossReferenceSource | number | string, to: CrossReferenceSource | number | string): CrossReferenceSource[]

/\*\*

- Gets the collection's final CrossReferenceSource.
  \*/
  lastItem(): CrossReferenceSource

/\*\*

- Gets the collection's midpoint CrossReferenceSource.
  \*/
  middleItem(): CrossReferenceSource

/\*\*

- Gets the collection member positioned after the specified CrossReferenceSource.
- @param obj CrossReferenceSource located immediately before the requested CrossReferenceSource.
  \*/
  nextItem(obj: CrossReferenceSource): CrossReferenceSource

/\*\*

- Gets the CrossReferenceSource positioned just before the supplied index.
- @param obj Index for the CrossReferenceSource located just after the requested CrossReferenceSource.
  \*/
  previousItem(obj: CrossReferenceSource): CrossReferenceSource

/\*\*

- Builds an executable source string that resolves back to the CrossReferenceSource.
  \*/
  toSource(): string
  }

/\*\*

- Represents a cross-reference building block.
  \*/
  declare class BuildingBlock {
  /\*\*
  - CharacterStyle to apply to the building block.
    \*/
    appliedCharacterStyle: CharacterStyle

/\*\*

- Delimiter used with paragraph text and full-paragraph building blocks. Other building block types ignore it.
  \*/
  appliedDelimiter: string

/\*\*

- Kind assigned to the building block.
  \*/
  blockType: BuildingBlockTypes

/\*\*

- Custom text for a building block. Currently useful only with a custom string building block; other building block types ignore it.
  \*/
  customText: string

/\*\*

- Event listener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection exposed by this object.
  \*/
  readonly events: Events

/\*\*

- When true, generated source for the building block includes the delimiter. This has no effect when the building block has no delimiter.
  \*/
  includeDelimiter: boolean

/\*\*

- Position of BuildingBlock inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- CrossReferenceFormat that owns BuildingBlock.
  \*/
  readonly parent: CrossReferenceFormat

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

- Resolves this specifier into an array of object references.
  \*/
  getElements(): BuildingBlock[]

/\*\*

- Removes this BuildingBlock.
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

- Builds an executable source string that resolves back to the BuildingBlock.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for cross-reference building blocks.
  \*/
  declare class BuildingBlocks {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the BuildingBlock at the supplied index.
- @param index Index to resolve.
  \*/
  [index: number]: BuildingBlock

/\*\*

- Creates and returns a new cross reference building block.
- @param blockType Kind assigned to the building block.
- @param appliedCharacterStyle CharacterStyle assigned to this BuildingBlock.
- @param customText Custom text for a BuildingBlock. Currently useful only with a custom string BuildingBlock; other BuildingBlock types ignore it.
- @param withProperties Starting values for BuildingBlock properties.
  \*/
  add(blockType: BuildingBlockTypes, appliedCharacterStyle: CharacterStyle, customText: string, withProperties: object): BuildingBlock

/\*\*

- Gets any BuildingBlock from the collection.
  \*/
  anyItem(): BuildingBlock

/\*\*

- Reports how many BuildingBlock elements exist.
  \*/
  count(): number

/\*\*

- Gets all BuildingBlock entries in the collection.
  \*/
  everyItem(): BuildingBlock[]

/\*\*

- Gets the collection's first BuildingBlock.
  \*/
  firstItem(): BuildingBlock

/\*\*

- Resolves a BuildingBlock by index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): BuildingBlock

/\*\*

- Gets the selected range of BuildingBlocks entries.
- @param from Starting BuildingBlock, index, or name for the range.
- @param to Ending BuildingBlock, index, or name for the range.
  \*/
  itemByRange(from: BuildingBlock | number | string, to: BuildingBlock | number | string): BuildingBlock[]

/\*\*

- Gets the collection's final BuildingBlock.
  \*/
  lastItem(): BuildingBlock

/\*\*

- Gets the collection's midpoint BuildingBlock.
  \*/
  middleItem(): BuildingBlock
