# ArtLayer.saveStyleFile

Community declaration reference: Photoshop/2015.5.

@param file Destination file for the style.
@param thumbnail Destination file for the style thumbnail.
@param thumbnailSize Thumbnail output size.
@param backgroundValue Gray background value.

```typescript
declare class ArtLayer extends Layer {
    saveStyleFile(
      file: File,
      thumbnail?: File,
      thumbnailSize?: number,
      backgroundValue?: number,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
