# Indesign (part 86)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Removes this KinsokuTable object.
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

- Builds source text that resolves back to the KinsokuTable when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for kinsoku tables.
  \*/
  declare class KinsokuTables {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a KinsokuTable by index.
- @param index Index value.
  \*/
  [index: number]: KinsokuTable

/\*\*

- Adds a new kinsoku table.
- @param name Name for the new kinsoku table.
- @param withProperties Starting property values for the new KinsokuTable.
  \*/
  add(name: string, withProperties: object): KinsokuTable

/\*\*

- Selects an arbitrary KinsokuTable from this collection.
  \*/
  anyItem(): KinsokuTable

/\*\*

- Counts elements on the KinsokuTable collection.
  \*/
  count(): number

/\*\*

- Gets all KinsokuTable objects in this collection.
  \*/
  everyItem(): KinsokuTable[]

/\*\*

- Gets the initial KinsokuTable in this collection.
  \*/
  firstItem(): KinsokuTable

/\*\*

- Finds a KinsokuTable by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): KinsokuTable

/\*\*

- Finds a KinsokuTable by ID.
- @param id ID value.
  \*/
  itemByID(id: number): KinsokuTable

/\*\*

- Finds a KinsokuTable by name.
- @param name Name value.
  \*/
  itemByName(name: string): KinsokuTable

/\*\*

- Gets KinsokuTables spanning the supplied range.
- @param from KinsokuTable, index, or name at the range start.
- @param to KinsokuTable, index, or name at the range end.
  \*/
  itemByRange(from: KinsokuTable | number | string, to: KinsokuTable | number | string): KinsokuTable[]

/\*\*

- Gets the final KinsokuTable in this collection.
  \*/
  lastItem(): KinsokuTable

/\*\*

- Gets the central KinsokuTable in this collection.
  \*/
  middleItem(): KinsokuTable

/\*\*

- Gets the KinsokuTable positioned after the supplied KinsokuTable.
- @param obj KinsokuTable that comes before the wanted KinsokuTable.
  \*/
  nextItem(obj: KinsokuTable): KinsokuTable

/\*\*

- Gets the KinsokuTable positioned before the supplied index.
- @param obj Index belonging to the KinsokuTable after the wanted KinsokuTable.
  \*/
  previousItem(obj: KinsokuTable): KinsokuTable

/\*\*

- Builds source text that resolves back to the KinsokuTable when run.
  \*/
  toSource(): string
  }

/\*\*

- Mojikumi table object.
  \*/
  declare class MojikumiTable {
  /\*\*
  - Existing mojikumi set used as the basis for the new mojikumi set.
    \*/
    basedOnMojikumiSet: MojikumiTableDefaults

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the MojikumiTable.
  \*/
  readonly id: number

/\*\*

- Position of the MojikumiTable inside its parent object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- MojikumiTable name.
  \*/
  name: string

/\*\*

- Mojikumi aki override data. Return form: ordered array with targetMojikumiClass:Short Integer, sideMojikumiClass:Short Integer, sideIsAfterTarget:Boolean, minimum:Real, desired:Real, maximum:Real, compressionPriority:Short Integer, akiDoesNotFloat:Boolean.
  \*/
  overrideMojikumiAkiList: any[]

/\*\*

- Parent object for the MojikumiTable (a Document or Application).
  \*/
  readonly parent: any

/\*\*

- Property bundle for setting multiple values in one call.
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

- Gets the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier into object-reference results.
  \*/
  getElements(): MojikumiTable[]

/\*\*

- Stores a label value for the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this MojikumiTable object.
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

- Builds source text that resolves back to the MojikumiTable when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for mojikumi tables.
  \*/
  declare class MojikumiTables {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a MojikumiTable by index.
- @param index Index value.
  \*/
  [index: number]: MojikumiTable

/\*\*

- Adds a new mojikumi table.
- @param name Name for the new mojikumi table.
- @param withProperties Starting property values for the new MojikumiTable.
  \*/
  add(name: string, withProperties: object): MojikumiTable

/\*\*

- Selects an arbitrary MojikumiTable from this collection.
  \*/
  anyItem(): MojikumiTable

/\*\*

- Counts elements on the MojikumiTable collection.
  \*/
  count(): number

/\*\*

- Gets all MojikumiTable objects in this collection.
  \*/
  everyItem(): MojikumiTable[]

/\*\*

- Gets the initial MojikumiTable in this collection.
  \*/
  firstItem(): MojikumiTable

/\*\*

- Finds a MojikumiTable by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): MojikumiTable

/\*\*

- Finds a MojikumiTable by ID.
- @param id ID value.
  \*/
  itemByID(id: number): MojikumiTable

/\*\*

- Finds a MojikumiTable by name.
- @param name Name value.
  \*/
  itemByName(name: string): MojikumiTable

/\*\*

- Gets MojikumiTables spanning the supplied range.
- @param from MojikumiTable, index, or name at the range start.
- @param to MojikumiTable, index, or name at the range end.
  \*/
  itemByRange(from: MojikumiTable | number | string, to: MojikumiTable | number | string): MojikumiTable[]

/\*\*

- Gets the final MojikumiTable in this collection.
  \*/
  lastItem(): MojikumiTable

/\*\*

- Gets the central MojikumiTable in this collection.
  \*/
  middleItem(): MojikumiTable

/\*\*

- Gets the MojikumiTable positioned after the supplied MojikumiTable.
- @param obj MojikumiTable that comes before the wanted MojikumiTable.
  \*/
  nextItem(obj: MojikumiTable): MojikumiTable

/\*\*

- Gets the MojikumiTable positioned before the supplied index.
- @param obj Index belonging to the MojikumiTable after the wanted MojikumiTable.
  \*/
  previousItem(obj: MojikumiTable): MojikumiTable

/\*\*

- Builds source text that resolves back to the MojikumiTable when run.
  \*/
  toSource(): string
  }

