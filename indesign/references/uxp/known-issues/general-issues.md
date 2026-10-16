# General Issues

- Plugin icons can use SVG files, but because UXP does not implement every SVG feature, test an SVG icon before you ship a plugin that uses one in the Plugin Panel.
- Delaying `require("uxp").entrypoints.setup()` instead of calling it as the plugin starts can produce an error that cannot be caught. The timing appears tied to how soon the `setup` function runs compared with the first frames drawn to the display. Very short delays, under roughly ~20ms, will probably still work; longer delays are more likely to fail. A delayed call should not throw, and a future release will correct this. (PS-57605)
- Panel-less plugins throw errors when they try to use the UXP clipboard APIs. A later release will correct this behavior. (UXP-15542)
