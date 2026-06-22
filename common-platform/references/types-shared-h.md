# Shared (cont. 7)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_ScriptUI_d_ts

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

- Handles the moment when a treeview node that had been open is collapsed by the user.
- @param item The ListItem node that just collapsed.
  \*/
  onCollapse(item: ListItem): void

/\*\*

- Runs after this element no longer owns keyboard focus.
- This happens when focus moves away from the control that had been active and onto another control.
  \*/
  onDeactivate(): void

/\*\*

- Runs immediately before the window drawing pass.
- The handler can adjust the visual result through the control's ScriptUIGraphics object and receives one DrawState argument.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Handles the moment when a collapsed treeview node is opened by the user.
- @param item The ListItem node that just expanded.
  \*/
  onExpand(item: ListItem): void

/\*\*

- Runs when the element's shortcutKey sequence is entered in the active window.
- Windows only.
  \*/
  onShortcutKey(): void

/\*\*

- Deletes one child entry from the list.
- @param what Identifies the entry to remove by 0-based position in the top-level list, by text value, or as a ListItem object.
  \*/
  remove(what: any): void

/\*\*

- Clears every child entry from the list.
  \*/
  removeAll(): void
  }

/\*\*

- Control wrapper for a Flash Player that loads and plays Flash movies from SWF files.
- In ScriptUI, the FlashPlayer element hosts the Flash application inside an Adobe application. The Flash application uses ActionScript, whose JavaScript implementation differs from the ExtendScript JavaScript used by Adobe applications. Objects of this control type provide functions for loading SWF files, managing movie playback, and communicating with the ActionScript environment.
  \*/
  declare class FlashPlayer extends \_Control {
  /\*\*
  - True when this element is the active one.
  - The active control has keyboard focus: it receives keystrokes, or for a Button is chosen by Return or Enter on Windows, or by the space bar on Mac OS.
    \*/
    active: boolean

title: string
titleLayout: \_TitleLayout

/\*\*

- Defines a callback that Flash ActionScript code can call from its own environment.
- Flash ActionScript can invoke any callback supplied on the ExtendScript side of the FlashPlayer object by using the callback name as a property of the control object. The function may receive supported argument types and may return any supported value type. Supported data types: Number, String, Boolean, null, undefined, Object, Array.
  \*/
  callback(): void

/\*\*

- Calls an ActionScript function that exists in the loaded Flash application.
- The call returns that function's result, provided the value is one of the permitted types. Return values cannot be ActionScript class objects or date objects.
- @param name Name of a Flash ActionScript function registered with the ExternalInterface object by the active SWF file.
- @param argument Value passed into the function. Any number of arguments may be supplied. Each argument must use one of these data types: Number, String, Boolean, null, undefined, Object, Array. Other data types are unsupported.
  \*/
  invokePlayerFunction(name: string, argument?: any): any

/\*\*

- Opens an SWF movie in the Flash Player and starts playback.
- @param file File object for the SWF file to be loaded.
  \*/
  loadMovie(file: File): void

/\*\*

- Sends a notification as though the named user-interaction event had occurred.
- @param eventName Name of the control event handler to invoke. One of: onClick, onChange, onChanging. By default, edittext controls simulate onChange, while controls that support onClick simulate onClick.
  \*/
  notify(eventName?: string): void

/\*\*

- Starts again from a movie that has been stopped.
- Do not call this while the movie is already playing. The stopMovie()-playMovie() sequence fails for SWF files created by Flex and for some Flash Authoring files, depending on their implementation.
- @param rewind When true, starts the movie over at the beginning; otherwise playback resumes from the point where it stopped.
  \*/
  playMovie(rewind: boolean): void

/\*\*

- Stops playback for the movie that is currently loaded.
- The stopMovie()-playMovie() sequence fails for SWF files generated by Flex and for some Flash Authoring output, depending on implementation. Calling stopMovie() from the player host does not affect an SWF running inside a ScriptUI Flash Player element. However, Flash Authoring can produce an SWF that stops itself after user interaction.
  \*/
  stopMovie(): void
  }

/\*\*