/\*\*

- Hyphenation exception list object.
  \*/
  declare class HyphenationException {
  /\*\*
  - Words stored in the added hyphenation-exceptions list.
    \*/
    addedExceptions: string[]

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Position of the HyphenationException inside its parent object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- HyphenationException name.
  \*/
  readonly name: string

/\*\*

- Parent object for the HyphenationException (a Document).
  \*/
  readonly parent: Document

/\*\*

- Property bundle for setting multiple values in one call.
  \*/
  properties: object

/\*\*

- Words stored in the removed hyphenation-exceptions list.
  \*/
  removedExceptions: string[]

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Adds the supplied words to a hyphenation exceptions list.
- @param addedExceptions Words to add.
- @param removedList When true, place the words in removed exceptions; otherwise, store them with added exceptions.
  \*/
  addException(addedExceptions: string[], removedList?: boolean): void

/\*\*

- Resolves the object specifier into object-reference results.
  \*/
  getElements(): HyphenationException[]

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Removes the supplied words from a hyphenation exceptions list.
- @param removedExceptions Words to remove.
- @param removedList When true, delete from removed exceptions; otherwise, put the words under added exceptions.
  \*/
  removeException(removedExceptions: string[], removedList?: boolean): void

/\*\*

- Builds source text that resolves back to the HyphenationException when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for hyphenation exception lists.
  \*/
  declare class HyphenationExceptions {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a HyphenationException by index.
- @param index Index value.
  \*/
  [index: number]: HyphenationException

/\*\*

- Selects an arbitrary HyphenationException from this collection.
  \*/
  anyItem(): HyphenationException

/\*\*

- Counts elements on the HyphenationException collection.
  \*/
  count(): number

/\*\*

- Gets all HyphenationException objects in this collection.
  \*/
  everyItem(): HyphenationException[]

/\*\*

- Gets the initial HyphenationException in this collection.
  \*/
  firstItem(): HyphenationException

/\*\*

- Finds a HyphenationException by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): HyphenationException

/\*\*

- Finds a HyphenationException by name.
- @param name Name value.
  \*/
  itemByName(name: string): HyphenationException

/\*\*

- Gets HyphenationExceptions spanning the supplied range.
- @param from HyphenationException, index, or name at the range start.
- @param to HyphenationException, index, or name at the range end.
  \*/
  itemByRange(from: HyphenationException | number | string, to: HyphenationException | number | string): HyphenationException[]

/\*\*

- Gets the final HyphenationException in this collection.
  \*/
  lastItem(): HyphenationException

/\*\*

- Gets the central HyphenationException in this collection.
  \*/
  middleItem(): HyphenationException

/\*\*

- Gets the HyphenationException positioned after the supplied HyphenationException.
- @param obj HyphenationException that comes before the wanted HyphenationException.
  \*/
  nextItem(obj: HyphenationException): HyphenationException

/\*\*

- Gets the HyphenationException positioned before the supplied index.
- @param obj Index belonging to the HyphenationException after the wanted HyphenationException.
  \*/
  previousItem(obj: HyphenationException): HyphenationException

/\*\*

- Builds source text that resolves back to the HyphenationException when run.
  \*/
  toSource(): string
  }

