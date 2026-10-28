# Page.reframe

Community declaration reference: InDesign/2023.

Changes the page item's bounding box.
@param in_ Bounding box to resize. Accepts a CoordinateSpaces enumerator or an ordered array containing coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
@param opposingCorners New box corners, expressed in that coordinate space.

```typescript
declare class Page {
    reframe(in_: any, opposingCorners: any[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