- Container control that holds other controls in a window.
- A group may define layout settings for child elements. Hiding the group hides all children, and showing the group shows any children whose own visibility state is not hidden.
  \*/
  declare class Group extends \_Control {
  /\*\*
  - Describes how child elements with different sizes line up inside a row or column of this container.
  - Creation order sets which children appear nearest the top of a column or nearest the left side of a row; earlier children are placed closer to that top or left edge. A child-level alignment value, when present, overrides the parent container's alignChildren setting. See alignment property for values.
    \*/
    alignChildren: \_AlignmentProperty

/\*\*

- Array containing this element's children.
  \*/
  readonly children: \_Control[]

/\*\*

- ScriptUIGraphics object available for custom drawing during the onDraw() event.
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Layout manager assigned to this container.
- When a container first becomes visible, ScriptUI runs this manager through its layout() function. Unless replaced, the value is an AutoLayoutManager instance based on LayoutManager and created automatically with the container element.
  \*/
  layout: AutoLayoutManager

/\*\*

- Pixel distance from the container edges to the outermost child elements.
- Each edge can have its own margin. Defaults depend on the container type and are selected to follow standard Adobe UI guidelines.
  \*/
  margins: \_Margins

/\*\*

- Direction used to lay out the children of this container.
- The container's layout manager interprets the value. The default LayoutManager object accepts row, column, or stack without regard to case. For window and panel, the default is column; for group, the default is row. The legal values for this container's alignChildren and for child alignment properties depend on orientation.
  \*/
  orientation: \_Orientation

/\*\*

- Pixel gap between a child element and the adjacent sibling element.
- Because a container owns just one row or one column of children, one spacing number is sufficient. The default depends on the container type and is chosen to match standard Adobe UI guidelines.
  \*/
  spacing: number

/\*\*

- Creates a child control or container and places it in this container.
- The new control or container object is returned after being added to the group's children.
- @param type Child element type, using the same values as the type property. Control types are enumerated in the JavaScript Tools Guide.
- @param bounds Size and position description for the new control or container relative to its parent. When provided, this value creates a new Bounds object and assigns it to the new object's bounds property.
- @param text Localizable text or label. It supplies the starting title, label, or contents shown by the control, depending on the control type. When supplied, this value becomes the new object's text property.
- @param properties Object containing one or more creation-only properties for the new child. Available creation properties vary by element type. See the properties property for each control type.
  \*/
  add: \_AddControl

/\*\*

- Runs just before the group is drawn.
- The handler can change or manage appearance through the control's ScriptUIGraphics object and receives one DrawState argument.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Takes the selected child control out of this group's children array.
- No error is reported when the child is not present.
- @param what Child control to remove, identified by 0-based index, by text property value, or by passing the control object.
  \*/
  remove(what: any): void
  }

/\*\*

- Framed or unframed container for other control types.
- A panel may define layout settings for its child elements. Hiding the panel hides all children, and showing it makes visible those children whose own visibility state is not hidden.
  \*/
  declare class Panel extends \_Control {
  /\*\*
  - Sets the alignment behavior for child elements.
    \*/
    alignChildren: \_AlignmentProperty

/\*\*

- Reserves room for the requested character count and affects preferredSize calculation.
  \*/
  characters: number

/\*\*

- Array containing this element's children.
  \*/
  readonly children: \_Control[]

/\*\*

- ScriptUIGraphics object available for appearance customization while handling onDraw().
  \*/
  readonly graphics: ScriptUIGraphics

/\*\*

- Default text justification for child text elements.
- Accepts left, center, or right. Justification has an effect only when this value is set during element creation.
  \*/
  justify: \_Justify

/\*\*

- Layout manager assigned to this container.
- When a container first becomes visible, ScriptUI runs this manager through its layout() function. Unless replaced, the value is an AutoLayoutManager instance based on LayoutManager and created automatically with the container element.
  \*/
  layout: AutoLayoutManager

/\*\*

- Pixel distance from the container edges to the outermost child elements.
- Each edge can have its own margin. Defaults depend on the container type and are selected to follow standard Adobe UI guidelines.
  \*/
  margins: \_Margins

/\*\*

- Direction used to lay out the children of this container.
- The container's layout manager interprets the value. The default LayoutManager Object accepts row, column, or stack without regard to case. For window and panel, the default is column; for group, the default is row. The legal values for this container's alignChildren and for child alignment properties depend on orientation.
  \*/
  orientation: \_Orientation

/\*\*

- Pixel gap between a child element and the adjacent sibling element.
- Because a container owns just one row or one column of children, one spacing number is sufficient. The default depends on the container type and is chosen to match standard Adobe UI guidelines.
  \*/
  spacing: number

/\*\*

- Localizable title or label text.
  \*/
  text: string

/\*\*

- Creates a child control or container and places it in this container.
- The new control or container object is returned after being appended to the container's children.
- @param type Child element type, using the same values as the type property. Control types are enumerated in the JavaScript Tools Guide.
- @param bounds Size and position description for the new control or container relative to its parent. When provided, this value creates a new Bounds object and assigns it to the new object's bounds property.
- @param text Localizable text or label. It supplies the starting title, label, or contents shown by the control, depending on the control type. When supplied, this value becomes the new object's text property.
- @param properties Object containing one or more creation-only properties for the new child. Available creation properties vary by element type. See the properties property for each control type.
  \*/
  add: \_AddControl

/\*\*

- Runs just before the panel is drawn.
- The handler can change or manage appearance through the control's ScriptUIGraphics object and receives one DrawState argument.
  \*/
  onDraw(drawState: DrawState): void

/\*\*

- Takes the selected child control out of this group's children array.
- No error is reported when the child is not present.
- @param what Child control to remove, identified by 0-based index, by text property value, or by passing the control object.
  \*/
  remove(what: any): void
  }

