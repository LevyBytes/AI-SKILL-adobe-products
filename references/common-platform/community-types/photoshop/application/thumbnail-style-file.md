# Application.thumbnailStyleFile

Community declaration reference: Photoshop/2015.5.

PRIVATE - generates a thumbnail using a style file.
@param file Source style File.
@param dest Thumbnail File to write.
@param thumbnailSize Thumbnail size to save.
@param backgroundValue Background gray value.

```typescript
declare class Application {
    thumbnailStyleFile(file: File, dest: File, thumbnailSize?: number, backgroundValue?: number): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
