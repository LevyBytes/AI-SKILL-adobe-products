# Indesign (part 90)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Parent reference for the IndexingSortOption (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Priority assigned to this indexing sort option (shuffles prior entries down).
  \*/
  priority: number

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

- Converts the object specifier into an array of object references.
  \*/
  getElements(): IndexingSortOption[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces executable source text that returns the IndexingSortOption.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing indexing sort options.
  \*/
  declare class IndexingSortOptions {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the IndexingSortOption addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: IndexingSortOption

/\*\*

- Returns an arbitrary IndexingSortOption from the collection.
  \*/
  anyItem(): IndexingSortOption

/\*\*

- Reports how many elements the IndexingSortOption contains.
  \*/
  count(): number

/\*\*

- Returns all IndexingSortOption entries from the collection.
  \*/
  everyItem(): IndexingSortOption[]

/\*\*

- Gets the first IndexingSortOption from the collection.
  \*/
  firstItem(): IndexingSortOption

/\*\*

- Returns the IndexingSortOption addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): IndexingSortOption

/\*\*

- Returns the IndexingSortOption addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): IndexingSortOption

/\*\*

- Returns entries from the requested span of IndexingSortOptions.
- @param from IndexingSortOption, index, or name used as range start.
- @param to IndexingSortOption, index, or name used as range end.
  \*/
  itemByRange(from: IndexingSortOption | number | string, to: IndexingSortOption | number | string): IndexingSortOption[]

/\*\*

- Gets the last IndexingSortOption from the collection.
  \*/
  lastItem(): IndexingSortOption

/\*\*

- Gets the middle IndexingSortOption from the collection.
  \*/
  middleItem(): IndexingSortOption

/\*\*

- Returns the IndexingSortOption immediately after the supplied IndexingSortOption in the collection.
- @param obj IndexingSortOption whose index precedes the desired IndexingSortOption.
  \*/
  nextItem(obj: IndexingSortOption): IndexingSortOption

/\*\*

- Returns the IndexingSortOption immediately before the supplied index.
- @param obj Index for the IndexingSortOption immediately after the desired IndexingSortOption.
  \*/
  previousItem(obj: IndexingSortOption): IndexingSortOption

/\*\*

- Produces executable source text that returns the IndexingSortOption.
  \*/
  toSource(): string
  }

/\*\*

- Bullet-character preference object.
  \*/
  declare class Bullet extends Preference {
  /\*\*
  - Font used by the bullet character.
    \*/
    bulletsFont: Font | string | AutoEnum

/\*\*

- Font style used by the bullet character.
  \*/
  bulletsFontStyle: string | NothingEnum | AutoEnum

/\*\*

- Bullet character type.
  \*/
  characterType: BulletCharacterType

/\*\*

- Bullet character value supplied by unicode ID or glyph ID.
  \*/
  characterValue: number
  }

/\*\*

- Numbering restart policy settings.
  \*/
  declare class NumberingRestartPolicy extends Preference {
  /\*\*
  - Lower numbering level for a numbered list.
    \*/
    numberingLowerLevel: number

/\*\*

- Restart policy selected for numbering.
  \*/
  numberingPolicy: RestartPolicy

/\*\*

- Upper numbering level for a numbered list.
  \*/
  numberingUpperLevel: number
  }

/\*\*

- Numbered list object.
  \*/
  declare class NumberingList {
  /\*\*
  - When true, numbering continues across book documents.
    \*/
    continueNumbersAcrossDocuments: boolean

/\*\*

- When true, numbering continues across stories.
  \*/
  continueNumbersAcrossStories: boolean

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the NumberingList.
  \*/
  readonly id: number

/\*\*

- Index position of the NumberingList inside its containing object.
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

- Name assigned to the NumberingList.
  \*/
  name: string

/\*\*

- Parent reference for the NumberingList (a Application or Document).
  \*/
  readonly parent: any

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
  getElements(): NumberingList[]

/\*\*

- Stores the label value under the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the NumberingList.
- @param replacingWith NumberingList used instead of this one.
  \*/
  remove(replacingWith: NumberingList): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces executable source text that returns the NumberingList.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing numbered lists.
  \*/
  declare class NumberingLists {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the NumberingList addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: NumberingList

/\*\*

- Creates a fresh list style.
- @param name Name value.
- @param continueNumbersAcrossStories When true, numbering continues across stories.
- @param continueNumbersAcrossDocuments When true, numbering continues across book documents.
- @param withProperties Property values used when creating NumberingList
  \*/
  add(name: string, continueNumbersAcrossStories: boolean, continueNumbersAcrossDocuments: boolean, withProperties: object): NumberingList

/\*\*

- Returns an arbitrary NumberingList from the collection.
  \*/
  anyItem(): NumberingList

/\*\*

- Reports how many elements the NumberingList contains.
  \*/
  count(): number

/\*\*

- Returns all NumberingList entries from the collection.
  \*/
  everyItem(): NumberingList[]

/\*\*

- Gets the first NumberingList from the collection.
  \*/
  firstItem(): NumberingList

/\*\*

- Returns the NumberingList addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): NumberingList

/\*\*

- Returns the NumberingList addressed by ID.
- @param id ID value.
  \*/
  itemByID(id: number): NumberingList

/\*\*

- Returns the NumberingList addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): NumberingList

