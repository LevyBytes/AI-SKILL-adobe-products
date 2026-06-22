# Shared (cont. 8)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_ScriptUI_d_ts

  /\*\*
  - Builds an object from the requested Event subclass.
  - The returned Event is a UIEvent, KeyboardEvent, or MouseEvent object according to the requested type. It can be supplied to an element's dispatchEvent function to simulate a user-interaction event.
  - @param eventType Event type name: one of "UIEvent", "KeyboardEvent", or "MouseEvent".
    \*/
    createEvent(eventType: string): Event
    }

/\*\*

- Reports the keyboard's active state.
- Access through the ScriptUI.environment.keyboardState property.
- Query this object's properties at any time to learn the key currently held down and any pressed modifiers.
  \*/
  declare class KeyboardState {
  /\*\*
  - True when the Alt or Option key is pressed.
    \*/
    readonly altKey: boolean

/\*\*

- True when the Ctrl key is pressed.
  \*/
  readonly ctrlKey: boolean

/\*\*

- String naming the key currently pressed, such as "a", or an empty string.
  \*/
  readonly keyName: string

/\*\*

- True when the Cmd key on Mac OS or Windows key on Windows is pressed.
  \*/
  readonly metaKey: boolean

/\*\*

- True while Shift is down.
  \*/
  readonly shiftKey: boolean
  }

declare class KeyboardEvent extends UIEvent implements KeyboardState {
altKey: boolean
ctrlKey: boolean
metaKey: boolean
shiftKey: boolean
keyIdentifier: string
keyLocation: number
keyName: string
type: string
getModifierState(
keyIdentifier: "Alt" | "CapsLock" | "Control" | "Meta" | "NumLock" | "Scroll" | "Shift",
): boolean
initKeyboardEvent(
eventName: string,
bubble: boolean,
isCancelable: boolean,
view: \_Control,
keyID: string,
keyLocation: number,
modifiersList: string,
): void
}

/\*\*

- Control class.
  \*/
  declare class \_Control {
  /\*\*
  - Alignment style for child elements in a container. When present, this value overrides the parent container's alignChildren setting.
  - It may be one string, indicating alignment for the parent container's orientation, or a two-string array giving horizontal and vertical alignment in that order. Allowed values depend on the parent container's orientation and are case-insensitive.
  - For orientation = row: top, bottom, fill
  - For orientation = column: left, right, fill
  - For orientation = stack: top, bottom, left, right, fill
    \*/
    alignment: \_AlignmentProperty

/\*\*

- Element boundaries expressed in coordinates relative to the parent.
- Changing an element's size or location also changes bounds, and changing bounds likewise updates size or location.
  \*/
  bounds: \_Bounds

/\*\*

- True when this element is enabled.
- An enabled element accepts input according to its type. When false, control elements reject input and every element type is displayed dimmed.
  \*/
  enabled: boolean

/\*\*

- Help text shown while the mouse hovers over the element.
  \*/
  helpTip: string

/\*\*

- Pixel indentation applied to the element during automatic layout.
- Applies with column orientation and left alignment, or with row orientation and top alignment.
  \*/
  indent: number

/\*\*

- Upper-left corner of this element relative to the parent.
- The location is defined as [bounds.x, bounds.y]. Changing location changes bounds, and changing bounds likewise updates location.
  \*/
  location: Point

/\*\*

- Largest height and width to which this element may be resized.
  \*/
  maximumSize: \_Dimension

/\*\*

- Smallest height and width to which this element may be resized.
  \*/
  minimumSize: \_Dimension

/\*\*

- Parent element.
  \*/
  readonly parent: \_Control

/\*\*

- Preferred size used by layout managers when choosing the best size for each element.
- When a script does not set it directly, the UI framework using ScriptUI determines the value from attributes such as the element's text, font, font size, icon size, and other framework-specific UI attributes. A script may set this value before the layout manager runs to establish an element size different from the default.
- To set only one dimension to a specific value, use -1 for the other dimension.
  \*/
  preferredSize: \_Dimension

/\*\*

- Current dimensions of this element.
- It begins as undefined, and unless a script sets it directly, a LayoutManager supplies the value. A script can set size before layout to use a size other than preferredSize or the default, though doing so is not recommended. Defined as [bounds.width, bounds.height]. Changing size changes bounds, and changing bounds likewise updates size.
  \*/
  size: \_Dimension

/\*\*

- Element type.
  \*/
  readonly type: string

/\*\*

- True when this element is visible, and false when hidden.
- Hiding a container also hides its children, but the children keep their own visibility values and are shown or hidden according to those values the next time the parent is shown.
  \*/
  visible: boolean

/\*\*

- Window containing this element.
  \*/
  readonly window: Window

/\*\*

- Element bounds against the top-level parent window.
  \*/
  readonly windowBounds: \_Bounds

/\*\*

- Adds an event handler for a selected event type on this element.
- @param eventName Event name. Event names are listed in the JavaScript Tools Guide.
- @param handler Function that handles the event. It may refer to an extension-defined function by name or to a local handler that runs for the event. A handler function receives one argument, the UIEvent object.
- @param capturePhase When true, the handler runs only during the capturing phase of event propagation. The default is false, so the handler runs in the bubble phase when this object is a target ancestor, or in the at-target phase when this object is the target.
  \*/
  addEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean

/\*\*

- Simulates an event occurrence on this target.
- A script can create a UIEvent object for a particular event and pass it to this method to begin that event's propagation.
  \*/
  dispatchEvent(): Event

/\*\*

- Looks for the named element among this window's or container's children and returns it if found.
  \*/
  findElement(name: string): \_Control | null

/\*\*

- Hides this element.
  \*/
  hide(): void

/\*\*

- Unregisters an event handler for a selected event type on this element.
- Every argument must exactly match the values used when the handler was registered.
- @param eventName Event name.
- @param handler Function that handles the event.
- @param capturePhase Whether event handling is limited to the capture phase.
  \*/
  removeEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean

/\*\*

- Shows this element.
- If a window or container is hidden, its children are hidden too, and once the parent is displayed again those children keep their individual visibility states.
- If an onShow() callback is defined for a window, that callback runs before display. Hidden windows or containers also hide their children; when shown again, the children keep their own visibility states. For a modal dialog, this method displays the dialog and waits until dismissal before returning. If close() dismisses it, the method returns any result value passed to close(); otherwise it returns 0.
  \*/
  show(): number | undefined
  }

