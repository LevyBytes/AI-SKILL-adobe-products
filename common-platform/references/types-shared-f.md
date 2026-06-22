# Shared (cont. 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_ScriptUI_d_ts

/\*\*

- Creates a blank path object.
- Any existing path in currentPath is replaced.
  \*/
  newPath(): ScriptUIPath

/\*\*

- Creates a new drawing pen object.
- @param type Pen kind. Use ScriptUIGraphics.PenType.`SOLID_COLOR` or ScriptUIGraphics.PenType.`THEME_COLOR`.
- @param color Pen color. For `SOLID_COLOR`, use [R, B, G, A] with three or four numeric entries for red, green, blue, and optional opacity (alpha channel). Each number must be in [0.0..1.0]; opacity 0 is fully transparent and opacity 1 is fully opaque. For `THEME_COLOR`, use the theme name string. The host application supplies theme colors.
- @param width Pen-line width in pixels. The line is centered on the current point. For example, value 2 causes a line from (0, 10) to (5, 10) to paint the two pixel rows around y = 10.
  \*/
  newPen(type: typeof ScriptUIGraphics.PenType, color: number[], width: number): ScriptUIPen

/\*\*

- Creates a rectangle-shaped path in the currentPath object.
- fillPath() can fill the rectangle and strokePath() can stroke it. The returned Point object is the rectangle's upper-left corner and becomes the new currentPoint value.
- @param left Left coordinate relative to this element's origin.
- @param top Top coordinate relative to this element's origin.
- @param width Width in pixels.
- @param height Pixel height.
  \*/
  rectPath(left: number, top: number, width: number, height: number): Point

/\*\*

- Strokes path segments with a supplied drawing pen.
- @param pen Drawing pen that supplies color and line width.
- @param path Path object. Defaults to currentPath.
  \*/
  strokePath(pen: ScriptUIPen, path?: ScriptUIPath): void
  }

/\*\*

- Describes input state when a ScriptUIGraphics.onDraw() event fires.
- Its properties report whether the current control has input focus plus the mouse-button and keypress states. It is passed as the argument to ScriptUIGraphics.onDraw().
  \*/
  declare class DrawState {
  /\*\*
  - true while the Alt key is pressed (Windows only).
    \*/
    readonly altKeyPressed: boolean

/\*\*

- true while Caps Lock is pressed.
  \*/
  readonly capsLockKeyPressed: boolean

/\*\*

- true while the Command key is pressed (Mac OS only).
  \*/
  readonly cmdKeyPressed: boolean

/\*\*

- true while the Ctrl key is pressed.
  \*/
  readonly ctrlKeyPressed: boolean

/\*\*

- true when the element has input focus.
  \*/
  readonly hasFocus: boolean

/\*\*

- true while the left mouse button is pressed.
  \*/
  readonly leftButtonPressed: boolean

/\*\*

- true while the middle mouse button is pressed.
  \*/
  readonly middleButtonPressed: boolean

/\*\*

- true while the cursor hovers over this element.
  \*/
  readonly mouseOver: boolean

/\*\*

- true while Num Lock is pressed.
  \*/
  readonly numLockKeyPressed: boolean

/\*\*

- true while the Option key is pressed (Mac OS only).
  \*/
  readonly optKeyPressed: boolean

/\*\*

- true while the right mouse button is pressed.
  \*/
  readonly rightButtonPressed: boolean

/\*\*

- true while the Shift key is pressed.
  \*/
  readonly shiftKeyPressed: boolean
  }

/\*\*

- Represents the font attributes used when drawing text into a control.
- Create it with newFont(). It can be used as a font value and passed to drawString() and measureString().
  \*/
  declare class ScriptUIFont {
  /\*\*
  - Font family name.
    \*/
    readonly family: string

/\*\*

- Complete font name, combining the family and style when a style is specified.
  \*/
  readonly name: string

/\*\*

- Font size in points.
  \*/
  readonly size: number

/\*\*

- Font style, chosen from ScriptUI.FontStyle constants.
  \*/
  readonly style: typeof ScriptUI.FontStyle

/\*\*

- Name of a substitution font used when the requested font family or style is unavailable.
  \*/
  readonly substitute: string
  }

