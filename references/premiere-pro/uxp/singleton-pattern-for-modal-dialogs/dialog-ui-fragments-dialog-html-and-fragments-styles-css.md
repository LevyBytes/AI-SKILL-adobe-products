# Dialog UI: `fragments/dialog.html` and `fragments/styles.css`

Dialog markup lives under `fragments/`. The outer `<div>` keeps the fragment portable; `dialog-elements.js` creates its containing `<dialog>` element dynamically.

Styles are scoped so they do not collide with panel styling. The `<dialog>` element gets a `modal-dialog` class, and the CSS targets descendants under that class. Without this, generic selectors such as `.wrapper` or `.row` could conflict between the panel and dialog.
