# Document.addNewPrimitiveRectangle

Community declaration reference: Animate/22.0.

Creates a rectangle primitive within the specified bounds. This follows Rectangle Primitive tool behavior, applying the document's current stroke and fill defaults and placing the primitive on the current frame and layer. If bSuppressFill and bSuppressStroke are both true, the call has no effect.
@param boundingRectangle Rectangle defining the bounds for the new rectangle primitive. For the boundingRectangle format, see document.addNewRectangle().
@param roundness Integer from 0 through 999 indicating the point count used for corner rounding.
@param bSuppressFill Boolean that creates the rectangle without a fill when true. Defaults to false; optional.
@param bSuppressStroke Boolean that creates the rectangle without a stroke when true. Default: false; omit when not needed.

```typescript
declare class Document {
    addNewPrimitiveRectangle(
        boundingRectangle: SimpleShape,
        roundness: number,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