/\*\*

- Creation properties.
- @param name Unique control name.
  \*/
  interface \_AddControlProperties {
  name?: string
  }

/\*\*

- Creation properties for a DropDownList.
- @param name Unique control name.
- @param items String array supplying the text for each list item. Each entry creates an item object. An entry whose text is "-" creates a separator item. Provide this property or the items argument to add(), but not both. This form is especially useful for elements defined with Resource Specifications.
  \*/
  interface \_AddControlPropertiesDropDownList {
  name?: string
  items?: string[]
  }

/\*\*

- Creation properties for an EditText.
- @param name Unique control name.
- @param multiline When false, which is the default, the control shows one text line. When true, it shows multiple lines and wraps text within the control width.
- @param borderless When true, the control is rendered without a border. The default is false.
- @param scrollable Applies only to multiline elements. When true, the default, the text field includes a vertical scrollbar that becomes enabled once content exceeds the visible area. When false, no vertical scrollbar is shown; if content no longer fits, the arrow keys can move the text up and down.
- @param readonly When false, which is the default, the control accepts text input. When true, it accepts no input and only displays the contents of the text property.
- @param noecho When false, which is the default, input text is displayed. When true, input text is hidden, as used for password fields.
- @param enterKeySignalsOnChange When false, which is the default, the control signals onChange after editable text changes and the control loses keyboard focus, such as when the user tabs to another control, clicks outside it, or types Enter. When true, the control signals onChange only after the editable text changes and the user types Enter; other keyboard-focus changes do not signal the event.
- @param wantReturn In ScriptUI Version 6.0 or later, this applies only to multiple line edit controls. A true value makes RETURN/ENTER act as text input and move the cursor to the following line. Default: false.
  \*/
  interface \_AddControlPropertiesEditText {
  name?: string
  multiline?: boolean
  borderless?: boolean
  scrollable?: boolean
  readonly?: boolean
  noecho?: boolean
  enterKeySignalsOnChange?: boolean
  wantReturn?: boolean
  }

/\*\*

