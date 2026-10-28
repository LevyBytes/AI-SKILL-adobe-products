# Other fixes

- `solidColor.cmyk` no longer reports `undefined` for the `yellow` color, and the setter now works.
- `SolidColor` now validates ranges across every color mode and component, preventing invalid values and fixing invalid hex code input.
- A setter was added for `app.backgroundColor`, allowing it to be changed.
- `app.backgroundColor` and `app.foregroundColor` no longer fail when the selected color is not RGB.\*
- RGB32 is currently unsupported. When RGB 32 bit per channel data is obtained, Photoshop converts it automatically to the closest supported RGB 16 bit per channel form.