/\*\*

- User dictionary object.
  \*/
  declare class UserDictionary {
  /\*\*
  - Words stored in the added user-dictionary list.
    \*/
    addedWords: string[]

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Position of the UserDictionary inside its parent object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- UserDictionary name.
  \*/
  readonly name: string

/\*\*

- Parent object for the UserDictionary (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bundle for setting multiple values in one call.
  \*/
  properties: object

/\*\*

- Words stored in the removed user-dictionary list.
  \*/
  removedWords: string[]

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Adds the supplied words to the chosen dictionary list.
- @param addedWords Words to add.
- @param removedList When true, place the words in removed words; otherwise, store them with added words.
  \*/
  addWord(addedWords: string[], removedList?: boolean): void

/\*\*

- Resolves the object specifier into object-reference results.
  \*/
  getElements(): UserDictionary[]

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Removes the supplied words from the chosen dictionary list.
- @param removedWords Words to remove.
- @param removedList When true, delete the words from the removed words list; when false or omitted, delete them from the added words list.
  \*/
  removeWord(removedWords: string[], removedList?: boolean): void

/\*\*

- Builds source text that resolves back to the UserDictionary when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for user dictionaries.
  \*/
  declare class UserDictionaries {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a UserDictionary by index.
- @param index Index value.
  \*/
  [index: number]: UserDictionary

/\*\*

- Selects an arbitrary UserDictionary from this collection.
  \*/
  anyItem(): UserDictionary

/\*\*

- Counts elements on the UserDictionary collection.
  \*/
  count(): number

/\*\*

- Gets all UserDictionary objects in this collection.
  \*/
  everyItem(): UserDictionary[]

/\*\*

- Gets the initial UserDictionary in this collection.
  \*/
  firstItem(): UserDictionary

/\*\*

- Finds a UserDictionary by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): UserDictionary

/\*\*

- Finds a UserDictionary by name.
- @param name Name value.
  \*/
  itemByName(name: string): UserDictionary

/\*\*

- Gets UserDictionaries spanning the supplied range.
- @param from UserDictionary, index, or name at the range start.
- @param to UserDictionary, index, or name at the range end.
  \*/
  itemByRange(from: UserDictionary | number | string, to: UserDictionary | number | string): UserDictionary[]

/\*\*

- Gets the final UserDictionary in this collection.
  \*/
  lastItem(): UserDictionary

/\*\*

- Gets the central UserDictionary in this collection.
  \*/
  middleItem(): UserDictionary

/\*\*

- Gets the UserDictionary positioned after the supplied UserDictionary.
- @param obj UserDictionary that comes before the wanted UserDictionary.
  \*/
  nextItem(obj: UserDictionary): UserDictionary

/\*\*

- Gets the UserDictionary positioned before the supplied index.
- @param obj Index belonging to the UserDictionary after the wanted UserDictionary.
  \*/
  previousItem(obj: UserDictionary): UserDictionary

/\*\*

- Builds source text that resolves back to the UserDictionary when run.
  \*/
  toSource(): string
  }

/\*\*

- Auto-correct table object.
  \*/
  declare class AutoCorrectTable {
  /\*\*
  - Auto-correct word-pair entries: a misspelled word paired with its correction. Can return: Array of Arrays of 2 Strings.
    \*/
    autoCorrectWordPairList: any[]

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Position of the AutoCorrectTable inside its parent object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- AutoCorrectTable name.
  \*/
  readonly name: string

/\*\*

- Parent object for the AutoCorrectTable (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bundle for setting multiple values in one call.
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

- Resolves the object specifier into object-reference results.
  \*/
  getElements(): AutoCorrectTable[]

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that resolves back to the AutoCorrectTable when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for auto-correct tables.
  \*/
  declare class AutoCorrectTables {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up an AutoCorrectTable by index.
- @param index Index value.
  \*/
  [index: number]: AutoCorrectTable

/\*\*

- Selects an arbitrary AutoCorrectTable from this collection.
  \*/
  anyItem(): AutoCorrectTable

/\*\*

- Counts elements on the AutoCorrectTable collection.
  \*/
  count(): number

/\*\*

- Gets all AutoCorrectTable objects in this collection.
  \*/
  everyItem(): AutoCorrectTable[]

/\*\*

- Gets the initial AutoCorrectTable in this collection.
  \*/
  firstItem(): AutoCorrectTable

/\*\*

- Finds an AutoCorrectTable by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): AutoCorrectTable

/\*\*

- Finds an AutoCorrectTable by name.
- @param name Name value.
  \*/
  itemByName(name: string): AutoCorrectTable

/\*\*

- Gets AutoCorrectTables spanning the supplied range.
- @param from AutoCorrectTable, index, or name at the range start.
- @param to AutoCorrectTable, index, or name at the range end.
  \*/
  itemByRange(from: AutoCorrectTable | number | string, to: AutoCorrectTable | number | string): AutoCorrectTable[]

/\*\*

- Gets the final AutoCorrectTable in this collection.
  \*/
  lastItem(): AutoCorrectTable

/\*\*

- Gets the central AutoCorrectTable in this collection.
  \*/
  middleItem(): AutoCorrectTable

/\*\*

- Gets the AutoCorrectTable positioned after the supplied AutoCorrectTable.
- @param obj AutoCorrectTable that comes before the wanted AutoCorrectTable.
  \*/
  nextItem(obj: AutoCorrectTable): AutoCorrectTable

/\*\*

- Gets the AutoCorrectTable positioned before the supplied index.
- @param obj Index belonging to the AutoCorrectTable after the wanted AutoCorrectTable.
  \*/
  previousItem(obj: AutoCorrectTable): AutoCorrectTable

/\*\*

- Builds source text that resolves back to the AutoCorrectTable when run.
  \*/
  toSource(): string
  }

/\*\*

- Story tracked-change object.
  \*/
  declare class Change {
  /\*\*
  - Tracked-change type. Note: Valid only when track changes is true.
    \*/
    readonly changeType: ChangeTypes

/\*\*

- Characters collection.
  \*/
  readonly characters: Characters

/\*\*

- Date recorded for the tracked change. Note: Available only while track changes is true.
  \*/
  readonly date: Date

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Position of the Change inside its parent object.
  \*/
  readonly index: number

/\*\*

- Insertion points collection.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Lines collection.
  \*/
  readonly lines: Lines

/\*\*

- Paragraphs collection.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Parent object for the Change (a Story, XmlStory or Cell).
  \*/
  readonly parent: any

/\*\*

- Property bundle for setting multiple values in one call.
  \*/
  properties: object

/\*\*

- First insertion point location in the object, measured from the story start.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- Text columns collection.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Text style ranges collection.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Text variable instances collection.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Text objects collection.
  \*/
  readonly texts: Texts

/\*\*

- User name recorded for this tracked edit. Note: Available only while track changes is true.
  \*/
  readonly userName: string

/\*\*

- Words collection.
  \*/
  readonly words: Words

/\*\*

- Accepts this tracked change. Note: Valid only when track changes is true.
  \*/
  accept(): void

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves the object specifier into object-reference results.
  \*/
  getElements(): Change[]

/\*\*

- Rejects this tracked change. Note: Valid only when track changes is true.
  \*/
  reject(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that resolves back to the Change when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for changes.
  \*/
  declare class Changes {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Change by index.
- @param index Index value.
  \*/
  [index: number]: Change

/\*\*

- Selects an arbitrary Change from this collection.
  \*/
  anyItem(): Change

/\*\*

- Counts elements on the Change collection.
  \*/
  count(): number

/\*\*

- Gets all Change objects in this collection.
  \*/
  everyItem(): Change[]

/\*\*

- Gets the initial Change in this collection.
  \*/
  firstItem(): Change

/\*\*

- Finds a Change by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Change
