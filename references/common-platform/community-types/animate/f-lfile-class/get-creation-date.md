# FLfileClass.getCreationDate

Community declaration reference: Animate/22.0.

Reports the number of seconds between January 1, 1970 and the moment the file or folder was created. This method is mainly useful when comparing creation and modification times for files or folders.
@returns String containing a hexadecimal number for the seconds elapsed between January 1, 1970 and the file or folder creation time, or "00000000" when the file or folder is absent.
@param fileOrFolderURI String in file:/// URI form identifying the file or folder whose creation timestamp should come back as hexadecimal text.

```typescript
declare class FLfileClass {
    getCreationDate(fileOrFolderURI: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
