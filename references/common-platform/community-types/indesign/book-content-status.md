# BookContentStatus

Community declaration reference: InDesign/2023.

Status choices for book content files.

```typescript
declare enum BookContentStatus {
    /**
    - Indicates another user is using the book content object, so it is locked.
      */
      DOCUMENT_IN_USE = 1148150601,
    /**

    - Indicates the book content object is open.
      */
      DOCUMENT_IS_OPEN = 1148150607,
    /**

    - Indicates the book content object changed after repagination.
      */
      DOCUMENT_OUT_OF_DATE = 1148150596,
    /**

    - Indicates the book content object cannot be found because it was moved, renamed, or deleted.
      */
      MISSING_DOCUMENT = 1148150605,
    /**

    - Indicates the book content object is closed and unchanged.
      */
      NORMAL = 1852797549,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
