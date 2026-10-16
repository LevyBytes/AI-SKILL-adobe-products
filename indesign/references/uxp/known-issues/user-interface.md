# User Interface

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
