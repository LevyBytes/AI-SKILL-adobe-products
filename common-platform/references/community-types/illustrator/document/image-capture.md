# Document.imageCapture

Community declaration reference: Illustrator/2022.

Captures artwork within the clip bound as a raster image and writes that image data to the target image file.
@param imageFile Specifies the file to which the captured image should be written.
@param clipBounds Rectangular artwork region to capture; when omitted, the full artwork bound is captured.
@param options Image capture options.

```typescript
declare class Document {
    imageCapture(imageFile: File, clipBounds?: Rect, options?: ImageCaptureOptions): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
