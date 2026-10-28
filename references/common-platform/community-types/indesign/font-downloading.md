# FontDownloading

Community declaration reference: InDesign/2023.

Choices for sending fonts to the printer.

```typescript
declare enum FontDownloading {
    /**
    - Sends all fonts once per page.
      */
      COMPLETE = 2003332197,
    /**

    - Sends only font references. Note: Use when fonts are already on the printer.
      */
      NONE = 1852796517,
    /**

    - Sends only document-used characters (glyphs). Glyphs are sent once per page.
      */
      SUBSET = 1768842098,
    /**

    - Sends only document-used characters (glyphs). Glyphs are sent once per page. Note: Use when the glyph count exceeds 350.
      */
      SUBSET_LARGE = 1818325607,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
