# Indesign (part 25)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Retrieves the BuildingBlock immediately after the supplied BuildingBlock in this collection.
- @param obj BuildingBlock positioned immediately before the target BuildingBlock.
  \*/
  nextItem(obj: BuildingBlock): BuildingBlock

/\*\*

- Retrieves the BuildingBlock immediately before the supplied index.
- @param obj Index belonging to the BuildingBlock immediately after the target BuildingBlock.
  \*/
  previousItem(obj: BuildingBlock): BuildingBlock

/\*\*

- Builds executable source text that resolves back to the BuildingBlock.
  \*/
  toSource(): string
  }

/\*\*

- ParagraphDestination used by a cross reference.
  \*/
  declare class ParagraphDestination extends HyperlinkTextDestination {}

/\*\*

- Collection containing paragraph destinations.
  \*/
  declare class ParagraphDestinations {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the ParagraphDestination at the supplied index.
- @param index Index value.
  \*/
  [index: number]: ParagraphDestination

/\*\*

- Creates a ParagraphDestination object.
- @param destination Text or insertion point in the target paragraph for the cross reference; the insertion point is moved to that paragraph start.
- @param withProperties Initial property values for the new ParagraphDestination.
  \*/
  add(destination: Text, withProperties: object): ParagraphDestination

/\*\*

- Retrieves an arbitrary ParagraphDestination from this collection.
  \*/
  anyItem(): ParagraphDestination

/\*\*

- Reports how many elements the ParagraphDestination contains.
  \*/
  count(): number

/\*\*

- Retrieves all ParagraphDestination entries from this collection.
  \*/
  everyItem(): ParagraphDestination[]

/\*\*

- Retrieves the initial ParagraphDestination from this collection.
  \*/
  firstItem(): ParagraphDestination

/\*\*

- Retrieves the ParagraphDestination identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): ParagraphDestination

/\*\*

- Retrieves the ParagraphDestination matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): ParagraphDestination

/\*\*

- Retrieves the ParagraphDestination matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): ParagraphDestination

/\*\*

- Retrieves the ParagraphDestinations inside the supplied range.
- @param from Starting ParagraphDestination, index, or name for the range.
- @param to Ending ParagraphDestination, index, or name for the range.
  \*/
  itemByRange(from: ParagraphDestination | number | string, to: ParagraphDestination | number | string): ParagraphDestination[]

/\*\*

- Retrieves the final ParagraphDestination from this collection.
  \*/
  lastItem(): ParagraphDestination

/\*\*

- Retrieves the center ParagraphDestination from this collection.
  \*/
  middleItem(): ParagraphDestination

/\*\*

- Retrieves the ParagraphDestination immediately after the supplied ParagraphDestination in this collection.
- @param obj ParagraphDestination positioned immediately before the target ParagraphDestination.
  \*/
  nextItem(obj: ParagraphDestination): ParagraphDestination

/\*\*

- Retrieves the ParagraphDestination immediately before the supplied index.
- @param obj Index belonging to the ParagraphDestination immediately after the target ParagraphDestination.
  \*/
  previousItem(obj: ParagraphDestination): ParagraphDestination

/\*\*

- Builds executable source text that resolves back to the ParagraphDestination.
  \*/
  toSource(): string
  }

/\*\*

- Index object.
  \*/
  declare class Index {
  /\*\*
  - Topics belonging to the specified index section.
    \*/
    readonly allTopics: Topic[]

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the Index.
  \*/
  readonly id: number

/\*\*

- Position of the Index inside its containing object.
  \*/
  readonly index: number

/\*\*

- Collection containing index sections.
  \*/
  readonly indexSections: IndexSections

/\*\*

- Boolean result indicating that the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- Name for the Index, mapped to the Index label property.
  \*/
  name: string

/\*\*

- Parent object for the Index (a Document).
  \*/
  readonly parent: Document

/\*\*

- Property bag used to assign multiple properties together.
  \*/
  properties: object

/\*\*

- Collection containing index topics.
  \*/
  readonly topics: Topics

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Capitalizes the initial letter for the chosen index topic or topic group.
- @param capitalizationOption Entry or entries whose initial letters are capitalized.
  \*/
  capitalize(capitalizationOption?: IndexCapitalizationOptions): void

/\*\*

- Reads the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Creates the story that contains the generated index.
- @param on Spread or page that receives the story.
- @param placePoint Coordinates for the story bounding box upper-left corner, in [x, y] format.
- @param destinationLayer Layer that receives the story.
- @param autoflowing When true, lets the story continue onto later pages if it cannot fit on the chosen page. If the document has no later pages, they are created as needed.
- @param includeOverset When true, topics from overset story text are included.
  \*/
  generate(on: Page | Spread | MasterSpread, placePoint: (number | string)[], destinationLayer: Layer, autoflowing?: boolean, includeOverset?: boolean): Story[]

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): Index[]

