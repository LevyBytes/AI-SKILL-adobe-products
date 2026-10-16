# General Issues

- Plugin icons can use SVG files, but UXP does not implement every SVG feature. Test any SVG icon before releasing a plugin that places SVG icons in the Plugin Panel.
- Delaying `require("uxp").entrypoints.setup()` instead of calling it right at plugin startup can produce an uncatchable error. The behavior seems tied to how soon the `setup` function runs relative to the first rendered frames. Short delays below about ~20ms are likely to succeed, while longer delays are more likely to fail. Calling this function later should not throw, and a future release will correct it. (PS-57605)
- Panel-less plugins currently throw errors when using the UXP clipboard APIs. A future release will correct this. (UXP-15542)
