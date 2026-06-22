# Indesign (part 41)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Retrieves the Article matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): Article

/\*\*

- Retrieves the Articles inside the requested range.
- @param from Range start: Article, index, or name.
- @param to Range end: Article, index, or name.
  \*/
  itemByRange(from: Article | number | string, to: Article | number | string): Article[]

/\*\*

- Supplies the last Article in this collection.
  \*/
  lastItem(): Article

/\*\*

- Supplies the middle Article in this collection.
  \*/
  middleItem(): Article

/\*\*

- Retrieves the Article positioned after the specified Article in this collection.
- @param obj Article located before the target Article.
  \*/
  nextItem(obj: Article): Article

/\*\*

- Retrieves the Article positioned before the specified index.
- @param obj Index for the Article located after the target Article.
  \*/
  previousItem(obj: Article): Article

/\*\*

- Creates executable source text that resolves back to the Article.
  \*/
  toSource(): string
  }

/\*\*

- Represents an ArticleMember.
  \*/
  declare class ArticleMember {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the ArticleMember.
  \*/
  readonly id: number

/\*\*

- Position index for the ArticleMember inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Underlying page item reference.
  \*/
  readonly itemRef: PageItem

/\*\*

- Parent object for the ArticleMember (a Article).
  \*/
  readonly parent: Article

/\*\*

- Object for applying several property values at once.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type string.
- @param handler Handler invoked for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): ArticleMember[]

/\*\*

- Relocates the ArticleMember to the requested location.
- @param to Location relative to a reference object or inside the containing object.
- @param reference Reference object; required when to is before or after.
  \*/
  move(to: LocationOptions, reference: ArticleMember): ArticleMember

/\*\*

- Removes the ArticleMember.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type string.
- @param handler Registered handler for the event.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the ArticleMember.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing article members.
  \*/
  declare class ArticleMembers {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the ArticleMember for the supplied index.
- @param index Index value.
  \*/
  [index: number]: ArticleMember

/\*\*

- Creates another member entry.
- @param itemRef Page item to add to the article.
- @param at Location relative to a reference object or inside the containing object.
- @param reference Reference object; required when to is before or after.
- @param withProperties Property values applied during ArticleMember creation.
  \*/
  add(itemRef: PageItem, at?: LocationOptions, reference?: ArticleMember, withProperties?: object): ArticleMember

/\*\*

- Supplies any ArticleMember from this collection.
  \*/
  anyItem(): ArticleMember

/\*\*

- Reports the element count for the ArticleMember.
  \*/
  count(): number

/\*\*

- Supplies all ArticleMember entries in this collection.
  \*/
  everyItem(): ArticleMember[]

/\*\*

- Supplies the first ArticleMember in this collection.
  \*/
  firstItem(): ArticleMember

/\*\*

- Retrieves the ArticleMember matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ArticleMember

/\*\*

- Retrieves the ArticleMember matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): ArticleMember

/\*\*

- Retrieves the ArticleMembers inside the requested range.
- @param from Range start: ArticleMember, index, or name.
- @param to Range end: ArticleMember, index, or name.
  \*/
  itemByRange(from: ArticleMember | number | string, to: ArticleMember | number | string): ArticleMember[]

/\*\*

- Supplies the last ArticleMember in this collection.
  \*/
  lastItem(): ArticleMember

/\*\*

- Supplies the middle ArticleMember in this collection.
  \*/
  middleItem(): ArticleMember

/\*\*

- Retrieves the ArticleMember positioned after the specified ArticleMember in this collection.
- @param obj ArticleMember located before the target ArticleMember.
  \*/
  nextItem(obj: ArticleMember): ArticleMember

/\*\*

- Retrieves the ArticleMember positioned before the specified index.
- @param obj Index for the ArticleMember located after the target ArticleMember.
  \*/
  previousItem(obj: ArticleMember): ArticleMember

/\*\*

- Creates executable source text that resolves back to the ArticleMember.
  \*/
  toSource(): string
  }

/\*\*

