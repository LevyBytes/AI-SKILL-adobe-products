# Shared (cont. 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_ScriptUI_d_ts

/\*\*

- String containing the UI component framework name compatible with this ScriptUI version.
  \*/
  static readonly frameworkName: string

/\*\*

- String containing the ScriptUI component framework version number.
  \*/
  static readonly version: any

/\*\*

- Looks up a host-application resource string for the supplied text.
- When no matching string resource exists, the input text is returned.
- @param text Text to match.
  \*/
  static getResourceText(text: string): string

/\*\*

- Creates a font object for text controls and titles.
- @param name Font name, or font family name.
- @param style Font style; can be a string or one of the ScriptUI.FontStyle values.
- @param size Point size for the font.
  \*/
  static newFont(name: string, style: string, size: number): ScriptUIFont

/\*\*

- Loads an image from resources or disk files into an image object.
- Creates a global image object for controls that can display images, loading the associated images from the specified resource names or image files.
- @param normal Resource name or disk file path for the image used in the normal state.
- @param disabled Resource name or disk file path for the image used in the disabled state.
- @param pressed Resource name or file-system path for the image used in the pressed state.
- @param rollover Resource name or file-system path for the rollover-state image.
  \*/
  static newImage(
  normal: string,
  disabled?: string,
  pressed?: string,
  rollover?: string,
  ): ScriptUIImage
  }

/\*\*

