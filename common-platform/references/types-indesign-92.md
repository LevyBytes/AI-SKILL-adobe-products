# Indesign (part 92)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Retrieves the middle Menu from the collection.
  \*/
  middleItem(): Menu

/\*\*

- Retrieves the Menu positioned after the supplied Menu in the collection.
- @param obj Menu immediately before the desired Menu.
  \*/
  nextItem(obj: Menu): Menu

/\*\*

- Retrieves the Menu positioned before the supplied index.
- @param obj Index after the desired Menu.
  \*/
  previousItem(obj: Menu): Menu

/\*\*

- Builds executable source text that resolves back to the Menu.
  \*/
  toSource(): string
  }

/\*\*

- Menu elements object.
  \*/
  declare class MenuElement {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Index position of MenuElement in its containing object.
  \*/
  readonly index: number

/\*\*

- Whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for MenuElement (a Menu or Submenu).
  \*/
  readonly parent: any

/\*\*

- Property bag for assigning several values at once.
  \*/
  properties: object

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
  getElements(): MenuElement[]

/\*\*

- Deletes the MenuElement.
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

- Builds executable source text that resolves back to the MenuElement.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for menu elements.
  \*/
  declare class MenuElements {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the MenuElement addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: MenuElement

/\*\*

- Retrieves an arbitrary MenuElement from the collection.
  \*/
  anyItem(): MenuElement

/\*\*

- Reports how many elements the MenuElement contains.
  \*/
  count(): number

/\*\*

- Retrieves all MenuElement objects in the collection.
  \*/
  everyItem(): MenuElement[]

/\*\*

- Retrieves the first MenuElement from the collection.
  \*/
  firstItem(): MenuElement

/\*\*

- Retrieves the MenuElement addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): MenuElement

/\*\*

- Retrieves MenuElements entries bounded by the supplied range.
- @param from Starting range endpoint: MenuElement, index, or name.
- @param to Ending range endpoint: MenuElement, index, or name.
  \*/
  itemByRange(from: MenuElement | number | string, to: MenuElement | number | string): MenuElement[]

/\*\*

- Retrieves the last MenuElement from the collection.
  \*/
  lastItem(): MenuElement

/\*\*

- Retrieves the middle MenuElement from the collection.
  \*/
  middleItem(): MenuElement

/\*\*

- Retrieves the MenuElement positioned after the supplied MenuElement in the collection.
- @param obj MenuElement immediately before the desired MenuElement.
  \*/
  nextItem(obj: MenuElement): MenuElement

/\*\*

- Retrieves the MenuElement positioned before the supplied index.
- @param obj Index after the desired MenuElement.
  \*/
  previousItem(obj: MenuElement): MenuElement

/\*\*

- Builds executable source text that resolves back to the MenuElement.
  \*/
  toSource(): string
  }

/\*\*

- Submenu object.
  \*/
  declare class Submenu extends MenuElement {
  /\*\*
  - Fires before Submenu is displayed; it does not bubble and cannot be canceled.
    \*/
    static readonly `BEFORE_DISPLAY`: string

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

- Name assigned to Submenu.
  \*/
  readonly name: string

/\*\*

- Collection object for submenus.
  \*/
  readonly submenus: Submenus

/\*\*

- Display label for Submenu in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
  \*/
  readonly title: string
  }

/\*\*

