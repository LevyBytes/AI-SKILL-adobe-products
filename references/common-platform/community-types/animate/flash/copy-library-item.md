# Flash.copyLibraryItem

Community declaration reference: Animate/22.0.

Copies a library item from a document without showing the item in the Flash Pro user interface. Use document.clipPaste() to paste the item into the new document.
@returns Boolean result: true when the copy succeeds; otherwise false.
@param fileURI String expressed as a file:/// URI, containing the path to the FLA or XFL file.
@param libraryItemPath String path for the library item that should be copied.

```typescript
declare class Flash {
    copyLibraryItem(fileURI: string, libraryItemPath: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
