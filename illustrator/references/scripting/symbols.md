# Symbols

In Illustrator, symbols are art items stored in the Symbols panel.

Scripts can create, delete, and duplicate symbol objects.

When a script creates symbol objects, Illustrator adds those objects to the Symbols panel for the document being targeted.

A symbol item is a document instance of a symbol object. Every symbol item remains linked to its symbol definition, so edits to the definition update every instance.

Scripts can create, delete, and duplicate symbol items. Since symbol items are Illustrator art items, scripts can handle them the same way they handle other art items or page items.

Symbol items support operations such as rotate, resize, select, lock, hide, and other actions.

app.activeDocument.symbols

### Description

Holds the document's collection of Symbol objects.
