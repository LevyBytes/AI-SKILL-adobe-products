# Indesign (part 91)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Collection containing insertion points.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Arbitrary string property value.
  \*/
  label: string

/\*\*

- Collection containing lines.
  \*/
  readonly lines: Lines

/\*\*

- HiddenText name; alias for the HiddenText's label property.
  \*/
  name: string

/\*\*

- Collection containing paragraphs.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Parent object for HiddenText: Story, XmlStory, TextFrame, EndnoteTextFrame, InsertionPoint, Note, Cell, or Footnote.
  \*/
  readonly parent: any

/\*\*

- Property bag for setting several properties together.
  \*/
  properties: object

/\*\*

- Insertion point before the table within the story that contains it.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- Collection containing text columns.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Collection containing text style ranges.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Collection containing text objects.
  \*/
  readonly texts: Texts

/\*\*

- Collection containing words.
  \*/
  readonly words: Words

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
  getElements(): HiddenText[]

/\*\*

- Stores the label value under the specified key.
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

- Produces executable source text that returns the HiddenText.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing hidden text objects.
  \*/
  declare class HiddenTexts {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the HiddenText addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: HiddenText

/\*\*

- Returns an arbitrary HiddenText from the collection.
  \*/
  anyItem(): HiddenText

/\*\*

- Reports how many elements the HiddenText contains.
  \*/
  count(): number

/\*\*

- Returns all HiddenText entries from the collection.
  \*/
  everyItem(): HiddenText[]

/\*\*

- Gets the first HiddenText from the collection.
  \*/
  firstItem(): HiddenText

/\*\*

- Returns the HiddenText addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): HiddenText

/\*\*

- Returns the HiddenText addressed by ID.
- @param id ID value.
  \*/
  itemByID(id: number): HiddenText

/\*\*

- Returns the HiddenText addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): HiddenText

/\*\*

- Returns entries from the requested span of HiddenTexts.
- @param from HiddenText, index, or name used as range start.
- @param to HiddenText, index, or name used as range end.
  \*/
  itemByRange(from: HiddenText | number | string, to: HiddenText | number | string): HiddenText[]

/\*\*

- Gets the last HiddenText from the collection.
  \*/
  lastItem(): HiddenText

/\*\*

- Gets the middle HiddenText from the collection.
  \*/
  middleItem(): HiddenText

/\*\*

- Returns the HiddenText immediately after the supplied HiddenText in the collection.
- @param obj HiddenText whose index precedes the desired HiddenText.
  \*/
  nextItem(obj: HiddenText): HiddenText

/\*\*

- Returns the HiddenText immediately before the supplied index.
- @param obj Index for the HiddenText immediately after the desired HiddenText.
  \*/
  previousItem(obj: HiddenText): HiddenText

/\*\*

- Produces executable source text that returns the HiddenText.
  \*/
  toSource(): string
  }

/\*\*