/\*\*

- Holds a group of images that can be drawn inside a control.
- The image used can vary by current state, such as a dimmed image for a disabled control. Create it with newImage(). It is accepted by drawImage().
  \*/
  declare class ScriptUIImage {
  /\*\*
  - Image format. Formats: resource / JPEG / GIF / TIFF / PNG / PICT (Macintosh).
    \*/
    readonly format: string

/\*\*

- Image name; this is the file name or the resource name.
  \*/
  readonly name: string

/\*\*

- Full path of the file containing the image.
  \*/
  readonly pathname: string

/\*\*

- Image dimensions in pixels.
  \*/
  readonly size: \_Dimension
  }

/\*\*

- Text label whose value cannot be edited by the user.
  \*/
  declare class StaticText extends \_Control {
  /\*\*
  - Always false. This element cannot receive input focus.
  - The active control holds keyboard focus and accepts keystrokes. For a Button, Windows selects it with Return or Enter, while Mac OS uses the space bar.
    \*/
    active: boolean

/\*\*

- Number of characters to reserve when computing the element's preferred size.
  \*/
  characters: number

/\*\*

- Array containing child elements.
  \*/
  readonly children: object[]

/\*\*

- Graphics object available for customizing this element during the onDraw() event.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Text justification style.
- One of left, center, or right. Justification works only when this value is set while the element is created.
  \*/
  justify: \_Justify

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback (Windows only).
  \*/
  shortcutKey: string

/\*\*

- Localizable string displayed as text.
  \*/
  text: string

/\*\*

- Sends a notification as though the specified user interaction event occurred.
- @param eventName Control event handler name to call. One of: onClick, onChange, onChanging. By default, it simulates onChange for an edittext control and onClick for controls that support that event.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback function invoked just before the window is drawn.
- The script may adjust or control appearance through the control's associated ScriptUIGraphics object. The handler receives one DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Event-handler callback function invoked when this element's shortcutKey sequence is typed in the active window.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Pushbutton element with mouse-sensitive text.
- The onClick() callback runs when the control is clicked or when notify() is called.
  \*/
  declare class Button extends \_Control {
  /\*\*
  - true when this element is active.
  - The active control holds keyboard focus and accepts keystrokes. For a Button, Windows selects it with Return or Enter, while Mac OS uses the space bar.
    \*/
    active: boolean

/\*\*

- Number of characters to reserve when computing the element's preferred size.
  \*/
  characters: number

/\*\*

- Array containing child elements.
  \*/
  readonly children: object[]

/\*\*

- Graphics object available for customizing this element during the onDraw() event.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Text justification style.
- One of left, center, or right. Justification works only when this value is set while the element is created.
  \*/
  justify: \_Justify

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback (Windows only).
  \*/
  shortcutKey: string

/\*\*

- Localizable string displayed as text.
  \*/
  text: string

/\*\*

- Sends a notification as though the specified user interaction event occurred.
- @param eventName Control event handler name to call. One of: onClick, onChange, onChanging. By default, it simulates onChange for an edittext control and onClick for controls that support that event.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback function invoked when this element receives keyboard focus.
- Runs after the user gives keyboard focus to the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback function invoked after this element is clicked.
  \*/
  onClick(): void

/\*\*

- Event-handler callback function invoked when this element gives up keyboard focus.
- Runs when focus moves from the previously active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback function invoked just before the window is drawn.
- The script may adjust or control appearance through the control's associated ScriptUIGraphics object. The handler receives one DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Event-handler callback function invoked when this element's shortcutKey sequence is typed in the active window.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Mouse-sensitive pushbutton that shows an image rather than text.
- The onClick() callback runs when the control is clicked or when notify() is called.
  \*/
  declare class IconButton extends \_Control {
  /\*\*
  - true when this element is active.
  - The active control holds keyboard focus and accepts keystrokes. For a Button, Windows selects it with Return or Enter, while Mac OS uses the space bar.
    \*/
    active: boolean

/\*\*

- Array containing child elements.
  \*/
  readonly children: object[]

/\*\*

- Graphics object available for customizing this element during the onDraw() event.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Image object that supplies the image to draw.
  \*/
  image: ScriptUIImage

/\*\*

- Image object that supplies the image to draw.
- Same as IconButton.image.
  \*/
  icon: ScriptUIImage

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback (Windows only).
  \*/
  shortcutKey: string

title: string
titleLayout: \_TitleLayout

/\*\*

- Sends a notification as though the specified user interaction event occurred.
- @param eventName Control event handler name to call. One of: onClick, onChange, onChanging. By default, it simulates onChange for an edittext control and onClick for controls that support that event.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback function invoked when this element receives keyboard focus.
- Runs after the user gives keyboard focus to the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback function invoked after this element is clicked.
  \*/
  onClick(): void

/\*\*

- Event-handler callback function invoked when this element gives up keyboard focus.
- Runs when focus moves from the previously active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback function invoked just before the window is drawn.
- The script may adjust or control appearance through the control's associated ScriptUIGraphics object. The handler receives one DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Event-handler callback function invoked when this element's shortcutKey sequence is typed in the active window.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Shows an icon or image.
  \*/
  declare class Image extends \_Control {
  /\*\*
  - Array containing child elements.
    \*/
    readonly children: object[]

/\*\*

- Graphics object available for customizing this element during the onDraw() event.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Image object that supplies the image to draw.
  \*/
  image: ScriptUIImage

/\*\*

- Image object that supplies the image to draw.
- Same as Image.image.
  \*/
  icon: ScriptUIImage

/\*\*

- Key sequence that triggers the onShortcutKey() callback for this element (Windows only).
  \*/
  shortcutKey: string

title: string
titleLayout: \_TitleLayout

/\*\*

- Event-handler callback function invoked when this element receives keyboard focus.
- Runs after the user gives keyboard focus to the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback function invoked when this element gives up keyboard focus.
- Runs when focus moves from the previously active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback function invoked just before the window is drawn.
- The script may adjust or control appearance through the control's associated ScriptUIGraphics object. The handler receives one DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Event-handler callback function invoked when this element's shortcutKey sequence is typed in the active window.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Editable text field whose contents can be selected and changed by the user.
- onChange() runs when the text changes and the user presses Enter, when the control loses focus, or when notify() is called. onChanging() runs for any modification to the text. The textselection property stores the currently selected text.
  \*/
  declare class EditText extends \_Control {
  /\*\*
  - true when this element is active.
  - The active control holds keyboard focus and accepts keystrokes. For a Button, Windows selects it with Return or Enter, while Mac OS uses the space bar.
    \*/
    active: boolean

/\*\*

- Number of characters to reserve when computing the element's preferred size.
  \*/
  characters: number

/\*\*

- Array containing child elements.
  \*/
  readonly children: object[]

/\*\*

- Graphics object available for customizing this element during the onDraw() event.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Text justification style.
- One of left, center, or right. Justification works only when this value is set while the element is created.
  \*/
  justify: \_Justify

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback (Windows only).
  \*/
  shortcutKey: string

/\*\*

- Localizable string currently displayed in the field.
  \*/
  text: string

/\*\*

- Currently selected text, or an empty string when nothing is selected.
- Assigning this property replaces the current text selection and changes the text property. If no selection exists, the new value is inserted into the text string at the insertion point. After modifying text, textselection resets to an empty string. Setting textselection before the element's parent Window exists is undefined.
  \*/
  textselection: string

/\*\*

- Sends a notification as though the specified user interaction event occurred.
- @param eventName Control event handler name to call. One of: onClick, onChange, onChanging. By default, it simulates onChange for an edittext control and onClick for controls that support that event.
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback function invoked when this element receives keyboard focus.
- Runs after the user gives keyboard focus to the control by clicking it or tabbing into it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback function invoked after this element's content changes.
- The handler runs only once the change is complete: when focus moves to another control or the user types Enter. The creation parameter enterKeySignalsOnChange influences the exact behavior; see the properties property.
  \*/
  onChange(): void

/\*\*

- Event-handler callback function invoked while this element's content is changing.
- It runs for every keypress while this control has input focus.
  \*/
  onChanging(): void

/\*\*

- Event-handler callback function invoked when this element gives up keyboard focus.
- Runs when focus moves from the previously active control to another control.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback function invoked just before the window is drawn.
- The script may adjust or control appearance through the control's associated ScriptUIGraphics object. The handler receives one DrawState object.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Callback run when this element's shortcutKey sequence is entered while its window is active.
- Windows only.
  \*/
  onShortcutKey(): void
  }

/\*\*

- Presents multiple choices as ListItem objects.
- At construction time, choose whether the list permits a single selected item or multiple selected items. When the available area is too small for every entry, the control can show a scrollbar so users can reach all list items. Initial contents can be supplied when the list object is created, and later entries can be added with the list object's add() method. Scripts can delete entries with remove() or clear them with removeAll(). A list box may also use multiple columns; in that layout, each row is one selectable choice, represented by one ListItem.
  \*/
  declare class ListBox extends \_Control {
  /\*\*
  - True when this element has the active state.
  - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
    \*/
    active: boolean

/\*\*

- Child ListItem elements stored as an array.
  \*/
  readonly children: object[]

/\*\*

- Column settings for a multi-column list box.
- This JavaScript object exposes two read-only properties populated from the creation parameters:
- titles: array of column title strings; its length equals the column count chosen at creation.
- preferredWidths: array of column widths; its length equals the column count chosen at creation.
- visible: array of boolean visibility flags; its length equals the column count chosen at creation. Use this property to show or hide a column. It is available in ScriptUI Version 6.0 or later when ScriptUI.frameworkName == 'Flex'.
  \*/
  readonly columns: object

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

- Choice-item array shown by the list.
- Use a 0-based index to read this array. Use items.length to get the item count. Objects are created either from items passed at parent-list creation or from later calls to the list control's add() method. Each item exposes a selected property, which is true while that item is selected.
  \*/
  readonly items: ListItem[]

/\*\*

- For a single-selection list, the selected item; for a multi-selection list, the currently selected items as an array.
- Assigning this property highlights the item and scrolls it into view as needed. With no selection, the value is null. Assign null to clear every selection. Instead of object references, you may assign an item index or an array of indices. Values outside the valid index range are ignored. Even when indices are assigned, reads from this property return object references.
- For a single-selection list, assigning an array selects only that array's first item.
- For a multi-selection list, assigning one item appends that item to the current selection.
  \*/
  selection: ListItem | number

/\*\*

- Key sequence that triggers this element's onShortcutKey() callback; Windows only.
  \*/
  shortcutKey: string

/\*\*

- Inserts an item among this list's choices.
- The returned value is the item control object. In a multi-column list box, every added ListItem is one selectable row. Its text and image values supply the first-column label, while subitems supplies labels for the remaining columns.
- @param type Child element type; use the string "item".
- @param text Localizable item label text.
- @param index Position in the current item list after which this entry is inserted. If omitted, or if it exceeds the current list length, the entry goes at the list tail.
  \*/
  add(type: "item", text?: string, index?: number): ListItem

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

- Event-handler callback invoked when a listbox item is double-clicked.
- Read the selection property to determine which item received the double-click.
  \*/
  onDoubleClick(): void

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

- Shows one visible item. Clicking the control opens a dropped-down or popped-up list from which the user can choose another list item.
- Drop-down lists may include unselectable separator items to visually divide related item groups, like menu separators. Items can be provided when the list object is created or added later with the list object's add() method. Scripts can delete entries with remove() and removeAll(). The onChange() callback runs when the selection changes or when notify() is called.
  \*/
  declare class DropDownList extends \_Control {
  /\*\*
  - True when this element has the active state.
  - The active control owns keyboard focus, meaning it receives keystrokes; for a Button, it is the control triggered by Return or Enter in Windows, or by the space bar in Mac OS.
    \*/
    active: boolean