- Group member included within an article.
  \*/
  declare class ArticleChild {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the ArticleChild.
  \*/
  readonly id: number

/\*\*

- Position index for the ArticleChild inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Underlying page item reference.
  \*/
  readonly itemRef: PageItem

/\*\*

- Parent object for the ArticleChild (a Group).
  \*/
  readonly parent: Group

/\*\*

- Object for applying several property values at once.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type string.
- @param handler Handler invoked for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): ArticleChild[]

/\*\*

- Relocates the ArticleChild to the requested location.
- @param to Location relative to a reference object or inside the containing object.
- @param reference Reference object; required when to is before or after.
  \*/
  move(to: LocationOptions, reference: ArticleChild): ArticleChild

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type string.
- @param handler Registered handler for the event.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the ArticleChild.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing group items that are also part of an article.
  \*/
  declare class ArticleChildren {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the ArticleChild for the supplied index.
- @param index Index value.
  \*/
  [index: number]: ArticleChild

/\*\*

- Supplies any ArticleChild from this collection.
  \*/
  anyItem(): ArticleChild

/\*\*

- Reports the element count for the ArticleChild.
  \*/
  count(): number

/\*\*

- Supplies all ArticleChild entries in this collection.
  \*/
  everyItem(): ArticleChild[]

/\*\*

- Supplies the first ArticleChild in this collection.
  \*/
  firstItem(): ArticleChild

/\*\*

- Retrieves the ArticleChild matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ArticleChild

/\*\*

- Retrieves the ArticleChild matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): ArticleChild

/\*\*

- Retrieves the ArticleChildren inside the requested range.
- @param from Range start: ArticleChild, index, or name.
- @param to Range end: ArticleChild, index, or name.
  \*/
  itemByRange(from: ArticleChild | number | string, to: ArticleChild | number | string): ArticleChild[]

/\*\*

- Supplies the last ArticleChild in this collection.
  \*/
  lastItem(): ArticleChild

/\*\*

- Supplies the middle ArticleChild in this collection.
  \*/
  middleItem(): ArticleChild

/\*\*

- Retrieves the ArticleChild positioned after the specified ArticleChild in this collection.
- @param obj ArticleChild located before the target ArticleChild.
  \*/
  nextItem(obj: ArticleChild): ArticleChild

/\*\*

- Retrieves the ArticleChild positioned before the specified index.
- @param obj Index for the ArticleChild located after the target ArticleChild.
  \*/
  previousItem(obj: ArticleChild): ArticleChild

/\*\*

- Creates executable source text that resolves back to the ArticleChild.
  \*/
  toSource(): string
  }

/\*\*

- Embedded HTML content.
  \*/
  declare class HtmlItem extends PageItem {
  /\*\*
  - Indicates whether this HTML resizes with parent div changes or keeps fixed dimensions.
    \*/
    fixedDimensions: boolean

/\*\*

- Embedded HTML source text.
  \*/
  htmlContent: string
  }

/\*\*

- Collection containing embedded HTML page items.
  \*/
  declare class HtmlItems {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the HtmlItem for the supplied index.
- @param index Index value.
  \*/
  [index: number]: HtmlItem

/\*\*

- Creates another HtmlItem.
- @param layer Layer that will receive the new HtmlItem.
- @param at Insertion location for the HtmlItem, relative to the reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during HtmlItem creation.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): HtmlItem

/\*\*

- Supplies any HtmlItem from this collection.
  \*/
  anyItem(): HtmlItem

/\*\*

- Reports the element count for the HtmlItem.
  \*/
  count(): number

/\*\*

- Supplies all HtmlItem entries in this collection.
  \*/
  everyItem(): HtmlItem[]

/\*\*

- Supplies the first HtmlItem in this collection.
  \*/
  firstItem(): HtmlItem

/\*\*

- Retrieves the HtmlItem matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): HtmlItem

/\*\*

- Retrieves the HtmlItem matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): HtmlItem

/\*\*

- Retrieves the HtmlItem matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): HtmlItem

/\*\*

