# Indesign (part 22)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Exports page ranges.
  \*/
  `EXPORT_PAGE_RANGE` = 1700951410,
  }

/\*\*

- EPUB navigation style choices.
  \*/
  declare enum EpubNavigationStyle {
  /\*\*
  - Builds navigation from bookmarks.
    \*/
    `BOOKMARKS_NAVIGATION` = 1700949622,

/\*\*

- Builds navigation from file names.
  \*/
  `FILENAME_NAVIGATION` = 1701211766,

/\*\*

- Omits navigation.
  \*/
  `NO_NAVIGATION` = 1701736054,

/\*\*

- Builds navigation from TOC style.
  \*/
  `TOC_STYLE_NAVIGATION` = 1702129270,
  }

/\*\*

- Spread-control choices for fixed layout EPub.
  \*/
  declare enum EpubFixedLayoutSpreadControl {
  /\*\*
  - Uses no spreads.
    \*/
    `NO_SPREADS` = 1702063727,

/\*\*

- Uses physical spreads.
  \*/
  `PHYSICAL_SPREADS` = 1701865593,

/\*\*

- Bases spreads on the document.
  \*/
  `SPREADS_BASED_ON_DOC` = 1700949860,

/\*\*

- Uses synthetic spreads.
  \*/
  `SYNTHETIC_SPREADS` = 1702066542,
  }

/\*\*

- Publish format choices.
  \*/
  declare enum PublishFormatEnum {
  /\*\*
  - Publishes by pages.
    \*/
    `PUBLISH_BY_PAGES` = 1700950134,

/\*\*

- Publishes by spread.
  \*/
  `PUBLISH_BY_SPREAD` = 1700950902,
  }

/\*\*

- Cover image choices for publish export.
  \*/
  declare enum PublishCoverEnum {
  /\*\*
  - Rasterizes the selected page as cover image.
    \*/
    `CHOSEN_PAGE` = 1701013072,

/\*\*

- Uses an external image as the cover image.
  \*/
  `EXTERNAL_IMAGE` = 1700952169,

/\*\*

- Rasterizes the first page as the cover image.
  \*/
  `FIRST_PAGE` = 1700947536,
  }

/\*\*

- Style mapping type choices.
  \*/
  declare enum MapType {
  /\*\*
  - Defines a group-to-group mapping rule.
    \*/
    `GROUP_MAPPING_RULE` = 1735681906,

/\*\*

- Defines a group-to-style mapping rule.
  \*/
  `GROUP_TO_STYLE_MAPPING_RULE` = 1735684978,

/\*\*

- Defines a style-to-style mapping rule.
  \*/
  `STYLE_MAPPING_RULE` = 1937011570,

/\*\*

- Defines a style-to-group mapping rule.
  \*/
  `STYLE_TO_GROUP_MAPPING_RULE` = 1937008498,
  }

/\*\*

- Paragraph direction choices.
  \*/
  declare enum ParagraphDirectionOptions {
  /\*\*
  - Sets left to right paragraph direction.
    \*/
    `LEFT_TO_RIGHT_DIRECTION` = 1278366308,

/\*\*

- Sets right to left paragraph direction.
  \*/
  `RIGHT_TO_LEFT_DIRECTION` = 1379028068,
  }

/\*\*

- Paragraph justification choices.
  \*/
  declare enum ParagraphJustificationOptions {
  /\*\*
  - Uses Arabic justification.
    \*/
    `ARABIC_JUSTIFICATION` = 1886019954,

/\*\*

- Uses default justification.
  \*/
  `DEFAULT_JUSTIFICATION` = 1886020709,

/\*\*

- Uses Naskh justification.
  \*/
  `NASKH_JUSTIFICATION` = 1886023265,

/\*\*

- Uses Kashidas. Choose Naskh justification as well when using Justifcation Alternates.
  \*/
  `NASKH_KASHIDA_JUSTIFICATION` = 1886023275,

/\*\*

- Uses Fractional Kashidas. Choose Naskh justification as well when using Justifcation Alternates.
  \*/
  `NASKH_KASHIDA_JUSTIFICATION_FRAC` = 1886021227,

/\*\*

- Uses Kashidas without Stretched Connections.
  \*/
  `NASKH_TATWEEL_JUSTIFICATION` = 1886023284,

/\*\*

- Uses Fractional Kashidas without Stretched Connections.
  \*/
  `NASKH_TATWEEL_JUSTIFICATION_FRAC` = 1886021236,
  }