- This instance represents a top-level window or dialog box containing user-interface elements.
- The global Window object gives access to predefined windows and windows created by scripts.
  \*/
  declare class Window extends \_Control {
  /\*\*
  - Set true to activate this window.
  - A visible modal dialog is active by definition.
  - An active palette is the foremost window.
  - The active control has focus, meaning it accepts keystrokes; for a Button, it can be selected when the user presses Return or Enter.
    \*/
    active: boolean

/\*\*

- Describes how the layout manager aligns children of different sizes inside a column or row.
- Creation order decides which children appear at the top of a column or the left side of a row; earlier children are closer to that top or left position. When a child defines its own alignment, that value overrides the parent container's alignChildren setting. See alignment property for values.
  \*/
  alignChildren: \_AlignmentProperty

/\*\*

- For dialog windows, the UI element notified when the user presses the cancellation key combination.
- The cancellation key is Esc. By default, the lookup targets a button whose name or text is "cancel", ignoring case.
  \*/
  cancelElement: object

/\*\*

- Number of characters reserved while the preferred window size is calculated.
  \*/
  characters: number

/\*\*

- Collection of UI elements added to this container.
- The array can be indexed by number or by a string containing an element name. Its length is the child-element count for containers and zero for controls.
  \*/
  readonly children: \_Control[]

/\*\*

- For dialog windows, the UI element notified when the user presses the Enter key.
- By default, the lookup targets a button whose name or text is "ok", ignoring case.
  \*/
  defaultElement: object

/\*\*

- Window-frame bounds in screen coordinates.
- Depending on the windowing system, the frame includes the title bar and borders around the window's content region.
  \*/
  readonly frameBounds: \_Bounds

/\*\*

- Top-left corner of the window frame in screen coordinates.
- This is equivalent to [frameBounds.x, frameBounds.y]. Assign this value to move the window frame to a screen location; frameBounds changes to match.
  \*/
  frameLocation: Point

/\*\*

- Window-frame dimensions and location in screen-coordinate units.
  \*/
  readonly frameSize: \_Dimension

/\*\*

- Deprecated. Use ScriptUI.frameworkName instead.
  \*/
  static readonly frameworkName: string

/\*\*

- Graphics object for customizing the window's appearance during the onDraw event.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Default text justification for child text elements.
- One of left, center, or right. Justification works only when this value is set as the element is created.
  \*/
  justify: \_Justify

/\*\*

- Layout manager for this container.
- When a container object first becomes visible, ScriptUI invokes this layout manager by calling layout(). By default, the container receives an automatically created LayoutManager instance when it is created.
  \*/
  layout: AutoLayoutManager

/\*\*

- Pixel spacing between container edges and the outermost child elements.
- Separate margins can be specified for each container edge. The default value depends on container type and is chosen to match standard Adobe UI guidelines.
  \*/
  margins: \_Margins

/\*\*

- True when the window is expanded.
  \*/
  maximized: boolean

/\*\*

- True when the window is minimized or iconified.
  \*/
  minimized: boolean

/\*\*

- Window opacity in the range [0..1].
- The default value, 1.0, makes the window fully opaque; 0 makes it fully transparent. Values between those endpoints make it partially transparent.
  \*/
  opacity: number

/\*\*

- Sets how child items are arranged inside a container.
- The container's layout manager reads this value. The default LayoutManager Object accepts row, column, or stack.For without regard to case. window and panel default to column; group defaults to row. The selected orientation controls which values are valid for the container's alignChildren property and for each child's alignment property.
  \*/
  orientation: \_Orientation

/\*\*

- Keyboard combination that triggers this element's onShortcutKey() callback.
  \*/
  shortcutKey: string

/\*\*

- Pixel distance inserted between neighboring child elements.
- Since a container uses one row or one column of children, a single spacing value covers the container. The default comes from the container type and follows standard Adobe UI guidelines.
  \*/
  spacing: number

/\*\*

- Localizable string used as the title, label, or visible text.
- group containers do not use this property.
  \*/
  text: string

/\*\*

- Deprecated. Use ScriptUI.version instead.
  \*/
  static readonly version: any

/\*\*

- Builds a new window instance.
- @param type Window kind. One of: window: produces a simple application main window. (Not supported by Photoshop CS3.) palette: produces a floating palette, a non-modal dialog style. (Not supported by Photoshop CS3.) dialog: produces a modal dialog. This value may also be a ScriptUI resource specification; when it is, the remaining arguments are ignored.
- @param title Localizable string for the window title.
- @param bounds Position and dimensions for the window.
- @param properties Object whose fields are used only while the window is created.
  \*/
  constructor(
  type: "dialog" | "palette" | "window",
  title?: string,
  bounds?: \_Bounds,
  properties?: \_AddControlPropertiesWindow,
  )

/\*\*

- Creates a control or container, returns it, and places it among this window's children.
- @param type Child element type, using the same values as the type property. The JavaScript Tools Guide lists the available control types.
- @param bounds Bounds data describing the new child element's size and position relative to the parent. When supplied, it is converted into a Bounds object and assigned to the new object's bounds property.
- @param text Localizable text or label. This initial content becomes the title, label, or displayed contents according to the control type. When present, it is assigned to the new object's text property.
- @param properties Object with creation properties for the new child, used only during element creation. The supported creation properties vary by element type. See the properties property for each control type.
  \*/
  add: \_AddControl

/\*\*

- Opens a platform-standard alert dialog with a short message and an OK button.
- @param message Text shown in the message area.
- @param title Dialog title string when the platform supports alert titles. Mac OS ignores it because alert dialogs there have no title support. The default title string is "Script Alert".
- @param errorIcon When true, the dialog uses the platform-standard error icon instead of the regular alert icon. Mac OS ignores this because alert dialog icons are unsupported there.
  \*/
  static alert(message: string, title?: string, errorIcon?: boolean): void

/\*\*

- Places this window in the center of the screen or relative to another window.
- @param window Reference window. If omitted, the screen is used.
  \*/
  center(window?: Window): void

/\*\*

- Shuts this window.
- When an onClose() callback exists for the window, that function runs before the close completes.
- @param return* Number returned by the show() call that displayed this window as a modal dialog.
  \*/
  close(return*?: any): void

/\*\*

- Shows a platform-standard dialog with a short message and Yes and No buttons.
- The return value is true after Yes and false after No.
- @param message Text displayed in the dialog message area.
- @param noAsDefault When true, No becomes the default button chosen by Enter. The default is false, so Yes is initially selected.
- @param title Dialog title string, when the platform can display one. Mac OS ignores it because alert dialogs there do not use titles. Default title: "Script Alert".
  \*/
  static confirm(message: string, noAsDefault: boolean, title?: string): boolean

/\*\*

- Locates a window that already exists.
- The search covers ScriptUI resource string windows, windows a script has already made, and application-created windows when the application supports that usage. Not every application implements this function. It returns a Window object from the match or resource, or null when neither a window nor a resource can be found.
- @param type Name of a predefined resource exposed to JavaScript in the current application; alternatively, the window type. If title is also supplied, type disambiguates multiple windows sharing that title. null and the empty string are allowed.
- @param title Window title to match.
  \*/
  static find(type: string, title: string): Window

/\*\*

- Broadcasts a notification to listeners as though the named user interaction occurred.
- @param eventName Event name to simulate; if absent, the default event is used. One of: onClose, onMove, onMoving, onResize, onResizing, onShow
  \*/
  notify(eventName?: string): void

/\*\*

- Event-handler callback function invoked when this window receives keyboard focus.
- Runs after the user gives focus to the window by clicking it or otherwise activating it.
  \*/
  onActivate(): void

/\*\*

- Event-handler callback function invoked before this window closes.
- It runs when a close request arrives, either from an explicit close() call or from the OS-specific close icon in the title bar. The callback occurs before the window is actually closed, and returning false cancels the operation.
  \*/
  onClose(): void | boolean

/\*\*

- Event-handler callback function invoked when this window gives up keyboard focus.
- Runs when focus leaves the previously active window and moves to another window.
  \*/
  onDeactivate(): void

/\*\*

- Event-handler callback function invoked after the window has moved.
  \*/
  onMove(): void

/\*\*

- Event-handler callback function invoked while the window is moving.
- As the window changes position during a move, this handler can observe each update.
  \*/
  onMoving(): void

/\*\*

- Event-handler callback function invoked after the window has changed size.
  \*/
  onResize(): void

/\*\*

- Event-handler callback function invoked during a window resize.
- As height or width changes during the resize, this handler can observe each update.
  \*/
  onResizing(): void

/\*\*

- Windows only: event-handler callback function invoked when the typed shortcut-key sequence matches this window's shortcutKey value.
  \*/
  onShortcutKey(): void

/\*\*

- Event-handler callback function invoked immediately before the window appears.
- Runs when show() is requested, after automatic layout has finished but before the window becomes visible. The handler can adjust the automatic layout result.
  \*/
  onShow(): void

/\*\*

- Opens a modal dialog and returns text entered by the user.
- The text edit field value is returned after OK; Cancel yields null.
- @param prompt Text displayed as the prompt message.
- @param default\_ Initial text placed in the text edit field.
- @param title String used for the dialog title. Windows shows it in the window frame; Mac OS places it above the message. Default title: "Script Prompt".
  \*/
  static prompt(prompt: string, default\_?: string, title?: string): string | null

/\*\*

- Deletes the specified child control from this window's children array.
- Missing children do not cause an error.
- @param what Child control to remove, supplied as a 0-based index, a text property value, or a control object.
  \*/
  remove(what: any): void
  }