/\*\*

- Loads index topics from a file.
- @param from File used as the source for imported topics.
  \*/
  importTopics(from: File): void

/\*\*

- Stores a label value under the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Deletes index topics that have no index entries.
  \*/
  removeUnusedTopics(): void

/\*\*

- Builds executable source text that resolves back to the Index.
  \*/
  toSource(): string

/\*\*

- Gets this object specifier string.
  \*/
  toSpecifier(): string

/\*\*

- Refreshes the index preview pane. Note: the index itself is not updated.
  \*/
  update(): void
  }

/\*\*

- Collection containing indexes.
  \*/
  declare class Indexes {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Index at the supplied index.
- @param index Index value.
  \*/
  [index: number]: Index

/\*\*

- Creates an Index object.
- @param withProperties Initial property values for the new Index.
  \*/
  add(withProperties: object): Index

/\*\*

- Retrieves an arbitrary Index from this collection.
  \*/
  anyItem(): Index

/\*\*

- Reports how many elements the Index contains.
  \*/
  count(): number

/\*\*

- Retrieves all Index entries from this collection.
  \*/
  everyItem(): Index[]

/\*\*

- Retrieves the initial Index from this collection.
  \*/
  firstItem(): Index

/\*\*

- Retrieves the Index identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Index

/\*\*

- Retrieves the Index matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): Index

/\*\*

- Retrieves the Index matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): Index

/\*\*

- Retrieves the Indexes inside the supplied range.
- @param from Starting Index, index, or name for the range.
- @param to Ending Index, index, or name for the range.
  \*/
  itemByRange(from: Index | number | string, to: Index | number | string): Index[]

/\*\*

- Retrieves the final Index from this collection.
  \*/
  lastItem(): Index

/\*\*

- Retrieves the center Index from this collection.
  \*/
  middleItem(): Index

/\*\*

- Retrieves the Index immediately after the supplied Index in this collection.
- @param obj Index positioned immediately before the target Index.
  \*/
  nextItem(obj: Index): Index

/\*\*

- Retrieves the Index immediately before the supplied index.
- @param obj Index belonging to the Index immediately after the target Index.
  \*/
  previousItem(obj: Index): Index

/\*\*

- Builds executable source text that resolves back to the Index.
  \*/
  toSource(): string
  }

/\*\*

- Options that configure index output.
  \*/
  declare class IndexOptions extends Preference {
  /\*\*
  - Characters placed at the start of cross references.
    \*/
    beforeCrossReferenceSeparator: string

/\*\*

- Separator characters for nested topics when the index uses runin-style formatting.
  \*/
  betweenEntriesSeparator: string

/\*\*

- Separator characters for individual page numbers, page-number ranges, and multiple ranges.
  \*/
  betweenPageNumbersSeparator: string

/\*\*

- Character style used for cross references.
  \*/
  crossReferenceStyle: CharacterStyle

/\*\*

- Character style used for cross reference topics.
  \*/
  crossReferenceTopicStyle: CharacterStyle

/\*\*

- Characters placed at the end of each index entry.
  \*/
  entryEndSeparator: string

/\*\*

- Characters placed after each index topic.
  \*/
  followingTopicSeparator: string

/\*\*

- When true, topics and page references are gathered from every document in the book.
  \*/
  includeBookDocuments: boolean

/\*\*

- When true, headings are shown even for sections without index topics. Note: applies only when include section headings is true.
  \*/
  includeEmptyIndexSections: boolean

/\*\*

- When true, topics and page references located on hidden layers are included.
  \*/
  includeHiddenEntries: boolean

/\*\*

- When true, alphabet letters appear as index section headings.
  \*/
  includeSectionHeadings: boolean

/\*\*

- Formatting mode for level 2 and lower index topics.
  \*/
  indexFormat: IndexFormat

/\*\*

- Paragraph style used for level 1 index topics.
  \*/
  level1Style: ParagraphStyle

/\*\*

- Paragraph style used for level 2 index topics.
  \*/
  level2Style: ParagraphStyle

/\*\*

- Paragraph style used for level 3 index topics.
  \*/
  level3Style: ParagraphStyle

/\*\*

- Paragraph style used for level 4 index topics.
  \*/
  level4Style: ParagraphStyle

/\*\*

- Character style used for page numbers in the index.
  \*/
  pageNumberStyle: CharacterStyle

/\*\*

- Characters placed between page numbers to indicate a page range.
  \*/
  pageRangeSeparator: string

/\*\*

- When true, existing index content is replaced. Note: only the content changes; the index location and other modified index properties are left as they are.
  \*/
  replaceExistingIndex: boolean

/\*\*

- Paragraph style for headings in index sections. Note: applies only when include section headings is true.
  \*/
  sectionHeadingStyle: ParagraphStyle

/\*\*

- Title used for the generated index.
  \*/
  title: string

/\*\*

- Paragraph style used for the title of the generated index.
  \*/
  titleStyle: ParagraphStyle | string
  }

