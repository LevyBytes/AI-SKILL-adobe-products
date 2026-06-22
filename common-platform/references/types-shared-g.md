# Shared (cont. 6)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_ScriptUI_d_ts

/\*\*

- Child elements stored as an array.
  \*/
  readonly children: object[]

/\*\*

- ScriptUIGraphics object available for customizing this element's appearance from onDraw().
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Pixel width and height assigned to each list item.
- Auto-layout uses this value to calculate the list's preferredSize when no other value is supplied. If the value is not explicit, each item's size is derived from the greatest height and width found among the list's items.
  \*/
  itemSize: \_Dimension

/\*\*

- Array of choice items shown in the drop-down or pop-up list.
- Read this array with a 0-based index. Use items.length to determine how many entries the list contains. The objects come from items supplied when the parent list object was created, or from later calls to the list control's add() method. Drop-down-list entries may also have type separator; those entries are unselectable and render as horizontal lines. Each item includes a selected property, which is true while the item is selected.
  \*/
  readonly items: ListItem[]

/\*\*

- Currently selected list item.
- Assigning this value highlights the selected item and scrolls it into view when needed. If nothing is selected, the value is null. Assign null to clear all selections. You can assign an item index rather than an object reference. Out-of-range index values are ignored. When an index value is assigned, this property still returns an object reference.
  \*/
  selection: ListItem | number

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback; Windows only.
  \*/
  shortcutKey: string

title: string
titleLayout: \_TitleLayout

/\*\*

- Adds either an item or a separator to this list's choices.
- For type="item", the returned value is the item control object; for type="separator", the returned value is null.
- @param type Child element type. Either item, meaning a basic selectable item with a text label, or separator.
- @param text Localizable item label text.
- @param index Position in the current item list after which this entry is inserted. If it is not provided, or if it exceeds the current list length, the new entry is appended.
  \*/
  add(type: "item", text?: string, index?: number): ListItem
  add(type: "separator", text?: string, index?: number): null

/\*\*

- Looks up the list item object whose text label matches the given value.
- @param text Text string used for the match.
  \*/
  find(text: string): ListItem

/\*\*

- Dispatches a notification message that imitates the requested user-interaction event.
- @param eventName Control event handler name to invoke. One of: onClick, onChange, onChanging. By default, an edittext control simulates onChange, while controls supporting click behavior simulate onClick.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback invoked when this element receives keyboard focus.
- It runs when the user focuses the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback invoked after this element's content changes.
  \*/
  onChange(): void

/\*\*

- Event-handler callback invoked when this element gives up keyboard focus.
- It runs when the user transfers focus from the formerly active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback invoked just before the window draws.
- The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Callback run when this element's shortcutKey sequence is entered while its window is active.
- Windows only.
  \*/
  onShortcutKey(): void

/\*\*

- Deletes a child item from the list.
- @param what Item or child to delete, supplied as a 0-based index, text value, or ListItem object.
  \*/
  remove(what: any): void

/\*\*

- Deletes every child item from the list.
  \*/
  removeAll(): void
  }

/\*\*

