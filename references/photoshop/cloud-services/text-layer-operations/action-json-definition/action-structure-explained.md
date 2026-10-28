# Action structure explained

| Step | Operation | Description |
| --- | --- | --- |
| 1 | `select` | Locates the layer by name. Set `_name` to your text layer. `makeVisible: true` makes the layer visible before the edit. |
| 2 | `set` (textStyle) | Sets font size through `size` (points). |
| 3 | `set` (textStyle) | Sets the font using `fontPostScriptName`, `fontName`, `fontStyleName`. |
| 4 | `set` (textStyle) | Sets `color` with `RGBColor` values for red, green, and blue. |

**Customizing actions:** Set `_name` to your layer name. Change the `to` object in each `set` step to alter size, font (`fontPostScriptName`, `fontName`, `fontStyleName`), or color (`RGBColor`). Add, remove, or reorder steps as required. For multiple layers, repeat the `select` plus `set` pattern.
