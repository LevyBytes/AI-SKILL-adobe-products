# Document.scaleSelection

Community declaration reference: Animate/22.0.

Scales the selection by the specified amount. This matches using the Free Transform tool to scale an object.
@param xScale Floating-point value giving the amount of x scaling.
@param yScale Floating-point value giving the amount of y scaling.
@param whichCorner String selecting the edge used for the transformation. If omitted, scaling is around the transformation point. Allowed values: "bottom left", "bottom right", "top right", "top left", "top center", "right center", "bottom center", and "left center". Optional.

```typescript
declare class Document {
    scaleSelection(xScale: number, yScale: number, whichCorner?: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
