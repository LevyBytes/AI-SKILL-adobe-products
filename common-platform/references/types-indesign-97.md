# Indesign (part 97)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Collects XMLAttributes from the requested span.
- @param from XMLAttribute, index, or name that starts the span.
- @param to XMLAttribute, index, or name that ends the span.
  \*/
  itemByRange(from: XMLAttribute | number | string, to: XMLAttribute | number | string): XMLAttribute[]

/\*\*

- Gets the collection's final XMLAttribute.
  \*/
  lastItem(): XMLAttribute

/\*\*

- Gets the XMLAttribute located at the collection midpoint.
  \*/
  middleItem(): XMLAttribute

/\*\*

- Gets the XMLAttribute positioned after the supplied XMLAttribute.
- @param obj XMLAttribute immediately before the one wanted.
  \*/
  nextItem(obj: XMLAttribute): XMLAttribute

/\*\*

- Gets the XMLAttribute positioned before the supplied index.
- @param obj Index for the XMLAttribute immediately after the one wanted.
  \*/
  previousItem(obj: XMLAttribute): XMLAttribute

/\*\*

- Builds executable source text that resolves back to the XMLAttribute.
  \*/
  toSource(): string
  }

/\*\*

- Represents an XML markup tag.
  \*/
  declare class XMLTag {
  /\*\*
  - Event listeners related to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events related to this object.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the XMLTag.
  \*/
  readonly id: number

/\*\*

- Position of the XMLTag within its containing object.
  \*/
  readonly index: number

/\*\*

- Indicates whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Free-form string property.
  \*/
  label: string

/\*\*

- Name assigned to the XMLTag.
  \*/
  name: string

/\*\*

- Parent object for the XMLTag (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Property bag used to set several properties together.
  \*/
  properties: object

/\*\*

- Color assigned to the tag: either [R, G, B] using three doubles from 0 to 255, or a UI color.
  \*/
  tagColor: [number, number, number] | UIColors

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Gets the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): XMLTag[]

/\*\*

- Sets a label to the value associated with the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes the tag.
- @param replacingWith Replacement tag.
  \*/
  remove(replacingWith: XMLTag | string): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the XMLTag.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for XML tags.
  \*/
  declare class XMLTags {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Fetches an XMLTag by supplied index.
- @param index Index value.
  \*/
  [index: number]: XMLTag

/\*\*

- Builds a tag.
- @param name Tag name.
- @param tagColor Tag color, either [R, G, B] using three doubles from 0 to 255, or a UI color.
- @param withProperties Property values used at XMLTag creation.
  \*/
  add(name: string, tagColor: [number, number, number] | UIColors, withProperties: object): XMLTag

/\*\*

- Gets an arbitrary XMLTag from the collection.
  \*/
  anyItem(): XMLTag

/\*\*

- Shows the element count for the XMLTag.
  \*/
  count(): number

/\*\*

- Gets all XMLTag objects in the collection.
  \*/
  everyItem(): XMLTag[]

/\*\*

- Gets the collection's initial XMLTag.
  \*/
  firstItem(): XMLTag

/\*\*

- Fetches an XMLTag by supplied index or name.
- @param index Index or name.
  \*/
  item(index: number | string): XMLTag

/\*\*

- Fetches an XMLTag by its provided ID.
- @param id ID value.
  \*/
  itemByID(id: number): XMLTag

/\*\*

- Fetches an XMLTag by supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): XMLTag

/\*\*

- Collects XMLTags from the requested span.
- @param from XMLTag, index, or name that starts the span.
- @param to XMLTag, index, or name that ends the span.
  \*/
  itemByRange(from: XMLTag | number | string, to: XMLTag | number | string): XMLTag[]

/\*\*

- Gets the collection's final XMLTag.
  \*/
  lastItem(): XMLTag

/\*\*

- Gets the XMLTag located at the collection midpoint.
  \*/
  middleItem(): XMLTag

/\*\*

- Gets the XMLTag positioned after the supplied XMLTag.
- @param obj XMLTag immediately before the one wanted.
  \*/
  nextItem(obj: XMLTag): XMLTag

/\*\*

- Gets the XMLTag positioned before the supplied index.
- @param obj Index for the XMLTag immediately after the one wanted.
  \*/
  previousItem(obj: XMLTag): XMLTag

/\*\*

- Builds executable source text that resolves back to the XMLTag.
  \*/
  toSource(): string
  }

/\*\*

