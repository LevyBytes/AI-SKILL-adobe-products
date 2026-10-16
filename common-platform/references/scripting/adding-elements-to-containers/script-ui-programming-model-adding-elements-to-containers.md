# ScriptUI programming model — Adding elements to containers

Use a container's add method to add elements to a window, panel, or group. The method receives the element type to create plus optional parameters that vary by element type, then returns the new object of that type.

In addition to windows, ScriptUI defines these UI elements and controls:

- Panels (frames) and groups for grouping other controls
- Push buttons that use text or icons, plus radio buttons and checkbox buttons
- Static text, images, and edit text
- Progress bars, scrollbars, sliders
- Lists, including list boxes, drop-down (also called popup) lists, and tree views. Each list entry is an item control, and the parent list's items property stores the child-item array. Tree views may also contain collapsible node-type items with their own children. Add list items with the parent's add method.

An optional bounds parameter lets you set the initial size and position of a new element relative to the parent container's working area. Extra parameters differ across element types. For text-display elements, for example, the initial text can be supplied. Details are available in the ScriptUI Classes dictionary in the ExtendScript Toolkit's Object Model Viewer.

Keep optional parameters in their defined order. Pass undefined for any parameter you do not want to set. For example, to let automatic layout set the bounds while still assigning panel and button text, this code creates Panel and Button elements with initial text but without bounds:

```javascript
dlg.btnPnl = dlg.add("panel", undefined, "Build it");
dlg.btnPnl.testBtn = dlg.btnPnl.add("button", undefined, "Test");
```

New elements are visible by default, although they do not appear until their parent object is shown.

### Creation properties

Some element types have attributes that are supplied only at creation time. They are not ordinary element properties, because they cannot be changed during the element's lifetime and are only needed once. For these types, the add method can receive an optional creation-properties argument. This object contains one or more properties that control appearance or special behavior, including edit text editability or Read only behavior. See Control object constructors for details.

The resource specification format can also provide creation properties for new objects; see Resource specifications for details.

Every UI element supports an optional creation property named name, used to identify that element. This example creates a new Button element whose name is ok:

```javascript
dlg.btnPnl.buildBtn = dlg.btnPnl.add("button", undefined, "Build", {name: "ok"});
```

Compatibility note

Photoshop CS measured panel coordinates from outside the frame, including the title bar. Photoshop CS2 measures them from inside the frame, meaning the content area. As a result, using the same vertical-position values for child controls in a panel produces slightly different placement between those versions. When adding a panel to a window, you can set the su1PanelCoordinates creation property so the panel automatically adjusts its children's positions; see the add method for panel. With automatic adjustment enabled, provide the values that were correct for Photoshop CS, and the result matches in Photoshop CS2, CS3, CS4, CS5, or CC. A window can also enable automatic adjustment; then it applies to every child panel in that window unless the child panel explicitly disables it. See Window object constructor.