/\*\*

- Container for other control types.
- Unlike a panel element, a tab must be a direct child of a tabbedpanel element, displays its title in the selection tab, and has no border that scripts can define.
  \*/
  declare class Tab extends Panel {
  /\*\*
  - Parent element for this tab.
    \*/
    readonly parent: TabbedPanel
    }

/\*\*

- Container that owns selectable tab containers.
- Unlike a panel element, this container accepts only tab elements as direct children.
  \*/
  declare class TabbedPanel extends \_Control {
  /\*\*
  - Array containing this element's child tabs.
    \*/
    readonly children: Tab[]

/\*\*

- Tab that is selected at the moment.
- Assigning this value enables the specified tab in the panel.
- The value may be assigned with an item index instead of an object reference.
- An out-of-range index is ignored.
- Even when an index is used for assignment, reading the property returns an object reference.
- Whenever selection changes, whether from user choice or script assignment, TabbedPanel is notified through onChange.
  \*/
  selection: Tab | number

title: string
titleLayout: \_TitleLayout

/\*\*

- Appends a tab to this tabbed panel.
- Returns the newly created tab control object.
-
- Note: supply `undefined` for `bounds`; the value is ignored.
  \*/
  add(type: "tab", bounds?: undefined, text?: string, properties?: \_AddControlProperties): Tab

/\*\*

- Runs after the selected tab changes.
  \*/
  onChange(): void
  }

/\*\*

- Location value for a window or UI element, represented as a 2-element array.
- It stores the origin point as x-axis and y-axis pixel offsets measured from this element coordinate-space origin.
- Setting an element's location property creates a Point object. The property can be supplied either as a JavaScript object with x and y properties or as a 2-value array ordered [x, y].
  \*/
  declare class Point extends Array<number> {
  /\*\*
  - Left coordinate value.
    \*/
    left: number

/\*\*

- Top coordinate value.
  \*/
  top: number

/\*\*

- X-axis pixel offset from this element coordinate-space origin.
  \*/
  x: number

/\*\*

- Y-axis pixel offset from this element coordinate-space origin.
  \*/
  y: number
  }

/\*\*

- Size value for a window or UI element, represented as a 2-element array.
- It records element height and width in pixels. Setting an element's size property creates a Dimension object. The property can be supplied either as a JavaScript object with named properties {width: wd, height: ht} or as a 2-value array ordered [wd, ht].
  \*/
  declare class Dimension extends Array<number> {
  /\*\*
  - Height in pixels.
    \*/
    height?: number

/\*\*

- Width in pixels.
  \*/
  width?: number
  }

/\*\*

- Boundary rectangle for a window in screen coordinates, or for a UI element in its container's coordinate space.
- Setting an element's bounds property creates a Bounds object. The property can be supplied either as a JavaScript object with left, top, right, bottom or x, y, width, height properties, or as a 4-value array ordered [x, y, wd, ht].
  \*/
  declare class Bounds extends Array<number> {
  /\*\*
  - Y-axis pixel offset from this element coordinate-space origin.
    \*/
    bottom?: number

/\*\*

- Height in pixels.
  \*/
  height?: number

/\*\*

- X-axis pixel offset from this element coordinate-space origin.
  \*/
  left?: number

/\*\*

- Width in pixels.
  \*/
  right?: number

/\*\*

- Height in pixels.
  \*/
  top?: number

/\*\*

- Width in pixels.
  \*/
  width?: number

/\*\*

- X-axis pixel offset from this element coordinate-space origin.
  \*/
  x?: number

/\*\*

- Y-axis pixel offset from this element coordinate-space origin.
  \*/
  y?: number
  }

/\*\*

- Pixel margin values between a container's edges and its outermost child elements.
- The array [ left, top, right, bottom ] stores the margin between the container's left edge and leftmost child, and likewise for the other edges.
-
- Setting an element's margins property creates a Margins object.
- Object form requires properties named left, top, right, and bottom.
- Array form must order values as [ left, top, right, bottom ].
- A single numeric value may also be assigned to margins, in which case every array value receives that number.
  \*/
  declare class Margins extends Array<number> {
  /\*\*
  - Pixel distance between the container's left edge and its leftmost child element.
    \*/
    left: number
    /\*\*
  - Pixel distance between the container's right edge and its rightmost child element.
    \*/
    right: number
    /\*\*
  - Pixel distance between the container's top edge and its top child element.
    \*/
    top: number
    /\*\*
  - Pixel distance between the container's bottom edge and its bottom child element.
    \*/
    bottom: number
    }