/\*\*

- Index topic object.
  \*/
  declare class Topic {
  /\*\*
  - Index cross-reference collection. For text cross references, use the 'cross reference source' and 'hyperlink' objects.
    \*/
    readonly crossReferences: CrossReferences

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Position of the Topic inside its containing object.
  \*/
  readonly index: number

/\*\*

- Boolean result indicating that the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name assigned to the Topic.
  \*/
  name: string

/\*\*

- Collection containing index page references.
  \*/
  readonly pageReferences: PageReferences

/\*\*

- Parent object for the Topic (a IndexSection, Topic or Index).
  \*/
  readonly parent: any

/\*\*

- Property bag used to assign multiple properties together.
  \*/
  properties: object

/\*\*

- Sort key used instead of the topic name. Note: the index still displays the actual topic text, not the sort order text.
  \*/
  sortOrder: string

/\*\*

- Collection containing index topics.
  \*/
  readonly topics: Topics

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Capitalizes the initial letter for the chosen index topic or topic group.
- @param capitalizationOption Entry or entries whose initial letters are capitalized.
  \*/
  capitalize(capitalizationOption?: IndexCapitalizationOptions): void

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): Topic[]

/\*\*

- Removes the Topic object.
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

- Builds executable source text that resolves back to the Topic.
  \*/
  toSource(): string

/\*\*

- Gets this object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing index topics.
  \*/
  declare class Topics {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Topic at the supplied index.
- @param index Index value.
  \*/
  [index: number]: Topic

/\*\*

- Creates a Topic object.
- @param name Topic name. Note: this text is what the index displays.
- @param sortBy Sort string used instead of the topic name. Note: the index still displays the actual topic text, not the sort order text.
- @param withProperties Initial property values for the new Topic.
  \*/
  add(name: string, sortBy: string, withProperties: object): Topic

/\*\*

- Retrieves an arbitrary Topic from this collection.
  \*/
  anyItem(): Topic

/\*\*

- Reports how many elements the Topic contains.
  \*/
  count(): number

/\*\*

- Retrieves all Topic entries from this collection.
  \*/
  everyItem(): Topic[]

/\*\*

- Retrieves the initial Topic from this collection.
  \*/
  firstItem(): Topic

/\*\*

- Retrieves the Topic identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Topic

/\*\*

- Retrieves the Topic matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): Topic

/\*\*

- Retrieves the Topics inside the supplied range.
- @param from Starting Topic, index, or name for the range.
- @param to Ending Topic, index, or name for the range.
  \*/
  itemByRange(from: Topic | number | string, to: Topic | number | string): Topic[]

/\*\*

- Retrieves the final Topic from this collection.
  \*/
  lastItem(): Topic

/\*\*

- Retrieves the center Topic from this collection.
  \*/
  middleItem(): Topic

/\*\*

- Retrieves the Topic immediately after the supplied Topic in this collection.
- @param obj Topic positioned immediately before the target Topic.
  \*/
  nextItem(obj: Topic): Topic

/\*\*

- Retrieves the Topic immediately before the supplied index.
- @param obj Index belonging to the Topic immediately after the target Topic.
  \*/
  previousItem(obj: Topic): Topic

/\*\*

- Builds executable source text that resolves back to the Topic.
  \*/
  toSource(): string
  }

/\*\*

