# LinkStatus

Community declaration reference: InDesign/2023.

Choices for link status.

```typescript
declare enum LinkStatus {
    /**
    - Indicates the file is embedded in the document.
      */
      LINK_EMBEDDED = 1282237028,
    /**

    - Indicates the url link cannot be accessed.
      */
      LINK_INACCESSIBLE = 1818848865,
    /**

    - Indicates the linked file has been moved, renamed, or deleted.
      */
      LINK_MISSING = 1819109747,
    /**

    - Indicates a newer version of the file exists on disk.
      */
      LINK_OUT_OF_DATE = 1819242340,
    /**

    - Indicates a normal link.
      */
      NORMAL = 1852797549,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