- Conditional-text condition set object.
  \*/
  declare class ConditionSet {
  /\*\*
  - Collection containing event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the ConditionSet.
  \*/
  readonly id: number

/\*\*

- Index position of the ConditionSet inside its containing object.
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

- Name assigned to the ConditionSet.
  \*/
  name: string

/\*\*

- Parent reference for the ConditionSet (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Property bag for setting several properties together.
  \*/
  properties: object

/\*\*

- Condition and visibility list for the set. Return form: ordered array containing condition:Condition, visibility:Boolean.
  \*/
  setConditions: any[]

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
  getElements(): ConditionSet[]

/\*\*

- Stores the label value under the specified key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Redefines a condition set from the currently existing conditions and visibilities.
  \*/
  redefine(): void

/\*\*

- Removes a condition set for conditional text.
- @param replacingWith ConditionSet applied to the text instead of the deleted condition set. By default, no replacement condition set is applied.
  \*/
  remove(replacingWith: ConditionSet | string): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces executable source text that returns the ConditionSet.
  \*/
  toSource(): string

/\*\*

- Returns the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing condition sets for conditional text.
  \*/
  declare class ConditionSets {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Returns the ConditionSet addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: ConditionSet

/\*\*

- Creates a fresh ConditionSet.
- @param withProperties Property values used when creating ConditionSet
  \*/
  add(withProperties: object): ConditionSet

/\*\*

- Returns an arbitrary ConditionSet from the collection.
  \*/
  anyItem(): ConditionSet

/\*\*

- Reports how many elements the ConditionSet contains.
  \*/
  count(): number

/\*\*

- Returns all ConditionSet entries from the collection.
  \*/
  everyItem(): ConditionSet[]

/\*\*

- Gets the first ConditionSet from the collection.
  \*/
  firstItem(): ConditionSet

/\*\*

- Returns the ConditionSet addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): ConditionSet

/\*\*

- Returns the ConditionSet addressed by ID.
- @param id ID value.
  \*/
  itemByID(id: number): ConditionSet

/\*\*

- Returns the ConditionSet addressed by name.
- @param name Name value.
  \*/
  itemByName(name: string): ConditionSet

/\*\*

- Returns entries from the requested span of ConditionSets.
- @param from ConditionSet, index, or name used as range start.
- @param to ConditionSet, index, or name used as range end.
  \*/
  itemByRange(from: ConditionSet | number | string, to: ConditionSet | number | string): ConditionSet[]

/\*\*

- Gets the last ConditionSet from the collection.
  \*/
  lastItem(): ConditionSet

/\*\*

- Gets the middle ConditionSet from the collection.
  \*/
  middleItem(): ConditionSet

/\*\*

- Returns the ConditionSet immediately after the supplied ConditionSet in the collection.
- @param obj ConditionSet whose index precedes the desired ConditionSet.
  \*/
  nextItem(obj: ConditionSet): ConditionSet

/\*\*

- Returns the ConditionSet immediately before the supplied index.
- @param obj Index for the ConditionSet immediately after the desired ConditionSet.
  \*/
  previousItem(obj: ConditionSet): ConditionSet

/\*\*

- Produces executable source text that returns the ConditionSet.
  \*/
  toSource(): string
  }

/\*\*

- Pages panel object.
  \*/
  declare class PagesPanel extends Panel {
  /\*\*
  - Page icon size value.
    \*/
    iconSize: IconSizes

/\*\*

- Master page icon size value.
  \*/
  masterIconSize: IconSizes

/\*\*

- When true, master page icons sit vertically around the binding spine; when false, they use a horizontal layout.
  \*/
  masterVerticalView: boolean

/\*\*

- When true, page thumbnails appear in the panel's master pages area.
  \*/
  mastersThumbnails: boolean

/\*\*

- When true, the panel draws its pages area above the master pages area.
  \*/
  pagesOnTop: boolean

/\*\*

- When true, thumbnails appear for pages in the panel's pages area.
  \*/
  pagesThumbnails: boolean

/\*\*

- Controls page arrangement within the panel's page section.
  \*/
  pagesViewSetting: PageViewOptions

/\*\*

- Controls how the document and master page panel areas respond during resizing.
  \*/
  resizeBehavior: PanelLayoutResize

/\*\*

- When true, spreads using non-zero rotation show a rotation icon beside them.
  \*/
  rotationIcons: boolean

/\*\*

- When true, spreads with page transitions show a page transitions icon beside them.
  \*/
  transitionsIcons: boolean

/\*\*

- When true, spreads containing transparent elements show a transparency icon beside them.
  \*/
  transparencyIcons: boolean
  }

/\*\*

- LibraryPanel panel.
  \*/
  declare class LibraryPanel extends Panel {
  /\*\*
  - Library shown by this LibraryPanel.
    \*/
    readonly associatedLibrary: Library

/\*\*

- Currently selected object(s).
  \*/
  selection: object[] | object | NothingEnum

/\*\*

- Asset sort order used by LibraryPanel.
  \*/
  sortOrder: SortAssets

/\*\*

- View mode for LibraryPanel.
  \*/
  view: LibraryPanelViews

/\*\*

- Selects the supplied object(s).
- @param selectableItems Objects to select.
- @param existingSelection How LibraryPanel selection state relates to earlier selected objects.
  \*/
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void

/\*\*

- Show every asset.
  \*/
  showAll(): void
  }

/\*\*

- Menu action object.
  \*/
  declare class MenuAction {
  /\*\*
  - Fires after MenuAction is invoked; it does not bubble and cannot be canceled.
    \*/
    static readonly `AFTER_INVOKE`: string

/\*\*

- Fires before MenuAction is invoked; it does not bubble but can be canceled.
  \*/
  static readonly `BEFORE_INVOKE`: string

/\*\*

- Area associated with the menu action.
  \*/
  readonly area: string

/\*\*

- When true, the menu action's menu item is checked.
  \*/
  readonly checked: boolean

/\*\*

- When true, MenuAction is enabled.
  \*/
  readonly enabled: boolean

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to MenuAction.
  \*/
  readonly id: number

/\*\*

- Index position of MenuAction in its containing object.
  \*/
  readonly index: number

/\*\*

- Whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- Name assigned to MenuAction.
  \*/
  readonly name: string

/\*\*

- Parent object for MenuAction (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bag for assigning several values at once.
  \*/
  properties: object

/\*\*

- Display label for MenuAction in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
  \*/
  readonly title: string

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Gets the label value tied to the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Creates object references by resolving the specifier.
  \*/
  getElements(): MenuAction[]

/\*\*

- Sets the label value tied to the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Invokes the action.
  \*/
  invoke(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the MenuAction.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for menu actions.
  \*/
  declare class MenuActions {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the MenuAction addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: MenuAction

/\*\*

- Retrieves an arbitrary MenuAction from the collection.
  \*/
  anyItem(): MenuAction

/\*\*

- Reports how many elements the MenuAction contains.
  \*/
  count(): number

/\*\*

- Retrieves all MenuAction objects in the collection.
  \*/
  everyItem(): MenuAction[]

/\*\*

- Retrieves the first MenuAction from the collection.
  \*/
  firstItem(): MenuAction

/\*\*

- Retrieves the MenuAction addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): MenuAction

/\*\*

- Retrieves the MenuAction that has the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): MenuAction

/\*\*

- Retrieves the MenuAction that has the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): MenuAction

/\*\*

- Retrieves MenuActions entries bounded by the supplied range.
- @param from Starting range endpoint: MenuAction, index, or name.
- @param to Ending range endpoint: MenuAction, index, or name.
  \*/
  itemByRange(from: MenuAction | number | string, to: MenuAction | number | string): MenuAction[]

/\*\*

- Retrieves the last MenuAction from the collection.
  \*/
  lastItem(): MenuAction

/\*\*

- Retrieves the middle MenuAction from the collection.
  \*/
  middleItem(): MenuAction

/\*\*

- Retrieves the MenuAction positioned after the supplied MenuAction in the collection.
- @param obj MenuAction immediately before the desired MenuAction.
  \*/
  nextItem(obj: MenuAction): MenuAction

/\*\*

- Retrieves the MenuAction positioned before the supplied index.
- @param obj Index after the desired MenuAction.
  \*/
  previousItem(obj: MenuAction): MenuAction

/\*\*

- Builds executable source text that resolves back to the MenuAction.
  \*/
  toSource(): string
  }

/\*\*

- Script menu action object.
  \*/
  declare class ScriptMenuAction extends MenuAction {
  /\*\*
  - Fires before ScriptMenuAction is displayed; it does not bubble and cannot be canceled.
    \*/
    static readonly `BEFORE_DISPLAY`: string

/\*\*

- Fires when ScriptMenuAction is invoked; it does not bubble and cannot be canceled.
  \*/
  static readonly `ON_INVOKE`: string

/\*\*

- Deletes the ScriptMenuAction.
  \*/
  remove(): void
  }

/\*\*

- Collection object for script menu actions.
  \*/
  declare class ScriptMenuActions {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the ScriptMenuAction addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: ScriptMenuAction

/\*\*

- Creates a new action object.
- @param title Display label for ScriptMenuAction in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
- @param withProperties Initial property values for the new ScriptMenuAction.
  \*/
  add(title: string, withProperties: object): ScriptMenuAction

/\*\*

- Retrieves an arbitrary ScriptMenuAction from the collection.
  \*/
  anyItem(): ScriptMenuAction

/\*\*

- Reports how many elements the ScriptMenuAction contains.
  \*/
  count(): number

/\*\*

- Retrieves all ScriptMenuAction objects in the collection.
  \*/
  everyItem(): ScriptMenuAction[]

/\*\*

- Retrieves the first ScriptMenuAction from the collection.
  \*/
  firstItem(): ScriptMenuAction

/\*\*

- Retrieves the ScriptMenuAction addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ScriptMenuAction

/\*\*

- Retrieves the ScriptMenuAction that has the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): ScriptMenuAction

/\*\*

- Retrieves the ScriptMenuAction that has the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): ScriptMenuAction

