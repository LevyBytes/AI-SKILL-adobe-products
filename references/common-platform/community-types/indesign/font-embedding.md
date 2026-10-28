# FontEmbedding

Community declaration reference: InDesign/2023.

Font-embedding choices for an EPS export.

```typescript
declare enum FontEmbedding {
    /**
    - Places every font in the output once for each page.
      */
      COMPLETE = 2003332197,
    /**

    - Includes font references only.
      */
      NONE = 1852796517,
    /**

    - Includes just the document's used characters (glyphs), downloaded once on each page.
      */
      SUBSET = 1768842098,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