/\*\*

- Manages automatic layout behavior for a window or container.
- AutoLayoutManager is the subclass that supplies the default automatic layout behavior.
  \*/
  declare class AutoLayoutManager {
  /\*\*
  - Runs automatic layout for the container under management.
  - Child element sizes and positions are adjusted from the placement and alignment property values on the parent and children.
  - The first display of a window invokes this automatically. After that, scripts must call it directly when parent or child size or position changes require relayout.
  -
  - @param recalculate Optional. true forces the layout manager to recompute this container's size and the size of any child containers. The default is false.
    \*/
    layout(recalculate?: boolean): void

/\*\*

- Lays out again after a Window resize, using the new dimensions.
- After the user resizes the window, child elements in the managed container are resized according to the given alignment type.
  \*/
  resize(): void
  }

/\*\*

- Drawing pen object that stores a stroke color and line width.
- Construct it with ScriptUIGraphics.newPen(). It can be assigned to foregroundColor properties and passed to drawString() and strokePath().
  \*/
  declare class ScriptUIPen {
  /\*\*
  - Pen color data.
  - For `SOLID_COLOR`, this paint color is an array [R, B, G, A] with red, green, blue, and alpha values in the range [0.0..1.0]. opacity 0 means fully transparent; opacity 1 means fully opaque.
    \*/
    readonly color: number[]

/\*\*

- Drawing-line width, measured in pixels.
  \*/
  lineWidth: number

/\*\*

- Theme identifier.
- For `THEME_COLOR`, this is the color theme name used for drawing. The host application defines the available theme colors.
  \*/
  readonly theme: string

/\*\*

- Pen kind, either solid-color or theme-color.
- Allowed constants: ScriptUIGraphics.PenType.`SOLID_COLOR` and ScriptUIGraphics.PenType.`THEME_COLOR`
  \*/
  readonly type: typeof ScriptUIGraphics.PenType
  }

