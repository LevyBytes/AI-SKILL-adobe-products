# FLfileClass.createFolder

Community declaration reference: Animate/22.0.

Creates the requested folder path at the specified location.
Multiple folders can be made in a single call. For example, this command creates both the MyData and the TempData folders if they do not already exist:
FLfile.createFolder("file:///c|/MyData/TempData")
@returns Boolean true on success; false when folderURI already exists.
@param folderURI Folder URI identifying the folder hierarchy to create.

```typescript
declare class FLfileClass {
    createFolder(folderURI: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