/\*\*

- Returns entries from the requested span of NumberingLists.
- @param from NumberingList, index, or name used as range start.
- @param to NumberingList, index, or name used as range end.
  \*/
  itemByRange(from: NumberingList | number | string, to: NumberingList | number | string): NumberingList[]

/\*\*

- Gets the last NumberingList from the collection.
  \*/
  lastItem(): NumberingList

/\*\*

- Gets the middle NumberingList from the collection.
  \*/
  middleItem(): NumberingList

/\*\*

- Returns the NumberingList immediately after the supplied NumberingList in the collection.
- @param obj NumberingList whose index precedes the desired NumberingList.
  \*/
  nextItem(obj: NumberingList): NumberingList

/\*\*

- Returns the NumberingList immediately before the supplied index.
- @param obj Index for the NumberingList immediately after the desired NumberingList.
  \*/
  previousItem(obj: NumberingList): NumberingList

/\*\*

- Produces executable source text that returns the NumberingList.
  \*/
  toSource(): string
  }

/\*\*

- Object style group object.
  \*/
  declare class ObjectStyleGroup {
  /\*\*
  - Every object style contained by the ObjectStyleGroup.
    \*/
    readonly allObjectStyles: ObjectStyle[]

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the ObjectStyleGroup.
  \*/
  readonly id: number

/\*\*

- Index position of the ObjectStyleGroup inside its containing object.
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

- Name assigned to the ObjectStyleGroup.
  \*/
  name: string

/\*\*

- Collection containing object style groups.
  \*/
  readonly objectStyleGroups: ObjectStyleGroups

/\*\*

- Collection containing object styles.
  \*/
  readonly objectStyles: ObjectStyles

/\*\*

- Parent reference for the ObjectStyleGroup (a Document, Application or ObjectStyleGroup).
  \*/
  readonly parent: any

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

- Creates a duplicate of the ObjectStyleGroup.
  \*/
  duplicate(): ObjectStyleGroup

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): ObjectStyleGroup[]

/\*\*

- Stores the label value under the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Moves the ObjectStyleGroup into the specified location.
- @param to New location inside the container object, or relative to the reference object.
- @param reference Reference object. Note: needed for LocationOptions before/after placements.
  \*/
  move(to: LocationOptions, reference: ObjectStyle | ObjectStyleGroup | Document | Application): ObjectStyleGroup

/\*\*

- Removes the ObjectStyleGroup.
- @param replacingWith ObjectStyleGroup used instead of the deleted ObjectStyleGroup.
  \*/
  remove(replacingWith: ObjectStyle): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces executable source text that returns the ObjectStyleGroup.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing object style groups.
  \*/
  declare class ObjectStyleGroups {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the ObjectStyleGroup addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: ObjectStyleGroup

/\*\*

- Creates a fresh ObjectStyleGroup.
- @param withProperties Property values used when creating ObjectStyleGroup
  \*/
  add(withProperties: object): ObjectStyleGroup

/\*\*

- Returns an arbitrary ObjectStyleGroup from the collection.
  \*/
  anyItem(): ObjectStyleGroup

/\*\*

- Reports how many elements the ObjectStyleGroup contains.
  \*/
  count(): number

/\*\*

- Returns all ObjectStyleGroup entries from the collection.
  \*/
  everyItem(): ObjectStyleGroup[]

/\*\*

- Gets the first ObjectStyleGroup from the collection.
  \*/
  firstItem(): ObjectStyleGroup

/\*\*

- Returns the ObjectStyleGroup addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): ObjectStyleGroup

/\*\*

- Returns the ObjectStyleGroup addressed by ID.
- @param id ID value.
  \*/
  itemByID(id: number): ObjectStyleGroup

/\*\*

- Returns the ObjectStyleGroup addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): ObjectStyleGroup

