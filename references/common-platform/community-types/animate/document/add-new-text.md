# Document.addNewText

Community declaration reference: Animate/22.0.

Inserts a text field and can place text in it. When text is omitted, document.setTextString() can fill the field later.
@param boundingRectangle Size and location for the text field. For the boundingRectangle format, see document.addNewRectangle().
@param text Optional string to place in the field. When omitted, the Tools panel selection changes to the Text tool. Pass text if you do not want the selected tool to change.

```typescript
declare class Document {
    addNewText(boundingRectangle: SimpleShape, text?: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