- Properties accepted when creating an IconButton.
- @param name Unique control name.
- @param style String selecting the visual style: "button" gives a visible raised or 3D border, while "toolbutton" stays flat for toolbar use.
- @param toggle For a button-style control, true makes the first click show the pressed look, then later clicks alternate between pressed and unpressed. The control's value property reports the toggle state.
  \*/
  interface \_AddControlPropertiesIconButton {
  name?: string
  style?: "button" | "toolbutton"
  toggle?: boolean
  }

/\*\*

- Properties accepted when creating a ListBox.
- @param name Unique control name.
- @param multiselect false, the default, restricts selection to a single item. true permits selecting several items.
- @param selected true permits selecting several items.
- @param items String array used for the text of each list item. Each entry creates an item object. The text string "-" produces a separator item. Choose one source for entries: this property or the items argument to add(). Do not supply both. Resource Specifications are the main use case for this form.
- @param numberOfColumns Number of columns used to show the items; default is 1. With multiple columns, each ListItem object represents one selectable row. Its text and image values define the first-column label, and subitems contains labels for the remaining columns.
- @param showHeaders true shows column titles.
- @param columnWidths Array of numbers giving each column's preferred width in pixels.
- @param columnTitles Matching string array containing the title for each column, appearing only if showHeaders is enabled.
  \*/
  interface \_AddControlPropertiesListBox {
  name?: string
  multiselect?: boolean
  selected?: boolean
  items?: string[]
  numberOfColumns?: number
  showHeaders?: boolean
  columnWidths?: number[]
  columnTitles?: string[]
  }

/\*\*

- Properties accepted when creating a Panel.
- @param name Unique control name.
- @param borderStyle String choosing the panel border appearance. Allowed: black, etched, gray, raised, sunken. Default: etched.
- @param su1PanelCoordinates Photoshop only. true makes this panel automatically adjust child positions for compatibility with Photoshop CS. The false default means the panel leaves child positions unchanged, even when automatic adjustment is enabled on the parent window.
  \*/
  interface \_AddControlPropertiesPanel {
  name?: string
  borderStyle?: string
  su1PanelCoordinates?: boolean
  }

/\*\*

- Properties accepted when creating a StaticText.
- @param name Unique control name.
- @param multiline false, the default, shows one text line. true allows multiple lines, with wrapping inside the control width.
- @param scrolling false, the default, prevents scrolling of the displayed text. true enables vertical scrolling with Up Arrow and Down Arrow, and implies multiline=true.
- @param truncate middle or end chooses where characters are removed and replaced with an ellipsis when the title is too wide for its reserved space. none removes trailing characters without adding an ellipsis if the text still does not fit.
  \*/
  interface \_AddControlPropertiesStaticText {
  name?: string
  multiline?: boolean
  scrolling?: boolean
  truncate?: \_Truncate
  }

/\*\*

- Properties accepted when creating a TreeView.
- @param name Unique control name.
- @param items String array used for the text of each top-level list item. Each entry creates an item object. The text string "-" produces a separator item. Choose one source for entries: this property or the items argument to add(). Do not supply both. Resource Specifications are the main use case for this form.
  \*/
  interface \_AddControlPropertiesTreeView {
  name?: string
  items?: string[]
  }

/\*\*

- Properties accepted when creating a Window.
- @param resizeable true lets the user resize the window. Default is false.
- @param su1PanelCoordinates Photoshop only. true makes the child panels in this window automatically adjust their own children for compatibility with Photoshop CS. Photoshop CS measured vertical coordinates from outside the frame. Default is false. Child panels may override the parent window's setting.
- @param closeButton Bridge only. true adds a close button to the title bar when the platform and window type support it. false omits that button. Default is true. Dialogs do not use it.
- @param maximizeButton Bridge only. true adds a title-bar button that expands the window to its maximum size, usually the full screen, when the platform and window type support it. false omits that button. Default is false for type palette and true for type window. Dialogs do not use it.
- @param minimizeButton Bridge only. true adds a title-bar button that minimizes or iconifies the window when the platform and window type support it. false omits that button. Default is false for type palette and true for type window. In Mac OS, main windows do not support a minimize button. Dialogs do not use it.
- @param independent true makes a type window independent from other application windows, allowing it to be hidden behind them in Windows. In Mac OS, this has no effect. Default is false.
- @param borderless true removes the title bar and borders. Settings for title-bar and border controls have no effect.
  \*/
  interface \_AddControlPropertiesWindow {
  resizeable?: boolean
  su1PanelCoordinates?: boolean
  closeButton?: boolean
  maximizeButton?: boolean
  minimizeButton?: boolean
  independent?: boolean
  borderless?: boolean
  }

