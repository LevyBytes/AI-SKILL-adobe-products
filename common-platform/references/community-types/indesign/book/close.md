# Book.close

Community declaration reference: InDesign/2023.

Closes the Book.
@param saving Whether Book changes should be saved before closing.
@param savingIn File used to save the Book.
@param versionComments Comment attached to this version.
@param forceSave Whether to force saving a version.

```typescript
declare class Book {
    close(saving?: SaveOptions, savingIn?: File, versionComments?: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
