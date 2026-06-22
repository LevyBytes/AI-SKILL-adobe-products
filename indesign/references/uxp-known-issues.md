# Known Issues

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

This page records issues that are already known. Recheck it after later updates, because fixes will arrive over time and additional issues may also be found.

## General Issues

- Plugin icons can use SVG files, but because UXP does not implement every SVG feature, test an SVG icon before you ship a plugin that uses one in the Plugin Panel.
- Delaying `require("uxp").entrypoints.setup()` instead of calling it as the plugin starts can produce an error that cannot be caught. The timing appears tied to how soon the `setup` function runs compared with the first frames drawn to the display. Very short delays, under roughly ~20ms, will probably still work; longer delays are more likely to fail. A delayed call should not throw, and a future release will correct this. (PS-57605)
- Panel-less plugins throw errors when they try to use the UXP clipboard APIs. A later release will correct this behavior. (UXP-15542)

## User Interface

- `z-index` works, but widgets with text-editing behavior cannot be covered by another element. Text fields and text areas render their text editor _above_ all other content in that panel or dialog, so place overlay content in popovers or hide the text-editing element while something must appear over it.
- `window.devicePixelRatio`, along with `element.uxpContainer.devicePixelRatio`, always reports `1`. That result is wrong and is planned for correction. Also remember that `window.devicePixelRatio` is not guaranteed to equal an element's pixel ratio when the element appears on a display whose pixel ratio differs from the primary display.
- UXP does not handle every SVG file. Its SVG renderer is meant for simple icon-style artwork, so complex SVG files can be incomplete or render unexpectedly. The renderer is expected to improve later.
- Grayscale-mode images occupy DOM space but fail to appear on screen.
- After the mouse cursor changes in UWP, it may fail to return to the prior cursor state.
- macOS text fields cannot open the emoji selector.
- Many SVGs are known to render oddly in the UI. Future updates will address these problems, and reports about failing SVGs, including the fixes you used, are welcome.
- In a scroll view on macOS, tab navigation does not automatically scroll the view to bring the target control into view.
- On Windows 10, emojis use the current font color rather than their own emoji colors.
- A panel control that is disabled and then re-enabled stops being reachable with TAB. Controls added _after_ the first panel display may be affected too.
- Drag and Drop is not available at this time.
- The `Save` dialog opened through `getFileForSaving` appears _behind_ plugin panels. The `Open` and `Folder` dialogs can sometimes behave the same way on both macOS and Windows. A future release will fix this. (PS-57708)
- For `<img>` tags inside a `<dialog>`, set an explicit `width` and `height` on either the image or the dialog. Without those dimensions, the dialog tries to shrink to the smallest size, while images begin at 0x0 until at least one display frame renders. That combination can make the dialog appear at an incorrect size.
- `<img>` tags currently ignore embedded rotation metadata.

## Spectrum UXP Components

- Buttons do not show a visual focus state when focus comes from the keyboard.
- Give each `sp-dropdown` element a set width. If no width is set, the dropdown sizes itself from the current selection, which can make menu items look truncated, wrapped, or otherwise misformatted.
- macOS does not allow reading password field values. As a workaround, change `type` to `text` on `focus`, then restore `password` on `blur`.
- A Spectrum UXP control, including a button, can trigger an endless chain of `click` events when it opens a file picker or browser. Until UXP fixes this, guard your code against the loop or use a native widget instead. (PS-57264)
- Dropdowns currently ignore arrow-key input; a future update will fix this.
- The `location` attribute on `sp-tooltip` may look like it positions the tooltip relative to the attached element, but that is not its actual role. It sets the direction of the tooltip's tip. When `location` is `bottom`, the tip points upward because the tooltip is expected to have been placed below the control beforehand. (PS-56708) _Improved tooltip handling is planned for a future release_.
- Numeric `sp-textfield` controls can raise numeric validation errors even for values that appear valid. A future release will address this. Photoshop's broader numeric-field range limitation is a separate issue. (PS-57698)

## Events

