# User Interface

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