interface \_AddControl {
/\*\*

- Creates a Button.
- The third argument may supply the initial text value.
- Special name "ok" makes the parent dialog treat the button as primary, and special name "cancel" makes it the parent dialog's default cancel button.
  \*/
  (type: "button", bounds?: \_Bounds, text?: string, properties?: \_AddControlProperties): Button

/\*\*

- Creates a CheckBox.
- The third argument supplies the text shown to the user.
  \*/
  (type: "checkbox", bounds?: \_Bounds, text?: string, properties?: \_AddControlProperties): Checkbox

/\*\*
\*/
(
type: "dropdownlist",
bounds?: \_Bounds,
items?: string[],
properties?: \_AddControlPropertiesDropDownList,
): DropDownList

/\*\*
\*/
(
type: "edittext",
bounds?: \_Bounds,
text?: string,
properties?: \_AddControlPropertiesEditText,
): EditText

/\*\*
\*/
(
type: "flashplayer",
bounds?: \_Bounds,
movieToLoad?: string | File,
properties?: \_AddControlProperties,
): FlashPlayer

/\*\*
\*/
(type: "group", bounds?: \_Bounds, properties?: \_AddControlProperties): Group

/\*\*
\*/
(
type: "iconbutton",
bounds?: \_Bounds,
icon?: string | File,
properties?: \_AddControlPropertiesIconButton,
): IconButton

/\*\*
\*/
(type: "image", bounds?: \_Bounds, icon?: string | File, properties?: \_AddControlProperties): Image

/\*\*
\*/
(
type: "listbox",
bounds?: \_Bounds,
items?: string[],
properties?: \_AddControlPropertiesListBox,
): ListBox

/\*\*
\*/
(type: "panel", bounds?: \_Bounds, text?: string, properties?: \_AddControlPropertiesPanel): Panel

/\*\*

- Creates a ProgressBar.
- The third argument gives the initial value, with default 0; the fourth gives the range maximum, using 100 by default.
  \*/
  (
  type: "progressbar",
  bounds?: \_Bounds,
  value?: number,
  max?: number,
  properties?: \_AddControlProperties,
  ): Progressbar

/\*\*

- Creates a RadioButton.
- The third argument may provide the label text.
  \*/
  (
  type: "radiobutton",
  bounds?: \_Bounds,
  text?: string,
  properties?: \_AddControlProperties,
  ): RadioButton

/\*\*

- Creates a Scrollbar.
- The third argument sets the starting value, while the fourth and fifth arguments define the range minimum and maximum.
  \*/
  (
  type: "scrollbar",
  bounds?: \_Bounds,
  value?: number,
  min?: number,
  max?: number,
  properties?: \_AddControlProperties,
  ): Scrollbar

/\*\*

- Creates a Slider.
- The third argument sets the starting value, while the fourth and fifth arguments define the range minimum and maximum.
  \*/
  (
  type: "slider",
  bounds?: \_Bounds,
  value?: number,
  min?: number,
  max?: number,
  properties?: \_AddControlProperties,
  ): Slider

/\*\*
\*/
(
type: "statictext",
bounds?: \_Bounds,
text?: string,
properties?: \_AddControlPropertiesStaticText,
): StaticText

/\*\*
\*/
(
type: "tabbedpanel",
bounds?: \_Bounds,
text?: string,
properties?: \_AddControlProperties,
): TabbedPanel

/\*\*
\*/
(
type: "treeview",
bounds?: \_Bounds,
items?: string[],
properties?: \_AddControlPropertiesTreeView,
): TreeView
}

interface \_TitleLayout {
alignment?: \_AlignmentPropertyTitleLayout
characters?: number
spacing?: number
margins?: [number, number, number, number]
justify?: \_Justify
truncate?: \_Truncate
}

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_XMPScript_d_ts

/// <reference path="./PlugPlugExternalObject.d.ts" />

