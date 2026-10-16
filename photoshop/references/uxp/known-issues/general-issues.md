# General Issues

- Plugin icons can use SVG files, but UXP does not implement every SVG feature. Test any SVG icon before shipping a Plugin Panel that uses one.
- Calling `require("uxp").entrypoints.setup()` after plugin startup, rather than immediately, can produce an error that cannot be caught. The behavior appears tied to how soon `setup` runs relative to the first few display frames being drawn. When the delay is brief (less than ~20ms), the call will probably work; with a longer delay, the error is likely. Delaying this function call should not throw errors, and a future release will address it. (PS-57605)
- Panel-less plugins throw errors when they attempt to use the UXP clipboard APIs. This will be fixed in a future release. (UXP-15542)
