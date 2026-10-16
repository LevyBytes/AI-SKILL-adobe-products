# Library.newFolder

Community declaration reference: Animate/22.0.

Creates a folder with the provided name, or the default name "untitled folder #" when folderName is not supplied, in the currently selected folder.
@returns Boolean result: true means the folder was created successfully; false means creation failed.
@param folderPath String naming the folder to create. When this value is a missing path, Flash creates that path. Optional.

```typescript
declare class Library {
    newFolder(folderPath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
