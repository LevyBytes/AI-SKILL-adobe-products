# Spectrum UXP Components

- Buttons do not show a visual focus state when focus comes from the keyboard.
- Give each `sp-dropdown` element a set width. If no width is set, the dropdown sizes itself from the current selection, which can make menu items look truncated, wrapped, or otherwise misformatted.
- macOS does not allow reading password field values. As a workaround, change `type` to `text` on `focus`, then restore `password` on `blur`.
- A Spectrum UXP control, including a button, can trigger an endless chain of `click` events when it opens a file picker or browser. Until UXP fixes this, guard your code against the loop or use a native widget instead. (PS-57264)
- Dropdowns currently ignore arrow-key input; a future update will fix this.
- The `location` attribute on `sp-tooltip` may look like it positions the tooltip relative to the attached element, but that is not its actual role. It sets the direction of the tooltip's tip. When `location` is `bottom`, the tip points upward because the tooltip is expected to have been placed below the control beforehand. (PS-56708) _Improved tooltip handling is planned for a future release_.
- Numeric `sp-textfield` controls can raise numeric validation errors even for values that appear valid. A future release will address this. Photoshop's broader numeric-field range limitation is a separate issue. (PS-57698)
