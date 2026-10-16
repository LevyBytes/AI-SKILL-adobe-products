# Document.setSelectionRect

Community declaration reference: Animate/22.0.

Creates a rectangular selection marquee relative to the Stage with the specified coordinates. Unlike document.getSelectionRect(), this rectangle is not relative to the object being edited.
The operation matches dragging a rectangle with the Selection tool. An instance must be completely enclosed by the rectangle to be selected.
A bContactSensitiveSelection value is scoped to this call and does not update the document's Contact Sensitive selection mode (see fl.contactSensitiveSelection
Note: Repeating setSelectionRect() through the History panel or menu item repeats the step before the setSelectionRect() operation.
@param rect Rectangle object used as the selected area. For the rect format, see document.addNewRectangle().
@param bReplaceCurrentSelection Boolean choosing whether the method replaces the current selection (true) or adds to it (false). Defaults to true.
@param bContactSensitiveSelection Boolean choosing enabled (true) or disabled (false) Contact Sensitive selection mode during object selection. Defaults to false.

```typescript
declare class Document {
    setSelectionRect(
        rect: SimpleShape,
        bReplaceCurrentSelection?: boolean,
        bContactSensitiveSelection?: boolean,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
