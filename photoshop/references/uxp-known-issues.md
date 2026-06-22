# Known Issues

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

These are the currently known issues. Revisit this page as future updates fix existing issues and reveal newly discovered ones.

## General Issues

- Plugin icons can use SVG files, but UXP does not implement every SVG feature. Test any SVG icon before shipping a Plugin Panel that uses one.
- Calling `require("uxp").entrypoints.setup()` after plugin startup, rather than immediately, can produce an error that cannot be caught. The behavior appears tied to how soon `setup` runs relative to the first few display frames being drawn. When the delay is brief (less than ~20ms), the call will probably work; with a longer delay, the error is likely. Delaying this function call should not throw errors, and a future release will address it. (PS-57605)
- Panel-less plugins throw errors when they attempt to use the UXP clipboard APIs. This will be fixed in a future release. (UXP-15542)

## User Interface

- `z-index` works, but widgets with text-editing behavior cannot be covered by any other element. In the same panel or dialog, text fields and text areas keep their editor layer _above_ surrounding content. Use popovers when content must appear over them, _or_ hide the blocking element while that overlay is needed.
- `window.devicePixelRatio` (and corresponding `element.uxpContainer.devicePixelRatio`) returns `1` in all cases. That value is wrong and is planned for correction later. Also keep in mind that `window.devicePixelRatio` can differ from an individual element's pixel ratio when that element is displayed on a screen whose pixel ratio does not match the primary screen.
- UXP does not handle every SVG file. Its SVG renderer is meant for simple icons and similar artwork; complex SVGs might render only partially or show up in surprising forms. Future updates should improve SVG rendering.
- Grayscale-mode images do not display. They still occupy DOM layout space, but the user will not see them.
- After the mouse cursor changes, UWP can fail to restore the cursor to its prior state.
- macOS text fields cannot open the emoji selector.
- Many SVGs display oddly in the UI. These problems are expected to be fixed later, and reports are welcome for SVGs that fail along with the workaround you used.
- On macOS Only, tabbing inside a scroll view does not scroll the view automatically to bring the target control into view.
- On Windows 10, emojis use the font color rather than the emoji's own colors.
- A control in a panel that is disabled and then enabled stops being reachable with TAB. The same problem may affect controls inserted _after_ the first time a panel is shown.
- Drag and Drop is not currently supported.
- The `Save` dialog opened through `getFileForSaving` can appear _behind_ plugin panels. The `Open` and `Folder` dialogs can occasionally behave the same way on both macOS and Windows. A future release is expected to correct this. (PS-57708)
- When `<img>` tags are placed inside a `<dialog>`, give either the image or the dialog explicit `width` and `height` values. Without those dimensions, the dialog tries to shrink to the smallest possible size, while images begin at 0x0 until at least one frame has reached the display. That combination can leave the dialog sized incorrectly.
- Embedded rotation information is not currently handled by `<img>` tags.

## Spectrum UXP Components

- Buttons do not show a visual state when keyboard focus reaches them.
- Give `sp-dropdown` elements an explicit width; otherwise each one sizes itself from the currently selected item. Items inside the dropdown can then look truncated, wrapped, or otherwise poorly formatted.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then return it to `password` on `blur`.
- Opening a file picker or browser from a Spectrum UXP control, for example a button, can produce an endless stream of `click` events. Until UXP fixes this, add guard logic that stops the loop or switch to a native widget. (PS-57264)
- Arrow keys do not currently operate dropdowns; a later update should fix this.
- The `location` attribute on `sp-tooltip` may look like it positions the tooltip against its attachment, but it does not. Instead, the attribute controls which direction the tooltip's "tip" points. With `location` set to `bottom`, the tip points upward on the assumption that your code already put the tooltip beneath the control. (PS-56708) _A future release is expected to improve tooltip handling_.
- A numeric `sp-textfield` may report numeric validation errors even for values that appear valid. This is planned for a future release. Separately, valid-range limits come from a broader Photoshop numeric-field issue. (PS-57698)

