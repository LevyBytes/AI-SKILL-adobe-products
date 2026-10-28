# Document.setSelectionBounds

Community declaration reference: Animate/22.0.

Moves and resizes the selection with one operation.
A bContactSensitiveSelection value is scoped to this call and does not update the document's Contact Sensitive selection mode (see fl.contactSensitiveSelection).
@param boundingRectangle Rectangle giving the selection's new location and size. For the boundingRectangle format, see document.addNewRectangle().
@param bContactSensitiveSelection Boolean choosing enabled (true) or disabled (false) Contact Sensitive selection mode during object selection. Default setting: off.

```typescript
declare class Document {
    setSelectionBounds(boundingRectangle: SimpleShape, bContactSensitiveSelection?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
