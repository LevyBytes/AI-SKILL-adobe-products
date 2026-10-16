# Entrypoint Setup

The `entrypoints.setup()` API defines handlers and menu items for entry points declared in the manifest. The `entrypoints` object is made up of 3 objects:

1. plugin: Accepts either an object or a function. A function is treated as the `create` handler described below.
   - `create()`: Runs after the plugin has loaded.
   - `destroy()`: Runs before the plugin unloads.
2. panels: Holds key-value pairs where each key is a panel id (string), and the value is that panel's data as either an object or a function. A function value is treated as the `show` method described below. An object value can use the properties below, but it must define `create` or `show`. On success, each function below returns a promise; to report failure, throw an exception or return a rejected promise.
   - `create()`: Runs when a panel is created.
   - `show()`: Runs when a panel is displayed.
   - `hide()`: Runs when a panel is hidden.
   - `destroy()`: Runs before a panel is destroyed.
   - `invokeMenu()`: Runs when a panel menu item is invoked. The menu id is supplied as this function's first argument.
   - `menuItems`: An array containing menu items. Each entry is either a string or an object with the properties below, kept in the same order as in this array. To add a separator, use "-" as the value or a menu item whose label is "-".
     - {string} id - menu item identifier.
     - {string} label - menu item display text. Localize this value. When label is omitted, id becomes the label.
     - {boolean} enabled - menu item enabled/disabled state. Default - true.
     - {boolean} checked - menu item checked state. Default - false.
     - {Array} submenu - submenu for this menu item, also represented as an array of `menuItems`. Submenu `id` values still need to be unique across the panel.
3. commands: Maps each command ID to its command data, which may be an object or a function. A function command value is treated as the `run()` method.
   - `run()`: Runs when the command is invoked from the menu entry.
   - `cancel()`: Runs when the command is cancelled or aborted before finishing.