- Item object used by a list box, drop-down list, or tree view.
- Creation parameters for the parent list can include initial items. Add later items from the parent list by calling add() (ListBox.add(), DropDownList.add(), TreeView.add()) with control type="item"; DropDownList controls can also use type="separator". In a multi-column list box, this object stands for one selectable row. Its text and image values provide the first-column label, and subitems provides labels for additional columns.
  \*/
  declare class ListItem {
  /\*\*
  - Checked state for a list item.
  - When true, the item shows the platform-appropriate checkmark. When false, no checkmark is drawn, but the left margin still reserves room so the item aligns with other checkable items. When undefined, no checkmark space is reserved.
    \*/
    checked: boolean

/\*\*

- Expansion state for an item of type node that belongs to a TreeView list control.
- True means the item is expanded and its children are visible; false means the item is collapsed and its children are hidden.
  \*/
  expanded: boolean

/\*\*

- Image object used as this item's icon.
- When provided, ScriptUI draws the version appropriate for the current selection state before the text label. For a parent multi-column list box, this applies to the first-column label. The subitems property covers labels in later columns.
  \*/
  image: ScriptUIImage

/\*\*

- 0-based position of this item inside the parent list control's items collection.
  \*/
  readonly index: number

/\*\*

- Parent element, which is a list control.
  \*/
  readonly parent: \_Control

/\*\*

- Selection state for this item.
- True places this item in the parent list's selection. False means the item is not selected. Assign true to select this item in a single-selection list, or to append it to the selection array in a multi-selection list.
  \*/
  selected: boolean

/\*\*

- For a parent that is a multi-column ListBox, labels for this selectable row's extra columns are described here.
- This array contains JavaScript objects, with length one less than the column count. The member at position 0 supplies the second-column label. Each object can define either or both of these properties:
- text: display string for the matching label.
- image: ScriptUIImage object for the matching label.
  \*/
  readonly subItems: any[]

/\*\*

- Localizable label text shown for this item.
- In a multi-column list box, this is the first-column label. Additional-column labels are described by the subitems property.
  \*/
  text: string

/\*\*

- Element type.
- The usual value is "item", but an item whose parent is a DropDownList control may have type "separator". Separator items do not react to the mouse and appear as horizontal rules in the menu.
  \*/
  readonly type: string

/\*\*

- Adds an item to this list's choices.
- The return value is the item control object.
- @param type Child element type; use the string "item" or "node".
- @param text Localizable item label text.
- @param index Position in the current item list after which this entry is inserted. If it is not provided, or if it exceeds the current list length, the new entry is appended.
  \*/
  add(type: "item" | "node", text?: string, index?: number): ListItem
  }

/\*\*

