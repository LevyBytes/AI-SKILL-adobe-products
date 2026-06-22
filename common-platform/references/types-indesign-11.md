# Indesign (part 11)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Placeholder insertion uses this data merge field. Consult the data merge text placeholder and data merge image placeholder entries.
  \*/
  readonly field: DataMergeField

/\*\*

- Containing-object index for the DataMergeTextPlaceholder.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Object count for this collection.
  \*/
  readonly length: number

/\*\*

- Parent object for the DataMergeTextPlaceholder (a a Document).
  \*/
  readonly parent: Document

/\*\*

- Story containing the text.
  \*/
  readonly parentStory: Story

/\*\*

- Use this property to assign several properties together.
  \*/
  properties: object

/\*\*

- InsertionPoint immediately before the table in its containing story.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Builds an array of object references by resolving the object specifier.
  \*/
  getElements(): DataMergeTextPlaceholder[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler callback.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates source text that, when run, evaluates to the DataMergeTextPlaceholder.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for data merge text placeholders.
  \*/
  declare class DataMergeTextPlaceholders {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the DataMergeTextPlaceholder by supplied index.
- @param index Index value.
  \*/
  [index: number]: DataMergeTextPlaceholder

/\*\*

- Creates a text placeholder for data merge.
- @param parentStory Story that receives the placeholder.
- @param storyOffset Story position for the placeholder, given as an offset number or InsertionPoint.
- @param field Field used for insertion.
- @param withProperties Starting property values assigned to a created DataMergeTextPlaceholder
  \*/
  add(parentStory: Story, storyOffset: InsertionPoint | number, field: DataMergeField, withProperties: object): DataMergeTextPlaceholder

/\*\*

- Retrieves any DataMergeTextPlaceholder from the collection.
  \*/
  anyItem(): DataMergeTextPlaceholder

/\*\*

- Reports how many elements DataMergeTextPlaceholder contains.
  \*/
  count(): number

/\*\*

- Retrieves all DataMergeTextPlaceholder objects from the collection.
  \*/
  everyItem(): DataMergeTextPlaceholder[]

/\*\*

- Retrieves the first DataMergeTextPlaceholder from the collection.
  \*/
  firstItem(): DataMergeTextPlaceholder

/\*\*

- Retrieves the DataMergeTextPlaceholder by supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): DataMergeTextPlaceholder

/\*\*

- Retrieves DataMergeTextPlaceholders across the supplied range.
- @param from Range start, supplied as DataMergeTextPlaceholder, index, or name.
- @param to Range end, supplied as DataMergeTextPlaceholder, index, or name.
  \*/
  itemByRange(from: DataMergeTextPlaceholder | number | string, to: DataMergeTextPlaceholder | number | string): DataMergeTextPlaceholder[]

/\*\*

- Retrieves the last DataMergeTextPlaceholder from the collection.
  \*/
  lastItem(): DataMergeTextPlaceholder

/\*\*

- Retrieves the middle DataMergeTextPlaceholder from the collection.
  \*/
  middleItem(): DataMergeTextPlaceholder

/\*\*

- Retrieves the DataMergeTextPlaceholder after the supplied DataMergeTextPlaceholder in the collection.
- @param obj Existing DataMergeTextPlaceholder immediately before the desired DataMergeTextPlaceholder.
  \*/
  nextItem(obj: DataMergeTextPlaceholder): DataMergeTextPlaceholder

/\*\*

- Retrieves the DataMergeTextPlaceholder immediately before the supplied index.
- @param obj Index for the member immediately after the desired DataMergeTextPlaceholder.
  \*/
  previousItem(obj: DataMergeTextPlaceholder): DataMergeTextPlaceholder

/\*\*

- Creates source text that, when run, evaluates to the DataMergeTextPlaceholder.
  \*/
  toSource(): string
  }

/\*\*

