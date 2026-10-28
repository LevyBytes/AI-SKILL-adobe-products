# Window object - Window Object constructor

A `new Window` call returns a Window object, or returns null when the window cannot be created.

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
new Window (type [, title, bounds, {creation_properties}]);
```

| Parameter | Type | Description |
| --- | --- | --- |
| type | String | Window category. One of: - "dialog" - Builds a modal dialog. - "palette" - Builds a modeless floating-palette dialog. (Not supported by Photoshop CC.) - "window" - Builds a basic top-level window for use as an application's main window. (Not supported by Photoshop CC.) When this argument is a ScriptUI resource specification, ScriptUI ignores every other argument. See Resource specifications. |
| title | String | Optional. Text for the window title. This string can be localized. |
| bounds | Bounds object. | Optional. Position and dimensions for the window. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Parameter | Type | Description |
| --- | --- | --- |
| resizeable | Boolean | If true, the user may resize the window. Default is false. |
| su1PanelCoordinates | Boolean | (Photoshop only) If true, child panels in this window adjust their children's positions automatically for compatibility with Photoshop CS, where the vertical coordinate was taken outside the frame. A panel can override the setting inherited from its parent window. Default is false. |
| closeButton | Boolean | If true, the title bar gets a close button when the platform and window type permit one. If false, that button is omitted. Dialogs do not use this property. Default is true. |
| maximizeButton | Boolean | If true, the title bar gets a button that can enlarge the window to its maximum size, typically the whole screen, when supported by the platform and window type. If false, that button is omitted. Dialogs do not use this property. Default is false for type palette, true for type window. |
| minimizeButton | Boolean | If true, the title bar gets a button that minimizes or iconifies the window when supported by the platform and window type. If false, that button is omitted. Main windows cannot have a minimize button in Mac OS. Dialogs do not use this property. Default is false for type palette, true for type window. |
| independent | Boolean | If true, a window whose type is window is independent from other application windows and can sit behind them on Windows. In Mac OS, this setting has no effect. Default is false. |
| borderless | Boolean | If true, the window is drawn without a title bar or borders. Settings for those title-bar and border features are ignored. |