/\*\*

- Character direction choices.
  \*/
  declare enum CharacterDirectionOptions {
  /\*\*
  - Uses default direction.
    \*/
    `DEFAULT_DIRECTION` = 1147496036,

/\*\*

- Uses left to right direction.
  \*/
  `LEFT_TO_RIGHT_DIRECTION` = 1278366308,

/\*\*

- Uses right to left direction.
  \*/
  `RIGHT_TO_LEFT_DIRECTION` = 1379028068,
  }

/\*\*

- Digit type choices.
  \*/
  declare enum DigitsTypeOptions {
  /\*\*
  - Uses Arabic digits.
    \*/
    `ARABIC_DIGITS` = 1684627826,

/\*\*

- Uses Bengali digits.
  \*/
  `BENGALI_DIGITS` = 1684628069,

/\*\*

- Uses Burmese digits.
  \*/
  `BURMESE_DIGITS` = 1684628085,

/\*\*

- Uses default digits.
  \*/
  `DEFAULT_DIGITS` = 1684628581,

/\*\*

- Uses Devanagari digits.
  \*/
  `DEVANAGARI_DIGITS` = 1684628598,

/\*\*

- Uses Farsi digits.
  \*/
  `FARSI_DIGITS` = 1684629089,

/\*\*

- Uses Full Farsi digits.
  \*/
  `FULL_FARSI_DIGITS` = 1684629094,

/\*\*

- Uses Gujarati digits.
  \*/
  `GUJARATI_DIGITS` = 1684629354,

/\*\*

- Uses Gurmukhi digits.
  \*/
  `GURMUKHI_DIGITS` = 1684629357,

/\*\*

- Uses Hindi digits.
  \*/
  `HINDI_DIGITS` = 1684629609,

/\*\*

- Uses Kannada digits.
  \*/
  `KANNADA_DIGITS` = 1684630369,

/\*\*

- Uses Khmer digits.
  \*/
  `KHMER_DIGITS` = 1684630376,

/\*\*

- Uses Lao digits.
  \*/
  `LAO_DIGITS` = 1684630625,

/\*\*

- Uses Malayalam digits.
  \*/
  `MALAYALAM_DIGITS` = 1684630881,

/\*\*

- Uses native digits.
  \*/
  `NATIVE_DIGITS` = 1684631137,

/\*\*

- Uses Oriya digits.
  \*/
  `ORIYA_DIGITS` = 1684631410,

/\*\*

- Uses Tamil digits.
  \*/
  `TAMIL_DIGITS` = 1684632673,

/\*\*

- Uses Telugu digits.
  \*/
  `TELUGU_DIGITS` = 1684632677,

/\*\*

- Uses Thai digits.
  \*/
  `THAI_DIGITS` = 1684632680,

/\*\*

- Uses Tibetan digits.
  \*/
  `TIBETAN_DIGITS` = 1684632681,
  }

/\*\*

- Kashidas choices.
  \*/
  declare enum KashidasOptions {
  /\*\*
  - Uses default kashidas.
    \*/
    `DEFAULT_KASHIDAS` = 1801544805,

/\*\*

- Turns Kashidas off.
  \*/
  `KASHIDAS_OFF` = 1801547622,
  }

/\*\*