// Common pattern for loading XMPScript inside
// ExtendScript contexts.
interface ExternalObjectConstructor {
AdobeXMPScript: ExternalObject | undefined
}

interface XMPMetaConstructor {
/** Creates a blank object instance. \*/
new (): XMPMetaInstance
/**

- @param packet XML file text or XMP packet text.
  \*/
  new (packet: string): XMPMetaInstance
  /\*\*
- @param buffer UTF-8 or UTF-16 bytes containing XML file data
- or XMP packet data. This array comes from calling `serializeToArray`
- on an `XMPMeta` instance.
  \*/
  new (buffer: number[]): XMPMetaInstance
  /\*\*
- @param prefix Namespace prefix.
- @example XMPMeta.getNamespacePrefix('xmp'); // 'http://ns.adobe.com/xap/1.0/'
  \*/
  getNamespaceURI(prefix: string): string
  /\*\*
- @param uri Namespace URI.
- @example XMPMeta.getNamespacePrefix('http://ns.adobe.com/xap/1.0/'); // 'xmp:'
  \*/
  getNamespacePrefix(uri: string): string
  }
  type XMPProperty = {
  locale: string
  namespace: string
  options: string
  path: string
  value: string
  }
  interface XMPMetaInstance {
  doesPropertyExist(namespace: string, value: string): boolean
  getProperty(namespace: string, property: string): XMPProperty
  setProperty(namespace: string, property: string, value: string): boolean
  countArrayItems(namespace: string, property: string): number
  getArrayItem(namespace: string, property: string, itemIndex: number): XMPProperty
  deleteProperty(namespace: string, property: string): boolean
  appendArrayItem(
  namespace: string,
  property: string,
  arrayOptions: string,
  valueToAppend: string,
  valueOptions: string,
  ): boolean
  dumpObject(): string
  serialize(): string
  getNamespaceURI(ns: string): string
  }

declare const XMPMeta: XMPMetaConstructor | undefined

interface XMPConstConstructor {
new (): XMPConstInstance
`NS_DM`: string
`NS_DC`: string
`ARRAY_IS_ORDERED`: string
}

interface XMPConstInstance {
// Instance members placeholder.
}

declare const XMPConst: XMPConstConstructor | undefined

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_global_d_ts

/// <reference path="JavaScript.d.ts" />
/// <reference path="XMPScript.d.ts" />

/\*\*

- Global BridgeTalk object.
  \*/
  declare var BridgeTalk: any

/\*\*

- Infinity is the predefined global variable whose value represents infinity.
  \*/
  declare var Infinity: number

/\*\*

- NaN is the predefined global value for NaN (Not-a-Number), as defined by the IEEE-754 standard.
  \*/
  declare var NaN: number

/\*\*

- Application object.
  \*/
  declare var app: Application
  declare interface Application {}

/\*\*

- Shows an alert box.
- @param message Text shown in the alert.
- @param title Alert title; ignored on the Macintosh.
- @param errorIcon Shows an Error icon; the Macintosh ignores this argument.
  \*/
  declare function alert(message: string, title?: string, errorIcon?: boolean): void

/\*\*

- Shows an alert box with Yes and No buttons; true means the user chose Yes.
- @param message Text shown in the alert.
- @param noAsDefault Set true to make the No button the default.
- @param title Alert title; the Macintosh ignores this argument.
  \*/
  declare function confirm(message: string, noAsDefault?: boolean, title?: string): boolean

/\*\*

- Converts text previously produced by encodeURI() back from URI encoding.
- @param uri Text to decode.
  \*/
  declare function decodeURI(uri: string): string

/\*\*

- Converts text previously produced by encodeURIComponent() back from component encoding.
- @param uri Text to decode.
  \*/
  declare function decodeURIComponent(uri: string): string

/\*\*

- Encodes a string according to RFC2396.
- Builds a UTF-8 ASCII encoded version of the string. The string is first converted to UTF-8, then each non-alphanumeric character becomes a percent escape
- in %xx form, where xx is the character's hexadecimal value. Once UTF-8 conversion and escaping are complete, no character code in the string is greater than 127. Characters left unencoded are -\_.!~\*'();/?:@&=+$,#. The method returns false on errors.
- @param text Text to encode.
  \*/
  declare function encodeURI(text: string): string
