# Spectrum UXP Components

- Buttons do not show a visual state when keyboard focus reaches them.
- Give `sp-dropdown` elements an explicit width; otherwise each one sizes itself from the currently selected item. Items inside the dropdown can then look truncated, wrapped, or otherwise poorly formatted.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then return it to `password` on `blur`.
- Opening a file picker or browser from a Spectrum UXP control, for example a button, can produce an endless stream of `click` events. Until UXP fixes this, add guard logic that stops the loop or switch to a native widget. (PS-57264)
- Arrow keys do not currently operate dropdowns; a later update should fix this.
- The `location` attribute on `sp-tooltip` may look like it positions the tooltip against its attachment, but it does not. Instead, the attribute controls which direction the tooltip's "tip" points. With `location` set to `bottom`, the tip points upward on the assumption that your code already put the tooltip beneath the control. (PS-56708) _A future release is expected to improve tooltip handling_.
- A numeric `sp-textfield` may report numeric validation errors even for values that appear valid. This is planned for a future release. Separately, valid-range limits come from a broader Photoshop numeric-field issue. (PS-57698)
