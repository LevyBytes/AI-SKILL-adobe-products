# Book.save

Community declaration reference: InDesign/2023.

Saves the book.
@param to File path. Note: required only when the book has not already been saved. If it has already been saved, supplying a path saves a copy and closes the original book.
@param versionComments Comment attached to this version.
@param forceSave When true, forces saving a version.

```typescript
declare class Book {
    save(to: File, versionComments: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