- Collection object for submenus.
  \*/
  declare class Submenus {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Submenu addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: Submenu

/\*\*

- Creates a new submenu object.
- @param title Display label for Submenu in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
- @param at Placement for the submenu, either relative to the reference object or inside the containing object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Starting property values for the Submenu being created.
  \*/
  add(title: string, at?: LocationOptions, reference?: MenuElement, withProperties?: object): Submenu

/\*\*

- Retrieves an arbitrary Submenu from the collection.
  \*/
  anyItem(): Submenu

/\*\*

- Reports how many elements the Submenu contains.
  \*/
  count(): number

/\*\*

- Retrieves all Submenu objects in the collection.
  \*/
  everyItem(): Submenu[]

/\*\*

- Retrieves the first Submenu from the collection.
  \*/
  firstItem(): Submenu

/\*\*

- Retrieves the Submenu addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Submenu

/\*\*

- Retrieves the Submenu that has the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Submenu

/\*\*

- Retrieves Submenus entries bounded by the supplied range.
- @param from Starting range endpoint: Submenu, index, or name.
- @param to Ending range endpoint: Submenu, index, or name.
  \*/
  itemByRange(from: Submenu | number | string, to: Submenu | number | string): Submenu[]

/\*\*

- Retrieves the last Submenu from the collection.
  \*/
  lastItem(): Submenu

/\*\*

- Retrieves the middle Submenu from the collection.
  \*/
  middleItem(): Submenu

/\*\*

- Retrieves the Submenu positioned after the supplied Submenu in the collection.
- @param obj Submenu immediately before the desired Submenu.
  \*/
  nextItem(obj: Submenu): Submenu

/\*\*

- Retrieves the Submenu positioned before the supplied index.
- @param obj Index after the desired Submenu.
  \*/
  previousItem(obj: Submenu): Submenu

/\*\*

- Builds executable source text that resolves back to the Submenu.
  \*/
  toSource(): string
  }

/\*\*

- Menu item object.
  \*/
  declare class MenuItem extends MenuElement {
  /\*\*
  - Menu action used to implement the menu item.
    \*/
    readonly associatedMenuAction: MenuAction

/\*\*

- When true, the menu action's menu item is checked.
  \*/
  readonly checked: boolean

/\*\*

- When true, MenuItem is enabled.
  \*/
  readonly enabled: boolean

/\*\*

- Unique ID assigned to MenuItem.
  \*/
  readonly id: number

/\*\*

- Name assigned to MenuItem.
  \*/
  readonly name: string

/\*\*

- Display label for MenuItem in the user interface. Ampersand characters (&) mark the next character for Windows Alt-key menu navigation, while double ampersands show a literal ampersand. The Mac OS drops the extra ampersands.
  \*/
  readonly title: string

/\*\*

- Selects the MenuItem.
  \*/
  select(): void
  }

/\*\*

- Collection object for menu items.
  \*/
  declare class MenuItems {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the MenuItem addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: MenuItem

/\*\*

- Creates a new menu item object.
- @param associatedMenuAction Menu action used to implement the menu item.
- @param at Placement for the menu item, either relative to the reference object or inside the containing object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Starting property values for the MenuItem being created.
  \*/
  add(associatedMenuAction: MenuAction, at?: LocationOptions, reference?: MenuElement, withProperties?: object): MenuItem

/\*\*

- Retrieves an arbitrary MenuItem from the collection.
  \*/
  anyItem(): MenuItem

/\*\*

- Reports how many elements the MenuItem contains.
  \*/
  count(): number

/\*\*

- Retrieves all MenuItem objects in the collection.
  \*/
  everyItem(): MenuItem[]

/\*\*

- Retrieves the first MenuItem from the collection.
  \*/
  firstItem(): MenuItem

/\*\*

- Retrieves the MenuItem addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): MenuItem

/\*\*

- Retrieves the MenuItem that has the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): MenuItem

/\*\*

- Retrieves the MenuItem that has the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): MenuItem

/\*\*

- Retrieves MenuItems entries bounded by the supplied range.
- @param from Starting range endpoint: MenuItem, index, or name.
- @param to Ending range endpoint: MenuItem, index, or name.
  \*/
  itemByRange(from: MenuItem | number | string, to: MenuItem | number | string): MenuItem[]

/\*\*

- Retrieves the last MenuItem from the collection.
  \*/
  lastItem(): MenuItem

/\*\*

- Retrieves the middle MenuItem from the collection.
  \*/
  middleItem(): MenuItem

/\*\*

- Retrieves the MenuItem positioned after the supplied MenuItem in the collection.
- @param obj MenuItem immediately before the desired MenuItem.
  \*/
  nextItem(obj: MenuItem): MenuItem

/\*\*

- Retrieves the MenuItem positioned before the supplied index.
- @param obj Index after the desired MenuItem.
  \*/
  previousItem(obj: MenuItem): MenuItem

/\*\*

