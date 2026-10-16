# Document.selection

app.activeDocument.selection

### Description

Returns references to objects in the current document selection, or null when the selection is empty.

With an active insertion point inside a selected text art item's contents, the return value is a reference to that insertion point. When characters are selected inside a text art item's contents, Illustrator returns a reference to that text range instead.

### Type

Array of objects.
