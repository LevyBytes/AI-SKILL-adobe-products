# StartParagraph

Community declaration reference: InDesign/2023.

Column and page break choices.

```typescript
declare enum StartParagraph {
    /**
    - Begins in the next open space.
      */
      ANYWHERE = 1851945579,
    /**

    - Begins at the next column top.
      */
      NEXT_COLUMN = 1667396203,
    /**

    - Begins at the next even-numbered page top.
      */
      NEXT_EVEN_PAGE = 1164993131,
    /**

    - Begins at the top of the next threaded text frame.
      */
      NEXT_FRAME = 1313235563,
    /**

    - Begins at the next odd-numbered page top.
      */
      NEXT_ODD_PAGE = 1332765291,
    /**

    - Begins at the next page top.
      */
      NEXT_PAGE = 1885500011,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