- Two-state control that shows a checked box when value is true and an empty box when value is false.
- The onClick() callback runs when the user clicks the control or when notify() is called.
  \*/
  declare class Checkbox extends \_Control {
  /\*\*
  - True when this element has the active state.
  - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
    \*/
    active: boolean

/\*\*

- Character count reserved while calculating this element's preferred size.
  \*/
  characters: number

/\*\*

- Child elements stored as an array.
  \*/
  readonly children: object[]

/\*\*

- ScriptUIGraphics object available for customizing this element's appearance from onDraw().
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Default justification style applied to child text elements.
- Valid values are left, center, and right. Justification works only when this value is set during element creation.
  \*/
  justify: \_Justify

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback; Windows only.
  \*/
  shortcutKey: string

/\*\*

- Localizable text shown by the control.
  \*/
  text: string

/\*\*

- Control selection state.
- True puts the control in the selected or set state and shows the check mark. False shows an empty box.
  \*/
  value: boolean

/\*\*

- Dispatches a notification message that imitates the requested user-interaction event.
- @param eventName Control event handler name to invoke. One of: onClick, onChange, onChanging. By default, an edittext control simulates onChange, while controls supporting click behavior simulate onClick.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback invoked when this element receives keyboard focus.
- It runs when the user focuses the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback invoked after this element is clicked.
  \*/
  onClick(): void

/\*\*

- Event-handler callback invoked when this element gives up keyboard focus.
- It runs when the user transfers focus from the formerly active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback invoked just before the window draws.
- The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Callback run when this element's shortcutKey sequence is entered while its window is active.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Scrollbar control with stepper buttons and a draggable scroll indicator.
- The control is horizontal when its creation-time width exceeds its height, and vertical when its height exceeds its width. The onChange() callback runs after the indicator position changes or when notify() is called. While the user drags the indicator, onChanging() is called repeatedly. Scrollbars are commonly paired with an EditText field that displays the current scrollbar value and lets the script set the scrollbar position to a chosen value.
  \*/
  declare class Scrollbar extends \_Control {
  /\*\*
  - True when this element has the active state.
  - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
    \*/
    active: boolean

/\*\*

- Child elements stored as an array.
  \*/
  readonly children: object[]

/\*\*

- ScriptUIGraphics object available for customizing this element's appearance from onDraw().
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Amount added to or subtracted from the scrollbar indicator position when the user clicks before or after the moveable element.
- The default equals 20% of the range between maxvalue and minvalue.
  \*/
  jumpdelta: number

/\*\*

- Highest value permitted for the value property.
- Along with minvalue, this sets the scrolling range. Default is 100.
  \*/
  maxvalue: number

/\*\*

- Lowest value permitted for the value property.
- Along with maxvalue, this sets the scrolling range. Default is 0.
  \*/
  minvalue: number

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback; Windows only.
  \*/
  shortcutKey: string

/\*\*

- Step size applied to a scrollbar element's position for each stepper-button click.
  \*/
  stepdelta: number

/\*\*

- Indicator's current position.
- Values outside the minvalue to maxvalue range are automatically clamped to the nearest boundary.
  \*/
  value: number

/\*\*

- Dispatches a notification message that imitates the requested user-interaction event.
- @param eventName Control event handler name to invoke. One of: onClick, onChange, onChanging. By default, an edittext control simulates onChange, while controls supporting click behavior simulate onClick.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback invoked when this element receives keyboard focus.
- It runs when the user focuses the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback invoked after the user finishes dragging the position indicator or clicks the control.
  \*/
  onChange(): void

/\*\*

- Event-handler callback invoked while this element's content is changing.
- The handler runs for any position-indicator movement while this control has input focus.
  \*/
  onChanging(): void

/\*\*

- Event-handler callback invoked when this element gives up keyboard focus.
- It runs when the user transfers focus from the formerly active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback invoked just before the window draws.
- The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Callback run when this element's shortcutKey sequence is entered while its window is active.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Two-state control in a radiobutton group, where only one grouped control can be selected.
- When value=true, the selected state appears; when value=false, the control appears empty. The onClick() callback runs when the user clicks the control or when notify() is called.
  \*/
  declare class RadioButton extends \_Control {
  /\*\*
  - True when this element has the active state.
  - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
    \*/
    active: boolean

/\*\*

- Character count reserved while calculating this element's preferred size.
  \*/
  characters: number

/\*\*

- Child elements stored as an array.
  \*/
  readonly children: object[]

/\*\*

- ScriptUIGraphics object available for customizing this element's appearance from onDraw.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Default justification style applied to child text elements.
- Valid values are left, center, and right. Justification works only when this value is set during element creation.
  \*/
  justify: \_Justify

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback; Windows only.
  \*/
  shortcutKey: string

/\*\*

- Label text for this button, supplied as a localizable string.
  \*/
  text: string

/\*\*

- Selection state for this button; true means selected.
  \*/
  value: boolean

/\*\*

- Dispatches a notification message that imitates the requested user-interaction event.
- @param eventName Control event handler name to invoke. One of: onClick, onChange, onChanging. By default, an edittext control simulates onChange, while controls supporting click behavior simulate onClick.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback invoked when this element receives keyboard focus.
- It runs when the user focuses the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback invoked after this element is clicked.
  \*/
  onClick(): void

/\*\*

- Event-handler callback invoked when this element gives up keyboard focus.
- It runs when the user transfers focus from the formerly active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback invoked just before the window draws.
- The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Callback run when this element's shortcutKey sequence is entered while its window is active.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Slider bar that represents a numeric value through a moveable position indicator.
- Every slider control is horizontal. The onChange() callback runs after the indicator position changes or when notify() is called. During user movement of the indicator, onChanging() runs repeatedly. The value property stores the indicator's current position inside the minvalue to maxvalue range.
  \*/
  declare class Slider extends \_Control {
  /\*\*
  - True when this element has the active state.
  - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
    \*/
    active: boolean

/\*\*

- Child elements stored as an array.
  \*/
  readonly children: object[]

/\*\*

- ScriptUIGraphics object available for customizing this element's appearance from onDraw().
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Highest value permitted for the value property.
- Along with minvalue, this sets the range. Default is 100.
  \*/
  maxvalue: number

/\*\*

- Lowest value permitted for the value property.
- Along with maxvalue, this sets the range. Default is 0.
  \*/
  minvalue: number

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback; Windows only.
  \*/
  shortcutKey: string

/\*\*

- Indicator's current position.
- Values outside the minvalue to maxvalue range are automatically clamped to the nearest boundary.
  \*/
  value: number

/\*\*

- Dispatches a notification message that imitates the requested user-interaction event.
- @param eventName Control event handler name to invoke. One of: onClick, onChange, onChanging. By default, an edittext control simulates onChange, while controls supporting click behavior simulate onClick.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback invoked when this element receives keyboard focus.
- It runs when the user focuses the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback invoked after the user finishes dragging the position indicator or clicks the control.
  \*/
  onChange(): void

/\*\*

- Event-handler callback invoked while this element's content is changing.
- The handler runs for any position-indicator movement while this control has input focus.
  \*/
  onChanging(): void

/\*\*

- Event-handler callback invoked when this element gives up keyboard focus.
- It runs when the user transfers focus from the formerly active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback invoked just before the window draws.
- The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Callback run when this element's shortcutKey sequence is entered while its window is active.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Horizontal bar with an indicator showing operation progress.
- Progressbar controls are always horizontal. The value property stores the progress indicator's current position, defaulting to 0. A minvalue property exists, but it is always 0; assignments to any other value are ignored without error.
  \*/
  declare class Progressbar extends \_Control {
  /\*\*
  - Child elements stored as an array.
    \*/
    readonly children: object[]

/\*\*

- ScriptUIGraphics object available for customizing this element's appearance from onDraw().
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Highest value in the range. Default is 100.
  \*/
  maxvalue: number

/\*\*

- Lowest value in the range; always 0. Assignments to other values are ignored.
  \*/
  minvalue: number

/\*\*

- Indicator's current position.
- Values outside the 0 to maxvalue range are automatically clamped to the nearest boundary.
  \*/
  value: number

/\*\*

- Event-handler callback invoked just before the window draws.
- The handler can adjust or control appearance through the control's associated ScriptUIGraphics object. It receives one argument, a DrawState object.
  \*/
  onDraw(drawState: DrawState): void
  }

/\*\*

- Hierarchical list whose items may own child items.
- ListItem children of this control, stored in the items array, may be type node; node items can contain child items. An item with child items can be expanded to reveal those children or collapsed to hide them. Individual items may be selected at any tree level.
  \*/
  declare class TreeView extends \_Control {
  /\*\*
  - True when this element has the active state.
  - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
    \*/
    active: boolean

/\*\*

- Child elements stored as an array.
  \*/
  readonly children: object[]

/\*\*

- ScriptUIGraphics object available for customizing this element's appearance from onDraw().
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Pixel width and height assigned to each list item.
- Auto-layout uses this value to calculate the list's preferredSize when no other value is supplied. If the value is not explicit, each item's size is derived from the greatest height and width found among the list's items.
  \*/
  itemSize: \_Dimension

/\*\*

- Array of top-level items shown in the list.
- Read this array with a 0-based index. Use items.length to determine how many entries the list contains. The objects come from items supplied when the parent list object was created, or from later calls to the list control's add() method.
  \*/
  readonly items: ListItem[]

/\*\*

- Currently selected list item.
- Assigning this value highlights the selected item and scrolls it into view when needed. If nothing is selected, the value is null. Assign null to clear all selections. You can assign an item index rather than an object reference. Out-of-range index values are ignored. When an index value is assigned, this property still returns an object reference.
  \*/
  selection: ListItem

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback; Windows only.
  \*/
  shortcutKey: string

/\*\*

- Adds an item to this list's top-level choices.
- The return value is the item control object.
- @param type Child element type; use the string "item" or "node".
- @param text Localizable item label text.
- @param index Position in the current item list after which this entry is inserted. If it is not provided, or if it exceeds the current list length, the new entry is appended.
  \*/
  add(type: "item" | "node", text?: string, index?: number): ListItem