/\*\*

- Retrieves ScriptMenuActions entries bounded by the supplied range.
- @param from Starting range endpoint: ScriptMenuAction, index, or name.
- @param to Ending range endpoint: ScriptMenuAction, index, or name.
  \*/
  itemByRange(from: ScriptMenuAction | number | string, to: ScriptMenuAction | number | string): ScriptMenuAction[]

/\*\*

- Retrieves the last ScriptMenuAction from the collection.
  \*/
  lastItem(): ScriptMenuAction

/\*\*

- Retrieves the middle ScriptMenuAction from the collection.
  \*/
  middleItem(): ScriptMenuAction

/\*\*

- Retrieves the ScriptMenuAction positioned after the supplied ScriptMenuAction in the collection.
- @param obj ScriptMenuAction immediately before the desired ScriptMenuAction.
  \*/
  nextItem(obj: ScriptMenuAction): ScriptMenuAction

/\*\*

- Retrieves the ScriptMenuAction positioned before the supplied index.
- @param obj Index after the desired ScriptMenuAction.
  \*/
  previousItem(obj: ScriptMenuAction): ScriptMenuAction

/\*\*

- Builds executable source text that resolves back to the ScriptMenuAction.
  \*/
  toSource(): string
  }

/\*\*

- Menu object.
  \*/
  declare class Menu {
  /\*\*
  - Fires before Menu is displayed; it does not bubble and cannot be canceled.
    \*/
    static readonly `BEFORE_DISPLAY`: string

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Index position of Menu in its containing object.
  \*/
  readonly index: number

/\*\*

- Whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Collection object for menu elements.
  \*/
  readonly menuElements: MenuElements

/\*\*

- Collection object for menu items.
  \*/
  readonly menuItems: MenuItems

/\*\*

- Collection object for menu separators.
  \*/
  readonly menuSeparators: MenuSeparators

/\*\*

- Name assigned to Menu.
  \*/
  readonly name: string

/\*\*

- Parent object for Menu (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bag for assigning several values at once.
  \*/
  properties: object

/\*\*

- Collection object for submenus.
  \*/
  readonly submenus: Submenus

/\*\*

- Display label for Menu in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
  \*/
  readonly title: string

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates object references by resolving the specifier.
  \*/
  getElements(): Menu[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the Menu.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for menus.
  \*/
  declare class Menus {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Menu addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: Menu

/\*\*

- Retrieves an arbitrary Menu from the collection.
  \*/
  anyItem(): Menu

/\*\*

- Reports how many elements the Menu contains.
  \*/
  count(): number

/\*\*

- Retrieves all Menu objects in the collection.
  \*/
  everyItem(): Menu[]

/\*\*

- Retrieves the first Menu from the collection.
  \*/
  firstItem(): Menu

/\*\*

- Retrieves the Menu addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Menu

/\*\*

- Retrieves the Menu that has the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Menu

/\*\*

- Retrieves Menus entries bounded by the supplied range.
- @param from Starting range endpoint: Menu, index, or name.
- @param to Ending range endpoint: Menu, index, or name.
  \*/
  itemByRange(from: Menu | number | string, to: Menu | number | string): Menu[]

/\*\*

- Retrieves the last Menu from the collection.
  \*/
  lastItem(): Menu