- `uxpshowpanel` and the matching `show` callback fire only the first time the panel becomes visible. They do not fire again. This is planned for a future fix. (PS-57284)
- `uxphidepanel` and the matching `hide` callback do not fire, including when the panel becomes invisible. This is planned for a future fix. (PS-57284)
- Interactive elements consume most events.
- `keypress` is not supported yet.

## HTML Elements

- Every `<option>` tag needs a `value` attribute; otherwise, reading the `select` element's `value` property returns `undefined`.
- `<select value="…"/>` does not mark that value as selected. Instead, reference the element and call `setAttribute("value", …)`, or put the `selected` attribute on the relevant `option` tags.
- Without an explicit width on a `form`, block elements inside it may not stretch across the full width. Workaround: set a width on all `form` elements.
- `form` elements accept only `method="dialog"`. They do not automatically submit to a URL.
- Tab order cannot currently be specified.
- `rows` and `cols` do not control the size of a `<textarea>`. Set CSS `height` and `width` styles instead.
- HTML5 input validation is unavailable.
- Failed image loads do not show a replacement "broken icon" image.
- Input elements ignore `defaultValue`.
- `<option>` tags do not accept `disabled` attributes.
- `<label for="id"/>` is unavailable. Put the control inside `<label>` instead.
- `<input type="file" />` is unavailable.
- `<input type="color" />` is unavailable.
- UXP v3.1.0 does not support unitless `width` and `height` attributes. Use `px` or CSS styles.
- In UXP v3.1.0 mode, `<label>` follows `inline-flex` layout semantics with `flex-wrap: wrap` enabled. To stop wrapping, apply `flex-wrap: nowrap` to those elements. The default layout behavior is now _horizontal_, not _vertical_.
- `<progress>` does not adapt to the active theme.
- macOS does not allow reading password field values. As a workaround, change `type` to `text` on `focus`, then restore `password` on `blur`.

## Layout

- For wrapped inline text, borders, outlines, and backgrounds are applied only to the first line. Put those visual treatments on block-layout elements instead.
- UI controls mixed with inline text usually produce poor visual alignment. Although `vertical-align` exists, baseline layout can behave differently than expected, making widgets and labels hard to line up. Use `flex` or `inline-flex` when UI elements are involved.

## CSS

- `baseline` alignment exists but is currently unreliable; avoid depending on it for now.
- The CSS `font` shorthand rule is unavailable.
- `text-transform` is unavailable,
- CSS transitions and animations are unavailable.
- Applying `unset` to `border-color` may fail to restore the initial color.
- To override the color of an anchor link, target it with the `a[href]` selector.

## DOM

- Closing a dialog leaves it in the DOM, which follows the specification. To remove it from the DOM, explicitly call `HTMLDialogElement#remove`.
- HTML assigned through `innerHTML` currently has event handlers and scripts parsed in Photoshop, while XD does not parse them. **DO NOT RELY ON THIS BEHAVIOR** because it is likely to disappear later and align with XD's intentional behavior.
- These **Canvas** APIs do not work on `Windows`: createLinearGradient(), createRadialGradient() and clearRect().

## Network I/O

- macOS does not allow secure Websockets with self-signed certificates.
- Websockets have no extension support.
- XHR sends binary data only with an ArrayBuffer; Blob is unsupported.
- XHR has no cookie support.

## File I/O

- `require("uxp").storage.fileTypes.images` is not meant to enumerate every image type a host can support. The array contains common image formats instead. Pass your own array when you need specific file types. (PS-57601)
- [Universal Windows Platform (UWP)](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)
  uses strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
  and UXP FSAPI can run into access problems with anonymous filepaths. For cross-platform compatibility, XD does not support this feature.
- UXP FSAPI's native layer is based on [libUV](https://libuv.org/), except for UWP powered features such as FilePicker and Drag&Drop on Win10 XD.

## Debugging

- If a debugging session reveals private fields or methods, leave them unused. Plugins that reference private APIs risk rejection or removal from the Plugin Marketplace and may break without warning.
