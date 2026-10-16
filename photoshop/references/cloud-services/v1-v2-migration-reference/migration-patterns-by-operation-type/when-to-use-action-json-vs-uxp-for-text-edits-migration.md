# When to use ActionJSON vs UXP for text edits migration

**When to use ActionJSON vs UXP for text edits:**

| Use Case | Use |
| --- | --- |
| Fixed edits (font, size, color) for known layer names | ActionJSON (`options.actions`) |
| Conditional edits (only if layer is text type, only if name matches) | UXP (`options.uxp`) |
| Iterate all layers and apply logic | UXP |
| Toggle or state-based changes (e.g. bold to regular) | UXP |

**ActionJSON pattern** (stringified and supplied in `options.actions[].source.content` with `contentType: "application/json"`):

1. `select` layer by `_name`, then set `makeVisible: true`
2. `set` textStyle for font size, using `size` with `_unit: "pointsUnit"`, `textOverrideFeatureName: 808465458`, and `typeStyleOperationType: 3`
3. `set` textStyle for font, using `fontPostScriptName`, `fontName`, and `fontStyleName`
4. `set` textStyle for color, using `color` with `_obj: "RGBColor"`, `red`, `green`, and `blue`

For several layers, repeat the `select` plus `set` sequence inside one stringified ActionJSON array.

**UXP pattern** (send the script through `options.uxp.source.content` with `contentType: "application/javascript"`):

- Use `core.executeAsModal()` when modifying the document
- Use `layer.kind === "text"` to find text layers
- Use `layer.textItem.characterStyle` to change `fauxBold`, `fauxItalic`, and related values
- Put script output files under `plugin-temp:/filename.ext`