/\*\*

- Returns entries from the requested span of ObjectStyleGroups.
- @param from ObjectStyleGroup, index, or name used as range start.
- @param to ObjectStyleGroup, index, or name used as range end.
  \*/
  itemByRange(from: ObjectStyleGroup | number | string, to: ObjectStyleGroup | number | string): ObjectStyleGroup[]

/\*\*

- Gets the last ObjectStyleGroup from the collection.
  \*/
  lastItem(): ObjectStyleGroup

/\*\*

- Gets the middle ObjectStyleGroup from the collection.
  \*/
  middleItem(): ObjectStyleGroup

/\*\*

- Returns the ObjectStyleGroup immediately after the supplied ObjectStyleGroup in the collection.
- @param obj ObjectStyleGroup whose index precedes the desired ObjectStyleGroup.
  \*/
  nextItem(obj: ObjectStyleGroup): ObjectStyleGroup

/\*\*

- Returns the ObjectStyleGroup immediately before the supplied index.
- @param obj Index for the ObjectStyleGroup immediately after the desired ObjectStyleGroup.
  \*/
  previousItem(obj: ObjectStyleGroup): ObjectStyleGroup

/\*\*

- Produces executable source text that returns the ObjectStyleGroup.
  \*/
  toSource(): string
  }

/\*\*

- Conditional-text condition object.
  \*/
  declare class Condition {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the Condition.
  \*/
  readonly id: number

/\*\*

- Index position of the Condition inside its containing object.
  \*/
  readonly index: number

/\*\*

- Condition indicator color; supply either an array of three doubles for RGB values from 0 to 255, or a UI color.
  \*/
  indicatorColor: [number, number, number] | UIColors

/\*\*

- Condition indicator method.
  \*/
  indicatorMethod: ConditionIndicatorMethod

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Arbitrary string property value.
  \*/
  label: string

/\*\*

- Name assigned to the Condition.
  \*/
  name: string

/\*\*

- Parent reference for the Condition (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Property bag for setting several properties together.
  \*/
  properties: object

/\*\*

- Condition underline indicator appearance.
  \*/
  underlineIndicatorAppearance: ConditionUnderlineIndicatorAppearance

/\*\*

- When true, the Condition is visible.
  \*/
  visible: boolean

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
  getElements(): Condition[]

/\*\*

- Stores the label value under the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the condition.
- @param replacingWith Condition applied to text instead of the deleted condition. By default, no replacement condition is applied.
  \*/
  remove(replacingWith: Condition | string): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces executable source text that returns the Condition.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing conditions for conditional text.
  \*/
  declare class Conditions {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the Condition addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: Condition

/\*\*

- Creates a fresh Condition.
- @param withProperties Property values used when creating Condition
  \*/
  add(withProperties: object): Condition

/\*\*

- Returns an arbitrary Condition from the collection.
  \*/
  anyItem(): Condition

/\*\*

- Reports how many elements the Condition contains.
  \*/
  count(): number

/\*\*

- Returns all Condition entries from the collection.
  \*/
  everyItem(): Condition[]

/\*\*

- Gets the first Condition from the collection.
  \*/
  firstItem(): Condition

/\*\*

- Returns the Condition addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): Condition

/\*\*

- Returns the Condition addressed by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Condition

/\*\*

- Returns the Condition addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): Condition

/\*\*

- Returns entries from the requested span of Conditions.
- @param from Condition, index, or name used as range start.
- @param to Condition, index, or name used as range end.
  \*/
  itemByRange(from: Condition | number | string, to: Condition | number | string): Condition[]

/\*\*

- Gets the last Condition from the collection.
  \*/
  lastItem(): Condition

/\*\*

- Gets the middle Condition from the collection.
  \*/
  middleItem(): Condition

/\*\*

- Returns the Condition immediately after the supplied Condition in the collection.
- @param obj Condition whose index precedes the desired Condition.
  \*/
  nextItem(obj: Condition): Condition

/\*\*

- Returns the Condition immediately before the supplied index.
- @param obj Index for the Condition immediately after the desired Condition.
  \*/
  previousItem(obj: Condition): Condition

/\*\*

- Produces executable source text that returns the Condition.
  \*/
  toSource(): string
  }

/\*\*

- Hidden text object.
  \*/
  declare class HiddenText {
  /\*\*
  - Collection containing characters.
    \*/
    readonly characters: Characters

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the HiddenText.
  \*/
  readonly id: number

/\*\*

- Index position of the HiddenText inside its containing object.
  \*/
  readonly index: number
