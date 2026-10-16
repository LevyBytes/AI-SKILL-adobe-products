# User Interface

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