- Container object for a date merge image field.
  \*/
  declare class DataMergeImagePlaceholder {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Placeholder insertion uses this data merge field. Consult the data merge text placeholder and data merge image placeholder entries.
  \*/
  readonly field: DataMergeField

/\*\*

- Containing-object index for the DataMergeImagePlaceholder.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for the DataMergeImagePlaceholder (a a Document).
  \*/
  readonly parent: Document

/\*\*

- Page item that receives the placeholder.
  \*/
  readonly placeholderPageItem: PageItem

/\*\*

- Use this property to assign several properties together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Builds an array of object references by resolving the object specifier.
  \*/
  getElements(): DataMergeImagePlaceholder[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler callback.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates source text that, when run, evaluates to the DataMergeImagePlaceholder.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for data merge image placeholders.
  \*/
  declare class DataMergeImagePlaceholders {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the DataMergeImagePlaceholder by supplied index.
- @param index Index value.
  \*/
  [index: number]: DataMergeImagePlaceholder

/\*\*

- Creates an image placeholder for data merge.
- @param placeholder PageItem that receives the placeholder.
- @param field Data merge field used for insertion.
- @param withProperties Starting property values assigned to a created DataMergeImagePlaceholder
  \*/
  add(placeholder: PageItem, field: DataMergeField, withProperties: object): DataMergeImagePlaceholder

/\*\*

- Retrieves any DataMergeImagePlaceholder from the collection.
  \*/
  anyItem(): DataMergeImagePlaceholder

/\*\*

- Reports how many elements DataMergeImagePlaceholder contains.
  \*/
  count(): number

/\*\*

- Retrieves all DataMergeImagePlaceholder objects from the collection.
  \*/
  everyItem(): DataMergeImagePlaceholder[]

/\*\*

- Retrieves the first DataMergeImagePlaceholder from the collection.
  \*/
  firstItem(): DataMergeImagePlaceholder

/\*\*

- Retrieves the DataMergeImagePlaceholder by supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): DataMergeImagePlaceholder

/\*\*

- Retrieves DataMergeImagePlaceholders across the supplied range.
- @param from Range start, supplied as DataMergeImagePlaceholder, index, or name.
- @param to Range end, supplied as DataMergeImagePlaceholder, index, or name.
  \*/
  itemByRange(from: DataMergeImagePlaceholder | number | string, to: DataMergeImagePlaceholder | number | string): DataMergeImagePlaceholder[]

/\*\*

- Retrieves the last DataMergeImagePlaceholder from the collection.
  \*/
  lastItem(): DataMergeImagePlaceholder

/\*\*

- Retrieves the middle DataMergeImagePlaceholder from the collection.
  \*/
  middleItem(): DataMergeImagePlaceholder

/\*\*

- Retrieves the DataMergeImagePlaceholder after the supplied DataMergeImagePlaceholder in the collection.
- @param obj Existing DataMergeImagePlaceholder immediately before the desired DataMergeImagePlaceholder.
  \*/
  nextItem(obj: DataMergeImagePlaceholder): DataMergeImagePlaceholder

/\*\*

- Retrieves the DataMergeImagePlaceholder immediately before the supplied index.
- @param obj Index for the member immediately after the desired DataMergeImagePlaceholder.
  \*/
  previousItem(obj: DataMergeImagePlaceholder): DataMergeImagePlaceholder

/\*\*

- Creates source text that, when run, evaluates to the DataMergeImagePlaceholder.
  \*/
  toSource(): string
  }

/\*\*

- Data merge field object.
  \*/
  declare class DataMergeField {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Field name.
  \*/
  readonly fieldName: string

/\*\*

- Source field type.
  \*/
  readonly fieldType: SourceFieldType

/\*\*

- Containing-object index for the DataMergeField.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for the DataMergeField (a a DataMerge).
  \*/
  readonly parent: DataMerge

/\*\*

- Use this property to assign several properties together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Builds an array of object references by resolving the object specifier.
  \*/
  getElements(): DataMergeField[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler callback.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates source text that, when run, evaluates to the DataMergeField.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for data merge fields.
  \*/
  declare class DataMergeFields {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the DataMergeField by supplied index.
- @param index Index value.
  \*/
  [index: number]: DataMergeField

/\*\*

- Retrieves any DataMergeField from the collection.
  \*/
  anyItem(): DataMergeField

/\*\*

- Reports how many elements DataMergeField contains.
  \*/
  count(): number

/\*\*

- Retrieves all DataMergeField objects from the collection.
  \*/
  everyItem(): DataMergeField[]

/\*\*

- Retrieves the first DataMergeField from the collection.
  \*/
  firstItem(): DataMergeField

/\*\*

- Retrieves the DataMergeField by supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): DataMergeField

/\*\*

- Retrieves DataMergeFields across the supplied range.
- @param from Range start, supplied as DataMergeField, index, or name.
- @param to Range end, supplied as DataMergeField, index, or name.
  \*/
  itemByRange(from: DataMergeField | number | string, to: DataMergeField | number | string): DataMergeField[]

/\*\*

- Retrieves the last DataMergeField from the collection.
  \*/
  lastItem(): DataMergeField

/\*\*

- Retrieves the middle DataMergeField from the collection.
  \*/
  middleItem(): DataMergeField

/\*\*

- Retrieves the DataMergeField after the supplied DataMergeField in the collection.
- @param obj Existing DataMergeField immediately before the desired DataMergeField.
  \*/
  nextItem(obj: DataMergeField): DataMergeField

/\*\*

- Retrieves the DataMergeField immediately before the supplied index.
- @param obj Index for the member immediately after the desired DataMergeField.
  \*/
  previousItem(obj: DataMergeField): DataMergeField

/\*\*

- Creates source text that, when run, evaluates to the DataMergeField.
  \*/
  toSource(): string
  }

/\*\*

- Container object for a date merge QR code field.
  \*/
  declare class DataMergeQrcodePlaceholder {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Placeholder insertion uses this data merge field. Consult the data merge text placeholder and data merge image placeholder entries.
  \*/
  readonly field: DataMergeField

/\*\*

- Containing-object index for the DataMergeQrcodePlaceholder.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for the DataMergeQrcodePlaceholder (a a Document).
  \*/
  readonly parent: Document

/\*\*

- Page item that receives the placeholder.
  \*/
  readonly placeholderPageItem: PageItem

/\*\*

- Use this property to assign several properties together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Builds an array of object references by resolving the object specifier.
  \*/
  getElements(): DataMergeQrcodePlaceholder[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type value.
- @param handler Registered event handler callback.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates source text that, when run, evaluates to the DataMergeQrcodePlaceholder.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for data merge QR code placeholders.
  \*/
  declare class DataMergeQrcodePlaceholders {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the DataMergeQrcodePlaceholder by supplied index.
- @param index Index value.
  \*/
  [index: number]: DataMergeQrcodePlaceholder

/\*\*

- Creates a QR code placeholder for data merge.
- @param placeholder PageItem that receives the placeholder.
- @param field Data merge field used for insertion.
- @param withProperties Starting property values assigned to a created DataMergeQrcodePlaceholder
  \*/
  add(placeholder: PageItem, field: DataMergeField, withProperties: object): DataMergeQrcodePlaceholder

/\*\*

- Retrieves any DataMergeQrcodePlaceholder from the collection.
  \*/
  anyItem(): DataMergeQrcodePlaceholder

/\*\*

- Reports how many elements DataMergeQrcodePlaceholder contains.
  \*/
  count(): number

/\*\*

- Retrieves all DataMergeQrcodePlaceholder objects from the collection.
  \*/
  everyItem(): DataMergeQrcodePlaceholder[]

/\*\*

- Retrieves the first DataMergeQrcodePlaceholder from the collection.
  \*/
  firstItem(): DataMergeQrcodePlaceholder

/\*\*

- Retrieves the DataMergeQrcodePlaceholder by supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): DataMergeQrcodePlaceholder

/\*\*

- Retrieves DataMergeQrcodePlaceholders across the supplied range.
- @param from Range start, supplied as DataMergeQrcodePlaceholder, index, or name.
- @param to Range end, supplied as DataMergeQrcodePlaceholder, index, or name.
  \*/
  itemByRange(from: DataMergeQrcodePlaceholder | number | string, to: DataMergeQrcodePlaceholder | number | string): DataMergeQrcodePlaceholder[]

/\*\*

- Retrieves the last DataMergeQrcodePlaceholder from the collection.
  \*/
  lastItem(): DataMergeQrcodePlaceholder

/\*\*

- Retrieves the middle DataMergeQrcodePlaceholder from the collection.
  \*/
  middleItem(): DataMergeQrcodePlaceholder

/\*\*

- Retrieves the DataMergeQrcodePlaceholder after the supplied DataMergeQrcodePlaceholder in the collection.
- @param obj Existing DataMergeQrcodePlaceholder immediately before the desired DataMergeQrcodePlaceholder.
  \*/
  nextItem(obj: DataMergeQrcodePlaceholder): DataMergeQrcodePlaceholder

/\*\*

- Retrieves the DataMergeQrcodePlaceholder immediately before the supplied index.
- @param obj Index for the member immediately after the desired DataMergeQrcodePlaceholder.
  \*/
  previousItem(obj: DataMergeQrcodePlaceholder): DataMergeQrcodePlaceholder

/\*\*

- Creates source text that, when run, evaluates to the DataMergeQrcodePlaceholder.
  \*/
  toSource(): string
  }

/\*\*

- Story type choices.
  \*/
  declare enum StoryTypes {
  /\*\*
  - Identifies an endnote story.
    \*/
    `ENDNOTE_STORY` = 1701737332,

/\*\*

- Identifies an index story.
  \*/
  `INDEXING_STORY` = 1768190836,

/\*\*

- Identifies a regular text story.
  \*/
  `REGULAR_STORY` = 1919382388,

/\*\*

- Identifies a table of contents story.
  \*/
  `TOC_STORY` = 1953461108,
  }

/\*\*

- Story direction choices.
  \*/
  declare enum StoryDirectionOptions {
  /\*\*
  - Reading order goes left-to-right.
    \*/
    `LEFT_TO_RIGHT_DIRECTION` = 1278366308,

/\*\*

- Reading order goes right-to-left.
  \*/
  `RIGHT_TO_LEFT_DIRECTION` = 1379028068,

/\*\*

- Unknown direction value.
  \*/
  `UNKNOWN_DIRECTION` = 1433299812,
  }

/\*\*

- Style import choices.
  \*/
  declare enum ImportFormat {
  /\*\*
  - Imports cell style data.
    \*/
    `CELL_STYLES_FORMAT` = 1698919284,

/\*\*

- Imports character style data.
  \*/
  `CHARACTER_STYLES_FORMAT` = 1131565940,

/\*\*

- Imports object style data.
  \*/
  `OBJECT_STYLES_FORMAT` = 1332368244,

/\*\*

- Imports paragraph style data.
  \*/
  `PARAGRAPH_STYLES_FORMAT` = 1885885300,

/\*\*

- Imports stroke style data.
  \*/
  `STROKE_STYLES_FORMAT` = 1817408620,

/\*\*

- Imports table and cell style data.
  \*/
  `TABLE_AND_CELL_STYLES_FORMAT` = 1700021107,

/\*\*

- Imports table style data.
  \*/
  `TABLE_STYLES_FORMAT` = 1700033396,

/\*\*

- Imports character and paragraph style data.
  \*/
  `TEXT_STYLES_FORMAT` = 1668305780,

/\*\*

- Imports table of contents style data.
  \*/
  `TOC_STYLES_FORMAT` = 1415795572,
  }

/\*\*

- Choices that mark where nested-style application ends.
  \*/
  declare enum NestedStyleDelimiters {
  /\*\*
  - Delimiter selection starts with the first character or run that is not a zero-width marker. Examples of zero-width markers include anchors, index markers, XML tags, and similar items.
    \*/
    `ANY_CHARACTER` = 1380541539,

/\*\*

- Delimiter selection uses the paragraph opening word or words. Here, the first word is every character before the first space or white-space character.
  \*/
  `ANY_WORD` = 1380541559,

/\*\*

- Delimiter selection uses the first automatic page number.
  \*/
  `AUTO_PAGE_NUMBER` = 1396797550,

/\*\*

- Delimiter selection uses the first numeric character or run. Note: set digit count through repetition.
  \*/
  DIGITS = 1380541540,

/\*\*

- Uses the dropcap to delimit the nested style.
  \*/
  DROPCAP = 1380541507,

/\*\*

- Delimiter selection uses the first em space.
  \*/
  `EM_SPACE` = 1397058899,

/\*\*

- Delimiter selection uses the inserted end nested style here character.
  \*/
  `END_NESTED_STYLE` = 1396855379,

/\*\*

- Delimiter selection uses the first en space.
  \*/
  `EN_SPACE` = 1397059155,

/\*\*

- Delimiter selection uses the first forced line break.
  \*/
  `FORCED_LINE_BREAK` = 1397124194,

/\*\*

- Delimiter selection uses the first actual indent-to-here tab character. Note: the first indent-to-here tab stop is ignored. When the paragraph has no real indent-to-here tab character, the nested style continues to the paragraph end.
  \*/
  `INDENT_HERE_TAB` = 1397319796,

/\*\*

- Delimiter selection uses the first inline graphic.
  \*/
  `INLINE_GRAPHIC` = 1380541545,

/\*\*

- Delimiter selection uses the first alphabetic character or run. Note: set letter count through repetition.
  \*/
  LETTERS = 1380541548,

/\*\*

- Delimiter selection uses the first nonbreaking space.
  \*/
  `NONBREAKING_SPACE` = 1397645907,

/\*\*

- Repeats.
  \*/
  REPEAT = 1380545132,

/\*\*

- Delimiter selection uses the first section name marker.
  \*/
  `SECTION_MARKER` = 1400073805,