- Diacritic position choices.
  \*/
  declare enum DiacriticPositionOptions {
  /\*\*
  - Uses default position.
    \*/
    `DEFAULT_POSITION` = 1685090150,

/\*\*

- Uses loose position.
  \*/
  `LOOSE_POSITION` = 1685089391,

/\*\*

- Uses medium position.
  \*/
  `MEDIUM_POSITION` = 1685089637,

/\*\*

- Uses OpenType position.
  \*/
  `OPENTYPE_POSITION` = 1685090164,

/\*\*

- Uses OpenType position from baseline.
  \*/
  `OPENTYPE_POSITION_FROM_BASELINE` = 1685090146,

/\*\*

- Uses tight position.
  \*/
  `TIGHT_POSITION` = 1685091433,
  }

/\*\*

- Table direction choices.
  \*/
  declare enum TableDirectionOptions {
  /\*\*
  - Sets table direction left to right.
    \*/
    `LEFT_TO_RIGHT_DIRECTION` = 1278366308,

/\*\*

- Sets table direction right to left.
  \*/
  `RIGHT_TO_LEFT_DIRECTION` = 1379028068,
  }

/\*\*

- Represents a hyperlink.
  \*/
  declare class Hyperlink {
  /\*\*
  - Border color for the hyperlink.
    \*/
    borderColor: [number, number, number] | UIColors

/\*\*

- Border style for the hyperlink.
  \*/
  borderStyle: HyperlinkAppearanceStyle

/\*\*

- Text, page, or URL target of the hyperlink.
  \*/
  destination: HyperlinkTextDestination | HyperlinkPageDestination | HyperlinkExternalPageDestination | HyperlinkURLDestination | ParagraphDestination

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- True indicates the hyperlink is hidden.
  \*/
  readonly hidden: boolean

/\*\*

- Highlight style for the hyperlink.
  \*/
  highlight: HyperlinkAppearanceHighlight

/\*\*

- Unique ID assigned to the Hyperlink.
  \*/
  readonly id: number

/\*\*

- Position of the Hyperlink inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued user label.
  \*/
  label: string

/\*\*

- Name assigned to the Hyperlink.
  \*/
  name: string

/\*\*

- Parent Document for the Hyperlink.
  \*/
  readonly parent: Document

/\*\*

- Object for setting several properties together.
  \*/
  properties: object

/\*\*

- Text or page item used as the hyperlink source.
  \*/
  source: HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource

/\*\*

- True indicates the Hyperlink is visible.
  \*/
  visible: boolean

/\*\*

- Stroke weight used for the hyperlink border.
  \*/
  width: HyperlinkAppearanceWidth

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for a key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references.
  \*/
  getElements(): Hyperlink[]

/\*\*

- Stores a label value for a key.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the Hyperlink.
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

- Navigates to the hyperlink destination.
  \*/
  showDestination(): void

/\*\*

- Navigates to the hyperlink source.
  \*/
  showSource(): void

/\*\*

- Produces executable source that returns the Hyperlink.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for hyperlinks.
  \*/
  declare class Hyperlinks {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Hyperlink at the specified index.
- @param index Index to retrieve.
  \*/
  [index: number]: Hyperlink

/\*\*

- Creates a hyperlink.
- @param hyperlinkSource Hyperlinked object.
- @param hyperlinkDestination Hyperlink target; may be HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination, ParagraphDestination, or an ordered array with fileName:String, then volumn:String, then directoryId:Long Integer, then dataLinkClassId:Long Integer, then destinationUid:Long Integer.
- @param withProperties Starting property values for this Hyperlink instance.
  \*/
  add(hyperlinkSource: HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource, hyperlinkDestination: any, withProperties: object): Hyperlink

/\*\*

- Gets any Hyperlink from the collection.
  \*/
  anyItem(): Hyperlink

/\*\*

- Counts the elements in the Hyperlink collection.
  \*/
  count(): number

/\*\*

- Gets every Hyperlink in the collection.
  \*/
  everyItem(): Hyperlink[]

/\*\*

- Gets the first Hyperlink in the collection.
  \*/
  firstItem(): Hyperlink

/\*\*

- Gets the Hyperlink by index or name.
- @param index Index or name to retrieve.
  \*/
  item(index: number | string): Hyperlink

/\*\*

- Gets the Hyperlink by ID.
- @param id ID to retrieve.
  \*/
  itemByID(id: number): Hyperlink

/\*\*

- Gets the Hyperlink by name.
- @param name Name to retrieve.
  \*/
  itemByName(name: string): Hyperlink

/\*\*

- Gets Hyperlinks from a specified range.
- @param from Hyperlink, index, or name where the range starts.
- @param to Hyperlink, index, or name where the range ends.
  \*/
  itemByRange(from: Hyperlink | number | string, to: Hyperlink | number | string): Hyperlink[]

/\*\*

- Gets the last Hyperlink in the collection.
  \*/
  lastItem(): Hyperlink

/\*\*

- Gets the middle Hyperlink in the collection.
  \*/
  middleItem(): Hyperlink

/\*\*

- Gets the Hyperlink whose index comes after the supplied Hyperlink.
- @param obj Hyperlink immediately before the desired Hyperlink.
  \*/
  nextItem(obj: Hyperlink): Hyperlink

/\*\*

- Gets the Hyperlink whose index comes before the supplied index.
- @param obj Index of the Hyperlink immediately after the desired Hyperlink.
  \*/
  previousItem(obj: Hyperlink): Hyperlink

/\*\*

- Produces executable source that returns the Hyperlink.
  \*/
  toSource(): string
  }

/\*\*

- Represents a bookmark.
  \*/
  declare class Bookmark {
  /\*\*
  - Bookmark collection belonging to this bookmark.
    \*/
    readonly bookmarks: Bookmarks

/\*\*

- Destination used by the bookmark.
  \*/
  readonly destination: HyperlinkTextDestination | HyperlinkPageDestination | HyperlinkExternalPageDestination | Page

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the Bookmark.
  \*/
  readonly id: number

/\*\*

- Bookmark indent level.
  \*/
  readonly indent: number

/\*\*

- Position of the Bookmark inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued user label.
  \*/
  label: string

/\*\*

- Name assigned to the Bookmark.
  \*/
  name: string

/\*\*

- Parent Document or Bookmark for this Bookmark.
  \*/
  readonly parent: any

/\*\*

- Object for setting several properties together.
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

- Reads the label value stored for a key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references.
  \*/
  getElements(): Bookmark[]

/\*\*

- Stores a label value for a key.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Moves the bookmark to a specified location.
- @param to Bookmark location relative to the reference object or inside the containing object.
- @param reference Reference object; supply it when to names before or after.
  \*/
  move(to?: LocationOptions, reference?: Bookmark | Document): Bookmark

/\*\*

- Removes the Bookmark.
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

- Navigates to the bookmark.
  \*/
  showBookmark(): void

/\*\*

- Produces executable source that returns the Bookmark.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for bookmarks.
  \*/
  declare class Bookmarks {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Bookmark at the specified index.
- @param index Index to retrieve.
  \*/
  [index: number]: Bookmark

/\*\*

- Creates a bookmark.
- @param destination Bookmark destination.
- @param withProperties Starting property values for the new Bookmark.
  \*/
  add(destination: HyperlinkTextDestination | HyperlinkPageDestination | HyperlinkExternalPageDestination | Page, withProperties: object): Bookmark

/\*\*

- Gets any Bookmark from the collection.
  \*/
  anyItem(): Bookmark

/\*\*

- Counts the elements in the Bookmark collection.
  \*/
  count(): number

/\*\*

- Gets every Bookmark in the collection.
  \*/
  everyItem(): Bookmark[]

/\*\*

- Gets the first Bookmark in the collection.
  \*/
  firstItem(): Bookmark

/\*\*

- Gets the Bookmark by index or name.
- @param index Index or name to retrieve.
  \*/
  item(index: number | string): Bookmark

/\*\*

- Gets the Bookmark by ID.
- @param id ID to retrieve.
  \*/
  itemByID(id: number): Bookmark

/\*\*

- Gets the Bookmark by name.
- @param name Name to retrieve.
  \*/
  itemByName(name: string): Bookmark

/\*\*

- Gets Bookmarks from a specified range.
- @param from Bookmark, index, or name where the range starts.
- @param to Bookmark, index, or name where the range ends.
  \*/
  itemByRange(from: Bookmark | number | string, to: Bookmark | number | string): Bookmark[]

/\*\*

- Gets the last Bookmark in the collection.
  \*/
  lastItem(): Bookmark

/\*\*

- Gets the middle Bookmark in the collection.
  \*/
  middleItem(): Bookmark

/\*\*

- Gets the Bookmark whose index comes after the supplied Bookmark.
- @param obj Bookmark immediately before the desired Bookmark.
  \*/
  nextItem(obj: Bookmark): Bookmark

/\*\*

- Gets the Bookmark whose index comes before the supplied index.
- @param obj Index of the Bookmark immediately after the desired Bookmark.
  \*/
  previousItem(obj: Bookmark): Bookmark

/\*\*

- Produces executable source that returns the Bookmark.
  \*/
  toSource(): string
  }

/\*\*

- Represents a hyperlinked page item.
  \*/
  declare class HyperlinkPageItemSource {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- True indicates the hyperlink is hidden.
  \*/
  readonly hidden: boolean

/\*\*

- Unique ID assigned to the HyperlinkPageItemSource.
  \*/
  readonly id: number

/\*\*

- Position of the HyperlinkPageItemSource inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued user label.
  \*/
  label: string

/\*\*

- Name assigned to the HyperlinkPageItemSource.
  \*/
  name: string

/\*\*

- Parent Document for the HyperlinkPageItemSource.
  \*/
  readonly parent: Document

/\*\*

- Object for setting several properties together.
  \*/
  properties: object

/\*\*

- Page item used as the hyperlink source.
  \*/
  sourcePageItem: PageItem

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for a key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references.
  \*/
  getElements(): HyperlinkPageItemSource[]

/\*\*

- Stores a label value for a key.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the HyperlinkPageItemSource.
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

- Navigates to the hyperlink source.
  \*/
  showSource(): void

/\*\*

- Produces executable source that returns the HyperlinkPageItemSource.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for hyperlink page item sources.
  \*/
  declare class HyperlinkPageItemSources {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the HyperlinkPageItemSource at the specified index.
- @param index Index to retrieve.
  \*/
  [index: number]: HyperlinkPageItemSource

/\*\*

- Creates a hyperlink page item source.
- @param source Page item to hyperlink.
- @param withProperties Starting property values for the new HyperlinkPageItemSource.
  \*/
  add(source: PageItem, withProperties: object): HyperlinkPageItemSource

/\*\*

- Gets any HyperlinkPageItemSource from the collection.
  \*/
  anyItem(): HyperlinkPageItemSource

/\*\*

- Counts the elements in the HyperlinkPageItemSource collection.
  \*/
  count(): number

/\*\*

- Gets every HyperlinkPageItemSource in the collection.
  \*/
  everyItem(): HyperlinkPageItemSource[]

/\*\*

- Gets the first HyperlinkPageItemSource in the collection.
  \*/
  firstItem(): HyperlinkPageItemSource

/\*\*

- Gets the HyperlinkPageItemSource by index or name.
- @param index Index or name to retrieve.
  \*/
  item(index: number | string): HyperlinkPageItemSource

/\*\*

- Gets the HyperlinkPageItemSource by ID.
- @param id ID to retrieve.
  \*/
  itemByID(id: number): HyperlinkPageItemSource

/\*\*

- Gets the HyperlinkPageItemSource by name.
- @param name Name to retrieve.
  \*/
  itemByName(name: string): HyperlinkPageItemSource