/\*\*

- Painting brush object that stores the color or pattern used to fill paths.
- Construct it with ScriptUIGraphics.newBrush(). It can be assigned to backgroundColor properties and passed to fillPath().
  \*/
  declare class ScriptUIBrush {
  /\*\*
  - Brush color data.
  - For `SOLID_COLOR`, this paint color is an array [R, B, G, A] with red, green, blue, and alpha values in the range [0.0..1.0]. opacity 0 means fully transparent; opacity 1 means fully opaque.
    \*/
    readonly color: number[]

/\*\*

- Theme identifier.
- For `THEME_COLOR`, this is the color theme name used for drawing. The host application defines the available theme colors.
  \*/
  readonly theme: string

/\*\*

- Brush kind, either solid-color or theme-color.
- Allowed constants: ScriptUIGraphics.BrushType.`SOLID_COLOR` and ScriptUIGraphics.BrushType.`THEME_COLOR`
  \*/
  readonly type: typeof ScriptUIGraphics.BrushType
  }

/\*\*

- Helper object that holds a drawing path for a figure rendered into a window or control.
- Use the newPath(), moveto(), lineto(), rectPath(), and ellipsePath() methods to build it. It may be assigned to currentPath, where methods such as closePath() operate on it. It may also be passed as the optional argument to fillPath() and strokePath(); without that argument, those methods use the current path.
  \*/
  declare class ScriptUIPath {}

/\*\*