- CrossReference pointing at another index topic. For text cross references, use the 'cross reference source' and 'hyperlink' objects.
  \*/
  declare class CrossReference {
  /\*\*
  - Text placed before or after the referenced topic.
    \*/
    crossReferenceType: CrossReferenceType

/\*\*

- Text for a custom cross reference type. Note: used only with custom cross reference types.
  \*/
  customTypeString: string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the CrossReference.
  \*/
  readonly id: number

/\*\*

- Position of the CrossReference inside its containing object.
  \*/
  readonly index: number

/\*\*

- Boolean result indicating that the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- Name for the CrossReference, mapped to the CrossReference label property.
  \*/
  name: string

/\*\*

- Parent object for the CrossReference (a Topic).
  \*/
  readonly parent: Topic

/\*\*

- Property bag used to assign multiple properties together.
  \*/
  properties: object

/\*\*

- Topic targeted by this CrossReference.
  \*/
  referencedTopic: Topic

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): CrossReference[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the CrossReference object.
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

- Builds executable source text that resolves back to the CrossReference.
  \*/
  toSource(): string

/\*\*

- Gets this object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Index cross-reference collection. For text cross references, use the 'cross reference source' and 'hyperlink' objects.
  \*/
  declare class CrossReferences {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the CrossReference at the supplied index.
- @param index Index value.
  \*/
  [index: number]: CrossReference

/\*\*

- Creates a CrossReference object.
- @param referencedTopic Topic targeted by the cross reference.
- @param crossReferenceType Cross reference type to create.
- @param customTypeString Custom string used by the cross reference. Valid only with custom cross reference types.
- @param withProperties Initial property values for the new CrossReference.
  \*/
  add(referencedTopic: Topic, crossReferenceType: CrossReferenceType, customTypeString: string, withProperties: object): CrossReference

/\*\*

- Retrieves an arbitrary CrossReference from this collection.
  \*/
  anyItem(): CrossReference

/\*\*

- Reports how many elements the CrossReference contains.
  \*/
  count(): number

/\*\*

- Retrieves all CrossReference entries from this collection.
  \*/
  everyItem(): CrossReference[]

/\*\*

- Retrieves the initial CrossReference from this collection.
  \*/
  firstItem(): CrossReference

/\*\*

- Retrieves the CrossReference identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): CrossReference

/\*\*

- Retrieves the CrossReference matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): CrossReference

/\*\*

- Retrieves the CrossReference matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): CrossReference

/\*\*

- Retrieves the CrossReferences inside the supplied range.
- @param from Starting CrossReference, index, or name for the range.
- @param to Ending CrossReference, index, or name for the range.
  \*/
  itemByRange(from: CrossReference | number | string, to: CrossReference | number | string): CrossReference[]

/\*\*

- Retrieves the final CrossReference from this collection.
  \*/
  lastItem(): CrossReference

/\*\*

- Retrieves the center CrossReference from this collection.
  \*/
  middleItem(): CrossReference

/\*\*

- Retrieves the CrossReference immediately after the supplied CrossReference in this collection.
- @param obj CrossReference positioned immediately before the target CrossReference.
  \*/
  nextItem(obj: CrossReference): CrossReference

/\*\*

- Retrieves the CrossReference immediately before the supplied index.
- @param obj Index belonging to the CrossReference immediately after the target CrossReference.
  \*/
  previousItem(obj: CrossReference): CrossReference

/\*\*

- Builds executable source text that resolves back to the CrossReference.
  \*/
  toSource(): string
  }

/\*\*

- PageReference object for an index topic.
  \*/
  declare class PageReference {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the PageReference.
  \*/
  readonly id: number

/\*\*

- Position of the PageReference inside its containing object.
  \*/
  readonly index: number

/\*\*

- Boolean result indicating that the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- Name for the PageReference, mapped to the PageReference label property.
  \*/
  name: string

/\*\*

- Character style used for page numbers.
  \*/
  pageNumberStyleOverride: CharacterStyle

/\*\*

- Paragraph style or paragraph/page count that sets the final page in a range. Note: applies only when page reference type requests the next use of a paragraph style or a paragraph/page count. .
  \*/
  pageReferenceLimit: ParagraphStyle | number

/\*\*

- Settings available for index page references.
  \*/
  pageReferenceType: PageReferenceType

/\*\*

- Parent object for the PageReference (a Topic).
  \*/
  readonly parent: Topic

/\*\*

- Property bag used to assign multiple properties together.
  \*/
  properties: object

/\*\*

- Hyperlinked text or insertion point.
  \*/
  readonly sourceText: Text

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): PageReference[]