## Events

- `uxpshowpanel` and the matching `show` callback fire only the first time the panel becomes visible. They do not fire again. A future fix is planned. (PS-57284)
- `uxphidepanel` and the matching `hide` callback do not fire at all, even after the panel becomes invisible. A future fix is planned. (PS-57284)
- Interactive elements consume most events.
- `keypress` is not currently supported.

## HTML Elements

- Each `<option>` tag needs a `value` attribute; otherwise reading the `select` element's `value` property returns `undefined`.
- `<select value="â€¦"/>` does not mark that value as selected. Instead, reference the element and call `setAttribute("value", â€¦)`, or put the `selected` attribute directly on the `option` tags.
- Without an explicit width on a `form`, block elements inside it might not span the full width. Workaround: set a width on every `form` element.
- `form` elements support only `method="dialog"`. They do not automatically submit data to a URL.
- Custom tab order cannot currently be specified.
- `rows` and `cols` cannot control a `<textarea>` size. Use CSS `height` and `width` styles instead.
- HTML5 input validation is not supported.
- Failed image loads do not display a replacement "broken icon" image.
- `defaultValue` is not accepted by input elements.
- `disabled` attributes are unavailable on `<option>` tags.
- `<label for="id"/>` is not supported. Put the control inside `<label>` instead.
- `<input type="file" />` has no support.
- `<input type="color" />` has no support.
- In UXP v3.1.0, unitless `width` and `height` attribute values are not supported. Use `px`, or set the values through CSS styles.
- In UXP v3.1.0 mode, `<label>` uses `inline-flex` layout semantics with `flex-wrap: wrap`. To keep these elements from wrapping, apply `flex-wrap: nowrap`. The default layout behavior is now _horizontal_ rather than _vertical_.
- `<progress>` is not theme aware.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then return it to `password` on `blur`.

## Layout

- For wrapped inline text, borders, outlines, and backgrounds are applied only to the first line. Put those visual treatments on elements that use block layout semantics.
- Combining inline text and UI controls generally produces awkward visual alignment. `vertical-align` exists, but baseline layout may not behave as expected, so aligning labels and widgets can be difficult. Use `flex` or `inline-flex` when UI elements are involved.

## CSS

- `baseline` alignment exists, but current bugs make it unreliable for now.
- The CSS `font` shorthand rule has no support.
- `text-transform` has no support,
- CSS transitions and animations are unavailable.
- Setting `border-color` to `unset` may fail to restore the initial color.
- To override the color of an anchor link, target it with the `a[href]` selector.

## DOM

- Closing a dialog leaves it in the DOM. That matches the specification. To remove it from the DOM, call `HTMLDialogElement#remove` explicitly.
- When HTML is applied through `innerHTML`, Photoshop currently parses event handlers and scripts, while XD does not. **DO NOT RELY ON THIS BEHAVIOR** because it will probably disappear later and align with XD's by-design behavior.
- On `Windows`, these **Canvas** APIs are not working: createLinearGradient(), createRadialGradient(), and clearRect().

## Network I/O

- On macOS, secure Websockets cannot use self-signed certificates.
- Extension support is absent from Websockets.
- XHR sends binary content only through an ArrayBuffer -- Blob is not supported.
- Cookie support is absent from XHR.

## File I/O

- `require("uxp").storage.fileTypes.images` is not meant to list every host-supported image type. The array contains several common image formats instead. Pass your own array when you need a particular set of file types. (PS-57601)
- [Universal Windows Platform (UWP)](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide) enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions), and UXP FSAPI can run into access problems with anonymous filepaths. For cross-platform compatibility, XD does not support this feature.
- The native UXP FSAPI layer uses [libUV](https://libuv.org/), except for UWP-powered features such as FilePicker and Drag&Drop on Win10 XD.

## Debugging

- If private fields or methods appear while debugging, do not try to depend on them. Plugins that reference private APIs can be rejected or removed from the Plugin Marketplace, and they are likely to break without warning.
