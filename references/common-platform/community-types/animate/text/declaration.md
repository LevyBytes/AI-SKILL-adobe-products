# Text declaration

Community declaration reference: Animate/22.0.

Text represents one text item in a document, and its properties apply across the complete text block.
For properties on an individual text run inside the text field, consult the Property summary for the TextAttrs object. To adjust a selection inside a text field, call document.setElementTextAttr() with a text range or operate on the current selection.
For general properties on the selected text field, use document.setElementProperty(). This example assigns 50 to the x value of the selected text field's registration point:
fl.getDocumentDOM().setElementProperty("x", 50);

Declaration: `declare class Text extends Element`.

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
