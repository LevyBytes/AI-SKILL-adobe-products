# MonoBitmapCompression

Community declaration reference: InDesign/2023.

Compression amount and type for monochrome bitmap images.

```typescript
declare enum MonoBitmapCompression {
    /**
    - Applies CCITT Group 3 compression.
      */
      CCIT3 = 1128879155,
    /**

    - Applies CCITT Group 4 compression.
      */
      CCIT4 = 1128879156,
    /**

    - Applies no compression.
      */
      NONE = 1852796517,
    /**

    - Applies Run Length compression.
      */
      RUN_LENGTH = 1919839299,
    /**

    - Applies ZIP compression.
      */
      ZIP = 2053730371,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
