# Awaiting an InDesign UXP dialog


In an InDesign UXP script, await the dialog promise. The example image requires access to its external HTTPS host. Listeners are installed before showing the dialog; close resolves, cancellation rejects, and both remove the dialog.

The complete program is in the [upstream source](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/018e7a2b06e5c45ebe488b209c81aa78ca5af9a5/src/pages/resources/recipes/tbd-promise.md). Adobe removed this unfinished recipe from its documentation on 2026-10-05; the link keeps its last version. Correct these defects when adapting it:

- Settle the promise exactly once. In the `cancel` handler call `event.preventDefault()` and reject with an `Error`, not a string, and guard settling with a flag so the `close` that follows cannot also resolve it.
- When the promise settles, remove the `click`, `cancel` and `close` listeners and detach the dialog from `document.body`. The source leaves a dialog element behind on every run.
- Register the listeners before calling `showModal()`, and find the close button with `dialog.querySelector("#close")` instead of a document-wide `getElementById`.
- Keep `await showDialog()` as the script's last statement so the UXP script stays alive until the dialog settles.

[https://javascript.info/promise-basics](https://javascript.info/promise-basics)

## See also

- [Characters](../document-model/characters/reference-index.md)
