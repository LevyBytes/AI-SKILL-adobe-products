# Document.skewSelection

Community declaration reference: Animate/22.0.

Skews the selection by the specified amount. The effect matches using the Free Transform tool to skew an object.
@param xSkew Floating-point number giving the x skew amount, in degrees.
@param ySkew Floating-point number giving the y skew amount, in degrees.
@param whichEdge String identifying the edge where transformation occurs; when omitted, skew uses the transformation point. Allowed values: "top center", "right center", "bottom center", and "left center". Optional.

```typescript
declare class Document {
    skewSelection(xSkew: number, ySkew: number, whichEdge?: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
