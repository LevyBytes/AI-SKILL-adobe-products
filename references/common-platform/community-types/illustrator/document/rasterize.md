# Document.rasterize

Community declaration reference: Illustrator/2022.

Convert source art(s) to raster form inside the supplied clip bounds; rasterization removes the original source art(s).
@param sourceArt Page item(s) selected for rasterization.
@param clipBounds Artwork rectangle to rasterize; when omitted, the source art(s) bounds are used.
@param options Rasterization settings to apply.

```typescript
declare class Document {
    rasterize(sourceArt: any, clipBounds?: Rect, options?: RasterizeOptions): RasterItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