- Mapping object connecting an XML tag to a paragraph, character, table, or cell style.
  \*/
  declare class XMLImportMap {
  /\*\*
  - Event listeners related to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events related to this object.
  \*/
  readonly events: Events

/\*\*

- Position of the XMLImportMap within its containing object.
  \*/
  readonly index: number

/\*\*

- Indicates whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Style mapped to the XML tag.
  \*/
  mappedStyle: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string

/\*\*

- XML tag assigned to the element.
  \*/
  readonly markupTag: XMLTag | string

/\*\*

- Parent object for the XMLImportMap (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Property bag used to set several properties together.
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

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): XMLImportMap[]

/\*\*

- Deletes this XMLImportMap.
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

- Builds executable source text that resolves back to the XMLImportMap.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for XML import maps.
  \*/
  declare class XMLImportMaps {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Fetches an XMLImportMap by supplied index.
- @param index Index value.
  \*/
  [index: number]: XMLImportMap

/\*\*

- Builds a new mapping.
- @param markupTag Tag to map.
- @param mappedStyle Mapped style.
- @param withProperties Property values used at XMLImportMap creation.
  \*/
  add(markupTag: XMLTag | string, mappedStyle: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string, withProperties: object): XMLImportMap

/\*\*

- Gets an arbitrary XMLImportMap from the collection.
  \*/
  anyItem(): XMLImportMap

/\*\*

- Shows the element count for the XMLImportMap.
  \*/
  count(): number

/\*\*

- Gets all XMLImportMap objects in the collection.
  \*/
  everyItem(): XMLImportMap[]

/\*\*

- Gets the collection's initial XMLImportMap.
  \*/
  firstItem(): XMLImportMap

/\*\*

- Fetches an XMLImportMap by supplied index or name.
- @param index Index or name.
  \*/
  item(index: number | string): XMLImportMap

/\*\*

- Collects XMLImportMaps from the requested span.
- @param from XMLImportMap, index, or name that starts the span.
- @param to XMLImportMap, index, or name that ends the span.
  \*/
  itemByRange(from: XMLImportMap | number | string, to: XMLImportMap | number | string): XMLImportMap[]

/\*\*

- Gets the collection's final XMLImportMap.
  \*/
  lastItem(): XMLImportMap

/\*\*

- Gets the XMLImportMap located at the collection midpoint.
  \*/
  middleItem(): XMLImportMap

/\*\*

- Gets the XMLImportMap positioned after the supplied XMLImportMap.
- @param obj XMLImportMap immediately before the one wanted.
  \*/
  nextItem(obj: XMLImportMap): XMLImportMap

/\*\*

- Gets the XMLImportMap positioned before the supplied index.
- @param obj Index for the XMLImportMap immediately after the one wanted.
  \*/
  previousItem(obj: XMLImportMap): XMLImportMap

/\*\*

- Builds executable source text that resolves back to the XMLImportMap.
  \*/
  toSource(): string
  }

/\*\*

- Mapping object connecting a paragraph, character, table, or cell style to an XML tag.
  \*/
  declare class XMLExportMap {
  /\*\*
  - Event listeners related to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events related to this object.
  \*/
  readonly events: Events

/\*\*

- When true, empty stories are included while mapping styles to tags.
  \*/
  includeEmptyStories: boolean

/\*\*

- When true, stories on master spreads are included while mapping styles to tags.
  \*/
  includeMasterPageStories: boolean

/\*\*

- When true, pasteboard stories are included while mapping styles to tags.
  \*/
  includePasteboardStories: boolean

/\*\*

- Position of the XMLExportMap within its containing object.
  \*/
  readonly index: number

/\*\*

- Indicates whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Style currently associated with that XML tag.
  \*/
  readonly mappedStyle: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string

/\*\*

- XML tag assigned to the element.
  \*/
  markupTag: XMLTag | string

/\*\*

- Parent object for the XMLExportMap (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Property bag used to set several properties together.
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

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): XMLExportMap[]

/\*\*

- Deletes this XMLExportMap.
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

- Builds executable source text that resolves back to the XMLExportMap.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for XML export maps.
  \*/
  declare class XMLExportMaps {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Fetches an XMLExportMap by supplied index.
- @param index Index value.
  \*/
  [index: number]: XMLExportMap

/\*\*

- Builds a new XMLExportMap.
- @param mappedStyle Mapped style.
- @param markupTag Tag to map.
- @param withProperties Property values used at XMLExportMap creation.
  \*/
  add(mappedStyle: ParagraphStyle | CharacterStyle | TableStyle | CellStyle | string, markupTag: XMLTag | string, withProperties: object): XMLExportMap

/\*\*

- Gets an arbitrary XMLExportMap from the collection.
  \*/
  anyItem(): XMLExportMap

/\*\*

- Shows the element count for the XMLExportMap.
  \*/
  count(): number

/\*\*

- Gets all XMLExportMap objects in the collection.
  \*/
  everyItem(): XMLExportMap[]

/\*\*

- Gets the collection's initial XMLExportMap.
  \*/
  firstItem(): XMLExportMap

/\*\*

- Fetches an XMLExportMap by supplied index or name.
- @param index Index or name.
  \*/
  item(index: number | string): XMLExportMap

/\*\*

- Collects XMLExportMaps from the requested span.
- @param from XMLExportMap, index, or name that starts the span.
- @param to XMLExportMap, index, or name that ends the span.
  \*/
  itemByRange(from: XMLExportMap | number | string, to: XMLExportMap | number | string): XMLExportMap[]

/\*\*

- Gets the collection's final XMLExportMap.
  \*/
  lastItem(): XMLExportMap

/\*\*

- Gets the XMLExportMap located at the collection midpoint.
  \*/
  middleItem(): XMLExportMap

/\*\*

- Gets the XMLExportMap positioned after the supplied XMLExportMap.
- @param obj XMLExportMap immediately before the one wanted.
  \*/
  nextItem(obj: XMLExportMap): XMLExportMap

/\*\*

- Gets the XMLExportMap positioned before the supplied index.
- @param obj Index for the XMLExportMap immediately after the one wanted.
  \*/
  previousItem(obj: XMLExportMap): XMLExportMap

/\*\*

- Builds executable source text that resolves back to the XMLExportMap.
  \*/
  toSource(): string
  }

/\*\*

- Represents an XML validation error.
  \*/
  declare class ValidationError {
  /\*\*
  - Attribute name when the validation error concerns an attribute.
    \*/
    readonly attributeName: string

/\*\*

- Element responsible for the validation error.
  \*/
  readonly element: XMLElement

/\*\*

- Message text for the validation error.
  \*/
  readonly errorMessage: string

/\*\*

- Event listeners related to this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events related to this object.
  \*/
  readonly events: Events

/\*\*

- Position of the ValidationError within its containing object.
  \*/
  readonly index: number

/\*\*

- Indicates whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for the ValidationError (a Document).
  \*/
  readonly parent: Document

/\*\*

- Property bag used to set several properties together.
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

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): ValidationError[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the ValidationError.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for XML validation errors.
  \*/
  declare class ValidationErrors {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Fetches a ValidationError by supplied index.
- @param index Index value.
  \*/
  [index: number]: ValidationError

/\*\*

- Gets an arbitrary ValidationError from the collection.
  \*/
  anyItem(): ValidationError

/\*\*

- Shows the element count for the ValidationError.
  \*/
  count(): number

/\*\*

- Gets all ValidationError objects in the collection.
  \*/
  everyItem(): ValidationError[]

/\*\*

- Gets the collection's initial ValidationError.
  \*/
  firstItem(): ValidationError

/\*\*

- Fetches a ValidationError by supplied index or name.
- @param index Index or name.
  \*/
  item(index: number | string): ValidationError

/\*\*

- Collects ValidationErrors from the requested span.
- @param from ValidationError, index, or name that starts the span.
- @param to ValidationError, index, or name that ends the span.
  \*/
  itemByRange(from: ValidationError | number | string, to: ValidationError | number | string): ValidationError[]

/\*\*

- Gets the collection's final ValidationError.
  \*/
  lastItem(): ValidationError

/\*\*

- Gets the ValidationError located at the collection midpoint.
  \*/
  middleItem(): ValidationError

/\*\*

- Gets the ValidationError positioned after the supplied ValidationError.
- @param obj ValidationError immediately before the one wanted.
  \*/
  nextItem(obj: ValidationError): ValidationError

/\*\*

- Gets the ValidationError positioned before the supplied index.
- @param obj Index for the ValidationError immediately after the one wanted.
  \*/
  previousItem(obj: ValidationError): ValidationError

/\*\*

- Builds executable source text that resolves back to the ValidationError.
  \*/
  toSource(): string
  }

/\*\*

- Represents an XML comment.
  \*/
  declare class XMLComment extends XMLItem {
  /\*\*
  - Insertion point located before the table within the story that owns the table.
    \*/
    readonly storyOffset: InsertionPoint

/\*\*

- Text stored in the XML comment.
  \*/
  value: string

/\*\*

- Relocates the element to the requested position.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object; required when to requests before or after placement. .
  \*/
  move(to: LocationOptions, reference: XMLItem | Text): XMLComment
  }

/\*\*

- Collection type for XML comments.
  \*/
  declare class XMLComments {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Fetches an XMLComment by supplied index.
- @param index Index value.
  \*/
  [index: number]: XMLComment

/\*\*

- Adds an XMLComment entry.
- @param value Comment text value.
- @param storyOffset In-story placement, expressed as an insertion point.
- @param withProperties Starting property values for the new XMLComment
  \*/
  add(value?: string, storyOffset?: InsertionPoint | number, withProperties?: object): XMLComment

/\*\*

- Yields an arbitrary XMLComment from this collection.
  \*/
  anyItem(): XMLComment

/\*\*

- Reports how many XMLComment elements are present.
  \*/
  count(): number

/\*\*

- Yields all XMLComment entries in this collection.
  \*/
  everyItem(): XMLComment[]

/\*\*

- Yields the leading XMLComment in this collection.
  \*/
  firstItem(): XMLComment

/\*\*

- Yields the XMLComment identified by index or name.
- @param index Index or name to look up.
  \*/
  item(index: number | string): XMLComment

/\*\*

- Yields the XMLComment identified by ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): XMLComment

/\*\*

- Yields XMLComments spanning the requested range.
- @param from XMLComment, index, or name where the range starts.
- @param to XMLComment, index, or name where the range ends.
  \*/
  itemByRange(from: XMLComment | number | string, to: XMLComment | number | string): XMLComment[]

/\*\*

- Yields the final XMLComment in this collection.
  \*/
  lastItem(): XMLComment

/\*\*

- Yields the central XMLComment in this collection.
  \*/
  middleItem(): XMLComment

/\*\*

- Yields the XMLComment positioned after the supplied XMLComment.
- @param obj XMLComment immediately before the requested XMLComment.
  \*/
  nextItem(obj: XMLComment): XMLComment

/\*\*

- Yields the XMLComment positioned before the supplied index.
- @param obj Index belonging to the XMLComment after the requested XMLComment.
  \*/
  previousItem(obj: XMLComment): XMLComment

/\*\*

- Builds executable source text that resolves back to the XMLComment.
  \*/
  toSource(): string
  }

/\*\*

- XML processing-instruction object.
  \*/
  declare class XMLInstruction extends XMLItem {
  /\*\*
  - Guidance for the application that reads exported XML on how to handle this processing instruction.
    \*/
    data: string

/\*\*

- Insertion point immediately before the table inside the table's story.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- Name used by the application reading exported XML to identify this processing instruction.
  \*/
  target: string

/\*\*

- Relocates the element to the requested position.
- @param to Placement relative to the reference object or inside the containing object.
- @param reference Reference object; required if to is before or after. .
  \*/
  move(to: LocationOptions, reference: XMLItem | Text): XMLInstruction
  }

/\*\*

- Collection wrapper for XMLInstruction objects.
  \*/
  declare class XMLInstructions {
  /\*\*
  - Object count held by this collection.
    \*/
    readonly length: number

/\*\*

- Yields the XMLInstruction at the requested index.
- @param index Index to retrieve.
  \*/
  [index: number]: XMLInstruction

/\*\*

- Adds an XML processing instruction.
- @param target Name used by an application reading exported XML to recognize the processing instruction.
- @param data Value telling the application what action to take for the processing instruction identified by target.
- @param storyOffset In-story placement, expressed as an insertion point.
- @param withProperties Initial property map for XMLInstruction creation
  \*/
  add(target: string, data?: string, storyOffset?: InsertionPoint | number, withProperties?: object): XMLInstruction

/\*\*

- Yields an arbitrary XMLInstruction from this collection.
  \*/
  anyItem(): XMLInstruction

/\*\*

- Reports how many XMLInstruction elements are present.
  \*/
  count(): number

/\*\*

- Yields all XMLInstruction entries in this collection.
  \*/
  everyItem(): XMLInstruction[]

/\*\*

- Yields the leading XMLInstruction in this collection.
  \*/
  firstItem(): XMLInstruction

/\*\*

- Yields the XMLInstruction identified by index or name.
- @param index Index or name to look up.
  \*/
  item(index: number | string): XMLInstruction

/\*\*

- Yields the XMLInstruction identified by ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): XMLInstruction

/\*\*

- Yields XMLInstructions spanning the requested range.
- @param from XMLInstruction, index, or name where the range starts.
- @param to XMLInstruction, index, or name where the range ends.
  \*/
  itemByRange(from: XMLInstruction | number | string, to: XMLInstruction | number | string): XMLInstruction[]

/\*\*

- Yields the final XMLInstruction in this collection.
  \*/
  lastItem(): XMLInstruction