- Builds executable source text that resolves back to the MenuItem.
  \*/
  toSource(): string
  }

/\*\*

- Menu separator object.
  \*/
  declare class MenuSeparator extends MenuElement {
  /\*\*
  - Unique ID assigned to MenuSeparator.
    \*/
    readonly id: number
    }

/\*\*

- Collection object for menu separators.
  \*/
  declare class MenuSeparators {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the MenuSeparator addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: MenuSeparator

/\*\*

- Creates a new menu separator object.
- @param at Placement for the menu separator, either relative to the reference object or inside the containing object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Initial property values for the new MenuSeparator.
  \*/
  add(at?: LocationOptions, reference?: MenuElement, withProperties?: object): MenuSeparator

/\*\*

- Retrieves an arbitrary MenuSeparator from the collection.
  \*/
  anyItem(): MenuSeparator

/\*\*

- Reports how many elements the MenuSeparator contains.
  \*/
  count(): number

/\*\*

- Retrieves all MenuSeparator objects in the collection.
  \*/
  everyItem(): MenuSeparator[]

/\*\*

- Retrieves the first MenuSeparator from the collection.
  \*/
  firstItem(): MenuSeparator

/\*\*

- Retrieves the MenuSeparator addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): MenuSeparator

/\*\*

- Retrieves the MenuSeparator that has the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): MenuSeparator

/\*\*

- Retrieves MenuSeparators entries bounded by the supplied range.
- @param from Starting range endpoint: MenuSeparator, index, or name.
- @param to Ending range endpoint: MenuSeparator, index, or name.
  \*/
  itemByRange(from: MenuSeparator | number | string, to: MenuSeparator | number | string): MenuSeparator[]

/\*\*

- Retrieves the last MenuSeparator from the collection.
  \*/
  lastItem(): MenuSeparator

/\*\*

- Retrieves the middle MenuSeparator from the collection.
  \*/
  middleItem(): MenuSeparator

/\*\*

- Retrieves the MenuSeparator positioned after the supplied MenuSeparator in the collection.
- @param obj MenuSeparator immediately before the desired MenuSeparator.
  \*/
  nextItem(obj: MenuSeparator): MenuSeparator

/\*\*

- Retrieves the MenuSeparator positioned before the supplied index.
- @param obj Index after the desired MenuSeparator.
  \*/
  previousItem(obj: MenuSeparator): MenuSeparator

/\*\*

- Builds executable source text that resolves back to the MenuSeparator.
  \*/
  toSource(): string
  }

/\*\*

