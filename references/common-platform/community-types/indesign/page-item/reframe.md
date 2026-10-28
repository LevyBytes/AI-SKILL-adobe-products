# PageItem.reframe

Community declaration reference: InDesign/2023.

Moves the page item's bounding box.
@param in_ Bounding box to resize. Accepted forms include a CoordinateSpaces enumerator or an Ordered array whose entries are coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
@param opposingCorners Opposing corners for the new bounding box in the selected coordinate space.

```typescript
declare class PageItem {
    reframe(in_: any, opposingCorners: any[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