- Retrieves the HtmlItems inside the requested range.
- @param from Range start: HtmlItem, index, or name.
- @param to Range end: HtmlItem, index, or name.
  \*/
  itemByRange(from: HtmlItem | number | string, to: HtmlItem | number | string): HtmlItem[]

/\*\*

- Supplies the last HtmlItem in this collection.
  \*/
  lastItem(): HtmlItem

/\*\*

- Supplies the middle HtmlItem in this collection.
  \*/
  middleItem(): HtmlItem

/\*\*

- Retrieves the HtmlItem positioned after the specified HtmlItem in this collection.
- @param obj HtmlItem located before the target HtmlItem.
  \*/
  nextItem(obj: HtmlItem): HtmlItem

/\*\*

- Retrieves the HtmlItem positioned before the specified index.
- @param obj Index for the HtmlItem located after the target HtmlItem.
  \*/
  previousItem(obj: HtmlItem): HtmlItem

/\*\*

- Creates executable source text that resolves back to the HtmlItem.
  \*/
  toSource(): string
  }

/\*\*

- Represents an object library.
  \*/
  declare class Library {
  /\*\*
  - Collection containing object library assets.
    \*/
    readonly assets: Assets

/\*\*

- Panel associated with this object.
  \*/
  readonly associatedPanel: Panel

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Full file path.
  \*/
  readonly filePath: File

/\*\*

- Full path for the Library, including the Library name.
  \*/
  readonly fullName: File

/\*\*

- Position index for the Library inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name assigned to the Library.
  \*/
  readonly name: string

/\*\*

- Parent object for the Library (a Application).
  \*/
  readonly parent: Application

/\*\*

- Object for applying several property values at once.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type string.
- @param handler Handler invoked for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Closes this Library.
  \*/
  close(): void

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): Library[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type string.
- @param handler Registered handler for the event.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Puts the supplied object into the library.
- @param using Page item(s) intended for storage.
- @param withProperties Starting property values for the created Library
  \*/
  store(using: PageItem[] | Movies | Sounds | Graphics | XMLElements, withProperties: object): Asset

/\*\*

- Builds source text that evaluates back to this Library.
  \*/
  toSource(): string

/\*\*

- Provides this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Object-library collection type.
  \*/
  declare class Libraries {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Library by index.
- @param index Index value.
  \*/
  [index: number]: Library

/\*\*

- Adds an object libary.
- @param fullName Path and file name for the library.
- @param withProperties Starting property values for the created Library
  \*/
  add(fullName: File, withProperties: object): Library

/\*\*

- Supplies any Library from this collection.
  \*/
  anyItem(): Library

/\*\*

- Reports how many elements the Library contains.
  \*/
  count(): number

/\*\*

- Supplies all Library entries from the collection.
  \*/
  everyItem(): Library[]

/\*\*

- Supplies the collection's initial Library.
  \*/
  firstItem(): Library

/\*\*

- Locates a Library by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Library

/\*\*

- Locates a Library by name.
- @param name Name value.
  \*/
  itemByName(name: string): Library

/\*\*

- Supplies Libraries from the requested range.
- @param from Library, index, or name that starts the range.
- @param to Library, index, or name that ends the range.
  \*/
  itemByRange(from: Library | number | string, to: Library | number | string): Library[]

/\*\*

- Supplies the final Library in the collection.
  \*/
  lastItem(): Library

/\*\*

- Supplies the central Library in the collection.
  \*/
  middleItem(): Library

/\*\*

- Gets the Library positioned after the given Library.
- @param obj Library immediately before the desired one.
  \*/
  nextItem(obj: Library): Library

/\*\*

- Gets the Library positioned before the given index.
- @param obj Index of the Library that comes after the desired one.
  \*/
  previousItem(obj: Library): Library

/\*\*

- Builds source text that evaluates back to this Library.
  \*/
  toSource(): string
  }

/\*\*

- Asset stored in an object library.
  \*/
  declare class Asset {
  /\*\*
  - Object-library asset kind.
    \*/
    assetType: AssetType

/\*\*

- Creation timestamp for the Asset.
  \*/
  readonly date: Date

/\*\*

- Asset description text.
  \*/
  description: string

/\*\*

- Event-listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Unique Asset ID.
  \*/
  readonly id: number

/\*\*

- Asset index inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- Asset name.
  \*/
  name: string

/\*\*

- Asset parent, which is a Library.
  \*/
  readonly parent: Library

/\*\*

- Batch assignment property for multiple settings.
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

- Reads the label value stored for the given key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the specifier into object-reference array form.
  \*/
  getElements(): Asset[]

/\*\*

- Writes a keyed label value.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Inserts the asset into the target document or text object.
- @param on Document or text object that receives the asset.
  \*/
  placeAsset(on: Document | Text): any[]

/\*\*

- Removes this Asset.
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

- Makes this object selected.
- @param existingSelection How this Asset selection combines with objects already selected.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Builds source text that evaluates back to this Asset.
  \*/
  toSource(): string

/\*\*

- Provides this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Object-library asset collection type.
  \*/
  declare class Assets {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Looks up an Asset by index.
- @param index Index value.
  \*/
  [index: number]: Asset

/\*\*

- Supplies any Asset from this collection.
  \*/
  anyItem(): Asset

/\*\*

- Reports how many elements the Asset contains.
  \*/
  count(): number

/\*\*

- Supplies all Asset entries from the collection.
  \*/
  everyItem(): Asset[]

/\*\*

- Supplies the collection's initial Asset.
  \*/
  firstItem(): Asset

/\*\*

- Locates an Asset by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Asset

/\*\*

- Locates an Asset by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Asset

/\*\*

- Locates an Asset by name.
- @param name Name value.
  \*/
  itemByName(name: string): Asset

/\*\*

- Supplies Assets from the requested range.
- @param from Asset, index, or name that starts the range.
- @param to Asset, index, or name that ends the range.
  \*/
  itemByRange(from: Asset | number | string, to: Asset | number | string): Asset[]

/\*\*

- Supplies the final Asset in the collection.
  \*/
  lastItem(): Asset

/\*\*

- Supplies the central Asset in the collection.
  \*/
  middleItem(): Asset

/\*\*

- Gets the Asset positioned after the given Asset.
- @param obj Asset immediately before the desired one.
  \*/
  nextItem(obj: Asset): Asset

/\*\*

- Gets the Asset positioned before the given index.
- @param obj Index of the Asset that comes after the desired one.
  \*/
  previousItem(obj: Asset): Asset

/\*\*

- Builds source text that evaluates back to this Asset.
  \*/
  toSource(): string
  }

/\*\*

- Reference to a placed file.
  \*/
  declare class Link {
  /\*\*
  - Fires when a Link property value changes. The event bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_ATTRIBUTE_CHANGED`: string

/\*\*

- Fires after deletion of a Link. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_DELETE`: string

/\*\*

- Fires after embedding of a Link. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_EMBED`: string

/\*\*

- Fires after a Link moves between objects. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_MOVE`: string

/\*\*

- Fires after creation of a Link. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_NEW`: string

/\*\*

- Fires after a Link is unembedded. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_UNEMBED`: string

/\*\*

- Fires after a Link update. The event bubbles and cannot be canceled.
  \*/
  static readonly `AFTER_UPDATE`: string

/\*\*

- Fires before deletion of a Link. The event bubbles and can be canceled.
  \*/
  static readonly `BEFORE_DELETE`: string

/\*\*

- Fires before embedding of a Link. The event bubbles and can be canceled.
  \*/
  static readonly `BEFORE_EMBED`: string

/\*\*

- Fires before a Link moves between objects. The event bubbles and can be canceled.
  \*/
  static readonly `BEFORE_MOVE`: string

/\*\*

- Fires before a Link is unembedded. The event bubbles and can be canceled.
  \*/
  static readonly `BEFORE_UNEMBED`: string

/\*\*

- Fires before a Link update. The event bubbles and can be canceled.
  \*/
  static readonly `BEFORE_UPDATE`: string

/\*\*

- Asset ID for the linked object.
  \*/
  readonly assetID: string

/\*\*

- Asset URL for the linked object.
  \*/
  readonly assetURL: string
