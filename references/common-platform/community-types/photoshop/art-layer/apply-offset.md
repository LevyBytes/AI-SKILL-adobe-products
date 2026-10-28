# ArtLayer.applyOffset

Community declaration reference: Photoshop/2015.5.

Runs the offset filter.
@param horizontal Pixel offset that moves the selection horizontally to the right. Range: -6144 to 6144.
@param vertical Pixel offset that moves the selection vertically downward. Range: -6144 to 6144.
@param undefinedAreas OffsetUndefinedAreas method for filling the newly empty regions.

```typescript
declare class ArtLayer extends Layer {
    applyOffset(
      horizontal: UnitValue | number,
      vertical: UnitValue | number,
      undefinedAreas: OffsetUndefinedAreas,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
