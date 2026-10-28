# Document.crop

Community declaration reference: Photoshop/2015.5.

Crops the Document.
@param bounds Crop area.
@param angle Cropping bounds angle.
@param width Output Document width.
@param height Output Document height.

```typescript
declare class Document {
    crop(
      bounds: UnitRect,
      angle?: number,
      width?: UnitValue | number,
      height?: UnitValue | number,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
