# Known Issues

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

This page tracks known issues. Check later updates because existing known issues may be fixed and additional issues may be found over time.

## General Issues

- Plugin icons can use SVG files, but UXP does not implement every SVG feature. Test any SVG icon before releasing a plugin that places SVG icons in the Plugin Panel.
- Delaying `require("uxp").entrypoints.setup()` instead of calling it right at plugin startup can produce an uncatchable error. The behavior seems tied to how soon the `setup` function runs relative to the first rendered frames. Short delays below about ~20ms are likely to succeed, while longer delays are more likely to fail. Calling this function later should not throw, and a future release will correct it. (PS-57605)
- Panel-less plugins currently throw errors when using the UXP clipboard APIs. A future release will correct this. (UXP-15542)

## User Interface

- `z-index` is available, but widgets with text-editing capability cannot be covered by another element. Text fields and text areas always draw the text editor _above_ all other content in the same panel or dialog. To place content above them, render that content in popovers or hide the text-editing element.
- `window.devicePixelRatio`, along with `element.uxpContainer.devicePixelRatio`, always returns `1`. That result is wrong and is planned for correction. Also, `window.devicePixelRatio` may differ from an individual element's pixel ratio when that element appears on a display whose ratio differs from the primary display.
- UXP supports only some SVG files. Because the SVG renderer targets simple icons and similar assets, complex SVGs may render incompletely or in unexpected forms. The renderer is expected to improve later.
- Grayscale-mode images take DOM space but do not become visible to the user.
- In UWP, a changed mouse cursor may fail to return to its original state.
- macOS text fields cannot open the emoji selector.
- UI rendering issues are known for many SVGs. Future releases will address these problems, and reports about failing SVGs plus the fixes used are still useful.
- When tabbing in a scroll view, macOS does not automatically scroll the view to bring the target control into view.
- On Windows 10, emojis render with the font color instead of using emoji colors.
- Once a panel control is disabled and then enabled, TAB can no longer reach it. Controls added _after_ a panel first appears may also be affected.
- Drag and Drop is not currently supported.
- When `getFileForSaving` opens the `Save` dialog, that dialog appears _behind_ plugin panels. The `Open` and `Folder` dialogs can occasionally behave the same way on both macOS and Windows. A future release will correct this. (PS-57708)
- If `<img>` tags appear inside a `<dialog>`, give the images or the dialog an explicit `width` and `height`. Without those dimensions, the dialog may shrink to the smallest possible size because images start at 0x0 until at least one frame renders, which can display the dialog at the wrong size.
- Embedded rotation information is not currently handled by `<img>` tags.

## Spectrum UXP Components

- Buttons do not show keyboard focus.
- Give `sp-dropdown` elements an explicit width; otherwise each one sizes itself from the currently selected item, which can make dropdown items truncate, wrap, or format oddly.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then change it back to `password` on `blur`.
- When a Spectrum UXP control such as a button opens a file picker or browser, it can cause an endless stream of `click` events. Until UXP fixes this, add logic that blocks the loop or use a native widget instead. (PS-57264)
- Dropdowns do not currently respond to arrow keys; a future update will correct this.
- For `sp-tooltip`, the `location` attribute may look like it positions the tooltip relative to the attached control. Instead, it controls the tooltip's "tip" direction. With `location` set to `bottom`, the tip points upward; this assumes your code has positioned the tooltip below the control already. (PS-56708) _Future releases will improve tooltip handling_.
- Numeric `sp-textfield` controls can raise numeric validation errors even when the entered value appears valid. A future release will address this. Valid-range limits are a separate issue tied to numeric fields in Photoshop overall. (PS-57698)

## Events

- `uxpshowpanel` and the matching `show` callback run only the first time the panel becomes visible. They do not fire again. A future release will correct this. (PS-57284)
- `uxphidepanel` and the matching `hide` callback do not run, even when the panel becomes invisible. A future release will correct this. (PS-57284)
- Interactive elements swallow most events.
- `keypress` is not currently supported.

## HTML Elements

- `<option>` tags _must_ include a `value` attribute; otherwise reading the `select` element's `value` property returns `undefined`.
- `<select value="…"/>` does not mark that value as selected. Instead, reference the element and call `setAttribute("value", …)`, or set the `selected` attribute on the `option` tags.
- Without a specified width on a `form`, block elements inside it may not fill the full width. Workaround: always define a width for `form` elements.
- `form`s support only `method="dialog"` and do not automatically submit to a URL.
- Tab order cannot currently be specified.
- A `<textarea>` cannot be sized with `rows` or `cols`; use CSS `height` and `width`, respectively.
- HTML5 input validation is not supported.
- Failed image loads do not display a replacement "broken icon" image.
- Input elements ignore `defaultValue`.
- `disabled` attributes are unavailable on `<option>` tags.
- `<label for="id"/>` is not supported. Put the control inside `<label>` instead.
- UXP does not support `<input type="file" />`.
- UXP does not support `<input type="color" />`.
- In UXP v3.1.0, unitless `width` and `height` attribute values are unsupported. Use `px` or CSS styles.
- In UXP v3.1.0 mode, `<label>` uses `inline-flex` layout semantics with `flex-wrap: wrap` enabled. To block wrapping, apply `flex-wrap: nowrap` to these elements. By default, layout now runs _horizontal_ rather than _vertical_.
- `<progress>` does not respond to theme.
- macOS does not allow password field values to be read. As a workaround, set `type` to `text` on `focus`, then change it back to `password` on `blur`.

## Layout

- For wrapped inline text, borders, outlines, and backgrounds apply only to the first line. Put those visual treatments on elements that use block layout semantics.
- Combining inline text with UI controls usually does not look good. `vertical-align` is supported, but baseline layout can behave differently than expected, making widgets and labels hard to align correctly. Use `flex` or `inline-flex` when working with UI elements.

## CSS

- `baseline` alignment is supported but unreliable, so avoid depending on it for now.
- The CSS `font` shorthand rule is unsupported.
- `text-transform` is unsupported,
- CSS transitions and animations have no support.
- Setting `border-color` to `unset` may fail to restore the initial color.
- To override an anchor link color, use `a[href]` as the selector.

## DOM

- Closing a dialog does not remove it from the DOM. That behavior follows the spec. To remove the dialog from the DOM, call `HTMLDialogElement#remove` explicitly.
- Applying HTML through `innerHTML` currently parses event handlers and scripts in Photoshop, but not in XD. **DO NOT RELY ON THIS BEHAVIOR**, because it will probably be removed later and align with XD's intentional behavior.
- These **Canvas** APIs are not working on `Windows` - createLinearGradient(), createRadialGradient() and clearRect().

## Network I/O

- Secure Websockets on macOS cannot use self-signed certificates.
- Extensions are unsupported for Websockets.
- For binary content, XHR requires an ArrayBuffer -- Blob is not supported.
- XHR does not support cookies.

## File I/O

- `require("uxp").storage.fileTypes.images` contains a list of image types, but it is not meant to enumerate every image type the host supports. The array covers common image types; provide your own array when you need a custom file-type set. (PS-57601)
- [Universal Windows Platform (UWP)](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)
  enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
  and anonymous filepaths can cause access trouble for UXP FSAPI. XD omits this feature to maintain platform compatibility.
- The UXP FSAPI native layer uses [libUV](https://libuv.org/) except for UWP-powered features, including FilePicker and Drag&Drop on Win10 XD.

## Debugging

- If debugging reveals private fields or methods, do not use them. Plugins that reference private APIs can be rejected or removed from the Plugin Marketplace and may break without warning.