/\*\*

- Input-event data for an event as it moves through a container and control hierarchy.
- It follows W3C standard event handling. An instance is delivered to a function registered for events of a chosen type on a window or control. Register handlers with windowObj.addEventListener() or controlObj.addEventListener().
  \*/
  declare class UIEvent {
  /\*\*
  - True when this event type supports bubbling.
    \*/
    readonly bubbles: boolean

/\*\*

- True when preventDefault() can cancel the default action tied to this event.
  \*/
  readonly cancelable: boolean

/\*\*

- True when this event can be captured.
  \*/
  readonly captures: boolean

/\*\*

- Event target object currently processing the event; during capture and bubble phases it differs from target.
  \*/
  readonly currentTarget: boolean

/\*\*

- Click tally for mouse events.
  \*/
  readonly detail: any

/\*\*

- Event propagation phase currently active; one of none, target, capture, bubble.
  \*/
  readonly eventPhase: number

/\*\*

- Target object for this event.
  \*/
  readonly target: object

/\*\*

- Date and time when the event occurred.
  \*/
  readonly timeStamp: Date

/\*\*

- Event name represented by this object.
- Event types are listed in the JavaScript Tools Guide.
  \*/
  readonly type: string

/\*\*

- ScriptUI element associated with this event.
  \*/
  readonly view: any

/\*\*

- Creates an event object.
- ScriptUI normally creates the UIEvent object and supplies it to the event handler. To simulate a user action, construct an event object and send it to a target object's dispatchEvent() function.
- @param type Event type. See UIEvent.type property.
- @param captures Set to true when this event can be captured.
- @param bubbles Set to true when the event bubbles.
- @param view ScriptUI element associated with this event.
- @param detail Click tally for mouse events.
  \*/
  constructor(type: string, captures: boolean, bubbles: boolean, view?: object, detail?: number)

/\*\*

- Sets up a UI event as a core W3C event.
- @param type Event type.
- @param captures Set to true when this event can be captured.
- @param bubbles Set to true when the event bubbles.
- @param cancelable Set to true when callers may cancel the default action.
  \*/
  initEvent(type: string, captures: boolean, bubbles: boolean, cancelable: boolean): void

/\*\*

- Sets up an event object.
- @param type Event type.
- @param captures Set to true when this event can be captured.
- @param bubbles Set to true when the event bubbles.
- @param view ScriptUI element associated with this event.
- @param detail Click tally for mouse events.
  \*/
  initUIEvent(
  type: string,
  captures: boolean,
  bubbles: boolean,
  view?: object,
  detail?: number,
  ): void

/\*\*

- Blocks the default action tied to this event from running.
  \*/
  preventDefault(): void

/\*\*

- Stops this event from continuing through propagation.
  \*/
  stopPropagation(): void
  }

/\*\*

- Base class used by UIEvent.
- Stores input-event data as an event travels through a container and control hierarchy, following W3C event-handling rules.
  \*/
  declare class Event {
  /\*\*
  - \*/
    static readonly `AT_TARGET`: any

/\*\*

- \*/
  static readonly `BUBBLING_PHASE`: any

/\*\*

- \*/
  static readonly `CAPTURING_PHASE`: any

/\*\*

- \*/
  static readonly `NOT_DISPATCHING`: any

/\*\*

- True when this event type supports bubbling.
  \*/
  readonly bubbles: boolean

/\*\*

- True when preventDefault() can cancel the default action tied to this event.
  \*/
  readonly cancelable: boolean

/\*\*

- True when this event can be captured.
  \*/
  readonly captures: boolean

/\*\*

- Event target object currently processing the event; during capture and bubble phases it differs from target.
  \*/
  readonly currentTarget: boolean

/\*\*

- Event propagation phase currently active; one of none, target, capture, bubble.
  \*/
  readonly eventPhase: number

/\*\*

- Target object for this event.
  \*/
  readonly target: object

/\*\*

- Date and time when the event occurred.
  \*/
  readonly timeStamp: Date

/\*\*

- Event name represented by this object.
- Event types are listed in the JavaScript Tools Guide.
  \*/
  readonly type: string

/\*\*

- Blocks the default action tied to this event from running.
  \*/
  preventDefault(): void

/\*\*

- Stops this event from continuing through propagation.
  \*/
  stopPropagation(): void
  }

/\*\*

- Attributes describing the ScriptUI environment.
- Read them through the ScriptUI.environment property.
  \*/
  declare class Environment {
  /\*\*
  - Object reporting the keyboard's active state at any moment.
  - It exposes key state without depending on the event-handling framework.
    \*/
    readonly keyboardState: KeyboardState
    }

/\*\*

- Objects used by the ScriptUI event system.
- Access them through ScriptUI.events.
  \*/
  declare class Events {
