# FLfileClass.getCreationDateObj

Community declaration reference: Animate/22.0.

Builds a JavaScript Date object from the specified file or folder's creation timestamp.
@returns JavaScript Date object for the specified file or folder's creation timestamp. When the file is absent, the object indicates a midnight GMT creation time on December 31, 1969.
@param fileOrFolderURI String in file:/// URI form identifying the file or folder whose creation timestamp should come back as a JavaScript Date object.

```typescript
declare class FLfileClass {
    getCreationDateObj(fileOrFolderURI: string): Date
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
