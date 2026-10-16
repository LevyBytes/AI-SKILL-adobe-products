# Document.resizeImage

Community declaration reference: Photoshop/2015.5.

Resizes the image.
@param width Desired image width.
@param height Desired image height.
@param resolution Resolution in pixels per inch.
@param resampleMethod Downsampling method.
@param amount Preserve details noise value (range: 0 - 100)

```typescript
declare class Document {
    resizeImage(
      width?: UnitValue | number,
      height?: UnitValue | number,
      resolution?: number,
      resampleMethod?: ResampleMethod,
      amount?: number,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