- Custom graphics object exposed through the graphics property on windows, containers, and controls.
- Scripts can alter parts of an element's appearance, including color and font, by setting these properties or calling these functions from an onDraw callback. Measurements use pixels throughout.
  \*/
  declare class ScriptUIGraphics {
  /\*\*
  - Values used by newBrush() for its type argument.
  - Constants: `SOLID_COLOR`, `THEME_COLOR`.
    \*/
    static readonly BrushType: typeof \_BrushOrPenType

/\*\*

- Values used by newPen() for its type argument.
- Constants: `SOLID_COLOR`, `THEME_COLOR`.
  \*/
  static readonly PenType: typeof \_BrushOrPenType

/\*\*

- Container background color; on non-containers, the inherited parent background color.
- This brush object defines the paint color and style. Support is limited to controls such as dropdownlist, edittext, and listbox.
  \*/
  backgroundColor: ScriptUIBrush

/\*\*

- Active drawing path represented by a path object.
  \*/
  readonly currentPath: ScriptUIPath

/\*\*

- Current location inside the active drawing path.
  \*/
  readonly currentPoint: Point

/\*\*

- Disabled or inactive background color for containers; on non-containers, the inherited parent background color.
- This brush object defines the paint color and style. Support is limited to controls such as dropdownlist, edittext, and listbox.
  \*/
  disabledBackgroundColor: ScriptUIBrush

/\*\*

- Text color used while the element is disabled or inactive.
- This pen object defines the paint color and style.
  \*/
  disabledForegroundColor: ScriptUIPen

/\*\*

- Default font used when rendering text.
  \*/
  font: ScriptUIFont

/\*\*

- Text color for the element.
- This pen object defines the paint color and style.
  \*/
  foregroundColor: ScriptUIPen

/\*\*

- Closes the active path.
- A line is added from currentPoint to the starting point of currentPath.
  \*/
  closePath(): void

/\*\*

- Renders a focus ring inside a region of this element.
- @param left Left coordinate of the region, relative to this element's origin.
- @param top Top coordinate of the region, relative to this element's origin.
- @param width Region width in pixels.
- @param height Region height in pixels.
  \*/
  drawFocusRing(left: number, top: number, width: number, height: number): void

/\*\*

- Renders an image within a specified element region.
- The drawn version of the image matches the element's current state.
- @param image Image object to render. It contains versions for different element states, including a dimmed version for the disabled state.
- @param left Left coordinate of the region, relative to this element's origin.
- @param top Top coordinate of the region, relative to this element's origin.
- @param width Width in pixels. If supplied, the image is stretched or shrunk to fit; otherwise, the original image width is used.
- @param height Height in pixels. If supplied, the image is stretched or shrunk to fit; otherwise, the original image height is used.
  \*/
  drawImage(image: ScriptUIImage, left: number, top: number, width?: number, height?: number): void

/\*\*

- Draws the platform-specific control associated with this element.
  \*/
  drawOSControl(): void

/\*\*

- Draws text from a specified point in this element, using the supplied pen and font.
- @param text Text string to render.
- @param pen Drawing pen used for the text.
- @param x Left coordinate, relative to this element's origin.
- @param y Top coordinate, relative to this element's origin.
- @param font Font used for drawing. Defaults to this object's font value.
  \*/
  drawString(text: string, pen: ScriptUIPen, x: number, y: number, font?: ScriptUIFont): void

/\*\*

- Creates an elliptical path inside a rectangular area in the currentPath object; fillPath() can fill it and strokePath() can stroke it.
- The returned Point object represents the area's upper-left corner and becomes currentPoint.
- @param left Left coordinate of the region, relative to this element's origin.
- @param top Top coordinate of the region, relative to this element's origin.
- @param width Region width in pixels.
- @param height Region height in pixels.
  \*/
  ellipsePath(left: number, top: number, width: number, height: number): Point

/\*\*

- Paints a path with a supplied brush.
- @param brush Brush object that supplies the fill color.
- @param path Path object. Defaults to currentPath.
  \*/
  fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void

/\*\*

- Appends a path segment to currentPath.
- The line runs from currentPoint to the destination point. The returned Point object is the destination and becomes the new currentPoint value.
- @param x X coordinate of the destination point, relative to this element's origin.
- @param y Y coordinate of the destination point, relative to this element's origin.
  \*/
  lineTo(x: number, y: number): Point

/\*\*

- Computes the space required to render a string with the chosen font.
- Returns a Dimension object containing the string's pixel height and width.
- @param text Text string to measure.
- @param font Font used for measurement. Defaults to this object's font value.
- @param boundingWidth Bounding width.
  \*/
  measureString(text: string, font?: ScriptUIFont, boundingWidth?: number): \_Dimension

/\*\*

- Adds a point to currentPath and makes that point the current drawing position.
- The returned Point object becomes the new currentPoint value.
- @param x X coordinate of the new point, relative to this element's origin.
- @param y Y coordinate of the new point, relative to this element's origin.
  \*/
  moveTo(x: number, y: number): Point

/\*\*

- Allocates a new brush for painting.
- @param type Brush kind. Use ScriptUIGraphics.BrushType.`SOLID_COLOR` or ScriptUIGraphics.BrushType.`THEME_COLOR`.
- @param color Brush color. For `SOLID_COLOR`, use [R, B, G, A] with three or four numeric entries for red, green, blue, and optional opacity (alpha channel). Numbers must fall in [0.0..1.0]; opacity 0 is fully transparent and opacity 1 is fully opaque. For `THEME_COLOR`, pass the theme name string. The host application supplies the available theme colors.
  \*/
  newBrush(type: typeof ScriptUIGraphics.BrushType, color: number[]): ScriptUIBrush
