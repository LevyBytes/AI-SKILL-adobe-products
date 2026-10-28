# Spectrum UXP Components

- Buttons do not show keyboard focus.
- Give `sp-dropdown` elements an explicit width; otherwise each one sizes itself from the currently selected item, which can make dropdown items truncate, wrap, or format oddly.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then change it back to `password` on `blur`.
- When a Spectrum UXP control such as a button opens a file picker or browser, it can cause an endless stream of `click` events. Until UXP fixes this, add logic that blocks the loop or use a native widget instead. (PS-57264)
- Dropdowns do not currently respond to arrow keys; a future update will correct this.
- For `sp-tooltip`, the `location` attribute may look like it positions the tooltip relative to the attached control. Instead, it controls the tooltip's "tip" direction. With `location` set to `bottom`, the tip points upward; this assumes your code has positioned the tooltip below the control already. (PS-56708) _Future releases will improve tooltip handling_.
- Numeric `sp-textfield` controls can raise numeric validation errors even when the entered value appears valid. A future release will address this. Valid-range limits are a separate issue tied to numeric fields in Photoshop overall. (PS-57698)
