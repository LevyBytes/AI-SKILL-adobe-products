# Document.addNewOval

Community declaration reference: Animate/22.0.

Creates an Oval object inside the specified bounding rectangle. The Oval tool behavior is reproduced: current document stroke and fill defaults are applied, and the oval is placed on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, nothing is created.
@param boundingRectangle Rectangle describing the oval bounds. For the boundingRectangle format, see document.addNewRectangle().
@param bSuppressFill Boolean that creates the shape without a fill when true. Defaults to false; optional.
@param bSuppressStroke Boolean that creates the shape without a stroke when true. Defaults to false; optional.

```typescript
declare class Document {
    addNewOval(
        boundingRectangle: SimpleShape,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
