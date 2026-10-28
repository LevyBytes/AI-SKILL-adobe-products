# Document.addNewPrimitiveOval

Community declaration reference: Animate/22.0.

Creates an oval primitive within the specified bounds. This follows Oval Primitive tool behavior, applying the document's current stroke and fill defaults and placing the primitive on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, the call has no effect.
@param boundingRectangle Rectangle defining the bounds for the new oval primitive. For the boundingRectangle format, see document.addNewRectangle().
@param bSuppressFill Boolean that creates the oval without a fill when true. Defaults to false; optional.
@param bSuppressStroke Boolean that creates the oval without a stroke when true. Defaults to false; optional.

```typescript
declare class Document {
    addNewPrimitiveOval(
        boundingRectangle: SimpleShape,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
