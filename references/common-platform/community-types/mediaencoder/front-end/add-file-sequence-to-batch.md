# FrontEnd.addFileSequenceToBatch

Community declaration reference: MediaEncoder/23.0.

Adds an image sequence to the batch, with images ordered alphabetically.
@param containingFolder Folder that contains the image files.
@param imagePath Adds all images from containingFolder that share this extension into the output file.
@param presetPath Optional. When presetPath is empty, the default preset is used.
@param outputPath Optional. When outputPath is empty, the output file name is derived from containingFolder.
@returns True when the item is added to the batch; otherwise false.

```typescript
declare interface FrontEnd {
    addFileSequenceToBatch(
      containingFolder: string,
      imagePath: string,
      presetPath?: string,
      outputPath?: string,
      ): boolean
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
