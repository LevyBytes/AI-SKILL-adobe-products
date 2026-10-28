# Document.windowCapture

Community declaration reference: Illustrator/2022.

Save an image capture of the current document window as a target TIFF file.
@param imageFile TIFF file that receives the captured image.
@param windowSize Window size to use before capture.

```typescript
declare class Document {
    windowCapture(imageFile: File, windowSize: Point | [number, number]): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
