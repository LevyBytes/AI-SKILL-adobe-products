# FLfileClass.remove

Community declaration reference: Animate/22.0.

Deletes the specified file or folder. When a folder contains files, those files are deleted too. Files carrying the R (read-only) attribute cannot be deleted.
@returns Boolean true on success; false otherwise.
@param folderOrFolderURI String in file:/// URI form identifying the file or folder to remove (delete).

```typescript
declare class FLfileClass {
    remove(folderOrFolderURI: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