- Panel object, possibly contained in a panel group.
  \*/
  declare class Panel {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Index position of Panel in its containing object.
  \*/
  readonly index: number

/\*\*

- Whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name assigned to Panel.
  \*/
  readonly name: string

/\*\*

- Parent object for Panel (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bag for assigning several values at once.
  \*/
  properties: object

/\*\*

- When true, the panel is visible.
  \*/
  visible: boolean

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
  getElements(): Panel[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the Panel.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for panels.
  \*/
  declare class Panels {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Panel addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: Panel

/\*\*

- Retrieves an arbitrary Panel from the collection.
  \*/
  anyItem(): Panel

/\*\*

- Reports how many elements the Panel contains.
  \*/
  count(): number

/\*\*

- Retrieves all Panel objects in the collection.
  \*/
  everyItem(): Panel[]

/\*\*

- Retrieves the first Panel from the collection.
  \*/
  firstItem(): Panel

/\*\*

- Retrieves the Panel addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Panel

/\*\*

- Retrieves the Panel that has the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Panel

/\*\*

- Retrieves Panels entries bounded by the supplied range.
- @param from Starting range endpoint: Panel, index, or name.
- @param to Ending range endpoint: Panel, index, or name.
  \*/
  itemByRange(from: Panel | number | string, to: Panel | number | string): Panel[]

/\*\*

- Retrieves the last Panel from the collection.
  \*/
  lastItem(): Panel

/\*\*

- Retrieves the middle Panel from the collection.
  \*/
  middleItem(): Panel

/\*\*

- Retrieves the Panel positioned after the supplied Panel in the collection.
- @param obj Panel immediately before the desired Panel.
  \*/
  nextItem(obj: Panel): Panel

/\*\*

- Retrieves the Panel positioned before the supplied index.
- @param obj Index after the desired Panel.
  \*/
  previousItem(obj: Panel): Panel

/\*\*

- Builds executable source text that resolves back to the Panel.
  \*/
  toSource(): string
  }

/\*\*

- Dialog object.
  \*/
  declare class Dialog {
  /\*\*
  - When true, the dialog includes a Cancel button so users can close it without saving selections; when false, only OK is present.
    \*/
    canCancel: boolean

/\*\*

- Collection object for dialog columns.
  \*/
  readonly dialogColumns: DialogColumns

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to Dialog.
  \*/
  readonly id: number

/\*\*

- Index position of Dialog in its containing object.
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

- Name assigned to Dialog.
  \*/
  name: string

/\*\*

- Parent object for Dialog (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bag for assigning several values at once.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Destroys the dialog object; dialog objects stay in memory until destroyed or until the program quits.
  \*/
  destroy(): void

/\*\*

- Gets the label value tied to the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Creates object references by resolving the specifier.
  \*/
  getElements(): Dialog[]

/\*\*

- Sets the label value tied to the supplied key.
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

- Shows the dialog.
  \*/
  show(): boolean

/\*\*

- Builds executable source text that resolves back to the Dialog.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection object for dialogs.
  \*/
  declare class Dialogs {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Dialog addressed by the specified index.
- @param index Index value.
  \*/
  [index: number]: Dialog

/\*\*

- Creates a new Dialog object.
- @param withProperties Initial property values for the new Dialog.
  \*/
  add(withProperties: object): Dialog

/\*\*

- Retrieves an arbitrary Dialog from the collection.
  \*/
  anyItem(): Dialog

/\*\*

- Reports how many elements the Dialog contains.
  \*/
  count(): number

/\*\*

- Retrieves all Dialog objects in the collection.
  \*/
  everyItem(): Dialog[]

/\*\*

- Retrieves the first Dialog from the collection.
  \*/
  firstItem(): Dialog

/\*\*

- Retrieves the Dialog addressed by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Dialog

/\*\*

- Retrieves the Dialog that has the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Dialog

/\*\*

- Retrieves the Dialog that has the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Dialog

/\*\*

- Retrieves Dialogs entries bounded by the supplied range.
- @param from Starting range endpoint: Dialog, index, or name.
- @param to Ending range endpoint: Dialog, index, or name.
  \*/
  itemByRange(from: Dialog | number | string, to: Dialog | number | string): Dialog[]

/\*\*

- Retrieves the last Dialog from the collection.
  \*/
  lastItem(): Dialog

/\*\*

- Retrieves the middle Dialog from the collection.
  \*/
  middleItem(): Dialog

/\*\*

- Retrieves the Dialog positioned after the supplied Dialog in the collection.
- @param obj Dialog immediately before the desired Dialog.
  \*/
  nextItem(obj: Dialog): Dialog

/\*\*

- Retrieves the Dialog positioned before the supplied index.
- @param obj Index after the desired Dialog.
  \*/
  previousItem(obj: Dialog): Dialog

/\*\*

- Builds executable source text that resolves back to the Dialog.
  \*/
  toSource(): string
  }

/\*\*

- Umbrella term for an object in a dialog column or dialog row. Covered items include dialog controls such as radio button groups, checkboxes, individual editboxes, dropdown controls, and comboboxes; static text objects; enabling groups; border panels; plus nested dialog columns and dialog rows. Related entries: dialog column and dialog row; static text and border panel; enabling group and radiobutton group; checkbox control plus angle editbox and angle combobox; integer editbox with integer combobox; measurement editbox with measurement combobox; percent editbox with percent combobox; real editbox with real combobox; and text editbox.
  \*/
  declare class Widget {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to Widget.
  \*/
  readonly id: number

/\*\*

- Index position of Widget in its containing object.
  \*/
  readonly index: number

/\*\*

- Whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Control width; for an editbox or combobox, this sets the box minimum width.
  \*/
  minWidth: number
